import React, { Dispatch, useState } from 'react';
import { OptionScheme } from 'src/Schemas/Option';
import { OptionTypes } from 'src/Schemas/Enums';

function getUniqueGroups(arr: OptionScheme[]): string[] {
  let uniqueGroups: string[] = [];
  arr.forEach((option) => {
    if (!uniqueGroups.includes(option.group)) {
      uniqueGroups.push(option.group);
    }
  });
  return uniqueGroups;
}

function filterOptionsByType(options: OptionScheme[], type: OptionTypes): OptionScheme[] {
  let result: OptionScheme[] = [];

  options.forEach((option) => {
    if (option.type === type.toUpperCase()) {
      result.push(option);
    }
  });
  return result;
}


type rangeProps = { options: OptionScheme[], addAttributes: (label: string, value: string) => void }

export const RangeAttributes: React.FC<rangeProps> = (props) => {
  const { options } = props;
  let rangeOptions = filterOptionsByType(options, "Range");

  return (
    <div className='n-div'>
      {rangeOptions.map((option) => (
        <div key={option.label}>
          <div>
            <label className="label-charac">{option.label} 2132</label>
          </div>
          <input className='input-ran' type="number" />
        </div>
      ))}
    </div>
  );
}

type switchProps = { options: OptionScheme[], addAttributes: (label: string, value: string) => void }

export const SwitchAttributes: React.FC<switchProps> = (props) => {
  const { options } = props;
  let switchOptions = filterOptionsByType(options, "Switch");

  const [switchStates, setSwitchStates] = useState<any>({});

  const handleSwitchChange = (label: string) => {
    setSwitchStates((prevState: any) => ({
      ...prevState,
      [label]: !prevState[label]
    }));
  };

  return (
    <div>
      {switchOptions.map((option) => (
        <div className='v-siv' key={option.label}>
          <label className='label-charac'>{option.label} 123</label>
          <div className={`switch ${switchStates[option.label] ? 'on' : 'off'}`} onClick={() => handleSwitchChange(option.label)}>
            <div className="slider"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

type selectorProps = { 
    options: OptionScheme[], 
    onLabelClick: Dispatch<OptionScheme>
}

export const SelectorAttributes: React.FC<selectorProps> = ({ options, onLabelClick }) => {
  const uniqueGroups = getUniqueGroups(options);
  const [activeLabel, setActiveLabel] = useState<string>();

  const handleLabelClick = (option: OptionScheme) => {
    setActiveLabel(option.label);
    onLabelClick && onLabelClick(option);
  };

  return (
    <div>
      {uniqueGroups.map((group) => {
        const selectorOptions = filterOptionsByType(options, "Selector").filter(option => option.group === group);

        return (
          <div key={group}>
            <h3 className="label-charac">{group} 42424</h3>
            <div className="div-label">
              {selectorOptions.map((option) => (
                <div
                  className={`glab ${activeLabel === option.label ? 'active' : ''}`}
                  key={option.label}
                  onClick={() => handleLabelClick(option)}
                >
                  <div className="label-sel">
                    <label>{option.label}</label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};