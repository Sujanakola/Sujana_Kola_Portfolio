// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    once: true
});

// Project Data
const projects = [
    {
        title: "Budget Tracker",
        role: "Full Stack Developer",
        description: "Built a fully responsive web app to track income and expenses with category-wise filtering, CSV export, real-time balance updates, persistent localStorage integration, and Chart.js-based spending visualizations.",
        technologies: ["HTML", "CSS", "JavaScript", "Chart.js", "LocalStorage", "CSV Export", "Responsive Design"],
        image: "images/budget_tracker.jpg",
        demoLink: "https://sujanakola.github.io/Budget_Tracker/",
        githubLink: "https://github.com/Sujanakola/Budget_Tracker"
    },
    {
        title: "Seam Carver",
        role: "Developer",
        description: "An intelligent image resizing tool that uses dynamic programming to preserve important image content while resizing. Implements the seam carving algorithm to remove the least important pixels from images.",
        technologies: ["Java", "Dynamic Programming", "Image Processing", "Algorithms", "Data Structures"],
        image: "images/seam_carver.jpg",
        demoLink: "https://seam-carver-website.onrender.com/",
        githubLink: "https://github.com/Sujanakola/Seam_Carver"
    },
    {
        title: "Thyroid Classification System",
        role: "Developer & ML Engineer",
        description: "An intelligent system that uses machine learning to classify thyroid conditions, integrated with a web interface for easy access and diagnosis support. Implemented multiple ML algorithms and achieved 95% accuracy in thyroid condition classification.",
        technologies: ["Python", "Machine Learning", "Web Integration", "Flask", "scikit-learn", "Pandas", "NumPy"],
        image: "images/thyroid_classification.jpg",
        demoLink: "https://thyroid-disease-classification.onrender.com/",
        githubLink: "https://github.com/Sujanakola/Thyroid_Disease_Classification"
    },
    {
        title: "Spotify Clone",
        role: "Frontend Developer",
        description: "A responsive Spotify clone featuring a custom audio player, playlist management, and seamless user experience. Includes features like music visualization, search functionality, and responsive design for all devices.",
        technologies: ["HTML", "CSS", "JavaScript", "Web Audio API", "Responsive Design", "Local Storage"],
        image: "images/spotify_clone.jpg",
        demoLink: "https://sujanakola.github.io/TheSpotifyClone/",
        githubLink: "https://github.com/Sujanakola/TheSpotifyClone"
    },
    {
        title: "Jurident App Design",
        role: "UI/UX Designer",
        description: "Complete UI/UX design for a legal tech application, including user research, wireframing, and high-fidelity prototypes. Conducted user interviews and created comprehensive design system.",
        technologies: ["Figma", "UI/UX", "Prototyping", "User Research", "Design Systems", "Wireframing"],
        image: "images/uiux.jpg",
        demoLink: "http://figma.com/design/tfGdIM77fBFFA4hy1YgPLm/Jurident-Landing-Page?node-id=635-5538&p=f"
    },
    {
        title: "Expense Tracker",
        role: "Full Stack Developer",
        description: "A comprehensive expense tracking web application with group expense management, participant splitting, PDF export functionality, and interactive charts. Features include custom split options, expense categorization, and real-time balance calculations.",
        technologies: ["HTML", "CSS", "JavaScript", "PDF Export", "Charts", "LocalStorage", "Responsive Design"],
        image: "images/expense_tracker.jpg",
        demoLink: "https://sujanakola.github.io/Expense_Tracker/",
        githubLink: "https://github.com/Sujanakola/Expense_Tracker"
    },
    {
        title: "Portfolio Website",
        role: "Full Stack Developer",
        description: "A modern, responsive portfolio website showcasing projects and skills. Features smooth animations, contact form, and optimized performance for all devices.",
        technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        image: "images/portfolio.jpg",
        demoLink: "https://sujanakola.github.io/Sujana_Kola_Portfolio/",
        githubLink: "https://github.com/Sujanakola/Sujana_Kola_Portfolio"
    }
];

