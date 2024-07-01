
function handleSubmit(event) {
    event.preventDefault();  // Prevent the default form submission
    let text = document.getElementById('input-text').value;
    let qrsrc = `http://api.qrserver.com/v1/create-qr-code/?data=${text}`;
    let qrimg = document.getElementById('qr-img');
    qrimg.src = qrsrc;
}

