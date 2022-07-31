import React, { useState } from 'react';
import Header from '../Header/Header';
import cl from "./Body.module.css";
import { Outlet } from 'react-router-dom';

const Body = () => {

  const [search, setSearch] = useState("");

  return (
    <div className={cl.body}>
        <div className={cl.bodyContent}>
            <Header setSearch={setSearch}/>
            <Outlet context={search}/>
        </div>
    </div>
  )
}

export default Body