// Experience Data
const experiences = [
    {
        title: "Student Technical Intern",
        company: "NXP Semiconductors",
        period: "Aug 2024 – June 2025",
        location: "Bangalore",
        description: [
            "At NXP, I worked as part of the UWB system validation team, where I developed automation solutions for over 20 functional test cases. These efforts led to a measurable reduction in manual QA efforts by ~30%. My work involved contributing to the enhancement of test frameworks, implementing protocol-level updates, and addressing change requests from firmware and product teams.",
            "A significant part of my internship focused on resolving calibration-related issues that directly affected system stability. I collaborated across hardware, software, and QA teams to identify root causes, validate fixes, and ensure smoother firmware rollouts. This role strengthened my problem-solving skills and gave me hands-on experience with CI/CD pipelines using Jenkins, device control via ADB, and scripting in Python and Shell."
        ],
        techStack: ["Python", "Jenkins", "Java", "Git", "ADB", "Linux Shell"]
    },
    {
        title: "Data Science Intern",
        company: "Future Skills Prime",
        period: "May 2023 – July 2023",
        location: "Remote",
        description: [
            "During this internship, I designed and deployed an end-to-end machine learning solution for thyroid disease prediction. Using Random Forest, I achieved 94% model accuracy, balancing both performance and interpretability. I handled every step of the ML pipeline — from exploratory data analysis and feature engineering to hyperparameter tuning and model evaluation.",
            "To make the solution accessible, I built a Flask-based API and a simple user interface that allowed healthcare professionals to use the prediction model with ease. I also worked on deploying the app using Render, ensuring uptime and responsiveness for demo purposes. This project gave me practical experience in deploying ML models in real-world scenarios."
        ],
        techStack: ["Python", "Flask", "Scikit-learn", "Pandas", "NumPy", "Render"]
    },
    {
        title: "UI/UX Design Intern",
        company: "Valsco Technology (Jurident)",
        period: "April 2023 – July 2023",
        location: "Vellore",
        description: [
            "As a UI/UX intern for Jurident, a legal-tech platform, I was responsible for designing user journeys that catered to both legal professionals and the general public. I created over 15 high-fidelity prototypes in Figma, focusing on responsive design, accessibility, and visual hierarchy.",
            "I collaborated closely with frontend developers and end-users to gather feedback and iterate on key features such as document upload, case management, and search functionality. This internship sharpened my design thinking approach and helped me understand how usability improvements translate into real-world adoption. The final design showed a 40% increase in user satisfaction scores."
        ],
        techStack: ["Figma", "Trello", "Photoshop", "UX Research", "Accessibility Design"]
    },
    {
        title: "Event Manager",
        company: "VinPreP at VinnovateIT",
        period: "June 2021 – July 2021",
        location: "Remote",
        description: [
            "Led the organization of VinPreP, a professional development initiative by VinnovateIT aimed at helping students prepare for campus placements. I managed logistics, coordinated with guest speakers, and developed content to cover topics like interview strategy, resume writing, and common technical questions.",
            "The event saw high participation and received positive feedback from attendees for its practical insights and engaging delivery. This experience taught me how to manage teams, plan under deadlines, and lead community-driven projects."
        ],
        techStack: ["Event Planning", "Communication", "Public Speaking", "Team Coordination"]
    }
];

