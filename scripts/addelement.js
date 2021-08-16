let bodyElement = document.body;
//html elements
let imgElement = document.createElement('a');
let imgContainer = document.createElement('div');
let imageGallery = document.createElement('div');
let imageContent = document.createElement('img');
let infoContainer = document.createElement('div');
let sectionElement = document.createElement('section');
let headingElement = document.createElement('h5');
let paragraphElement = document.createElement('p');
let btnElement = document.createElement('a');


sectionElement.className = "hero";
imgContainer.className = "container";
imageGallery.className = "image-gallery";
imageContent.className = "nature";
imgElement.className = "img-1";
infoContainer.className = "info-container";
headingElement.className = "heading";
paragraphElement.className = "paragraph";
btnElement.className = "btn";

imageContent.src = "../images/a.jpg";
btnElement.setAttribute("href", "#");
imageGallery.setAttribute("id", "img-gal");
imageContent.setAttribute("id", "imgs");
imgElement.setAttribute("href", "../images/a.jpg");
imgElement.setAttribute("data-lightbox", "photograph");
imgElement.setAttribute("id", "img-Ele");
headingElement.innerText = "Unsplash API";
paragraphElement.innerText = "this is a paragraph";
btnElement.innerText = "learn more";


bodyElement.append(sectionElement);
sectionElement.appendChild(imgContainer);
imgContainer.appendChild(imageGallery);
imageGallery.append(imgElement,paragraphElement);
imgElement.appendChild(imageContent);



var images=["img-1.jpg","img-2.jpg","img-3.jpg","img-4.jpg",
    "img-5.jpg","img-6.jpg","img-7.jpg","img-8.jpg"];

    var parent = document.getElementById("img-gal");

/*function imagegallery(images){
    var parent = document.getElementById("img-gal");
    var i ;
    for(i = 0; i < 8; i++){
        parent.append(imgElement);
        //imageContent.src = "../images/gallery/" + images[i];
        //parent.appendChild(imageContent);
    }
}
imagegallery();
*/

/*function imagGalAppend(parent,children){
    children.forEach(function (child) {
        parent.appendChild(child);
    });
}

imagGalAppend(parent,images);

/*function imageCache(base, firstNum, lastNum) {
    this.cache = [];
    var img;
    for (var i = firstNum; i <= lastNum; i++) {
        img = new Image();
        img.src = base + i + ".jpg";
        this.cache.push(img);
    }
}

imageCache.prototype.nextImage(id) {
    var element = document.getElementById(id);
    var targetSrc = element.src;
    var cache = this.cache;
    for (var i = 0; i < cache.length; i++) {
        if ((cache[i].src) === targetSrc) {
            i++;
            if (i >= cache.length) {
                i = 0;
            }
            element.src = cache[i].src;
            return;
        }
    }
}
var myCache = new imageCache('images/gallery/img-', 1, 6);
myCache.nextImage("foo");

//bodyElement.appendChild(cardElement);
//cardElement.append(imgContainer, infoContainer);
//var i;
//for (i = 0; i < 4; i++){
//    imgContainer.appendChild(imgElement);
//    infoContainer.append(headingElement, paragraphElement,btnElement);
//}
//imgContainer.appendChild(imgElement);
//infoContainer.append(headingElement, paragraphElement,btnElement);


//var curHammer=0;

/*function imagegallery() {
    var images=["img-1.jpg","img-2.jpg","img-3.jpg","img-4.jpg",
    "img-5.jpg","img-6.jpg","img-7.jpg","img-8.jpg"];

    var parent = document.getElementById("img-gal");
    for (i = 0; images.length > i; i++){

        imgElement.setAttribute("href", "../images/a.jpg");
        imgElement.setAttribute("data-lightbox", "photograph");
        var img = new Image(200, 200);
        img.src = "../images/gallery/" + images[i];
        var src = document.getElementById("img-gal");
        parent.appendChild(img);
        //imageGallery.append(imgElement,paragraphElement);
        //imgElement.append(imageContent);
   }
}


//imageGallery.appendChild(imagegallery());

*/
