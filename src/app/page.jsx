"use client";
import { useState } from "react";

import { VscQuote } from "react-icons/vsc";
import { PiHandHeart } from "react-icons/pi";
import { TbLayoutGridAdd } from "react-icons/tb";
import { FaChild } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import CampaignCard from "@/components/CampaignCard";
import Footer from "@/components/Footer";
import React, { useState } from "react";
import SignIn from "@/components/SignIn";
import Link from "next/link";

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <section
        style={{
          backgroundImage:
            "url('https://www.cry.org/wp-content/uploads/Poverty-In-India.png')",
        }}
        className="bg-cover"
      >
        <div className="inset-0 backdrop-brightness-50 ">
          <div className="">
            <div className="text-light text-white flex justify-between items-center lg:px-36 lg:py-14 px-4 py-8">
              <div className="flex items-end gap-3 ">
                <img src="/logo.svg" alt="Ni load hua" className="w-[8%]" />
                <div className="text-sm">Munni Welfare Foundation</div>
              </div>
              <div className="max-sm:hidden flex lg:gap-8 gap-4 text-sm items-center">
                <div>
                  <Link href="/">Home</Link>
                </div>
                <div>About</div>
                <div>
                  <Link href="/contact">Contact</Link>
                </div>
                <div>Get Involved</div>
                <div
                  onClick={() => setShowLogin(!showLogin)}
                  style={{ cursor: "pointer" }}
                >
                  Login
                </div>
                <div className="text-secondary px-4 py-2 rounded-md text-xs  bg-primary flex items-center gap-2">
                  Donate <PiHandHeart className="text-xl" />
                </div>
                <div>
                  <Link href="/profile">My Profile</Link>
                </div>
                <Link href="/campaign">
                  <div className="text-secondary px-4 py-2 rounded-md text-xs  bg-primary flex items-center gap-2">
                    Donate <PiHandHeart className="text-xl" />
                  </div>
                </Link>
              </div>
            </div>

            <div className="h-[500px] grid content-center justify-items-start max-sm:h-[260px] max-sm:content-start lg:px-36 lg:py-14 px-4 py-8">
              <div className="font-medium text-white text-5xl w-[26%] max-sm:w-full max-sm:text-2xl">
                Children&apos;s joy is play
              </div>
              <div className="text-primary mt-4 text-lg w-[26%] max-sm:w-full max-sm:text-sm">
                OUR MISSION
              </div>
              <div className="text-white mt-4 text-sm w-[26%] max-sm:w-[80%]">
                to warm a child &apos;s heart through coordinated play
                
              </div>
              <Link href="/campaign"><button className="bg-primary px-6 rounded-md mt-8 py-4 font-medium max-sm:px-3 max-sm:py-2 max-sm:text-xs">
                Donate Now
              </button></Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="grid place-items-center lg:container lg:w-3/5 lg:pl-36 lg:pr-8 p-4">
            <div className="bg-white-300 ">
              <div className="text-2xl font-medium text-secondary">
                Smile challenge
              </div>
              <div className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias hic quis ab tenetur natus iure sapiente eveniet
                ducimus dolores minus impedit doloribus, obcaecati saepe laborum
                laudantium architecto placeat enim. Reiciendis. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Molestias hic quis
                ab tenetur natus iure sapiente eveniet ducimus dolores minus
                impedit doloribus, obcaecati saepe laborum laudantium architecto
                placeat enim. Reiciendis.
              </div>
            </div>
          </div>
          <div className="text-black grid place-items-center lg:container lg:w-2/5 bg-primary lg:pr-36 py-4 px-4">
            <div className="text-3xl italic w-full lg:w-[52%] text-center">
              <VscQuote className="text-3xl" />
              There is so much joy you can share in this world
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-secondary px-12 py-4 text-white lg:px-36">
          <section className="grid grid-cols-3 mx-auto container max-sm:grid-cols-1">
            <div className="flex items-center justify-center gap-3">
              <PiHandHeart className="text-6xl" />
              <div className="py-5">
                <div className="text-3xl font-medium">2324+</div>
                <div className="">Donations Recieved</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <TbLayoutGridAdd className="text-6xl" />
              <div className="py-5">
                <div className="text-3xl font-medium">393</div>
                <div className="">Coordination Plays</div> 
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <FaChild className="text-6xl" />
              <div className="py-5">
                <div className="text-3xl font-medium">2323+</div>
                <div className="">Childrens Helped</div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="lg:px-36 px-4">
        <div className="text-2xl font-medium text-secondary flex items-center justify-between lg:my-8 mt-4">
          Active Fundraisers
          <div className="max-sm:hidden max-sm:flex">
            <button>
              <Link
                href="/campaign"
                className="bg-secondary text-white font-light text-sm py-2 px-4 rounded-full flex items-center gap-2"
              >
                {" "}
                All Campaigns <BsArrowRight />
              </Link>
          <div className="max-sm:hidden flex">
            <button >
            <Link href="/campaign" className="bg-secondary text-white font-light text-sm py-2 px-4 rounded-full flex items-center gap-2"> All Campaigns <BsArrowRight /></Link>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1 lg:my-8 my-4">
          {"abc".split("").map((item, index) => {
            return (
              <Link href="/details" key={index}>
                <CampaignCard key={index} index={index} />
              </Link>
            );
          })}
        </div>


        <div className="hidden max-sm:flex mb-4 flex justify-center">
          <button>
            <Link
              href="/campaign"
              className="bg-secondary text-white font-light text-sm py-2 px-4 rounded-full flex items-center gap-2"
            >
              {" "}
              All Campaigns <BsArrowRight />
            </Link>
        <div className="hidden max-sm:flex mt-4 justify-center">
          <button className="bg-secondary text-white font-light text-sm py-2 px-4 rounded-full flex items-center gap-2">
            All Campaigns <BsArrowRight />

          </button>
        </div>
      </section>

      <section className="bg-orange-100">
        <div className="grid grid-cols-2 max-sm:grid-cols-1 lg:px-36 lg:py-14 p-4">
          <div className="grid gap-y-6 max-sm:gap-y-4">
            <div className="font-medium text-4xl w-[20%] leading-tight text-orange-500 max-sm:w-full max-sm:text-[22px] max-sm:text-center">
              Support the children
            </div>
            <div className="w-[50%] h-1.5 bg-orange-500 max-sm:hidden"></div>
            <div className="text-sm w-[80%] max-sm:w-full max-sm:text-xs max-sm:text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              sint reprehenderit enim quam in totam. Iste blanditiis voluptate
              consequuntur earum quibusdam ipsa corrupti et eveniet repudiandae
              totam consectetur, maxime ex.
            </div>
            <Link href="/campaign"><button className="bg-secondary text-white font-medium py-3 px-6 rounded-md w-max max-sm:hidden">
              Donate Now
            </button></Link>
          </div>
          <div className="flex justify-end items-center">
            <img
              src="https://www.thestatesman.com/wp-content/uploads/2017/12/Malnutrition-among-childBW.jpg0_.jpg"
              alt=""
              className="rounded-md"
            />
          </div>
        </div>
      </section>
      <section
        className="w-full bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://www.thestatesman.com/wp-content/uploads/2017/12/Malnutrition-among-childBW.jpg0_.jpg')",
        }}
      >
        <div className="backdrop-brightness-[20%]">
          <div className="container mx-auto py-24 grid place-items-center gap-y-8">
            <div className=" text-white text-3xl max-sm:text-sm">
              Support us to make a difference in society
            </div>
            <div className="flex gap-4 max-sm:flex-wrap max-sm:justify-center max-sm:text-xs">
              <div className="border hover:bg-white cursor-pointer hover:text-black text-white px-4 py-2 rounded-full">
                ₹1,000
              </div>
              <div className="border text-white px-4 py-2 rounded-full">
                ₹2,000
              </div>
              <div className="border text-white px-4 py-2 rounded-full">
                ₹3,000
              </div>
              <div className="border text-white px-4 py-2 rounded-full flex items-center gap-3">
                ₹{" "}
                <input
                  type="text"
                  className="bg-transparent w-max outline-none control"
                  placeholder="Custom amount"
                />
              </div>
            </div>
            <button className="bg-primary text-black text-sm px-8 py-3 rounded-full flex items-center gap-3 max-sm:text-xs max-sm:px-3 max-sm:py-2">
              Donate Tip <PiHandHeart className="text-lg" />
            </button>
          </div>
        </div>
      </section>

      {showLogin == true ? <SignIn /> : null}
      <Footer />
    </>
  );
};

export default Home;
