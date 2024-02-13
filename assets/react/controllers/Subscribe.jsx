import React, { useState } from 'react'
import Logo from './../../img/logo.png'

function Subscribe() {
  const [data, setData] = useState({username : "", password : ""});
  const onUsernameChange = (e) => {
    setData({username : e.target.value});
  }
  const onPasswordChange = (e) => {
    setPassWord({password : e.target.value});
  }
  const handleSubmitSuscribe = (e) => {
    e.preventDefault();
    console.log(this.data);
  }

  return (
    <form className='bg-red-100 flex item-center flex-col rounded-md p-9 font-sans' onSubmit={handleSubmitSuscribe(this)} method='POST'>
        <h3 className='font-serif uppercase p-6'>Inscription</h3>
        <img src={Logo} alt='logo' className='size-10'></img>
        <div className="mb-3">
          <label>Adresse mail</label>
          <input
            type="username"
            className="form-control"
            placeholder="Enter email"
            value={data.username}
            onChange={this.onUsernameChange()}
          />
        </div>
        <div className="mb-3">
          <label>Mot de passe</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={data.password}
            onChange={this.onPasswordChange()}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            S'inscrire
          </button>
        </div>
    </form>
  )
}

export default Subscribe
