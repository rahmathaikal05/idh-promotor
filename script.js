
        // Fungsi untuk mengupdate link WhatsApp Eznet
        function updateEznetLink(selectElement) {
            const selectedOption = selectElement.value;
            const button = selectElement.nextElementSibling; // Dapatkan sibling berikutnya yaitu tombol
            let message = "";

            switch (selectedOption) {
                case "eznet-50mbps-reguler":
                    message = "Halo, saya ingin memesan Eznet 50 Mbps Reguler";
                    break;
                case "eznet-50mbps-plus":
                    message = "Halo, saya ingin memesan Eznet 50 Mbps Plus (Rp 190.000)";
                    break;
                case "eznet-100mbps-reguler":
                    message = "Halo, saya ingin memesan Eznet 100 Mbps Reguler";
                    break;
                case "eznet-100mbps-pro":
                    message = "Halo, saya ingin memesan Eznet 100 Mbps Pro (Rp 230.000)";
                    break;
                default:
                    message = "Halo, saya tertarik dengan paket Eznet. Mohon info lebih lanjut.";
            }
            button.href = `https://wa.me/6282277256004?text=${encodeURIComponent(message)}`;
        }

        // Fungsi untuk mengupdate link WhatsApp Indihome
        function updateIndihomeLink(selectElement) {
            const selectedOption = selectElement.value;
            const button = selectElement.nextElementSibling; // Dapatkan sibling berikutnya yaitu tombol
            let message = "";

            switch (selectedOption) {
                case "indihome-50mbps-standard":
                    message = "Halo, saya ingin memesan Indihome Internet Only 50 Mbps Standard";
                    break;
                case "indihome-50mbps-premium":
                    message = "Halo, saya ingin memesan Indihome Internet Only 50 Mbps Premium";
                    break;
                case "indihome-100mbps-bundling-basic":
                    message = "Halo, saya ingin memesan Indihome Paket Bundling 100 Mbps Basic";
                    break;
                case "indihome-100mbps-bundling-plus":
                    message = "Halo, saya ingin memesan Indihome Paket Bundling 100 Mbps Plus";
                    break;
                case "indihome-200mbps-triple-ultimate":
                    message = "Halo, saya ingin memesan Indihome Triple Play 200 Mbps Ultimate";
                    break;
                case "indihome-200mbps-triple-gaming":
                    message = "Halo, saya ingin memesan Indihome Triple Play 200 Mbps Gaming";
                    break;
                default:
                    message = "Halo, saya tertarik dengan paket Indihome. Mohon info lebih lanjut.";
            }
            button.href = `https://wa.me/6282277256004?text=${encodeURIComponent(message)}`;
        }

        // Fungsi Dark Mode
        document.addEventListener('DOMContentLoaded', () => {
            const darkModeToggle = document.getElementById('darkModeToggle');
            const body = document.body;

            // Cek preferensi dark mode dari local storage
            const currentMode = localStorage.getItem('theme');
            if (currentMode === 'dark') {
                body.classList.add('dark-mode');
            } else if (currentMode === null) {
                // Jika belum ada di local storage, cek preferensi sistem
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    body.classList.add('dark-mode');
                    localStorage.setItem('theme', 'dark');
                } else {
                    localStorage.setItem('theme', 'light');
                }
            }


            darkModeToggle.addEventListener('click', () => {
                body.classList.toggle('dark-mode');

                // Simpan preferensi ke local storage
                if (body.classList.contains('dark-mode')) {
                    localStorage.setItem('theme', 'dark');
                } else {
                    localStorage.setItem('theme', 'light');
                }
            });
        });