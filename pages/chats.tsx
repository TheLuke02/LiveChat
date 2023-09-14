import { withSessionSsr } from './lib/config/withSession';
import React from 'react'

export const getServerSideProps = withSessionSsr( // Controllo se la sessione è attiva
  async ({req, res}: any) => {
      const user = req.session.user;
      if(!user) {
          return {
              notFound: true,
          }
      }
      return {
          props: { user }
      }
  }
);

export async function logout() {
  const response = await fetch("./api/logout")
  const data = await response.json() 
  if(data) {
    alert("Hai effettuato il logout")
    window.location.replace("http://localhost:3000/")
  } else {
    alert("Errore")
  }
}

const chats = ({ user }: any) => {
  if(user.session) {
    return (
      <div>
          <h1>Hello {user.username}</h1>
          <p>Secret Content</p>
            <button onClick={logout}>Cliccami per uscire dall'account</button>
      </div>
    )
  } else {
    return  (
      <div>
        Errore durante il login
      </div>
    )
  }
}

export default chats

