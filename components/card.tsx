import Link from 'next/link';

export default function Card(props: {
  url: string;
  title: string;
  description: string;
}) {
  return (
    <>
      <Link
        href={props.url}
        className='max-w-8 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
        target='_blank'
        rel='noopener noreferrer'
      >
        <h2 className='text-pretty mb-3 text-2xl font-semibold'>
          {props.title}{' '}
          <span className='max-w-[30ch] inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
            -&gt;
          </span>
        </h2>
        <p className='m-0 text-center text-sm opacity-50 text-pretty md:text-balance lg:text-balance'>
          {props.description}
          {/* See Tabletop player stats and&nbsp;details. */}
        </p>
      </Link>
    </>
  );
}
