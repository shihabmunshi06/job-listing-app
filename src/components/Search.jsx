import Keyword from "./Keyword"

import { useDispatch} from "react-redux"

import { deleteAllKeywords } from "../redux/actions"

export default function Search({keywords}) {

    const dispatch = useDispatch()
    return (
        <div className="search-container">

            <div className="search flex">
                {keywords.map((each, index) => {
                    return (
                        <Keyword
                            key={each}
                            text={each}
                            index={index}
                        />
                    )
                })}

                <p onClick={() => { dispatch(deleteAllKeywords()) }} className="clear-all">Clear</p>
            </div>

        </div>
    )
}