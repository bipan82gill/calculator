const commafy = (value) =>{
    let output ="";
    let decimal ="";
    let isNeg= false;

if(value.includes('.')){
    output = value.substring(0, value.indexOf("."));
    decimal = value.substring(value.indexOf("."));
}else{
    output = value;
}
if(parseFloat(value)<0){
    isNeg = true;
    output = output.substring(1);
}
console.log("value", value);
console.log("isNeg", isNeg);
console.log("output", output);
console.log("decimal", decimal);
return isNeg ? 
"-" + parseFloat(output).toLocaleString()+ decimal
: parseFloat(output).toLocaleString() + decimal;
}
export default commafy;