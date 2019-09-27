function comprobar()
{
var pregunta1= document.copia.preg1.value;
var pregunta2= document.copia.preg2.value;
var pregunta3= document.copia.preg3.value;
var contador= 0;
var cont2= 0;

	if(pregunta1=="Significa nos vemos como personas mal educadas")
	{
		contador= contador + 1;
	}
	if(pregunta2=="Su compañera se siente incomoda con eso")
	{
		contador= contador + 1;
	}
	if(pregunta3=="Deberia Tener buenos modales")
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
	$.Zebra_Dialog('<strong>Bien</strong>, respondiste 1 pregunta correctamente', {
    'type':     'confirmation',
    'title':    'Quiz resultado'
});
	break;
case 2:
	$.Zebra_Dialog('<strong>Muy bien</strong>, respondiste 2 preguntas correctamente', {
    'type':     'confirmation',
    'title':    'Quiz resultado'
});
	break;
case 3:
	$.Zebra_Dialog('<strong>Excelente</strong>, respondiste 3 preguntas correctamente', {
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
	el:'#aplicacion4',
	data:{
		desorden4: 'No se'
	}
})

var app=new Vue({
	el:'#aplicacion5',
	data:{
		desorden5: 'No se'
	}
})

var app=new Vue({
	el:'#aplicacion6',
	data:{
		desorden6: 'No se'
	}
})



