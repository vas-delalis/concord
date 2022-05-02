export const Modal = ({ close, children }) => (
  <div
    onClick={close}
    className='flex absolute z-50 items-center justify-center w-full min-h-full bg-gray-900/60 p-4'
  >
    <div onClick={e => { e.stopPropagation() }} className='bg-white rounded p-4 shadow-xl w-full'>
      { children }
    </div>
  </div>
)
