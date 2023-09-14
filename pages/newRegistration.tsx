import React from 'react'

const newRegistration = () => {

  function back() {
    window.location.replace("http://localhost:3000/")
  }

  return (
    <div>
        Registrazione avvenuta con successo
        <br />
            <button onClick={back}>Torna indietro</button>
    </div>
  )
}

export default newRegistration