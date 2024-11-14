import { Categories, VideoGrid } from './components';
import { Header, SideBar } from './layout';

function App() {
  return (
    <main className="px-4">
      <div className="sticky top-0 z-20 mb-2 bg-white">
        <Header />
        <Categories />
      </div>

      <VideoGrid />
      <SideBar />
    </main>
  );
}

export default App;
