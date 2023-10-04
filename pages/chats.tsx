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
      <main className='h-screen'>
        <div className='block'>
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
        <div className='flex flex-row space-x-4 h-[calc(100vh-84px)]'>
          <div className='basis-1/6'>
            <UserList 
              key={selectedUser._id} // Ricarica UserList ogni volta che la key cambia
              sessionUser={user.username} 
              setSelectedChat={setSelectedChat} 
            />
          </div>
          <div className='basis-5/6'>
            { selectedChat && 
              <ChatBox 
              key={selectedUser._id}
              sessionUser={user.username}
              selectedChat={selectedChat} 
            />
            }
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

