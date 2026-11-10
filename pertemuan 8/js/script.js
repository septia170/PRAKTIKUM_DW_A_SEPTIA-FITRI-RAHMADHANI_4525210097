const form = document.getElementById("formPendaftaran");
const hasil = document.getElementById("hasil");

function pesan(id, teks) {
    document.getElementById(id).textContent = teks;
}

function validasi() {
    let valid = true;

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const telepon = document.getElementById("telepon").value.trim();
    const kursus = document.getElementById("kursus").value;
    const alasan = document.getElementById("alasan").value.trim();
    const bukti = document.getElementById("bukti").files[0];

    const gender = document.querySelector('input[name="gender"]:checked');
    const jadwal = document.querySelector('input[name="jadwal"]:checked');
    const metode = document.querySelectorAll('input[name="metode"]:checked');
    const persetujuan = document.getElementById("persetujuan").checked;

    document.querySelectorAll(".form-group small").forEach(function(item) {
        if (item.id.startsWith("error")) {
            item.textContent = "";
        }
    });

    hasil.textContent = "";
    hasil.className = "";

    if (nama === "") {
        pesan("errorNama", "Nama lengkap wajib diisi.");
        valid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        pesan("errorEmail", "Masukkan alamat email yang valid.");
        valid = false;
    }

    if (!/^08[0-9]{8,11}$/.test(telepon)) {
        pesan("errorTelepon", "Nomor telepon harus 10–13 digit dan diawali 08.");
        valid = false;
    }

    if (!gender) {
        pesan("errorGender", "Pilih jenis kelamin.");
        valid = false;
    }

    if (kursus === "") {
        pesan("errorKursus", "Pilih program kursus.");
        valid = false;
    }

    if (!jadwal) {
        pesan("errorJadwal", "Pilih jadwal kursus.");
        valid = false;
    }

    if (metode.length === 0) {
        pesan("errorMetode", "Pilih minimal satu metode pembelajaran.");
        valid = false;
    }

    if (alasan.length < 10) {
        pesan("errorAlasan", "Alasan mengikuti kursus minimal 10 karakter.");
        valid = false;
    }

    if (!bukti) {
        pesan("errorBukti", "Bukti pembayaran wajib diunggah.");
        valid = false;
    } else {
        const format = ["image/jpeg", "image/png", "application/pdf"];

        if (!format.includes(bukti.type)) {
            pesan("errorBukti", "File harus berformat JPG, PNG, atau PDF.");
            valid = false;
        } else if (bukti.size > 2 * 1024 * 1024) {
            pesan("errorBukti", "Ukuran file maksimal 2 MB.");
            valid = false;
        }
    }

    if (!persetujuan) {
        pesan("errorPersetujuan", "Kamu harus menyetujui ketentuan.");
        valid = false;
    }

    return valid;
}

document.getElementById("cekBtn").addEventListener("click", function() {
    if (validasi()) {
        hasil.textContent = "Semua data sudah lengkap dan valid.";
        hasil.className = "success";
    } else {
        hasil.textContent = "Masih terdapat data yang perlu diperbaiki.";
        hasil.className = "error";
    }
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (validasi()) {
        hasil.textContent = "Validasi berhasil! Form siap dikirim ke server.";
        hasil.className = "success";
    } else {
        hasil.textContent = "Pendaftaran belum dapat diproses. Periksa kembali data kamu.";
        hasil.className = "error";
    }
});

form.addEventListener("reset", function() {
    setTimeout(function() {
        document.querySelectorAll(".form-group small").forEach(function(item) {
            if (item.id.startsWith("error")) {
                item.textContent = "";
            }
        });

        hasil.textContent = "";
        hasil.className = "";
    }, 0);
});