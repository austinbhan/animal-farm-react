import React from 'react';
import './Main.css';
import backgroundImg from '../../background.png';
import AnimalCard from '../AnimalCard/AnimalCard.js';

export default function Main({ animal }) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      { animal.map((item, i) => <AnimalCard 
        {...item}
        key={ item.name + i } />)
      }
    </main>
  );
}

