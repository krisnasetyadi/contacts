import React from "react";

const Modal = ({ isOpen, onClose, children, title='', onSave, submitButton={} }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
      <div className="relative w-auto max-w-lg mx-auto my-6">
        <div className="relative bg-white w-full rounded-lg shadow-lg outline-none focus:outline-none">
          <div className="flex items-center justify-between p-5 border-b border-solid border-gray-300 rounded-t">
            <h3 className="text-lg font-semibold">{title}</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={onClose}
            >
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                X
              </span>
            </button>
          </div>
         
          <div className="relative p-6 flex-auto">{children}</div>
    
          <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
            <button
              className="background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 hover:bg-gray-100 rounded-md"
              type="button"
              onClick={onClose}
            >
              Close
            </button>
            <button
              className={`${submitButton?.class ? submitButton?.class : 'bg-green-500' } font-bold uppercase text-sm px-6 py-3 rounded shadow outline-none focus:outline-none mr-1 mb-1`}
              type="button"
              style={{ transition: "all .15s ease" }}
              onClick={onSave}
            >
              {submitButton?.text ? submitButton?.text  : 'Save'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
