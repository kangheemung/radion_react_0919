import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // 부트스트랩 CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // 부트스트랩 JS + Popper.js
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HomePage from "./pages/Homepage/HomePage";
import AppLayout from "./layout/AppLayout";
import LoginPage from "./pages/LoginPage/LoginPage";
import AlbumDetailPage from "./pages/AlbumDetailPage/AlbumDetailPage";
import TrackDetailPage from "./pages/TrackDetailPage/TrackDetailPage";
//import MusicPlayer from "./common/MusicPlayer/MusicPlayer";
import { UserContextProvider } from "./context/UserContext";
import PlayListPage from "./pages/PlayListPage/PlayListPage.js";
import TrackListPage from "./pages/TrackListPage/TrackListPage.js";
import ArtistDetailPage from "./pages/ArtistDetailPage/ArtistDetailPage.js";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />{" "}
            {/* <Route path="music" element={<MusicPlayer/>}/> */}
            <Route
              path="playlist"
              /* 로그인 여부에 따라 페이지 렌더링 */
              // element={!isAuthenticated ? <LoginPage /> : <PlayListPage />
              element={<PlayListPage />}
            />
            <Route path="list">
              <Route path=":id" element={<TrackListPage />} />
            </Route>
            <Route
              path="login"
              /* 로그인 여부에 따라 페이지 렌더링 */
              element={!isAuthenticated ? <LoginPage /> : <Navigate to="/" />}
            />
            <Route path="albums">
              <Route
                path=":id"
                /* 로그인 여부에 따라 페이지 렌더링 */
                // element={!isAuthenticated ? <LoginPage /> : <AlbumDetailPage />
                element={<AlbumDetailPage />}
              />
            </Route>
            <Route path="tracks">
              <Route
                path=":id"
                /* 로그인 여부에 따라 페이지 렌더링 */
                // element={!isAuthenticated ? <LoginPage/> : <TrackDetailPage/>
                element={<TrackDetailPage />}
              />
            </Route>
            <Route path="artists">
              <Route path=":id" element={<ArtistDetailPage />} />
            </Route>
          </Route>
          {/* 오류 화면 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;