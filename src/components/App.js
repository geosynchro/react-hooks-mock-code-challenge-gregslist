import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";


function App() {
  const URL = "http://localhost:6001/listings"
  const [search, setSearch] = useState("")
  const [listings, setListings] = useState([])


  useEffect(() => {
     fetch(URL)
    .then(res => res.json())
    .then(setListings)
  }, [])


  function handleDeleteListing(id){
    fetch(URL + `/${id}`, {method:"DELETE"})
    const updatedListings = listings.filter((listing) => listing.id !== id)
    setListings(updatedListings)
  }

  const displayedListings = listings.filter((listing) => { 
    return listing.description.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="app">
      <Header search={search} setSearch={setSearch}/>
      <ListingsContainer listings={displayedListings} onDeleteListing={handleDeleteListing} />
    </div>
  );
}

export default App;
