import Marquee from "react-fast-marquee";

const LatesNews = () => {
  return (
    <div className="flex py-2 px-3 gap-3 items-center bg-gray-200 mt-4">
      <p className="bg-red-500 text-white py-2 px-2 text-lg">Latest</p>
      <p >
        <Marquee pauseOnHover={true}>
          I can be a React component, multiple React components, or just some I can be a React component, multiple React components, or just some everyone
          text.
        </Marquee>
      </p>
    </div>
  );
};

export default LatesNews;
