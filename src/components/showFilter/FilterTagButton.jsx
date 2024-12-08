import React from 'react'
import { removeTag } from '../../redux/tags/tagsSlice'
import { useDispatch } from 'react-redux'

export default function FilterTagButton({ filterName }) {
    const dispatch = useDispatch()
    return (
        <div className="filter-tag-button">
            <div className="text">{filterName}</div>
            <div onClick={() => dispatch(removeTag(filterName))} className="clear"><img src="./images/icon-remove.svg" alt="clear" /></div>
        </div>
    )
}
