// Given a string, return true or false depending on whether that string has balanced parentheses.

// For the purposes of this problem, you only need to worry about parentheses ( and ), not other opening-and-closing marks, like curly brackets, square brackets, or angle brackets.

// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "(((Balanced)))(."
let sample5 = ")(."
// Write your solution below:

let balancedParens = (str) => {
    let totalOpenParens = 0
    let totalClosedParens = 0
    for (let i = 0; i < str.length; i++) {
        if (totalClosedParens > totalOpenParens) {
            return console.log('false')
        }
        if (str[i] === '(') {
            totalOpenParens++
        } if (str[i] === ')') {
            totalClosedParens++
        }
    }
    
    if (totalOpenParens === totalClosedParens) {
        return console.log('Balanced')
    } else {
        return console.log('Unbalanced')
    }
}

balancedParens(sample1)
balancedParens(sample2)
balancedParens(sample3)
balancedParens(sample4)
balancedParens(sample5)

