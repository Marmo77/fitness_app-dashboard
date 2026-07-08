"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [numb, setNumb] = useState<number>(0)



  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <h1 className="text-4xl font-bold">Fitness App Dashboard</h1>
        <Button onClick={() => setNumb((prev) => prev + 1)}>Click me</Button>
        <span>{numb}</span>
        <div className="flex py-24 justify-center">

          <Link href={"sign-in"} className="text-blue-500 underline">Zaloguj się</Link>
        </div>
      </main>
    </div>
  );
}
