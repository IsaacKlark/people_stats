import React from 'react';
import UsersTable from './UsersTable';
import { Link } from 'react-router-dom';

const UsersMain = () => {
  return (
    <main className="users__main">
      <ul className="users__ul">
        <li>
          <Link to="/" className="users__gray-link">Main page ></Link>
        </li>
        <li>
          <Link to="/users" className="users__blue-link">Users statistic</Link>
        </li>
      </ul>

      <h1 className="users__h1">Users statistics</h1>
      <UsersTable />
    </main>
  )
}

export default UsersMain;