import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const studentReview = [
  {
    id: 1,
    desc: " Joining Ten Sentinel’s cyber security program was one of the best decisions I made. The training was beginner-friendly but gradually covered advanced topics. The instructors were knowledgeable and always ready to help. I now feel confident about entering the cybersecurity field.",
    name: "Ritika Sharma",
    date: "25 March 2024",
    studentImg:
      "https://static.vecteezy.com/system/resources/previews/030/798/365/non_2x/beautiful-asian-girl-wearing-over-size-hoodie-in-casual-style-ai-generative-photo.jpg",
  },
  {
    id: 2,
    desc: "What I loved most was the hands-on exposure. We worked on real-time threat simulations and got to understand how cyber attacks are detected and prevented. It wasn’t just theory—everything was practical and up to industry standards.",
    name: "Aman Verma",
    date: "15 Feb 2024",
    studentImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNs1Nu8YGp0GjI9eYeA-L8A_jW7Z8Napam1GyRIuRPTXHt-pfKCvTDgDTDvGi7qJmT2ZE&usqp=CAU",
  },
  {
    id: 3,
    desc: "The mentors at Ten Sentinel are industry professionals who genuinely care about your progress. I got personalized guidance throughout the internship, and their feedback helped me improve immensely.",
    name: " Sneha Patil",
    date: "20 Aug 2024",
    studentImg: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    desc: "The best part? I got placed right after completing the internship! Their job assistance and resume-building sessions were incredibly helpful. I’m now working as a junior security analyst.",
    name: "Rohit Mehta",
    date: "17 June 2024",
    studentImg:
      "https://c1.wallpaperflare.com/preview/369/675/600/boy-life-style-fashion-smile.jpg",
  },
  {
    id: 5,
    desc: "As someone with no background in cybersecurity, I was a bit nervous. But the course was structured so well, starting from the basics and slowly building up. By the end of it, I was confident in using various tools and writing basic scripts.",
    name: "Neha Gupta",
    date: "15 Feb 2025",
    studentImg:
      "https://www.shutterstock.com/shutterstock/photos/2151833739/display_1500/stock-photo-portrait-of-a-young-latin-woman-with-pleasant-smile-and-crossed-arms-isolated-on-grey-wall-with-2151833739.jpg",
  },
];

const SampleNextArrow = ({ onClick }) => (
  <div
    className="absolute -right-5 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
    onClick={onClick}
  >
    <ChevronRightIcon className="w-8 h-8 text-gray-400" />
  </div>
);

const SamplePrevArrow = ({ onClick }) => (
  <div
    className="absolute -left-5 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
    onClick={onClick}
  >
    <ChevronLeftIcon className="w-8 h-8 text-gray-400" />
  </div>
);

const ReviewSection = () => {
  const [expandedCardId, setExpandedCardId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedCardId((prev) => (prev === id ? null : id));
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      // {
      //   breakpoint: 1250,
      //   settings: { slidesToShow: 2 },
      // },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 1350,
        settings: { slidesToShow: 3 },
      },
    ],
  };

  return (
    <div className="bg-gray-100 p-6 relative pt-10">
      <h1 className="text-2xl font-bold text-center mb-10 lg:text-4xl ">
        See What our Students Say About Us!
      </h1>

      <div className="relative">
        <Slider {...settings}>
          {studentReview.map((review) => {
            const isExpanded = expandedCardId === review.id;
            const textToShow = isExpanded
              ? review.desc
              : review.desc.length > 140
              ? review.desc.slice(0, 140) + "..."
              : review.desc;

            return (
              <div key={review.id} className="px-3">
                <div className="bg-white w-full max-w-[420px] mx-auto rounded-lg shadow-md p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-yellow-400 text-xl">
                        {Array(5)
                          .fill("★")
                          .map((star, i) => (
                            <span key={i}>{star}</span>
                          ))}
                      </div>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                        alt="Google logo"
                        className="w-6 h-6"
                      />
                    </div>
                    <p className="text-gray-700 text-sm mb-2 leading-relaxed">
                      {textToShow}
                    </p>
                    {review.desc.length > 120 && (
                      <button
                        onClick={() => toggleExpand(review.id)}
                        className="text-blue-500 cursor-pointer text-sm underline focus:outline-none"
                      >
                        {isExpanded ? "Show Less" : "Read More"}
                      </button>
                    )}
                  </div>

                  <div className="flex items-center mt-4">
                    <img
                      src={review.studentImg}
                      alt={`${review.name}'s profile`}
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div>
                      <p className="text-sm font-semibold">{review.name}</p>
                      <p className="text-xs text-gray-500">{review.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="text-center mt-6 md:mt-10 lg:mt-12">
        <p className="text-gray-800 lg:text-lg max-w-4xl mx-auto md:text-md text-sm">
          At Ten Sentinel, we offer a comprehensive Training + Job (Internship)
          program designed for individuals passionate about Cyber Security. Our
          program provides industry-focused training and real-world experience
          with a job guarantee.
        </p>
      </div>
    </div>
  );
};

export default ReviewSection;
