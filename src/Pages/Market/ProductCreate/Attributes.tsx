import React, { Dispatch, useState } from 'react';
import { OptionType } from 'src/Schemas/Option';
import { OptionTypes } from 'src/Schemas/Enums';
import "./Attributes.css"
import SelectorComponent from 'src/Components/Selector/Selector';
import { OptionEntity } from 'restclient';

function getUniqueGroups(arr: OptionEntity[]): string[] {
  let uniqueGroups: string[] = [];
  arr.forEach((option) => {
    if (!uniqueGroups.includes(option.group)) {
      uniqueGroups.push(option.group);
    }
  });
  return uniqueGroups;
}

function filterOptionsByType(options: OptionEntity[], type: OptionTypes): OptionEntity[] {
  let result: OptionEntity[] = [];

  options.forEach((option) => {
    if (option.type === type.toUpperCase()) {
      result.push(option);
    }
  });
  return result;
}


type rangeProps = { options: OptionEntity[], addAttributes: (label: string, value: string) => void }

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

type switchProps = { options: OptionEntity[], addAttributes: (label: string, value: string) => void }

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
    options: OptionEntity[], 
    onLabelClick: Dispatch<OptionEntity>
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