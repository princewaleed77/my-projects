var imgs = Array.from( document.querySelectorAll(".item img") );
var lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBoxItem = document.getElementById("lightBoxItem");
var close = document.getElementById("close");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var currenIndex =0;

for(var i = 0; i< imgs.length; i++){
        imgs[i].addEventListener("click", function(e){
        var imgsrc = e.target.getAttribute("src");
        lightBoxItem.style.backgroundImage = "url("+imgsrc+")";
        lightBoxContainer.style.display="flex";
    })
};

function closeSlide(e) {
    lightBoxContainer.style.display="none"
};

function nextSlide(e){
    currenIndex++;
    if(currenIndex> imgs.length){
        currenIndex=0;
    }
    var imgSrc = imgs[currenIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage="url("+imgSrc+")";
};

function prevSlide(e){
    currenIndex--;
    if(currenIndex<0){
        currenIndex=imgs.length-1;
    }
    var imgSrc = imgs[currenIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage="url("+imgSrc+")";
};

close.addEventListener("click",closeSlide)
// lightBoxContainer.addEventListener("click", closeSlide);
next.addEventListener("click",nextSlide);
prev.addEventListener("click",prevSlide);


document.addEventListener("keydown",function(e){
   if(e.code=="ArrowRight") {
       nextSlide();
   }else if(e.code=="ArrowLeft"){
    prevSlide();
   }else if(e.code=="Escape"){
       closeSlide();
   }
});


