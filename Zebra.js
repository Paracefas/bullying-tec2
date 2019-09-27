function comprobar()
{
var pregunta1= document.Quiz.preg1.value;
var pregunta2= document.Quiz.preg2.value;
var pregunta3= document.Quiz.preg3.value;

var contador= 0;

	if(pregunta1=='Se ríe de su compañero')
	{
		contador= contador + 1;
	}
	if(pregunta2=='Porque se equivocó')
	{
		contador= contador + 1;
	}
	if(pregunta3=='Se confundió')
	{
		contador= contador + 1;
	}

switch(contador)
{
	case 0:
	$.Zebra_Dialog('<strong>Muy Mal</strong>, no acertaste ninguna pregunta correctamente', {
    'type':     'error',
    'title':    'Quiz resultado'
});
	break;
case 1:
	$.Zebra_Dialog('<strong>Mal</strong>, respondiste 1 pregunta correctamente', {
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
	$.Zebra_Dialog('<strong>Excelente</strong>, respondiste 3 preguntas correctamente', {
    'type':     'confirmation',
    'title':    'Quiz resultado'
});
    break;

}


}

function comprobar2()
{
var pregunta6= document.Quiz.preg6.value;
var pregunta7= document.Quiz.preg7.value;
var pregunta8= document.Quiz.preg8.value;

var contador= 0;

	if(pregunta6=='Pilar')
	{
		contador= contador + 1;
	}
	if(pregunta7=='Triste')
	{
		contador= contador + 1;
	}
	if(pregunta8=='Con la nena')
	{
		contador= contador + 1;
	}

switch(contador)
{
	case 0:
	$.Zebra_Dialog('<strong>Muy Mal</strong>, no acertaste ninguna pregunta correctamente', {
    'type':     'error',
    'title':    'Quiz resultado'
});
	break;
case 1:
	$.Zebra_Dialog('<strong>Mal</strong>, respondiste 1 pregunta correctamente', {
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
	$.Zebra_Dialog('<strong>Excelente</strong>, respondiste 3 preguntas correctamente', {
    'type':     'confirmation',
    'title':    'Quiz resultado'
});
    break;

}


}

function comprobar3()
{
var pregunta9= document.Quiz.preg9.value;

var contador= 0;

	if(pregunta9=='Explicandole a Pilar que todos vamos a la escuela para aprender')
	{
		contador= contador + 1;
	}	

switch(contador)
{
	case 0:
	$.Zebra_Dialog('<strong>Muy Mal</strong>, no respondiste la pregunta correctamente', {
    'type':     'error',
    'title':    'Quiz resultado'
});
	break;
case 1:
	$.Zebra_Dialog('<strong>Excelente</strong>, respondiste la pregunta correctamente', {
    'type':     'confirmation',
    'title':    'Quiz resultado'
});
	break;

}


}


