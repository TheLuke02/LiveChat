import React from 'react'

const SearchResult = ({ sessionUser, setSelectedUser, setSearch, setResult, result}: any) => {

  const createNewConversation = async (name: any) => {

    const response = await fetch('http://localhost:3000/api/insertNewConversation', {
      method: 'POST',
      body: JSON.stringify({
        user1: sessionUser,
        user2: name
      }),
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    if(!data.flag) {
      setSelectedUser({_id: data.insertedId, name: name})
    } else {
      setSelectedUser({errore: "Errore nella creazione della conversazione"})
    }
    
    setResult([])
    setSearch('')
  }

  return (
    <div className='relative'>
      <div className='absolute left-1/2 -translate-x-16'>
        <div className={`grid grid-cols-1 gap-2 bg-slate-800 rounded-b-lg w-auto divide-y-4 px-3 divide-violet-500 ${result.length != 0 ? 'pb-2' : ''}`}>
          {
              result.map((res: any) => {
                return (
                  <div
                    key={res._id}
                    onClick={() => createNewConversation(res.name)}
                    className='text-white font-extrabold text-center px-2 py-2 w-48 rounded-full hover:bg-violet-500 hover:cursor-pointer'
                  >
                    {res.name}
                  </div>
                )
              })
          }
        </div>
      </div>
    </div>

  )
}

export default SearchResult