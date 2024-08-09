import SiteId from '@/components/siteId';
import Card from '@/components/card';

export default function HomePage() {
  return (
    <>
      <SiteId />
      {/* Static link buttons */}
      <div className='mb-6 md:max-w-8 grid text-center w-full lg:mb-0 lg:w-full lg:grid-cols-5 lg:text-left'>
        <Card
          url='/players'
          title='Players'
          description='See Tabletop player stats and&nbsp;details.'
        />
        <Card
          url='/blog'
          title='Blog'
          description='See the latest Tabletop news and&nbsp;updates.'
        />
        <Card
          url='/channel'
          title='Channel'
          description='Check out the Tabletop channel on&nbsp;Farcaster.'
        />
        <Card
          url='/community-stats'
          title='Stats'
          description='View the Tabletop community stats and&nbsp;insights.'
        />
        <Card
          url='https://farcasteruserstats.com/channels/tabletop'
          title='Channel Stats'
          description='View the Tabletop channel stats and insights, provided by Farcaster&nbsp;Studio.'
        />
      </div>
    </>
  );
}
