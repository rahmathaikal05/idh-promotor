// Function to show/hide package types
function showPackageType(type) {
    // Hide all package sections
    document.getElementById('bisnis-basic').style.display = 'none';
    document.getElementById('b2b').style.display = 'none';
    
    // Show selected package section
    document.getElementById(type).style.display = 'block';
    
    // Update button states
    const buttons = document.querySelectorAll('.type-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Reset filter when switching package types
    document.getElementById('speedFilter').value = 'all';
    filterPackages();
}

// Function to filter packages by speed
function filterPackages() {
    const selectedSpeed = document.getElementById('speedFilter').value;
    const allCards = document.querySelectorAll('.card');
    
    allCards.forEach(card => {
        const cardSpeed = card.getAttribute('data-speed');
        
        if (selectedSpeed === 'all' || cardSpeed === selectedSpeed) {
            card.style.display = 'block';
            // Add fade-in animation
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.transition = 'all 0.3s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        } else {
            card.style.display = 'none';
        }
    });
}

// Add smooth scrolling for better UX
document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Add hover effects to cards
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click animation to buttons
    const buttons = document.querySelectorAll('.type-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    // Add animation to WhatsApp button
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        whatsappBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    }
    
    // Add counter animation for prices
    const prices = document.querySelectorAll('.monthly-price');
    prices.forEach(price => {
        const text = price.textContent;
        const number = text.match(/[\d,]+/);
        if (number) {
            price.setAttribute('data-original', text);
        }
    });
});

// Add search functionality (bonus feature)
function addSearchFunctionality() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Cari paket...';
    searchInput.style.cssText = `
        padding: 10px 15px;
        border: 2px solid #2a5298;
        border-radius: 8px;
        font-size: 1rem;
        margin-left: 15px;
        width: 200px;
    `;
    
    const filterSection = document.querySelector('.filter-section');
    filterSection.appendChild(searchInput);
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const cards = document.querySelectorAll('.card');
        
        cards.forEach(card => {
            const cardText = card.textContent.toLowerCase();
            if (cardText.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Add comparison feature
function addComparisonFeature() {
    let selectedCards = [];
    
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const compareBtn = document.createElement('button');
        compareBtn.textContent = 'Bandingkan';
        compareBtn.style.cssText = `
            background: #2a5298;
            color: white;
            border: none;
            padding: 8px 15px;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
            transition: all 0.3s ease;
        `;
        
        compareBtn.addEventListener('click', function() {
            if (selectedCards.includes(card)) {
                selectedCards = selectedCards.filter(c => c !== card);
                this.textContent = 'Bandingkan';
                this.style.background = '#2a5298';
                card.style.border = '2px solid transparent';
            } else if (selectedCards.length < 3) {
                selectedCards.push(card);
                this.textContent = 'Terpilih';
                this.style.background = '#25D366';
                card.style.border = '2px solid #25D366';
            }
            
            updateComparisonView();
        });
        
        card.querySelector('.price-section').appendChild(compareBtn);
    });
}

function updateComparisonView() {
    // This would create a comparison modal/section
    // Implementation depends on specific requirements
}

// Initialize additional features when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Uncomment to add search functionality
    // addSearchFunctionality();
    
    // Uncomment to add comparison feature
    // addComparisonFeature();
});

// Add smooth transitions for all interactive elements
function addSmoothTransitions() {
    const style = document.createElement('style');
    style.textContent = `
        * {
            transition: all 0.3s ease;
        }
        
        .card:hover .speed {
            transform: scale(1.1);
        }
        
        .card:hover .monthly-price {
            color: #2a5298;
        }
        
        .filter-section:hover {
            transform: translateY(-2px);
        }
        
        .terms-section:hover,
        .contact-section:hover {
            transform: translateY(-2px);
        }
    `;
    document.head.appendChild(style);
}

// Call smooth transitions function
addSmoothTransitions();