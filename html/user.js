$( document ).ready(function() {
	var user = {
		ID : userId,
		name : userName,
		email : userEmail,
	}

	localStorage.user = JSON.stringify(user);

});
