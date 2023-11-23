import { ChatType } from '../types/chatTypes';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { getMessages } from '../api/messageApi';
import { formattedTime } from '../utils/formattedTime';
import { chatActions } from '../store/slices/chatSlice';
import Avatar from './Avatar';

type ChatSingleProps = {
  chat: ChatType;
};

const ChatSingle = ({ chat }: ChatSingleProps) => {
  const { id, title, avatar, created_at, last_message } = chat;
  const dispatch = useAppDispatch();
  const chatId = useAppSelector((state) => state.chat.chatId);

  const handleGetMessages = (chatId: string) => {
    dispatch(getMessages({ chatId }));
    dispatch(chatActions.setDateWhenChatWasOpen(created_at));
    dispatch(chatActions.setChatId(chatId));
  };

  return (
    <li
      onClick={() => handleGetMessages(id)}
      className={`px-4 py-3 max-h-[72px] flex gap-4 cursor-pointer hover:bg-black-super-light transition-all duration-500 ${
        chatId === id ? 'bg-blue-light' : ''
      }`}
    >
      <Avatar src={avatar} alt={title} size="md" />
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <h3 className="font-bold line-clamp-1">{title}</h3>
          <p className="text-sm text-black-extra-light">{formattedTime(created_at)}</p>
        </div>
        <p className="text-black-extra-light line-clamp-1">{last_message.message}</p>
      </div>
    </li>
  );
};

export default ChatSingle;
