import React from 'react';
import Select, { components, OnChangeValue, ActionMeta, OptionProps, StylesConfig } from 'react-select';
import "./Selector.css"

export interface OptionType {
  value: string;
  label: string;
  icon: string; 
}

interface SelectorComponentProps {
  options: OptionType[];
  onChange: (newValue: OnChangeValue<OptionType, false>, actionMeta: ActionMeta<OptionType>) => void;
  width: string, 
}

const CustomOption: React.ComponentType<OptionProps<OptionType, false>> = (props) => {
  return (
    <components.Option {...props}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={props.data.icon} alt={props.data.label} style={{ marginRight: '10px', height: '20px' }} />
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
  }),
  option: (provided, state) => ( { 
    ...provided, 
    backgroundColor: "#252834"
  }), 
  noOptionsMessage: (provided, state) => ({ 
    ...provided, 
    backgroundColor: "#252834",
    color: "#a8a8a8"
  })
};

const SelectorComponent: React.FC<SelectorComponentProps> = ({ options, onChange, width }) => {
  return (
    <div className='selector-container' style={{maxWidth: width}}>
      <Select<OptionType, false>
        className="general-selector"
        classNamePrefix="select"
        options={options}
        onChange={onChange}
        components={{ Option: CustomOption }}
        getOptionLabel={(option) => option.label} // adhering to the string type requirement
        styles={customStyles}
      />
    </div>
  );
};

export default SelectorComponent;
