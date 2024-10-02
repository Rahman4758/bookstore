import { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//import jsonData from "../list.json"

import axios from "axios";

import Cards from "./Cards";
// Import JSON data

function FreeBook() {
  const [book, setBook] = useState([]);

  useEffect(() => {
   const getBook = async () => {
      try {
      const res = await axios.get("https://backend-eta-nine-31.vercel.app/");
      console.log("fetched data ",res.data);
//filter the books where the category is free
        const data = res.data.filter((item) => item.category === "Free");
        console.log("Filtered books:", data);
        setBook(data);    // Set the filtered books to the state
        console.log("State after setting book:", book);
       } catch (error) {
         console.log(error);
       }
     };
     getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Books</h1>
          <p>
          Discover a collection of insightful and engaging books, available for free! From timeless classics to modern reads, these books cover a variety of topics and genres
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
export default FreeBook;
