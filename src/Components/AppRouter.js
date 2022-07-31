import React from 'react';
import {Routes, Route} from "react-router-dom";
import Game from '../UI/Game/Game';
import MyGame from '../UI/MyGame/MyGame';
import Body from "../UI/Search/Body/Body"
import BodyContent from '../UI/Search/BodyContent/BodyContent';
import OpenNecessaryPackage from '../UI/Search/OpenNecessaryPackage/OpenNecessaryPackage';
import Error from "./Error"

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Game />} />
      <Route path="/myGame" element={<MyGame />} />
      <Route path="/npmSearch" element={<Body />}>
          <Route exact path="search_results" element={<BodyContent />} />
          <Route exact path="search_results/:name" element={<OpenNecessaryPackage />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default AppRouter