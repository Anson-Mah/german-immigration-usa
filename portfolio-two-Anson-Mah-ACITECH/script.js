// Name: Anson Mah
// Date: 28 January, 2024

// Boolean that determines whether the mini navigation menu will be shown or not.
let nav_shown = false;

// Event Listener fires when hamburger button is clicked.
document.getElementById('hamburger_button').addEventListener('click', ()=> {
	nav_shown = !nav_shown; // Toggles the boolean
	if (nav_shown==true) {
		document.getElementById('nav_small').style.display = 'grid';
	} else {
		document.getElementById('nav_small').style.display = 'none';
	}
})