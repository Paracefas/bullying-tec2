function comprobar()
{
var pregunta1= document.s.preg1.value;
var contador= 0;

	if(pregunta1=="Significa que nos vemos como personas maleducadas")
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



