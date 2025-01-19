document.addEventListener("DOMContentLoaded", () => {
    const sections = {
        bio: "menu-bio",
        paintings: "menu-paintings",
        exhibitions: "menu-exhibitions",
        links: "menu-links",
        admin: "menu-admin"
    };

    const content = document.getElementById("content");

    function clearActiveMenus() {
        Object.values(sections).forEach(id => {
            document.getElementById(id).classList.add("hidden");
        });
    }

    function updateContent(title, text) {
        content.innerHTML = `<h2>${title}</h2><p>${text}</p>`;
    }

    Object.keys(sections).forEach(key => {
        document.getElementById(key).addEventListener("click", () => {
            clearActiveMenus();
            const menuId = sections[key];
            document.getElementById(menuId).classList.remove("hidden");

            switch (key) {
                case "bio":
                    updateContent("Βιογραφία", "Εδώ εμφανίζεται η βιογραφία του ζωγράφου.");
                    break;
                case "paintings":
                    updateContent("Πίνακες", "Εδώ εμφανίζονται οι κατηγορίες πινάκων.");
                    break;
                case "exhibitions":
                    updateContent("Εκθέσεις", "Εδώ εμφανίζονται οι εκθέσεις του ζωγράφου.");
                    break;
                case "links":
                    updateContent("Σύνδεσμοι", "Εδώ εμφανίζονται σύνδεσμοι και βιβλιογραφία.");
                    break;
                case "admin":
                    updateContent("Διαχείριση", "Εδώ εμφανίζονται επιλογές διαχείρισης.");
                    break;
                default:
                    updateContent("Καλώς ήρθατε!", "Παρακαλώ επιλέξτε μία ενότητα από το μενού.");
            }
        });
    });
});
