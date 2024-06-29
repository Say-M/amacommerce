export default function Footer() {
  return (
    <section className='bg-slate-900'>
      <footer className='container mx-auto'>
        <div className='p-4 md:flex md:items-center md:justify-between'>
          <span className=' pr-9 text-sm text-gray-500 sm:text-cente'>
            © 2024 <h3 className='hover:text-black'>Ecommerce</h3> All Rights.
          </span>
          <span className='text-sm text-gray-500 sm:text-cente'>
            <h3 className='hover:text-black font-bold'>
              Developed by Abdulla Mohammad Sayem,
            </h3>
            <h3 className='hover:text-black font-bold'>Faisal Fardin,</h3>
            <h3 className='hover:text-black font-bold'>Parba Das Gupta</h3>
          </span>
          <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-50 sm:mt-0'>
            <li>
              <a href='#' className=' text-lg hover:underline me-4 md:me-6'>
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  );
}
