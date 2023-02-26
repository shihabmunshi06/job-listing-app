export const addKeyword = (value) => {
    return {
        type: "addKeyword",
        payload: value
    }
}

export const clearKeyword = (value) => {
    return {
        type: "clearKeyword",
        payload: value
    }
}

export const deleteAllKeywords = () => {
    return {
        type: "deleteAllKeywords"
    }
}