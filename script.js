// MOBILE MENU

function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("active");
}


// MOBILE MODELS

const models = {

    Apple: [
        "iPhone 11",
        "iPhone 12",
        "iPhone 13",
        "iPhone 14",
        "iPhone 15",
        "iPhone 16",
        "iPhone 17"
    ],

    Samsung: [
        "Galaxy A14",
        "Galaxy A24",
        "Galaxy A34",
        "Galaxy A54",
        "Galaxy S22",
        "Galaxy S23",
        "Galaxy S24"
    ],

    OnePlus: [
        "OnePlus Nord",
        "OnePlus Nord 2",
        "OnePlus Nord 3",
        "OnePlus 10 Pro",
        "OnePlus 11",
        "OnePlus 12"
    ],

    Xiaomi: [
        "Redmi Note 10",
        "Redmi Note 11",
        "Redmi Note 12",
        "Redmi Note 13",
        "Mi 11",
        "Mi 12"
    ],

    Vivo: [
        "Vivo Y21",
        "Vivo Y22",
        "Vivo Y35",
        "Vivo V23",
        "Vivo V27",
        "Vivo V30"
    ],

    Oppo: [
        "Oppo A16",
        "Oppo A57",
        "Oppo A78",
        "Oppo Reno 8",
        "Oppo Reno 10",
        "Oppo Reno 12"
    ],

    Realme: [
        "Realme C25",
        "Realme C35",
        "Realme 9",
        "Realme 10",
        "Realme 11",
        "Realme 12"
    ],

    Other: [
        "Other Model"
    ]
};


function updateModels() {

    const brand = document.getElementById("brand").value;
    const modelSelect = document.getElementById("model");

    modelSelect.innerHTML =
        '<option value="">Select Model</option>';

    if (models[brand]) {

        models[brand].forEach(function(model) {

            const option = document.createElement("option");

            option.value = model;
            option.textContent = model;

            modelSelect.appendChild(option);

        });

    }
}


// PRICE CALCULATOR

const prices = {

    "Screen Replacement": 999,
    "Battery Replacement": 599,
    "Charging Port": 399,
    "Speaker / Mic": 399,
    "Camera": 699,
    "Water Damage": 499,
    "Power Problem": 499,
    "Software": 299

};


function calculatePrice() {

    const problem =
        document.getElementById("problem").value;

    const price =
        prices[problem] || 0;

    document.getElementById("price").textContent =
        "₹" + price;
}


// SET MINIMUM DATE

const dateInput =
    document.getElementById("date");

const today =
    new Date().toISOString().split("T")[0];

dateInput.min = today;


// BOOKING FORM

document
.getElementById("bookingForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const phone =
        document.getElementById("phone").value;

    const brand =
        document.getElementById("brand").value;

    const model =
        document.getElementById("model").value;

    const problem =
        document.getElementById("problem").value;

    const address =
        document.getElementById("address").value;

    const date =
        document.getElementById("date").value;

    const time =
        document.getElementById("time").value;

    const price =
        prices[problem] || 0;


    // CHANGE THIS NUMBER
    const whatsappNumber =
        "918780496103";


    const message =

`🔧 *NEW MOBILE REPAIR BOOKING*

👤 Name: ${name}

📞 Phone: ${phone}

📱 Brand: ${brand}

📲 Model: ${model}

🛠️ Problem: ${problem}

💰 Estimated Price: ₹${price}

📍 Address:
${address}

📅 Date: ${date}

⏰ Time: ${time}

Please confirm my doorstep repair booking.`;


    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);


    window.open(whatsappURL, "_blank");


    alert(
        "Booking details WhatsApp par bhejne ke liye open ho rahe hain."
    );

});