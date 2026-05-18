import React, { useState } from 'react';
import { Frame, Tree } from '@react95/core';

const PhotoFolder = () => {
  const [url, setUrl] = useState(null);

  const handleSelect = (id, url) => {
    setUrl(url);
  }

  const photoData = [
    {
      id: 'panama',
      label: '• panama •',
      children: [
        { id: 'panama-1', label: 'IMG_FLAG001.jpg', onClick: () => handleSelect('panama-1', 'https://cdn.cosmos.so/c902353e-9372-40f4-ab0f-9081ca5d0e4b') },
        { id: 'panama-2', label: 'IMG_FRUTA002.jpg', onClick: () => handleSelect('panama-2', 'https://cdn.cosmos.so/f4e7f722-83c8-4b39-966e-d45efa97d1ae') },
        { id: 'panama-3', label: 'IMG_TIA003.jpg', onClick: () => handleSelect('panama-3', 'https://cdn.cosmos.so/b5371fec-9b08-40aa-9fc8-b15c8bfca17e') },
      ],
    },
    {
      id: 'tokyo',
      label: '• tokyo •',
      children: [
        {id: 'tokyo-0', label: 'fits', children: [
           {id: 'fits-1', label: 'FIT_001.jpg', onClick: () => handleSelect('fits-1', 'https://cdn.cosmos.so/24a88717-7fd1-4f0d-84ae-40351a0aafc8?format=jpeg') },
           {id: 'fits-2', label: 'FIT_002.jpg', onClick: () => handleSelect('fits-2', 'https://cdn.cosmos.so/9a7b9a3c-f64d-4802-8c04-e6966ae9f1cc?format=jpeg') },
         ]},
        { id: 'tokyo-1', label: 'TOKYO_001.jpg', onClick: () => handleSelect('tokyo-1', 'https://cdn.cosmos.so/dd756f09-ae55-4954-b883-4b7cb09ef85e?format=jpeg') },
        { id: 'tokyo-2', label: 'TOKYO_002.jpg', onClick: () => handleSelect('tokyo-2', 'https://cdn.cosmos.so/e53d7caa-4e53-4181-b07f-69d2e07807e2?format=jpeg')  },
      ],
    },
    {
      id: 'wellesley',
      label: '• wellesley •',
      children: [
        { id: 'hp5-1', label: 'WABAN_001.jpg', onClick: () => handleSelect('hp5-1', 'https://cdn.cosmos.so/10fe3a61-d161-4fc2-8620-0e64ae2bdd68?format=jpeg') },
        { id: 'hp5-2', label: 'TOWER_002.jpg', onClick: () => handleSelect('hp5-2', 'https://cdn.cosmos.so/e3602b4f-83f8-4e9e-8ea3-e5bb962bb9f7?format=jpeg') },
      ],
    },
    {
      id: 'Old San Juan',
      label: '• old san juan •',
      children: [
        { id: 'old-san-juan-1', label: 'OSJ_001.jpg', onClick: () => handleSelect('old-san-juan-1', 'https://cdn.cosmos.so/images/dde1607c-81f7-40df-8ca3-86d4e1a46664?format=jpeg') },
        { id: 'old-san-juan-2', label: 'OSJ_002.jpg', onClick: () => handleSelect('old-san-juan-2', 'https://cdn.cosmos.so/images/e1d1ad97-33ec-4773-bb4a-af7816cede89?format=jpeg') },
      ],
    },
  ];

  return (
    <div className="photo-folder-container" style={{ 
      padding: '10px', 
      backgroundColor: '#c0c0c0',
      display: 'flex',
      width: '100%',
      height: '100%', 
      fontFamily: 'MS Sans Serif, Arial',
      boxSizing: 'border-box',
    }}>
      <div style={{ marginBottom: '10px', flex: '1 1 200px ' }}>
        <h3 style={{ margin: '0 0 10px 0', fontSize: '14px'}}>archives</h3>
        <Tree
          data={photoData}
        />
      </div>
      
      <Frame width="500px" bgColor="$material" boxShadow="$out" padding="$4" style={{ flex: '1 1 auto', minHeight: '0' }}>
        <Frame h="100%" bgColor="white" boxShadow="$in" >
            {url ? <img src={url} alt="Selected" style={{ width: '100%', height:"100%", display:"block", objectFit: "cover", objectPosition: "center"}} /> : 'Double-click on a photo to view it.'}
        </Frame>
      </Frame>
    </div>
  );
};

export default PhotoFolder;
