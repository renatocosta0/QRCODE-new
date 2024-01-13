container = document.querySelector(".container");
txtInput = document.querySelector("#qr-form input");
qrCode = document.querySelector("#qr-form button");
qrImg = document.querySelector("#qr-code img");

function generateQr() {
   qrCode.innerText = "Gerando código..."
   let txtInputValue = txtInput.value;

   if (!txtInputValue) return;
   
   qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${txtInputValue}`;

    qrImg.addEventListener("load", () => {
        container.classList.add("active");
        qrCode.innerText = "Código criado!"

    });
   
}

qrCode.addEventListener("click", () => {
    generateQr();
});

txtInput.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        generateQr();
    }
});

txtInput.addEventListener("keyup", () => {
   if (!txtInput.value) {
    qrCode.innerText = "Gerar QR Code";
    container.classList.remove("active");
   };

});