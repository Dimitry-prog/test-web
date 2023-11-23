import { useAppDispatch } from './hooks/reduxHooks';
import { useEffect } from 'react';
import { getChats } from './api/chatApi';
import ChatPage from './pages/ChatPage';
import { useWindowSize } from './hooks/useWindowSize';

const App = () => {
  const dispatch = useAppDispatch();
  const size = useWindowSize();

  useEffect(() => {
    dispatch(getChats({}));
  }, []);

  return (
    <>
      {size > 700 ? (
        <ChatPage />
      ) : (
        <h1 className="h-screen grid place-content-center font-[600] text-lg text-center">
          ПРОСТИТЕ! НО ДЛЯ МОБИЛЬНЫХ ТЕЛЕФОНОВ У НАС ЕСТЬ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ
        </h1>
      )}
    </>
  );
};

export default App;
