import { useState, KeyboardEvent } from 'react';
import './Search.css'; // Assuming you will define styles in this CSS file
import searchIcon from "@images/SearchLoop.svg";
import { useNavigate } from 'react-router-dom';

type props = { placeholder: string }

const NavbarSearchInput = (props: props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate()

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const submitSearch = () => { 
    navigate(`/games?search=${searchTerm}`)
  }

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => { 
    if (e.key === 'Enter') { 
      e.preventDefault()

      submitSearch()
    }
  }

  return (
    <div className="search-input">
      <button className="search-button" onClick={() => submitSearch()}>
        <img src={searchIcon} alt="" />
      </button>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder={props.placeholder}
        width={19}
        height={19}
        onKeyDown={handleKey}
      />
    </div>
  );
};

export default NavbarSearchInput;