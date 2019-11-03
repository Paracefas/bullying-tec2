function comprobar()
{
var pregunta8= document.Quiz.preg8.value;
var contador= 0;

	if(pregunta8=="Con la nena")
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
	$.Zebra_Dialog('<strong>Muy Bien</strong>, respondiste la pregunta correctamente', {
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