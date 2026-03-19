export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  tags?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "getting-started-with-cad",
    title: "Getting Started with CAD as a Mechanical Engineering Student",
    date: "2026-03-20",
    summary:
      "My journey learning SolidWorks and how it changed the way I approach design problems in engineering.",
    content: `When I first opened SolidWorks in my second year, I was overwhelmed by the sheer number of tools and menus. Fast forward to today, and it's become one of the most essential tools in my workflow.

The key to learning CAD isn't memorising every button — it's understanding the design intent behind your sketches. Fully constrained sketches, proper use of reference planes, and thinking in terms of features rather than shapes will save you hours of rework down the line.

Here are a few tips that helped me get up to speed:

1. Start with simple parts and focus on sketch constraints before jumping into assemblies.
2. Use the FeatureManager design tree to understand how your model is built — it tells a story of your design decisions.
3. Don't fight the software. If something feels overly complicated, there's probably a simpler approach.
4. Practice with real projects. Class assignments are fine, but designing something you actually care about makes the learning stick.

CAD is more than a drafting tool — it's a way of thinking about how parts fit together, how they'll be manufactured, and how they'll perform under load. The earlier you build that intuition, the stronger your engineering instincts become.`,
    tags: ["CAD", "SolidWorks", "Engineering"],
  },
];
