function modeChangeHandler(event) {
    console.log(event);
    if(event.checked){
        darkMode();
    }
    else{
        lightMode()
    }
}



function darkMode() {
    console.log("Dark Mode");
    navDark();
    temDark();
    bodyDark();
    cardDark();
    footDark();

   return;
}

function lightMode() {
    console.log("Light Mode");  
    navLight();
    temLight();
    bodyLight();
    cardLight();
    footLight();
    
}


/*  navbar */
 const navDark= function navDarkMode(){
    console.log("navDarkMode");
    const navbar= document.getElementById("almanav");
    navbar.classList.remove("bg-body-tertiary");
    navbar.classList.add("bg-dark-brown")
    document.querySelectorAll('.nav-link').forEach(el => el.classList.add('text-grey'));
   document.getElementById("lightLogo").style.display="none";
   document.getElementById("darkLogo").style.display="block";

   return;
}

const navLight= function navLightMode(){
    console.log("navLightMode");
    const navbar= document.getElementById("almanav");
    navbar.classList.add("bg-body-tertiary");
    navbar.classList.remove("bg-dark-brown");
    document.getElementById("lightLogo").style.display="block";
    document.getElementById("darkLogo").style.display="none";
    document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('text-grey'));

    return;
}


/*  Template */

const temDark= function templateDarkMode(){
    const template= document.getElementById("darkModeTemp");
   template.classList.remove("bg-maroon");
   template.classList.add("bg-light-brown");
   document.querySelectorAll('.para').forEach(el => el.classList.add('text-grey'));
   return;
    
}

const temLight= function templateLightMode(){
    const template= document.getElementById("darkModeTemp")
   
    template.classList.remove("bg-light-brown");
   template.classList.add("bg-maroon");
   document.querySelectorAll('.para').forEach(el => el.classList.remove('text-grey'));

   return;

}


/*  body */

const bodyDark=  function bodyDarkMode(){
    var element= document.body;
element.className = "bg-light-brown";
// element.classList.remove("maroon");
// element.classList.add("color-white");
document.querySelectorAll('.maroon').forEach(el => el.classList.add('color-white'));
}

const bodyLight= function bodyLightMode(){
    var element= document.body;
element.className = "bg-light";
document.querySelectorAll('.maroon').forEach(el => el.classList.remove('color-white'));

    return;

}

/* card */
const cardDark= function cardDarkMode(){
    document.querySelectorAll('.cardStyle').forEach(el => el.classList.remove('bg-light'));
    document.querySelectorAll('.cardStyle').forEach(el => el.classList.add('bg-light-brown'));
    document.querySelectorAll('.cardMode').forEach(el => el.classList.remove('bg-light'));
    document.querySelectorAll('.cardMode').forEach(el => el.classList.add('bg-light-brown'));
    document.querySelectorAll('.cardMode').forEach(el => el.classList.add('border-light'));
    document.querySelectorAll('.list-group-item').forEach(el => el.classList.remove('bg-light'));
    document.querySelectorAll('.list-group-item').forEach(el => el.classList.add('bg-light-brown'));
    document.querySelectorAll('.maroon').forEach(el => el.classList.add('color-white'));
    document.querySelectorAll('.text-dark').forEach(el => el.classList.add('color-white'));
    return;
}

const cardLight= function cardLightMode(){
    document.querySelectorAll('.cardStyle').forEach(el => el.classList.add('bg-light'));
    document.querySelectorAll('.cardStyle').forEach(el => el.classList.remove('bg-light-brown'));
    document.querySelectorAll('.cardMode').forEach(el => el.classList.add('bg-light'));
    document.querySelectorAll('.cardMode').forEach(el => el.classList.remove('bg-light-brown'));
    document.querySelectorAll('.cardMode').forEach(el => el.classList.remove('border-light'));
    document.querySelectorAll('.list-group-item').forEach(el => el.classList.add('bg-light'));
    document.querySelectorAll('.list-group-item').forEach(el => el.classList.remove('bg-light-brown'));
    document.querySelectorAll('.maroon').forEach(el => el.classList.remove('color-white'));
    document.querySelectorAll('.text-dark').forEach(el => el.classList.remove('color-white'));
    return;
}




/* footer */

const footDark= function footerDarkMode(){
    const fpart= document.getElementById("footer");
    fpart.classList.remove("bg-red");
    fpart.classList.add("bg-dark-brown");
    document.querySelectorAll('.para').forEach(el => el.classList.add('text-grey'));
    return;
}


const footLight= function footLightMode(){
    const fpart= document.getElementById("footer");
    fpart.classList.remove("bg-dark-brown");
    fpart.classList.add("bg-red");
    document.querySelectorAll('.para').forEach(el =>el.classList.remove('text-grey'));
    return;
}
