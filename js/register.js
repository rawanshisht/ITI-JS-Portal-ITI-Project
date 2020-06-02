var gender = document.getElementsByName("gender");
var userName = document.getElementById("nameInput");
var uniInput = document.getElementById("uniInput");

var genderVal;




window.addEventListener('load', function () {

    if (localStorage.userName && localStorage.userGender) {
        document.getElementById("nameInput").value = '';
        document.getElementById("ageInput").value = '';
        document.getElementById("uniInput").value= '';
    }
})

submitBtn.addEventListener('click', function () {

    if (gender[0].checked) {
        genderVal = gender[0].value;
        // console.log(genderVal);
    }
    if (gender[1].checked) {
        genderVal = gender[1].value;
        // console.log(genderVal);

    }

    window.localStorage.setItem('userName', userName.value);
    window.localStorage.setItem('userGender', genderVal);
    window.localStorage.setItem('uniInput', uniInput.value)

    window.open("../html/profile.html")

    document.getElementById("nameInput").value = '';
    document.getElementById("uniInput").value = '';
    document.getElementById("dateInput").value = 'mm/dd/yyyy';
    gender[0].checked = false;
    gender[1].checked = false;

})


resetBtn.addEventListener("click", function () {
    window.localStorage.removeItem("userName");
    window.localStorage.removeItem("userGender");
    window.localStorage.removeItem("uniInput");
})



