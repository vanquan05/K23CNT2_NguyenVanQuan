var x=100;//Global 
function varDemo(){
    console.log("x ben trong hanm:",x);
}
//
console.log("x ben trong ham:",x);
// thuc thi ham
varDemo();

//local
function fn_demo(){
    var y=200;//local
    console.log("y ben trong ham:",y);
}
fn_demo();
 // y ben ngoai ham 
 console.log("y ben ngoai ham:",y);// ==error: ReferenceError: y is not defined

 //vi du: ChatGPT / Deepseek
 
