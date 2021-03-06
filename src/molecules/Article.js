import React from "react";
import { Link } from "react-router-dom";

import Image from "../atoms/Image";

const Article = ({ article }) => {
	return (
		<Link
			to={`/articles/${article.article_id}`}
			className="relative col-span-6 md:col-span-1 w-full h-full mb-3"
		>
			<Image src={article.imageUrl} alt="article banner" />
			<h1 className="flex justify-start items-center bg-gray-800 text-base font-text py-7 px-5 h-24 max-h-24 min-h-24 break-words">
				{article.title}
			</h1>
		</Link>
	);
};

export default Article;
