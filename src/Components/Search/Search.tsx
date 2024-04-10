import React, { CSSProperties, Dispatch, useState } from 'react';
import './Search.css'; // Assuming you will define styles in this CSS file

type props = { placeholder: string, onChange: Dispatch<string>, searchText: string, style?: CSSProperties }

const SearchbarComponent: React.FC<props> = (props: props) => {
  return (
    <div className="root-searchbar" style={props.style}>
      <div className='searchbar-input-container'>
        <input
          type="text"
          value={props.searchText}
          onChange={(e) => props.onChange(e.target.value)}
          placeholder={props.placeholder}
          className="input-width" // Apply the class here
        />
        {props.searchText.length > 0 ? <button className='searchbar-clear' onClick={() => props.onChange("")}>
        <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className='searchbar-icon'><path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path></svg>
        </button> : null} 
      </div>
      <button className="searchbar-button">
        Найти
      </button> 
    </div>
  );
};

export default SearchbarComponent;
