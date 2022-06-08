import './animalCard.css';

export default function animalCard(name, catchphrase) {
  return (

    <div className = 'animal-card'>
        
      <img src = {`/public/animals/${name}.svg`}></img>
      <p>{name}</p>
      <p>{catchphrase}</p>
    </div>

  );
}