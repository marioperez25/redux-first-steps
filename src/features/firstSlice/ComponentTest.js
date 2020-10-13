import React, { Component, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    changeName,
    componentTestSelector,
  } from './componentTestSlice';

export function ComponentTest(){
    //const namePlaceholder = useSelector(componentTestSelector);//crashes app
    const dispatch = useDispatch();
    const [inputName, setInputName] = useState('');

    return(
        <div>
            <label>New</label>
            <input
                aria-label="Set name"
                value={inputName}
                onChange={e => setInputName(e.target.value)}
            />
            <button
          aria-label="submit new name"
          onClick={() => dispatch(changeName())}
        >change it</button>
            <span >"namePlaceholder"</span>
        </div>
    )
}

export default ComponentTest
