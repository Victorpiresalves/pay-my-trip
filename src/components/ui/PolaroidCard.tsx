import Image from 'next/image';
import SoccerBall from '@/components/icons/SoccerBall';

interface PolaroidCardProps {
  caption?: string;
  rotation?: number;
  animationClass?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function PolaroidCard({
  caption = '⚽ Canada 2026',
  rotation = 0,
  animationClass = '',
  imageSrc,
  imageAlt = '',
}: PolaroidCardProps) {
  return (
    <div
      className={`inline-block shadow-polaroid ${animationClass}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className="bg-polaroid-white p-3 pb-8" style={{ width: 200 }}>
        {/* Image area */}
        <div
          className="w-full relative overflow-hidden"
          style={{ height: 180 }}
        >
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="200px"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #1a2235 0%, #0a0e1a 100%)' }}
            >
              <SoccerBall size={64} className="opacity-30 text-pitch-light" />
            </div>
          )}
        </div>
        {/* Caption */}
        <p
          className="mt-3 text-center text-xs tracking-wide truncate"
          style={{ fontFamily: 'system-ui', color: '#444' }}
        >
          {caption}
        </p>
      </div>
    </div>
  );
}
