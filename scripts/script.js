var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
	childDiv = coll[i].getElementsByTagName('div')[0]
	coll[i].addEventListener("click", function() {
		/* classList returns a list of class names assigned to this element */
		this.classList.toggle("active");
		/* nextElementSibling returns the next child of the same parent. 
		I.e it will be in same tree level.
		In our case, it returns the collapsible element which is right after the header. */
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
}