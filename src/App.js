import React from 'react';
import DinosaurCard from './DinosaurCard.js';
import './App.css';

function App() {
  return (
    <div className="card">
      <DinosaurCard name={"Allosaurus"} avatar={"C"} subheader={"CARNIVORE"} image={"http://images.dinosaurpictures.org/Allosaurus0003_091b.jpg"} content={"Allosaurus was an apex predator in the Late Jurassic in North America."} facts={"Allosaurus was an apex predator in the Late Jurassic in North America."} />
      <DinosaurCard name={"Apatosaurus"} avatar={"H"} subheader={"HERBIVORE"}image={"http://images.dinosaurpictures.org/apatosaurus_33e1.jpg"} content={"Named the 'deceptive lizard' because its skull was confused with those of other sauropods until 1909."}/>
      <DinosaurCard name={"Brachiosaurus"} avatar={"H"} subheader={"HERBIVORE"} image={"http://images.dinosaurpictures.org/papo_brachiosaurus_2012_cf3f.jpg"} content={"Brachiosaurus was a large, North American sauropod dinosaur with an arch encircling its nasal opening"}/>
    </div>
  );
}

export default App;
