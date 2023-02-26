import React from 'react'
import { useDispatch } from 'react-redux'
import { clearKeyword } from '../redux/actions'

export default function Keyword({ text, index }) {
    const dispatch = useDispatch()
    return (
        <div className="keyword flex">
            <div className="text flex">{text}</div>
            <div onClick={() => { dispatch(clearKeyword(index)) }} className="delete flex">
                <img src="./images/icon-remove.svg" alt="delete" />
            </div>
        </div>
    )
}
