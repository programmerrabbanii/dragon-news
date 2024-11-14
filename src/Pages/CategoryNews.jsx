import { useLoaderData } from "react-router-dom";
import CategoryCard from "../components/layoutComponents/CategoryCard";

const CategoryNews = () => {
    const {data:news}=useLoaderData()
    return (
        <div>
            <h3>{news.length} News Found In this category</h3>
             <div>
                {
                    news.map((singleNews)=> <CategoryCard key={singleNews._id} singleNews={singleNews}></CategoryCard>)
                }
             </div>
        </div>
    );
};

export default CategoryNews;