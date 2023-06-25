
function myFunction(imgs) {

  // Get the expanded image

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

function doPortItem(n) {
      
  let img = document.createElement('img');

  img.src = './images/SJR X TORNADOS-' + n + '.jpg';

  img.addEventListener('load', () => {

      let div = `<div class="col-12 col-lg-12 col-md-12 col-sm-12">

    <div class="columna">
        
       <img class="img-thumbnail rounded" src="${img.src}" alt="demo" onclick="myFunction(this);">
      

   </div>

 </div>`;

      document.querySelector('#gallery-items').innerHTML += div;

     if (n < 4 ){ doPortItem(++n);}
     return ;
    
  })

}
function cambia(){
 var a = yearsel.value;
 doPortItem(1);
  return;
}