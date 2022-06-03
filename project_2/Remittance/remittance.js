

function submit(){
    var total = document.getElementById("taka").value;

    var bonas = total * 2 / 100;

    var s = total - 1;

    var h = s + 1;

    var Total_bonas = h + bonas ;

    var test =  total + bonas




    console.log(test);
    // console.log();



    document.getElementById("bonas").innerHTML = bonas;
    document.getElementById("Total_bonas").innerHTML = Total_bonas ;

}