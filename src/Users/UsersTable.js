import React, { useState } from 'react';
import users from '../data/users.json';
import users_statistic from '../data/users_statistic.json';
import { useLocation, useHistory } from 'react-router-dom';

const UsersTable = () => {
  const [ usersNumber, setUsersNumber ] = useState(1)
  const [ buttonNumber, setButtonNumber ] = useState(1)
  const currentPeople = [];
  const buttons = [];
  const currentButtons = [];
  let forwardInactive = false;
  let backActive = false;  
  const location = useLocation();
  const history = useHistory();
  const changeUserNumber = e => {
    setUsersNumber(+e.target.innerText);
  }
  const changeButtonNubmerForward = () => {
    if (users.length % 50 === 0 
      && buttonNumber < Math.trunc((users.length / 50) / 5)) {
      const newNumber = buttonNumber + 1;
      setButtonNumber(newNumber);
    }

    if (users.length % 50 !== 0 
      && buttonNumber <= Math.trunc((users.length / 50) / 5)) {
      const newNumber = buttonNumber + 1;
      setButtonNumber(newNumber);
    }
  }
  const changeButtonNubmerBack = () => {
    if (buttonNumber > 1) {
      const newNumber = buttonNumber - 1;
      setButtonNumber(newNumber);
    }
  }
  const goToUserPage = (id) => {
    location.pathname = "/user:" + id;
    history.location.pathname = "/user:" + id;
    history.replace(location.pathname, "/user:" + id);
  }

  if (users.length % 50 === 0 
    && buttonNumber === Math.trunc((users.length / 50) / 5)) {
    forwardInactive = true;
  }

  if (users.length % 50 !== 0 
    && buttonNumber > Math.trunc((users.length / 50) / 5)) {
    forwardInactive = true;
  }

  if (buttonNumber > 1) {
    backActive = true;
  }

  for (let i = 0; i < Math.trunc(users.length / 50); i++) {
    buttons.push(i + 1);
  }

  for (let i = (buttonNumber - 1) * 5; i < (buttonNumber - 1) * 5 + 5; i++) {
    if (buttons[i]) {
      currentButtons.push(buttons[i]);
    }
  }

  for (let i = (usersNumber - 1) * 50; i < (usersNumber - 1) * 50 + 50; i++) {
    if (users[i]) {
      const clicks = users_statistic.filter(data => data.user_id === users[i].id);
      let clicksSum = 0;
      let page_viewsSum = 0;

      for (let j = 0; j < clicks.length; j++) {
        clicksSum += clicks[j].clicks;
        page_viewsSum += clicks[j].page_views;
      }

      currentPeople.push({...users[i], clicks: clicksSum, page_views: page_viewsSum});
    }
  }

  return (
    <>
      <table className="users-table">
        <thead className="users-table__head">
          <tr>
            <td 
              className={
                window.outerWidth > 800 
                ? "users-table__id users-table__cell"
                : "users-table__hide"
              }
            >
              id
            </td>
            <td className="users-table__first-name users-table__cell">First name</td>
            <td className="users-table__last-name users-table__cell">Last name</td>
            <td className="users-table__email users-table__cell">Email</td>
            <td className="users-table__gender users-table__cell">Gender</td>
            <td className="users-table__ip users-table__cell">
              IP adress
            </td>
            <td className="users-table__clicks users-table__cell">
              Total clicks
            </td>
            <td className="users-table__views users-table__cell">
              Total page views
            </td>
          </tr>
        </thead>
        <tbody>
          {currentPeople.map(user => {
            return (
              <tr 
                className="users-table__tr" 
                key={user.id}
                onClick={() => goToUserPage(user.id)}
              >
               <td 
                  className={
                    window.outerWidth > 800 
                    ? "users-table__id users-table__cell"
                    : "users-table__hide"
                  }
                >
                  { user.id }
                </td>
                <td className="users-table__first-name users-table__cell">
                  { user.first_name }
                </td>
                <td className="users-table__last-name users-table__cell">
                  { user.last_name }
                </td>
                <td className="users-table__email users-table__cell">
                  { user.email }
                </td>
                <td className="users-table__gender users-table__cell">
                  { user.gender }
                </td>
                <td 
                  className="users-table__ip users-table__cell">
                  { user.ip_address }
                </td>
                <td 
                  className="users-table__clicks users-table__cell">
                  { user.clicks }
                </td>
                <td className="users-table__views users-table__cell">
                  { user.page_views }
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      
      <div className="users__buttons">
        <button 
          type="button" 
          className={
            backActive 
            ? "users__arrow-back-active users__buttons-button"
            : "users__arrow-back users__buttons-button"
          }
          onClick={changeButtonNubmerBack}
        >
        </button>
        {currentButtons.map(number => {
          return (
            <button 
              type="button" 
              className={
                usersNumber === number
                ? "users__buttons-button-active users__buttons-button"
                : "users__buttons-button"
              }
              onClick={e => changeUserNumber(e)}
              key={number}
            >
              {number}
            </button>
          );
        })}
        <button 
          type="button" 
          className={
            !forwardInactive 
            ? "users__arrow-forward users__buttons-button"
            : "users__arrow-forward-inactive users__buttons-button"
          }
          onClick={changeButtonNubmerForward}
        >
        </button>
      </div>
    </>
  )
}

export default UsersTable;