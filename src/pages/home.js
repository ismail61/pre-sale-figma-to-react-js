import React, { useEffect, useState } from "react";

const Home = () => {
  // State manage and Data Fetching
  const [data, setData] = useState({});
  const asyncFn = async () => {
    // Call the backend api
    // & set the data
    // then set the data
    // These are dummy data
    setData({
      percentage: 76,
      percentageFrom: 384.0,
      percentageTo: 500.0,
      totalRaised: 0,
      personal: 0.0,
      price: 0.0,
      contribute: "000",
      myBonus: 0.0,
      holders: "000",
      totalBonus: 0.0,
    });
  };

  // For Data Fetching
  useEffect(() => {
    asyncFn();
  }, []);

  return (
    // Component Layout
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
      }}
      className="relative bg-gray-200 text-center overflow-hidden text-white italic whitespace-nowrap font-sans"
    >
      <div className="absolute rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_#4105bf,_rgba(22,_25,_32,_0))] left-[-4%] top-[50%] bottom-0 w-[700px] md:w-[1000px] lg:w-[1600px] h-[1380.3px] md:h-[859.3px]" />
      {/* Headers and Logo */}
      <div className="flex items-center justify-between lg:justify-between mt-6 px-10 md:px-40 lg:px-40">
        <span></span>
        <img
          style={{
            flexShrink: 0,
          }}
          alt="Logo"
          src="/lignes.svg"
          className="md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] w-[70px] h-[70px]"
        />
        <h1 className="text-[22px] sm:text-[30px] md:text-[50px] lg:text-[80px] px-2 sm:px-8 text-white font-arial text-center text-shadow:0px_4px_75px_rgba(255,255,255,0.4) leading-[59.04px] tracking-[0.09em] items-center justify-center ">
          PRE-SALE
        </h1>
        <div
          style={{ borderRadius: "32px" }}
          className="px-3 sm:px-8 md:px-14 lg:px-20 font-bold py-2 sm:py-4 border-2 border-solid border-light-purple text-[20px]"
        >
          Connect
        </div>
      </div>

      {/* Data Presentation */}
      <div className="flex flex-wrap items-center justify-between mt-8 px-10 lg:px-40">
        <div className="w-full sm:w-1/2 md:w-1/5">
          <div
            style={{ borderRadius: "32px", border: "2px solid #5800C9" }}
            className="p-6 text-[20px]"
          >
            <span className="mb-2 block">Total Raised</span>
            <span className="text-[#7A7285]">{data.totalRaised} USDC</span>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 my-5 md:my-0">
          <div
            style={{
              borderRadius: "41px",
              border: "2px solid #AC59FF",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="px-14 text-3xl sm:text-4xl text-white"
          >
            <div
              style={{
                background: `linear-gradient(90deg, rgba(172, 89, 255, 0.00) 0%, #AC59FF 80%)`,
                width: `${
                  data.percentage < 100
                    ? data.percentage
                    : data.percentage < 0
                    ? 0
                    : 100
                }%`,
                height: "100%",
                position: "absolute",
                left: 0,
                borderRadius: "6px",
              }}
            ></div>
            <span className="z-0">{data.percentage} %</span>
          </div>
          <div className="mt-2 text-[#685D6C]">
            {data.percentageFrom} / {data.percentageTo} USDC
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/5 my-2 md:my-0">
          <div
            style={{ borderRadius: "32px", border: "2px solid #5800C9" }}
            className="p-6 text-[20px]"
          >
            <span className="mb-2 block">Personal</span>
            <span className="text-[#7A7285]">{data.personal} USDC</span>
          </div>
        </div>
      </div>

      {/* Data Presentation */}
      <div className="flex flex-wrap items-center justify-between mt-8 px-10 lg:px-40">
        <div className="w-full sm:w-1/2 md:w-1/5">
          <div
            style={{ borderRadius: "32px", border: "2px solid #5800C9" }}
            className="p-6 text-[20px]"
          >
            <span className="mb-2 block">Price</span>
            <span className="text-[#7A7285]">${data.price}</span>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/5 my-2 md:my-0">
          <div
            style={{ borderRadius: "32px", border: "2px solid #5800C9" }}
            className="p-6 text-[20px]"
          >
            <span className="mb-2 block">Contribute</span>
            <span className="text-[#7A7285]">{data.contribute}</span>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/5">
          <div
            style={{ borderRadius: "32px", border: "2px solid #5800C9" }}
            className="p-6 text-[20px]"
          >
            <span className="mb-2 block">My Bonus</span>
            <span className="text-[#7A7285]">${data.myBonus}</span>
          </div>
        </div>
      </div>

      {/* Data Presentation */}
      <div className="flex flex-wrap items-center justify-between mt-8 px-10 lg:px-40">
        <div className="w-full sm:w-1/2 md:w-1/5">
          <div
            style={{ borderRadius: "32px", border: "2px solid #5800C9" }}
            className="p-6 text-[20px]"
          >
            <span className="mb-2 block">Holders</span>
            <span className="text-[#7A7285]">{data.holders}</span>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/5 my-2 md:my-0">
          <div
            style={{ borderRadius: "32px", border: "2px solid #AC59FF" }}
            className="p-6 text-[30px]"
          >
            <span className="mb-2 block text-white py-0 sm:py-1 md:pb-11">
              <span className="md:absolute md:right-[40%] md:left-[40%] mt-2">Buy $OX</span>
            </span>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/5">
          <div
            style={{ borderRadius: "32px", border: "2px solid #5800C9" }}
            className="p-6 text-[20px]"
          >
            <span className="mb-2 block">Total Bonus</span>
            <span className="text-[#7A7285]">{data.totalBonus} $OX</span>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex items-center justify-center mt-16 md:absolute left-[50%] right-[50%]">
        <img
          style={{
            width: "40px",
            height: "40px",
            flexShrink: 0,
            padding: "8px 16px",
          }}
          alt=""
          src="/group-33521.svg"
        />
        <img
          style={{
            width: "26.051px",
            height: "26.32px",
            flexShrink: 0,
            padding: "10px 20px",
          }}
          alt=""
          // className='absolute'
          src="/twitter--negative.svg"
        />
        <img
          style={{
            width: "26.051px",
            height: "26.32px",
            flexShrink: 0,
            padding: "10px 20px",
          }}
          alt=""
          // className='absolute'
          src="/telegram--negative.svg"
        />
      </div>

      {/* Background Images and Styling */}
      <img
        className="absolute top-0 right-12 bottom-0 rounded-[62px] w-[100vw] h-[100vh]"
        alt=""
        src="/vector.svg"
      />
      {/* <div className='fixed top-0 left-0 right-0  [background:radial-gradient(70%_45%_at_50%_50%,_#4105bf,_rgba(22,_25,_32,_0))] w-full h-[2500px]' /> */}
    </div>
  );
};

export default Home;
