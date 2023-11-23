type MessageType = {
  created_at: number;
  user_id: string;
  user_name: string;
  user_surname: string;
  you: boolean;
  message: string;
};

type UsersType = {
  id: string;
  name: string;
  surname: string;
  avatar: string;
};

export type ResponseChatType = {
  response: ChatType[];
};

export type ChatType = {
  id: string;
  created_at: number;
  title: string;
  avatar: string;
  private: boolean;
  last_message: MessageType;
  count_unread: number;
  users: UsersType[];
};

export type RequestChatDataType = {
  query?: string;
};
