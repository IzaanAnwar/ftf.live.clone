'use client';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useEffect, useState } from 'react';
interface IMessages {
  message: string;
  sender: string;
}
let MOCK_MESSAGES: IMessages[] = [
  {
    message: 'Hii',
    sender: 'Izaan',
  },
];
export default function ChatPage() {
  const [userMsg, setUsrMsg] = useState<string>('');
  const handleMessageSent = () => {
    if (!userMsg) return;
    MOCK_MESSAGES.push({
      sender: 'Izaan',
      message: userMsg,
    });
    setUsrMsg('');
  };
  useEffect(() => {});
  return (
    <main className="flex h-screen bg-card pt-20">
      <section className="hidden h-full w-1/5 rounded-md bg-primary px-2 pt-2 md:block">
        <ScrollArea className="h-[70vh] w-full rounded-md bg-card">
          {MOCK_MESSAGES.map((msg, index) => {
            return (
              <span className="my-2 flex items-end justify-end">
                <div className="flex w-fit rounded-full bg-accent px-4 py-1">
                  <p>{msg.message}</p>
                </div>
              </span>
            );
          })}
        </ScrollArea>

        <div className="grid w-full gap-2 py-2">
          <Textarea
            value={userMsg}
            placeholder="Type your message here."
            onChange={(e) => {
              e.preventDefault();
              setUsrMsg(e.target.value);
            }}
          />
          <Button
            onClick={handleMessageSent}
            size="sm"
            className="w-full bg-accent duration-200 hover:bg-blue-400"
          >
            Send message
          </Button>
        </div>
      </section>
      <section className="h-full w-full   md:flex md:items-center md:justify-center md:px-4">
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
