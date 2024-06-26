import React from "react";
import icon01 from "../assets/icon01.png";
import icon02 from "../assets/icon02.png";
import icon03 from "../assets/icon03.png";
import NurseHero from "../assets/hero-nurses.jpg";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import NursesList from "../Components/Nurses/NursesList";

const Home = () => {
  return (
    <>
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help patients live a healthy, longer life
                </h1>
                <p className="text__para">
                  Book us now and enjoy our quality services
                </p>

                <button className="btn">Request an Appointment</button>
              </div>
            </div>

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={NurseHero} alt="nurse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="icon01" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Nurse
                </h2>
                <Link
                  to="/nurses"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="icon01" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Location
                </h2>
                <Link
                  to="/nurses"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="icon01" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book Appointment
                </h2>
                <Link
                  to="/nurses"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our nurses</h2>
            <p className="text__para text-center">
              Healthcare system, providing holistic care and support to
              individual across the lifespan
            </p>
          </div>

          <NursesList />
        </div>
      </section>
    </>
  );
};

export default Home;
