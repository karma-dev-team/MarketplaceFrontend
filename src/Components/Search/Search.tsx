import React, { Dispatch, useState } from 'react';
import './Search.css'; // Assuming you will define styles in this CSS file

type props = { placeholder: string, onChange: Dispatch<string>, searchText: string }

const SearchbarComponent = (props: props) => {
  return (
    <div className="root-searchbar">
      <button className="searchbar-button">
        Найти
      </button>
      <input
        type="text"
        value={props.searchText}
        onChange={(e) => props.onChange(e.target.value)}
        placeholder={props.placeholder}
        width={19}
        height={19}
      />
    </div>
  );
};

export default SearchbarComponent;