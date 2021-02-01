function showSublist(id) {
    const sublist = document.getElementById(id);
    console.log(sublist);
    sublist.classList.add("block");

}

function hideSublist(id) {
	const sublist = document.getElementById(id);
	if (sublist.classList.contains("block")) {
		console.log(sublist);
		sublist.classList.remove("block");
	}
}

function showContent(id) {
    const sections = document.getElementById('content').getElementsByTagName('section');
	for(let i=0; i < sections.length; i++) {
		if (sections[i].id == id)
			sections[i].style.display = "initial";
		else
			sections[i].style.display = "none";
	}

}

function togglePhoto(id) {
	const photo = document.getElementById(id);
	const statusBar = document.getElementById("status-bar-photo");
	const altText = document.getElementById("alt-text-photo");

	photo.classList.toggle("hide");

	if (photo.classList.contains("hide")) {
		statusBar.innerText = "Show";
		altText.classList.remove("hide")
		
	} else {
		statusBar.innerText = "Hide";
		altText.classList.add("hide")
		
	}
	
}

function toggleTable(id) {
	const table = document.getElementById(id);
	const statusBar = document.getElementById("status-bar-table");
	const altText = document.getElementById("alt-text-table")

	table.classList.toggle("hide");

	if (table.classList.contains("hide")) {
		statusBar.innerText = "Show";
		altText.classList.remove("hide");
	} else {
		statusBar.innerText = "Hide";
		altText.classList.add("hide");
	}
}



