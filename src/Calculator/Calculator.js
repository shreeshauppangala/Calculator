import React, { useState } from 'react'
import Output from './Output/Output';
import Buttons from "./Buttons/Buttons";


const Calculator = () => {

    const [result, setResult] = useState('')

    let onClick = button => {

        if (button === "=") {
            calculate()
        }

        else if (button === "C") {
            reset()
        }
        else if (button === "CE") {
            backspace()
        }

        else {
            setResult(result + button)
        }
    };


    let calculate = () => {
        var checkResult = ''
        if (result.includes('--')) {
            checkResult = result.replace('--', '+')
        }

        else {
            checkResult = result
        }

        try {
            setResult(
                // eslint-disable-next-line
                (eval(checkResult) || "") + "")
        } catch (e) {
            setResult("error")

        }
    };

    const reset = () => setResult("")

    const backspace = () =>  setResult(result.slice(0, -1))


    return (
            <div>
                <Output result={result} />
                <Buttons onClick={onClick} />
            </div>
    );
}

export default Calculator
