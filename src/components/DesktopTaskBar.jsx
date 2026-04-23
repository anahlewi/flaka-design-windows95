import React from 'react';
import { FilePencil, Pbrush1, MsawtAwtIcon, Progman11, Wordpad, Awfxcg321304, FlyingThroughSpace100 } from '@react95/icons';

import { List, TaskBar } from '@react95/core';


export const DesktopTaskBar = ({
    MODAL_IDS,
    toggleModal,
})=>{
    
    return(
         <TaskBar
            list={
            <List>
            <List.Item onClick={() => toggleModal(MODAL_IDS.PAINT)} icon={<Pbrush1 variant="32x32_4" />}>
                Paint
            </List.Item>
            <List.Item onClick={() => toggleModal(MODAL_IDS.ARTS)} icon={<Progman11 variant="32x32_4" />}>
                Arts & Crafts
            </List.Item>
            <List.Item onClick={() => toggleModal(MODAL_IDS.CODING)} icon={<MsawtAwtIcon variant="32x32_4" />}>
                Coding
            </List.Item>
            <List.Item onClick={() => toggleModal(MODAL_IDS.NOTES)} icon={<FilePencil variant="32x32_4" />}>
                Notes
            </List.Item>
            <List.Item onClick={() => toggleModal(MODAL_IDS.RESUME)} icon={<Wordpad variant="32x32_4" />}>
                Resume
            </List.Item>
            <List.Item onClick={() => toggleModal(MODAL_IDS.CONTACT)} icon={<Awfxcg321304 variant="32x32_4" />}>
                Contact
            </List.Item>        
            <List.Item onClick={() => toggleModal(MODAL_IDS.GALAXY)} icon={<FlyingThroughSpace100 variant="32x32_4" />}>
                Galaxy
            </List.Item>        
       
            </List>
                  }
            />
          
        
    )
}

export default DesktopTaskBar;
