document.addEventListener('DOMContentLoaded', function() {
    // index starts
    const btn = document.getElementById('Btn');
    if (btn) {
        btn.addEventListener('click', function() {
            const Email = document.getElementById('Email').value;
            const Password = document.getElementById('Password').value;

            if(!Email || !Password){
                alert("Please Enter the Details!");
                return;
            }
            alert("***Login Successfully***");
            window.location.href = "page1.html";
        });
    }
    // index ends

    // CA starts
    const btn2 = document.getElementById('Btn2');
    if (btn2) {
        btn2.addEventListener('click', function() {
            const Name = document.getElementById('Name').value;
            const UserID = document.getElementById('UserID').value;
            const Email2 = document.getElementById('Email2').value;
            const Password2 = document.getElementById('Password2').value;
            const PN = document.getElementById('PN').value;

            if(!Name || !UserID || !Email2 || !Password2 || !PN){
                alert("Please Fill the Details!");
                return;
            }

            alert("Submitted Successfully");
            window.location.href = "index.html";
        });
    }
    // CA ends
    // page1 starts
    // page1 ends
});