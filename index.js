


let arraydatos=[["./images/2023/SJR X TORNADOS-1.jpg","./images/2023/SJR X TORNADOS-2.jpg","./images/2023/SJR X TORNADOS-3.jpg","./images/2023/SJR X TORNADOS-4.jpg","./images/2023/SJR X TORNADOS-5.jpg","./images/2023/SJR X TORNADOS-6.jpg","./images/2023/SJR X TORNADOS-7.jpg","./images/2023/SJR X TORNADOS-8.jpg","./images/2023/SJR X TORNADOS-9.jpg","./images/2023/SJR X TORNADOS-10.jpg"],
["./images/2022/SJR X TORNADOS-1.jpg","./images/2022/SJR X TORNADOS-2.jpg","./images/2022/SJR X TORNADOS-3.jpg","./images/2022/SJR X TORNADOS-4.jpg","./images/2022/SJR X TORNADOS-5.jpg","./images/2022/SJR X TORNADOS-6.jpg","./images/2022/SJR X TORNADOS-7.jpg","./images/2022/SJR X TORNADOS-8.jpg","./images/2022/SJR X TORNADOS-9.jpg","./images/2022/SJR X TORNADOS-10.jpg"],
["./images/2021/SJR X TORNADOS-1.jpg","./images/2021/SJR X TORNADOS-2.jpg","./images/2021/SJR X TORNADOS-3.jpg","./images/2021/SJR X TORNADOS-4.jpg","./images/2021/SJR X TORNADOS-5.jpg","./images/2021/SJR X TORNADOS-6.jpg","./images/2021/SJR X TORNADOS-7.jpg","./images/2021/SJR X TORNADOS-8.jpg","./images/2021/SJR X TORNADOS-9.jpg","./images/2021/SJR X TORNADOS-10.jpg"]];    

function expandPic(imgs) {

  
  var expandImg = document.getElementById("expandedImg");

  // Get the image text

  var imgText = document.getElementById("imgtext");

  // Use the same src in the expanded image as the image being clicked on from the grid

  expandImg.src = imgs.src;

  // Use the value of the alt attribute of the clickable image as text inside the expanded image

 // imgText.innerHTML = imgs.alt;

  // Show the container element (hidden with CSS)

  expandImg.parentElement.style.display = "block";

}


function cambia(){

var item = yearsel.value;
let long = arraydatos[item].length;
let imagen = document.getElementsByClassName("d-block w-50 img-thumbnail rounded float-start");
console.log(document.getElementsByClassName("carousel-item"));
for ( var i =0 ; i <= long ; i++) {
imagen[i].src = arraydatos[item][i];
}
}
function galleryGenerator() {
 
  let item = yearsel.value;
  let long = arraydatos[item].length;
  let imgactive = document.getElementsByName("active");
  console.log(imgactive);
  for (var i= 0 ; i <= 3 ; i++) {
      imgactive[i].src = arraydatos[item][i];
  };
 for (var i= 4 ; i <= long ; i=i+4) {
  let img = document.createElement('img');
  let imga = document.createElement('img');
  let imgb = document.createElement('img');
  let imgc = document.createElement('img');
  
  img.src = arraydatos[item][i];
  imga.src = arraydatos[item][i+1];
  imgb.src = arraydatos[item][i+2];
  imgc.src = arraydatos[item][i+3];
 
 
  img.addEventListener('load', () => {

    let div = `<div class="carousel-item" >
    <div class="col-12 col-lg-12 col-md-12 col-sm-12" >
    <img class="d-block w-50 img-thumbnail rounded float-start" src= ${img.src}  alt="demo" onclick="expandPic(this);" onerror="this.src='./images/Tornado.jpg'"/>
    <img class="d-block w-50 img-thumbnail rounded float-start" src= ${imga.src}  alt="demo" onclick="expandPic(this);" onerror="this.src='./images/Tornado.jpg'"/>
    <img class="d-block w-50 img-thumbnail rounded float-start" src= ${imgb.src}  alt="demo" onclick="expandPic(this);" onerror="this.src='./images/Tornado.jpg'"/>
    <img class="d-block w-50 img-thumbnail rounded float-start" src= ${imgc.src}  alt="demo" onclick="expandPic(this);" onerror="this.src='./images/Tornado.jpg'"/>
    </div>
    </div>`;

    document.querySelector('#gallery-items').innerHTML += div;
  
                                      })
  }
     
  
  
}


