function comprobar()
{
var pregunta1= document.copia.preg1.value;

var contador= 0;

	if(pregunta1=="2. Contándole a la maestra lo que puede llegar a ocurrir entre Antonio y Patricio a la salida de la escuela.")
	{
		contador= contador + 1;
	}
switch(contador)
{
	case 0:
	$.Zebra_Dialog('<strong>Mal</strong>, no respondiste la pregunta correctamente', {
    'type':     'error',
    'title':    'Quiz resultado'
});
	break;
case 1:
	$.Zebra_Dialog('<strong>Muy bien</strong>, respondiste la pregunta correctamente', {
    'type':     'confirmation',
    'title':    'Quiz resultado'
});
	break;
}


}

var app=new Vue({
	el: '#aplicacion',
	data:{ 
	  desorden: 'Esperando respuesta'
	}
  })


var app=new Vue({
	el:'#aplicacion1',
	data:{
		desorden1: 'Esperando respuesta'
	}
})


var app=new Vue({
	el:'#aplicacion2',
	data:{
		desorden2: 'Esperando respuesta'
	}
})


var app=new Vue({
	el:'#aplicacion3',
	data:{
		desorden3: 'Esperando respuesta'
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