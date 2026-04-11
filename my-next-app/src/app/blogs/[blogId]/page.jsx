
    const blogs = [
  {
    id: 1,
    title: "Getting Started with Next.js 15",
    excerpt: "Learn how to set up your first Next.js 15 project with the App Router, server components, and the latest features.",
    author: "Sarah Johnson",
    date: "2025-03-12",
    category: "Next.js",
    image: "https://picsum.photos/seed/nextjs/800/400",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS v4",
    excerpt: "Explore the new features in Tailwind CSS v4 including the new @import syntax, CSS-first configuration, and improved performance.",
    author: "Alex Chen",
    date: "2025-03-18",
    category: "CSS",
    image: "https://picsum.photos/seed/tailwind/800/400",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "DaisyUI v5: What's New",
    excerpt: "A deep dive into DaisyUI v5's new components, updated theming system, and how it integrates with Tailwind v4.",
    author: "Maria Lopez",
    date: "2025-03-25",
    category: "UI",
    image: "https://picsum.photos/seed/daisyui/800/400",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "React Server Components Explained",
    excerpt: "Understand the difference between Server and Client Components in React, when to use each, and common pitfalls to avoid.",
    author: "James Williams",
    date: "2025-04-01",
    category: "React",
    image: "https://picsum.photos/seed/react/800/400",
    readTime: "8 min read",
  },
  {
    id: 5,
    title: "Building REST APIs with Node.js",
    excerpt: "A step-by-step guide to building a production-ready REST API using Node.js, Express, and MongoDB.",
    author: "Priya Sharma",
    date: "2025-04-05",
    category: "Backend",
    image: "https://picsum.photos/seed/nodejs/800/400",
    readTime: "10 min read",
  },
  {
    id: 6,
    title: "TypeScript Tips for React Developers",
    excerpt: "Level up your TypeScript skills with practical tips, common patterns, and how to type your React components properly.",
    author: "Daniel Kim",
    date: "2025-04-08",
    category: "TypeScript",
    image: "https://picsum.photos/seed/typescript/800/400",
    readTime: "6 min read",
  },
  {
    id: 7,
    title: "PostgreSQL vs MongoDB in 2025",
    excerpt: "An honest comparison of PostgreSQL and MongoDB — performance, use cases, scalability, and which one to pick for your next project.",
    author: "Emma Wilson",
    date: "2025-04-10",
    category: "Database",
    image: "https://picsum.photos/seed/database/800/400",
    readTime: "9 min read",
  },
  {
    id: 8,
    title: "Authentication with NextAuth.js",
    excerpt: "Implement secure authentication in your Next.js app using NextAuth.js — covering OAuth, credentials, and JWT sessions.",
    author: "Carlos Rivera",
    date: "2025-04-12",
    category: "Security",
    image: "https://picsum.photos/seed/auth/800/400",
    readTime: "11 min read",
  },
  {
    id: 9,
    title: "Deploying Next.js on Vercel",
    excerpt: "Everything you need to know about deploying your Next.js app to Vercel — environment variables, domains, and CI/CD.",
    author: "Aisha Patel",
    date: "2025-04-15",
    category: "DevOps",
    image: "https://picsum.photos/seed/vercel/800/400",
    readTime: "5 min read",
  },
  {
    id: 10,
    title: "CSS Grid vs Flexbox: When to Use Which",
    excerpt: "A practical guide to understanding CSS Grid and Flexbox, with real-world examples to help you choose the right layout tool.",
    author: "Tom Baker",
    date: "2025-04-18",
    category: "CSS",
    image: "https://picsum.photos/seed/cssgrid/800/400",
    readTime: "7 min read",
  },
];

const BlogDetailPage = async({params}) => {
    const {blogId} = await params
    const blog = blogs.find(blog => blog.id ===  parseInt(blogId))

    console.log('show me params',blog)
    return (
    <div>
        {
            blog ? 
            <div className="max-w-3xl mx-auto px-4 py-10">
                <img src={blog.image} alt={blog.title} className="w-full rounded-2xl mb-6" />

                <div className="flex gap-3 mb-4">
                    <span className="badge badge-primary">{blog.category}</span>
                    <span className="badge badge-ghost">{blog.readTime}</span>
                </div>

                <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

                <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                    <span>By <span className="font-semibold text-base-content">{blog.author}</span></span>
                    <span>•</span>
                    <span>{blog.date}</span>
                </div>

                <p className="text-lg leading-relaxed text-base-content/80">{blog.excerpt}</p>
            </div>
            : 
            <div className="text-center py-20 text-2xl">Blog not found</div>
        }
    </div>
);
};

export default BlogDetailPage;