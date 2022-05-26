/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable sonarjs/no-identical-functions */
import { observer } from 'mobx-react-lite';
import React from 'react';
import store from '../store/Store';

const Async = observer(() => {
  const {
    users,
    currentUser,
    getUsersData,
    getCurrentUser,
    deleteCurrentUser,
    updateCurrentUser,
  } = store;

  const number = Math.floor(Math.random() * 10 + 1);

  return (
    <div>
      <div style={{ borderTop: '1px solid gray' }}>
        <p>Get All Users Async</p>
        {users &&
          users.map((elem) => (
            <div className='usersInfo' key={elem.id}>
              <p>{elem.name}</p>
              <div className='buttonBlock'>
                <button onClick={() => deleteCurrentUser(elem.id)}>
                  delete {elem.id}
                </button>
                <button
                  onClick={() =>
                    updateCurrentUser(elem.id, { name: `${elem.name} !` })
                  }
                >
                  update {elem.id}
                </button>
              </div>
            </div>
          ))}
        <button onClick={getUsersData}>getUsers</button>
      </div>
      <div style={{ borderTop: '1px solid gray', marginTop: '20px' }}>
        <p>Get Random User</p>
        {currentUser &&
          currentUser.map((elem) => (
            <div key={elem.id}>
              <p>{elem.name}</p>
            </div>
          ))}
        <button onClick={() => getCurrentUser(number)}>getUsers</button>
      </div>
    </div>
  );
});

export default Async;
