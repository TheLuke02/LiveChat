import Image from 'next/image'
import { Button } from '.'
import { UserPlusIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import { CardProps } from '@/types'
import { useState } from 'react'
import { FormEvent } from 'react'



const Card = ({ title, goTo }: CardProps) => {
    var sha1: any = require('sha1');

    async function onsubmitRegistrationHandler(event: FormEvent<HTMLFormElement>) {
        try {
            let hash: any = sha1(event.target.password.value)
            const formData = JSON.stringify({
                name: event.target.name.value,
                password: hash
            })

            const response = await fetch(goTo, {
                method: 'POST',
                body: formData,
            })

            const data = await response.json()

            if(data)
                window.location.replace("../newRegistration");
            else
                alert("Errore, l'username inserito esiste già")
                throw new Error("Errore nella registrazione")

        } catch (e: any) {
            console.error(e);
            throw new Error(e).message;
        }
    }

    async function onsubmitLoginHandler(event: FormEvent<HTMLFormElement>) {
        try {
            let hash: any = sha1(event.target.password.value)
            const formData = JSON.stringify({
                name: event.target.name.value,
                password: hash
            })

            const response = await fetch(goTo, {
                method: 'POST',
                body: formData,
            })

            const data = await response.json()

            if(data) {
                window.location.replace("../chats");
            }
            else {
                throw new Error("Errore nel login")
            }
            
        } catch (e: any) {
            alert("Credenziali non valide")
            console.error(e);
            throw new Error(e).message;
        }
    }

    return (
        <div className='h-auto w-auto px-3 py-3 shadow-lg shadow-black rounded-xl bg-slate-800'>
            <form 
                method="POST" 
                onSubmit={
                    title == "Registrati"
                    ? onsubmitRegistrationHandler
                    : onsubmitLoginHandler
                } 
            >
                <div className='flex flex-raw gap-2 justify-center'>
                    <h1 className='font-bold text-white'>{title}</h1>
                    {
                        title == 'Registrati'
                            ? <UserPlusIcon className="h-6 w-6 stroke-violet-500" />
                            : <ArrowRightCircleIcon className="h-6 w-6 stroke-violet-500" />
                    }
                </div>

                <div className='flex flex-col gap-2 py-2'>
                    <input className='input' type="text" placeholder="Username" id="name" name='name' required />
                    <input className='input' type="password" placeholder="Password" id="password" name='password' required />
                </div>

                <div className='py-2 flex justify-center'>
                    <Button containerStyles='bg-violet-500 rounded-md py-1 px-5 text-white' title="Invia" btnType="submit" />
                </div>

            </form>
        </div>
    )
}

export default Card