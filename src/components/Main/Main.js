import React from 'react';
import './Main.css';
import backgroundImg from '../../background.png';
import animalCard from '../animalCard/animalCard.js';

export default function Main({ animal }) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      { animal.map((item, i) => <animalCard 
        {...item}
        key = { item.catchphrase + i } />)
      };
    </main>
  );
}