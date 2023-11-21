import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then((response) => response.json())
      .then((data) => {
        setListings(data);
        setListingsToDisplay(data);
      });
  }, []);

  const [listings, setListings] = useState([]);
  const [listingsToDisplay, setListingsToDisplay] = useState([]);
  

  function handleDeletedListing(deletedListing) {
    setListings(listings.filter((listing) => listing.id !== deletedListing.id));
  }

  function handleFilterChange(newFilter) {
    if (newFilter === "") {
      setListingsToDisplay(listings);
    } else {
      setListingsToDisplay(listings.filter((listing) => {
        return listing.description.includes(newFilter);
      }));
    }
  }

  return (
    <div className="app">
      <Header onSubmitFilter={handleFilterChange}/>
      <ListingsContainer 
        listings={listingsToDisplay}
        onDeleteListing={handleDeletedListing}/>
    </div>
  );
}

export default App;
