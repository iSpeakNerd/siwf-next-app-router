import SiteId from '@/components/siteId';
import Card from '@/components/card';

export default function HomePage() {
  return (
    <>
      <SiteId />
      <div className='mb-4 z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex md:flex'>
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
    </>
  );
}
