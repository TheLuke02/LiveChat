import React from 'react'

const SearchResult = ({setSelectedUser, setSearch, setResult, result}: any) => {


  return (
    <div className='relative'>
        <div className='absolute left-1/2 -translate-x-16'>
            <div className={`grid grid-cols-1 gap-2 bg-slate-800 rounded-b-lg w-auto divide-y-4 px-3 divide-violet-500 ${result.length != 0 ? 'pb-2' : ''}`}>
                {
                    result.map((res: any) => {
                        return (
                          <div 
                            key={res._id} 
                            id={res.name} 
                            onClick={(() => {setSelectedUser(res.name); setResult([]); setSearch('');})} 
                            className='text-white font-extrabold text-center px-2 py-2 w-48 rounded-full hover:bg-violet-500 hover:cursor-pointer' 
                          >
                            {res.name}
                          </div>
                        )})
                }
            </div>
        </div>
    </div>
    
  )
}

export default SearchResult