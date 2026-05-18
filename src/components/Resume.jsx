import React from 'react';

const s = {
  root: {
    padding: '20px 24px',
    fontFamily: 'MS Sans Serif, Arial, sans-serif',
    fontSize: '12px',
    backgroundColor: '#FFE1D7',
    color: 'rgb(2, 89, 221)',
    lineHeight: '1.6',
    maxWidth: '800px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '16px',
    borderBottom: '2px solid #0259DD',
    paddingBottom: '10px',
  },
  name: {
    fontSize: '30px',
    fontWeight: 'bold',
    margin: '0 0 2px 0',
  },
  tagline: {
    fontSize: '12px',
    margin: '0 0 4px 0',
  },
  contact: {
    fontSize: '11px',
    margin: '0',
    color: '#0259DD',
  },
  summary: {
    marginBottom: '14px',
    fontSize: '12px',
  },
  sectionTitle: {
    fontSize: '11px',
    fontWeight: 'bold',
    letterSpacing: '2px',
    borderBottom: '1px solid #0259DD',
    paddingBottom: '2px',
    marginBottom: '10px',
    marginTop: '16px',
  },
  jobHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    flexWrap: 'wrap',
    marginBottom: '2px',
  },
  jobTitle: {
    fontWeight: 'bold',
    fontSize: '12px',
  },
  jobDate: {
    fontSize: '11px',
    color: '#0259DD',
    whiteSpace: 'nowrap',
  },
  jobCompany: {
    fontSize: '11px',
    color: '#0259DD',
    marginBottom: '4px',
  },
  ul: {
    margin: '4px 0 10px 0',
    paddingLeft: '18px',
  },
  li: {
    marginBottom: '3px',
  },
  skillRow: {
    display: 'flex',
    gap: '8px',
    marginBottom: '4px',
    flexWrap: 'wrap',
  },
  skillLabel: {
    fontWeight: 'bold',
    minWidth: '90px',
    flexShrink: 0,
  },
  skillValue: {
    flex: 1,
  },
};

const Section = ({ title }) => (
  <div style={s.sectionTitle}>{title}</div>
);

const Job = ({ title, company, date, bullets }) => (
  <div style={{ marginBottom: '12px' }}>
    <div style={s.jobHeader}>
      <span style={s.jobTitle}>{title}</span>
      <span style={s.jobDate}>{date}</span>
    </div>
    <div style={s.jobCompany}>{company}</div>
    <ul style={s.ul}>
      {bullets.map((b, i) => <li key={i} style={s.li}>{b}</li>)}
    </ul>
  </div>
);

