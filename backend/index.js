import express from 'express';
import path from 'path';
import url from 'url';

const app = express();

// Use import.meta.url to get the directory name
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../KWEB/first.html'));
});

app.get('/donor', (req, res) => {
    res.sendFile(path.join(__dirname, '../KWEB/donor.html'));
});

app.get('/donorreq', (req, res) => {
    res.sendFile(path.join(__dirname, '../KWEB/req.html'));
});
app.get('/viewreq', (req, res) => {
    res.sendFile(path.join(__dirname, '../KWEB/viewreq.html'));
});

app.get('/contacts', (req, res) => {
    res.sendFile(path.join(__dirname, '../KWEB/contact.html'));
});
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
