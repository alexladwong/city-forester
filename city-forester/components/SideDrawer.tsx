import React from 'react'

function SideDrawer({close}:any) {
  return (
    <div className='h-screen w-screen md:w-[400px]
     bg-slate-100 shadow-inner p-5 z-20'>
        <button className='text-red-600 font-bold text-[28px]' onClick={()=>close()}>X</button>
     </div>
  )
}

export default SideDrawer