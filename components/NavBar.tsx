import { Result } from '@/types'
import { ArrowRightOnRectangleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'

export async function logout() {
    const response = await fetch("http://localhost:3000/api/logout")
    const data: Result = await response.json()

    if (data.sessionClosed) {
        alert("Hai effettuato il logout")
        window.location.replace("http://localhost:3000/")
    } else {
        alert(data)
    }
}


function NavBar ({sessionUser, setSearchLoading, setResult, search, setSearch}: any) {
    const [data, setData] = useState([])

    useEffect(() => {
        const searchUser = async () => {
          const response = await fetch('http://localhost:3000/api/searchUser', {
            method: 'POST',
            body: JSON.stringify({
                search: search,
                except: sessionUser
            }),
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        });
          const data = await response.json();
          setData(data);
        };
        searchUser();
      }, []);

      
      useEffect(() => {
        if (search != "") {
          const results = data.filter((res: any) =>
          res.name.toLowerCase().includes(search.toLowerCase())
          );
          setResult(results);
          setSearchLoading(false)
        } else {
            setResult([]);
        }
      }, [search, data]); 

      const handleSearch = (event: any) => {
        setSearch(event.target.value);
      };  
    

    return (
        <div className='w-full'>
            <nav className="bg-slate-800 shadow">
                <div className='flex flex-raw py-5 px-5 justify-between'>
                    <div className='pt-1'>
                        <h1 className='font-extrabold text-violet-500 text-4xl font-gluten'>
                                LiveChat
                        </h1>
                    </div>
                    <div className=''>
                        <form
                            method='POST'
                            className='flex flex-raw'
                        >
                            <div className='pr-3'>
                                <input className='NavInput' placeholder='Cerca un utente' value={search} onChange={handleSearch} />
                            </div>

                            <div className='pt-1'>
                                <MagnifyingGlassIcon className='h-8 w-8 stroke-violet-500 ' />
                            </div>
                        </form>
                    </div>
                    <div className='pt-1'>
                        <button>
                            <ArrowRightOnRectangleIcon onClick={logout} className='h-8 w-8 stroke-violet-500' />
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar