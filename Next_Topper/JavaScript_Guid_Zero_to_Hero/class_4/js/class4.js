


function submit(){
   var num, mot, res;
   num = document.getElementById("input_num").value;
   mot = 10;
   res = num % mot;
   document.getElementById("res").innerHTML = res; 
}

// সূত্র
// var num, last_digit, res;
// num = ইনপুট এ যে সংখ্যা দিবেন;
// mot = 10 দ্বারা মট হবে;
// res = num % mot;


function submit2(){
    var num, mot, res;
    num = document.getElementById("input_num2").value;
    mot = document.querySelector('#select').value;
    res = num % mot;
    document.getElementById("res2").innerHTML = res;
}

// সূত্র
// var num, mot, res;
// num = ইনপুট এ যে সংখ্যা দিবেন;
// mot =  যে সংখ্যা সিলেক্ট করবেন তার ভ্যালু;
// res = num % mot;


function submitDoshomik(){
    var num, mot, doshomik, res, final_res;
    num = document.getElementById("input_doshomik_num").value;
    doshomik = document.querySelector("#select_doshomik").value;
    mot = document.querySelector("#select_mot").value;

    res = num * doshomik;
    final_res = res % mot
    document.getElementById("res_doshomik").innerHTML = final_res;
}
 


// রেজাল্ট = ইনপুট এ দশমিক এর পরে যতটি সংখ্যা * (১ এর পরে ততটি সখ্যা);
// ফাইনাল_রেজাল্ট = রেজাল্ট % লাস্ট এর যত সংখ্যা দেখতে চাই ১ এর পরে তত শূন্য, যেমন;
var num, multiplication, mot, res, final_res ;
num = 9483.5486;
multiplication = 10000;
mot = 100;
res = num * multiplication;
final_res = res % mot;
console.log(final_res);


