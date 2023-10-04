import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import React from 'react'

const ChatBox = ({ selectedChat }: any) => {

  return (
    <div className='h-[calc(100vh-84px)] flex flex-col px-3 justify-between shadow-2xl shadow-black'>
      <div className=''>
        {selectedChat}
      </div>
      <div className='pb-5'>
      <div className='relative'>
        <input className='ChatInput' placeholder='scrivi qualcosa' />
        <PaperAirplaneIcon className='absolute right-6 top-2 h-10 w-10 stroke-white' />
      </div>
      </div>
      
    </div>
  )
}

export default ChatBox