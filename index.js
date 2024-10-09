let year = document.querySelector('.year');
let month = document.querySelector('.month');
let day = document.querySelector('.day');

function CalculateAge() {
    Cancel();

    let current = new Date();
    let birthday = new Date(document.querySelector('#data').value);
    let months, days;
    let Months = [];
    
    let years = current.getFullYear() - birthday.getFullYear();
    
    if ((current.getFullYear() % 4 == 0) && (current.getFullYear() % 100 != 0 || current.getFullYear() % 400 == 0)) {
        Months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // Leap year
    } else {
        Months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    }

    // Calculate months and days
    if (current.getMonth() >= birthday.getMonth()) {
        months = current.getMonth() - birthday.getMonth();
    } else {
        years -= 1;
        months = 12 + current.getMonth() - birthday.getMonth();
    }

    if (current.getDate() >= birthday.getDate()) {
        days = current.getDate() - birthday.getDate();
    } else {
        months -= 1;
        if (months < 0) {
            years -= 1;
            months = 11;
        }
        days = Months[birthday.getMonth()] - birthday.getDate() + current.getDate();
    }

    // Increment and animate the display for years, months, and days
    SetYear(years);
    setTimeout(function () {
        SetMonth(months);
        setTimeout(function () {
            SetDay(days);
        }, 100 * months);  // Delay is based on the months for smoother animation
    }, 100 * years);  // Delay is based on the years for smoother animation
}

function SetYear(finalYears) {
    year.style.transform = "translateX(0px)";
    let i = 0;
    let interval = setInterval(function () {
        year.innerHTML = `${i} Years`;
        if (i >= finalYears) clearInterval(interval);
        i++;
    }, 100);
}

function SetMonth(finalMonths) {
    month.style.transform = "translateX(0px)";
    let i = 0;
    let interval = setInterval(function () {
        month.innerHTML = `${i} Months`;
        if (i >= finalMonths) clearInterval(interval);
        i++;
    }, 100);
}

function SetDay(finalDays) {
    day.style.transform = "translateX(0px)";
    let i = 0;
    let interval = setInterval(function () {
        day.innerHTML = `${i} Days`;
        if (i >= finalDays) clearInterval(interval);
        i++;
    }, 100);
}

function displayDataBlock() {
    document.querySelector('.data-block').style.transform = "translateY(100px)";
    
    year.style.transform = "translateX(-1000px)";
    setTimeout(function () {
        month.style.transform = "translateX(-1000px)";
        setTimeout(function () {
            day.style.transform = "translateX(-1000px)";
        }, 100);
    }, 100);
}

function Cancel() {
    document.querySelector('.data-block').style.transform = "translateY(-1000px)";
    year.style.transform = "translateX(0px)";
    setTimeout(function () {
        month.style.transform = "translateX(0px)";
        setTimeout(function () {
            day.style.transform = "translateX(0px)";
        }, 100);
    }, 100);
}
