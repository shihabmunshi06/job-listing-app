import React from 'react'
import JobLeft from './jobLeft/JobLeft'
import JobRight from './jobRight/JobRight'

export default function Job({ data }) {
    // splitting the data
    const { role, level, languages = [], tools = [], ...leftSideData } = data
    const attributes = [role, level, ...languages, ...tools]
    return (

        <div className={`card ${leftSideData.new && "active-before"}`}>
            <JobLeft data={leftSideData} />
            <hr />
            <JobRight data={attributes} />
        </div>

    )
}
