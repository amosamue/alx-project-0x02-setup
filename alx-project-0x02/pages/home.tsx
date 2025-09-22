// pages/home.tsx
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

type Post = {
  id: number;
  title: string;
  content: string;
};

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, title: "Getting Started", content: "This is the first card. It contains introductory information." },
    { id: 2, title: "Next.js Features", content: "This card highlights the main features of Next.js and Tailwind CSS." },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (post: { title: string; content: string }) => {
    const newPost: Post = { id: Date.now(), title: post.title, content: post.content };
    // Prepend so newest appears first
    setPosts((prev) => [newPost, ...prev]);
  };

  return (
    <>
      <Header />
      <main className="p-6 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            New Post
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((p) => (
            <Card key={p.id} title={p.title} content={p.content} />
          ))}
        </div>

        <PostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleAddPost} />
      </main>
    </>
  );
}
