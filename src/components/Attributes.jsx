import { useDispatch } from "react-redux"
import { addKeyword } from "../redux/actions"

export default function Attributes({ attributes }) {
    const dispatch = useDispatch()
    return (
        <div className="attributes flex">
            {attributes.map(each => {
                return (
                    <div onClick={() => dispatch(addKeyword(each))} key={each}>{each}</div>
                )
            })
            }
        </div>
    )
}