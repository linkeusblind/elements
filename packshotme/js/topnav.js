// When the user scrolls the page, execute myFunction 
window.onscroll = function() {mystickyFunction()};

// Get the myTopnav
var myTopnav = document.getElementById("myTopnav");

// Get the offset position of the myTopnav
var sticky = myTopnav.offsetTop;

// Add the sticky class to the myTopnav when you reach its scroll position. Remove "sticky" when you leave the scroll position
function mystickyFunction() {
  if (window.pageYOffset >= sticky) {
    myTopnav.classList.add("sticky")
  } else {
    myTopnav.classList.remove("sticky");
  }
}


function myFunction() {
					  	var x = document.getElementById("myTopnav");
					  	if (x.className === "topnav") {
											    		x.className += " responsive";
						} else if (x.className == "topnav sticky") {
																	x.className += " responsive"
						} else if (x.className == "topnav sticky responsive") {
																				x.className = "topnav sticky"
						}else if (x.className == "topnav responsive sticky") {
																				x.className = "topnav sticky"
						}else {
					   			x.className = "topnav";
					 			}
						}
					

