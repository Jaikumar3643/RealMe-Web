document.addEventListener("DOMContentLoaded", function() {
  // Add scroll event listener to window
   window.addEventListener("scroll", handleScroll);
 });
 
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
 // Function to handle scroll event
 function handleScroll() {
  var scrollTopValue = window.scrollY || document.documentElement.scrollTop;
  
  // Check if scrollTopValue is greater than or equal to 70
  if (scrollTopValue >= 70) {
      // Add 'sticky' class to .nav-2
      document.querySelector('.nav-2').classList.add('sticky');
  } else {
      // Remove 'sticky' class from .nav-2
      document.querySelector('.nav-2').classList.remove('sticky');
  }
}
//hover show cards in second navbar
function cCardListShowMiMobile(){
  // console.log(document.getElementById("CV").offsetHeight)
  document.getElementById("cCardList").style.visibility="visible";
  document.getElementById("cCardList").style.opacity="1";
  document.getElementById("cCardList").style.zIndex="1";
  document.getElementById("cCardList").style.transform="translateY(0)";
  document.getElementById("cCardList").style.transitionDelay="0s,0s,0.3s";
  document.getElementById("item1src").src="./images/newlaunch/1.jpg";
  document.getElementById("item2src").src="./images/newlaunch/2.jpg"
  document.getElementById("item3src").src="./images/newlaunch/3.jpg"
  document.getElementById("item4src").src="./images/newlaunch/4.jpg"
  document.getElementById("item1Cost").innerHTML="₹999,999";
  document.getElementById("item2Cost").innerHTML="₹₹999,999";
  document.getElementById("item3Cost").innerHTML="₹₹999,999";
  document.getElementById("item4Cost").innerHTML="₹₹999,999";
  document.getElementById("item1Name").innerHTML="realme P1 5G";
  document.getElementById("item2Name").innerHTML="realme P1 Pro 5G";
  document.getElementById("item3Name").innerHTML="realme Buds T110";
  document.getElementById("item4Name").innerHTML="realme Pad 2";
}

function cCardListShowAudio(){
   document.getElementById("secondNav").style.backgroundColor="#fff"
   document.getElementById("cCardList").style.visibility="visible";
   document.getElementById("cCardList").style.opacity="1";
   document.getElementById("cCardList").style.zIndex="1";
   document.getElementById("cCardList").style.transform="translateY(0)";
   document.getElementById("cCardList").style.transitionDelay="0s,0s,0.3s";
   document.getElementById("item1src").src="./images/audio/1.jpg";
   document.getElementById("item2src").src="./images/audio/2.jpg"
   document.getElementById("item3src").src="./images/audio/3.jpg"
   document.getElementById("item4src").src="./images/audio/4.jpg"
   document.getElementById("item6src").src="./images/RM phones/rm6.png"
   document.getElementById("item1Cost").innerHTML="₹ 3,999";
   document.getElementById("item2Cost").innerHTML="₹ 3,999";
   document.getElementById("item3Cost").innerHTML="₹ 1,499";
   document.getElementById("item4Cost").innerHTML="₹ 1,499";
   document.getElementById("item1Name").innerHTML="realme Buds Wireless3";
   document.getElementById("item2Name").innerHTML="realme Wireless Earphones 2";
   document.getElementById("item3Name").innerHTML="realme Earbuds 2C";
   document.getElementById("item4Name").innerHTML="real Outdoor Bluetooth Speaker (5W)";
}
function cCardListShowAccess(){
   document.getElementById("secondNav").style.backgroundColor="#fff"
   document.getElementById("cCardList").style.visibility="visible";
   document.getElementById("cCardList").style.opacity="1";
   document.getElementById("cCardList").style.zIndex="1";
   document.getElementById("cCardList").style.transform="translateY(0)";
   document.getElementById("cCardList").style.transitionDelay="0s,0s,0.3s";
   document.getElementById("item1src").src="./images/accessories/1.jpg";
   document.getElementById("item2src").src="./images/accessories/2.jpg";
   document.getElementById("item3src").remove();
   document.getElementById("item3Name").remove();
   document.getElementById("item3Cost").remove();
   document.getElementById("item4src").remove();
   document.getElementById("item4Name").remove();
   document.getElementById("item4Cost").remove();
   document.getElementById("item1Cost").innerHTML="From ₹ 799";
   document.getElementById("item2Cost").innerHTML="₹ 999";
   document.getElementById("item3Cost").innerHTML="₹ 500";
   document.getElementById("item4Cost").innerHTML="From ₹ 179"
   document.getElementById("item1Name").innerHTML="Power Banks";
   document.getElementById("item2Name").innerHTML="realme Router 4C";

}
function cCardListHide(){
  document.getElementById("secondNav").style.backgroundColor="transparent"
   document.getElementById("cCardList").style.visibility="hidden";
   document.getElementById("cCardList").style.opacity="0";
   document.getElementById("cCardList").style.position="fixed";
   document.getElementById("cCardList").style.paddingTop="0.3vw";
   document.getElementById("cCardList").style.transform="translateY(-3em)";
   document.getElementById("cCardList").style.zIndex="0";
   document.getElementById("cCardList").style.transition="all 0.3s ease 0s,visibility 0s linear 0.3s , z-index 0s linear 0.1s";
}
function test(){
  console.log("Touched")
}