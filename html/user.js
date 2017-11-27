$( document ).ready(function() {
var user = {
	ID : 'userID',
	name : "Jane Doe",
	email : "jane.doe@mail.com",
}

localStorage.user = JSON.stringify(user);

});
