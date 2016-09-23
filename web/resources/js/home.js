/*
console.log("ok")
var sp1 = document.createElement("h2");
sp1.setAttribute("class","perso");
var sp1_content=document.createTextNode("ceci est un nouvel élément");
sp1.appendChild(sp1_content);

var sp2=document.getElementById("crotte");
var noeud=sp2.parentNode;
noeud.insertBefore(sp1,sp2);
*/
var findNumberQuestion=function(){
    var aa=$('.question').find($('.questions')).length;
    console.log(aa);
}
function createQuestion(){
    htmlQuestion();
}
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
var mon_div = null;
var nouveauDiv = null;
var temp=0;
function addQuestion(){
    findNumberQuestion();
    var nQuestion=$('#nQuestion').val();

    $(htmlQuestion(nQuestion)).appendTo('.question');
    //$(htmlAnswer(nQuestion)).appendTo('ok');

/*    nouveauDiv = document.createElement("h2");
    nouveauDiv.innerHTML = htmlQuestion(nQuestion);
    console.log(nQuestion);
    mon_div = document.getElementById("testaddQuestion");
    var noeud=mon_div.parentNode;
    console.log(noeud);
    insertAfter(mon_div,nouveauDiv);
    // noeud.insertBefore(nouveauDiv,mon_div);
    temp++;
        createQuestion();*/
    temp++
}

function addAnswer(dom) {
    //Il faut d'abord trouver l'id de la question
    var questionId=getParentId(dom);
    console.log(questionId);
    mon_div = document.getElementById(questionId+"A");
console.log(mon_div.id);
mon_div.id.indexOf(ALPHABET.charAt(temp));
    //Q1A
    var string=mon_div.id;
    //A
    var letterData=string.charAt(2);
    //A->B
    var final=ALPHABET.indexOf(letterData);
    final=ALPHABET.charAt(final+1)
    console.log("final"+final)
    if (mon_div==null){

    }

        console.log("ok :"+mon_div);
    // crée un nouvel élément div
    // et lui donne un peu de contenu
    nouveauDiv = document.createElement("div");
    var tempp=temp+1;
    console.log(tempp)
    nouveauDiv.setAttribute("class","input-group");
    nouveauDiv.setAttribute("id",tempp+"A");
    var char=ALPHABET.charAt(temp);
    nouveauDiv.innerHTML = ' <span class="input-group-addon">'+char+'.</span><input class="form-control"  type="text" value="">';
    // ajoute l'élément qui vient d'être créé et son contenu au DOM

    console.log(mon_div)
    //var noeud=mon_div.parentNode;
    //console.log(noeud);
    insertAfter(mon_div,nouveauDiv);
    //noeud.insertBefore(nouveauDiv,mon_div);
    temp++;
}
var getParentId=function(dom) {
    var a = $(dom);
    var parentId="";
    do {
        a = a.parent();
        parentId=a.attr('id');
        console.log(a)
    }
    while (a.attr('id')==undefined);
    return parentId;
};

var htmlAnswer=function(temp){
    return '<div class="input-group"> <span class="input-group-addon">'+temp+'</span><input class="form-control"  type="text" value=""></div>'
}

var htmlQuestion=function(temp){
   return '<div id="Q'+temp+'" class="questions"><div class="form-group" onclick="addAnswer(this) " id="G'+temp+'">'+
        '<label class="col-sm-2 control-label">Question'+temp+'</label>'+
    '<div class="col-sm-10">'+
        '<div class="input-group"><span class="input-group-addon has-success"><button class="btn-qcm">#'+temp+'</button> </span><input class="form-control"  type="text" value=""></div>'+
        '</div>'+
        '</div><div onclick="addAnswer()" class="form-group">'+
       '<label class="col-sm-3 control-label"></label>'+
        '<div id="ok" class="col-sm-9 "><div id="Q'+temp+'A" class="input-group">'+
       '<span class="input-group-addon">A.</span><input class="form-control test"  type="text" value="">'+
        '</div></div></div></div>'
};
 ALPHABET='ABCDEFGHIJKLMNOPQRSTUVWXYZ';