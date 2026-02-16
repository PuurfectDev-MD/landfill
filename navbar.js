export function setupNavbar() {
    const navHTML = ` <nav class="realtive flex items-center justify-center p-10 ">
        <ul class = "flex flex-col md:flex-row justify-center gap-x-8 font-doto_semibold " >
            <li ><a class= "inline-block px-3 py-2 text-[30px] font-extrabold rounded-lg hover:bg-teal-100 hover:text-black hover:scale-110 transform transition duration-200"  href="/index.html">Home</a></li>
            <li ><a class= "inline-block px-3 py-2  text-[30px] font-bold rounded-lg hover:bg-teal-100  hover:text-black hover:scale-110 transform transition duration-200" href="/pages/project.html">Projects</a></li>
            <li ><a class= "inline-block px-3 py-2  text-[30px] font-bold rounded-lg hover:bg-teal-100 hover:text-black hover:scale-110 transform transition duration-200" href="/pages/learned.html">.Learned</a></li>
            <li><a class= "inline-block px-3 py-2  text-[30px] font-bold rounded-lg hover:bg-teal-100  hover:text-black hover:scale-110 transform transition duration-200" href="/pages/me.html">Me</a></li>

             <button id="theme_btn" class="absolute right-1/5 top-[3.4rem] hover: cursor-pointer"><img id="theme_btn_img" src="/assets/images/light.png" class="w-16 h-8"></button> 
        </ul>
       
    
    </nav>
`
    const placeholder =document.getElementById("navplaceholder")
    if (placeholder){
        placeholder.innerHTML = navHTML
        console.log("Navbar placed")

        
        const theme_btn = document.getElementById("theme_btn")
        const theme_btn_img = document.getElementById("theme_btn_img")

        const currentTheme = localStorage.getItem("theme")
        if (currentTheme == "dark"){
            document.documentElement.classList.add("dark");
            theme_btn_img.src = "/assets/images/dark.png"

        }

        theme_btn.addEventListener("click", () => {   /*Theme toggle */
            const isDark = document.documentElement.classList.toggle("dark");

            if (isDark) {
                localStorage.setItem("theme", "dark")
                theme_btn_img.src = "/assets/images/dark.png";
                console.log("theme turned to dark");
            } else {
                localStorage.setItem("theme", "light")
                theme_btn_img.src = "/assets/images/light.png";
                console.log("theme turned to light");
            }
        });

    }
    
}