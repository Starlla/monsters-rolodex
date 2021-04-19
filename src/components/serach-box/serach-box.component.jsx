import React from 'react';
import './serach-box.styles.css';
export const SerachBox = ({onSearchChange})=> (
  <input className="search" type="search" placeholder="serach monsters" onChange={onSearchChange}/>
)