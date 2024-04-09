import React from 'react';
import Select, { components, OnChangeValue, ActionMeta, OptionProps, StylesConfig } from 'react-select';
import "./Selector.css"

export interface OptionType {
  value: string;
  label: string;
  icon?: string | undefined; 
}

interface SelectorComponentProps {
  options: OptionType[];
  onChange: (newValue: OnChangeValue<OptionType, false>, actionMeta: ActionMeta<OptionType>) => void;
  required?: boolean, 
  titleText?: string, 
  width?: string, 
}

const CustomOption: React.ComponentType<OptionProps<OptionType, false>> = (props) => {
  return (
    <components.Option {...props}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {props.data.icon !== undefined ? 
          <img src={props.data.icon} alt={props.data.label} style={{ marginRight: '10px', height: '20px', width: "20px"}} /> 
        : null}
        {props.data.label}
      </div>
    </components.Option>
  );
};

const customStyles: StylesConfig<OptionType, false> = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: '#252834',
    boxShadow: state.isFocused ? 'none' : 'none',
    borderColor: state.isFocused ? '#465166' : '#384153',
    '&:hover': {
      borderColor: state.isFocused ? '#2d3545' : '#2d3545',
    },
    color: "#A8A8A8"
  }),
  singleValue: (provided, state) => ({ 
    ...provided, 
    color: "#A8A8A"
  }), 
  indicatorsContainer: (provided, state) => ({ 
    ...provided, 
    color: "#54617A", 
  }), 
  indicatorSeparator: (provided, state) => ({ 
    ...provided, 
    backgroundColor: "#384153",
    color: "#54617A",

  }), 
  placeholder: (provided, state) => ({ 
    ...provided, 
    color: "#A8A8A8"
  }), 
  option: (provided, state) => ( { 
    ...provided, 
    backgroundColor: "#252834", 
    color: "#A8A8A8"
  }), 
  noOptionsMessage: (provided, state) => ({ 
    ...provided, 
    backgroundColor: "#252834",
    color: "#a8a8a8"
  }), 
  valueContainer: (provided, state) => ({ 
    ...provided, 
    backgroundColor: "#252834",
    color: "#a8a8a8"
  }), 
  input: (provided, state) => ({ 
    ...provided, 
    color: "#a8a8a8"
  }), 
  menuList: (provided, state) => ({ 
    ...provided, 
    backgroundColor: "#252834",
    "::-webkit-scrollbar": {
      width: "4px",
      height: "0px",
    },
    "::-webkit-scrollbar-track": {
      background: "#191920"
    },
    "::-webkit-scrollbar-thumb": {
      background: "#2F3241",
      borderRadius: "5px"
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#555"
    }
  }), 
  container: (provided, state)  => ({
    ...provided,
    flex: 1
  }), 
  menu: (provided, state) => ({
    ...provided,
    width: "max-content",
    minWidth: "100%"
  }),
};

const SelectorComponent: React.FC<SelectorComponentProps> = ({ options, onChange, required, titleText, width }) => {
  let required_ = required === undefined ? false : required;
  return (
    <div className='selector-container' style={{maxWidth: width || "auto"}}>
      {titleText !== undefined ? <p className="input-title-text">
        {titleText} {required_ === true ? <span style={{color: "red"}}>*</span> : null}
      </p> : null}
      <Select<OptionType, false>
        className="general-selector"
        classNamePrefix="select"
        options={options}
        onChange={onChange}
        placeholder="Выбрите"
        // defaultValue={options[0] || undefined}
        components={{ Option: CustomOption }}
        getOptionLabel={(option) => option.label} // adhering to the string type requirement
        styles={customStyles}
      />
    </div>
  );
};

export default SelectorComponent;
