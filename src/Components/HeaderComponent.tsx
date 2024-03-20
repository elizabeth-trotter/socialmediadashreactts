import React, { useEffect, useState } from 'react'

const HeaderComponent = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const handleToggle = () => {
        setDarkMode(!darkMode);
    }

    return (
        <header className='max-w-7xl mx-auto relative z-10'>
            <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
                <div className='flex-1'>
                    <h1 className='text-2xl font-bold text-lightMode-very-dark-blue-text dark:text-darkMode-white-text'>Social Media Dashboard</h1>
                    <p className='text-lightMode-dark-grayish-blue-text dark:text-slate-400 font-bold'>Total Followers: 23,004</p>
                </div>

                <div className='md:hidden pt-5 pb-4'>
                    <hr style={{border: '1px solid grey'}}/>
                </div>

                {/* Toggle */}
                <div className="toggle">
                    <label htmlFor="checkbox" className="font-bold text-slate-600 dark:text-slate-400 text-sm cursor-pointer pr-36 md:pr-0">Dark Mode</label>
                    <input type="checkbox" className="checkbox" id="checkbox" checked={!darkMode} onClick={handleToggle} />
                    <label htmlFor="checkbox" className="label">
                        <div className="ball"></div>
                    </label>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent
