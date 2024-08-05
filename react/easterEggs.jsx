import React from 'react';

export const EggList = (props) => {
  const eggs = props.eggs.map((el,i)=><EasterEgg key={i} name = {el} />)
  return( <ul>{eggs}</ul>)
};

export const EasterEgg = (props) => {
  return <li>{props.name}</li>
};