export default function Dashboard() {
  return (
    <>
      <h1 className='text-center w-full text-3xl hover:text-emerald-500'>
        this is a dashboard.
      </h1>
      <table suppressHydrationWarning>
        <tr className='hover:bg-slate-500 hover:cursor-pointer'>entry 1</tr>
        <tr>entry 2</tr>
      </table>
    </>
  );
}
