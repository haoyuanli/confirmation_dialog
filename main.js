// Extend a reusable dialog component from thr native HTMLDialogElement
class ReusableDialog extends HTMLDialogElement {
    constructor() {
        super();
        this.message = "";
    }

    connectedCallback() {
        // Get the message of the dialogue;
        this.message = this.getAttribute("message");
        this.render();
    }

    render() {
        this.innerHTML = `
            <form method="dialog">
                <p>${this.message}</p>
                <button value="Yes">Yes</button>
                <button value="Cancel">Cancel</button>
            </form>
        `
    }
}

customElements.define('reusable-dialog', ReusableDialog, {
    extends: 'dialog'
});


var mainDialog = document.getElementById('mainDialog');

// Display the dialog
mainBtn.addEventListener('click', function onOpen() {
    mainDialog.showModal();
});

// Change the text with the status
mainDialog.addEventListener('close', function onClose() {
  outputBox.value = "You just clicked " + mainDialog.returnValue;
});