import React from 'react';

import { createNewNumber } from 'helpers/mathematicOperations';

import { WrapOfCard, UpperImg, UserImg, Text, Logo } from './Card.styled';
import styles from './Card.module.css';

import upper from '../../images/upper.png';
import userPhoto from '../../images/user.png';
import logo from '../../images/logo.png';

const Card = ({ user, onUserFollowingChanged }) => {
  return (
    <section>
      <WrapOfCard key={user.id}>
        <Logo src={logo} alt="logo" />
        <UpperImg src={upper} width="308" alt="upper-images" />
        <UserImg src={userPhoto} width="380" alt="user-img" />

        <Text>{user.user}</Text>

        <Text>{user.tweets} TWEETS</Text>
        <Text>{createNewNumber(String(user.followers))} FOLLOWERS</Text>
        <button
          className={user.pressed === true ? styles.following : styles.follow}
          type="button"
          onClick={() => {
            onUserFollowingChanged(user);
          }}
        >
          {user.pressed === true ? 'FOLLOWING' : 'FOLLOWER'}
        </button>
      </WrapOfCard>
    </section>
  );
};

export default Card;
