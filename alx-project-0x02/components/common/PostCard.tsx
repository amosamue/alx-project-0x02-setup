// components/common/PostCard.tsx
import React from "react";
import { type PostProps } from "@/interfaces";

export default function PostCard({ title, body, userId }: PostProps) {
  return (
    <div className="border rounded-lg p-4 shadow bg-white">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">{body}</p>
      <span className="text-sm text-gray-500">User ID: {userId}</span>
    </div>
  );
}
