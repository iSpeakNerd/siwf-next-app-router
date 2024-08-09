import Image from 'next/image';
import Card from '@/components/card';

export default function HomePage() {
  return (
    <div className='mb-4 z-10 w-full max-w-5xl grid-cols-2 items-center justify-between font-mono text-sm lg:flex md:flex'>
      {/* <div className='mb-4 z-10 w-full max-w-5xl grid-cols-2 items-center justify-between font-mono text-sm lg:flex md:flex'>
        <p className='hover:bg-slate-500'></p> */}
      {/* FC Login Button */}
      {/* <div className='fixed right-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 dark:text-white'> */}
      {/* <Login /> */}
      {/* </div>
      </div> */}

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:blur-2xl after:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:content-[''] sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        {/* site name */}
        <p className='text-2xl text-black px-6 font-semibold dark:invert'>
          Tabletop.xyz{' '}
        </p>
        {/* Logo */}
        <Image
          className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]'
          src='/tabletop.png'
          alt='Tabletop Logo'
          width={180}
          height={180}
          priority
        />
      </div>

      {/* Static link buttons */}
      <div className='mb-6 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-5 lg:text-left'>
        <Card
          url='/players'
          title='Players'
          description='See Tabletop player stats and&nbsp;details.'
        />

        <Card
          url='/blog'
          title='Blog'
          description='See the latest Tabletop news and updates.'
        />
        <Card
          url='/channel'
          title='Channel'
          description='Check out the Tabletop channel on Farcaster.'
        />

        <Card
          url='/community-stats'
          title='Stats'
          description='View the Tabletop community stats and&nbsp;insights.'
        />

        <Card
          url='https://farcasteruserstats.com/channels/tabletop'
          title='Channel Stats'
          description='View the Tabletop channel stats and insights, provided by Farcaster Studio.'
        />
      </div>
    </div>
  );
}
