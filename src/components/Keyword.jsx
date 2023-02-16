import React from 'react'

export default function Keyword({ text, clearKeyword, index }) {
    return (
        <div className="keyword flex">
            <div className="text flex">{text}</div>
            <div onClick={() => { clearKeyword(index) }} className="delete flex">
                <img src="./images/icon-remove.svg" alt="delete" />
            </div>
        </div>
    )
}
