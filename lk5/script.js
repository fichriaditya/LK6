document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("myForm");
    const nama = document.getElementById("nama");
    const email = document.getElementById("email");
    const kategori = document.getElementById("kategori");
    const hp = document.getElementById("hp");
    const pesan = document.getElementById("pesan");

    const notif = document.getElementById("notif");
    const list = document.getElementById("listData");

    const errorNama = document.getElementById("errorNama");
    const errorEmail = document.getElementById("errorEmail");
    const errorKategori = document.getElementById("errorKategori");
    const errorHP = document.getElementById("errorHP");
    const errorPesan = document.getElementById("errorPesan");

    // 🔥 POPUP MODERN
    const popup = document.createElement("div");
    popup.innerText = "Pesan berhasil dikirim! ✅";
    popup.style.position = "fixed";
    popup.style.top = "20px";
    popup.style.right = "20px";
    popup.style.background = "#4CAF50";
    popup.style.color = "white";
    popup.style.padding = "15px 20px";
    popup.style.borderRadius = "8px";
    popup.style.display = "none";
    popup.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    document.body.appendChild(popup);

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let valid = true;

        if (nama.value.trim().length < 3) {
            errorNama.innerText = "Minimal 3 huruf";
            valid = false;
        } else errorNama.innerText = "";

        if (!email.value.includes("@")) {
            errorEmail.innerText = "Email tidak valid";
            valid = false;
        } else errorEmail.innerText = "";

        if (kategori.value === "") {
            errorKategori.innerText = "Pilih kategori";
            valid = false;
        } else errorKategori.innerText = "";

        if (!/^[0-9]+$/.test(hp.value)) {
            errorHP.innerText = "Harus angka";
            valid = false;
        } else errorHP.innerText = "";

        if (pesan.value.trim().length < 5) {
            errorPesan.innerText = "Pesan terlalu pendek";
            valid = false;
        } else errorPesan.innerText = "";

        if (valid) {
            notif.innerText = "Berhasil dikirim!";
            notif.style.color = "green";

            // 🔥 ALERT (popup tengah)
            alert("Pesan berhasil dikirim! ✅");

            // 🔥 POPUP MODERN
            popup.style.display = "block";

            setTimeout(() => {
                popup.style.display = "none";
            }, 3000);

            const li = document.createElement("li");
            li.innerHTML = `
                Nama: ${nama.value} <br>
                Email: ${email.value} <br>
                Kategori: ${kategori.value} <br>
                No HP: ${hp.value} <br>
                Pesan: ${pesan.value}
            `;
            list.appendChild(li);

            form.reset();

        } else {
            notif.innerText = "Gagal kirim!";
            notif.style.color = "red";

            // 🔥 ALERT GAGAL
            alert("Data belum lengkap! ❌");
        }
    });

});