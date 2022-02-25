import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";
import { getRecentPost, getSimilarPosts } from "../Services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPost, setRelatedPost] = useState([]);
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPost(result)
      );
    } else {
      getRecentPost().then((result) => setRelatedPost(result));
    }
  }, [slug]);
  console.log(relatedPost);
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPost.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              alt={post.title}
              height="60px"
              width="60px"
              unoptimized
              className="align-middle rounded-full"
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link href={`/post/${post.slug}`} className="text-md " key={index}>
              <p className="transition cursor-pointer duration-250 hover:text-pink-500">
                {post.title}
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
