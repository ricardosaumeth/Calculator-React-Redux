let equation: string = "";
export function IdentifyDigit(num: string) {

    let operators = ['+', '-', 'x', '÷'];

    if (num === "c") {
        equation = "";
    } else if (num === "=") {
        let lastChar = equation[equation.length - 1];
        equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
        // Final thing left to do is checking the last character of the equation. 
        //If it's an operator or a decimal, remove it
        if (operators.indexOf(lastChar) > -1 || lastChar === '.')
            equation = equation.replace(/.$/, '');

        if (equation)
            equation = eval(equation);

    } else if (operators.indexOf(num) > -1){
        // Operator is clicked
        // Get the last character from the equation
        var lastChar = equation[equation.length - 1];

        // Only add operator if input is not empty and there is no operator at the last
        if (equation !== '' && operators.indexOf(lastChar) === -1)
            equation += num;

        // Allow minus if the string is empty
        else if (equation === '' && num === '-')
            equation += num;

        // Replace the last operator (if exists) with the newly pressed operator
        if (operators.indexOf(lastChar) > -1 && equation.length > 1) {
            // Here, '.' matches any character while $ denotes the end of string, 
            //so anything (will be an operator in this case) at the end of string will 
            //get replaced by new operator
            equation = equation.replace(/.$/, num);
        }
    }else {
        equation += num;
    }

    return {
        type: 'OPERATOR',
        payload: equation.toString()
    }    
}