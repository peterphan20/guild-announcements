import React from "react";

const InputFieldLogin = ({ id, value, onChange, className = "" }) => {
	return (
		<div className="flex justify-center items-center pb-4 w-full">
			<input
				type="text"
				id={id}
				className={`${className} bg-gray-100 text-gray-900 text-sm rounded-lg outline-none py-1 px-2 w-full focus:ring-2 focus:ring-blue-500`}
				value={value}
				onChange={onChange}
				require="true"
				autoFocus
			/>
		</div>
	);
};

export default InputFieldLogin;
