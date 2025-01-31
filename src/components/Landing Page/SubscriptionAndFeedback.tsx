import { poppins } from "@/utils/Fonts";
import { Button } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import React, { useState, ChangeEvent, useEffect } from "react";

interface FeedbackFormData {
  name: string;
  AdmissionNo: string;
  suggestion: string;
  Email: string;
}

const SubscriptionAndFeedback = () => {
  const [feedbackForm, setFeedbackForm] = useState<FeedbackFormData>({
    name: "",
    AdmissionNo: "",
    suggestion: "",
    Email: "xyz@coed.svnit.ac.in",
  });

  const handleFormChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFeedbackForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      axios.post(`/api/testimonial`, feedbackForm).then((res) => {
        console.log(res);
        setFeedbackForm({
          name: "",
          AdmissionNo: "",
          Email: "",
          suggestion: "",
        });
      });
    } catch (err) {
      console.log("Error in axios", err);
    }

    console.log(feedbackForm);
  };

  return (
    <>
      <div className="hidden md:block">
        {/* subscribe section */}
        <div
          className={"w-full dark:bg-black  text-center " + poppins.className}
        >
          <div className="min-h-[70vh] flex flex-col justify-center">
            <div className="flex flex-col mx-auto w-5/12">
              <p className="text-[#20B15A]  pb-4">SUBSCRIBE</p>
              <p className="text-xl font-semibold tracking-wider leading-[1.5] text-black dark:text-white">
                Subscribe To Get The Latest
                <br /> News About Us
              </p>
            </div>
            <p className="text-xs text-[#8B8B8B] w-fit mx-auto px-2 ">
              Please drop your email below to get daily update about what we do
            </p>
            <div className="mt-10 w-fit mx-auto rounded-xl border border-black dark:border-white">
              <input
                className=" dark:bg-black border-none focus:outline-none pl-3 px-20"
                type="text"
                placeholder="Enter Your Email Adress"
              />
              <Button
                variant="contained"
                color="warning"
                className="text-white bg-[#FF8345] my-1 mx-1"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        ;{/* feedback */}
        <p className="text-[#20B15A] text-center pb-16">FEEDBACK</p>
        <div
          className={
            "w-full text-[#044A42] dark:bg-black dark:text-[#20B15A] " +
            poppins.className
          }
        >
          <div className="w-10/12 mx-auto flex ">
            <div className="w-6/12 flex-col">
              <Image
                width={800}
                height={800}
                src="/assests/feedback.png"
                alt="feed.pic"
              />
              <div className=" flex w-fit mx-auto px-3 text-center mt-4 font ">
                <p className=" leading-[1.5] text-xl">
                  Any improverment to make it <br /> better for our student
                </p>
              </div>
            </div>

            <div className="w-6/12 list-none items-center pb-5">
              <div className="w-8/12 flex-col float-right">
                <form onSubmit={handleSubmit}>
                  <li className="py-2">
                    <p>Name</p>
                    <input
                      name="name"
                      className="w-full p-1 h-8 border"
                      type="text"
                      placeholder="Enter Name"
                      value={feedbackForm.name}
                      onChange={handleFormChange}
                    />
                  </li>
                  <li className="py-2">
                    <p>Admission No</p>
                    <input
                      name="AdmissionNo"
                      className="w-full p-1  h-8 border"
                      type="text"
                      placeholder="Enter Admission No"
                      value={feedbackForm.AdmissionNo}
                      onChange={handleFormChange}
                    />
                  </li>
                  <li className="py-2">
                    <p>Email </p>
                    <input
                      name="Email"
                      className="w-full p-1 h-8 border"
                      type="text"
                      placeholder="Enter Email"
                      value={feedbackForm.Email}
                      onChange={handleFormChange}
                    />
                  </li>
                  <li className="py-2">
                    <p>Suggestion </p>
                    <textarea
                      name="suggestion"
                      rows={5}
                      className="w-full p-1  border"
                      placeholder="Please  provide Suggestion"
                      value={feedbackForm.suggestion}
                      onChange={handleFormChange}
                    />
                  </li>
                  <Button
                    type="submit"
                    variant="contained"
                    color="warning"
                    className="text-white bg-[#FF8345] mt-10 mx-1"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* "responsive Implemnation" */}
      <div className="md:hidden">
        <p className="text-[#20B15A] text-center my-8">FEEDBACK</p>
        <div
          className={
            " w-full flex justify-center items-center text-[#044A42] dark:bg-black dark:text-[#20B15A] " +
            poppins.className
          }
        >
          <div className="flex-col justify-center">
            <div className="">
              <Image
                width={300}
                height={300}
                src="/assests/feedback.png"
                alt="feed.pic"
              />
            </div>
            <div className="list-none flex-col text-center justify-center mt-2 pb-5">
              <li className="py-2">
                <p>Name</p>
                <input
                  className="w-full p-1 h-8 border rounded-xl mt-2 "
                  type="text"
                  placeholder="Enter Name"
                  value={feedbackForm.name}
                  onChange={handleFormChange}
                />
              </li>
              <li className="py-2">
                <p>Admission No</p>
                <input
                  className="w-full p-1  h-8 border rounded-xl mt-2 "
                  type="text"
                  placeholder="Enter Admission No"
                  value={feedbackForm.AdmissionNo}
                  onChange={handleFormChange}
                />
              </li>
              <li className="py-2">
                <p>Email </p>
                <input
                  className="w-full p-1 h-8 border rounded-xl mt-2 "
                  type="text"
                  placeholder="Enter Email"
                  value={feedbackForm.Email}
                  onChange={handleFormChange}
                />
              </li>
              <li className="py-2">
                <p>Suggestion </p>
                <textarea
                  rows={5}
                  className="w-full p-1  border rounded-xl mt-2 "
                  placeholder="Please  provide Suggestion"
                  value={feedbackForm.suggestion}
                  onChange={handleFormChange}
                />
              </li>
            </div>
            <Button
              variant="contained"
              color="warning"
              className="text-white bg-[#FF8345] mt-5 mx-0.5"
              // onSubmit={handleSubmit}
            >
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscriptionAndFeedback;
