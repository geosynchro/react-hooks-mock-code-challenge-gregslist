import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, setListings}) {

  const listingsList = listings.map((listing) => <ListingCard key={listing.id} id={listing.id}
  description={listing.description} image={listing.image} location={listing.location}/>)
  return (
    <main>
      <ul className="cards">
        {listingsList}
      </ul>
    </main>
  );
}

export default ListingsContainer;
