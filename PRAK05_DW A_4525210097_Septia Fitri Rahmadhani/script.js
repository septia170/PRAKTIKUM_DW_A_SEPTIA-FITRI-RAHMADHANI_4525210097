const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");
const toast = document.getElementById("toast");

let cart = [];
let toastTimer;

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

// NAVIGASI MOBILE
menuToggle.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

navbar.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// FILTER MENU
const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.dataset.filter;

        filterButtons.forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        menuCards.forEach(card => {
            const matches =
                category === "all" ||
                card.dataset.category === category;

            card.classList.toggle("hidden", !matches);
        });
    });
});

// KERANJANG BELANJA
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");

function formatRupiah(amount) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(amount);
}

function updateCart() {
    const totalItems = cart.reduce(
        (sum, item) => sum + item.quantity, 0
    );

    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    );

    cartCount.textContent = totalItems;
    cartTotal.textContent = formatRupiah(totalPrice);
}

document.querySelectorAll(".add-cart").forEach(button => {
    button.addEventListener("click", () => {
        const name = button.dataset.name;
        const price = Number(button.dataset.price);

        const existingItem = cart.find(item => item.name === name);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                name,
                price,
                quantity: 1
            });
        }

        updateCart();
        showToast(`${name} ditambahkan ke keranjang ♡`);
    });
});

// LIHAT PESANAN
document.getElementById("orderButton").addEventListener("click", () => {
    if (cart.length === 0) {
        showToast("Pilih menu favoritmu terlebih dahulu ♡");
        return;
    }

    const details = cart.map(item =>
        `${item.name} x ${item.quantity} — ${formatRupiah(item.price * item.quantity)}`
    );

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    );

    const message =
        "PESANAN SWEETCUP ♡\n\n" +
        details.join("\n") +
        "\n\nTotal: " + formatRupiah(total) +
        "\n\nIni adalah ringkasan pesanan demo.";

    alert(message);
});

console.log("SweetCup Café berhasil dimuat ♡");