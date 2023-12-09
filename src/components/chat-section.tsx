'use client';
import Draggable from 'react-draggable';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowRightIcon, ArrowUpIcon } from '@radix-ui/react-icons';
export default function Chat({}: {}) {
  return (
    <main className=" bg-card ">
      <GendeDetails />
      <Draggable>
        <div
          className={`fixed w-full cursor-move rounded-md  bg-background md:m-2 md:h-72 md:w-96 `}
        >
          <video src="#" className="h-full w-full object-cover"></video>
        </div>
      </Draggable>
      {/* <StartChatContainer /> */}
    </main>
  );
}

export const GendeDetails = () => {
  return (
    <>
      <div className="flex items-center justify-center ">
        <div className="flex w-screen items-center justify-between rounded-md border border-zinc-800 bg-zinc-900 shadow-2xl md:w-fit md:px-8 md:py-8">
          <div className="flex items-center justify-center px-8">
            <span className="max-w-8 md:max-w-16 flex items-center justify-between rounded-md bg-card px-6 py-1 text-xs text-foreground ">
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
    </>
  );
};

export const StartChatContainer = () => {
  return (
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
  );
};

export const MaleIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="12"
      width="12"
      viewBox="0 0 512 512"
    >
      <path
        fill="#dbdbdb"
        d="M376 0c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l33.4 33.4L370.3 96.4 345 71c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l25.4 25.4L307.8 159c-28.4-19.5-62.7-31-99.8-31c-97.2 0-176 78.8-176 176s78.8 176 176 176s176-78.8 176-176c0-37-11.4-71.4-31-99.8l28.6-28.6L407 201c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-25.4-25.4 22.1-22.1L471 153c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V24c0-13.3-10.7-24-24-24H376zm88 48h0v0l0 0zM96 304a112 112 0 1 1 224 0A112 112 0 1 1 96 304z"
      />
    </svg>
  );
};

export const FemaleIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="12"
      width="12"
      viewBox="0 0 384 512"
    >
      <path
        fill="#dbdbdb"
        d="M80 176a112 112 0 1 1 224 0A112 112 0 1 1 80 176zM224 349.1c81.9-15 144-86.8 144-173.1C368 78.8 289.2 0 192 0S16 78.8 16 176c0 86.3 62.1 158.1 144 173.1V384H128c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v32c0 17.7 14.3 32 32 32s32-14.3 32-32V448h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H224V349.1z"
      />
    </svg>
  );
};

export const UserIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      height="12"
      width="12"
    >
      <path
        fill-rule="evenodd"
        d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
        clip-rule="evenodd"
      />
    </svg>
  );
};
