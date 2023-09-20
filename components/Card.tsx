import { Button } from '.'
import { UserPlusIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import { CardProps, Result } from '@/types'
import { useState } from 'react'

const Card = ({ title }: CardProps) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    var sha1: any = require('sha1');

    const handleSubmitLogin = async(e: any) => {
        e.preventDefault();

        if(name && password && name.trim().length != 0 && name != "null" && name != "undefined") {
            let hash: any = sha1(password)
            try {
                let response = await fetch('http://localhost:3000/api/login', {
                    method: 'POST',
                    body: JSON.stringify({
                        name: name,
                        password: hash
                    }),
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    }
                });
                const data: Result = await response.json();
                setName('');
                setPassword('');
                
                if(data.trovato) {
                    window.location.replace("./chats")
                } else {
                    alert(JSON.stringify(data))
                }

            } catch (errorMessage: any) {
                console.error(errorMessage);
            }
        }
    }

    const handleSubmitRegistration = async (e: any) => {
        e.preventDefault();

        if (name && password && name != "null" && name != "undefined") {
            let hash: any = sha1(password)
            try {
                let response = await fetch('http://localhost:3000/api/insertNewUser', {
                    method: 'POST',
                    body: JSON.stringify({
                        name: name,
                        password: hash
                    }),
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    }
                });
                const data: Result = await response.json();
                setName('');
                setPassword('');

                if(data.acknowledged) {
                    window.location.replace("./newRegistration");
                } else {
                    console.log(data)
                    alert(JSON.stringify(data))
                }
                

            } catch (errorMessage: any) {
                console.error(errorMessage);
            }
        } else {
            return alert('sono richiesti tutti i campi')
        }
    }   

    
    return (
        <div className='h-auto w-auto px-3 py-3 shadow-lg shadow-black rounded-xl bg-slate-800'>
            <form 
                method="POST" 
                onSubmit={
                    title == "Registrati"
                    ? handleSubmitRegistration
                    : handleSubmitLogin
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
                    <input className='input' type="text" placeholder="Username" onChange={e => setName(e.target.value.trim())} value={name} required />
                    <input className='input' type="password" placeholder="Password" onChange={e => setPassword(e.target.value.trim())} value={password} required />
                </div>

                <div className='py-2 flex justify-center'>
                    <Button containerStyles='bg-violet-500 rounded-md py-1 px-5 text-white' title="Invia" btnType="submit" />
                </div>

            </form>

        </div>
    )
}

export default Card