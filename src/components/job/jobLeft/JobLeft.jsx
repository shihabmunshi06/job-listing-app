import React from 'react'

export default function JobLeft({data}) {
    const { company,
        logo,
        new: newValue,
        featured,
        position,
        postedAt,
        contract,
        location, } = data

    return (
        <div className="card__left">
            <div className="img-job-container">
                <div className="img-div">
                    <img src={logo} alt="company logo" />
                </div>
                <div className="job-details">
                    <div className="job-details__top">
                        <h1 className="company-name">{company}</h1>
                        {newValue && <div className="new">new</div>}
                        {featured && <div className="featured">featured</div>}
                    </div>
                    <div className="job-details__mid">
                        <h1 className="job-role">{position}</h1>
                    </div>
                    <div className="job-details__bottom">
                        <p>{postedAt}</p>
                        <p>{contract}</p>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
