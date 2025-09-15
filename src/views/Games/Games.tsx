'use client';
import Card from '@/components/card';
import CardCtn from '@/components/cards-ctn';
import { get } from '@/utlis/fetcher';
import { useEffect, useState } from 'react';
import './Games.scss';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const Games = () => {
  const [data, setData] = useState<Array<any> | null>(null);
  const [isData, setIsData] = useState<boolean | undefined>(false);
  const [skeleton, setSkeleton] = useState<boolean | undefined>(true);
  const [page, setPage] = useState<number>(1);
  const apiUrl = import.meta.env.PUBLIC_API_URL || '';
  const itemsPerPage = 20;

  const getSkeletons = () => {
    if (isData) return null;

    setTimeout(() => {
      setSkeleton(false);
    }, 15000);

    if (!skeleton && isData) return <p>No hay datos</p>;

    return Array.from({ length: itemsPerPage }).map((_, index) => <Card key={`skeleton-card-${index}`} skeleton={skeleton} />);
  };

  const getCards = () => {
    if (!isData) return getSkeletons();
    return data?.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((card) => <Card key={card.id} {...card} />);
  };

  const handlePrevious = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (data && page < Math.ceil(data.length / itemsPerPage)) setPage((prev) => prev + 1);
  };

  const getPagination = () => {
    if (!isData) return null;

    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={handlePrevious} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>{page}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext onClick={handleNext} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
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
      {getPagination()}
    </div>
  );
};

export default Games;
