var mytab=[]
function pusch(){
var inputtext=document.getElementById('list').Value;

 mytab.push(inputtext)
var text=""
for(i=0;i<mytab.length;i++){
   text=text+mytab[i]
}

document.getElementById('unetache').innerHTML=text


}