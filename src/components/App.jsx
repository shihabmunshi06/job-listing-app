import React, { useEffect, useState } from "react"

import TopBackground from "./TopBackground"
import Search from "./Search"
import Jobs from "./Jobs"
import fetchedData from "../data"

export default function App() {

    var [data, setData] = useState(fetchedData);
    var [keywords, setKeywords] = useState([]);

    function handleClick(e) {
        setKeywords(prev => [...prev, e.target.innerHTML])
    }
    function deleteKeywords() {
        setData(fetchedData)
        setKeywords([])
    }

    function clearKeyword(clickedIndex) {
        setKeywords(
            keywords.filter((each, index) => {
                return index !== clickedIndex
            })
        )

    }

    useEffect(() => {
        setData(fetchedData.filter((each) => {
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
    }, [keywords])

    return (
        <React.StrictMode>
            <TopBackground />
            <Search
                keywords={keywords}
                clearKeyword={clearKeyword}
                deleteKeywords={deleteKeywords}
            />
            <Jobs
                data={data}
                handleClick={handleClick}
            />
        </React.StrictMode>
    )
}