function comprobar()
{
var q1 = document.forms.form.q1.value;
var q2 = document.forms.form.q2.value;
var q3 = document.forms.form.q3.value;
var q4 = document.forms.form.q4.value;
var q5 = document.forms.form.q5.value;
var q6 = document.forms.form.q6.value;

var questions = [q1, q2, q3, q4, q5, q6];
var answers = ["b","c","c","a","d","b"];
	
	var points = 0;
    var total = 6;

	if(q1==b)
	{
		points= points + 1;
	}
	if(q2==c)
	{
		points= points + 1;
	}
	if(q3==c)
	{
		points= points + 1;
    }
    if(q4==a)
	{
		points= points + 1;
    }
    if(q5==d)
	{
		points= points + 1;
    }
    if(q6==b)
	{
		points= points + 1;
	}
switch(points)
{
	case 0:
	$.Zebra_Dialog('<strong>Regular</strong>, no acertaste ninguna pregunta correctamente', {
    'type':     'error',
    'title':    'Quiz resultado'
});
	break;
case 1:
	$.Zebra_Dialog('<strong> Muy mal</strong>, respondiste 1 pregunta correctamente', {
    'type':     'confirmation',
    'title':    'Quiz resultado'
});
	break;
case 2:
	$.Zebra_Dialog('<strong>Mal</strong>, respondiste 2 preguntas correctamente', {
    'type':     'confirmation',
    'title':    'Quiz resultado'
});
	break;
case 3:
	$.Zebra_Dialog('<strong>Casi bien</strong>, respondiste 3 preguntas correctamente', {
    'type':     'confirmation',
    'title':    'Quiz resultado'
});
    break;
case 4:
	$.Zebra_Dialog('<strong>Bien</strong>, respondiste 4 preguntas correctamente', {
    'type':     'confirmation',
    'title':    'Quiz resultado'
});
    break;
case 5:
	$.Zebra_Dialog('<strong>Muy bien</strong>, respondiste 5 preguntas correctamente', {
    'type':     'confirmation',
    'title':    'Quiz resultado'
});
    break;
case 6:
	$.Zebra_Dialog('<strong>Excelente</strong>, respondiste 6 preguntas correctamente', {
    'type':     'confirmation',
    'title':    'Quiz resultado'
});
	break;       

}


}
