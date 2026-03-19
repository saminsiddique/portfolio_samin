# Beginner's Guide: Running, Customizing & Deploying Your Portfolio

## Step 1: Preview Your Site Locally

Run this command in the `Z:\portfolio_web` folder:

```bash
npm run dev
```

Then open your browser and go to **http://localhost:3000**. You'll see your portfolio live. The page auto-refreshes when you edit files.

Press `Ctrl+C` in the terminal to stop the server.

---

## Step 2: Customize Your Content

All the content you'll want to change lives in simple, clearly-named files. Open them in **VS Code** (or any text editor).

### 2a. Your Projects — `src/data/projects.ts`

Each project is a block like this:

```ts
{
  id: 1,
  title: "Go-Kart Chassis Design",        // <- change the name
  description: "Designed a lightweight...", // <- change the description
  image: "https://placehold.co/...",        // <- replace with your image (see Step 3)
  categories: ["CAD", "SolidWorks", "FEA"], // <- change tags
}
```

- To **add** a project: copy-paste an existing block, change the `id` to the next number, and fill in your info
- To **remove** a project: delete the entire `{ ... },` block
- If you add a new category tag, also add it to the `allCategories` array at the bottom of the file

### 2b. Your Skills — `src/data/skills.ts`

```ts
{ name: "SolidWorks", proficiency: 90, category: "Software" }
```

- Change `proficiency` (0-100) to reflect your skill level
- The `category` must be one of: `"Software"`, `"Analysis"`, or `"Programming"`
- Add/remove skills as needed

### 2c. Your Bio — `src/components/About.tsx`

- Edit the text paragraphs about yourself (lines 22-31)
- Update education info: school name, degree, graduation year (lines 34-38)

### 2d. Your Social Links — `src/components/Contact.tsx` and `src/components/Footer.tsx`

In **both files**, replace these placeholder values:

- `https://linkedin.com/in/` — add your LinkedIn username after the slash
- `https://github.com/` — add your GitHub username after the slash
- `your@email.com` — replace with your real email address

### 2e. Your Resume

- Save your resume as a PDF named `resume.pdf`
- Place it in the `public/` folder (so the path is `Z:\portfolio_web\public\resume.pdf`)
- It will be accessible at `http://localhost:3000/resume.pdf`

---

## Step 3: Add Your Own Images

### For project images:

1. Put your screenshots/renders in `public/images/` (e.g., `gokart.jpg`, `heatexchanger.png`)
2. In `src/data/projects.ts`, change the image URL:
   ```
   Before: image: "https://placehold.co/800x600/..."
   After:  image: "/images/gokart.jpg"
   ```

### For your profile photo:

1. Put your photo in `public/images/` (e.g., `profile.jpg`)
2. In `src/components/About.tsx`, change the image `src` (line 13):
   ```
   Before: src="https://placehold.co/400x400/..."
   After:  src="/images/profile.jpg"
   ```

**Note:** When you switch from placeholder URLs to local images, you can remove the `placehold.co` entry from `next.config.ts` since you won't need it anymore.

---

## Step 4: Set Up Contact Form (Free)

Right now the contact form posts to a placeholder URL. To make it work:

1. Go to **https://formspree.io** and sign up (free — 50 submissions/month)
2. Click **"New Form"** and give it a name like "Portfolio Contact"
3. Formspree gives you a form ID (looks like `xyzabcde`)
4. In `src/components/Contact.tsx` (line 14), replace:
   ```
   https://formspree.io/f/YOUR_FORM_ID
   ```
   with:
   ```
   https://formspree.io/f/xyzabcde
   ```
   (using your actual form ID)

Now when someone fills out the contact form, you'll get an email.

---

## Step 5: Deploy to the Internet (Free)

### 5a. Push code to GitHub

1. Go to **https://github.com** and sign up or log in
2. Click the **"+"** button at top-right and select **"New repository"**
3. Name it `portfolio` (or anything you like), keep it **Public**, click **Create**
4. Run these commands in your `Z:\portfolio_web` folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
   (Replace `YOUR_USERNAME` with your actual GitHub username)

### 5b. Deploy on Vercel

1. Go to **https://vercel.com** and sign up with your GitHub account (free)
2. Click **"Add New Project"**
3. Select your `portfolio` repository from the list
4. Click **"Deploy"** — Vercel auto-detects Next.js, no settings needed
5. Wait about 1 minute. Vercel gives you a live URL like `portfolio-abc123.vercel.app`
6. You can add a **custom domain** later in Vercel settings (optional)

### Future updates

After changing anything, just run:

```bash
git add .
git commit -m "Update projects"
git push
```

Vercel automatically rebuilds and deploys within about 1 minute.

---

## Free Services Summary

| Service | What it does | Free tier |
|---------|-------------|-----------|
| **Vercel** | Hosts your website | Unlimited for personal projects |
| **GitHub** | Stores your code | Unlimited public repos |
| **Formspree** | Contact form backend | 50 submissions/month |

---

## Verification Checklist

After running `npm run dev` and visiting http://localhost:3000, confirm:

- [ ] All sections render: Hero, About, Projects, Skills, Contact, Footer
- [ ] Nav links smooth-scroll to each section
- [ ] Filter pills in Projects section filter cards correctly
- [ ] Layout adapts when you resize the browser (mobile/tablet/desktop)
- [ ] After deploying, your Vercel URL shows the same site
