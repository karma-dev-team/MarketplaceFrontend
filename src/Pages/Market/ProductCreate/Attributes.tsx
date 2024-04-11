import React, { Dispatch, useState } from 'react';
import { OptionScheme } from 'src/Schemas/Option';
import { OptionTypes } from 'src/Schemas/Enums';
import "./Attributes.css"
import SelectorComponent, { OptionType } from 'src/Components/Selector/Selector';

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
        <div className='root-switch' key={option.label}>
          <label className='label-charac'>{option.label}</label>
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
    width?: string, 
    titleOn?: boolean
}

export const SelectorAttributes: React.FC<selectorProps> = ({ options, onLabelClick, width, titleOn }) => {
  const uniqueGroups = getUniqueGroups(options);
  const isTitleOn = titleOn === undefined ? false : titleOn

  const handleLabelClick = (optionId: string) => {
    let option = options.filter((value) => value.id === optionId)[0]

    onLabelClick(option);
  };

  return (
    <div>
      {uniqueGroups.map((group) => {
          let selectorOptions: OptionType[] = []

          options.forEach((value) => { 
            if (value.group === group) { 
              selectorOptions.push(
                { 
                  label: value.label, 
                  value: value.id, 
                }
              )
            }
          })
          return <SelectorComponent 
            options={selectorOptions}
            titleText={isTitleOn ? group : undefined}
            onChange={(value) => {handleLabelClick(value?.value || "")}}
            width={width}
          /> 
      })}

    </div>
  );
};