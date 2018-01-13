'use strict'
let auth_user = require('./authenticate');
let config = require('./config_firebase');


var theUser = null;

var database = config.firebase.database();


function updateStatus(){
	var temperature=26;
	var relay = 0;
	var last_update = Date.now();
	console.log('Updating temperature status...',temperature,relay,last_update);
	database.ref('Parba/status').set({
		last_update: last_update,
		temperature: temperature,
		relay: relay
	});
}


config.firebase.auth().onAuthStateChanged(function(user){
	theUser = user;
	console.log('Auth state changed: ' + theUser.uid);

});


setInterval (updateStatus,5000);



