import { useState, useContext } from "react";
import { useParams } from "react-router";

import Comment from "../molecules/Comment";
import { userDetailsContext } from "../context/UserDetailsProvider";
import { createComment } from "../helpers/commentsCRUD";

const CommentsList = ({ currArticleData, setCurrArticleData }) => {
	const [content, setContent] = useState("");
	const [userDetails] = useContext(userDetailsContext);
	const { articleID } = useParams();

	const onHandleCommentCreate = async () => {
		const token = localStorage.getItem("authToken");
		if (!token) return;

		const commentObj = {
			content: content,
			authorID: userDetails,
			articleID: articleID,
		};

		const response = await createComment(commentObj, token);
		const newComment = response.rows[0];

		const newCommentsObj = JSON.parse(JSON.stringify(currArticleData));
		newCommentsObj.comments.push(newComment);

		setCurrArticleData(newCommentsObj);
	};

	const commentsList = currArticleData.comments?.map((comment, idx) => {
		return comment.commentContent ? (
			<Comment
				key={comment.commentID}
				comment={comment}
				currArticleData={currArticleData}
				setCurrArticleData={setCurrArticleData}
			/>
		) : null;
	});

	return (
		<div>
			<section className="flex flex-col pb-10 w-full h-full min-h-full">
				<p className="font-logo font-semibold text-gray-200 border-b border-gray-500 px-3 py-1 mt-7 mb-7 w-full">
					Start a Discussion
				</p>
				<textarea
					placeholder="Add a comment"
					value={content}
					onChange={(e) => setContent(e.target.value)}
					className="bg-gray-200 text-sm text-gray-900 flex-grow-0 flex-shrink-0 border-solid border border-gray-300 p-2 w-full h-24 outline-none resize-none focus:ring-2 focus:ring-blue-500 lg:text-lg h-36"
				/>
				<button
					className="bg-indigo-600 mb-8 py-2 w-full lg:py-4 lg:mb-16"
					onClick={onHandleCommentCreate}
				>
					Comment
				</button>
				<div>{commentsList}</div>
			</section>
		</div>
	);
};

export default CommentsList;
