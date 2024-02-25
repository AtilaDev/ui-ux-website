import Image from 'next/image';
import Feature1 from '../../public/assets/feature-1.svg';
import Feature2 from '../../public/assets/feature-2.svg';
import Feature3 from '../../public/assets/feature-3.svg';
import Check from '../../public/assets/check.svg';
import BlueButton from '../../public/assets/blue-button.svg';

export function Features() {
  return (
    <div className='flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]'>
      <div className='flex flex-col gap-x-6 sm:flex-row-reverse'>
        <Image
          src={Feature1}
          alt='Feature 1'
          className='hidden w-1/2 sm:block'
        />
        <div className='sm:w-1/2 lg:py-[56px] lg:pr-[56px]'>
          <h3 className='font-medium text-base leading-6 text-[#0085FF] lg:text-[18px]'>
            Sales Monitoring
          </h3>
          <h1 className='pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] leading-[58px]'>
            Simplify your sales monitoring
          </h1>

          <Image
            src={Feature1}
            alt='Feature 1'
            className='pt-[24px] sm:hidden'
          />
          <p className='py-[24px] text-[#36485C] lg:text-[18px]'>
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.
          </p>

          <ul className='flex flex-col gap-y-3 lg:text-[18px]'>
            <li className='flex items-center gap-x-2 text-[#36485C]'>
              <span>
                <Image src={Check} alt='Checkmark' />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className='flex items-center gap-x-2 text-[#36485C]'>
              <span>
                <Image src={Check} alt='Checkmark' />
              </span>
              Consectetur adipiscing elit
            </li>
            <li className='flex items-center gap-x-2 text-[#36485C]'>
              <span>
                <Image src={Check} alt='Checkmark' />
              </span>
              Sed do eiusmod tempor incididunt ut labore
            </li>
          </ul>

          <p className='flex items-center gap-x-2 py-[9px] pt-6 text-[#0085FF] font-medium leading-6'>
            Learn More
            <span>
              <Image src={BlueButton} alt='Learn more' />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
