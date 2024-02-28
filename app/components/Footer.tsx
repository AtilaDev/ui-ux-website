import Image from 'next/image';
import Logo from '../../public/assets/Logo.svg';
import X from '../../public/assets/X.svg';
import Facebook from '../../public/assets/Facebook.svg';
import feed from '../../public/assets/Feed.svg';

export function Footer() {
  return (
    <div className='pt-[80px] pb-[40px]'>
      <div className='flex items-center justify-center gap-x-3'>
        <Image src={Logo} alt='Logo' />
        <p className='font-bold text-[#36485C] text-[17px]'>Leandro Favre</p>
      </div>

      <ul className='flex flex-col items-center gap-y-[32px] pt-[56px] text-[#36485C] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5'>
        <li>Features</li>
        <li>Pricing</li>
        <li>Enterprise</li>
        <li>Blog</li>
      </ul>

      <p className='font-medium text-[14px] text-[#5F7896] pt-[56px] text-center sm:pt-5'>
        © Copyright 2024. Leandro Favre. All rights reserved.
      </p>

      <div className='flex items-center justify-evenly gap-x-3 mt-[40px] text-[#5F7896]'>
        <Image src={X} alt='X' />
        <Image src={Facebook} alt='Facebook' />
        <Image src={feed} alt='Feed' />
      </div>
    </div>
  );
}
