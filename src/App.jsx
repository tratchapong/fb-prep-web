import Header from "./components/Header";
import PostContainer from "./components/PostContainer";
import SidebarContact from "./components/SidebarContact";
import SidebarMenu from "./components/SideBarMenu";


import useUserStore from './stores/userStore'

function App() {

  return (
    <div className="min-h-screen">
      <Header />
      <main className="relative flex bg-gray-100 border pt-14">
        {/* Lefe Sidebar : Menu */}
        <SidebarMenu />
        {/* Posts Area */}
        <PostContainer />
        {/* Right Sidebar : Contacts */}
        <SidebarContact />
      </main>
    </div>
  );
}

export default App;
