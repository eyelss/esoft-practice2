import { useEffect, useState } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {

      setDate(new Date());

    }, 1_000);
    
    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      <p>{`${date.toLocaleTimeString('ru-RU')}-${date.toLocaleDateString('ru-RU')}`}</p>
      <b>{date.getMinutes() % 5 == 0 ? ' (5-DIVIDABLE)' : ''}</b>
    </div>
  )
}

export default Clock;