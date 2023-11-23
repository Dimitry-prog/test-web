import ChatList from '../components/ChatList';
import Header from '../components/Header';
import MessageList from '../components/MessageList';

const ChatPage = () => {
  return (
    <div className="flex">
      <aside className="h-full">
        <ChatList />
      </aside>
      <div className="w-full flex flex-col">
        <Header />
        <MessageList />
      </div>
    </div>
  );
};

export default ChatPage;
