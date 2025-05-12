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
        console.log("Цікавий факт (" + (i + 1) + "): " + facts[i]);
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
// шукати в контактс
function thankVisitor() {
    alert("Дякуємо за звернення! Ми зв’яжемося з вами найближчим часом.");
}


window.onload = function () {
    //кнопка купити квиток
    const ticketButton = document.querySelector(".ticket-button");
    if (ticketButton) {
        ticketButton.onclick = function () {
            alert("Дякуємо за інтерес до нашого музею!");
        };
    }

    //перша картинка в індекс хтмл
    const museumImage = document.querySelector('img[src="img/museum.webp"]');
    function showAlert() {
        alert("Це головна будівля Музею історії Києва");
    }
    function addBorder() {
        museumImage.style.border = "10px solid darkgreen";
    }
    function logToConsole() {
        console.log("Клік по зображенню музею зафіксовано.");
    }
    if (museumImage) {
        museumImage.addEventListener("click", showAlert);
        museumImage.addEventListener("click", addBorder);
        museumImage.addEventListener("click", logToConsole);
    }

    // в сервіс хтмл
    const rateBtn = document.getElementById("rate-btn");
    if (rateBtn) {
        const rateHandler = {
            handleEvent(event) {
                let score = prompt("Оцініть експозицію від 1 до 5:");
                if (score >= 1 && score <= 5) {
                    alert("Дякуємо за вашу оцінку!");

                    console.log("Подія спрацювала на:", event.currentTarget);
                    event.currentTarget.style.backgroundColor = "#ffd4d4";
                    event.currentTarget.textContent = "Оцінка врахована";


                    rateBtn.removeEventListener("click", rateHandler);
                    console.log("Обробник оцінки видалено.");
                } else {
                    alert("Будь ласка, введіть число від 1 до 5.");
                }
            }
        };

        rateBtn.addEventListener("click", rateHandler);
    }

    // в сервіс
    const exhibitList = document.getElementById("exhibit-list");
    if (exhibitList) {
        exhibitList.addEventListener("click", function (event) {
            if (event.target.tagName === "LI") {
                const items = exhibitList.querySelectorAll("li");
                items.forEach(item => item.classList.remove("active"));
                event.target.classList.add("active");
            }
        });
    }

    // в серсвіс хтмл
    const menu = document.getElementById("menu");
    if (menu) {
        menu.addEventListener("click", function (event) {
            const button = event.target.closest("button");
            if (!button) return;

            const action = button.dataset.action;

            switch (action) {
                case "info":
                    alert("Наш музей був заснований у 1980 році й зберігає понад 10 тисяч експонатів.");
                    break;
                case "tickets":
                    alert("Квитки можна придбати онлайн або в касі музею.");
                    break;
                case "excursion":
                    alert("Запис на екскурсію відкрито! Наш гід вас чекає.");
                    break;
                default:
                    console.log("Невідома дія:", action);
            }
        });
    }
    //about html
    const partnersList = document.getElementById("partners-list");

    if (partnersList) {
        const items = partnersList.querySelectorAll("li");

        items.forEach(item => {
            item.addEventListener("mouseover", function (event) {
                event.target.style.backgroundColor = "#fff3cd";
                event.target.style.fontWeight = "bold";
                console.log("Навели на:", event.target.textContent);
            });

            item.addEventListener("mouseout", function (event) {
                event.target.style.backgroundColor = "";
                event.target.style.fontWeight = "";
                console.log("Пішли на:", event.relatedTarget?.textContent);
            });
        });
    }

    // about html
    const simpleExhibits = document.querySelectorAll(".exhibit");

    simpleExhibits.forEach(exhibit => {
        let isDragging = false;
        let offsetX = 0, offsetY = 0;

        exhibit.addEventListener("mousedown", function (e) {
            isDragging = true;
            offsetX = e.clientX - exhibit.offsetLeft;
            offsetY = e.clientY - exhibit.offsetTop;
            exhibit.style.cursor = "grabbing";
        });

        document.addEventListener("mousemove", function (e) {
            if (isDragging) {
                exhibit.style.left = (e.clientX - offsetX) + "px";
                exhibit.style.top = (e.clientY - offsetY) + "px";
            }
        });

        document.addEventListener("mouseup", function () {
            isDragging = false;
            exhibit.style.cursor = "grab";
        });
    });






}