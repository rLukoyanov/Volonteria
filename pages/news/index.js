import { useState, useEffect } from "react";
import axios from "axios";

import NewsList from "../../components/News/NewsList/NewsList";
import Preloader from "../../components/Preloader";

import styles from "../../styles/Home.module.css";

export default function News() {
  const [news, setNews] = useState();
  useEffect(() => {
    const getNews = async () => {
      const response = await axios.get("/api/getNews");
      setNews(response.data);
    };

    getNews();
  }, []);

  return (
    <div className={styles.container}>
      {Array.isArray(news) ? <NewsList news={news} /> : <Preloader />}
    </div>
  );
}