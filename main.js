var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayValue, d, DD, MM, YY, CC, yr;


function getDay() {
    yr = document.getElementById("yr").value;
    CC = parseInt(yr.substring(0, 2));
    YY = parseInt(yr.substring(2, 4));
    MM = parseInt(document.getElementById("mon").value);
    DD = parseInt(document.getElementById("dy").value);
    ddy = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
    // console.log(ddy);
    var x = Math.floor(ddy)
    return x;
}

