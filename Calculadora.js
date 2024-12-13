// Funções da calculadora
const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => {
  if (b === 0) {
    return "Erro: divisão por zero";
  }
  return a / b;
};

// Exporta as funções para serem usadas em outros arquivos
module.exports = { somar, subtrair, multiplicar, dividir };
