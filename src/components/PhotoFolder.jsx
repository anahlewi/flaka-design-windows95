import React, { useState } from 'react';
import { Frame, Tree } from '@react95/core';

const PhotoFolder = () => {
  const [selected, setSelected] = useState(null);
  const [url, setUrl] = useState(null);
  const [expanded, setExpanded] = useState(['root', 'kodak']);

  const handleSelect = (id, url) => {
    setSelected(id);
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
        {id: 'tokyo-0', label: 'Fits', children: [
           {id: 'fits-1', label: 'FIT_001.jpg', onClick: () => alert('Clicked FIT_001.jpg')  },
           {id: 'fits-2', label: 'FIT_002.jpg' },
         ]},
        { id: 'tokyo-1', label: 'TOKYO_001.jpg' },
        { id: 'tokyo-2', label: 'TOKYO_002.jpg' },
      ],
    },
    {
      id: 'wellesley',
      label: '• wellesley •',
      children: [
        { id: 'hp5-1', label: 'BW_001.jpg' },
        { id: 'hp5-2', label: 'BW_002.jpg' },
      ],
    },
    {
      id: 'Old San Juan',
      label: '• old san juan •',
      children: [
        { id: 'old-san-juan-1', label: 'OSJ_001.jpg' },
        { id: 'old-san-juan-2', label: 'OSJ_002.jpg' },
      ],
    },
  ];

  return (
    <div style={{ 
      padding: '10px', 
      backgroundColor: '#c0c0c0',
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: '100%', 
      // border: '2px solid',
      // borderColor: '#dfdfdf #808080 #808080 #dfdfdf',
      fontFamily: 'MS Sans Serif, Arial',
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
