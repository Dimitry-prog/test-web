import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, handleRequest } from './api';
import { GET_CHATS } from '../utils/constants';
import { RequestChatDataType, ResponseChatType } from '../types/chatTypes';

export const getChats = createAsyncThunk<
  ResponseChatType,
  RequestChatDataType,
  {
    rejectValue: string;
  }
>('chat/getChats', async ({ query = '' }, { rejectWithValue }) => {
  const request = api(GET_CHATS(query));
  return handleRequest(request, rejectWithValue);
});
