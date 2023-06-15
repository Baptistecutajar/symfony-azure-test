import { useState } from "react"

export const UiCounter = () => {
    const [counter, setCounter] = useState(1);
    return <button onClick={()=>setCounter(counter+1)}>{counter}</button>
}