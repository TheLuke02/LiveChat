import { NavBar, SearchResult } from '@/components';
import { withSessionSsr } from './lib/config/withSession';
import React, { useState } from 'react'

export const getServerSideProps = withSessionSsr( // Controllo se la sessione è attiva
  async ({ req, res }: any) => {
    const user = req.session.user;
    if (!user) {
      return {
        notFound: true,
      }
    }
    return {
      props: { user }
    }
  }
);

const chats = ({ user }: any) => {
  if (user.session) {

    const [result, setResult] = useState([])

    return (
      <main className=''>
        <div>
          <NavBar setResult={setResult} />
          <SearchResult result={result}/>
        </div>

        <div>
          <h1 className='text-white'>Al momento sei loggato come: {user.username}</h1>
        </div>
      </main>
    )
  } else {
    return (
      <div>
        Errore durante il login
      </div>
    )
  }
}

export default chats

