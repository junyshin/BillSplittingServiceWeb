$( document ).ready(function() {
	var user = {
		ID : "11",
		name : "Jane Doe",
		email : "jane.doe@mail.com"
	}

	localStorage.user = JSON.stringify(user);

});
