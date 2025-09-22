import Head from "next/head";
import Header from "../components/layout/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome | Next.js Project</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to My Next.js Project 🚀</h1>
        <p className="mt-4 text-lg text-gray-700">
          This project is built with Next.js, TypeScript, and Tailwind CSS.
        </p>
      </main>
    </>
  );
}
