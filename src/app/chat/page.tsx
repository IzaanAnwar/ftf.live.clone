import { Chat } from '@/components/chat-section';
export default function ChatPage() {
  return (
    <main className="h-screen bg-card">
      <section className="h-full w-full pt-20 md:flex md:items-center md:justify-center md:px-4">
        <div className="my-2 h-1/2 w-full cursor-move rounded-md  bg-background md:m-2 md:h-2/3 md:w-2/3">
          <video className="h-full w-full object-cover"></video>
        </div>
        <div className="my-2 h-1/2 w-full cursor-move rounded-md  bg-background md:m-2 md:h-2/3 md:w-2/3">
          <video className="h-full w-full object-cover"></video>
        </div>
      </section>
    </main>
  );
}
