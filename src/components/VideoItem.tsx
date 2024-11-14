import { useEffect, useRef, useState } from 'react';
import { VideoType } from '../constants/types';
import { formatDuration } from '../utility/formatDuration';
import { formatTimeAgo } from '../utility/formatTimeAgo';

const VIEW_FORMATTER = new Intl.NumberFormat(undefined, {
  notation: 'compact',
});

type Props = {
  video: VideoType;
};

export const VideoItem = ({ video }: Props) => {
  const [IsVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (IsVideoPlaying) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [IsVideoPlaying]);

  return (
    <div
      onMouseEnter={() => setIsVideoPlaying(true)}
      onMouseLeave={() => setIsVideoPlaying(false)}
    >
      <a href={`/watch?v=${video.id}`} className="aspect-video relative">
        <img src={video.thumbnailUrl} className="rounded-md" />
        <span className="absolute bottom-1 right-1 text-xs text-secondary bg-secondary-dark px-1.5 rounded">
          {formatDuration(video.duration)}
        </span>

        <video
          ref={videoRef}
          src={video.videoUrl}
          muted
          playsInline
          className={`absolute z-10 inset-0 object-cover rounded-md ${IsVideoPlaying ? 'opacity-100 delay-200' : 'opacity-0'}`}
        />
      </a>

      <div className="mt-2 flex gap-3">
        <a href={`/@${video.channel.id}`}>
          <img
            src={video.channel.profileUrl}
            alt="profile-img"
            className="size-7 rounded-full"
          />
        </a>

        <span className="flex flex-col">
          <a href={`/watch?v=${video.id}`} className="font-semibold">
            {video.title}
          </a>
          <a
            href={`/@${video.channel.id}`}
            className="text-xs text-secondary-text"
          >
            {video.channel.name}
          </a>
          <p className="text-xs text-secondary-text">
            {VIEW_FORMATTER.format(video.views)} Views •{' '}
            {formatTimeAgo(video.postedAt)}
          </p>
        </span>
      </div>
    </div>
  );
};
