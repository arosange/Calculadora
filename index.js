
let buttons = document.querySelectorAll('button');

let acBtn=document.getElementById("ac");
let equal= document.getElementById("igual");

let valueBox = document.getElementById("resultadosInput");
let input = document.createElement("input");

input.readOnly = true; 
valueBox.appendChild(input);

let operacion= "";
let num1="";


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      
        let btnValue = this.value;
         acBtn.innerText = "C";
      
        
         if (!isNaN(btnValue) || btnValue== "." ){
            num1 += btnValue;
            input.value= num1;
            
         }

         else if (btnValue === "+" || btnValue === "-" || btnValue === "*" || btnValue === "/") {
            if (num1 !== '') {
                operacion += num1+ btnValue;  
                num1 = '';  
                input.value = btnValue;  
            }
        }
    });
}



document.getElementById("ac").addEventListener("click", function(){
    if(num1 !=="" || operacion !== ""){
        input.value="";
        num1="";
        operacion="";
    }

    acBtn.innerText = "AC"; 
}
);


equal.addEventListener("click", function(){


    if(num1!==""){
        operacion += num1;
    }

     if (operacion.includes("/0")){
        input.value= "Error";
        num1 = '';
        operacion='';
        return;
      
    }
   
    try{
        let answer = eval(operacion);
                input.value = answer;
                num1 = answer;
                operacion="";

            } 
            
            catch (error) {
                input.value = "Error";
                num1 = '';
                operacion='';
                
            }
        }

    );
    

 
document.getElementById("porcentaje").addEventListener("click",function(){

    let result=input.value/100;

   /* if (!isNaN(input.value&& input.value !=="")){
        input.value=result;
        num1 = result;
    }
*/
if(input.value ==""){
    input.value="";
}
else{
    input.value=result;
}

  

});
    
document.getElementById("numNegativo").addEventListener("click", function (){
    if (input.value!==""|| !isNaN(input.value)){
        let negativo= input.value*-1;
        num1= negativo;
        input.value=negativo;
    }
    else{
        btnValue="";
        
    }

});



/* tareas por realizar:

Darle valor a los botones x
hacer que se imprima ese valor en el inputx 
lograr unir los numeros x
cuando se toque un simbolo que desaparezca el numero aparezca el simbolo y crear el otro numero 
Cuando se de el = que realice la operacion 
Imprimir el resultado 
Poder borar el resultado o poder continar con otra operacion con el resultado de la operacion 



document.querySelector('button').addEventListener("click", function(){

    let btnValue= document.querySelector('button').value;
    console.log(btnValue);
    valueBox= document.getElementById('resultadosInput');

    var input = document.createElement("input");
      input.value = btnValue; 
      console.log(btnValue);
      
      
      valueBox.appendChild(input);
    
      input.readOnly = true; 
     
});
*/

