import { videos } from '../constants';
import { useSideBarContext } from '../context/SideBarContext';
import { VideoItem } from './VideoItem';

export const VideoGrid = () => {
  const { isLargeOpen } = useSideBarContext();

  return (
    <section
      className={`${isLargeOpen ? 'max-lg:ml-20 lg:ml-56' : 'ml-20'} grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-x-3 gap-y-9 pb-4`}
    >
      {videos.map((item) => (
        <VideoItem key={item.id} video={item} />
      ))}
    </section>
  );
};
