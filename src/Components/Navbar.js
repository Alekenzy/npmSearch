import React, { useState } from 'react';
import {Link} from "react-router-dom";
import IconMenu from '../UI/Search/IconMenu/IconMenu';

const Navbar = () => {

  const [close, setClose] = useState(false);

  function media700() {
    if(close) {
      return (
      <div className="navbar__links2">
        <Link to="/" className='link' onClick={() => {setClose(!close)}}>From Internet</Link>
        <Link to="/myGame" className='link' onClick={() => {setClose(!close)}}>My Own</Link>
        <Link to="/npmSearch" className='link' onClick={() => {setClose(!close)}}>npm search</Link>
        <Link to="/speed" className='link' onClick={() => {setClose(!close)}}>Speed</Link>
      </div>
      )
    }

    return;

  }

  return (
    <div className="navbar">
      <div className='menuIcon' onClick={() => {setClose(!close)}}>
        <IconMenu fill={{fill: "#000"}} close={close} setClose={setClose}/>
      </div>
      {media700()}
      <div className="navbar__links">
        <Link to="/" className='link'>From Internet</Link>
        <Link to="/myGame" className='link'>My Own</Link>
        <Link to="/npmSearch" className='link'>npm search</Link>
        <Link to="/speed" className='link'>Speed</Link>
      </div>
    </div>
  )
}

export default Navbar