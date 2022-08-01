import React from "react";
import { AiFillEye, AiOutlineMessage } from "react-icons/ai";
import Moment from "react-moment";
import { Link } from "react-router-dom";
const API_URL = process.env.REACT_APP_API_URL;

export const PostItem = ({ post }) => {
  if (!post) {
    return (
      <div className="text-xl text-center text-white py-10">Loading...</div>
    );
  }
  return (
    <Link to={`/${post._id}`}>
      <div className="flex flex-col basis-1/4 flex-grow">
        <div
          className={post.imgUrl ? "flex rouded-sm h-80" : "flex rounded-sm"}
        >
          {/* <div className="post-image">
            <img
              alt="avatar"
              src={`https://source.unsplash.com/150x150/?nature,${index}`}
            />
          </div> */}

          {post.imgUrl && (
            <img
              // src={`http://localhost:5000/${post.imgUrl}`}
              src={`${API_URL}/${post.imgUrl}`}
              alt="img"
              className="object-cover w-full"
            />
          )}
        </div>
        <div className="flex justify-between items-center pt-2">
          <div className="text-xs text-white opacity-50">{post.name}</div>
          <div className="text-xs text-white opacity-50">
            <Moment date={post.createdAt} format="HH:mm DD. MM. YYYY" />
          </div>
        </div>
        <div className="text-white text-xl">{post.title}</div>
        <p className="text-white opacity-60 text-xs pt-4 line-clamp-2">
          {post.text}
        </p>

        <div className="flex gap-3 items-center mt-2">
          <button className="flex items-center justify-center gap-2 text-xs text-white opacity-50">
            <AiFillEye /> <span>{post.views}</span>
          </button>
          <button className="flex items-center justify-center gap-2 text-xs text-white opacity-50">
            <AiOutlineMessage /> <span>{post.comments?.length || 0} </span>
          </button>
        </div>
      </div>
    </Link>
  );
};
