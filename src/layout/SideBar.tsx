import {
  LargeSideBar,
  LargeSideBarItem,
  LeftTopNav,
  SmallSideBar,
} from '../components';
import { largeSidebarIcons, smallSidebarIcons } from '../constants';
import { useSideBarContext } from '../context/SideBarContext';

export const SideBar = () => {
  const { isSmallOpen, isLargeOpen, close } = useSideBarContext();

  return (
    <>
      <aside
        className={`fixed top-[50px] left-1 z-50 w-16 overflow-y-auto scrollbar-hidden h-screen flex flex-col items-center ${isLargeOpen ? 'lg:hidden' : 'lg:flex'} ${isSmallOpen ? 'hidden' : 'flex'}`}
      >
        {smallSidebarIcons.map((item) => (
          <SmallSideBar
            key={item.id}
            url={item.url}
            Icon={item.Icon}
            title={item.title}
          />
        ))}
      </aside>

      {isSmallOpen && (
        <div
          onClick={close}
          className="lg:hidden fixed z-40 inset-0 bg-secondary-dark opacity-50"
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 w-52 bg-white flex-col h-screen ${isLargeOpen ? 'lg:flex' : 'lg:hidden'} ${isSmallOpen ? 'flex' : 'hidden'}`}
      >
        <div className="pb-6 pl-5 pt-2">
          <LeftTopNav fullSearchWidth={false} />
        </div>

        <div
          className={`pl-3 pr-2 pb-8 flex flex-col gap-1 w-full overflow-y-auto scrollbar-hidden`}
        >
          {largeSidebarIcons.map((icon) => (
            <div key={icon.id} className="flex flex-col gap-1">
              <LargeSideBar title={icon.header} itemCount={icon.itemCount}>
                {icon.links.map((item) => (
                  <LargeSideBarItem
                    key={item.id}
                    url={item.url}
                    title={item.title}
                    isActive={item.isActive}
                    IconOrImgUrl={item.IconOrImgUrl}
                  />
                ))}
              </LargeSideBar>
              {largeSidebarIcons.length > icon.id && <hr />}
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};

/* 
<aside
        className={`fixed top-16 z-50 w-44 overflow-y-auto scrollbar-hidden bg-orange-200 flex-col gap-1 max-h-[90vh] pb-8 pr-3 ${isLargeOpen ? 'lg:flex' : 'lg:hidden'} ${isSmallOpen ? 'flex' : 'hidden'}`}
      >
        <nav className="">
          {largeSidebarIcons.map((icon) => (
            <>
              <LargeSideBar
                key={icon.id}
                title={icon.header}
                itemCount={icon.itemCount}
              >
                {icon.links.map((item) => (
                  <LargeSideBarItem
                    key={item.id}
                    url={item.url}
                    title={item.title}
                    isActive={item.isActive}
                    IconOrImgUrl={item.IconOrImgUrl}
                  />
                ))}
              </LargeSideBar>
              {largeSidebarIcons.length > icon.id && <hr />}
            </>
          ))}
        </nav>
      </aside>
*/
