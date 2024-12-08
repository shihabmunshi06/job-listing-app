import React from "react";
import ShowFilter from "./components/showFilter/ShowFilter"

import Job from "./components/job/Job";

import data from "../src/data.json"
import { useSelector } from "react-redux";


export default function App() {
  const filterTags = useSelector(state => state.tags)

  let sortedData = [...data]
  sortedData.sort((a, b) => b.new - a.new)
  sortedData.sort((a, b) => b.featured - a.featured)

  let filteredData = sortedData


  if (filterTags.length > 0) {
    filteredData = data.filter(eachCard => {
      return filterTags.every(keyword => {
        return (
          keyword === eachCard.role ||
          eachCard.level === keyword ||
          eachCard.languages.includes(keyword) ||
          eachCard.tools.includes(keyword)
        )
      })
    })
  }

  return (
    <>
      <div className="main-container">
        <div className="top-bg">
          <img src="./images/bg-header-desktop.svg" alt="background header" />
        </div>
        <div className="bottom-part">
          <div className="bottom-part__container">
            <ShowFilter />
            <div className="jobs-container">
              {filteredData.map(e => <Job data={e} key={e.id} />)}
            </div>
          </div>


        </div>
      </div>
    </>

  );
}
