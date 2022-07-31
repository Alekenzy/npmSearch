import React from 'react';
import { useOutletContext } from 'react-router-dom';
import ItemBlocks from '../ItemBlocks/ItemBlocks';
import RightWidget from '../RightWidget/RightWidget';
import cl from "./BodyContent.module.css";

const BodyContent = () => {

  return (
    <div className={cl.bodyContent}>
        <div className={cl.bodyContainer}>
            <ItemBlocks search={useOutletContext()}/>
        </div>
        <RightWidget /> 
    </div>
  )
}

export default BodyContent