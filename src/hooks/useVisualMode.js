import { useState } from "react";

const useVisualMode = initialMode => {
  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([]);

  const transition = (newMode, replace) => {
    !replace && setHistory([...history, mode]);
    setMode(newMode);
  };

  const back = () => {
    if (history.length > 0) {
      setMode(history[history.length - 1]);
      setHistory(history.slice(0, history.length - 1));
    }
  };

  return { mode, transition, back };
};

export default useVisualMode;
