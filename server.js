const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Εξυπηρέτηση στατικών αρχείων από τον φάκελο "public"
app.use(express.static(path.join(__dirname, 'public')));

// Ρίζα της εφαρμογής
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Εκκίνηση του server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});