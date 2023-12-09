import Link from 'next/link';
import { Button } from './ui/button';

export default function HeroPage() {
  return (
    <>
      <section className="">
        <div className="max-h-fit w-screen bg-card py-20 text-center bg-dotted-spacing-8 bg-dotted-[#4286f443]">
          <h1 className="text-3xl font-bold">FAST AND</h1>
          <h1 className="text-6xl font-light">SECURE</h1>
          <h1 className="gradient-text text-8xl font-bold">LIVE</h1>
          <h1 className="font-ligh text-3xl">CHAT</h1>
        </div>
        <div className="flex items-center justify-center p-4">
          <Button asChild variant="destructive">
            <Link href="/app"> Chat</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
