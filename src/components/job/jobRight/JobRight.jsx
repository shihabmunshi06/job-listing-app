import React from 'react'
import Attribute from './Attribute'

export default function JobRight({ data }) {
    return (
        <div className="card__right">
            <div className="attributes-container">
                {data.map((e, index) => <Attribute name={e} key={index} />)}
            </div>
        </div>
    )
}
