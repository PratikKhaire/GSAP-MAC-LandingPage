/* eslint-disable no-unused-vars */
import { PresentationControls } from '@react-three/drei';
import React, { useRef } from 'react'
import MacbookModel16 from '../models/Macbook-16';
import MacbookModel14 from '../models/Macbook-14';

const ModelSwitcher = ({scale,isMobile}) => {

    const smallMacbookRef = useRef();
    const largeMacbookRef = useRef();

    const showLargeMacBook = scale === 0.08 || scale === 0.05;
  return (
    <>
   <PresentationControls>
    <group ref={largeMacbookRef}>
        
   <MacbookModel16 scale={isMobile ? 0.06 : 0.08} />
    </group>
   </PresentationControls>
   <PresentationControls>
    <group ref={smallMacbookRef}>
        
   <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
    </group>
   </PresentationControls>

    </>
  )
}

export default ModelSwitcher