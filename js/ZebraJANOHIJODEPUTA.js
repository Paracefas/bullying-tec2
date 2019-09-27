function comprobar()
{
var pregunta1= document.copia.preg1.value;
var pregunta2= document.copia.preg2.value;
var pregunta3= document.copia.preg3.value;
var pregunta4= document.copia.preg4.value;
var contador= 0;

	if(pregunta1=="Esta tomando una moneda")
	{
		contador= contador + 1;
	}
	if(pregunta2=="Porque no tiene monedas para el recreo")
	{
		contador= contador + 1;
	}
	if(pregunta3=="Deberia devolverla")
	{
		contador= contador + 1;
	}
	if(pregunta4=="Guardar mejor sus cosas")
	{
		contador= contador + 1;
	}
switch(contador)
{
	case 0:
	$.Zebra_Dialog('<strong>Mal</strong>, no acertaste ninguna pregunta correctamente', {
    'type':     'error',
    'title':    'Quiz resultado'
});
	break;
case 1:
	$.Zebra_Dialog('<strong>Regular</strong>, respondiste 1 pregunta correctamente', {
    'type':     'confirmation',
    'title':    'Quiz resultado'
});
	break;
case 2:
	$.Zebra_Dialog('<strong>Bien</strong>, respondiste 2 preguntas correctamente', {
    'type':     'confirmation',
    'title':    'Quiz resultado'
});
	break;
case 3:
	$.Zebra_Dialog('<strong>Muy Bien</strong>, respondiste 3 preguntas correctamente', {
    'type':     'confirmation',
    'title':    'Quiz resultado'
});
case 4:
	$.Zebra_Dialog('<strong>Perfecto</strong>, respondiste 4 preguntas correctamente', {
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


