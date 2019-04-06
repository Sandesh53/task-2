const array =[1,9,8,7,10,11,11,13,7]; 
const input=11;
let repeat=0;
 
function repeated(){ 
for(i=0;i<array.length;i++){
    if(array[i]== input){
        repeat=repeat+1;
    }
}
}
 
repeated();

console.log("Your given number "+input+ " is repeated "+repeat+" times");