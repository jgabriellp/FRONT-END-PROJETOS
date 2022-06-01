var p1 = $('.passo-1')
var p2 = $('.passo-2')
var p3 = $('.passo-3')

p2.hide()
p3.hide()

$('#iniciar').click(function () {
	p1.hide()
	p2.show()
})

var resultado = $('#resultado')

$('#calcular').click(function(){
	p2.hide()
	p3.show()

	var peso = $('#peso').val()
	var altura = $('#altura').val()
	var imc = peso / (altura * altura)

	if (imc < 18.5) {
		resultado.append("magreza")
	} else if (18.5 < imc && imc < 25 ) {
		resultado.append("normal")
	} else if (25 < imc && imc < 30) {
		resultado.append("sobrepeso")
	} else if (30 < imc && imc  < 40) {
		resultado.append("obesidade")
	} else if (40 < imc) {
		resultado.append("obesidade grave")
	}
})

$('#limpar').click(function(){
	limpar()
})

$('#cn').click(function() {
	p3.hide()
	resultado.empty()
	p2.show()
})

$('#finalizar').click(function(){
	resultado.empty()
	limpar()
	p2.hide()
	p3.hide()
	p1.show()
})

function limpar(){
	$('#form').each(function(){
	this.reset()
})
}