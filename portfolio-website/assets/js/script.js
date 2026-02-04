// ==========================================
// Project Data
// ==========================================
const projects = [
    {
        title: "E-Commerce Platform",
        description: "A comprehensive e-commerce solution designed to provide users with a seamless shopping experience. Features include advanced product filtering, wishlist functionality, secure payment integration, and a responsive design that works beautifully across all devices. The interface focuses on conversion optimization while maintaining an elegant, modern aesthetic.",
        images: [
            "assets/images/project-1-detail-1.jpg",
            "assets/images/project-1-detail-2.jpg"
        ],
        links: [
            { text: "View Live Site", url: "#" },
            { text: "Case Study", url: "#" }
        ]
    },
    {
        title: "Mobile Banking App",
        description: "A secure and intuitive mobile banking application that simplifies financial management. The app features biometric authentication, instant fund transfers, bill payments, and real-time transaction notifications. The design emphasizes security without compromising on user experience, with clear visual hierarchy and smooth animations.",
        images: [
            "assets/images/project-2-detail-1.jpg",
            "assets/images/project-2-detail-2.jpg"
        ],
        links: [
            { text: "View Prototype", url: "#" },
            { text: "Download", url: "#" }
        ]
    },
    {
        title: "Analytics Dashboard",
        description: "A powerful data visualization dashboard designed for business intelligence teams. Features interactive charts, customizable widgets, real-time data updates, and export capabilities. The interface uses a clean, professional design language that makes complex data easy to understand at a glance.",
        images: [
            "assets/images/project-3-detail-1.jpg",
            "assets/images/project-3-detail-2.jpg"
        ],
        links: [
            { text: "View Demo", url: "#" },
            { text: "Documentation", url: "#" }
        ]
    },
    {
        title: "Learning Platform",
        description: "An educational platform that makes learning engaging and accessible. Features include video lessons, interactive quizzes, progress tracking, and community forums. The design focuses on creating an distraction-free learning environment with clear navigation and personalized course recommendations.",
        images: [
            "assets/images/project-4-detail-1.jpg",
            "assets/images/project-4-detail-2.jpg"
        ],
        links: [
            { text: "Explore Platform", url: "#" },
            { text: "Sign Up", url: "#" }
        ]
    },
    {
        title: "Food Delivery App",
        description: "A modern food delivery application that connects users with their favorite restaurants. Features real-time order tracking, personalized recommendations, multiple payment options, and a rewards program. The interface is designed for speed and convenience, allowing users to complete orders in just a few taps.",
        images: [
            "assets/images/project-5-detail-1.jpg",
            "assets/images/project-5-detail-2.jpg"
        ],
        links: [
            { text: "View App", url: "#" },
            { text: "Order Now", url: "#" }
        ]
    },
    {
        title: "Health & Fitness Tracker",
        description: "A comprehensive health and fitness tracking application that helps users achieve their wellness goals. Features include workout planning, nutrition tracking, progress analytics, and social challenges. The design uses motivating visuals and gamification elements to keep users engaged on their fitness journey.",
        images: [
            "assets/images/project-6-detail-1.jpg",
            "assets/images/project-6-detail-2.jpg"
        ],
        links: [
            { text: "Start Free Trial", url: "#" },
            { text: "Learn More", url: "#" }
        ]
    }
];

// ==========================================
// Modal Functions
// ==========================================
function openModal(index) {
    const modal = document.getElementById('projectModal');
    const project = projects[index];

    // Set title and description
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalText').textContent = project.description;

    // Add images
    const imagesContainer = document.getElementById('modalImages');
    imagesContainer.innerHTML = '';
    project.images.forEach(imgSrc => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = project.title;
        img.className = 'modal-image';
        imagesContainer.appendChild(img);
    });

    // Add links
    const linksContainer = document.getElementById('modalLinks');
    linksContainer.innerHTML = '';
    project.links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.className = 'modal-link';
        a.innerHTML = `<i class="fas fa-external-link-alt"></i> ${link.text}`;
        linksContainer.appendChild(a);
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ==========================================
// Event Listeners
// ==========================================

// Close modal on background click
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('projectModal');
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    }
});

// Close modal on ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ==========================================
// Scroll Animation (Optional Enhancement)
// ==========================================
// Add fade-in animation for elements as they scroll into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll(
        '.experience-item, .skill-item, .project-card, .contact-item'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
