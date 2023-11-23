import { useAppSelector } from '../hooks/reduxHooks';
import MessageSingle from './MessageSingle';
import SendMessage from './SendMessage';
import Loader from './Loader';

const MessageList = () => {
  const messages = useAppSelector((state) => state.message.messages);
  const status = useAppSelector((state) => state.message.status);

  return (
    <>
      {messages.length > 0 && (
        <div className="px-6 pt-6 shadow">
          {status === 'loading' ? (
            <Loader />
          ) : (
            <>
              <ul className="flex flex-col gap-3">
                {messages.map((message) => (
                  <MessageSingle key={message.id} msg={message} />
                ))}
              </ul>
              <SendMessage />
            </>
          )}
        </div>
      )}
    </>
  );
};

export default MessageList;
