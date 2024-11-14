import React from "react";
import { FaShareAlt, FaStar, FaEye } from 'react-icons/fa';

const CategoryCard = ({ singleNews }) => {
    return (
        <div className="card  bg-base-100 shadow-xl m-4">
            <div className="flex items-center p-4">
                <img
                    src={singleNews.author.img}
                    alt="author"
                    className="w-10 h-10 rounded-full mr-3" 
                />
                <div>   
                    <h2 className="font-semibold text-gray-700">{singleNews.author.name}</h2>
                    <p className="text-sm text-gray-500">{new Date(singleNews.author.published_date).toLocaleDateString()}</p>
                </div>
                <button className="ml-auto text-gray-400">
                    <FaShareAlt />
                </button>
            </div>

            <img
                src={singleNews.image_url}
                alt="news"
                className="w-full h-48 object-cover"
            />

            <div className="card-body p-4">
                <h3 className="font-bold text-lg mb-2">{singleNews.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                    {singleNews.details}
                </p>
                <a href="#" className="text-blue-500 font-semibold">Read More</a>
            </div>

            <div className="card-footer flex items-center justify-between p-4 border-t">
                <div className="flex items-center">
                    <span className="text-yellow-500">
                        <FaStar />
                    </span>
                    <span className="ml-2 text-gray-700">{singleNews.rating.number}</span>
                </div>
                <div className="flex items-center">
                    <FaEye className="text-gray-500" />
                    <span className="ml-2 text-gray-700">{singleNews.total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;
