function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    // document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    setTimeout(updateNav, 100, 1);
    
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
    setTimeout(updateNav, 100, 0);
    
}

function updateNav(show){
	if(show){
		document.getElementById("topNav").style.display = "block";
	}else{
		document.getElementById("topNav").style.display = "none";
	}
}