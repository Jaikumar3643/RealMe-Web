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

document.addEventListener("DOMContentLoaded", function() {
        
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
  
  // Add scroll event listener to window
  window.addEventListener("scroll", handleScroll);
});
//hover show cards in second navbar
function cCardListShowMiMobile(){
  // console.log(document.getElementById("CV").offsetHeight)
  document.getElementById("secondNav").style.backgroundColor="#fff"
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
function cCardListShowRmMobile(){
   document.getElementById("secondNav").style.backgroundColor="#fff"
   document.getElementById("cCardList").style.visibility="visible";
   document.getElementById("cCardList").style.opacity="1";
   document.getElementById("cCardList").style.zIndex="1";
   document.getElementById("cCardList").style.transform="translateY(0)";
   document.getElementById("cCardList").style.transitionDelay="0s,0s,0.3s";
   document.getElementById("item1src").src="../images/RM phones/rm1.png";
   document.getElementById("item2src").src="../images/RM phones/rm2.png"
   document.getElementById("item3src").src="../images/RM phones/rm3.jpg"
   document.getElementById("item4src").src="../images/RM phones/rm4.png"
   document.getElementById("item5src").src="../images/RM phones/rm5.png"
   document.getElementById("item6src").src="../images/RM phones/rm6.png"
   document.getElementById("item1Cost").innerHTML="From ₹ 18,999";
   document.getElementById("item2Cost").innerHTML="From ₹ 15,999"
   document.getElementById("item3Cost").innerHTML="From ₹ 14,999"
   document.getElementById("item4Cost").innerHTML="From ₹ 12,999"
   document.getElementById("item5Cost").innerHTML="From ₹ 10,999"
   document.getElementById("item6Cost").innerHTML=""
   document.getElementById("item1Name").innerHTML="Redmi Note 10 Pro Max";
   document.getElementById("item2Name").innerHTML="Redmi Note 10 Pro";
   document.getElementById("item3Name").innerHTML="Redmi Note 10S";
   document.getElementById("item4Name").innerHTML="Redmi Note 10";
   document.getElementById("item5Name").innerHTML="Redmi 9 Power";
   document.getElementById("item6Name").innerHTML="View More";
}
function cCardListShowTv(){
   document.getElementById("secondNav").style.backgroundColor="#fff"
   document.getElementById("cCardList").style.visibility="visible";
   document.getElementById("cCardList").style.opacity="1";
   document.getElementById("cCardList").style.zIndex="1";
   document.getElementById("cCardList").style.transform="translateY(0)";
   document.getElementById("cCardList").style.transitionDelay="0s,0s,0.3s";
   document.getElementById("item1src").src="../images/tv/tv1.jpg";
   document.getElementById("item2src").src="../images/tv/tv2.jpg"
   document.getElementById("item3src").src="../images/tv/tv3.png"
   document.getElementById("item4src").src="../images/tv/tv4.png"
   document.getElementById("item5src").src="../images/tv/tv5.jpg"
   document.getElementById("item6src").src="../images/RM phones/rm6.png"
   document.getElementById("item1Cost").innerHTML="₹ 1,27,999";
   document.getElementById("item2Cost").innerHTML="₹ 59,999"
   document.getElementById("item3Cost").innerHTML="₹ 37,999"
   document.getElementById("item4Cost").innerHTML="₹ 27,999"
   document.getElementById("item5Cost").innerHTML="₹ 24,999"
   document.getElementById("item6Cost").innerHTML=""
   document.getElementById("item1Name").innerHTML="Mi QLED TV 189.34cm (75)";
   document.getElementById("item2Name").innerHTML="Mi QLED TV 4K 138.8 cm (55)";
   document.getElementById("item3Name").innerHTML="Redmi Smart TV X Series";
   document.getElementById("item4Name").innerHTML="Mi TV 4A 108 cm (43)";
   document.getElementById("item5Name").innerHTML="Mi TV 4A 100 cm (40)";
   document.getElementById("item6Name").innerHTML="View More";
}
function cCardListShowLap(){
   document.getElementById("secondNav").style.backgroundColor="#fff"
   document.getElementById("cCardList").style.visibility="visible";
   document.getElementById("cCardList").style.opacity="1";
   document.getElementById("cCardList").style.zIndex="1";
   document.getElementById("cCardList").style.transform="translateY(0)";
   document.getElementById("cCardList").style.transitionDelay="0s,0s,0.3s";
   document.getElementById("item1src").src="../images/lap/l1.png";
   document.getElementById("item2src").src="../images/lap/l2.jpg"
   document.getElementById("item3src").src="../images/lap/l3.png"
   document.getElementById("item4src").src="../images/lap/l4.png"
   document.getElementById("item5src").src="../images/lap/l2.jpg"
   document.getElementById("item6src").src="../images/RM phones/rm6.png"
   document.getElementById("item1Cost").innerHTML="From ₹ 54,999";
   document.getElementById("item2Cost").innerHTML="From ₹ 44,999"
   document.getElementById("item3Cost").innerHTML="From ₹ 41,999"
   document.getElementById("item4Cost").innerHTML="₹ 38,999"
   document.getElementById("item5Cost").innerHTML="₹ 24,999"
   document.getElementById("item6Cost").innerHTML=""
   document.getElementById("item1Name").innerHTML="Mi Notebook 14 Horizon";
   document.getElementById("item2Name").innerHTML="Mi Notebook 14(IC)";
   document.getElementById("item3Name").innerHTML="Mi Notebook 14";
   document.getElementById("item4Name").innerHTML="Mi NoteBook 14e-Learning Edition";
   document.getElementById("item5Name").innerHTML="Mi Notebook 14(IC)";
   document.getElementById("item6Name").innerHTML="View More";
}
function cCardListShowFit(){
   document.getElementById("secondNav").style.backgroundColor="#fff"
   document.getElementById("cCardList").style.visibility="visible";
   document.getElementById("cCardList").style.opacity="1";
   document.getElementById("cCardList").style.zIndex="1";
   document.getElementById("cCardList").style.transform="translateY(0)";
   document.getElementById("cCardList").style.transitionDelay="0s,0s,0.3s";
   document.getElementById("item1src").src="../images/fl/fl1.jpg";
   document.getElementById("item2src").src="../images/fl/fl2.jpg"
   document.getElementById("item3src").src="../images/fl/fl3.png"
   document.getElementById("item4src").src="../images/fl/fl4.png"
   document.getElementById("item5src").src="../images/fl/fl5.png"
   document.getElementById("item6src").src="../images/RM phones/rm6.png"
   document.getElementById("item1Cost").innerHTML="From ₹ 54,999";
   document.getElementById("item2Cost").innerHTML="From ₹ 44,999"
   document.getElementById("item3Cost").innerHTML="From ₹ 41,999"
   document.getElementById("item4Cost").innerHTML="₹ 38,999"
   document.getElementById("item5Cost").innerHTML="₹ 24,999"
   document.getElementById("item6Cost").innerHTML=""
   document.getElementById("item1Name").innerHTML="Mi Watch Revolve Active";
   document.getElementById("item2Name").innerHTML="Redmi Watch GPS";
   document.getElementById("item3Name").innerHTML="Mi Smart Band 5";
   document.getElementById("item4Name").innerHTML="Mi Beard Trimmer 1C";
   document.getElementById("item5Name").innerHTML="Mi Athleisure Shoes";
   document.getElementById("item6Name").innerHTML="View More";
}
function cCardListShowHome(){
   document.getElementById("secondNav").style.backgroundColor="#fff"
   document.getElementById("cCardList").style.visibility="visible";
   document.getElementById("cCardList").style.opacity="1";
   document.getElementById("cCardList").style.zIndex="1";
   document.getElementById("cCardList").style.transform="translateY(0)";
   document.getElementById("cCardList").style.transitionDelay="0s,0s,0.3s";
   document.getElementById("item1src").src="../images/home/h1.png";
   document.getElementById("item2src").src="../images/home/h2.jpg"
   document.getElementById("item3src").src="../images/home/h3.jpg"
   document.getElementById("item4src").src="../images/home/h4.jpg"
   document.getElementById("item5src").src="../images/home/h5.png"
   document.getElementById("item6src").src="../images/RM phones/rm6.png"
   document.getElementById("item1Cost").innerHTML="₹ 24,999";
   document.getElementById("item2Cost").innerHTML="₹ 10,999"
   document.getElementById("item3Cost").innerHTML="₹ 6,999"
   document.getElementById("item4Cost").innerHTML="₹ 12,999"
   document.getElementById("item5Cost").innerHTML="From ₹ 1,799"
   document.getElementById("item6Cost").innerHTML=""
   document.getElementById("item1Name").innerHTML="Mi Robot Vacuum-Mop P";
   document.getElementById("item2Name").innerHTML="Mi Air Purifier 3";
   document.getElementById("item3Name").innerHTML="Mi Air Purifier 2C";
   document.getElementById("item4Name").innerHTML="Mi Smart Water Purifier";
   document.getElementById("item5Name").innerHTML="Mi Security Cameras";
   document.getElementById("item6Name").innerHTML="View More";
}

function cCardListShowAudio(){
   document.getElementById("secondNav").style.backgroundColor="#fff"
   document.getElementById("cCardList").style.visibility="visible";
   document.getElementById("cCardList").style.opacity="1";
   document.getElementById("cCardList").style.zIndex="1";
   document.getElementById("cCardList").style.transform="translateY(0)";
   document.getElementById("cCardList").style.transitionDelay="0s,0s,0.3s";
   document.getElementById("item1src").src="../images/audio/a1.png";
   document.getElementById("item2src").src="../images/audio/a2.png"
   document.getElementById("item3src").src="../images/audio/a3.png"
   document.getElementById("item4src").src="../images/audio/a4.png"
   document.getElementById("item5src").src="../images/audio/a5.png"
   document.getElementById("item6src").src="../images/RM phones/rm6.png"
   document.getElementById("item1Cost").innerHTML="₹ 3,999";
   document.getElementById("item2Cost").innerHTML="₹ 3,999"
   document.getElementById("item3Cost").innerHTML="₹ 1,499"
   document.getElementById("item4Cost").innerHTML="₹ 1,499"
   document.getElementById("item5Cost").innerHTML="₹ 399"
   document.getElementById("item6Cost").innerHTML=""
   document.getElementById("item1Name").innerHTML="Mi Smart Speaker";
   document.getElementById("item2Name").innerHTML="Mi True Wireless Earphones 2";
   document.getElementById("item3Name").innerHTML="Redmi Earbuds 2C";
   document.getElementById("item4Name").innerHTML="Mi Outdoor Bluetooth Speaker (5W)";
   document.getElementById("item5Name").innerHTML="Redmi Earphones";
   document.getElementById("item6Name").innerHTML="View More";
}
function cCardListShowAccess(){
   document.getElementById("secondNav").style.backgroundColor="#fff"
   document.getElementById("cCardList").style.visibility="visible";
   document.getElementById("cCardList").style.opacity="1";
   document.getElementById("cCardList").style.zIndex="1";
   document.getElementById("cCardList").style.transform="translateY(0)";
   document.getElementById("cCardList").style.transitionDelay="0s,0s,0.3s";
   document.getElementById("item1src").src="../images/acces/a1.jpg";
   document.getElementById("item2src").src="../images/acces/a2.jpg"
   document.getElementById("item3src").src="../images/acces/a3.jpg"
   document.getElementById("item4src").src="../images/acces/a4.png"
   document.getElementById("item5src").src="../images/acces/a5.png"
   document.getElementById("item6src").src="../images/RM phones/rm6.png"
   document.getElementById("item1Cost").innerHTML="From ₹ 799";
   document.getElementById("item2Cost").innerHTML="₹ 999"
   document.getElementById("item3Cost").innerHTML="₹ 500"
   document.getElementById("item4Cost").innerHTML="From ₹ 179"
   document.getElementById("item5Cost").innerHTML="From ₹ 49"
   document.getElementById("item6Cost").innerHTML=""
   document.getElementById("item1Name").innerHTML="Power Banks";
   document.getElementById("item2Name").innerHTML="Mi Router 4C";
   document.getElementById("item3Name").innerHTML="Mi Portable Wireless Mouse";
   document.getElementById("item4Name").innerHTML="Chargers & Cables";
   document.getElementById("item5Name").innerHTML="Cases & Protectors";
   document.getElementById("item6Name").innerHTML="View More";
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