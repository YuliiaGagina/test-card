import Card from './Card/Card';
import { useState, useEffect } from 'react';

import { Section } from './App.styled';

import storage from 'helpers/storage';
import USER_INITIAL_DATA from '../users.json';

export const App = () => {
  const [users, setUsers] = useState(
    () => storage.load('users') || USER_INITIAL_DATA
  );

  useEffect(() => {
    storage.save('users', users);
    console.log('USERS SET');
  }, [users]);

  function onUserFollowingChanged(user) {
    const followersDeltaValue = user.pressed ? -1 : 1;
    setUsers(
      users.map(item =>
        item.id === user.id
          ? {
              ...item,
              pressed: !item.pressed,
              followers: item.followers + followersDeltaValue,
            }
          : item
      )
    );
  }
  return (
    <Section>
      {users.map(user => (
        <Card
          key={user.id}
          user={user}
          onUserFollowingChanged={onUserFollowingChanged}
        />
      ))}
    </Section>
  );
};
