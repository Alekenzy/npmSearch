import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GetURLs from '../../../API/GetURLs';
import { useFetching } from '../../../Hooks/useFetching';
import cl from "./AutoComplete.module.css";

const AutoComplete = ({query}) => {

  const [datta, setData] = useState([]);
  const navigate = useNavigate();
  
  const [fetching, loading, error] = useFetching(async (query)=> {
    const response = await GetURLs.getSearched(query);
    setData(response.data.objects);
  })
  
  useEffect(() => {
    fetching(query)
  }, [query])

  function rendering() {
  if(loading) {
    return (
      <div className={cl.autocomplete}>
        <div className={cl.autocompleteContent}>
          <h5>Loading...</h5>
        </div>
    </div>
    )
  }
  if(error) {
    return (
      <div className={cl.autocomplete}>
        <div className={cl.autocompleteContent}>
            <h5>Error occured: {error}</h5>
          </div>
    </div>
    )
  }
  if(!datta) {
    return;
  }
  return (
    <div className={cl.autocomplete}>
        <div className={cl.autocompleteContent}>
            {datta?.map((obj, id) => {
                if(id < 5) {
              return <div key={obj.package.name} className={cl.autocompleteElement}>
              <div className={cl.autocompleteTitle}>
                <span onClick={()=> {navigate(`/npmSearch/${obj.package.name}`)}} className={cl.title}>{obj.package.name}</span>
              </div>
              <div className={cl.autocompleteDescription}>
                <span className={cl.description}>{obj.package.description}</span>
              </div>
              </div>
            }
            return "";
            })}
        </div>
    </div>
  )
  }

  return rendering()
}

export default AutoComplete;