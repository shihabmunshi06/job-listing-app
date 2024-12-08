import React from 'react'
import FilterTagButton from './FilterTagButton'
import { useDispatch, useSelector } from 'react-redux'
import { removeAllTags } from '../../redux/tags/tagsSlice'

export default function ShowFilter() {
    const attributes = useSelector(state => state.tags)
    const dispatch = useDispatch()

    return (
        <div className='show-filter'>
            <div className="filter-tags-container">
                {attributes.map((e, index) => <FilterTagButton filterName={e} key={index} />)}

            </div>
            <div onClick={() => dispatch(removeAllTags())} className="clear-all">
                <p>Clear</p>
            </div>
        </div>
    )
}
