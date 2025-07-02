// JavaScript untuk IndiHome Promo Website

// Data paket-paket
const packages = [
    // EzNet Packages
    {
        provider: 'eznet',
        name: 'EZNET WIRELESS',
        speed: 10,
        speedText: '10 Mbps',
        basePrice: 155000,
        ppn: 17050,
        adminFee: 5550,
        monthlyPrice: 177600,
        fup: '120 GB',
        installationPrice: 166500
    },
    {
        provider: 'eznet',
        name: 'EZNET',
        speed: 20,
        speedText: '20 Mbps',
        basePrice: 180000,
        ppn: 19800,
        adminFee: 5550,
        monthlyPrice: 205350,
        fup: '700 GB',
        installationPrice: 166500
    },

    // IndiHome Inet Only Packages
    {
        provider: 'indihome',
        name: 'INDIHOME INET ONLY',
        speed: 50,
        speedText: '50 Mbps',
        basePrice: 240000,
        ppn: 26400,
        adminFee: 5550,
        monthlyPrice: 271950,
        fup: '1800 GB',
        installationPrice: 166500
    },
    {
        provider: 'indihome',
        name: 'INDIHOME INET ONLY',
        speed: 75,
        speedText: '75 Mbps',
        basePrice: 270000,
        ppn: 29700,
        adminFee: 5550,
        monthlyPrice: 305250,
        fup: '1900 GB',
        installationPrice: 166500
    },
    {
        provider: 'indihome',
        name: 'INDIHOME INET ONLY',
        speed: 150,
        speedText: '150 Mbps',
        basePrice: 375000,
        ppn: 41250,
        adminFee: 5550,
        monthlyPrice: 421800,
        fup: '2500 GB',
        installationPrice: 166500
    },
    {
        provider: 'indihome',
        name: 'INDIHOME INET ONLY',
        speed: 200,
        speedText: '200 Mbps',
        basePrice: 515000,
        ppn: 56650,
        adminFee: 5550,
        monthlyPrice: 577200,
        fup: '3000 GB',
        installationPrice: 166500
    },

    // IndiHome One Dynamic Packages
    {
        provider: 'indihome',
        name: 'INDIHOME ONE DYNAMIC',
        speed: 50,
        speedText: '50 Mbps + 15GB',
        basePrice: 285000,
        ppn: 31350,
        adminFee: 5550,
        monthlyPrice: 321900,
        fup: '-',
        installationPrice: 0,
        installationText: 'GRATIS'
    },
    {
        provider: 'indihome',
        name: 'INDIHOME ONE DYNAMIC',
        speed: 75,
        speedText: '75 Mbps + 15GB',
        basePrice: 310000,
        ppn: 34100,
        adminFee: 5550,
        monthlyPrice: 349650,
        fup: '-',
        installationPrice: 0,
        installationText: 'GRATIS'
    },
    {
        provider: 'indihome',
        name: 'INDIHOME ONE DYNAMIC',
        speed: 150,
        speedText: '150 Mbps + 15GB',
        basePrice: 410000,
        ppn: 45100,
        adminFee: 5550,
        monthlyPrice: 460650,
        fup: '-',
        installationPrice: 0,
        installationText: 'GRATIS'
    },

    // IndiHome + TV Packages
    {
        provider: 'indihome',
        name: 'INET + IndihomeTV',
        speed: 50,
        speedText: '50 Mbps + TV',
        basePrice: 355000,
        ppn: 39050,
        adminFee: 5550,
        monthlyPrice: 399600,
        fup: '-',
        installationPrice: 166500
    },
    {
        provider: 'indihome',
        name: 'INET + IndihomeTV',
        speed: 75,
        speedText: '75 Mbps + TV',
        basePrice: 385000,
        ppn: 42350,
        adminFee: 5550,
        monthlyPrice: 432900,
        fup: '-',
        installationPrice: 166500
    },
    {
        provider: 'indihome',
        name: 'INET + IndihomeTV',
        speed: 150,
        speedText: '150 Mbps + TV',
        basePrice: 510000,
        ppn: 56100,
        adminFee: 5550,
        monthlyPrice: 571650,
        fup: '-',
        installationPrice: 166500
    },
    {
        provider: 'indihome',
        name: 'INET + IndihomeTV',
        speed: 200,
        speedText: '200 Mbps + TV',
        basePrice: 650000,
        ppn: 71500,
        adminFee: 5550,
        monthlyPrice: 727050,
        fup: '-',
        installationPrice: 166500
    }
];

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

