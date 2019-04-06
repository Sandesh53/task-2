const array =[1,9,8,7,10,11,11,13,7]; 
const input=11;
let repeat;

function repeated(){ 
for(i=0;i<array.length;i++){
    if(array[i]== input){
        repeat="True";
    }
}
} 
repeated();

console.log("Check "+repeat);