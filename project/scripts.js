const theme_btn = document.getElementById("theme_btn")
var theme_btn_img = document.getElementById("theme_btn_img")
theme_btn.addEventListener("click", () =>{
     console.log("theme button pressed")
    if (theme_btn_img.src.includes("light.png")){
        theme_btn_img.src = "assests/images/dark.png"
        console.log("theme turned to dark")
    }else{
        theme_btn_img.src = "assests/images/light.png"
        console.log("theme turned to light")
    }
   
})