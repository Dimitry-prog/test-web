import { ActionReducerMapBuilder, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChatType } from '../../types/chatTypes';
import { getChats } from '../../api/chatApi';

type ChatSliceType = {
  chats: ChatType[];
  chatId: string;
  status: 'init' | 'loading' | 'success' | 'error';
  error: string | undefined;
  date: number;
};

const initialState: ChatSliceType = {
  chats: [],
  chatId: '',
  status: 'init',
  error: undefined,
  date: 0,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setDateWhenChatWasOpen: (state, action: PayloadAction<number>) => {
      state.date = action.payload;
    },
    setChatId: (state, action: PayloadAction<string>) => {
      state.chatId = action.payload;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<ChatSliceType>) => {
    builder
      .addCase(getChats.pending, (state) => {
        state.status = 'loading';
        state.error = undefined;
      })
      .addCase(getChats.fulfilled, (state, action) => {
        state.status = 'success';
        state.chats = action.payload.response;
      })
      .addCase(getChats.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload;
      });
  },
});

export const { reducer: chatReducer, actions: chatActions } = chatSlice;
