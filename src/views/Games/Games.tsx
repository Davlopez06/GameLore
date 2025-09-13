'use client';
import Card from '@/components/card';
import CardCtn from '@/components/cards-ctn';
import { get } from '@/utlis/fetcher';
import { useEffect, useState } from 'react';
import './Games.scss';

const Games = () => {
  const [data, setData] = useState<Array<any> | null>(null);
  const [isData, setIsData] = useState<boolean | undefined>(false);
  const [skeleton, setSkeleton] = useState<boolean | undefined>(true);
  const [page, setPage] = useState<number>(1);
  const apiUrl = import.meta.env.PUBLIC_API_URL || '';

  const getSkeletons = () => {
    if (isData) return null;

    setTimeout(() => {
      setSkeleton(false);
    }, 15000);

    if (!skeleton && isData) return <p>No hay datos</p>;

    return Array.from({ length: 20 }).map((_, index) => <Card key={`skeleton-card-${index}`} skeleton={skeleton} />);
  };

  const getCards = () => {
    if (!isData) return getSkeletons();
    return data?.slice((page - 1) * 20, page * 20).map((card) => <Card key={card.id} {...card} />);
  };

  useEffect(() => {
    get(`${apiUrl}/games`)
      .then(({ games = [] }) => {
        setData(() => games);
      })
      .catch((err) => console.log('err', err));
  }, []);

  useEffect(() => {
    if (!data || (Array.isArray(data) && !data?.length)) {
      setIsData(false);
    } else {
      setIsData(true);
    }
  }, [data]);

  return (
    <div className="w-full px-4">
      <p className="games-title text-4xl mb-3">Games</p>
      <CardCtn>{getCards()}</CardCtn>
    </div>
  );
};

export default Games;
