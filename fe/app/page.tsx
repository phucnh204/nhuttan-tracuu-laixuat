import Image from "next/image";
import HomePage from "./pages/HomePage/page";
import Header from "./components/Header/page";

export default function Home() {
  return (
    <div className=" min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      
      <HomePage />
    </div>
  );
}
