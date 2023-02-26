import React, { useEffect, useState } from "react"

import TopBackground from "./TopBackground"
import Search from "./Search"
import Jobs from "./Jobs"
import fetchedData from "../data"

import { useSelector } from "react-redux"

export default function App() {
    let keywords = useSelector(state => state)
    console.log(keywords)

    var [data, setData] = useState(fetchedData);

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
        <>
            <TopBackground />
            {keywords.length > 0 && <Search keywords={keywords} />}
            <Jobs
                data={data}
            />
        </>
    )
}