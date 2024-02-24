import Image from 'next/image';
import BlueArrow from '../../public/assets/blue-button.svg';
import Gradient from '../../public/assets/Gradient.svg';
import HeroImage from '../../public/assets/Image.svg';
import Google from '../../public/assets/Google.svg';
import Slack from '../../public/assets/Slack.svg';
import Trustpilot from '../../public/assets/Trustpilot.svg';
import CNN from '../../public/assets/CNN.svg';
import Clutch from '../../public/assets/Clutch.svg';

export function Hero() {
  return (
    <div className='pt-4 lg:pt-10'>
      <div className='px-[20px] lg:px-[280px]'>
        <h1 className='text-center font-medium text-[32px] leading-[40px] text-[#172026]'>
          Start monitoring your website like a pro
        </h1>
        <p className='text-center font-normal text-[16px] leading-[24px] text-[#36485C] pt-6'>
          Get a birds eye view with our customizable dashboard. Stay on top of
          things! Revamp your work process with our game-changing feature. Boost
          productivity and efficiency!
        </p>

        <div className='flex w-full pt-8'>
          <button className='bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded text-[18px] leading-6 font-medium'>
            Try for free
          </button>

          <button className='w-1/2 text-[#4328EB] text-[16px] leading-6 font-medium flex items-center justify-center gap-x-3'>
            View Pricing
            <span>
              <Image
                src={BlueArrow}
                alt='Blue Arrow'
                className='w-[26px] h-[26px]'
              />
            </span>
          </button>
        </div>
      </div>

      <div className='relative flex h-full w-full justify-center'>
        <Image
          src={Gradient}
          alt='Gradient'
          className='min-h-[500px] w-full object-cover'
        />

        <div className='absolute bottom-5 flex w-full flex-col items-center'>
          <Image
            src={HeroImage}
            alt='Hero Image'
            className='-ml-10 h-[310px]'
          />

          <div className='flex w-full flex-col items-center'>
            <p className='text-white font-normal text-base leading-6'>
              Trusted by these companies
            </p>

            <div className='grid grid-cols-3 gap-x-4 items-center justify-center justify-items-center px-[20px] align-middle pt-5'>
              <Image src={Google} alt='Google' />
              <Image src={Slack} alt='Slack' />
              <Image src={Trustpilot} alt='Trustpilot' />
              <Image src={CNN} alt='CNN' />
              <Image src={Clutch} alt='Clutch' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
