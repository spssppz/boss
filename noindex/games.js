fetch("noindex/games.html")
	.then(response => {
		return response.text()
	})
	.then(data => {
		document.querySelector(".slots-new").innerHTML = data;
	});