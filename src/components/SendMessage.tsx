import attach from '../assets/img/attach.svg';
import send from '../assets/img/sendMsg.svg';

const SendMessage = () => {
  return (
    <div className="py-4 flex flex-col gap-1">
      <div
        className="min-h-[40px] max-w-[1000px] px-4 py-[10px] text-gray-extra-light border border-gray-extra-light rounded line-clamp-3 overflow-y-scroll"
        contentEditable
      >
        Type messsage
      </div>
      <div className="flex items-center justify-between">
        <button
          type="button"
          aria-label="attach"
          className="p-2 flex items-center justify-center rounded hover:bg-gray transition-all duration-500"
        >
          <img src={attach} alt="attach" className="w-6 h-6 object-cover" />
        </button>
        <button
          type="button"
          aria-label="send"
          className="p-2 flex items-center justify-center rounded hover:bg-gray transition-all duration-500"
        >
          <img src={send} alt="send" className="w-6 h-6 object-cover" />
        </button>
      </div>
    </div>
  );
};

export default SendMessage;
