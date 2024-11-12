
let keranjangBelanja = [];

function main() {
    console.log("Selamat datang di Sistem Kasir!");
    console.log("1. Tambahkan barang");
    console.log("2. Hitung total");
    console.log("3. Keluar");

    const pilihan = prompt("Pilih menu: 1, 2, atau 3");

    if (pilihan === "1") {
        const nama = prompt("Masukkan nama barang:");
        const harga = parseInt(prompt("Masukkan harga barang:"), 10);

        tambahBarang(nama, harga);
        alert("Barang berhasil ditambahkan!");

        // Panggil main lagi untuk memilih menu lainnya
        main();

    } else if (pilihan === "2") {
        const total = hitungTotal();
        console.log("Total belanja Anda: Rp" + total);
        alert("Total belanja Anda: Rp" + total);

        // Panggil main lagi untuk memilih menu lainnya
        main();

    } else if (pilihan === "3") {
        keluar();
    } else {
        alert("Pilihan tidak valid.");
        main();
    }
}

function tambahBarang(nama, harga) {
    keranjangBelanja.push({ nama, harga });
}

function hitungTotal() {
    let total = 0;
    for (let item of keranjangBelanja) {
        total += item.harga;
    }
    return total;
}

function keluar() {
    alert("Terima kasih telah menggunakan Sistem Kasir.");
}

// Memulai aplikasi
main();
