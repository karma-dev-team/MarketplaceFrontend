import React from 'react';
import Select, { components, OnChangeValue, ActionMeta, OptionProps } from 'react-select';

export interface OptionType {
  value: string;
  label: string;
  icon: string; 
}

interface SelectorComponentProps {
  options: OptionType[];
  onChange: (newValue: OnChangeValue<OptionType, false>, actionMeta: ActionMeta<OptionType>) => void;
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

const SelectorComponent: React.FC<SelectorComponentProps> = ({ options, onChange }) => {
  return (
    <Select<OptionType, false>
      className="custom-select"
      classNamePrefix="select"
      options={options}
      onChange={onChange}
      components={{ Option: CustomOption }}
      getOptionLabel={(option) => option.label} // adhering to the string type requirement
    />
  );
};

export default SelectorComponent;
