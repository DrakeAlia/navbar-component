import NavBar from '@/components/NavBar'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col justify-between">
      <NavBar />
      <div className="flex flex-col items-center justify-between p-60">
        <p>Test</p>
      </div>
    </main>
    </>
  );
}
