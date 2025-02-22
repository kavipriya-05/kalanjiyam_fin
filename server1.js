const express = require('express');
const multer = require('multer');
const { MongoClient } = require('mongodb');
const cors = require('cors')
const url = 'mongodb://localhost:27017';
const dbName = 'Kalanjiyam';

const app = express();

app.use(express.json());
app.use(cors());

const client = new MongoClient(url);

app.post('/blog', async (req, res) => {
  try {
    const blog = req.body;
    
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('blogs');
    
    const result = await collection.insertOne(blog);

    res.status(201).json({
      message: 'Blog post created successfully!',
      blogId: result.insertedId
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while creating the blog post.' });
  } finally {
    await client.close();
  }
});

app.get('/blogs', async (req, res) => {
  try {
    console.log("triggered")
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('blogs');
    
    const blogs = await collection.find({}).toArray();
    
    res.status(200).json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching blog posts.' });
  } finally {
    await client.close();
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

let blogPosts = [];

app.post("/blog", upload.single("image"), (req, res) => {
    let { title, domain, content } = req.body;
    let imageUrl = req.file ? `http://localhost:3000/uploads/${req.file.filename}` : null;

    let blog = { title, domain, content, imageUrl };
    blogPosts.unshift(blog);
    
    res.json(blog);
});

app.get("/blog", (req, res) => {
    res.json(blogPosts);
});
