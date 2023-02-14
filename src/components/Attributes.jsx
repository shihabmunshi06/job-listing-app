export default function Attributes({ attributes, handleClick }) {
    return (
        <div className="attributes flex">
            {attributes.map(each => {
                return (
                    <div onClick={handleClick} key={each}>{each}</div>
                )
            })
            }
        </div>
    )
}