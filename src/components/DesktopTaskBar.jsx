import React from 'react';
import { FilePencil, Pbrush1, Wordpad, Awfxcg321304, FlyingThroughSpace100 } from '@react95/icons';
import terminalIcon from '../assets/terminal-72.png';
import cameraDesktopIcon from '../assets/progman_13_32x32-1bit.png';
import crystalBallIcon from '../assets/crystal_ball.png';
import knicksLogo from '../assets/nyknicks_logo.svg';

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
                    paint
                </List.Item>
                <List.Item onClick={() => toggleModal(MODAL_IDS.ARCHIVES)} icon={<img src={cameraDesktopIcon} alt="Archives" width={32} height={32} style={{ marginLeft: -20, marginRight: 4 }}/>}>
                    archives
                </List.Item>
                <List.Item onClick={() => toggleModal(MODAL_IDS.NOTES)} icon={<FilePencil variant="32x32_4" />}>
                    notes
                </List.Item>
                <List.Item onClick={() => toggleModal(MODAL_IDS.RESUME)} icon={<Wordpad variant="32x32_4" />}>
                    resume
                </List.Item>
                <List.Item onClick={() => toggleModal(MODAL_IDS.CONTACT)} icon={<Awfxcg321304 variant="32x32_4" />}>
                    contact
                </List.Item>        
                <List.Item onClick={() => toggleModal(MODAL_IDS.GALAXY)} icon={<FlyingThroughSpace100 variant="32x32_4" />}>
                    galaxy
                </List.Item>        
                <List.Item onClick={() => toggleModal(MODAL_IDS.TERMINAL)} icon={<img src={terminalIcon} alt="Terminal" width={32} height={32} style={{ marginLeft: -20, marginRight: 4 }} />}>
                    terminal
                </List.Item>
                <List.Item onClick={() => toggleModal(MODAL_IDS.TAROT)} icon={<img src={crystalBallIcon} alt="Tarot Draw" width={32} height={32} style={{ marginLeft: -20, marginRight: 4 }} />}>
                    solitarot
                </List.Item>
                <List.Item onClick={() => toggleModal(MODAL_IDS.KNICKS)} icon={<img src={knicksLogo} alt="Knicks" width={32} height={32} style={{ marginLeft: -20, marginRight: 4 }} />}>
                    knicks 
                </List.Item>        
            </List>
                  }
            />
          
        
    )
}

export default DesktopTaskBar;
