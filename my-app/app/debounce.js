import {useState,useCallback} from "react";

export default function App(){
    const[normal,setNormal] = useState("");
    const[debounce,setDebounce] = useState("");

    const debounceFunc = function(fn,t=1000){
        let delay;
        return function(...args){
            clearTimeout(delay);
            delay = setTimeout(()=>fn(...args),t);
        };
    };

    const debounceRequest = useCallback(
        (value)=>handleChangeDebounce(value),[]
    );
    const handleChange=(e)=>{
        setNormal(e.target.value);
        debounceRequest(e.target.value);
    };
    const handleChangeDebounce = debounce((val)=>{
        setDebounce(val);
    },1000);
    return (
        <div>
            <input type="text" onChange={(e)=>handleChange(e)}/>
            <h1>Normal:{normal}</h1>
            <h1>Debounce:{debounce}</h1>
        </div>
    )
}