import React, { useEffect, useState } from 'react';
import './style.css';
import { LoadEventById } from '../../../functions/db';
import { useParams } from 'react-router-dom';

export const Detail = () => {
  const [event, setEvent] = useState([]);

  const { id } = useParams();

  const stringId = id.toString();
  console.log(stringId);

  useEffect(() => {
    LoadEventById(stringId).then((event) => setEvent(event));
  }, []);

  return (
    <>
      <p>{event.city_event}</p>
      <p>Já jsem detail</p>
      <p>{id}</p>
    </>
  );
};
