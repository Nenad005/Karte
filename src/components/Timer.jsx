import React, { useState, useEffect } from "react";

const Timer = ({ zavrsen, setZavrsen }) => {
  const [count, setCount] = useState(5);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive && count > 0) {
      timer = setTimeout(() => setCount((prevCount) => prevCount - 1), 1000);
    }
    return () => clearTimeout(timer); // Čišćenje tajmera
  }, [isActive, count]);

  // Proverava da li je tajmer završen
  useEffect(() => {
    if (count === 0) {
      setZavrsen(true)
    }
  }, [count]);

  const startTimer = () => {
    setIsActive(true); // Aktivira tajmer
  };

  return (
    <div>
      <div id="zapocni" onClick={startTimer}>
        {isActive ? (count > 0 ? <>{count}</> : <>Gotovo</>) : <>"Pokreni Timer"</>}
      </div>
    </div>
  );
};

export default Timer;
