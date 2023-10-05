import { Card } from '@/components'

export default function Home() {

  return (
    <main className=''>
      <div className='flex justify-center pt-16'>
        <h1 className='font-extrabold text-slate-800 text-6xl font-gluten'>
          LiveChat
        </h1>
      </div>
      <div className='flex justify-center pt-16 space-x-20'>
        <div>
          <Card
            title='Registrati'
            goTo='./api/insertNewUser'
          />
        </div>

        <div>
          <Card
            title='Accedi'
            goTo='./api/login'
          />
        </div>
      </div>
      <div className='py-5 my-5 font-extrabold text-slate-800 text-4xl font-gluten text-center'>
        l'unica cosa criptata all'interno di questo sito saranno le vostre password, <br />
        tutti i messaggi che manderete tramite questa WEB-APP saranno salvati in chiaro. <br />
        Siete stati avvisati
      </div>
    </main>
  )
}
