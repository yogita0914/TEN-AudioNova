import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Search } from "./pages/Search";
import Library from "./pages/Library";
import Profile from "./pages/Profile";
import ArtistDetails from "./pages/ArtistDetails";
import PlayList from "./pages/PlayList";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/artist" element={<ArtistDetails />} />
        <Route path="/playlist" element={<PlayList />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
