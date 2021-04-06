function adicionarValor() {
  var valorEmDolar = document.querySelector("#valor");
  var valorEmDolar2 = valorEmDolar.value;
  var valorEmReais = valorEmDolar2 * 5.6;
  valorEmReais = valorEmReais.toFixed(2);
  console.log(valorEmReais);
  var valorEmReais2 = "O valor em Reais é: " + "R$" + valorEmReais;

  var valorFinal = document.getElementById("valorFinal");
  valorFinal.innerHTML = valorEmReais2;
}
