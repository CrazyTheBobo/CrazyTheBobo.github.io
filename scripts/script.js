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
    const photoGallery2024 = document.getElementById("drawing-gallery-2024");
    const photos2024 = Array.from(photoGallery2024.getElementsByClassName("drawing-box-2024"));

    // Sort photos by date
    photos2024.sort((a, b) => {
        const dateA = new Date(a.getAttribute("data-date"));
        const dateB = new Date(b.getAttribute("data-date"));
        return dateB - dateA; // Sort from most recent to earliest
    });

    // Append sorted photos back to the gallery
    photos2024.forEach(photo => photoGallery2024.appendChild(photo));

//     new Masonry(photoGallery, {
//         itemSelector: '.drawing-box',
//         columnWidth: '.drawing-box',
//         percentPosition: true
//     });
});

document.addEventListener("DOMContentLoaded", function() {
    const photoGallery2023 = document.getElementById("drawing-gallery-2023");
    const photos2023 = Array.from(photoGallery2023.getElementsByClassName("drawing-box-2023"));

    photos2023.sort((a, b) => {
        const dateA = new Date(a.getAttribute("data-date"));
        const dateB = new Date(b.getAttribute("data-date"));
        return dateB - dateA;
    });

    photos2023.forEach(photo => photoGallery2023.appendChild(photo));
});

document.addEventListener("DOMContentLoaded", function() {
    const photoGallery2022 = document.getElementById("drawing-gallery-2022");
    const photos2022 = Array.from(photoGallery2022.getElementsByClassName("drawing-box-2022"));

    photos2022.sort((a, b) => {
        const dateA = new Date(a.getAttribute("data-date"));
        const dateB = new Date(b.getAttribute("data-date"));
        return dateB - dateA;
    });

    photos2022.forEach(photo => photoGallery2022.appendChild(photo));
});

document.addEventListener("DOMContentLoaded", function() {
    const photoGallery2021 = document.getElementById("drawing-gallery-2021");
    const photos2021 = Array.from(photoGallery2021.getElementsByClassName("drawing-box-2021"));

    photos2021.sort((a, b) => {
        const dateA = new Date(a.getAttribute("data-date"));
        const dateB = new Date(b.getAttribute("data-date"));
        return dateB - dateA;
    });

    photos2021.forEach(photo => photoGallery2021.appendChild(photo));
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