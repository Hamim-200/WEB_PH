import React from 'react';
import { FaBookmark } from "react-icons/fa6";

const Blog = ({ blog, handleBookMark, handleMarkAsRead }) => {
    return (
        <div className="p-4">
            <div className="card bg-base-100 w-[320px] shadow-md hover:shadow-xl transition-all duration-300">

                {/* Cover Image */}
                <figure className="h-56 overflow-hidden">
                    <img
                        src={blog.cover}
                        alt="poster about title"
                        className="w-full h-full object-cover"
                    />
                </figure>

                <div className="card-body flex flex-col justify-between">

                    {/* Top Content */}
                    <div className="space-y-3">

                        {/* Author Section */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <img
                                    className="w-12 h-12 rounded-full border"
                                    src={blog.author_img}
                                    alt={blog.author}
                                />
                                <h3 className="font-semibold text-sm">{blog.author}</h3>
                            </div>

                            <button
                                onClick={() => handleBookMark(blog)}
                                className="btn btn-ghost btn-sm text-primary"
                            >
                                <FaBookmark size={22} />
                            </button>
                        </div>

                        {/* Title */}
                        <h2 className="card-title text-lg leading-snug line-clamp-2">
                            {blog.title}
                        </h2>

                        {/* Description */}
                        <p className="text-sm text-gray-500 line-clamp-3">
                            A card component has a figure, a body part, and inside body there are title and actions parts
                        </p>

                        {/* Hashtags */}
                        <div className="flex flex-wrap gap-2">
                            {
                                blog.hashtags.map((hash) => (
                                    <span
                                        key={hash}
                                        className="badge badge-outline badge-sm"
                                    >
                                        #{hash}
                                    </span>
                                ))
                            }
                        </div>

                    </div>

                    {/* Bottom Actions */}
                    <div className="card-actions justify-between items-center pt-4">
                        <span className="text-sm font-medium text-gray-600">
                            ⏱ {blog.reading_time} min read
                        </span>

                        <button
                            onClick={() => handleMarkAsRead(blog.reading_time, blog.id)}
                            className="btn btn-primary btn-sm"
                        >
                            Mark as Read
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog;
