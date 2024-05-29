import React, { useState } from "react";

const Input = ({
    label,
    inputchangeHandler,
    inputValue,
    type,
    addclass
}) => {

    return (
        <>
            <div className="flex flex-col mt-4 relative">
                <span className="mb-2">{label}</span>
                <input type={`${type? "text" : "password"}`} className={`bg-white 
                    outline-none
                    text-gray-900 
                    border border-gray-200
                    text-lg rounded-lg p-1
                    peer ${addclass}`} required />

                
            </div>
        </>
    );
}

export default Input;