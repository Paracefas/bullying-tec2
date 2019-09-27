function comprobar()
{
var pregunta1= document.copia.preg1.value;
var pregunta2= document.copia.preg2.value;
var pregunta3= document.copia.preg3.value;
var pregunta4= document.copia.preg4.value;
var pregunta10= document.copia.preg10.value;
var pregunta11= document.copia.preg11.value;
var pregunta12= document.copia.preg12.value;
var pregunta13= document.copia.preg13.value;
var contador= 0;

	if(pregunta1=="Le estan haciendo bullying")
	{
		contador= contador + 1;
	}
	if(pregunta2=="Avisando a un adulto responsable")
	{
		contador= contador + 1;
	}
	if(pregunta3=="Probablemente")
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


var app=new Vue({
	el: '#aplicacion8',
	data: { 
	  rpt5: ''
	},
	computed:{
	 rpt5: function () {
		return this.rpt5;
	 }
	}
})


var app=new Vue({
	el: '#aplicacion9',
	data: { 
	  rpt6: ''
	},
	computed:{
	 rpt6: function () {
		return this.rpt6;
	 }
	}
})
