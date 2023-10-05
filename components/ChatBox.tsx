import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'

const ChatBox = ({ selectedChat }: any) => {

  const [message, setMessage] = useState("")

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(message)
    setMessage("")
  }

  return (
    <div className='h-[calc(100vh-84px)] flex flex-col px-3 justify-between shadow-2xl shadow-black'>
      <div className=''>
        {selectedChat}
      </div>
      <div className='pb-5'>
      <div className='relative'>
        <form method="POST" onSubmit={handleSubmit} >
          <input className='ChatInput' placeholder='scrivi qualcosa' value={message} onChange={e => setMessage(e.target.value)} />
          <button type='submit'>
            <PaperAirplaneIcon className='absolute right-6 top-2 h-10 w-10 stroke-white' />
          </button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default ChatBox