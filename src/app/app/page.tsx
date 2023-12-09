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
      <Chat />
    </main>
  );
}
