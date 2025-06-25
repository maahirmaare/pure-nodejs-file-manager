# 📁 Pure Node.js File Explorer

A **fully functional file manager** built with **pure Node.js**, no frameworks like Express used. It allows users to browse folders, open files (PDF, images, videos), and sort/filter/search the contents.

---

## 🚀 Features

- 📂 Browse folders and files on your server
- 🔍 Search and filter by type (images, videos, docs, etc.)
- ↕️ Sort by name, size, or last modified date
- 🎥 Support for streaming large video/audio files
- 📄 Open files like PDF, images, HTML in-browser
- 📌 Built with core Node.js modules only (no Express)

---

## 📁 Project Structure

```
├── app.js                 # Entry point server (HTTP server)
├── lib/                   # Custom logic modules
│   ├── respond.js
│   ├── breadcrumb.js
│   ├── mainContent.js
│   ├── calculateSizeF.js
│   ├── calculateSizeD.js
│   └── getMimeType.js
├── static/                # Publicly served files
│   ├── project_files/
│   │   ├── index.html     # UI template
│   │   ├── style.css      # Custom styles
│   │   └── script.js      # Sorting, filtering, searching
│   └── ...
├── package.json
└── README.md
```

---

## 🖥️ Installation & Run

```bash
git clone https://github.com/maahirmaare/pure-nodejs-file-manager.git
cd pure-nodejs-file-manager
npm install
node app.js
```

Then open `http://localhost:3000` in your browser.

---


## 🙌 Acknowledgments

Built as part of a professional Node.js project from [Udemy Bootcamp Course](https://www.udemy.com/).

---

## 👤 Author

**Maahir Maare**  

---

## 🪄 License

This project is licensed under the MIT License.
