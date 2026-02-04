# Portfolio Website

A premium dark-themed portfolio website for UX/UI designers.

## Features

- **Dark elegant theme** with black background and gold accents
- **Premium typography** using Playfair Display and Outfit fonts
- **Responsive design** that works on all devices
- **Interactive project gallery** with modal popups
- **Smooth animations** and hover effects
- **Skills showcase** with tool icons
- **Work experience timeline**
- **Contact section** with phone and email

## Folder Structure

```
portfolio-website/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css       # All styles
│   ├── js/
│   │   └── script.js       # JavaScript functionality
│   └── images/             # Image assets folder
│       ├── profile-photo.jpg           # Your profile photo
│       ├── project-1-thumb.jpg         # Project 1 thumbnail
│       ├── project-1-detail-1.jpg      # Project 1 detail image 1
│       ├── project-1-detail-2.jpg      # Project 1 detail image 2
│       ├── project-2-thumb.jpg         # Project 2 thumbnail
│       ├── project-2-detail-1.jpg      # Project 2 detail image 1
│       ├── project-2-detail-2.jpg      # Project 2 detail image 2
│       ├── ... (and so on for all 6 projects)
│       └── resume.pdf                  # Your resume file
└── README.md               # This file
```

## Setup Instructions

### 1. Add Your Images

Place the following images in the `assets/images/` folder:

**Profile Photo:**
- `profile-photo.jpg` - Your professional photo (recommended: 400x400px or larger, square format)

**Project Thumbnails** (recommended: 700x500px):
- `project-1-thumb.jpg` - E-Commerce Platform thumbnail
- `project-2-thumb.jpg` - Mobile Banking App thumbnail
- `project-3-thumb.jpg` - Analytics Dashboard thumbnail
- `project-4-thumb.jpg` - Learning Platform thumbnail
- `project-5-thumb.jpg` - Food Delivery App thumbnail
- `project-6-thumb.jpg` - Health & Fitness Tracker thumbnail

**Project Detail Images** (recommended: 1600x1200px or larger):
For each project, add 2 detail images:
- `project-1-detail-1.jpg` and `project-1-detail-2.jpg`
- `project-2-detail-1.jpg` and `project-2-detail-2.jpg`
- And so on for all 6 projects...

**Resume:**
- `resume.pdf` - Your resume file

### 2. Customize Content

**Edit `index.html` to update:**

1. **Personal Information:**
   - Line 31-32: Update the logo/name
   - Line 49-55: Update hero section text and description
   - Line 284-295: Update phone number and email

2. **Work Experience:**
   - Lines 67-102: Update job titles, companies, and years

3. **Education:**
   - Lines 111-119: Update degree and graduation year

4. **Projects:**
   - Lines 185-265: Update project titles and descriptions
   - Or edit the `projects` array in `assets/js/script.js` (lines 4-86)

### 3. Add More Projects

To add more projects:

1. Add a new project card in `index.html` (around line 266):
```html
<div class="project-card" onclick="openModal(6)">
    <div class="project-thumbnail">
        <img src="assets/images/project-7-thumb.jpg" alt="Your Project">
    </div>
    <div class="project-info">
        <div class="project-title">Your Project Title</div>
        <div class="project-description">Your project description</div>
    </div>
</div>
```

2. Add project data in `assets/js/script.js`:
```javascript
{
    title: "Your Project Title",
    description: "Detailed description...",
    images: [
        "assets/images/project-7-detail-1.jpg",
        "assets/images/project-7-detail-2.jpg"
    ],
    links: [
        { text: "View Live Site", url: "your-url" },
        { text: "Case Study", url: "your-url" }
    ]
}
```

### 4. Customize Colors

To change the color scheme, edit the CSS variables in `assets/css/style.css` (lines 5-12):

```css
:root {
    --bg-primary: #0a0a0a;        /* Main background */
    --bg-secondary: #141414;       /* Secondary background */
    --accent-gold: #d4af37;        /* Gold accent color */
    /* ... change these to your preferred colors ... */
}
```

### 5. Deploy Your Website

**Option 1: GitHub Pages**
1. Create a GitHub repository
2. Upload all files
3. Go to Settings > Pages
4. Select main branch and save

**Option 2: Netlify**
1. Drag and drop the entire folder to netlify.com
2. Your site will be live instantly

**Option 3: Traditional Hosting**
1. Upload all files to your web hosting via FTP
2. Ensure index.html is in the root directory

## Customization Tips

- **Fonts**: Change fonts in the Google Fonts link (index.html line 9)
- **Icons**: Using Font Awesome 6.4.0 (included via CDN)
- **Animations**: Adjust animation speeds in style.css
- **Layout**: Modify grid columns and spacing in style.css

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (Playfair Display, Outfit)

## Contact

Update your contact information in the Contact section of index.html.

## License

This portfolio template is free to use for personal and commercial projects.

---

**Pro Tips:**
- Use high-quality images (optimized for web)
- Keep image file sizes under 500KB for fast loading
- Test on mobile devices before deploying
- Update meta tags for better SEO
- Add your own favicon.ico file
