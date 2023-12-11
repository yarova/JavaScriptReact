import MathUtils from "./MathUtils";

test("when text ends with equal sign then calculate result", () => {
    var result = MathUtils.validateAndCorrectEquation('2+2=');
    expect(result).toBe('4');
});
