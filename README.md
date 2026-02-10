# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern gradient design with dark theme
- 📱 Fully responsive layout
- ⚡ Built with Next.js 14 and TypeScript
- 🎭 Smooth animations and transitions
- 🧩 Modular component architecture
- 📧 Contact form integration ready
- 🚀 Optimized for performance

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx           # Home page (imports HomeScreen)
│   └── globals.css        # Global styles
├── components/
│   ├── HomeScreen.tsx     # Main portfolio component
│   ├── Navigation.tsx     # Responsive navigation
│   ├── ProjectCard.tsx    # Individual project display
│   └── SkillCard.tsx      # Skill category display
├── lib/
│   └── constants.ts       # Personal info and data
└── public/               # Static assets
```

## Getting Started

1. Install dependencies:

```bash
npm install
# or
pnpm install
```

2. Update your personal information in `lib/constants.ts`

3. Run the development server:

```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Personal Information

Edit `lib/constants.ts` to update:

- Name and title
- Contact information
- Social media links
- Skills and technologies
- Project details

### Styling

- Colors and gradients can be customized in the component files
- Tailwind CSS classes are used throughout
- Global styles are in `app/globals.css`

### Components

- `HomeScreen.tsx` - Main portfolio layout
- `Navigation.tsx` - Responsive navigation with mobile menu
- `ProjectCard.tsx` - Reusable project display component
- `SkillCard.tsx` - Skill category component with color variants

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- Lucide React (icons)
- Framer Motion (animations)

## License

MIT License - feel free to use this template for your own portfolio!
