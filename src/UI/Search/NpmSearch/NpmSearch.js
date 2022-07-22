import React, {useState} from "react";
import cl from "./NpmSearch.module.css";
import AutoComplete from "../AutoComplete/AutoComplete";

const NpmSearch = ({setSearch}) => {

  const [query, setQuery] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setSearch(query);
    setQuery("");
  }

  function debounce(func, timeout = 500){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args) }, timeout);
    };
  }

  const processChange = debounce((e) => (setQuery(e.target.value)));

    return (
      <div className={cl.container}>
        <form className={cl.searchField} onSubmit={submit}>
          <input type="search" className={cl.input} placeholder="Search..." onChange={processChange}/>
          <button className={cl.button}>Search</button>
        </form>
          <AutoComplete query={query}/>
      </div>
    );
}

export default NpmSearch;