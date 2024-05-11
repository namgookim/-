import { InputHTMLAttributes } from "react";

export default function AuthInput({ ...rests }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-2">
      <input className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-2 focus:ring-3 transition ring-neutral-200 focus:ring-blue-400 border-none placeholder:text-neutral-400" />
    </div>
  );
}
