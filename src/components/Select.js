import React from 'react';
import styled from "styled-components";

const Select = ({ value, handleChange, options }) => {
  return (
    <div>
      <SelectLabel>
        Cohort Type:
        <SelectDropdown value={value} onChange={handleChange}>
          <option disabled selected value>
            {" "}
            -- select an option --{" "}
          </option>

          {
            options.map(option => {
              return (
                <option value={option.value} key={option.value}>
                  {option.displayedName}
                </option>
              );
            })
          }
        </SelectDropdown>
      </SelectLabel>
    </div>
  );
};

const SelectDropdown = styled.select`
  width: 100%;
  height: 43px;
  margin-top: 10px;
  border-radius: 8px;
  display: block;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 700;
  padding: 0.6em 1.4em 0.5em 0.8em;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  color: #333;
  background-color: #f4f4f4;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
    linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;

  &::-ms-expand {
    display: none;
  }

  &:hover {
    border-color: #888;
  }

  &:focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #222;
    outline: none;
  }
  option {
    font-weight: normal;
  }
`;


const SelectLabel = styled.label`
  display: block;
  width: 100%;
  text-align: left;
  color: #1e1e1e;
  font-weight: 700;
  margin-bottom: 20px;
`;

export default Select;