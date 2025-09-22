lucide.createIcons();

// --- Mobile Menu ---
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// --- Interactive AI Demo Logic ---
const cravingBtn = document.getElementById('craving-btn');
const cravingInput = document.getElementById('craving-input');
const aiResponseEl = document.getElementById('ai-response');

if (cravingBtn && cravingInput && aiResponseEl) {
    const aiResponses = {
        'butter chicken': "Great choice! For a healthier version, try a recipe using Greek yogurt instead of cream. It cuts calories by 30% and keeps the protein high. It's just as delicious!",
        'pizza': "Who doesn't love pizza? For a low-carb option, try a cauliflower crust. For a quicker fix, use a whole-wheat tortilla as a base. Load it up with veggies!",
        'samosa': "A classic! For that crispy, savory satisfaction without the deep-frying, try baked samosas or use an air fryer. You get all the flavour with a fraction of the oil.",
        'default': "That sounds tasty! A great way to make most dishes healthier is to add extra vegetables, choose lean protein, and bake or grill instead of frying. I can help find a specific recipe if you like!"
    };

    cravingBtn.addEventListener('click', () => {
        const craving = cravingInput.value.toLowerCase().trim();
        aiResponseEl.innerHTML = `<p class="animate-pulse">Aura is thinking...</p>`;
        
        setTimeout(() => {
            let response = aiResponses.default;
            if (craving) {
                for (const key in aiResponses) {
                    if (craving.includes(key)) {
                        response = aiResponses[key];
                        break;
                    }
                }
            }
            aiResponseEl.innerHTML = `<p>${response}</p>`;
        }, 1000);
    });
}

// --- Fade-in animation on scroll ---
const faders = document.querySelectorAll('.fade-in');
if (faders.length > 0) {
    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
}
