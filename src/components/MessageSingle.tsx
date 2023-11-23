import { MessageType } from '../types/messageTypes';
import { formattedTime } from '../utils/formattedTime';
import TimeMessage from './TimeMessage';
import NewMessage from './NewMessage';
import { useAppSelector } from '../hooks/reduxHooks';
import { formattedDate } from '../utils/formattedDate';
import SystemMessage from './SystemMessage';
import Avatar from './Avatar';

type MessageSingleProps = {
  msg: MessageType;
};

const MessageSingle = ({ msg }: MessageSingleProps) => {
  const { message, user, created_at, is_new } = msg;
  const date = useAppSelector((state) => state.chat.date);

  return (
    <li className="flex flex-col gap-2">
      {date && <SystemMessage date={formattedDate(created_at)} />}
      {is_new && <NewMessage />}
      <div className={`flex  gap-2 ${user.you ? 'justify-end' : ''}`}>
        {!user.you && <Avatar src={user.avatar} alt={user.name} size="sm" />}
        <div
          className={`flex flex-col gap-1 max-w-[550px] px-3 py-2 rounded ${
            user.you ? 'bg-blue-dark' : 'bg-gray'
          }`}
        >
          {!user.you && <h4 className="font-bold">{user.name}</h4>}
          <p>{message}</p>
          <TimeMessage time={formattedTime(created_at)} my={user.you} />
        </div>
      </div>
    </li>
  );
};

export default MessageSingle;
