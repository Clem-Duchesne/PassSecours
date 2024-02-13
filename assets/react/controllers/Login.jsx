import React from 'react'

function Login() {
  return (
    <form className='bg-red-100 flex item-center flex-col rounded-md p-9 font-sans'>
        <h3>Connexion</h3>
        <div className="mb-3 p-10">
          <label className='uppercase'>Adresse mail</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Mot de passe</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
    </form>
  )
}

export default Login
