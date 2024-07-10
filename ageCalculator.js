function calculate() {
    let date = document.getElementById("birthday").value;
    if (!date) {
        alert("Veuillez sélectionner votre date d'anniversaire !");
        return;
    }
    const birthday = new Date(date);
    let today = new Date();
    let years = today.getFullYear() - birthday.getFullYear();
    let months = today.getMonth() - birthday.getMonth();
    let days = today.getDate() - birthday.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
}

function effacer() {
    document.getElementById("birthday").value = "";
    document.getElementById('years').textContent = '_';
    document.getElementById('months').textContent = '_';
    document.getElementById('days').textContent = '_';
}
