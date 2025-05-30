import { useEffect, useRef } from "react";

type GreetingProp = {
  name: string;
}

function Greeting({ name }: GreetingProp) {
  const nameRef = useRef(name);
  
  useEffect(() => {
    console.log('Текущее имя: ', name);
    console.log('Прошлое имя: ', nameRef.current);
    nameRef.current = name;
  }, [name]);

  return (
    <p>{name != nameRef.current ? `You've changed your name, don't ya? Now you're ${name}!` : `Hello, ${name}!`}</p>
  );
}

export default Greeting;