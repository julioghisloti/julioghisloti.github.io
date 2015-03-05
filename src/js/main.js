var altura = document.body.clientHeight;
if(document.body.clientHeight <= 600){
	var altura = 600;
}

document.getElementById('home').height(altura);


// var t = new Trianglify({
//     x_gradient: ["#11588A", "#166CA9", "#333333", "#1785D1", "#093757"]
// });

// var pattern = t.generate(largura, altura);
// $('.home').css('background-image', pattern.dataUrl);
