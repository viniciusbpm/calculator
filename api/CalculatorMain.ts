import CalculatorSum from './CalculatorSum'
import CalculatorSubtraction from './CalculatorSubtraction'
import CalculatorMultiplication from './CalculatorMultiplication'
import CalculatorDivision from './CalculatorDivision'

function calcultaorMain(inputs: string[]) {
    let result: number = 0
    let currentOperator: string = ""

    inputs.forEach((input: string) => {
        const number = parseFloat(input)
        if (number.toString() == "NaN") {
            currentOperator = input
        } else if (currentOperator === "") {
            result = number
        } else {
            switch (currentOperator) {
                case "+": {
                    result = CalculatorSum(result, number)
                    break
                }
                case "-": {
                    result = CalculatorSubtraction(result, number)
                    break
                }
                case "*": {
                    result = CalculatorMultiplication(result, number)
                    break
                }
                case "/": {
                    result = CalculatorDivision(result, number)
                    break
                }
            }
        }
    })
    return result
}

export default calcultaorMain