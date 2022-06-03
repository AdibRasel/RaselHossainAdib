

  function submit(){
    var Ac_Name = document.getElementById("ac_name1").value;
    
    var Ac_number = document.getElementById("ac_number").value;
    var Ac_mobile = document.getElementById("ac_mobile").value;
    
    
    
    document.getElementById("ac_name").innerHTML = Ac_Name;
    document.getElementById("ac_number_show").innerHTML = Ac_number;
    document.getElementById("ac_mobile_show").innerHTML = Ac_mobile;
    
  }
    
    // var e = b - 0 ;
    // var f = c - 0;
    // var g = d - 0;
    
    // var s = e + f + g;
    
    // var r = s == a;
    
    //     console.log(r);
    //     if( s == a){
        //       test1=  "Successful"
        //     }else{
            //       test1 =  "not Successful"
            //     }
            //     document.getElementById("test").innerHTML = test1;
            
            




        function printpart () {
            var printwin = window.open("");
            printwin.document.write(document.getElementById("toprint").innerHTML);
            printwin.stop();
            printwin.print();
            printwin.close();
          }