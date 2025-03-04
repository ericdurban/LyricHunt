// HINTS:
// 1. Import express and axios
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

// 2. Create an express app and set the port number.
const app = express();
const port= 3000;
const API_URL = "https://api.lyrics.ovh/v1";

// 3. Use the public folder for static files.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

// 4. When the user goes to the home page it should render the index.ejs file.
app.get("/", async (req, res) => {
    res.render("index.ejs", {
        lyrics: null, error: null});
    });

    app.post('/lyrics', async (req, res) => {
        const { artist, song } = req.body;  // Get artist and song from the form
    
        try {
            // Call the lyrics API
            const response = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`);
    
            // Render the result with lyrics
            res.render('index', { lyrics: response.data.lyrics, error: null });
        } catch (error) {
            // Handle error (if no lyrics found or other issues)
            res.render('index', { lyrics: null, error: "Lyrics not found. Please try again." });
        }
    });

    
    app.get("/reset", async (req, res) => {
        res.render("index.ejs", {
            lyrics: null,
            error: null
        });
    });


// 6. Listens on predefined port and starts the server.
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });