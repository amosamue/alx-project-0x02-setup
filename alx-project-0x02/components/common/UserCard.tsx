// components/common/UserCard.tsx
import React from "react";
import { type UserProps } from "@/interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="border rounded-lg p-4 shadow bg-white">
      <h2 className="text-lg font-bold mb-2">{name}</h2>
      <p className="text-gray-700">{email}</p>
      <p className="text-sm text-gray-500">
        {address.street}, {address.suite}, {address.city}
      </p>
    </div>
  );
}
