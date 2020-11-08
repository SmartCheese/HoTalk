import React, { useState, useEffect } from 'react';
import './App.css';
import customAxios from './customAxios';

import Login from './pages/Login';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <nav>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/login">로그인</Link>
            </li>
            <li>
              <Link to="/about">소개</Link>
            </li>
            <li>
              <Link to="/users">사용자</Link>
            </li>
          </ul>
        </nav> */}

        {/* <Switch>는 하위 <Route>들을 살펴보고 현재 URL과 일치하는 첫 번째 경로를 렌더링합니다. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  // IP주소 변수 선언
  // const [ip, setIp] = useState('');

  // // IP주소 값을 설정합니다.
  // function callback(data) {
  //   setIp(data);
  // }

  // // 첫번째 렌더링을 다 마친 후 실행합니다.
  // useEffect(
  //   () => {
  //     // 클라이언트의 IP주소를 알아내는 백엔드의 함수를 호출합니다.
  //     customAxios('/ip', callback);
  //   }, []
  // );

  return (
    <div>
      <header className="App-header">
        <h1 className="title_hoTalk">HoTalk</h1>
        <div className="Login-frame">
          <table>
            <tbody>
              <tr>
                <td>
                  아이디
                </td>
                <td>
                  <input>

                  </input>
                </td>
              </tr>
              <tr>
                <td>
                  비밀번호
                </td>
                <td>
                  <input>

                  </input>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </header>
    </div>
    
  );
}

function About() {
  return (
    <div>
      <hr />
      <h2>소개 페이지</h2>
    </div>
  );
}

function Users() {
  return (
    <div>
      <hr />
      <h2>사용자 페이지</h2>
    </div>
  );
}

export default App;