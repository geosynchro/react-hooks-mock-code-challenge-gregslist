import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";


function App() {
  // const URL = `http://localhost:6001/listings`
  const [search, setSearch] = useState("")
  const [listings, setListings] = useState([])


  useEffect(() => {
     fetch(`http://localhost:6001/listings`)
    .then(res => res.json())
    .then(setListings)
  }, [])

  const listingsToDisplay = listings

  return (
    <div className="app">
      <Header search={search} setSearch={setSearch}/>
      <ListingsContainer listings={listingsToDisplay} setListings={setListings}/>
    </div>
  );
}

export default App;
