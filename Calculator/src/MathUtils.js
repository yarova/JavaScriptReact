
class MathUtils {
    validateAndCorrectEquation(equation) {
        var correctedEquation = this.ensureHasSingleOperation(equation);
        correctedEquation = this.removeBeginningZero(correctedEquation);
        correctedEquation = this.calculateIfHasEqualSign(correctedEquation);
        return correctedEquation;
    }

    removeBeginningZero(equation) {
        var firstCharacter = equation.charAt(0);
        var secondCharacter = equation.charAt(1);
        var isSecondCharacterANumber = !isNaN(secondCharacter);
        if (firstCharacter === "0" && isSecondCharacterANumber) {
            return equation.substring(1);
        } else {
            return equation;
        }
    }

    ensureHasSingleOperation(text) {
        var lastCharacter = text.slice(-1);
        var lastTwoCharacters = text.slice(-2);
        var hasNumbers = lastTwoCharacters.match(/^([^0-9]*)$/) == null;
        if (hasNumbers) {
            return text;
        } else {
            return text.slice(0, -2) + lastCharacter;
        }
    }

    calculateIfHasEqualSign(text){
        //TODO: calculate result if last character is "="
        var lastCharacter = text.slice(-1);
        if (lastCharacter == '=') {
            text = `${eval(text.slice(0, -1)).toString()}`;
        }
        
        return text;
    }
}

export default new MathUtils();