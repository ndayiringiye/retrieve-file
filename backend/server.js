const express = require('express');
const multer = require('multer');
const cors = require('cors');

const app = express();
app.use(cors()); 

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});

const upload = multer({ storage });

app.post('/api/upload', upload.single('file'), (req, res) => {
  res.json({ message: 'File uploaded successfully!' });
});

app.listen(4000, () => console.log('Server running on http://localhost:4000'));