// Create package card
function createPackageCard(pkg) {
    const whatsappMessage = `Halo saya tertarik dengan paket ${pkg.name} ${pkg.speedText} dengan harga ${formatCurrency(pkg.monthlyPrice)}/bulan. Mohon info lebih lanjut.`;
    const whatsappUrl = `https://wa.me/6282277256004?text=${encodeURIComponent(whatsappMessage)}`;

    const installationText = pkg.installationText || formatCurrency(pkg.installationPrice);

    return `
        <div class="package-card ${pkg.provider}" data-provider="${pkg.provider}" data-speed="${pkg.speed}">
            <div class="package-header">
                <h3 class="package-name">${pkg.name}</h3>
                <div class="package-speed">${pkg.speedText}</div>
                ${pkg.fup ? `<div class="package-fup">FUP: ${pkg.fup}</div>` : ''}
            </div>

            <div class="package-details">
                <div class="package-detail">
                    <span class="detail-label">Harga Paket</span>
                    <span class="detail-value">${formatCurrency(pkg.basePrice)}</span>
                </div>
                <div class="package-detail">
                    <span class="detail-label">PPN 11%</span>
                    <span class="detail-value">${formatCurrency(pkg.ppn)}</span>
                </div>
                <div class="package-detail">
                    <span class="detail-label">Admin Layanan</span>
                    <span class="detail-value">${formatCurrency(pkg.adminFee)}</span>
                </div>
                <div class="package-detail">
                    <span class="detail-label">Harga Pemasangan</span>
                    <span class="detail-value ${pkg.installationPrice === 0 ? 'price-highlight' : ''}">${installationText}</span>
                </div>
                <div class="package-detail" style="border-top: 2px solid #e0e0e0; margin-top: 15px; padding-top: 15px;">
                    <span class="detail-label" style="font-size: 1.1rem; font-weight: 600;">Harga Per Bulan</span>
                    <span class="detail-value price-highlight" style="font-size: 1.3rem;">${formatCurrency(pkg.monthlyPrice)}</span>
                </div>
            </div>

            <div class="package-cta">
                <a href="${whatsappUrl}" class="whatsapp-btn" target="_blank">
                    <i class="fab fa-whatsapp"></i>
                    Tanya Langsung
                </a>
            </div>
        </div>
    `;
}

// Render packages
function renderPackages(packagesToRender = packages) {
    const packagesGrid = document.getElementById('packagesGrid');
    packagesGrid.innerHTML = packagesToRender.map(pkg => createPackageCard(pkg)).join('');
}

// Filter packages by provider
function filterByProvider(provider) {
    const filteredPackages = provider === 'all' ? packages : packages.filter(pkg => pkg.provider === provider);
    renderPackages(filteredPackages);

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-provider="${provider}"]`)?.classList.add('active');
}

// Filter packages by speed
function filterBySpeed(speed) {
    const currentProvider = document.querySelector('.filter-btn.active')?.dataset.provider || 'all';
    let filteredPackages = currentProvider === 'all' ? packages : packages.filter(pkg => pkg.provider === currentProvider);

    if (speed !== 'all') {
        filteredPackages = filteredPackages.filter(pkg => pkg.speed == speed);
    }

    renderPackages(filteredPackages);
}

// Smooth scroll for navigation links
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    // ⬇️ GANTI DARI: renderPackages();
    filterByProvider('indihome'); // ⬅️ otomatis tampilkan IndiHome saat load

    // Event listener filter provider
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const provider = this.dataset.provider;
            filterByProvider(provider);
        });
    });

    // Event listener filter speed
    document.getElementById('speedFilter').addEventListener('change', function () {
        const speed = this.value;
        filterBySpeed(speed);
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            smoothScroll(target);
        });
    });

    // Animasi masuk untuk kartu
    const cards = document.querySelectorAll('.package-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Intersection Observer untuk animasi masuk
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll('.package-card, .terms-column, .contact-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// Scroll efek pada header
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 2px 20px rgba(227, 6, 19, 0.4)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.boxShadow = '0 2px 20px rgba(227, 6, 19, 0.3)';
        header.style.backdropFilter = 'none';
    }
});

// Efek ripple saat klik WhatsApp
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('whatsapp-btn') || e.target.closest('.whatsapp-btn')) {
        const btn = e.target.classList.contains('whatsapp-btn') ? e.target : e.target.closest('.whatsapp-btn');
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.left = '50%';
        ripple.style.top = '50%';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.marginLeft = '-10px';
        ripple.style.marginTop = '-10px';
        btn.style.position = 'relative';
        btn.style.overflow = 'hidden';
        btn.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    }
});

// Tambahkan keyframe ripple di style tag
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
