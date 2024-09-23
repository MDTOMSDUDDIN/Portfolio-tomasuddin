// Nav_menu bar------------
function myMenufunction(){
    var menuBtn=document.getElementById("myNavMenu");
    if( menuBtn.className==="nav-menu"){
        menuBtn.className += "responsive";
    }else{
        menuBtn.className ="nav-menu";
    }
}
// Nav_menu bar End------------

// dark mode section strating -------------------
    const body=document.querySelector('body');
    toggleSwiitch=document.getElementById('toggle-switch');

    toggleSwiitch.addEventListener("click",()=>{
        body.classList.toggle("dark");
    })
// dark mode section Ending -------------------

