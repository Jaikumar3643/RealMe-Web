function showItems(menuId) {
    var submenu = document.getElementById(menuId);
    if (submenu) {
      submenu.style.display = "block";
    }
  }
  
  function hideItems(menuId) {
    var submenu = document.getElementById(menuId);
    if (submenu) {
      submenu.style.display = "none";
    }
  }
  
 let index = 0;
 displayImages();
 function displayImages() {
   let i;
   const images = document.getElementsByClassName("image");
   for (i = 0; i < images.length; i++) {
     images[i].style.display = "none";
   }
   index++;
   if (index > images.length) {
     index = 1;
   }
   images[index-1].style.display = "block";
   setTimeout(displayImages, 2000); 
 }

 function plusSlides(n) {
  showSlides(index += n);
}
function showSlides(n) {
  const images = document.getElementsByClassName("image");
  if (n > images.length) {index = 1}    
  if (n < 1) {index = images.length}
  for (let i = 0; i < images.length; i++) {
      images[i].style.display = "none";  
  }
  images[index-1].style.display = "block";  
}
  