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
function getUserGender(dv) {
    var g = document.getElementsByName("gender")
    var gndr;
    // console.log(g)
    if (g[0].checked == true) {
        gndr = "male";
    } else if (g[1].checked == true) {
        gndr = "female";
    } else {
        return false;
    }
    // console.log(gndr)
    switch (gndr) {
        case "male":
            //   console.log(dv)
            switch (dv) {
                case 1:
                    alert("You were born on " + dayNames[0] + " and Your akan name is " + maleNames[0] + "!");
                    break
                case 2:
                    alert("You were born on " + dayNames[1] + " and Your akan name is " + maleNames[1] + "!");
                    break
                case 3:
                    alert("You were born on " + dayNames[2] + " and Your akan name is " + maleNames[2] + "!");
                    break
                case 4:
                    alert("You were born on " + dayNames[3] + " and Your akan name is " + maleNames[3] + "!");
                    break
                case 5:
                    alert("You were born on " + dayNames[4] + " and Your akan name is " + maleNames[4] + "!");
                    break
                case 6:
                    alert("You were born on " + dayNames[5] + " and Your akan name is " + maleNames[5] + "!");
                    break
                case 7:
                    alert("You were born on " + dayNames[6] + " and Your akan name is " + maleNames[6] + "!");
                    break
            }
            break;
        case "female":
            switch (dv) {
                case 1:
                    alert("You were born on " + dayNames[0] + " and Your akan name is " + femaleNames[0] + "!");
                    break
                case 2:
                    alert("You were born on " + dayNames[1] + " and Your akan name is " + femaleNames[1] + "!");
                    break
                case 3:
                    alert("You were born on " + dayNames[2] + " and Your akan name is " + femaleNames[2] + "!");
                    break
                case 4:
                    alert("You were born on " + dayNames[3] + " and Your akan name is " + femaleNames[3] + "!");
                    break
                case 5:
                    alert("You were born on " + dayNames[4] + " and Your akan name is " + femaleNames[4] + "!");
                    break;
                case 6:
                    alert("You were born on " + dayNames[5] + " and Your akan name is " + femaleNames[5] + "!");
                    break
                case 7:
                    alert("You were born on " + dayNames[6] + " and Your akan name is " + femaleNames[6] + "!");
                    break;
            }
            break
        default:
    }
}
function validateForm() {
    yr = document.getElementById("yr").value;
    const d = new Date();
    let year = d.getFullYear();
    if (yr > year) {
        alert("Please enter a valid year")
        return false
    }
    MM = parseInt(document.getElementById("mon").value);
    if (MM > 12){
        alert("Enter a valid month")
        return false
    }
    DD = parseInt(document.getElementById("dy").value);
    if (DD> 31){
        alert("Please enter a valid date")
        return false
    }

    return true
}
function main(event) {
    event.preventDefault();
    if(validateForm()){
    // console.log(getDay())
    dayValue = getDay();
    getUserGender(dayValue)}

    return false
}

