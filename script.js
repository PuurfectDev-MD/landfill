import './style.css';
import  {projects} from './project'



const main_pg_drawings = document.querySelectorAll(".project-drawing");
const svg_item = document.querySelector('svg')

if (svg_item){
  window.addEventListener('load', () => {
    const path =svg_item.querySelector("path")
    if (!path) return


    const totalLength = path.getTotalLength();
    const numDots =20;

    for(let i=0; i<numDots; i++){
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle")
      const distance = Math.random() * totalLength

      const point = path.getPointAtLength(distance)

      circle.setAttribute("cx", point.x)
      circle.setAttribute("cy", point.y)

      circle.setAttribute("r", Math.random()*8 +5)
      var color = Math.floor(Math.random()*3)
      var colorValue
      if(color ==0){
          colorValue= "oklch(51.4% 0.222 16.935)" 
        }else if (color ==1){
          colorValue ="oklch(62.7% 0.194 149.214)"
        }else{
          colorValue = "oklch(54.6% 0.245 262.881)"
        }

      circle.setAttribute("fill", colorValue )
      circle.classList.add("flicker-dot")
      circle.style.animationDelay = `${Math.random() *2}s`

      svg_item.appendChild(circle)
    }
  })
}

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






