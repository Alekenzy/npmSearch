import React, { useState } from 'react';
import cl from "./MyGame.module.css";

const MyGame = () => {

    let field = [];
    let rows = 30;
    let columns = 30;

    for(let i = 0; i < rows; i++) {
        field[i] = []
        for(let j = 0; j < columns; j++){
            field[i][j] = 0;
        }
    }

    const [white, setWhite] = useState(field);

  return (
    <div className={cl.MyGame}>
        <div className={cl.MyGameContent}>
            <h2>Game "Life"</h2>
            <div className={cl.MyGameTable} style={{display: 'grid', gridTemplateColumns: `repeat(${columns}, auto)`}}>
                {white.map((rows, id) => {
                    return rows.map((column, index) => {
                        return <div
                                    key={`${id}${index}`}
                                    className={cl.td+(column ? ' '+cl.white : '')}
                                    onClick={() => {
                                        const newField = JSON.parse(JSON.stringify(white));
                                        newField[id][index] = column ? 0 : 1;
                                        setWhite(newField);
                                        console.log(id+" | "+index);
                                    }}
                                    ></div>
                    })
                })}
            </div>
        </div>
    </div>
  )
}

export default MyGame