
// MENU NAVIGASI HP
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// MENUTUP MENU SETELAH LINK DIKLIK
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {
    item.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});

// FORM PENDAFTARAN
const registrationForm = document.getElementById("registrationForm");
const message = document.getElementById("message");

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const telepon = document.getElementById("telepon").value.trim();
    const kategori = document.getElementById("kategori").value;
    const kehadiran = document.querySelector(
        'input[name="kehadiran"]:checked'
    );
    const topik = document.querySelectorAll(
        'input[name="topik"]:checked'
    );
    const alasan = document.getElementById("alasan").value.trim();
    const berkas = document.getElementById("berkas").files[0];
    const persetujuan = document.getElementById("persetujuan").checked;

    // VALIDASI INPUT
    if (nama === "") {
        tampilkanPesan("Nama lengkap wajib diisi.");
        return;
    }

    if (email === "") {
        tampilkanPesan("Email wajib diisi.");
        return;
    }

    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!polaEmail.test(email)) {
        tampilkanPesan("Format email tidak valid.");
        return;
    }

    if (telepon === "") {
        tampilkanPesan("Nomor telepon wajib diisi.");
        return;
    }

    if (!/^[0-9+\-\s]{8,20}$/.test(telepon)) {
        tampilkanPesan("Nomor telepon tidak valid.");
        return;
    }

    if (kategori === "") {
        tampilkanPesan("Silakan pilih kategori peserta.");
        return;
    }

    if (!kehadiran) {
        tampilkanPesan("Silakan pilih metode kehadiran.");
        return;
    }

    if (topik.length === 0) {
        tampilkanPesan("Pilih minimal satu topik yang diminati.");
        return;
    }

    if (alasan === "") {
        tampilkanPesan("Alasan mengikuti wajib diisi.");
        return;
    }

    // VALIDASI FILE
    if (berkas) {
        const formatDiizinkan = [
            "application/pdf",
            "image/jpeg",
            "image/png"
        ];

        if (!formatDiizinkan.includes(berkas.type)) {
            tampilkanPesan("Format berkas harus PDF, JPG, atau PNG.");
            return;
        }

        if (berkas.size > 2 * 1024 * 1024) {
            tampilkanPesan("Ukuran berkas maksimal 2 MB.");
            return;
        }
    }

    if (!persetujuan) {
        tampilkanPesan("Silakan setujui ketentuan pendaftaran.");
        return;
    }

    // PESAN BERHASIL
    message.style.color = "#527a55";
    message.textContent =
        "Pendaftaran berhasil divalidasi! Ini hanya simulasi, data belum dikirim ke server.";

    registrationForm.reset();
});

// FUNGSI MENAMPILKAN PESAN
function tampilkanPesan(teks) {
    message.style.color = "#b34b4b";
    message.textContent = teks;
}
