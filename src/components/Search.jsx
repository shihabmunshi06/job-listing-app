import Keyword from "./Keyword"

export default function Search({ keywords, deleteKeywords, clearKeyword }) {
    return (
        <div className="search-container">

            <div className="search flex">
                {keywords.map((each, index) => {
                    return (
                        <Keyword
                            key={each}
                            clearKeyword={clearKeyword}
                            text={each}
                            index={index}
                        />
                    )
                })}

                <p onClick={deleteKeywords} className="clear-all">Clear</p>
            </div>

        </div>
    )
}