// Populate Projects
function populateProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = ''; // Clear existing content

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-aos', 'fade-up');

        // Add a special class for Weather Dashboard image
        const isWeatherDashboard = project.title === 'Weather Dashboard';
        const imgClass = isWeatherDashboard ? 'weather-dashboard-img' : '';

        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" class="${imgClass}">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p class="role">${project.role}</p>
                <p class="description">${project.description}</p>
                <div class="tech-stack">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.githubLink ? `
                        <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i> Code
                        </a>
                    ` : ''}
                    ${project.demoLink ? `
                        <a href="${project.demoLink}" target="_blank" rel="noopener noreferrer">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                    ` : ''}
                </div>
            </div>
        `;

        projectsGrid.appendChild(projectCard);
    });
}

// Populate Experience
function populateExperience() {
    const grid = document.querySelector('.experience-grid');
    grid.innerHTML = '';

    experiences.forEach(exp => {
        const card = document.createElement('div');
        card.className = 'experience-card';
        card.setAttribute('data-aos', 'fade-up');

        card.innerHTML = `
            <h3>${exp.title}</h3>
            <div class="company">${exp.company}</div>
            <div class="meta">
                <span><i class="fas fa-map-marker-alt"></i> ${exp.location}</span>
                <span><i class="fas fa-calendar-alt"></i> ${exp.period}</span>
            </div>
            <ul class="description">
                ${exp.description.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <div class="tech-stack">
                ${exp.techStack.map(skill => `<span>${skill}</span>`).join('')}
            </div>
        `;
        grid.appendChild(card);
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to top (home) when clicking the Sujana Kola logo
const logo = document.querySelector('.navbar-logo');
if (logo) {
    logo.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Theme toggle logic
function setTheme(theme) {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
    // Update theme label
    const label = document.getElementById('theme-label');
    if (label) {
        label.textContent = theme === 'dark-theme' ? 'Dark Mode' : 'Light Mode';
    }
}

// Typewriter Role Switcher for Hero Section
const roles = ["Developer", "UI/UX Designer", "ML Enthusiast", "Creative Coder"];
const roleSpan = document.getElementById("dynamic-role");
let roleIndex = 0;
let charIndex = 0;
let typing = true;

function typeRole() {
    if (!roleSpan) return;
    if (typing) {
        if (charIndex < roles[roleIndex].length) {
            roleSpan.textContent += roles[roleIndex][charIndex];
            charIndex++;
            setTimeout(typeRole, 80);
        } else {
            typing = false;
            setTimeout(typeRole, 1200);
        }
    } else {
        if (charIndex > 0) {
            roleSpan.textContent = roles[roleIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeRole, 40);
        } else {
            typing = true;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeRole, 300);
        }
    }
}

if (roleSpan) {
    roleSpan.textContent = "";
    typeRole();
}

// Fun Fact Rotator in About Me
const funFacts = [
    "My favorite part of building a project is the 3AM moment when the bug finally disappears.",
    "I believe every great product starts with listening — to users, feedback, and even error messages.",
    "I genuinely enjoy debugging — it's like solving a mystery, but with semicolons."
];
const funFactSpan = document.getElementById("fun-fact-rotator");
let funFactIndex = 0;
function rotateFunFact() {
    if (!funFactSpan) return;
    funFactSpan.style.opacity = 0;
    setTimeout(() => {
        funFactIndex = (funFactIndex + 1) % funFacts.length;
        funFactSpan.textContent = funFacts[funFactIndex];
        funFactSpan.style.opacity = 1;
    }, 400);
}
if (funFactSpan) {
    funFactSpan.style.transition = "opacity 0.4s";
    setInterval(rotateFunFact, 3000);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateProjects();
    populateExperience();
    // Theme setup
    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme || 'light-theme');
    document.getElementById('theme-toggle').addEventListener('click', () => {
        const current = document.body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
        setTheme(current === 'dark-theme' ? 'light-theme' : 'dark-theme');
    });

    // Hamburger menu toggle
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarLinks = document.querySelector('.navbar-links');
    if (navbarToggle && navbarLinks) {
      navbarToggle.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
      });
    }

    // Custom success message for contact form
    const contactForm = document.getElementById('contact-form');
    const contactSuccess = document.getElementById('contact-success');
    if (contactForm && contactSuccess) {
        contactForm.addEventListener('submit', function (e) {
            // Let the form submit normally, but intercept the response
            e.preventDefault();
            const formData = new FormData(contactForm);
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            }).then(response => {
                if (response.ok) {
                    contactForm.style.display = 'none';
                    contactSuccess.style.display = 'block';
                    contactForm.reset();
                } else {
                    response.json().then(data => {
                        alert(data.error || 'Oops! There was a problem submitting your form.');
                    });
                }
            }).catch(() => {
                alert('Oops! There was a problem submitting your form.');
            });
        });
    }
}); 