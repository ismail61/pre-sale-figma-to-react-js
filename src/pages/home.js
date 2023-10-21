import React, { useEffect, useState } from 'react';

const Home = () => {
  const [data, setData] = useState({});
  const asyncFn = async () => {
    // Call the backend api
    // & set the data
    // then set the data
    setData({
      percentage: 76,
      percentageFrom: 384.000,
      percentageTo: 500.000,
      totalRaised: 0,
      personal: 0.00,
      price: 0.00,
      contribute: '000',
      myBonus: 0.00,
      holders: '000',
      totalBonus: 0.00,
    });
  };

  useEffect(() => {
    asyncFn();
  }, []);


  return (
    <div style={{
      width: '100vw',
      minHeight: '100vh',
    }} className='bg-gray-200 text-center overflow-hidden text-white italic whitespace-nowrap'>

      <div className='flex items-center justify-center mt-6'>
        <img
          style={{
            width: '100px',
            height: '100px',
            flexShrink: 0,
          }}
          alt=''
          src='/lignes.svg'
          className='w-50 h-50 sm:w-100 sm:h-100'
        />
        <h1 className='text-[22px] sm:text-[30px] md:text-[50px] lg:text-[95px] px-6 sm:px-16 text-white font-arial text-center text-shadow:0px_4px_75px_rgba(255,255,255,0.4) leading-[29.04px] tracking-[0.09em] items-center justify-center '>
          PRE-SALE
        </h1>
        <div style={{ borderRadius: '32px' }} className='px-3 sm:px-8 md:px-14 font-bold py-2 sm:py-4 border-2 border-solid border-light-purple text-[20px]'>
          Connect
        </div>
      </div>

      <div className='flex flex-wrap items-center justify-between mt-8 px-10 lg:px-40'>
        <div className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4'>
          <div style={{ borderRadius: '32px', border: '2px solid #5800C9' }} className='p-6 text-[20px]'>
            <span className='mb-2 block'>Total Raised</span>
            <span className='text-[#7A7285]'>{data.totalRaised} USDC</span>
          </div>
        </div>

        <div className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4 my-5 md:my-0'>
          <div
            style={{
              borderRadius: '41px',
              border: '2px solid #AC59FF',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className='px-14 text-3xl sm:text-4xl text-white'
          >
            <div
              style={{
                background: `linear-gradient(90deg, rgba(172, 89, 255, 0.00) 0%, #AC59FF 80%)`,
                width: `${data.percentage < 100 ? data.percentage : (data.percentage < 0 ? 0 : 100)}%`,
                height: '100%',
                position: 'absolute',
                left: 0,
                borderRadius: '6px',
              }}
            ></div>
            <span className='z-0'>{data.percentage} %</span>
          </div>
          <div className='mt-2 text-[#685D6C]'>
            {data.percentageFrom} / {data.percentageTo} USDC
          </div>

        </div>

        <div className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4 my-2 md:my-0'>
          <div style={{ borderRadius: '32px', border: '2px solid #5800C9' }} className='p-6 text-[20px]'>
            <span className='mb-2 block'>Personal</span>
            <span className='text-[#7A7285]'>{data.personal} USDC</span>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap items-center justify-between mt-12 px-10 lg:px-40'>
        <div className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4'>
          <div style={{ borderRadius: '32px', border: '2px solid #5800C9' }} className='p-6 text-[20px]'>
            <span className='mb-2 block'>Price</span>
            <span className='text-[#7A7285]'>${data.price}</span>
          </div>
        </div>

        <div className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4 my-2 md:my-0'>
          <div style={{ borderRadius: '32px', border: '2px solid #5800C9' }} className='p-6 text-[20px]'>
            <span className='mb-2 block'>Contribute</span>
            <span className='text-[#7A7285]'>{data.contribute}</span>
          </div>
        </div>

        <div className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4'>
          <div style={{ borderRadius: '32px', border: '2px solid #5800C9' }} className='p-6 text-[20px]'>
            <span className='mb-2 block'>My Bonus</span>
            <span className='text-[#7A7285]'>${data.myBonus}</span>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap items-center justify-between mt-12 px-10 lg:px-40'>
        <div className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4'>
          <div style={{ borderRadius: '32px', border: '2px solid #5800C9' }} className='p-6 text-[20px]'>
            <span className='mb-2 block'>Holders</span>
            <span className='text-[#7A7285]'>{data.holders}</span>
          </div>
        </div>

        <div className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4 my-2 md:my-0'>
          <div style={{ borderRadius: '32px', border: '2px solid #5800C9' }} className='p-6 text-[40px]'>
            <span className='mb-2 block'>Buy $OX</span>
          </div>
        </div>

        <div className='w-full sm:w-1/2 md:w-1/4 lg:w-1/4'>
          <div style={{ borderRadius: '32px', border: '2px solid #5800C9' }} className='p-6 text-[20px]'>
            <span className='mb-2 block'>Total Bonus</span>
            <span className='text-[#7A7285]'>{data.totalBonus} $OX</span>
          </div>
        </div>
      </div>


      <div className='flex items-center justify-center mt-12'>
        <img
          style={{
            width: '40px',
            height: '40px',
            flexShrink: 0,
            padding: '8px 16px'
          }}
          alt=''
          src='/group-33521.svg'
        />
        <img
          style={{
            width: '26.051px',
            height: '26.32px',
            flexShrink: 0,
            padding: '10px 20px'
          }}
          alt=''
          src='/twitter--negative.svg'
        />
        <img
          style={{
            width: '26.051px',
            height: '26.32px',
            flexShrink: 0,
            padding: '10px 20px'
          }}
          alt=''
          src='/telegram--negative.svg'
        />
      </div>

      <img
        className='absolute top-0 right-12 bottom-0 rounded-[62px] w-[100vw] h-[100vh]'
        alt=''
        src='/vector.svg'
      />

      <div className='fixed top-0 left-0 right-0  [background:radial-gradient(50%_50%_at_50%_50%,_#4105bf,_rgba(22,_25,_32,_0))] w-[1530px] h-[4000px]' />
    </div>
  );
};

export default Home;
