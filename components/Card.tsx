import Image from 'next/image'
import { Button } from '.'
import { UserPlusIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import { CardProps } from '@/types'

const Card = ({ title, goTo }: CardProps) => {
    return (
        <div className='h-auto w-auto px-3 py-3 shadow-lg shadow-black rounded-xl bg-slate-800'>
            <form action={goTo} className=''>
                <div className='flex flex-raw gap-2 justify-center'>
                    <h1 className='font-bold text-white'>{title}</h1>
                    {
                        title == 'Registrati'
                            ? <UserPlusIcon className="h-6 w-6 stroke-violet-500" />
                            : <ArrowRightCircleIcon className="h-6 w-6 stroke-violet-500" />
                    }
                </div>

                <div className='flex flex-col gap-2 py-2'>
                    <input className='input' type="text" placeholder="Username" name="user" required />
                    <input className='input' type="text" placeholder="Password" name="password" required />
                </div>

                <div className='py-2 flex justify-center'>
                    <input className='bg-violet-500 rounded-md py-1 px-5 text-white' type="submit" value="Invia" />
                </div>

            </form>
        </div>
    )
}

export default Card