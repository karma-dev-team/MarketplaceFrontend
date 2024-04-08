import React, { useState } from 'react';
import './Search.css'; // Assuming you will define styles in this CSS file
import searchIcon from "@images/SearchLoop.svg";

type props = { placeholder: string }

const NavbarSearchInput = (props: props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-input">
      <button className="search-button">
        <img src={searchIcon} alt="" />
      </button>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder={props.placeholder}
        width={19}
        height={19}
      />
    </div>
  );
};

export default NavbarSearchInput;