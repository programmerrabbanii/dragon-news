import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightCon from "../components/layoutComponents/RightCon";

const NewsDetails = () => {
  const newsData = useLoaderData();
  const news = newsData.data[0];
  console.log(news);
  return (
    <div className="w-11/12 mx-auto font-poppins">
      <header>
        <Header></Header>
      </header>
      <main>
        <div className="grid grid-cols-1 md:grid-cols-12">
          <section className="col-span-9 ">
            <h3 className="text-2xl font-semibold">Dragon News</h3>

            <div>
              <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    src={news.image_url}
                    alt="Shoes"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{news.title}</h2>
                  <p>{news.details}</p>
                  <div className="card-actions mt-6 flex justify-start">
                    <Link  to={`/category/${news?.category_id}`} className="btn bg-[#D72050]">All news in this category</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <aside className="col-span-3">
            <RightCon></RightCon>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default NewsDetails;
