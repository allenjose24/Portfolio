# Allen Jose's Portfolio Website

Welcome to the GitHub repository for my personal portfolio website, hosted at [allenjose.netlify.app](https://allenjose.netlify.app). This site showcases my projects, skills, experiences, and social media presence as a developer and student.

## Overview

This portfolio website is a reflection of my journey as a developer, featuring my projects, certifications, and social media activity. It includes sections like "Projects," "Skills," "Experience," and "Social Footprints," where I share my latest LinkedIn and X posts.

### Features

- **Responsive Design**: The website is fully responsive, ensuring a seamless experience on both desktop and mobile devices.
- **Dark Theme**: Supports a dark theme toggle for better accessibility and user experience.
- **Social Footprints Section**: Displays my recent LinkedIn and X posts in a horizontally scrolling, continuous loop with pause-on-click functionality.
- **Custom Cursor**: A unique custom cursor enhances the interactivity of the site.
- **Projects Showcase**: Highlights my key projects with descriptions and links.
- **Skills & Experience**: Details my technical skills and professional experiences.

## Technologies Used

- **HTML5**: For the website structure.
- **CSS3**: For styling, including Flexbox for layout and animations for the scrolling "Social Footprints" section.
- **JavaScript**: For interactivity, such as the custom cursor, theme toggle, and dynamic content loading in the "Social Footprints" section.
- **Netlify**: For hosting and deployment.
- **GitHub**: For version control and repository hosting.
- **External APIs**: 
  - LinkedIn Embed API for embedding posts.
  - Twitter Widget API for rendering X posts.

## Project Structure

- `index.html`: The main HTML file containing the website structure.
- `styles.css`: The CSS file for styling the website, including the dark theme and "Social Footprints" animations.
- `main.js`: The JavaScript file for interactivity, including the custom cursor, theme toggle, and "Social Footprints" scrolling logic.
- `assets/`: Directory for images and other static assets used in the portfolio.

## Setup Instructions

To run this portfolio locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/allenjose24/Portfolio.git
   cd Portfolio
   ```

2. **Open the Website**:
   - Open `index.html` in a web browser to view the portfolio locally. Since this is a static site, no additional setup (e.g., server or dependencies) is required.

3. **Make Changes (Optional)**:
   - Modify `index.html`, `styles.css`, or `main.js` to update content, styles, or functionality.
   - Add new assets to the `assets/` directory as needed.

## Deployment

The portfolio is deployed on Netlify, connected to this GitHub repository for automatic deployments.

1. **Netlify Setup**:
   - The site is linked to the `allenjose24/Portfolio` repository on GitHub.
   - Netlify automatically builds and deploys the site whenever changes are pushed to the `main` branch.

2. **Deploy Locally Made Changes**:
   - After making changes, commit and push them to GitHub:
     ```bash
     git add .
     git commit -m "Update portfolio content"
     git push origin main
     ```
   - Netlify will automatically redeploy the site, and the updated version will be live at [allenjose.netlify.app](https://allenjose.netlify.app).

## Social Footprints Section

The "Social Footprints" section is a highlight of the portfolio, featuring my recent LinkedIn and X posts. Key features include:
- **Continuous Scrolling**: Posts scroll horizontally in an infinite loop, with posts reappearing on the right as they exit the left, ensuring no empty space.
- **Independent Heights**: Each post displays at its natural height (e.g., LinkedIn posts at `593px`, `567px`, `562px`, X posts at their default height).
- **Responsive Widths**: Posts have a minimum width of `300px` and a maximum of `504px`, scaling responsively within the container.
- **Pause on Interaction**: Users can pause the scrolling by clicking or tapping a post.

## Future Improvements

- Add more project details with live demo links.
- Implement a contact form for easier communication.
- Enhance accessibility with ARIA labels and keyboard navigation.
- Add animations for other sections to improve user engagement.

## Contact

Feel free to reach out to me via:
- **Email**: allenjose2110@gmail.com
- **LinkedIn**: linkedin.com/in/allen-jose/ 
- **𝕏**: x.com/allenjose24

Thank you for visiting my portfolio repository!
