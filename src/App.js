import { Route, Routes } from "react-router-dom";
import Allmeetups from "./Pages/AllMeetups";
import Favourites from "./Pages/Favourites";
import Newmeetups from "./Pages/NewMeentups";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/Allmeetups" element={<Allmeetups />} />
        <Route path="/newMeetups" element={<Newmeetups />} />
        <Route path="/Favourites" element={<Favourites />} />
      </Routes>
    </Layout>
  );
}

export default App;
