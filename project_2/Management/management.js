


function daily_submit(){
var a = document.getElementById("Total_Amount").value;

var b = document.getElementById("Account_Balance").value;
var c = document.getElementById("cash").value;
var d = document.getElementById("cash_dokan").value;


var e = b - 0 ;
var f = c - 0;
var g = d - 0;

var s = e + f + g;

var r = s == a;

    console.log(r);
    if( s == a){
      test1=  "Successful"
    }else{
      test1 =  "not Successful"
    }
    document.getElementById("test").innerHTML = test1;


}








// function daily_submit(){
//     if( a = Total_amount ){
//         greeting =  "Not Success Full";
//     }else{ greeting ="Successful";
//     }
//     document.getElementById("test").innerHTML = greeting;
//     console.log(a)
// }

// document.write(intotal_cash)


// function Total_Amout_Submit(){
// var total_amount = document.getElementById("Total_Amount").value;
//  document.getElementById("test").innerHTML = total_amount;
// }