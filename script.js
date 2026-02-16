import './style.css';

const main_pg_drawings = document.querySelectorAll(".project-drawing");


if (main_pg_drawings.length >0){  /*checks if drawings exist and then listens for events  -this way the js doesnt crash in a different page */
    main_pg_drawings.forEach((drawing) =>{
    setTimeout(() => {
        drawing.style.opacity ="1"
    },50)
    
    drawing.addEventListener("click", ()=>{
          window.location.href= "/pages/project.html"
          console.log("Project clicked")
    })

  })

}







