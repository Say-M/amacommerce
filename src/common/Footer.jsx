
export default function Footer() {

    return (
        <section className='container mx-auto py-4'>
           


            <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>. All Rights.
                   
                    </span>
                    <span className="text-lg text-gray-500 sm:text-center dark:text-gray-400">
                    Developed by Abdulla Mohammad Sayem,Faisal Fardin,Parba Das Gupta,
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            {/* <a href="" className="hover:underline me-4 md:me-6">Flowbite</a> */}
                            <h3 className="hover:underline me-4 md:me-6">Email:iiuccsestudent@gmail.com</h3>
                        </li>
                        <li>
                            <a href="https:Dcommerce.com/articles/ecommerce/privacy-policy/" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        
                    
                    </ul>
                </div>
            </footer>

        </section>
    );
}

