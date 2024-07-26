// collapsible boxes in monologues, with arrows that change direction
var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {
		// Two mistakes initially:
		// 1. Forgetting var at the front
		// 2. Putting this outside EventListener. This will cause childDiv to be defined w.r.t last i
		var childDiv = this.getElementsByTagName('div')[0]
		// classList returns a list of class names assigned to this element
		this.classList.toggle("active");
		// nextElementSibling returns the next child of the same parent. 
		// I.e it will be in same tree level.
		// In our case, it returns the collapsible element which is right after the header.
		var content = this.nextElementSibling;
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
			childDiv.textContent = "▼";
		}
		else {
			content.style.maxHeight = content.scrollHeight + "px";
			childDiv.textContent = "▲";
		}
	})

var menu = document.getElementById("banner-burger-menu");
var dropDown = document.getElementById("drop-down");

menu.addEventListener("click", function() {
	this.classList.toggle("active");
	if (dropDown.style.maxHeight) {
		dropDown.style.maxHeight = null;
	}
	else {
		dropDown.style.maxHeight = dropDown.scrollHeight + "px";
	}
})