import { Result } from '@/types'
import { ArrowRightOnRectangleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'
import Button from './Button'

export async function logout() {
    const response = await fetch("http://localhost:3000/api/logout")
    const data: Result = await response.json()

    if (data.sessionClosed) {
        alert("Hai effettuato il logout")
        window.location.replace("http://localhost:3000/")
    } else {
        alert(data)
    }
}

export function searchUser() {

}

const NavBar = () => {
    return (
        <div className='w-full'>
            <nav className="bg-slate-800 shadow">
                <div className='flex flex-raw py-5 px-5 justify-between'>
                    <div className='pt-1'>
                        <h1 className='font-extrabold text-violet-500 text-4xl font-gluten'>
                                LiveChat
                        </h1>
                    </div>
                    <div className=''>
                        <form
                            method='POST'
                            onSubmit={searchUser}
                            className='flex flex-raw'
                        >
                            <div className='pr-3'>
                                <input className='NavInput' placeholder='Cerca un utente'/>
                            </div>

                            <div className='pt-1'>
                                <button type='submit'>
                                    <MagnifyingGlassIcon className='h-8 w-8 stroke-violet-500 ' />
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='pt-1'>
                        <button>
                            <ArrowRightOnRectangleIcon onClick={logout} className='h-8 w-8 stroke-violet-500' />
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar