/*
 * MacAddress
 * Implements the javascript access to the cordova plugin for retrieving the device mac address. Returns 0 if not running on Android
 * @author Olivier Brand
 */

/**
 * @return the mac address class instance
 */

 // what am i doing below here
 var BtVisibility ={
 	setBtVisibility: function(successCallback, failureCallback){
 		cordova.exec(successCallback, failureCallback, 'BtVisibilityPlugin',
 			'enableBtVisibility', []);
 	}
 };

 module.exports = BtVisibility;
