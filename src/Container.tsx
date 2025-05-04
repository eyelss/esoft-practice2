import { useEffect, useState } from "react";
import Greeting from "./Greeting";
import Clock from "./Clock";
import Header from "./Header";

const NAMES = [
  "Ethaniel",
  "Kieran",
  "Lysander",
  "Darian",
  "Orson",
  "Seraphina",
  "Elowen",
  "Isolde",
  "Valentina",
  "Calliope",
  "Rowan",
  "Sage",
  "Avery",
  "Finley",
  "Remy",
]

function getRandomName(skip?: string, array: string[] = NAMES): string {
  const rndIndex = new Date().getMilliseconds() % array.length;

  return array[rndIndex] == skip ? 
    array[(rndIndex + 1) % array.length] : 
    array[rndIndex];
}

function Container() {
  const [name, setName] = useState(getRandomName());
  
  useEffect(() => {
    
    const timerId = setInterval(() => {
    
      setName(name => getRandomName(name));

    }, 10_000)

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="container">
      <Header/>
      <Greeting name={name}/>
      <Clock/>
    </div>
  );
}

export default Container;
