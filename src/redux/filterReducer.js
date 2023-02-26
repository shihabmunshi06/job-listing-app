// import { addKeyword, clearKeyword, deleteAllKeywords } from "./actions"

const initialState = []


const filterReducer = (state = initialState, action) => {

    switch (action.type) {

        case "addKeyword":
            if (state.includes(action.payload)) {
                return state
            } else {
                return [
                    ...state,
                    action.payload
                ]
            }


        case "clearKeyword":
            return state.filter((each, index) => {
                return index !== action.payload
            })


        case "deleteAllKeywords":
            return state.slice(0, 0)

        default:
            return state
    }
}

export default filterReducer