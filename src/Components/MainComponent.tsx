import React from 'react'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import instagram from '../images/icon-instagram.svg'
import youtube from '../images/icon-youtube.svg'
import up from '../images/icon-up.svg'
import down from '../images/icon-down.svg'

const MainComponent = () => {
    return (
        <main>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 py-10'>
                <div className='bg-lightMode-light-grayish-blue-card-bg rounded-lg text-center'>
                    <div className='flex justify-center items-center gap-2 py-5'>
                        <img src={facebook} alt="facebook logo" />
                        <p className='text-lightMode-dark-grayish-blue-text font-bold text-sm'>@nathanf</p>
                    </div>

                    <h2 className='text-lightMode-very-dark-blue-text font-bold text-5xl'>1987</h2>
                    <p className='text-lightMode-dark-grayish-blue-text tracking-widest text-sm'>FOLLOWERS</p>

                    <p className='flex justify-center items-center gap-2 py-5'>
                        <img src={up} alt="up icon" className='w-3' />
                        <span className='text-primary-lime-green font-bold'>12 Today</span>
                    </p>
                </div>

                <div className='bg-lightMode-light-grayish-blue-card-bg rounded-lg text-center'>
                    <div className='flex justify-center items-center gap-2 py-5'>
                        <img src={twitter} alt="twitter logo" />
                        <p className='text-lightMode-dark-grayish-blue-text font-bold text-sm'>@nathanf</p>
                    </div>

                    <h2 className='text-lightMode-very-dark-blue-text font-bold text-5xl'>1044</h2>
                    <p className='text-lightMode-dark-grayish-blue-text tracking-widest text-sm'>FOLLOWERS</p>

                    <p className='flex justify-center items-center gap-2 py-5'>
                        <img src={up} alt="up icon" className='w-3' />
                        <span className='text-primary-lime-green font-bold'>99 Today</span>
                    </p>
                </div>

                <div className='bg-lightMode-light-grayish-blue-card-bg rounded-lg text-center'>
                    <div className='flex justify-center items-center gap-2 py-5'>
                        <img src={instagram} alt="instagram logo" />
                        <p className='text-lightMode-dark-grayish-blue-text font-bold text-sm'>@realnathanf</p>
                    </div>

                    <h2 className='text-lightMode-very-dark-blue-text font-bold text-5xl'>11k</h2>
                    <p className='text-lightMode-dark-grayish-blue-text tracking-widest text-sm'>FOLLOWERS</p>

                    <p className='flex justify-center items-center gap-2 py-5'>
                        <img src={up} alt="up icon" className='w-3' />
                        <span className='text-primary-lime-green font-bold'>1099 Today</span>
                    </p>
                </div>

                <div className='bg-lightMode-light-grayish-blue-card-bg rounded-lg text-center'>
                    <div className='flex justify-center items-center gap-2 py-5'>
                        <img src={youtube} alt="youtube logo" />
                        <p className='text-lightMode-dark-grayish-blue-text font-bold text-sm'>Nathan F.</p>
                    </div>

                    <h2 className='text-lightMode-very-dark-blue-text font-bold text-5xl'>8239</h2>
                    <p className='text-lightMode-dark-grayish-blue-text tracking-widest text-sm'>SUBSCRIBERS</p>

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
