function update() {



    var element = document.getElementById("myprogressBar");   
    var width = 1;
    var identity = setInterval(scene, 10);
    function scene() {
      if (width >= 100) {
        clearInterval(identity);
      } else {
        width++; 
        element.style.width = width + '%'; 
        element.innerHTML = width * 1  + '%';
      }
    }



    // window.alert("hello bangladesh")
    // var mul_malik, ma, chele, meye;
    var mul_malik, ma, chele, meye;
    mul_malik = document.getElementById("mul_malik").value;
    ma = document.getElementById("select__2nd_malik").value;
    chele = document.getElementById("select_3rd_malik_chele").value;
    meye = document.getElementById("select_3rd_malik_meye").value;

    var total = mul_malik / 3 ;
    var chele_paben = total / chele * 2;
    var meye_paben = total / meye * 1;
    document.getElementById("chele").innerHTML = chele_paben;
    document.getElementById("meye").innerHTML = meye_paben;

    if ("Alive" === ma){
        var total_ma = mul_malik / 10;
        var  ma_paben = total_ma * 2.5;
        var chele_paben = total_ma * 5 / chele;
        var meye_paben = total_ma * 2.5 / meye;

        var ma_total_paben = ma_paben.toString().slice(0, 4);

        document.getElementById("ma").innerHTML = ma_total_paben;
        document.getElementById("chele").innerHTML = chele_paben;
        document.getElementById("meye").innerHTML = meye_paben;
    }

    // window.alert("hello bangladesh")



    // var mul_malik, ma, chele, meye;

    // mul_malik = document.getElementById("mul_malik").value;
    // ma = document.getElementById("select__2nd_malik").value;
    // chele = document.getElementById("select_3rd_malik_chele").value;
    // meye = document.getElementById("select_3rd_malik_meye").value;
    // document.getElementById("ans1").innerHTML = "hell";
    // window.alert("hello bangladesh")
}