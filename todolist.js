var myNodelist = document.getElementsByTagName("LI")
var i  
for (let i = 0; i <myNodelist .length; i++) {
    const element = array[i];
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  }
    
  
