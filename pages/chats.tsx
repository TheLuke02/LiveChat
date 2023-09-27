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
    const [selectedUser, setSelectedUser] = useState('')
    const [search, setSearch] = useState("")

    return (
      <main className=''>
        <div>
          <NavBar setResult={setResult} search={search} setSearch={setSearch} />
          <SearchResult setSelectedUser={setSelectedUser} setResult={setResult} setSearch={setSearch} result={result}/>
        </div>

        <div>
          <h1 className='text-white text-2xl'>Al momento sei loggato come: {user.username}</h1>
          <h1 className='text-white text-2xl'>Hai selezionato: {selectedUser}</h1>
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

