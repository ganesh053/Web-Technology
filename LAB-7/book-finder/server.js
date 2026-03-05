const express = require("express");
const path = require("path");

const app = express();
const PORT = 4000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/books", async (req, res) => {
    const query = req.query.q || "";
    const page = req.query.page || 1;

    const url = `https://openlibrary.org/search.json?q=${query}&page=${page}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const books = data.docs.slice(0, 10).map(book => ({
            title: book.title || "N/A",
            author: book.author_name ? book.author_name[0] : "Unknown",
            year: book.first_publish_year || "N/A",
            rating: Math.floor(Math.random() * 5) + 1
        }));

        res.json({ books });

    } catch (error) {
        res.status(500).json({ error: "Failed to fetch books" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});