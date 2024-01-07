import React, { ButtonHTMLAttributes, forwardRef, useState } from "react";

const SecretProjectButton = forwardRef(function (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, ref) {

  return (

    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      {...props}
      className={props.className + ' absolute z-50 flex flex-col justify-around items-center !cursor-not-allowed w-44 h-28 p-2 rounded-lg shadow-2xl bg-black transition-all ease-out duration-100'}
      type='button'>

      <h4 className="text-lg font-bold text-gray-700">SECRET PROJECT</h4>

      <h5 className="text-base font-medium text-red-600">⚠️ DON'T OPEN❗</h5>

      <h6 className="text-sm font-thin text-gray-600">☠️ - ☠️</h6>

    </button>

  )

})

export default SecretProjectButton;