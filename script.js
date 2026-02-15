import './style.css';

const theme_btn = document.getElementById("theme_btn");
const theme_btn_img = document.getElementById("theme_btn_img");

const main_pg_drawings = document.getElementsByClassName("project-drawing")

theme_btn.addEventListener("click", () => {
 document.documentElement.classList.toggle("dark");

    if (theme_btn_img.src.includes("light.png")) {
        theme_btn_img.src = "/assets/images/dark.png";
        console.log("theme turned to dark");
    } else {
        theme_btn_img.src = "/assets/images/light.png";
        console.log("theme turned to light");
    }
});


Array.from(main_pg_drawings).forEach((drawing)  => {
    drawing.addEventListener("click", ()=>{
          window.location.href= "project.html"
          console.log("Project clicked")
    })
})



