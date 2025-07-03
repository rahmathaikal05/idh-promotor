
let currentCategory = 'eznet';

const data = {
  eznet: [
    { paket: "EZNET Wireless - 10 Mbps", harga: "Rp155.000", bulanan: "Rp177.600", fup: "120 GB", pasang: "Rp166.500" },
    { paket: "EZNET - 20 Mbps", harga: "Rp180.000", bulanan: "Rp205.350", fup: "700 GB", pasang: "Rp166.500" }
  ],
  indihome: [
    { paket: "INET ONLY - 50 Mbps", harga: "Rp240.000", bulanan: "Rp271.950", fup: "1800 GB", pasang: "Rp166.500" },
    { paket: "INET ONLY - 75 Mbps", harga: "Rp270.000", bulanan: "Rp305.250", fup: "1900 GB", pasang: "Rp166.500" },
    { paket: "INET ONLY - 150 Mbps", harga: "Rp375.000", bulanan: "Rp421.800", fup: "2500 GB", pasang: "Rp166.500" },
    { paket: "INET ONLY - 200 Mbps", harga: "Rp515.000", bulanan: "Rp577.200", fup: "3000 GB", pasang: "Rp166.500" },
    { paket: "ONE DINAMIC - 50 Mbps + 15GB", harga: "Rp285.000", bulanan: "Rp321.900", fup: "-", pasang: "GRATIS" },
    { paket: "ONE DINAMIC - 75 Mbps + 15GB", harga: "Rp310.000", bulanan: "Rp349.650", fup: "-", pasang: "GRATIS" },
    { paket: "ONE DINAMIC - 150 Mbps + 15GB", harga: "Rp410.000", bulanan: "Rp460.650", fup: "-", pasang: "GRATIS" },
    { paket: "INET + IndihomeTV - 50 Mbps", harga: "Rp355.000", bulanan: "Rp399.600", fup: "-", pasang: "Rp166.500" },
    { paket: "INET + IndihomeTV - 75 Mbps", harga: "Rp385.000", bulanan: "Rp432.900", fup: "-", pasang: "Rp166.500" },
    { paket: "INET + IndihomeTV - 150 Mbps", harga: "Rp510.000", bulanan: "Rp571.650", fup: "-", pasang: "Rp166.500" },
    { paket: "INET + IndihomeTV - 200 Mbps", harga: "Rp650.000", bulanan: "Rp727.050", fup: "-", pasang: "Rp166.500" }
  ]
};

function toggleCategory(cat) {
  currentCategory = cat;
  document.getElementById('btn-eznet').classList.toggle('active', cat === 'eznet');
  document.getElementById('btn-indihome').classList.toggle('active', cat === 'indihome');

  // Tampilkan atau sembunyikan info EZNET
  const eznetInfo = document.getElementById('eznet-info');
  if (cat === 'eznet') {
    eznetInfo.style.display = 'block';
  } else {
    eznetInfo.style.display = 'none';
  }

  applyFilter();
}


// Fungsi untuk menerapkan filter kecepatan dan menampilkan kartu
function applyFilter() {
  const filter = document.getElementById('speedFilter').value;
  const container = document.getElementById('container');
  container.innerHTML = '';

  data[currentCategory].forEach(p => {
    // Ekstrak kecepatan dari teks paket (contoh: 50 Mbps)
    const match = p.paket.match(/(\d+)\s*Mbps/);
    const speed = match ? match[1] : null;

    // Jika filter dipilih dan tidak cocok, lewati
    if (filter && speed !== filter) return;

    // Format pesan WhatsApp
    const text = encodeURIComponent(
`Halo, saya tertarik dengan paket ${currentCategory === 'eznet' ? 'EZNET' : 'INDIHOME'} berikut:

📶 Paket: ${p.paket}
💰 Harga Paket: ${p.harga}
📅 Harga Bulanan: ${p.bulanan}
${p.fup && p.fup !== '-' ? '📦 FUP: ' + p.fup + '\n' : ''}🔧 Biaya Pemasangan: ${p.pasang}

Mohon informasi lebih lanjut. Terima kasih.`);

    // Buat elemen HTML untuk setiap paket
    const html = `
      <div class="card fade-in">
        <h3>${p.paket}</h3>
        <p>Bulanan: ${p.bulanan}</p>
        ${p.fup && p.fup !== '-' ? `<p>FUP: ${p.fup}</p>` : ''}
        <p>Pemasangan: ${p.pasang}</p>
        <a class="whatsapp" target="_blank"
           href="https://wa.me/6282277256004?text=${text}">Tanya Sekarang</a>
      </div>`;
    
    container.innerHTML += html;
  });
}

// Tampilkan kategori EZNET saat pertama kali
toggleCategory('indihome');