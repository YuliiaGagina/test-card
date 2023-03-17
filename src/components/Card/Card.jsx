import React, { useEffect, useState } from 'react';
import createNewNumber from 'helpers/mathematicOperations';

import storage from 'helpers/storage';
const Card = tittle => {
  const [pressed, setPressed] = useState(() => storage.load('pressed-button'));
  const textForButton = pressed ? 'FOLLOWING' : 'FOLLOWER';
  const number = createNewNumber('100500');
  const newAmountOfFollowers = pressed ? number.replace('500', '501') : number;
  useEffect(() => {
    storage.save('pressed-button', pressed);
  }, [pressed]);
  return (
    <div>
      <p>777 TWEETS</p>
      <p>{newAmountOfFollowers} FOLLOWERS</p>
      <button type="button" onClick={() => setPressed(!pressed)}>
        {textForButton}
      </button>
    </div>
  );
};

export default Card;
