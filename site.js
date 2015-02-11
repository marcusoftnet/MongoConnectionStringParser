$(document).ready(function () {
	$('#connectionString').keyup(function () {
		var connectionString = $('#connectionString').val();

		var protocolParts = connectionString.split('://');
		var protocol = protocolParts[0];

		var serverPart = connectionString.split('@')[1];
		var server = serverPart.split(':')[0];

		var portParts = serverPart.split(':')[1];
		var port = portParts.split('/')[0];

		var userParts = protocolParts[1].split('@')[0];
		var user = userParts.split(':')[0];
		var password = userParts.split(':')[1];

		$('#protocol').val(protocol);
		$('#copy-button-protocol').attr('data-clipboard-text', protocol);

		$('#server').val(server);
		$('#copy-button-server').attr('data-clipboard-text', server);

		$('#port').val(port);
		$('#copy-button-port').attr('data-clipboard-text', port);

		$('#user').val(user);
		$('#copy-button-user').attr('data-clipboard-text', user);

		$('#password').val(password);
		$('#copy-button-password').attr('data-clipboard-text', password);
	});

	var clientPort = new ZeroClipboard(document.getElementById("copy-button-port"));
	var clientServer = new ZeroClipboard(document.getElementById("copy-button-server"));
	var clientProtocol = new ZeroClipboard(document.getElementById("copy-button-protocol"));
	var clientPassword = new ZeroClipboard(document.getElementById("copy-button-password"));
	var clientUser = new ZeroClipboard(document.getElementById("copy-button-user"));
	var clientAll = new ZeroClipboard(document.getElementById('copy-button-all'));

	clientPort.on("ready", function (r) { hookUpMessage(clientPort)});
	clientServer.on("ready", function (r) { hookUpMessage(clientServer)});
	clientProtocol.on("ready", function (r) { hookUpMessage(clientProtocol)});
	clientPassword.on("ready", function (r) { hookUpMessage(clientPassword)});
	clientUser.on("ready", function (r) { hookUpMessage(clientUser)});
	clientAll.on("ready", function (r) { hookUpMessage(clientAll)});

	var hookUpMessage = function (client) {
		client.on("aftercopy", function(e){
			$("#copyMessage")
				.html("Copied... paste where you like")
				.fadeIn(500)
				.delay(2000)
				.fadeOut(500);
		});
	};
});

