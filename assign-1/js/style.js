//document.getElementById('demo').innerHTML="Hello Worled";
// console.log('hello worled');

// var userName='waleed';//string
// var userAge=43;//number
// var isMale = true;// boolean
// var airBags = null;
// var x;//undefined
// document.getElementById('demo').innerHTML= typeof(airBags);



// var num1 = Number(prompt("enter first number"));
// var num2 = Number(prompt("enter second number"));
// var result = num1 + num2;
// document.getElementById('demo').innerHTML=result;


// var x = 10;
// var  y ="10";
// // if(x==y){
//     window.alert("equal");

// }
// else
// {
//     window.alert("not equal");

// }

// if(x===y){
//     window.alert("equal");

// }
// else
// {
//     window.alert("not equal");
    
// }
// var userName = 'waleed'
// switch (userName) {
//     case 'ahmed':
//         console.log('ahmed');
//         break;
//     case 'mohamed':
//         console.log('mohmed');
//         break;
//     case 'waleed':
//         console.log('waleed');
//         break
//     default:console.log('nothing found');
//         break;
// }

$("body").niceScroll({
    // cursorcolor:"aqua",
    cursorwidth:12,
    cursoropacitymin:0.4,
    cursorcolor:'#6e8cb6',
    cursorborder:'none',
    cursorborderradius:4,
    autohidemode:'leave'
  });


$(document).ready(function(){
let about = $('#about').offset().top;

$(window).scroll(function(){
    if ($(window).scrollTop() > about-100){
        $('.navbar').addClass('bg-nav');
    }else{
        $('.navbar').removeClass('bg-nav');
    }
})

// $('.nav-link').click(function(){
//     let id = $(this).attr('href');
//     let position = $(id).offset().top;
//     $('html body').animate({scrollTop:position},2000)
//   });


});


let links = document.querySelectorAll('.nav-link');

links.forEach((link)=>{
    link.addEventListener('click',function(){
        
        let offset = this.getAttribute('href');
        console.log(offset);
        let position = $(offset).offset().top;
        console.log(position);
        // let dist= offset.pageYOffset;
        // console.log(dist); 
        $('html, body').animate({scrollTop:position},2000)
    })
})