import Imagem from 'next/image';
import Link from 'next/link';
import Socials from '../components/Socials';




const Header = () => {
  return (
    <header className='absolute z-30 w-full flex items-center px-0 xl:px-6 xl:h-[96px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8' >
        <Link href={'/'}>
          <Imagem 
          src={'/logo.png'}
          width={480}
          height={48}
          alt=''
          priority={true}
          />
        </Link>
        <Socials />
        </div>

      </div>
    </header>
  );
};

export default Header;
