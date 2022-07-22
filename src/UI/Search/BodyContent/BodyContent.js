import React from 'react';
import ItemBlocks from '../ItemBlocks/ItemBlocks';
import RightWidget from '../RightWidget/RightWidget';
import cl from "./BodyContent.module.css";

const BodyContent = ({search}) => {
  return (
    <div className={cl.bodyContent}>
        <div className={cl.bodyContainer}>
            <ItemBlocks search={search}/>
        </div>
        <RightWidget /> 
    </div>
  )
}

export default BodyContent