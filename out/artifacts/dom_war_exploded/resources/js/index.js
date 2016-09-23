console.log($('#exampleInputEmail1').parent().parent().attr('id'));

var getParentId=function(dom) {
    var a = $(dom);
    var parentId="";
    do {
        a = a.parent();
        console.log(a)
    }
    while (parentId=a.attr('id')==undefined);
    return parentId;
};

var addAnswer=function(question,option){
    //Regarder la dernière réponse de la question
    if (option){
        for(var i=1;i<=option;i++){
            $(buildhtmlAnswer(question,option-1)).appendTo('#Q'+question+" .answer")

        }
    }

};

//Count how many questions the doc has.
    var findNumberQuestion=function(){
    return $('#questions').find($('.question')).length;

}
var addQuestion=function(){
    //Trouve le nombre de question actuel
    var currentNumberOfQuestion=findNumberQuestion();
    console.log("currentNumberOfQuestion : "+currentNumberOfQuestion)
    //Nombre de question choisi
    var NOMBRE_TOTAL_QUESTIONS=$('#nQuestion').val();
    console.log("NOMBRE_TOTAL_QUESTIONS : "+NOMBRE_TOTAL_QUESTIONS);
    //Regarde si le nombre de question déjà présent est supérieur ou inférieur à celui demandé
    //Si c'est supérieur, on supprime les questions en trop
    if(NOMBRE_TOTAL_QUESTIONS<currentNumberOfQuestion){
        for(var i=currentNumberOfQuestion;i>NOMBRE_TOTAL_QUESTIONS;i--){
            $("#Q"+i).remove();
        }
    }
    //Sinon on ajoute les questions
    else{
        for(var question=currentNumberOfQuestion+1;question<=NOMBRE_TOTAL_QUESTIONS;question++){
            $(buildhtmlQuestion(question)).appendTo('#questions');
            $(buildhtmlAnswerDom()).appendTo('#Q'+question);
            addAnswer(question,2);
        }
    }



}
var buildhtmlQuestion=function(questionNumber){


    return  '<div id="Q'+questionNumber+'" class="question" >' +
                '<div class="form-group"   id="G'+questionNumber+'">'+
                    '<label class="col-sm-2 control-label">Question'+questionNumber+'</label>'+
                    '<div class="col-sm-10">'+
                        '<div class="input-group">' +
                            '<span class="input-group-addon has-success">' +
                                '<button class="btn-qcm">#'+questionNumber+'</button> ' +
                            '</span>' +
                            '<input class="form-control"  type="text">' +
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'
};
var buildhtmlAnswerDom=function(){
    return  '<div onclick="addAnswer()" class="form-group">'+
                '<label class="col-sm-3 control-label"></label>'+
                '<div class="answer" class="col-sm-9 ">' +
                    /*'<div id="Q'+questionNumber+'A" class="input-group">'+
                        '<span class="input-group-addon">A.</span>' +
                        '<input class="form-control test"  type="text" value="">'+
                    '</div>' +*/
                '</div>' +
            '</div>'
};
var buildhtmlAnswer=function(questionNumber,answerNumber){
    var letter=ALPHABET(answerNumber);
return  '<div id="Q'+questionNumber+letter+'" class="input-group">'+
            '<span class="input-group-addon">'+letter+'.</span>' +
            '<input class="form-control test"  type="text" value="">'+
        '</div>'
}

//Donne la lettre en fonction de sa position
ALPHABET=function(index){
    var alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet.charAt(index);
}