// import React from 'react'

// const Alert = ({ type, text }) => {
//   return (
//     <div className='absolute top-10 left-0 right-0 flex justify-center items-center'>
//       <div className={`${type === 'danger' ? 'bg-red-800' : 'bg-blue-800'} p-2 text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex`} role='alert'>
//         <p className={`${type === 'danger' ? 'bg-red-500' : 'bg-blue-800'} flex rounded-full uppercase px-2 py-1 font-semibold mr-3 text-xs`}>{type === 'danger' ? 'Failed' : 'Success'} </p>
//         <p className='mr-2 text-left'>{text}</p>
//       </div>
//     </div>
//   )
// }

// export default Alert


import React from 'react';

const Alert = ({ type, text }) => {
  return (
    <div
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-fit max-w-md px-6 py-4 rounded-lg shadow-lg
      text-white font-medium
      transition-all duration-300"
      style={{
        backgroundImage:
          type === 'danger'
            ? 'linear-gradient(to right, #f87171, #b91c1c)'
            : 'linear-gradient(to right, #38bdf8, #1e3a8a)',
      }}
    >
      <div className="flex items-center gap-3">
        <span
          className={`uppercase text-xs font-bold px-2 py-1 rounded border ${
            type === 'danger' ? 'border-red-200' : 'border-blue-200'
          }`}
        >
          {type === 'danger' ? 'Failed' : 'Success'}
        </span>
        <span className="text-sm">{text}</span>
      </div>
    </div>
  );
};

export default Alert;
