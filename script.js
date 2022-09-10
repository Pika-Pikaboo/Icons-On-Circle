const images = document.getElementsByTagName("img");

for (let x = 0; x < images.length; x++) {
	images[x].setAttribute("draggable", "false");
}
