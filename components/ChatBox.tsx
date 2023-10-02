import React from 'react'

const ChatBox = ({selectedChat}: any) => {
  return (
    <div className='text-white px-5'>ChatBox di -{'>'} {selectedChat}</div>

  )
}

export default ChatBox