# 🐱 Playwright Automation - HTTP Cats Site

This project uses [Playwright](https://playwright.dev/) to perform automated tests on the [HTTP Cats](https://http.cat) website, which displays fun and informative images for each HTTP status code.

---

## 📌 Objective

Automate the visual and functional validation of the HTTP Cats pages, ensuring that the correct images are displayed for the tested HTTP status codes.  
The project verifies both the proper loading of pages and essential elements such as titles and images, guaranteeing the site's visual and structural quality.

---

## 🧪 Tests performed

- Verification of the main page title (HTTP Cats)  
- Validation of the correct image for specific HTTP codes (e.g., 100, 200, 404)  
- Navigation tests between different HTTP codes via URL  
- Checking the HTTP response and correct rendering of the associated image  
- Loading tests for the homepage and specific pages of the site

---

## 🛠️ Technologies and tools used

- Playwright — test automation framework  
- Node.js — JavaScript runtime environment  
- Visual Studio Code — code editor  
- PowerShell (admin mode) — terminal for command execution  
- Git & GitHub — version control and code hosting

---

## 🚀 How to run the project

1. Clone this repository:

```bash
git clone https://github.com/QAMilenaTorres/Automation-in-Playwright-on-Website-HTTPCats
cd nomedorepo

2.     Install dependencies:
npm install

3. Run tests with Playwright:
npx playwright test

4. (Optional) To run specific tests or open Playwright’s interactive mode, check the official documentation.

📁 Project structure:
├── tests/              # Folder with Playwright test scripts
├── package.json        # Dependency manager and npm scripts
├── playwright.config.js # Playwright configuration
└── README.md           # Project documentation

📞 Contact
    If you have questions or want to chat about automation, find me on GitHub: [QA Milena Torres(https://github.com/QAMilenaTorres)]