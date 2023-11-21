import React from "react";
import Search from "./Search";

function Header( {onSubmitFilter} ) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSubmitFilter={onSubmitFilter}/>
    </header>
  );
}

export default Header;
