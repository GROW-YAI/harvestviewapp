import innovatorImage from "/images/innovatorImage.jpg";

const AboutInnovator = () => {
  return (
    <section className="py-16 px-6 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-sm font-semibold text-green-500 uppercase">
            Meet the Founder
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            <span className="text-green-600">A Visionary</span> in Urban Farming
          </h2>
          <p className="text-gray-600 mt-4">
            Meet a visionary entrepreneur from{" "}
            <strong>Nkwabeng Mayfair,Sunyani</strong>, who is tackling the high
            cost and shortage of vegetables in urban areas. With a deep passion
            for sustainable agriculture, he has introduced an innovative
            solution—urban vegetable production systems using{" "}
            <strong>vertical farming and hydroponic towers</strong>.
          </p>
          <p className="text-gray-600 mt-4">
            This cutting-edge method enables{" "}
            <strong>year-round vegetable growth</strong>, even in limited
            spaces, by utilizing a built-in irrigation system. His goal is to
            revolutionize food production in local communities, making fresh,
            pesticide-free vegetables <strong>accessible and affordable</strong>
            .
          </p>
          <p className="text-gray-600 mt-4">
            Seeking support to expand this initiative, he aims to implement a
            model that has already transformed agriculture in other parts of the
            world—
            <strong>
              boosting food supply, reducing costs, and fostering a greener
              future
            </strong>
            .
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2">
          <img
            src={innovatorImage}
            alt="Owner of the Business"
            className="w-full max-w-md mx-auto h-[50%] rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutInnovator;
