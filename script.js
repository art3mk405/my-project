function museumUserDialog() {
    let visitorName = prompt("Ласкаво просимо до Музею історії Києва!\nЯк Вас звати?");

    if (visitorName && visitorName.trim() !== "") {
        alert("Привіт, " + visitorName + "! Дуже раді бачити Вас у нашому музеї.");
    } else {
        alert("Привіт! Дуже раді, що завітали до Музею історії Києва, навіть якщо Ви не ввели ім’я.");
    }
    
    let wantsHistory = confirm("Бажаєте дізнатись коротку історію нашого музею?");
    if (wantsHistory) {
        alert("Музей історії Києва був заснований у 1978 році і відкритий у 1979 році. Він об’єднує 9 філій, кожна з яких розповідає свою унікальну історію міста!");
    } else {
        alert("Добре, продовжуйте огляд і самі відкривайте історію міста!");
    }
    
    const facts = [
        "Київ є одним із найстаріших міст Східної Європи з історією понад 1500 років.",
        "Столиця України, Київ, відомий своїми зеленими парками та вражаючою архітектурою.",
        "На території Києва знаходиться знаменита Києво-Печерська Лавра — один із головних духовних центрів Східної Європи."
    ];
    for (let i = 0; i < facts.length; i++) {
        console.log("Цікавий факт (" + (i+1) + "): " + facts[i]);
    }
}


function developerInfo(lastName, firstName, position = "Розробник сайту") {
    alert("Інформація про розробника:\n" +
          "Прізвище: " + lastName + "\n" +
          "Ім'я: " + firstName + "\n" +
          "Посада: " + position);
}

function compareStrings() {

    let firstString = prompt("Введіть перший рядок:");
    let secondString = prompt("Введіть другий рядок:");

    if (firstString && secondString) {
        if (firstString.length > secondString.length) {
            alert("Більший рядок: " + firstString);
        } else if (secondString.length > firstString.length) {
            alert("Більший рядок: " + secondString);
        } else {
            alert("Рядки однакової довжини!");
        }
    } else {
        alert("Будь ласка, введіть обидва рядки.");
    }
}

function changeBackgroundTemporarily() {
    let originalBg = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#ffaacd";
    setTimeout(() => {
        document.body.style.backgroundColor = originalBg;
    }, 30000);
}

function redirectToPage() {
    location.href = "https://uk.wikipedia.org/wiki/Київ";
}

function workWithDOM() {

    const title = document.getElementById("main-title");
    alert("innerHTML заголовка: " + title.innerHTML);
    const infoParagraphs = document.querySelectorAll(".info-box p");

    let combinedText = "Тексти в .info-box:\n";
    infoParagraphs.forEach((p, i) => {
        combinedText += `Абзац ${i + 1}: ${p.textContent}\n`;
    });
    alert(combinedText);

    alert("outerHTML заголовка:\n" + title.outerHTML);
    if (title.firstChild.nodeType === Node.TEXT_NODE) {
        alert("nodeValue першого дочірнього вузла: " + title.firstChild.nodeValue);
    }

    title.textContent = "Музей історії Києва – оновлено!";
}

function domManipulation() {
    const newDiv = document.createElement("div");
    newDiv.className = "info-box";
    newDiv.style.marginTop = "20px";

    const title = document.createElement("h3");
    title.textContent = "Цікавинка про Київ:";
    const text = document.createTextNode("У Києві знаходиться одна з найглибших у світі станцій метро — Арсенальна (105,5 м).");

    newDiv.append(title);
    newDiv.append(text);

    const container = document.querySelector(".container");
    container.append(newDiv);
    const p = document.createElement("p");
    p.textContent = "Цей блок було додано динамічно!";
    title.prepend(p);

    setTimeout(() => {
        const replacement = document.createElement("p");
        replacement.textContent = "Цей блок замінили!";
        newDiv.replaceWith(replacement);

        setTimeout(() => {
            replacement.remove();
        }, 5000);
    }, 5000);
}



