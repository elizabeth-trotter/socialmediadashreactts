import React from 'react'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import instagram from '../images/icon-instagram.svg'
import youtube from '../images/icon-youtube.svg'
import up from '../images/icon-up.svg'
import down from '../images/icon-down.svg'

const MainComponent = () => {
    return (
        <main className='max-w-7xl mx-auto relative z-10'>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 py-10'>
                <div className='bg-lightMode-light-grayish-blue-card-bg rounded-lg text-center dark:bg-darkMode-dark-desaturated-blue-card-bg'>
                    <div className='bg-primary-facebook h-1 rounded-t-lg'></div>
                    <div className='flex justify-center items-center gap-2 py-5'>
                        <img src={facebook} alt="facebook logo" />
                        <p className='text-lightMode-dark-grayish-blue-text font-bold text-sm dark:text-slate-400'>@nathanf</p>
                    </div>

                    <h2 className='text-lightMode-very-dark-blue-text font-bold text-5xl dark:text-darkMode-white-text'>1987</h2>
                    <p className='text-lightMode-dark-grayish-blue-text tracking-widest text-sm dark:text-slate-400'>FOLLOWERS</p>

                    <p className='flex justify-center items-center gap-2 py-5'>
                        <img src={up} alt="up icon" className='w-3' />
                        <span className='text-primary-lime-green font-bold'>12 Today</span>
                    </p>
                </div>

                <div className='bg-lightMode-light-grayish-blue-card-bg rounded-lg text-center dark:bg-darkMode-dark-desaturated-blue-card-bg'>
                    <div className='bg-primary-twitter h-1 rounded-t-lg'></div>
                    <div className='flex justify-center items-center gap-2 py-5'>
                        <img src={twitter} alt="twitter logo" />
                        <p className='text-lightMode-dark-grayish-blue-text font-bold text-sm dark:text-slate-400'>@nathanf</p>
                    </div>

                    <h2 className='text-lightMode-very-dark-blue-text font-bold text-5xl dark:text-darkMode-white-text'>1044</h2>
                    <p className='text-lightMode-dark-grayish-blue-text tracking-widest text-sm dark:text-slate-400'>FOLLOWERS</p>

                    <p className='flex justify-center items-center gap-2 py-5'>
                        <img src={up} alt="up icon" className='w-3' />
                        <span className='text-primary-lime-green font-bold'>99 Today</span>
                    </p>
                </div>

                <div className='bg-lightMode-light-grayish-blue-card-bg rounded-lg text-center dark:bg-darkMode-dark-desaturated-blue-card-bg'>
                    <div className='bg-gradient-to-r from-yellow-200 to-pink-500 h-1 rounded-t-lg'></div>
                    <div className='flex justify-center items-center gap-2 py-5'>
                        <img src={instagram} alt="instagram logo" />
                        <p className='text-lightMode-dark-grayish-blue-text font-bold text-sm dark:text-slate-400'>@realnathanf</p>
                    </div>

                    <h2 className='text-lightMode-very-dark-blue-text font-bold text-5xl dark:text-darkMode-white-text'>11k</h2>
                    <p className='text-lightMode-dark-grayish-blue-text tracking-widest text-sm dark:text-slate-400'>FOLLOWERS</p>

                    <p className='flex justify-center items-center gap-2 py-5'>
                        <img src={up} alt="up icon" className='w-3' />
                        <span className='text-primary-lime-green font-bold'>1099 Today</span>
                    </p>
                </div>

                <div className='bg-lightMode-light-grayish-blue-card-bg rounded-lg text-center dark:bg-darkMode-dark-desaturated-blue-card-bg'>
                    <div className='bg-primary-youtube h-1 rounded-t-lg'></div>
                    <div className='flex justify-center items-center gap-2 py-5'>
                        <img src={youtube} alt="youtube logo" />
                        <p className='text-lightMode-dark-grayish-blue-text font-bold text-sm dark:text-slate-400'>Nathan F.</p>
                    </div>

                    <h2 className='text-lightMode-very-dark-blue-text font-bold text-5xl dark:text-darkMode-white-text'>8239</h2>
                    <p className='text-lightMode-dark-grayish-blue-text tracking-widest text-sm dark:text-slate-400'>SUBSCRIBERS</p>

                    <p className='flex justify-center items-center gap-2 py-5'>
                        <img src={down} alt="down icon" className='w-3' />
                        <span className='text-primary-bright-red font-bold'>-144 Today</span>
                    </p>
                </div>
            </section>
        </main>
    )
}

export default MainComponent
