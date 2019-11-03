function comprobar()
{
var pregunta10= document.l.preg10.value;
var contador= 0;

	if(pregunta10=="Porque fue obligado")
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
	  molestan: 'No se'
	}
  })


var app=new Vue({
	el:'#aplicacion1',
	data:{
		molestan1: 'No se'
	}
})


var app=new Vue({
	el:'#aplicacion2',
	data:{
		molestan2: 'No se'
	}
})


var app=new Vue({
	el:'#aplicacion3',
	data:{
		molestan3: 'No se'
	}
})


var app=new Vue({
	el:'#aplicacion4',
	data:{
		molestan4: 'No se'
	}
})


var app=new Vue({
	el:'#aplicacion5',
	data:{
		molestan5: 'No se'
	}
})


var app=new Vue({
	el:'#aplicacion6',
	data:{
		molestan6: 'No se'
	}
})


var app=new Vue({
	el:'#aplicacion7',
	data:{
		molestan7: 'No se'
	}
})


var app=new Vue({
	el:'#aplicacion8',
	data:{
		molestan8: 'No se'
	}
})


var app=new Vue({
	el:'#aplicacion9',
	data:{
		molestan9: 'No se'
	}
})
