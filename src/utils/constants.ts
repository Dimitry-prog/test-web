export const URLS = {
  LIST: 'chat.list',
  MESSAGES: 'chat.get',
};
export const BASE_URL = 'https://api.lenzaos.com';
export const GET_CHATS = (query?: string) => `/chat.get?${query}`;
export const GET_MESSAGE_BY_CHAT_ID = (chatId: string, query?: string) =>
  `/message.get?chat_id=${chatId}&${query}`;
