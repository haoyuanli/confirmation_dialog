let mainButton = document.getElementById('mainBtn');
let mainDialog = document.getElementById('mainDialog');
let message = document.getElementById('output');

// Display the dialog
mainButton.addEventListener('click', function onOpen() {
    mainDialog.showModal();
});

// Change the text with the status
mainDialog.addEventListener('close', function onClose() {
  message.innerHTML = "You just clicked " + mainDialog.returnValue;
});