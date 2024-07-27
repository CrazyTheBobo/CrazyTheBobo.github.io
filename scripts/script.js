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
} // spent a long time debugging because I never closed the outer for loop

// Animates drop-down banner for mobile interfaces
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

// Drawing grid view
document.addEventListener("DOMContentLoaded", function() {
    const photoGallery = document.getElementById("drawing-gallery");
    const photos = Array.from(photoGallery.getElementsByClassName("drawing-box"));

    // Sort photos by date
    photos.sort((a, b) => {
        const dateA = new Date(a.getAttribute("data-date"));
        const dateB = new Date(b.getAttribute("data-date"));
        return dateB - dateA; // Sort from most recent to earliest
    });

    // Append sorted photos back to the gallery
    photos.forEach(photo => photoGallery.appendChild(photo));

//     new Masonry(photoGallery, {
//         itemSelector: '.drawing-box',
//         columnWidth: '.drawing-box',
//         percentPosition: true
//     });
});

var squarePic = document.getElementsByClassName("drawing-box")

for (var i=0; i < squarePic.length; i++) {
	squarePic[i].addEventListener("mouseover", function() {
		var squareText = this.getElementsByTagName('p')[0]
		var brightFilter = this.getElementsByTagName('div')[0]
		// without the if statement, each time visibility is toggled there will be an Uncaught Typeerror
		if (squareText) {
			squareText.style.display = "block"
			brightFilter.style.opacity = 0.75
		}
	})
	squarePic[i].addEventListener("mouseout", function() {
		var squareText = this.getElementsByTagName('p')[0]
		var brightFilter = this.getElementsByTagName('div')[0]
		// without the if statement, each time visibility is toggled there will be an Uncaught Typeerror
		if (squareText) {
			squareText.style.display = "none"
			brightFilter.style.opacity = 0
		}
	})
}