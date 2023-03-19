import Card from './Card/Card';
import { useState, useEffect } from 'react';
import { Section } from './App.styled';

import storage from 'helpers/storage';

const USER_INITIAL_DATA = [
  {
    id: 1,
    user: 'Kate Roshe Pisk',
    tweets: 777,
    followers: 100500,

    pressed: false,
  },
  {
    id: 2,
    user: 'Elon Reeve Musk',
    tweets: 777,
    followers: 120111,

    pressed: false,
  },
  {
    id: 3,
    user: 'Irina Data Musk',
    tweets: 777,
    followers: 100555,
    pressed: false,
  },
];
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
