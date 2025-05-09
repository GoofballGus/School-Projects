document.querySelectorAll('#buttons > button').forEach(button => {
	button.style.backgroundImage = `url("images/${button.id}.jpg")`;
	button.style.backgroundSize = "cover";
	button.style.backgroundPosition = "center";
	button.style.color = "white";
	button.addEventListener('click', () => {
		window.location.href = `planet.html?planet=${button.id}`;
	});
});