const Resume = () => (
  <div style={s.root}>
    <div style={s.header}>
      <p style={s.name}>anah</p>
      <p style={s.tagline}> creative technologist</p>
      <p style={s.contact}>
        347.683.2433 · anahlewi@gmail.com · <a href="https://www.anah.site" target="_blank" rel="noopener noreferrer">www.anah.site</a> · New York, NY
      </p>
    </div>

    <p style={s.summary}>
      Currently building AI-powered design agents that automate
      component generation from live design systems — an early example of putting powerful tooling into creative hands.
      Five years shipping interfaces at scale at Square, owning design through implementation. Fluent in HTML, CSS,
      JavaScript, TypeScript, and React. Thrives at the intersection of design systems, front-end architecture, and the
      creative possibilities that emerge when you eliminate the handoff.
    </p>

    <Section title="E X P E R I E N C E" />

    <Job
      title="Contract Software Engineer"
      company="PruTech Technologies · Remote"
      date="Apr 2026 – Present"
      bullets={[
        'Architecting a design agent in TypeScript using constitution-file–based configuration to automate component generation from a live design system — bridging design intent and code output without manual translation.',
        'Built a Storybook scraping pipeline with Puppeteer to extract component data at scale, feeding a microfrontend architecture and enabling programmatic design-system introspection.',
        'Designed reusable agent primitives and a structured agent.md reference system to make AI-assisted workflows consistent, extensible, and legible to collaborators.',
      ]}
    />
    <Job
      title="Freelance Frontend Developer"
      company="Flaka Design Collective · Brooklyn, NY"
      date="Apr 2025 – Sep 2025"
      bullets={[
        'Led end-to-end frontend development of a custom, design-forward wedding website — translated visual direction and product requirements into a polished, accessible user experience.',
        'Owned implementation, QA, and cross-device testing; managed deployment and post-launch iterations for a production-ready experience used by hundreds of guests.',
      ]}
    />
    <Job
      title="Frontend Software Engineer L4 → Product Partner"
      company="Square, Inc · New York, NY"
      date="Mar 2022 – Mar 2025"
      bullets={[
        'Owned full design-to-implementation lifecycle on Multi-Seller platform, shaping information hierarchy and interaction patterns for internal franchise management interfaces built in React, TypeScript, Ember.js, and GraphQL.',
        "Designed and built an onboarding refinement surface for Square's Food & Beverage vertical, improving merchant categorization for 100k+ sellers — driving decisions on UX flow, progressive disclosure, and form hierarchy.",
        'Acted as product partner on high-visibility cross-functional projects, translating between stakeholder needs and technical constraints, eliminating the design–dev handoff gap.',
        'Helped establish shared interface patterns and component conventions across the Multi-Seller team, contributing to a more consistent, scalable front-end design system.',
      ]}
    />
    <Job
      title="Software Engineer L3"
      company="Square, Inc · Atlanta, GA"
      date="Feb 2020 – Mar 2022"
      bullets={[
        'Maintained and extended Seller Profile services powering 210M+ sellers; contributed to Google My Business integration, enabling sellers to manage their online presence across channels.',
        'Expanded platform internationally, launching services in Ireland, France, and Spain — adapting interfaces for localized data structures and user contexts.',
        'Enhanced external developer APIs; designed data contracts with downstream UI implications in mind.',
        'Participated in on-call rotation using Splunk, PagerDuty, Datadog, and Sentry to triage and resolve merchant-facing incidents across distributed services.',
      ]}
    />
    <Job
      title="iOS Engineer (6-month rotation)"
      company="Square, Inc · Atlanta, GA"
      date="Jul 2020 – Dec 2020"
      bullets={[
        "Designed and shipped a language-preference feature for Square's Business Information Settings, owning the full lifecycle from prototype to rollout for 33M+ app users (Swift, Objective-C).",
        'Migrated legacy Objective-C code to Swift and Square\'s internal Workflow framework; improved system coherence and reduced maintenance debt.',
      ]}
    />
    <Job
      title="Frontend Engineer Intern"
      company="23andMe · Mountain View, CA"
      date="May 2019 – Aug 2019"
      bullets={[
        'Redesigned the DNA Relatives interactive map (MapboxGL, React, Django, Sass) — improving spatial UX and data-visualization clarity; improvements shipped to 12M+ users.',
      ]}
    />
    <Job
      title="Product Management Intern"
      company="Scholastic · New York, NY"
      date="Jun 2018 – Aug 2018"
      bullets={[
        'Partnered with the Principal PM to develop technology-based educational tools for schools; wrote user stories that improved development team communication and reduced errors.',
      ]}
    />

    <Section title="S E L E C T E D  P R O J E C T S" />

    <Job
      title="Windows 95 Interactive Web Experience"
      company="Personal"
      date=""
      bullets={[
        'Engineered a retro Windows 95–style interface using React95, recreating classic UI paradigms with modern React patterns. Designed reusable components and interaction states to blend nostalgia with contemporary web performance — directly demonstrates systems thinking and historical design awareness.',
      ]}
    />
    <Job
      title="Web Computer Terminal"
      company="Personal"
      date=""
      bullets={[
        'Interactive portfolio as a browser-based terminal (React, TypeScript) with custom commands, keyboard navigation, and minimal visual language. Reached 2,000+ unique visitors within a month of sharing.',
      ]}
    />
    <Job
      title="CoPro"
      company="Academic / Team"
      date=""
      bullets={[
        'Full-stack peer-programming group tool (Flask, MySQL, Python, JS, HTML/CSS). Scoped the project, led architecture decisions, and conducted user testing.',
      ]}
    />

    <Section title="T E A C H I N G  &  C O M M U N I T Y" />
    <div style={{ marginBottom: '10px' }}>
      <div style={s.jobHeader}>
        <span style={s.jobTitle}>CS Instructor · Gymble</span>
        <span style={s.jobDate}>2023</span>
      </div>
      <p style={{ margin: '2px 0 8px 0' }}>
        Taught CS fundamentals to adult learners in a workforce development program. Designed hands-on, progressive lessons; guided students to deploy their own websites on GitHub.
      </p>
      <div style={s.jobHeader}>
        <span style={s.jobTitle}>CS Tutor · Wellesley College</span>
        <span style={s.jobDate}>2018–2019</span>
      </div>
      <p style={{ margin: '2px 0 0 0' }}>
        Led peer-mentor sessions and 1:1 tutoring; partnered with faculty on curriculum pacing feedback.
      </p>
    </div>

    <Section title="S K I L L S  &  T O O L S" />
    <div style={{ marginBottom: '10px' }}>
      {[
        ['Design', 'Information hierarchy · typography · interaction design · design systems · component libraries · information pacing · layout'],
        ['Code', 'HTML · CSS · JavaScript · TypeScript · React · Ember.js · GraphQL · Python · Swift · SQL · Sass · Puppeteer · Storybook'],
        ['AI / Agents', 'Designing and building AI-assisted workflows · agent configuration · constitution-file patterns · prompt engineering'],
        ['Workflow', 'Browser-first iteration · cross-functional collaboration · user testing · full product lifecycle · microfrontend architecture'],
      ].map(([label, value]) => (
        <div key={label} style={s.skillRow}>
          <span style={s.skillLabel}>{label}</span>
          <span style={s.skillValue}>{value}</span>
        </div>
      ))}
    </div>

    <Section title="E D U C A T I O N" />
    <div>
      <div style={s.jobTitle}>Wellesley College — BA Computer Science &nbsp;<span style={{ fontWeight: 'normal' }}>Minor: Latina/o Studies</span></div>
      <p style={{ margin: '4px 0 3px 0' }}>
        Relevant coursework: Data, Visualization &amp; Analytics · Databases with Web Interfaces · Machine Learning · Algorithms · Combinatorics &amp; Graph Theory · MIT 6.148 Web Programming Competition
      </p>
      <p style={{ margin: '0 0 3px 0' }}>Programs: Code2040 Fellow · Girls Who Code Alumnae</p>
      <p style={{ margin: '0' }}>Recognition: NCWIT Awards · Huffington Post · Study Breaks Impact Squared</p>
    </div>
  </div>
);

export default Resume;
