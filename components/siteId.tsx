import Image from 'next/image';

export default function SiteId() {
  return (
    <>
      <div className='relative z-[2] pt-3 flex place-items-center'>
        {/* site name */}
        <p className='absolute h-[300px] lg:h-[360px] w-full -translate-x-1/2 rounded-full blur-2xl text-2xl text-black px-6 font-semibold dark:invert sm:w-[480px]'>
          Tabletop.xyz{' '}
        </p>
        {/* Logo */}
        <Image
          className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] blur-2xl -z-20 h-[180px] w-full translate-x-1/3 sm:w-[240px]'
          src='/tabletop.png'
          alt='Tabletop Logo'
          width={180}
          height={180}
          priority
        />
      </div>
    </>
  );
}
