import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { getMessages } from '../../api/messageApi';
import { MessageType } from '../../types/messageTypes';

type MessageSliceType = {
  messages: MessageType[];
  status: 'init' | 'loading' | 'success' | 'error';
  error: string | undefined;
};

const initialState: MessageSliceType = {
  messages: [],
  status: 'init',
  error: undefined,
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<MessageSliceType>) => {
    builder
      .addCase(getMessages.pending, (state) => {
        state.status = 'loading';
        state.error = undefined;
      })
      .addCase(getMessages.fulfilled, (state, action) => {
        state.status = 'success';
        state.messages = action.payload.response.reverse();
      })
      .addCase(getMessages.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload;
      });
  },
});

export const { reducer: messageReducer, actions: messageActions } = messageSlice;
