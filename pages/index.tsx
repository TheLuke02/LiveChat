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
    </main>
  )
}
