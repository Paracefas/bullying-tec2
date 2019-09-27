function comprobar()
{
var pregunta1= document.copia.preg1.value;
var pregunta2= document.copia.preg2.value;
var pregunta3= document.copia.preg3.value;
var pregunta4= document.copia.preg4.value;
var contador= 0;

	if(pregunta1=="Deberia darle una oportunidad a Juan"||pregunta1=="Deberia buscar a alguien con quien jugar")
	{
		contador= contador + 1;
	}
	if(pregunta2=="Deberia decirle a Lucas que piensa")
	{
		contador= contador + 1;
	}
	if(pregunta3=="Deberia juntarse a jugar con otros chicos")
	{
		contador= contador + 1;
	}
	if(pregunta4=="Deberia averiguar porque no se divierten"||pregunta4=="Deberia decirle a un profe"){
		contador= contador + 1; 
	}
switch(contador)
{
	case 0:
	$.Zebra_Dialog('<strong>Mal</strong>, Tener en cuenta a los demas es importante. Puede que te lleves mal con alguien pero todos tienen el derecho participar', {
    'type':     'error',
    'title':    'Quiz resultado'
});
	break;
case 1:
	$.Zebra_Dialog('<strong>Bien</strong>, Es importante ponerse en la posicion de los demas. Entender las reglas de convivencia y recordar ponerse en la posicion de otros hace que te lleves mejor con otros', {
    'type':     'confirmation',
    'title':    'Quiz resultado'
});
	break;
case 2:
	$.Zebra_Dialog('<strong>Muy bien</strong>, Puede que alguna regla en la sala no te gusta o no entiendes porque sirve. Algunas cosas se entiende con el tiempo y es importante seguirlas caundo aun se puede mejorar', {
    'type':     'confirmation',
    'title':    'Quiz resultado'
});
	break;
case 3:
	$.Zebra_Dialog('<strong>Excelente</strong>, Recorda simepre ayudar a tus compañeros. Puede que no lo notes pero seguro agradecen que se lleven bien', {
    'type':     'confirmation',
    'title':    'Quiz resultado'
});
    break;
}


}

var app=new Vue({
	el: '#aplicacion',
	data:{ 
	  desorden: 'No se'
	}
  })


var app=new Vue({
	el:'#aplicacion1',
	data:{
		desorden1: 'No se'
	}
})


var app=new Vue({
	el:'#aplicacion2',
	data:{
		desorden2: 'No se'
	}
})


var app=new Vue({
	el:'#aplicacion3',
	data:{
		desorden3: 'No se'
	}
})


var app=new Vue({
	el: '#aplicacion4',
	data: { 
	  rpt: ''
	},
	computed:{
	 rpt: function () {
		return this.rpt;
	 }
	}
})


var app=new Vue({
	el: '#aplicacion5',
	data: { 
	  rpt2: ''
	},
	computed:{
	 rpt2: function () {
		return this.rpt2;
	 }
	}
})

var app=new Vue({
	el: '#aplicacion6',
	data: { 
	  rpt3: ''
	},
	computed:{
	 rpt3: function () {
		return this.rpt3;
	 }
	}
})

var app=new Vue({
	el: '#aplicacion7',
	data: { 
	  rpt4: ''
	},
	computed:{
	 rpt4: function () {
		return this.rpt4;
	 }
	}
})