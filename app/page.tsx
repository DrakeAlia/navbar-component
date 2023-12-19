import NavBar from "@/app/components/Nav/NavBar";
import Image from "next/image";
import MyNav from "./components/Nav/MyNav";

export default function Home() {
  return (
    // Main Container
    <main className="text-center items-center min-h-screen mx-auto">
      {/* Navbar Container */}
      <div className="flex flex-col gap-8">
        <NavBar />
        <MyNav />
      </div>
      {/* Hero Container */}
      <div className="flex flex-row items-center p-40">
        <div className="flex-row mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold sm:text-6xl">Test</h1>
          <p className="mt-6 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            inventore, voluptatum, voluptates, doloremque quos quas voluptatem
            quae quia doloribus officia consequuntur. Quisquam inventore,
            voluptatum, voluptates, doloremque quos quas voluptatem quae quia
            doloribus officia consequuntur.
          </p>
        </div>
      </div>
    </main>
  );
}
