import React from 'react'

const HeaderComponent = () => {
    return (
        <header className='flex justify-between items-center'>
            <div>
                <h1 className='text-2xl font-bold'>Social Media Dashboard</h1>
                <p className='text-lightMode-dark-grayish-blue-text font-bold'>Total Follower: 23,004</p>
            </div>

            <p>Toggle</p>

        </header>
    )
}

export default HeaderComponent
