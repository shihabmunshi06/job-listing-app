import React, { useState } from "react"

import TopBackground from "./TopBackground"
import Search from "./Search"
import Jobs from "./Jobs"
import fetchedData from "../data"

export default function App() {

    var [data, setData] = useState(fetchedData);
    var [keywords, setKeywords] = useState([]);

    function handleClick(e) {
        setKeywords(prev => [...prev, e.target.innerHTML])
        console.log(keywords)

        setData(data.filter((each) => {
            return (
                keywords.every(key => {
                    return (
                        each.role === key ||
                        each.level === key ||
                        each.languages.includes(key) ||
                        each.tools.includes(key)
                    )
                })
            )
        }))
    }

    return (
        <React.StrictMode>
            <TopBackground />
            <Search />
            <Jobs data={data} handleClick={handleClick} />
        </React.StrictMode>
    )
}