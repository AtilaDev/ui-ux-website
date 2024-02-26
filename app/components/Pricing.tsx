import Image from 'next/image';
import Check from '../../public/assets/check.svg';

export function Pricing() {
  return (
    <div className='py-[48px] lg:py-[60px]'>
      <h1 className='text-[#172026] text-center font-medium text-2xl lg:text-[42px] lg:leading-[58px]'>
        Flexible plans for you
      </h1>
      <p className='text-[#36485C] text-center pt-4 pb-[40px] lg:text-[18px] lg:leading-[28px]'>
        No hidden fees!
      </p>

      <div className='flex flex-col gap-y-6 lg:flex-row lg:gap-x-6'>
        <div className='w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between'>
          {/* Card 1 */}
          <div>
            <h3 className='font-medium text-[#4328EB] text-[18px] lg:text-[20px]'>
              Free Trial
            </h3>
            <p className='pt-[12px] text-[#36485C] lg:text-[18px]'>
              Perfect for testing the waters
            </p>

            <h2 className='pt-4 text-2xl font-medium lg:text-[32px]'>
              $0<span className='text-[#5F7896]'>/mo</span>
            </h2>

            <ul className='flex flex-col gap-y-2 pt-4 text-[#5F7896]'>
              <li className='flex items-center gap-x-2'>
                <span>
                  <Image src={Check} alt='Item 1' />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className='flex items-center gap-x-2'>
                <span>
                  <Image src={Check} alt='Item 2' />
                </span>
                Sed do eiusmod tempor incididunt
              </li>
              <li className='flex items-center gap-x-2'>
                <span>
                  <Image src={Check} alt='Item 3' />
                </span>
                Consectetur adipiscing elit
              </li>
            </ul>
          </div>

          <button className='mt-4 text-[#4328EB] font-medium text-center py-[14px] rounded bg-white'>
            Start Trial
          </button>
        </div>

        {/* Card 2 */}
        <div className='w-full rounded-[8px] bg-[#4328EB] p-6 flex flex-col text-white lg:justify-between'>
          <div>
            <h3 className='font-medium text-[18px] lg:text-[20px]'>Business</h3>
            <p className='pt-[12px] lg:text-[18px] text-[#F4F8FA]'>
              Perfect for small businesses
            </p>

            <h2 className='pt-4 text-2xl font-medium lg:text-[32px]'>
              $500<span>/mo</span>
            </h2>

            <ul className='flex flex-col gap-y-2 pt-4 text-[#F4F8FA]'>
              <li className='flex items-center gap-x-2'>
                <span>
                  <Image src={Check} alt='Item 1' />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className='flex items-center gap-x-2'>
                <span>
                  <Image src={Check} alt='Item 2' />
                </span>
                Sed do eiusmod tempor incididunt
              </li>
              <li className='flex items-center gap-x-2'>
                <span>
                  <Image src={Check} alt='Item 3' />
                </span>
                Consectetur adipiscing elit
              </li>
              <li className='flex items-center gap-x-2'>
                <span>
                  <Image src={Check} alt='Item 3' />
                </span>
                Consectetur adipiscing elit
              </li>
              <li className='flex items-center gap-x-2'>
                <span>
                  <Image src={Check} alt='Item 3' />
                </span>
                Consectetur adipiscing elit
              </li>
            </ul>
          </div>

          <button className='mt-4 text-[#4328EB] font-medium text-center py-[14px] rounded bg-white'>
            Get Started
          </button>
        </div>

        {/* Card 3 */}
        <div className='w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between'>
          <div>
            <h3 className='font-medium text-[#4328EB] text-[18px] lg:text-[20px]'>
              Enterprise
            </h3>
            <p className='pt-[12px] text-[#36485C] lg:text-[18px]'>
              Perfect for big companies
            </p>

            <h2 className='pt-4 text-2xl font-medium lg:text-[32px]'>Custom</h2>

            <p className='text-[#36485C] pt-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <p className='pt-2'>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </p>
          </div>

          <button className='mt-4 text-[#4328EB] font-medium text-center py-[14px] rounded bg-white'>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
