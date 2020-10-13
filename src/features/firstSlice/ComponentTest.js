import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    changeName,
  } from './componentTestSlice';

export function ComponentTest(){
    const stateFirstName = useSelector(state => state.name.name);
    const stateLastName = useSelector(state => state.name.lastName);

    const dispatch = useDispatch();

    const [inputFirstName, setinputFirstName] = useState('');
    const [inputLastName, setInputLastName] = useState('');

    const submitHandler = () => {
        dispatch(
            changeName([inputFirstName,inputLastName])
        )
    }
        
    return(
        <div>
            <label>Enter Name</label>
            <input
                aria-label="Set firstname"
                value={inputFirstName}
                onChange={e => setinputFirstName(e.target.value)}
            />
            <input
                aria-label="Set last name"
                value={inputLastName}
                onChange={e => setInputLastName(e.target.value)}
            />
            <button
                aria-label="submit new name"
                onClick={submitHandler}
            >change it</button>
            <span >{stateFirstName} {stateLastName}</span>
        </div>
    )
}

export default ComponentTest
