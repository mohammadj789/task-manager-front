import { Route, Routes, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";

const Sign = lazy(() => import("./Pages/Sign"));
const NotFoundPage = lazy(() => import("./Pages/NotFoundPage"));
const Dashboard = lazy(() => import("./Pages/Dashboard"));
const TasksPage = lazy(() => import("./Pages/TasksPage"));
const CalenderPage = lazy(() => import("./Pages/CalenderPage"));
const FriendsPage = lazy(() => import("./Pages/FriendsPage"));
const SettingPage = lazy(() => import("./Pages/SettingPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/auth"} />} />
      <Route
        path="/auth"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Sign />
          </Suspense>
        }
      />
      <Route
        path="/dashboard"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Dashboard />
          </Suspense>
        }
      />
      <Route
        path="/tasks"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <TasksPage />
          </Suspense>
        }
      />

      <Route
        path="/calender"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <CalenderPage />
          </Suspense>
        }
      />
      <Route
        path="/friends"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <FriendsPage />
          </Suspense>
        }
      />
      <Route
        path="setting"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <SettingPage></SettingPage>
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <NotFoundPage />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
