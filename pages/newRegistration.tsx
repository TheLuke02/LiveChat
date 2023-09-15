import { Button } from '@/components'
import React from 'react'

const newRegistration = () => {

  function back() {
    window.location.replace("http://localhost:3000/")
  }

  return (
    <div className='flex justify-center'>
      <div className='flex flex-col'>
        <div className='flex justify-center py-52'>
          <h1 className='font-extrabold text-slate-800 text-6xl font-gluten'>
            Registrazione avvenuta con successo
          </h1>
        </div>
        <div className='flex justify-center'>
          <Button
            containerStyles='bg-slate-800 py-3 px-3 rounded-lg shadow-2xl shadow-slate-800'
            textStyles='text-white font-bold'
            handleClick={back}
            title="Torna indietro"
          />
        </div>
      </div>

    </div>
  )
}

export default newRegistration