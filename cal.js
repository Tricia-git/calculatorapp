function getHistory(){
    return document.getElementById("history-value").innerText;
}
function printHistory(num){
    return document.getElementById('history-value').innerText=num;
 }
 function getOutput(){
     return document.getElementById('output-value').innerText;
 }
 function printOutput(num){
     //code to make the output to be blank if nothing is computed.
    if (num ==""){
        document.getElementById('output-value').innerText=num;
    }else{
        document.getElementById('output-value').innerText=getFormattedNumber(num);
 }
    }
     
 // function to include ,(comma) in the output
 function getFormattedNumber(num){
     let n =Number(num);
     //n.tolocaleString does the work of comma.
     let value =n.toLocaleString('en');
     return value;
 }
 //printOutput('790456788');
 //function to reverse number format by removing the comma
 function reverseNumberFormat(num){
     return Number(num.replace(/,/g,''));
 }
let operator = document.getElementsByClassName('operator');
for(let i=0; i<operator.length; i++){
    operator[i].addEventListener('click',function(){
        if(this.id =='clear'){
            printHistory('');
            printOutput('');
        }
       else if(this.id =='backspace'){
            // we use reverse format to remove comma when needed
            let output=reverseNumberFormat(getoutput()).toString();
            if(output){// if output has a value
            // code to remove each digit by one when clicked
                output = output.substr(0,output.length - 1);
                printOutput(output);
            }
        }else{
            let output=getOutput();
            let history=getHistory();
            if (output!=''){
                output=reverseNumberFormat(output);
                history=history+output;
                if(this.id=='='){
                    let result=eval(history);
                    printOutput(result);
                    printHistory(''); 
            //to input the operator to output and history is set to empty     
        }else{
            history=history+this.id;
            printHistor(history);
            printOutput('');
        }

            }
        }
    });
} 
let number =document.getElementsByClassName('number');
for (let i=0; i<number.length;i++){
    number[i].addEventListener('click',function(){
      let output =reverseNumberFormat(getOutput());
      if(output != NaN){//that is if output is a number
        output=output+this.id;
        printOutput(output);
      }  
    });
}