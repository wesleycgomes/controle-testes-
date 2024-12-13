// Importa as funções da Calculadora.js
const { somar, subtrair, multiplicar, dividir } = require('../Calculadora');

// Teste da função somar
test('deve somar dois números', () => {
  expect(somar(2, 3)).toBe(5);  // Verifica se 2 + 3 é igual a 5
});

// Teste da função subtrair
test('deve subtrair dois números', () => {
  expect(subtrair(5, 3)).toBe(2);  // Verifica se 5 - 3 é igual a 2
});

// Teste da função multiplicar
test('deve multiplicar dois números', () => {
  expect(multiplicar(2, 3)).toBe(6);  // Verifica se 2 * 3 é igual a 6
});

// Teste da função dividir
test('deve dividir dois números', () => {
  expect(dividir(6, 2)).toBe(3);  // Verifica se 6 dividido por 2 é igual a 3
  expect(dividir(5, 0)).toBe("Erro: divisão por zero");  // Verifica se divisão por zero retorna o erro correto
});
