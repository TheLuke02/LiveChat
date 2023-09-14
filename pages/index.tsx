import Head from 'next/head'
import clientPromise from '../lib/mongodb'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { Button, Card } from '@/components'
import Image from 'next/image'
import { Props, User } from '@/types'
import { useState } from 'react';


export async function getServerSideProps() {
  try {
    let response = await fetch('http://localhost:3000/api/getUserName'); // Mi interfaccio con l'API endpoint per prendere in input tutti i nomi degli utenti registrati
    let users = await response.json(); // Lo trasformo in JSON

    return {
      props: { users : JSON.parse(JSON.stringify(users)) } // Ritorno users
    };
  } catch (e) { // Controllo se ci sono errori
    console.error(e);
  }
}


export default function Home(props: Props) {

  const users = props.users; // Metto dentro users un array di oggetti (props è un oggetto con all'interno un array di oggetti)
  
  return (
    <main className='h-screen bg-slate-700'>

      <div className='w-auto h-20'>

      </div>

      <div className='flex flex-row flex-wrap flex-auto justify-center gap-14'>
        <Card
          title='Registrati'
          goTo='./api/insertNewUser'
        />
        <Card
          title='Accedi'
          goTo='./api/login'
        />
      </div>

      <div className='text-white flex justify-center py-11'>
            
            <ul className='list-disc'>
            <h1 className='font-extrabold'>
              Utenti registrati
            </h1>
              {
                users.map((user) => { // Scorro per tutto l'array users
                  return (
                    <li key={user._id /* Creo un <li> univoco ogni volta che ne creo uno */}>
                      {user.name /* per tutti gli oggetti stampo il nome */ }
                    </li>
                  )})
              }
            </ul>
        </div>
    </main>
  )
}
