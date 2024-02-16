import Image from "next/image";

import Link from 'next/link';

import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
  <div className='mx-auto xl:mx-0'>
    <Link 
    href={'/work'}
    className='relative w-[180px] h-[180px] flex justify-center items-center
    bg-circleStar bg-cover bg-center bg-no-repeat group'
    >
      <Image 
      src={'/rounded-text.png'}
      width={400}
      height={400}
      alt=''
      className='w-full h-full max-w-[180px] max-h-[400px]'
      />
      {/* <HiArrowRight className='absolute text-4xl group-hover:translate-x-2
      transition-all duration-100'/> */}
    </Link>
  </div>
    );
};

export default ProjectsBtn;
