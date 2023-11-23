import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, handleRequest } from './api';
import { RequestMessageDataType, ResponseMessageType } from '../types/messageTypes';
import { GET_MESSAGE_BY_CHAT_ID } from '../utils/constants';

export const getMessages = createAsyncThunk<
  ResponseMessageType,
  RequestMessageDataType,
  { rejectValue: string }
>('message/getMessages', async ({ chatId, query = '' }, { rejectWithValue }) => {
  const request = api(GET_MESSAGE_BY_CHAT_ID(chatId, query));
  return handleRequest(request, rejectWithValue);
});
