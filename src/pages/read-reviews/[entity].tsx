import ReviewCarousel from "@/components/Reviews/ReviewCarousel";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { ReviewDocument } from "@/utils/Models";
function EntityReviews() {
  const [reviewData, setReviewData] = useState<ReviewDocument[]>([]);
  const router = useRouter();
  const { entity } = router.query;
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/api/review/?entity=${entity}`);
      console.log("Response from server:", response.data);
      setReviewData(response.data);
    }
    if (entity) {
      fetchData();
    }
  }, [entity]);

  console.log(reviewData);
  const count = [{ id: 1 }, { id: 2 }, { id: 3 }];

  const image = count.map((el) => (
    <Image
      key={el.id}
      height={300}
      width={400}
      src={`/assests/Hostel-image/image${el.id}.jpeg`}
      alt="Reviews for entity for which review is being read."
      className="object-cover mx-auto pb-6 h-full  hover:scale-75 ease-in duration-500 rounded-lg"
    />
  ));

  const customresponsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <section className="w-5/6 mx-auto pt-6">
      <Head>
        <title>Read Reviews</title>
      </Head>
      <div className="flex flex-col justify-center items-center ">
        <p className=" font-extrabold text-3xl ">Bhabha Bhawan</p>
      </div>
      <div className=" mx-auto">
        <Carousel
          itemClass="padding-change "
          partialVisible={false}
          responsive={customresponsive}
          swipeable={true}
          draggable={true}
          arrows={false}
          keyBoardControl={true}
          showDots={true}
          className="gd-carousel text-black dark:text-white mb-3 "
          dotListClass="custom-dot-list-style ">
          {image}
        </Carousel>
      </div>
      <p className=" text-xl  font-extrabold">Review</p>
      <ReviewCarousel data={reviewData} />
    </section>
  );
}

export default EntityReviews;
