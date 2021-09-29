const sumbitPersonalData = document.getElementById("btnSubmit");

function submitInfo(){
    // PERSONAL INFORMATIONS INPUT
let fname = document.getElementById("fullname").value;
let num = document.getElementById("phone_number").value;
let ema = document.getElementById("email_address").value;
let addr = document.getElementById("address").value;
let websit = document.getElementById("web").value;
let aimer = document.getElementById("aim").value;
let summa = document.getElementById("summary").value;


// PERSONAL INFORMATIONS OUTPUT
document.querySelector(".personal_info").innerHTML = fname;
    document.querySelector(".phone").innerHTML = num + " " + "|";
    document.querySelector(".email").innerHTML = ema + " " + "|";
    document.querySelector(".location").innerHTML = addr + " " + "|";
    document.querySelector(".website").innerHTML = websit + " " + "|";
    document.querySelector(".profiling").innerHTML = aimer;
    document.querySelector(".career").innerHTML = summa;

    // PRO SKILLS AND ABILITIES INPUT

    let firstSkill = document.getElementById("skill1").value;
    let secondSkill = document.getElementById("skill2").value;
    let thirdSkill = document.getElementById("skill3").value;

    // PRO SKILLS AND ABILITIES OUTPUT

    document.querySelector(".skill_one").innerHTML = firstSkill;
    document.querySelector(".skill_two").innerHTML = secondSkill;
    document.querySelector(".skill_three").innerHTML = thirdSkill;

    // EDUCATIONAL BACKGROUND HERE INPUT

let primary = document.getElementById("pri").value;
let primaryCer = document.getElementById("cert").value;

let secondary = document.getElementById("sec").value;
let secondaryCer = document.getElementById("sec_cert").value;

let higher = document.getElementById("higher_pri").value;
let higherCert = document.getElementById("higher_cert").value;

// EDUCATIONAL BACKGROUND HERE OUTPUT

document.querySelector(".pri_school").innerHTML = primary;
document.querySelector(".certificate").innerHTML = primaryCer;

document.querySelector(".sec_school").innerHTML = secondary;
document.querySelector(".sec_certificate").innerHTML = secondaryCer;

document.querySelector(".higher_school").innerHTML = higher;
document.querySelector(".higher_certificate").innerHTML = higherCert;

// WORK EXPERIENCE HERE INPUT

let job1 = document.getElementById("f_job").value;
let experince1 = document.getElementById("cert").value;

let job2 = document.getElementById("s_job").value;
let experince12= document.getElementById("s_experince").value;

let job3 = document.getElementById("t_job").value;
let experince3 = document.getElementById("t_experince").value;

// WORK EXPERIENCE HERE OUTPUT

document.querySelector(".first_job").innerHTML = job1;
document.querySelector(".first_experince").innerHTML = experince1;

document.querySelector(".second_job").innerHTML = job2;
document.querySelector(".second_experince").innerHTML = experince12;


document.querySelector(".third_job").innerHTML = job3;
document.querySelector(".third_experince").innerHTML = experince3;

}

sumbitPersonalData.addEventListener('click',submitInfo)
window.location = "http:/submitedForm.html"