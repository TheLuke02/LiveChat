import React from 'react'

const SearchResult = ({result}: any) => {
  return (
    <div className='relative'>
        <div className='absolute left-1/2 -translate-x-16'>
            <div className='grid grid-cols-1 gap-2 bg-slate-800 rounded-b-lg w-auto divide-y-4 px-3 divide-violet-500'>
                {
                    result.map((res: any) => {
                        return <div key={res._id} className='text-white font-extrabold text-center px-2 py-2 w-48' >{res.name}</div>
                        })
                }
            </div>
            
        </div>
    </div>
    
  )
}

export default SearchResult