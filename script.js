// =========================================
// SAFETY SYSTEM SCRIPT (FINAL CLEAN VERSION)
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // CACHE ELEMENTS
    // ===============================
    const sections = document.querySelectorAll(".content-section");
    const links = document.querySelectorAll(".sidebar a");

    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const routeDisplay = document.getElementById("route-display");


    // ===============================
    // SHOW SECTION
    // ===============================
    window.showSection = function (event, sectionId) {
        if (event) event.preventDefault();

        // hide all sections
        sections.forEach(sec => {
            sec.style.display = "none";
        });

        // show selected section
        const target = document.getElementById(sectionId);
        if (target) target.style.display = "block";

        // remove active class
        links.forEach(link => link.classList.remove("active"));

        // set active link
        if (event && event.currentTarget) {
            event.currentTarget.classList.add("active");
        }
    };


// ===============================
// ROUTE DATA
// ===============================
const routes = {
    earthquake: {
        title: "Earthquake Safety",
        text: `
            <p>
            Drop, Cover, and Hold. Stay away from glass and heavy objects.
            Evacuate after shaking stops.
            </p>

            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdS62TDt5VqHbFtOoym-S_cvmaETRI6y9oLPBOVfNglycg0wQ/viewform"
            target="_blank"
            class="excel-link">
            📝 Earthquake Emergency Form
            </a>
        `
    },

    volcano: {
        title: "Volcano Safety",
        text: `
            <p>
            Follow evacuation orders immediately. Wear masks and avoid low-lying areas.
            </p>

            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfcsy5925Ucx1F2e31kZXzbdEReOIYhhp0dQj6bkezsSSt15Q/viewform"
            target="_blank"
            class="excel-link">
            📝 Volcano Emergency Form
            </a>
        `
    },

    landslide: {
        title: "Landslide Safety",
        text: `
            <p>
            Avoid steep slopes during heavy rain and evacuate immediately when warning signs appear.
            </p>

            <a href="https://docs.google.com/forms/d/e/1FAIpQLSensLqAilHhruh2-ETrCpWv-CyT11spfIZrzeJqrgw9NIERzg/viewform?usp=send_form"
            target="_blank"
            class="excel-link">
            📝 Landslide Emergency Form
            </a>
        `
    },

    stormsurge: {
        title: "Storm Surge Safety",
        text: `
            <p>
            Evacuate coastal areas immediately during typhoon warnings
            and move to elevated locations.
            </p>

            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_QfhQOQ1CPOQFjmnBML0d0n0lnoLPOtZ4MXbia4MSeY6AZA/viewform"
            target="_blank"
            class="excel-link">
            📝 Storm Surge Emergency Form
            </a>
        `
    },

    tsunami: {
        title: "Tsunami Preparedness",
        text: `
            <p>
            After a strong earthquake, immediately move to higher ground away from shorelines.
            </p>

            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfmtlPoCoNXBuC7sUvXVAMH7lcvqAdbk6QwtTq0yK-dXnOJ0A/viewform"
            target="_blank"
            class="excel-link">
            📝 Tsunami Emergency Form
            </a>
        `
    },

    dengue: {
        title: "Dengue Prevention",
        text: `
            <p>
            Remove stagnant water and protect yourself from mosquito bites.
            </p>

            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeb4yuf1TfWdGjkWOW_u1gdO5yA7-MJqvbLVC7DYDVhZl64Ow/viewform"
            target="_blank"
            class="excel-link">
            📝 Dengue Monitoring Form
            </a>
        `
    },

    heat: {
        title: "Severe Heat Safety",
        text: `
            <p>
            Stay hydrated, avoid direct sunlight, and rest in cool areas when possible.
            </p>

            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd-irrofsPBgdFq7hEoDA2THkbTsGePdkB5KzKwOZYWoj5m_w/viewform?usp=send_form"
            target="_blank"
            class="excel-link">
            📝 Heat Emergency Form
            </a>
        `
    },

    "5s": {
        title: "5S Workplace Safety",
        text: `
            <p>
            Sort, Set in Order, Shine, Standardize, and Sustain a safe workplace.
            </p>

            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc8TrxrYbjdS8EnGdFso382EyBS8LgktDrUNPWpGIa8Msi70w/viewform"
            target="_blank"
            class="excel-link">
            📝 5S Inspection Form
            </a>
        `
    },

    electrical: {
        title: "Electrical Safety",
        text: `
            <p>
            Avoid overloaded outlets and report damaged wiring immediately.
            </p>

            <a href="https://docs.google.com/forms/d/e/1FAIpQLSf3l9kw3xGDt8VjP_VHSTmyG9-Gsvouy7bAISHwZ_17apRJOQ/viewform"
            target="_blank"
            class="excel-link">
            📝 Electrical Safety Form
            </a>
        `
    },

    motorcycle: {
        title: "Motorcycle Safety",
        text: `
            <p>
            Always wear helmets and follow traffic rules to reduce accidents.
            </p>

            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdq_7Bsd1FOXpGoTTfeAO5Ss0274vxpeAom8r2-_NdiE3mRKw/viewform"
            target="_blank"
            class="excel-link">
            📝 Motorcycle Safety Form
            </a>
        `
    },

    fire: {
        title: "Fire Safety",
        text: `
            <p>
            Stay calm during fire incidents. Use fire exits, avoid elevators,
            and call emergency responders.
            </p>

        
        `
    },

    flood: {
        title: "Flood Safety",
        text: `
            <p>
            Move to higher ground immediately and avoid walking through flood waters.
            </p>

          
        `
    },

    typhoon: {
        title: "Typhoon Preparedness",
        text: `
            <p>
            Prepare emergency kits, monitor weather updates,
            and secure important belongings.
            </p>

        
        `
    },

    pandemic: {
        title: "Pandemic Safety",
        text: `
            <p>
            Practice proper hygiene, wear protective equipment,
            and maintain physical distancing.
            </p>

        
        `
    }
};


    // ===============================
    // SHOW ROUTE
    // ===============================
    window.showRoute = function (routeId) {
        if (!routeDisplay) return;

        const data = routes[routeId];

        routeDisplay.innerHTML = data
            ? `<h3>${data.title}</h3><p>${data.text}</p>`
            : `<h3>Select a Topic</h3><p>Click a button to view safety information.</p>`;
    };


    // ===============================
    // IMAGE MODAL
    // ===============================
    window.openModal = function (src) {
        if (!modal || !modalImg) return;

        modal.style.display = "flex";
        void modal.offsetWidth; // restart animation
        modal.classList.add("show");

        modalImg.src = src;
    };

    window.closeModal = function () {
        if (!modal || !modalImg) return;

        modal.classList.remove("show");

        setTimeout(() => {
            modal.style.display = "none";
            modalImg.src = "";
        }, 300);
    };


    // ===============================
    // MODAL EVENTS
    // ===============================
    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                window.closeModal();
            }
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            window.closeModal();
        }
    });

});


// =========================================
// IMAGE PREVIEW
// =========================================
window.previewImage = function(event){

    const preview = document.getElementById("preview");

    preview.src = URL.createObjectURL(event.target.files[0]);

    preview.style.display = "block";
};


