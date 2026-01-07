import React from 'react'

export default function Header() {
  return (
    <header className='bg-slate-400 shadow-md'>
        <div>
         <h1 className='font-bold text-sm sm:text-xl flex-wrap'>
            <span className='text-slate-500'>Sell</span>
            <span className='text-slate-700'>It</span>
         </h1>
         <form>
            <input type='text' placeholder='Search here......'/>
         </form>
       
        </div>
       
    </header>
  )
}
