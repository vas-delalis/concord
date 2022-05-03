import { useEffect } from "react";

export const Modal = ({ close, children }) => {
  // Prevent background scrolling while modal is open
  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'auto';
    }
  }, []);

  return (<div
    onClick={close}
    className='fixed flex z-50 items-center justify-center inset-0 bg-gray-900/60 p-4'
  >
    <div onClick={e => { e.stopPropagation() }} className='bg-white rounded p-4 shadow-xl w-full'>
      { children }
    </div>
  </div>)
}
