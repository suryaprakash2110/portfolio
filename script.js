

// toggle icon navbar 

let menuIcon=document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =() => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}





// scroll section active linl 

let section=document.querySelectorAll('section');
letnavlinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
   section.forEach(sec=> {
    let top=window.scrollY;
    let offset=sec.offsettop-150;
    let height=sec.offsetHeight;
    let id=sec.getAttribute('id');

   if(top>=offset && top<offset+height){
     navlinks.foreach.apply(links=>{
        links.classlist.remove('active');
        document.querySelector('header nav a [href*='+id+']').classlist.add('active');
     });
   };

   });

//    sticky navbar 

let header= document.querySelector('header');
header.classlist.toggle('sticky',window.scrollY > 100);

//   remove toggle icon and navbar
menuIcon.classlist.remove('fa-xmark');
navbar.classlist.remove('active');

  
};
// scroll reavel
ScrollReveal({ 
    distance:'80px',
    duration:2000,
    delay:200,

 });
 ScrollReveal().reveal('.home-content, heading', {orgin:'top'});
 ScrollReveal().reveal('.home-img, .services-container,.portfolio-box,.contact form',{orgin:'button'});
 ScrollReveal().reveal('.home-contact h1 , .about-img',{origin:'left'});
 ScrollReveal().reveal('.home-contact p, .about-content',{orgin:'right'});
// typed js

const typed =new Typed('.multiple', {
   strings:['frontend Developer' , 'web Designer' , 'backend Developer'],
   typespeed: 70,
   backspeed:70,
   backdelay:1000,
   loop:true

})


