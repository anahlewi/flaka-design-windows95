import { useState } from "react";
import cardDefinitions from "../card_definitions.json";

const GreenFelt = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 0.5 + 0.2,
    delay: Math.random() * 3,
    duration: Math.random() * 4 + 3,
  }));
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
      {particles.map((p) => (
        <div key={p.id} style={{
          position: "absolute", left: `${p.x}%`, top: `${p.y}%`,
          width: p.size, height: p.size, borderRadius: "50%",
          background: "rgba(255,255,255,0.1)", opacity: 0,
          animation: `shimmer ${p.duration}s ${p.delay}s infinite ease-in-out`,
        }} />
      ))}
    </div>
  );
};

const CardTile = ({ card, index }) => {
  const [flipped, setFlipped] = useState(false);

  // Get card meaning from cardDefinitions
  let meaning = null;
  if (card) {
    // API returns suit as e.g. "HEARTS", value as "7", "KING", etc.
    const suit = card.suit?.toLowerCase();
    let value = card.value?.toLowerCase();
    // Convert face cards to json keys
    if (value === "ace" || value === "king" || value === "queen" || value === "jack") {
      // already correct
    } else if (["10","9","8","7","6","5","4","3","2"].includes(value)) {
      // already correct
    } else if (value === "j") { value = "jack"; }
    if (cardDefinitions[suit] && cardDefinitions[suit][value]) {
      meaning = cardDefinitions[suit][value].meaning;
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
      }}
    >
      <div
        style={{
          position: "relative",
          width: 100,
          height: 150,
        }}
      >
        {/* Card - flips on top */}
        <div
          onClick={() => card && setFlipped(f => !f)}
          style={{
            position: "absolute",
            inset: 0,
            cursor: card ? "pointer" : "default",
            perspective: 1000,
            zIndex: 1,
          }}
          title={card ? "Click to flip" : ""}
        >
          {card && (
            <div style={{
              width: "100%", height: "100%",
              position: "relative",
              transformStyle: "preserve-3d",
              transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
              transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}>
              {/* Card Back */}
              <div style={{
                position: "absolute", inset: 0,
                backfaceVisibility: "hidden",
                borderRadius: 4,
                overflow: "hidden",
                border: "2px solid rgba(255,255,255,0.2)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                background: "#1a1a1a",
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
              }}>
                <img
                  src="https://deckofcardsapi.com/static/img/back.png"
                  alt="Card back"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* Card Front */}
              <div style={{
                position: "absolute", inset: 0,
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                borderRadius: 4,
                overflow: "hidden",
                border: "2px solid rgba(255,255,255,0.3)",
                boxShadow: "0 6px 16px rgba(0,0,0,0.5)",
                background: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <img
                  src={card.images.png}
                  alt={`${card.value} of ${card.suit}`}
                  style={{ width: "100%", height: "100%", objectFit: "fit" }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Card info below */}
      {card && (
        <div style={{
          width: 120,
          textAlign: "center",
          opacity: flipped ? 1 : 0,
          transform: flipped ? "translateY(0)" : "translateY(6px)",
          transition: "opacity 0.3s 0.2s, transform 0.3s 0.2s",
          pointerEvents: flipped ? "auto" : "none",
        }}>
          <p style={{
            fontSize: 12,
            fontWeight: 600,
            color: "rgba(255,255,255,0.9)",
            margin: 0,
            fontFamily: "'Georgia', serif",
          }}>
            {card.value} of {card.suit.charAt(0) + card.suit.slice(1).toLowerCase()}
          </p>
          {meaning && (
            <p style={{
              fontSize: 11,
              color: "#ffe",
              margin: "8px 0 0 0",
              fontStyle: "italic",
              textShadow: "1px 1px 2px #222",
            }}>{meaning}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default function TarotDraw() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [drawCount, setDrawCount] = useState(0);

  const drawCards = async () => {
    setDrawCount(prev => prev + 1);
    setLoading(true);
    setError(null);
    setCards([]);
    try {
      // Create and shuffle new deck
      const deckRes = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
      if (!deckRes.ok) throw new Error("Could not initialize deck");
      const deckData = await deckRes.json();
      const currentDeckId = deckData.deck_id;

      // Draw 3 cards for tarot spread
      const res = await fetch(`https://deckofcardsapi.com/api/deck/${currentDeckId}/draw/?count=3`);
      if (!res.ok) throw new Error("Could not draw cards");
      const data = await res.json();
      setCards(data.cards || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0%,100%{opacity:0;transform:scale(1)}50%{opacity:0.3;transform:scale(1.3)}
        }
        @keyframes dealIn {
          from{opacity:0;transform:translateY(20px) rotateZ(-15deg)}
          to{opacity:1;transform:translateY(0) rotateZ(0deg)}
        }
        @keyframes fadeIn {
          from{opacity:0}
          to{opacity:1}
        }
        @keyframes pulse {
          0%,100%{box-shadow:0 0 20px rgba(255,255,255,0.2)}
          50%{box-shadow:0 0 30px rgba(255,255,255,0.35)}
        }
        .draw-btn:hover { background: rgba(255,255,255,0.15) !important; transform: translateY(-2px); }
        .draw-btn:active { transform: scale(0.98) !important; }
        .draw-btn { transition: background 0.2s, transform 0.15s !important; }
      `}</style>

      <div style={{
        width: "100%",
        height: "100%",
        minHeight: "500px",
        background: "linear-gradient(135deg, #0f4c23 0%, #1a6b3a 50%, #0f4c23 100%)",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        fontFamily: "'Georgia', serif",
        overflow: "hidden",
        boxSizing: "border-box",
      }}>
        <GreenFelt />

        {/* Felt texture overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 50% 50%, transparent 0%, rgba(0,0,0,0.3) 100%)",
          pointerEvents: "none",
          zIndex: 0,
        }} />

        <div style={{ position: "relative", zIndex: 1, width: "100%", textAlign: "center", padding: "20px", boxSizing: "border-box" }}>
          {/* Header */}
          <div style={{ marginBottom: 20 }}>
            <h1 style={{
              fontSize: 24,
              fontWeight: 600,
              color: "#ffffff",
              margin: "0 0 6px",
              letterSpacing: "0.05em",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}>
              Card Spread
            </h1>
            <p style={{
              fontSize: 12,
              color: "rgba(255,255,255,0.7)",
              margin: 0,
              letterSpacing: "0.05em",
              fontStyle: "italic",
            }}>
              Draw 3 cards. Click each to reveal.
            </p>
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
            <button
              onClick={drawCards}
              disabled={loading}
              className="draw-btn"
              style={{
                padding: "10px 24px",
                borderRadius: 4,
                background: loading ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.2)",
                border: "2px solid rgba(255,255,255,0.3)",
                color: loading ? "rgba(255,255,255,0.5)" : "#ffffff",
                fontFamily: "'Georgia', serif",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.05em",
                cursor: loading ? "default" : "pointer",
                animation: !loading && cards.length === 0 ? "pulse 3s ease-in-out infinite" : "none",
              }}
            >
              {loading ? "Drawing…" : cards.length ? "Draw Again" : "Draw Spread"}
            </button>
          </div>

          {/* Error */}
          {error && (
            <p style={{ 
              color: "rgba(255,200,200,0.8)", 
              fontSize: 11, 
              marginBottom: 16, 
              fontFamily: "'Georgia', serif",
              fontStyle: "italic"
            }}>
              {error}
            </p>
          )}

          {/* Cards Display */}
          <div style={{
            display: "flex",
            gap: 50,
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "flex-start",
          }}>
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={`card-position-${i}-${drawCount}`}
                style={{
                  position: "relative",
                  width: 100,
                  height: 150,
                }}
              >
                {/* Placeholder - always displayed */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: 100,
                    height: 150,
                    borderRadius: 4,
                    border: "2px dashed rgba(255,255,255,0.3)",
                    background: "rgba(255,255,255,0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.3)",
                    fontSize: 24,
                    zIndex: 0,
                  }}
                >
                  ?
                </div>

                {/* Card tile */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    animation: `dealIn 0.5s ${i * 0.1}s both ease-out`,
                  }}
                >
                  <CardTile card={cards[i]} index={i} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
