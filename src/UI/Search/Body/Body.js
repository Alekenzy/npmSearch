import React, { useState } from 'react';
import Header from '../Header/Header';
import cl from "./Body.module.css";
// import { Outlet } from 'react-router-dom';
import BodyContent from '../BodyContent/BodyContent';
// import OpenNecessaryPackage from '../OpenNecessaryPackage/OpenNecessaryPackage';

const Body = () => {

  const [search, setSearch] = useState("");

  return (
    <div className={cl.body}>
        <div className={cl.bodyContent}>
            <Header setSearch={setSearch}/>
            <BodyContent search={search}/>
            {/* <Outlet /> */}
        </div>
    </div>
  )
}

export default Body