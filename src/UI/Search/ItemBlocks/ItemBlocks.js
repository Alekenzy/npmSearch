import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GetURLs from "../../../API/GetURLs";
import { useFetching } from "../../../Hooks/useFetching";
import cl from "./ItemBlocks.module.css";

const ItemBlocks = ({search}) => {

  const [datta, setData] = useState([]);
  const navigate = useNavigate();

  const [fetching, loading, error] = useFetching(async (query)=> {
    const response = await GetURLs.getSearched(query);
    setData(response.data.objects);
  })

  useEffect(() => {
    fetching(search);
  }, [search])

  
    if(loading) {
      return <h5>Loading...</h5>
    }
    if(error) {
      return <h5>Error occured: {error}</h5>
    }
    return (
        <div className={cl.objectsList}>
            {datta.map((obj) => {
              return (
              <div key={obj.package.name} className={cl.objects} >
                <div className={cl.titleOfLi}>
                  <span className={cl.titleOfLiTitle} onClick={()=>{navigate(`/npmSearch/${obj.package.name}`)}}>{obj.package.name}</span>
                </div>
                <div className={cl.descriptionOfLi}>
                  {obj.package.description}
                </div>
                <div className={cl.keywords}>
                  {
                    (obj.package.keywords)?.map((keyword, id)=>{
                        return (<code key={id} className={cl.keyword}>{keyword}</code>)
                    })
                  }
                </div>
              </div>
            )
            })}
          </div>
      )
  }

  export default ItemBlocks;