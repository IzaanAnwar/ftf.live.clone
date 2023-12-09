import {
  Chat,
  GendeDetails,
  StartChatContainer,
} from '@/components/chat-section';
export default function AppPage() {
  return (
    <main className=" h-screen bg-card pt-32">
      <GendeDetails />
      <StartChatContainer />
      <Chat />
    </main>
  );
}
