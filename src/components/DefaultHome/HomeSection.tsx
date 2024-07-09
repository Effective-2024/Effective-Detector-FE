import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface HomeSectionProps {
  content: ReactNode;
  buttonText: string;
  buttonUrl: string;
  imageSource: string;
  imagePosition?: 'right' | 'left';
}

const HomeSection = ({
  content,
  buttonText,
  buttonUrl,
  imageSource,
  imagePosition,
}: HomeSectionProps) => {
  return (
    <div
      className={`flex ${imagePosition === 'left' && 'flex-row-reverse'} items-center justify-between`}
    >
      <div className="flex flex-col items-center gap-8 text-center">
        {content}
        <Link
          to={buttonUrl}
          className="w-[215px] rounded border border-comment py-3 text-center font-bold"
        >
          {buttonText}
        </Link>
      </div>
      <img src={imageSource} className="w-[300px] rounded" />
    </div>
  );
};

export default HomeSection;
