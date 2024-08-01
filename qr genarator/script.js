function generateQR() {
    var qrText = document.getElementById("qrText").value;
    var qrimg = document.getElementById("qrimg");
    qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText);
}