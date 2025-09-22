// pages/home.tsx
import React from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-4 p-6 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page</h1>

        <Card
          title="Getting Started"
          content="This is the first card. It contains introductory information."
        />

        <Card
          title="Next.js Features"
          content="This card highlights the main features of Next.js and Tailwind CSS."
        />

        <Card
          title="Reusable Components"
          content="You can reuse the Card component with different props easily."
        />
      </main>
    </>
  );
}
