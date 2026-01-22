Here's how to run the portfolio website locally after downloading:

## 📦 Running the Portfolio Locally

### Prerequisites
Make sure you have installed:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **Yarn** package manager - Install with: `npm install -g yarn`

### Steps to Run

**1. Navigate to the frontend folder:**
```bash
cd frontend
```

**2. Install dependencies:**
```bash
yarn install
```

**3. Start the development server:**
```bash
yarn start
```

**4. Open in browser:**
The app will automatically open at `http://localhost:3000`

---

### 📝 To Update Your Personal Info

Edit the file `frontend/src/data/mock.js` with your real information:
- Name, title, summary
- Profile photo URL
- Work experience
- Skills
- Projects
- Education
- Social links (LinkedIn, GitHub, Instagram, WhatsApp, Email)

---

### 🚀 To Build for Production

```bash
yarn build
```

This creates an optimized `build` folder you can deploy to any hosting service (Vercel, Netlify, GitHub Pages, etc.)

---

Would you like me to proceed with **backend integration** for the contact form, or do you have any other changes to the design?