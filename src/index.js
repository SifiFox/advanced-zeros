module.exports = function getZerosCount(number, base) {
   let num = number;
  for(var i = 2; i <= base; i++){
    var x = 0;
      while(base % i == 0){
        x++;
        base = Math.floor(base/i);
    }
    var y = 0;
    let  num2 = number;
      while (num2/i > 0){
        y+=Math.floor(num2/i);
        num2 = Math.floor(num2/i);
    }
    if(num > y/x){ 
      num=y/x;
    } 

}
return Math.floor(num);
}