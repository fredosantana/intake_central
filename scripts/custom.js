// console.log('test');

// To intiate list.js
var options = {
	valueNames: [ 'last-name', 'first-name', 'program', 'status', 'file-location', 'office-name', 'city' ]
};

// For Master Client List   
var clientList = new List('client-list', options);
// For Agency Listing
var transferList = new List('transfer-list', options);
