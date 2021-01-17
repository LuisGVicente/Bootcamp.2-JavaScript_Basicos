const logica = require("./index.js");

describe("Pruebas de Funciones para entrenar Lógica", () => {
  it("sumaMultiplos3y5(1000) es 233168", () => {
    expect(logica.sumaMultiplos3y5(1000)).toBe(233168);
  });
  it("sumaParesFibonacci() es 257114", () => {
    expect(logica.sumaParesFibonacci()).toBe(257114);
  });
  it("sumaFactorialesDivisiblesPor7(100) es 9.426890448883377e+153", () => {
    expect(logica.sumaFactorialesDivisiblesPor7(100)).toBe(
      9.426890448883377e153
    );
  });
  it("sumaParesDivisible44(10000) es false", () => {
    expect(logica.sumaParesDivisible44(10000)).toBe(false);
  });
  it("productoDivisible7(1000) es false", () => {
    expect(logica.productoDivisible7(1000)).toBe(false);
  });
  it("primo(79) es true", () => {
    expect(logica.primo(79)).toBe(true);
  });
  it("primos(1000) es [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]", () => {
    expect(logica.primos(100).toString()).toBe(
      [
        2,
        3,
        5,
        7,
        11,
        13,
        17,
        19,
        23,
        29,
        31,
        37,
        41,
        43,
        47,
        53,
        59,
        61,
        67,
        71,
        73,
        79,
        83,
        89,
        97,
      ].toString()
    );
  });
  it("factores(10) es [1,2,5,10]", () => {
    expect(logica.factores(10).toString()).toBe([1, 2, 5, 10].toString());
  });
});
