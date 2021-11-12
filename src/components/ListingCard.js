import React, {useState} from "react";

function ListingCard({id, description, image, location, onDeleteListing}) {
  const [isFavorite, setIsFavorite]=useState(false)

  function handleFavorite(){
    setIsFavorite((currFav) => !currFav)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={handleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={() => onDeleteListing(id)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
