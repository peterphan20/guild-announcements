import React from "react";

const Footer = () => {
	return (
		<footer className="flex flex-col justify-center items-center bg-gray-800 text-gray-200 pt-8 pb-4">
			<h1 className="font-logo font-bold text-3xl pb-3">Eldridge</h1>
			<div className="flex justify-center items-center font-text gap-2.5 pb-3">
				<p className="text-md">Github Code</p>
				<a
					href="https://github.com/peterphan20/guild-announcement-page.git"
					target="_blank"
					rel="noreferrer"
					label="Click here to open the Guild Announcement Page's github in a new tab."
				>
					<i className="fab fa-github-square text-indigo-600 text-2xl"></i>
				</a>
			</div>
			<p className="font-text text-sm">©️ 2021 Eldridge. All Rights Reserved</p>
		</footer>
	);
};

export default Footer;
