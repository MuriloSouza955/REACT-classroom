import "./global.css";
import { useEffect, useState } from "react";

import { Button } from "./components/button";
// import { useMessage } from "./hooks/useMessage"
import styles from "./app.module.css";

export function App() {
  const [count, setCount] = useState(0);
  // const message = useMessage({name: "Murilo", age: 18})

  function handleAdd() {
    setCount(count + 1);
    
  }

  function handleRemove() {
    if(count > 0){
      setCount(count - 1);
    }
  }

  useEffect(() => {
    if (count > 0){
      console.log( "O valor mudou para: " + count )
    }
  }, [count]);
  return (
    <div className={styles.container}>
      <Button name="Adicionar" onClick={handleAdd} />
      <span>{count}</span>
      <Button name="Remover" onClick={handleRemove} />
    </div>
  );
}