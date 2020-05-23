
let container=document.getElementById("container");
container.style.width="396px";
container.style.height="23px";

container.style.border="2px solid purple";
let addbutton=document.getElementById("addbutton")
addbutton.style.color="orange"

addbutton.style.backgroundColor="black"

let input=document.getElementById("mytext")
input.style.width="91.5%"
function myFunction() {
    if( document.getElementById("mytext").value!==""){
        var btn=document.createElement("div");
    btn.innerText=document.getElementById("mytext").value; 
 
    btn.style.border="2px solid grey";
    
    btn.style.width="396px";
    btn.style.height="23px";
    btn.style.marginTop="4px";
  
   
    
    var but=document.createElement("BUTTON");
    var but1=document.createElement("BUTTON");
    but.innerHTML="Delete";
    but.style.width="50px";
    but.style.float="left";
    but1.style.float="left";
    but1.style.height="23px";

  
    but.style.height="23px";
    but.style.backgroundColor="purple";
    but1.innerHTML="Done";
    but.style.color="white";
    but1.style.color="white";
    but1.style.backgroundColor="purple";
     }



function removeEl(){
    btn.remove();
}


  let bool=true;
    function done(){
 
        btn.style.color="coral"
        btn.style.textAlign="center";
        btn.style.fontFamily="Didot, serif"
      if(bool==true){
        btn.style.textDecoration="line-through";
        bool=false;
      }
       else{
        btn.style.textDecoration="none";
        bool=true;
       } 
     }
    
   but1.addEventListener("click",done);
   but.addEventListener("click",removeEl);
   document.body.appendChild(btn).appendChild(but)
   document.body.appendChild(btn).appendChild(but1)
   btn.addEventListener("click",noDone);
  }


