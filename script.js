const wrapper=document.querySelector(".wrapper"),
generatebtn=wrapper.querySelector(".form button"),
qrInput=wrapper.querySelector(".form input"),
qrImg=wrapper.querySelector(".qr-code img");
    generatebtn.addEventListener("click",() =>{
        let qrvalue=qrInput.value;// if the input is empty then return from here
        if(!qrvalue) return;
        // getting a qr code of the user entered value using the qr server
        qrImg.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=$(qrvalue)';
     
        wrapper.classList.add("active");

    });
