// Extend a reusable dialog component from the HTMLElement
class ReusableDialog extends HTMLElement {
    constructor() {
        super();
        this.message = "";
        this.dialogId = "";
    }

    connectedCallback() {
        // Get the DialogId and message of the dialogue;
        this.dialogId = this.getAttribute("dialogId");
        this.message = this.getAttribute("message");
        this.render();
    }

    render() {
        this.innerHTML = `
        <dialog id='${this.dialogId}'>
            <form method="dialog">
                <p>${this.message}</p>
                <button value="Yes">Yes</button>
                <button value="Cancel">Cancel</button>
            </form>
        </dialog>
        `
    }
}

customElements.define('reusable-dialog', ReusableDialog);


let mainDialog = document.getElementById('mainDialog');
let message = document.getElementById('output');

// Display the dialog
mainBtn.addEventListener('click', function onOpen() {
    mainDialog.showModal();
});

// Change the text with the status
mainDialog.addEventListener('close', function onClose() {
    message.value = "You just clicked " + mainDialog.returnValue;
});
