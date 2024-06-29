export default function Footer() {
  return (
    <section className='bg-slate-300 dark:bg-gray-800'>
      <footer className='container mx-auto'>
        <div className='p-4 md:flex md:items-center md:justify-between'>
          <span className=' pr-9 text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            © 2024 <h3 className='hover:text-black'>Ecommerce</h3> All Rights.
          </span>
          <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            <h3 className='hover:text-black font-bold'>
              Developed by Abdulla Mohammad Sayem,
            </h3>
            <h3 className='hover:text-black font-bold'>Faisal Fardin,</h3>
            <h3 className='hover:text-black font-bold'>Parba Das Gupta</h3>
          </span>
          <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
            <li>
              <h3 className=' text-lg hover:underline me-4 md:me-6'>
                Email : iiuccsestudent@gmail.com
              </h3>
            </li>
            <li>
              <a
                href='https:Dcommerce.com/articles/ecommerce/privacy-policy/'
                className=' text-lg hover:underline me-4 md:me-6'
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  );
}
