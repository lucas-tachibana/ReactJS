import React, {useState, useEffect} from 'react'
import '../Ifoodcounter/Ifoodcounter.css'

export default function Ifoodcounter() {

    const [value, setValue] = useState(1);
    const [buttonStyle, setButtonStyle] = useState("counter-button-minus-active");
    const [total, setTotal] = useState(0);
    const itemValue = 2.35;
        

    useEffect(() => {
        setTotal(value * itemValue);
    },[value])

    function down() {
        if (value <= 1) {
            setButtonStyle("counter-button-minus-desactive")
        }
        if(value > 0) {
            setValue(value - 1);
        }
    }

    function up() {
        setButtonStyle("counter-button-minus-active")
        setValue(value + 1)
    }

  return (
    <div className="counter-wrapper">
        <button
            className={buttonStyle}
            onClick={down}
        >
            -
        </button>
        <p>{value}</p>
        <button
            className="counter-button-plus-active"
            onClick={up}
        >
            +
        </button>
        <button id="moeda">R${total.toFixed(2)}</button>
    </div>
  );
}
