import React from 'react';
import UsersMain from './UsersMain';

const Users = () => {
  return (
    <article className="users">
      <header className="users__header">
        <h2>AppCo</h2>
      </header>

      <UsersMain />

      <footer className="users__footer">
        <p className="users__bottom-AppCo">AppCo</p>
        <p>All rights reserved by ThemeTags</p>
        <p>Copyrights © 2019.</p>
      </footer>
    </article>
  )
}

export default Users;