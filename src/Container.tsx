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

function getRandomName(array: string[] = NAMES): string {
  return array[new Date().getMilliseconds() % array.length];
}

function Container() {
  const [name, setName] = useState(getRandomName());
  
  useEffect(() => {
    
    const timerId = setInterval(() => {
    
      setName(getRandomName());

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
