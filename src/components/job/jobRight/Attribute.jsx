import React from 'react'
import { addTag } from "../../../redux/tags/tagsSlice"
import { useDispatch } from 'react-redux'

export default function Attribute({ name }) {
    const dispatch = useDispatch()
    return (
        <div onClick={() => dispatch(addTag(name))} className="attribute">{name}</div>
    )
}
