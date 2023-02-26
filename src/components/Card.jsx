import Attributes from "./Attributes"

export default function Card({
    company,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
    new: newAlert }) {

    let attributes = [role, level, ...languages, ...tools]

    return (
        <div className="job-div flex sb">

            <div className="left-side flex">
                <div className="pic-div">
                    <img src={logo} alt="company logo"></img>
                </div>

                <div className="roles">
                    <div className="top flex">
                        <h1>{company}</h1>
                        {newAlert && <p className="new flex">New!</p>}
                        {featured && <p className="featured flex">Featured</p>}
                    </div>

                    <div className="mid">
                        {position}
                    </div>

                    <div className="bottom flex">
                        <p>{postedAt}</p>
                        <p>{contract}</p>
                        <p>{location}</p>
                    </div>
                </div>
            </div>


            <Attributes attributes={attributes} />
        </div>
    )
}