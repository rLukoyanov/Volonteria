import React, { useContext, useEffect } from 'react';
import axios from 'axios';

import AuthContext from '../../../store/auth-context';

import styles from '../../../components/News/endOfevent.module.scss';

export default function endOfEvent({ eventId, hostName }) {
  const { userData } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = axios.post(`https://${hostName}/api/news/endOnEvent`, {
          newsId: Number(eventId),
          user_id: userData.id,
        });
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  return (
    <div className={styles.thanks}>
      <span>Спасибо за участие!</span>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { eventId } = context.params;
  const { req } = context;

  return {
    props: {
      eventId,
      hostName: req.headers.host,
    },
  };
};
