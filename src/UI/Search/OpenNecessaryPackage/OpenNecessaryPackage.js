import { marked } from 'marked';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GetURLs from '../../../API/GetURLs';
import { useFetching } from '../../../Hooks/useFetching';
import cl from "./OpenNecessaryPackage.module.css"

const OpenNecessaryPackage = () => {

    const [page, setPage] = useState({});
    const [versions, setVersions] = useState({});
    const params = useParams();

    const [fetching, loading, error] = useFetching(async (name)=> {
        const response = await GetURLs.getSearchedItem(name);
        let arrayed = Object.keys(response.data.versions);
        let last = arrayed.sort().slice(arrayed.length-1, arrayed.length);
        setVersions(response.data.versions[last])
        setPage(response.data);
    })

    useEffect(() => {
        fetching(params.name);
    }, []);

    function readme(str) {
        if(!str) {
            if(page.readme) {
                return marked.parse(page.readme);
            }
            return
        }
        return marked.parse(str)
    }

    const dependencies = (obj) => {
        let objs = Object.keys(obj).sort();

        const list = () => {
            return <div className={cl.dependencies}><h2>Dependencies:</h2>  {objs.map((item) => {
                 return <div key={item} className={cl.dependency}>
                    <code>{item}</code>
                    </div>
            })}
            </div>
        }
        return list();
    }

    if (loading) {
        return <h3 style={{textAlign: "center"}}>Loading...</h3>;
    }
    if (error) {
        return <h3 style={{textAlign: "center"}}>Error occured: {error}</h3>;
    }
    return (
        <div className={cl["currentPackage"]}>
            <div className={cl.container}>
            <div className={cl.title}>Overview about <code>{versions.name}</code></div>
                <hr/>
                <div className={cl.pageName}>
                    <code className={cl.version}>Last version:  {versions.version}</code>
                </div>
                <div className={cl.readme} dangerouslySetInnerHTML={{__html: readme(versions.readme)}} />
                {versions.dependencies ? dependencies(versions.dependencies) : ""}
            </div>
        </div>
    )
}

export default OpenNecessaryPackage;
