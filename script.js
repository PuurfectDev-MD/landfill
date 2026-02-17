import './style.css';
import  {projects} from './project'

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


// for project page

const projectGrid = document.getElementById("project-grid")
if (projectGrid){
  const projectCards = projects.map(project =>
    ` <div class="bg-card-background p-6 rounded-2xl shadow-amber-300 hover:bg-card-hover hover:scale-105 transition-all border border-card-hover border-2 text-card-text">
           <a href= "${project.url}">
            <h2 class="font-bitcountGridDouble_medium text-2xl">${project.title}</h2>
            <p class="py-4 font-schoolbell">${project.description}</p>
            </a>
        </div>`
  ).join('')
  
    projectGrid.innerHTML = projectCards
}






