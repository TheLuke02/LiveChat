import React, { useEffect, useState } from 'react'

const UserList = ({ sessionUser, setSelectedChat}: any) => {
  const [conversation, setConversation] = useState([])
  const [isLoading, setLoading] = useState(true)
  
  useEffect(() => {
    async function searchConv() {
      const response = await fetch('http://localhost:3000/api/getConversation', {
        method: 'POST',
        body: JSON.stringify({
          name: sessionUser
        }),
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json()
      setConversation(data)
      setLoading(false)
    }
    searchConv()
  }, [])
  
  return (
    <div className='grid grid-row'>
      <div className=' font-extrabold text-slate-800 text-4xl font-gluten text-center pt-3'>
        Chats
      </div>
      {
        isLoading
          ? <div className='py-3 text-center font-extrabold text-xl'>
              <span>Caricando le chat...</span>
            </div>
          : <div> 

          {
            conversation.length == 0
            ? <div className='px-2 py-2 mx-1 my-1'>
                <h1 className='text-center text-2xl font-extrabold text-slate-800'>
                  Non hai avviato nessuna chat
                </h1>
              </div>
            :conversation.map((conv: any) => {
              return (
                <div key={conv._id} onClick={() => setSelectedChat(conv._id)} className='bg-slate-800 rounded-3xl py-5 px-5 my-1 mx-1 text-xl text-center text-white hover:cursor-pointer'>
                  {conv.users.map((user: any) => { return (user != sessionUser ? <span key={user}>{user}</span> : "") })}
                </div>
              )
            })
          }
          </div>
      }
    </div>
  ) 
}

export default UserList