import Link from "next/link"
import {
RiYoutubeLine,
RiInstagramLine,
RiFacebookLine,
RiBehanceLine,
RiLinkedinLine
} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://ttsmaker.com/br'} target="_blank" className='hover:text-accent transition-all duration-300'>
      <RiYoutubeLine />
      </Link>
      <Link href={'https://ttsmaker.com/br'} className='hover:text-accent transition-all duration-300' target="_blank">
      <RiInstagramLine />
      </Link>
      <Link href={'https://ttsmaker.com/br'} className='hover:text-accent transition-all duration-300' target="_blank">
      <RiFacebookLine />
      </Link>
      <Link href={'https://ttsmaker.com/br'} className='hover:text-accent transition-all duration-300' target="_blank">
      <RiLinkedinLine />
      </Link>

    </div>
  );
};

export default Socials;
