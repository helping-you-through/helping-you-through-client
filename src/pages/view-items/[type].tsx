import ItemCard from "@/components/Marketplace/ItemCard";
import Image from "next/image";
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";
import { products } from "@/utils/dummy-data";
import Head from "next/head";

function MarketPlaceItemsBasedOnType() {
  const items = products.map((item) => (
    <div
      key={item.id}
      className=" bg-lgreen rounded-md hover:scale-105 shadow-lg transition duration-250 ease-out  dark:bg-[#efefef] "
    >
      <Image
        src={`/assests/vehicals/v${item.id}.jpg`}
        alt=""
        width={400}
        height={150}
        className=" rounded-bl-3xl rounded-br-3xl rounded-tl-md rounded-tr-md object-cover h-[250px] perspective-500	dark:shadow-inner  "
      ></Image>
      <div className=" mt-4">
        <p className="my-3 pl-5 text-black font-semibold inline-block">
          {item.name}
        </p>
        <p className=" my-4 mr-5 px-3 text-white float-right bg-dgreen rounded-xl text-xs">
          {item.negotiable ? "Fixed" : "Negotiable"}{" "}
        </p>
      </div>
      <div className="relative ">
        <span className="  bg-orange  p-2 font-medium text-md rounded-xl absolute left-[28px] bottom-[48px] text-white ">
          ₹ {item.price}/-
        </span>
      </div>
      <div className="flex p-2 px-5 justify-between">
        <p className=" text-black font-semibold text-lg"> contacts :</p>
        <WhatsAppIcon className=" text-dgreen hover:text-[#075e54]" />
        <SendIcon className=" text-dgreen hover:text-[#075e54]" />
        <PhoneIcon className=" text-dgreen hover:text-[#075e54]" />
      </div>
    </div>
  ));

  return (
    <div className="w-5/6 mx-auto ">
      <Head>
        <title>View Items for Sale</title>
      </Head>
      <p className="flex justify-center text-3xl font-extrabold my-5 ">
        {" "}
        Vehicles
      </p>
      <div className="flex flex-wrap my-5 justify-center basis-2  gap-7 ">
        {items}
      </div>
    </div>
  );
}

export default MarketPlaceItemsBasedOnType;
