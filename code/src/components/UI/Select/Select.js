import React from 'react';
import Select from 'react-select'; //https://github.com/JedWatson/react-select

import classes from './Select.css';

const select = (props) => {
    const colorStyles = {
        control: styles => ({ ...styles, backgroundColor: 'white' }),
        option: (styles, { isFocused, isSelected }) => {
            return {
                ...styles,
                color: isSelected
                    ? "#fff"
                    : isFocused ? "#fff" : "#000",
                backgroundColor: isSelected
                    ? "#300356"
                    : isFocused ? "#7a5a94" : "#fff"
            }
        }
    }
    
    return (
        <Select
            className={classes.Select}
            options={props.options}
            onChange={props.changed}
            defaultValue={props.defaultValue}
            isSearchable={props.isSearchable}
            styles={colorStyles}
        />
    );
}

export default select;
