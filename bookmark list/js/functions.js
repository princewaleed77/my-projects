var bookmarkName = document.getElementById('bookmarkName');
var webUrl = document.getElementById('webUrl');
var display = document.getElementById('display');
var warning = document.getElementById('warning');

// check local storage first
var webUrls;
if(localStorage.getItem("bookmarks") == null){
    webUrls = [];
}else{
    webUrls =JSON.parse(localStorage.getItem("bookmarks"));
    displayBookmark();
}

// add bookmarks
function addUrl(){
    var bookmark ={
        name:bookmarkName.value,
        url:webUrl.value
    }

    if(bookmark.name=='' || bookmark.url==''){
        warning.innerHTML=' please fill in the form first' ;

        warning.style.display='block';
        setTimeout(() => {
               warning.style.display='none';
            }, 3000);
    }else if(checkName(bookmarkName.value)){
        warning.innerHTML='name is allready saved';
        warning.style.display='block';
        setTimeout(() => {
            warning.style.display='none';
         }, 3000);
    }else if(checkUrl(webUrl.value)){
        warning.innerHTML='url is allready saved';
        warning.style.display='block';
        setTimeout(() => {
            warning.style.display='none';
         }, 3000);
    }
    else {

        webUrls.push(bookmark);
        clearInputs();
        displayBookmark();
        localStorage.setItem("bookmarks", JSON.stringify(webUrls));
      }  // console.log(bookmark);
};


// clear fields
function clearInputs(){
    bookmarkName.value = '';
    webUrl.value = '';
};

// display bookmarks
function displayBookmark(){
    var bookmarkContainer = ``;
    for (var i = 0; i<webUrls.length; i++)
    {
        bookmarkContainer +=`
        <div class="w-75 bg-light clearfix px-4 py-4" id="display">
            <span id="name" class="w-50 d-inline"> ` + webUrls[i].name + `</span>
            <div class="buttuns d-inline-block w-50 float-right">
            <a  onclick="visitUrl(`+i+`)" href="" class="btn btn-primary" id="visit">
                Visit</a>
            <button onclick="deleteBookmark(`+i+`)" class="btn btn-danger"
                id="delete">Delete</button>
            </div>
        </div>`;
    }
    document.getElementById('bookmarks').innerHTML = bookmarkContainer;
};

// delete bookmarks
function deleteBookmark(markIndex){
    webUrls.splice(markIndex,1);
    localStorage.setItem("bookmarks", JSON.stringify(webUrls));
    displayBookmark();
};

// open link
function visitUrl(urlIndex){
    var url ='https://' ;
    window.open(url+webUrls[urlIndex].url);
};

// check name
function checkName(name){
    for(var i = 0; i<webUrls.length; i++){
        if (name === webUrls[i].name ){
            var msg = warning.innerHTML='name is allready saved';
            return msg;
        }
       }
    };

// check url
function checkUrl(url){
    for(var i = 0; i<webUrls.length; i++){
        if (url === webUrls[i].url ){
            var msg = warning.innerHTML='url is allready saved';
            return msg;
        }
       }
    };



// update bookMark

