import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function About() {
  return (
    <>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">About Page</h1>
        <div className="space-x-2">
          <Button size="small" shape="rounded-sm">Small Button</Button>
          <Button size="medium" shape="rounded-md">Medium Button</Button>
          <Button size="large" shape="rounded-full">Large Button</Button>
        </div>
      </main>
    </>
  );
}
