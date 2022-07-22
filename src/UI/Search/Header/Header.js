import React, { useState } from 'react';
import IconMenu from '../IconMenu/IconMenu';
import NpmSearch from '../NpmSearch/NpmSearch';
import cl from "./Header.module.css";

const Header = ({setSearch}) => {

  const [close, setClose] = useState(false);

  return (
    <div className={cl.header}>
        <div className={cl.headerContent}>
            <IconMenu fill={{fill: "#fff"}} close={close} setClose={setClose}/>
            <NpmSearch setSearch={setSearch}/>
        </div>
    </div>
  )
}

export default Header;