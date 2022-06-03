// window.onload = () => {
//     main()
// };

function button(){
 const bg = document.getElementById("body");
 const btn = document.getElementById("btn");
 const color = genaretRGBColor();

 bg.style.backgroundColor = color;
};
function button_text(){
 const bg = document.getElementById("text");
 const btn = document.getElementById("btn");
//  const color = genaretRGBColor();
 const color = hexadisimel();

 bg.style.color = color;
 document.getElementById("ok").innerHTML = color;
};




function genaretRGBColor() {

    const color_code_1 = Math.floor(Math.random() * 255);
    const color_code_2 = Math.floor(Math.random() * 255);
    const color_code_3 = Math.floor(Math.random() * 255);

    return `rgb(${color_code_1}, ${color_code_2}, ${color_code_3})`
}



function hexadisimel() {

    const color_code_1 = Math.floor(Math.random() * 255);
    const color_code_2 = Math.floor(Math.random() * 255);
    // const color_code_3 = Math.floor(Math.random() * 255);
    const hexa_color = "#" + color_code_1;
    const hx_color = hexa_color + color_code_2;

     return hx_color



    // return `rgb(${color_code_1}, ${color_code_2}, ${color_code_3})`
}




// function hexadisimel() {

//     const color_code_1 = Math.floor(Math.random() * 255);
//     const color_code_2 = Math.floor(Math.random() * 255);
//     // const color_code_3 = Math.floor(Math.random() * 255);
//      const hx_color = (color_code_1).toString + color_code_2;
//      const hexa_color = "#" + hx_color;

//      return hexa_color



//     // return `rgb(${color_code_1}, ${color_code_2}, ${color_code_3})`
// }












