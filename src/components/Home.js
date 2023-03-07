import React from 'react'

function Home() {
 
  const logout =(e)=>{
      
      sessionStorage.removeItem('user');
      window.location.reload();
  }
  return (
    <div>
      {sessionStorage.getItem('user')?
      <div>
        <img src={JSON.parse(sessionStorage.getItem('user')).image}></img>
        <div>{JSON.parse(sessionStorage.getItem('user')).nameAccount}</div>
        <button onClick={logout}>Log out</button>
      </div> :
      <a href='/login'>Login</a>}

      Home page
    </div>
  )
}

export default Home