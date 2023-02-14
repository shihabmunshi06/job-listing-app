import Card from "./Card";

export default function Jobs({ data, handleClick }) {

    return (
        <div className='main'>
            {
                data.map(each => {
                    return (
                        <Card handleClick={handleClick} key={each.id} {...each} />
                    )
                })
            }
        </div>
    )
}