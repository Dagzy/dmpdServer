const accountSid = 'AC59c0df042c18112df3a218b70ef88bfa';
const authToken = '4077fe59c42e5c28ce6408f4b6d4b618';



//require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

exports.send = function(message, callback){
	client.messages.create({
	    to: message.message.toNumber,
	    from: "+13173336853",
	    body: message.message.text,
	}, function(err, message) {
	   callback(err)
	});
}