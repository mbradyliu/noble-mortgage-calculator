/* changePage Function 
 * Desc - changes pages based on arguments. First argument is the page ID you are on. 
 * Second is the page you would like to go to. 
 * Example: onclick="changePage('page1','page2')" 
 * 
 * */
function changePage(arg1,arg2){
	document.getElementById(arg1).style.display = "none";
	document.getElementById(arg2).style.display = "block";
}
