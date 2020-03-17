import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import users from '../data/users.json';
import users_statistic from '../data/users_statistic.json';

const UserPage = () => {
  const [daysForClicks, setDaysForClicks] = useState(7);
  const [daysForViews, setDaysForViews] = useState(7);
  const location = useLocation();
  const userId = +location.pathname.match(/\d/g).join("");
  const user = users.find(user => user.id === userId);
  let statistic = users_statistic.filter(statistic => statistic.user_id === user.id);
  let date = statistic[statistic.length - 1].date.split('-').map(date => +date);

  for (let i = statistic.length - 1; i >= 0; i--) {
    const dateI = date.map(date => {
      return date.toString().length >= 2 ? date.toString() : "0" + date.toString();
    })

    if (statistic[i].date !== dateI.join("-")) {
      i++;
      statistic.splice(i, 0, { user_id: userId, date: dateI, page_views: 0, clicks: 0 });
    }

    if (date[2] !== 1) {
      date[2]--;
    } else if (date[1] !== 1) {
      if (date[1] === 2
        || date[1] === 4
        || date[1] === 6
        || date[1] === 8
        || date[1] === 9
        || date[1] === 11
        || date[1] === 1) {
        date[1] > 1 ? date[1]-- : date[1] = 12;
        date[2] = 31;
      } else if (date[1] === 3) {
        date[1]--;
        date[2] = 28;
      } else {
        date[1]--;
        date[2] = 30;
      }
    } else {
      date[0]--;
      date[1] = 12;
      date[2] = 31;
    }
  }

  const rangeDateForClicks = [];
  const rangeDateForViews = [];
  const clicksDaysVars = [];
  const viewsDaysVars = [];

  for (let i = statistic.length - daysForClicks; i < statistic.length; i++) {
    rangeDateForClicks.push(statistic[i]);
  }

  for (let i = statistic.length - daysForViews; i < statistic.length; i++) {
    rangeDateForViews.push(statistic[i]);
  }

  for (let i = 2; i < statistic.length; i++) {
    clicksDaysVars.push(i + 1);
  }

  for (let i = 2; i < statistic.length; i++) {
    viewsDaysVars.push(i + 1);
  }

  const sheduleClicksPoints = rangeDateForClicks.map((point, index) => {
    if (index === 0) {
      return {x: `45`, y: `${Math.round((260 - (260 / 1000) * rangeDateForClicks[0].clicks) + 20)}`}
    } else if (index === rangeDateForClicks.length - 1) {
      return {
        x: '95%', 
        y: `${Math.round((260 - (260 / 1000) * rangeDateForClicks[rangeDateForClicks.length - 1].clicks) + 20)}`}
    } else {
      return {x: `${Math.round((95 / (daysForClicks - 1) * index))}%`, 
        y: `${Math.round((260 - (260 / 1000) * point.clicks) + 20)}`}
    }
  });

  const sheduleViewsPoints = rangeDateForViews.map((point, index) => {
    if (index === 0) {
      return {x: `45`, y: `${Math.round((260 - (260 / 1000) * rangeDateForViews[0].page_views) + 20)}`}
    } else if (index === rangeDateForViews.length - 1) {
      return {
        x: '95%', 
        y: `${Math.round((260 - (260 / 1000) * rangeDateForViews[rangeDateForViews.length - 1].page_views) + 20)}`}
    } else {
      return {x: `${Math.round((95 / (daysForViews - 1) * index))}%`, 
        y: `${Math.round((260 - (260 / 1000) * point.page_views) + 20)}`}
    }
  });

  const changeDaysForClicks = e => {
    if (!isNaN(e.target.value)) {
      setDaysForClicks(e.target.value)
    }
  }

  const changeDaysForViews = e => {
    if (!isNaN(e.target.value)) {
      setDaysForViews(e.target.value)
    }
  }

  return (
    <article className="users">
      <header className="users__header">
        <h2>AppCo</h2>
      </header>

      <main className="users__main">
        <ul className="users__ul">
          <li>
            <Link to="/" className="users__gray-link">Main page ></Link>
          </li>
          <li>
            <Link to="/table" className="users__gray-link">Users statistic ></Link>
          </li>
          <li>
            <Link to={location.pathname} className="users__blue-link">
              {`${user.first_name} ${user.last_name}`}
            </Link>
          </li>
        </ul>

        <h1 className="users__h1">
          {`${user.first_name} ${user.last_name}`}
        </h1>
        <div className="users__shedule-header">
          <h2 className="users__stats">Clicks</h2>
          <select className="users__select" onChange={e => changeDaysForClicks(e)}>
            <option>days</option>
            {clicksDaysVars.map(day => {
              return (
                <option key={day}>{day}</option>
              )
            })}
          </select>
        </div>
        <svg className="users__svg" width="1172px" height="308px">
          <g fill="#CCCCCC">
            <text x="0" y="20">
              1000
            </text>
          </g>
          <line x1="45" y1="15" x2="100%" y2="15" stroke="#F1F1F1" />
          <g fill="#CCCCCC">
            <text x="5" y="72">
              800
            </text>
          </g>
          <line x1="45" y1="67" x2="100%" y2="77" stroke="#F1F1F1" />
          <g fill="#CCCCCC">
            <text x="5" y="124">
              600
            </text>
          </g>
          <line x1="45" y1="119" x2="100%" y2="119" stroke="#F1F1F1" />
          <g fill="#CCCCCC">
            <text x="5" y="176">
              400
            </text>
          </g>
          <line x1="45" y1="171" x2="100%" y2="171" stroke="#F1F1F1" />
          <g fill="#CCCCCC">
            <text x="5" y="228">
              200
            </text>
          </g>
          <line x1="45" y1="223" x2="100%" y2="223" stroke="#F1F1F1" />
          <g fill="#CCCCCC">
            <text x="25" y="280">
              0
            </text>
          </g>
          <line x1="45" y1="275" x2="100%" y2="275" stroke="#F1F1F1" />

          {rangeDateForClicks.map((data, index, array) => {
            let jsx = (<g key={Math.random()}></g>)
            if (index === 0) {
              jsx = (
                <g fill="#CCCCCC" key={data.date}>
                  <text x="0%" y="306" fontSize="1.5vw">
                    {data.date}
                  </text>
                  <circle cx="45" cy={(260 - (260 / 1000) * array[0].clicks) + 20} r="8" fill="#3A80BA" />
                </g>
              )
            } else if (array.length <= 7) {
              jsx = (
                <g fill="#CCCCCC" key={data.date}>
                  <text
                    x={`${(90 / (daysForClicks - 1) * index)}%`}
                    y="306"
                    fontSize="1.5vw"
                  >
                    {data.date}
                  </text>
                </g>
              )
            } else if (index === array.length - 1) {
              jsx = (
                <g fill="#CCCCCC" key={data.date}>
                  <text x="90%" y="306" fontSize="1.5vw">
                    {data.date}
                  </text>
                </g>
              )
            }
            return jsx;
          })}
          <circle cx="95%" cy={(260 - (260 / 1000) * rangeDateForClicks[rangeDateForClicks.length - 1].clicks) + 20} r="8" fill="#3A80BA" />
          {sheduleClicksPoints.map((points, index, array) => {
            let jsx = (<g key="00"></g>)
            if (index > 0) {
              jsx = (
                <line 
                  key={`${points.x} + ${points.y}`}
                  x1={array[index - 1].x} 
                  y1={array[index - 1].y} 
                  x2={points.x} 
                  y2={points.y} 
                  stroke="#3A80BA" 
                  strokeWidth="5px"
                  strokeLinecap="round"
                />
              );
            }

            return jsx;
          })}
        </svg>

        <div className="users__shedule-header">
          <h2 className="users__stats">Views</h2>
          <select className="users__select" onChange={e => changeDaysForViews(e)}>
            <option>days</option>
            {viewsDaysVars.map(day => {
              return (
                <option key={day}>{day}</option>
              )
            })}
          </select>
        </div>
        <svg className="users__svg" width="1172px" height="308px">
          <g fill="#CCCCCC">
            <text x="0" y="20">
              1000
            </text>
          </g>
          <line x1="45" y1="15" x2="100%" y2="15" stroke="#F1F1F1" />
          <g fill="#CCCCCC">
            <text x="5" y="72">
              800
            </text>
          </g>
          <line x1="45" y1="67" x2="100%" y2="77" stroke="#F1F1F1" />
          <g fill="#CCCCCC">
            <text x="5" y="124">
              600
            </text>
          </g>
          <line x1="45" y1="119" x2="100%" y2="119" stroke="#F1F1F1" />
          <g fill="#CCCCCC">
            <text x="5" y="176">
              400
            </text>
          </g>
          <line x1="45" y1="171" x2="100%" y2="171" stroke="#F1F1F1" />
          <g fill="#CCCCCC">
            <text x="5" y="228">
              200
            </text>
          </g>
          <line x1="45" y1="223" x2="100%" y2="223" stroke="#F1F1F1" />
          <g fill="#CCCCCC">
            <text x="25" y="280">
              0
            </text>
          </g>
          <line x1="45" y1="275" x2="100%" y2="275" stroke="#F1F1F1" />

          {rangeDateForViews.map((data, index, array) => {
            let jsx = (<g key={Math.random()}></g>)
            if (index === 0) {
              jsx = (
                <g fill="#CCCCCC" key={data.date}>
                  <text x="0%" y="306" fontSize="1.5vw">
                    {data.date}
                  </text>
                  <circle 
                    cx="45" 
                    cy={(260 - (260 / 1000) * rangeDateForViews[0].page_views) 
                      + 20} r="8" fill="#3A80BA" 
                  />
                </g>
              )
            } else if (array.length <= 7) {
              jsx = (
                <g fill="#CCCCCC" key={data.date}>
                  <text
                    x={`${(90 / (daysForViews - 1) * index)}%`}
                    y="306"
                    fontSize="1.5vw"
                  >
                    {data.date}
                  </text>
                </g>
              )
            } else if (index === array.length - 1) {
              jsx = (
                <g fill="#CCCCCC" key={data.date}>
                  <text x="90%" y="306" fontSize="1.5vw">
                    {data.date}
                  </text>
                </g>
              )
            }

            return jsx;
          })}
          <circle 
            cx="95%" 
            cy={(260 - (260 / 1000) * rangeDateForViews[rangeDateForViews.length 
              - 1].page_views) + 20} r="8" fill="#3A80BA" 
          />
          {sheduleViewsPoints.map((points, index, array) => {
            let jsx = (<g key="0000"></g>)
            if (index > 0) {
              jsx = (
                <line 
                  key={`${points.x} + ${points.y}`}
                  x1={array[index - 1].x} 
                  y1={array[index - 1].y} 
                  x2={points.x} 
                  y2={points.y} 
                  stroke="#3A80BA" 
                  strokeWidth="5px"
                  strokeLinecap="round"
                />
              );
            }

            return jsx;
          })}
        </svg>
      </main>

      <footer className="users__footer">
        <p className="users__bottom-AppCo">AppCo</p>
        <p>All rights reserved by ThemeTags</p>
        <p>Copyrights © 2019.</p>
      </footer>
    </article>
  )
}

export default UserPage;
