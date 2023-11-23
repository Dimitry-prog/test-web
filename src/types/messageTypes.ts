export type ResponseMessageType = {
  response: MessageType[];
};

export type MessageType = {
  id: string;
  created_at: number;
  user: UsersType;
  message: string;
  is_new: boolean;
};

type UsersType = {
  id: string;
  name: string;
  surname: string;
  avatar: string;
  you: boolean;
};

export type RequestMessageDataType = {
  chatId: string;
  query?: string;
};
