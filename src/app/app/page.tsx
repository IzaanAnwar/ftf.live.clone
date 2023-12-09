'use client';
import Draggable from 'react-draggable';
import { ArrowRightIcon, ArrowUpIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Chat, {
  FemaleIcon,
  MaleIcon,
  UserIcon,
} from '@/components/chat-section';
export default function AppPage() {
  return (
    <main className=" h-screen bg-card pt-32">
      <h1>Chat page</h1>
      <div className="flex items-center justify-center ">
        <div className="flex max-w-fit items-center justify-between rounded-md border border-zinc-800 bg-zinc-900 px-8 py-8 shadow-2xl">
          <div className="flex items-center justify-center px-8">
            <span className="max-w-16 flex items-center justify-between rounded-md bg-card px-6 py-1 text-xs text-foreground ">
              <MaleIcon /> <h5 className="px-2">Male</h5>
            </span>
          </div>
          <span className="border py-8"></span>
          <div className="flex items-center justify-center px-8">
            <span className="max-w-16 flex items-center justify-between rounded-md bg-card px-6 py-1 text-xs text-foreground ">
              <FemaleIcon /> <h5 className="px-2">Female</h5>
            </span>
          </div>
          <span className="border   py-8"></span>
          <div className="flex items-center justify-center px-8">
            <span className="max-w-16 flex items-center justify-between rounded-md bg-card px-6 py-1 text-xs  text-foreground ">
              <UserIcon /> <h5 className="px-2">User</h5>
            </span>
          </div>
        </div>
      </div>
      <div className="mx-auto my-2 flex max-w-fit items-center justify-center shadow-2xl">
        <div className="m-1 rounded-md border border-zinc-800 bg-zinc-900 p-2">
          <Button
            size="lg"
            className="rounded-lg border px-20 py-6 hover:bg-secondary"
          >
            <Link href="#" className="px-2">
              All Genders
            </Link>
            <ArrowUpIcon />
          </Button>
        </div>
        <div className="m-1 rounded-md border border-zinc-800 bg-zinc-900 p-2">
          <Button size="lg" className="bg-card px-24 py-6  hover:bg-card">
            <Link href="/chat" className="px-2">
              START
            </Link>
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
      <Chat position="bottom-0 left-0" />
    </main>
  );
}
