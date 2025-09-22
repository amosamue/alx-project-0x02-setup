// pages/about.tsx
import Button from "@/components/common/Button";

export default function About() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">About Page</h1>
      <div className="space-x-4">
        <Button size="small" shape="rounded-sm">Small Button</Button>
        <Button size="medium" shape="rounded-md">Medium Button</Button>
        <Button size="large" shape="rounded-full">Large Button</Button>
      </div>
    </div>
  );
}
