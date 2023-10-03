import { UserList, NavBar, SearchResult, ChatBox } from '@/components';
import { withSessionSsr } from './lib/config/withSession';
import React, { useState } from 'react'

export const getServerSideProps = withSessionSsr( // Controllo se la sessione è attiva
  async ({ req, res }: any) => {

    const session = req.session.user.session;
    const user = req.session.user

    if (!session) {
      return {
        props: { notFound: true }
      }
    }
      return {
        props: { user }
      }
  });


const chats = ({ user }: any) => {
  if (user.session) {
    const [result, setResult] = useState([])
    const [selectedUser, setSelectedUser] = useState({_id: "", name: ""})
    const [search, setSearch] = useState("")
    const [selectedChat, setSelectedChat] = useState("")

    return (
      <main className=''>
        <div>
          <NavBar 
            sessionUser={user.username}
            setResult={setResult} 
            search={search} 
            setSearch={setSearch} 
          />
          <SearchResult 
            sessionUser={user.username} 
            selectedUser={selectedUser} 
            setSelectedUser={setSelectedUser} 
            setResult={setResult} 
            setSearch={setSearch} 
            result={result} 
          />
        </div>
        <div className='grid grid-cols-12 grid-rows-6 divide-x-2 divide-black'>
          <div className='col-span-3'>
            <UserList 
              key={selectedUser._id} // Ricarica UserList ogni volta che la key cambia
              sessionUser={user.username} 
              setSelectedChat={setSelectedChat} 
            />
          </div>
          <div className='col-span-9'>
            <ChatBox 
              selectedChat={selectedChat} 
            />
          </div>
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

