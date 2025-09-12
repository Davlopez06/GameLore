import { Skeleton } from '../ui/skeleton';
import { Card as CardUI } from '@/components/ui/card';

interface Card {
  name?: string | undefined;
  description?: string | undefined;
  skeleton?: boolean | undefined;
  background_image?: string | undefined;
  rating?: number | undefined;
  platforms?: Array<any> | undefined;
}

interface Platform {
  platform?: {
    name?: string;
  };
}

const Card = ({ name = '', background_image = '', rating = 0, platforms = [], skeleton = false }: Card) => {
  const getBackgroundRating = () => {
    if (rating >= 4) return 'bg-green-700';
    if (rating >= 3.5) return 'bg-green-500';
    if (rating >= 3) return 'bg-orange-400';
    if (rating >= 2) return 'bg-orange-700';
    return 'bg-red-500';
  };

  const getPlatformsNames = (platform: Platform, index: number) => {
    const { platform: { name } = {} } = platform || {};
    return <span key={`platform-${index}`} className='px-[4px] py-[2px] border rounded-[6px]'>{name}</span>;
  };

  const getPlataforms = () => {
    const platformsNames = platforms?.map(getPlatformsNames);
    return <div className='flex gap-[4px] flex-wrap px-[16px]'>{platformsNames}</div>;
  };
  if (skeleton)
    return (
      <CardUI className="flex flex-col space-y-3 py-0 w-[328px] gap-[6px]">
        <Skeleton className="h-[180px] w-full rounded-b-none" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      </CardUI>
    );

  return (
    <CardUI className="py-0 w-[328px] overflow-hidden gap-[6px]">
      <img className="h-[180px] object-cover" src={background_image} alt={`image-${name}`} />
      <div className="flex gap-[6px] items-center justify-between px-[16px]">
        <p className="text-[22px] line-clamp-1">{name}</p>
        <p className={`px-[6px] py-[3px] rounded-[6px] ${getBackgroundRating()}`}>{rating}</p>
      </div>
      {getPlataforms()}
    </CardUI>
  );
};

export default Card;
