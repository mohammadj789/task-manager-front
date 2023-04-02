import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Sign from "./Pages/Sign";

import NotFoundPage from "./Pages/NotFoundPage";
import Dashboard from "./Pages/Dashboard";
import TasksPage from "./Pages/TasksPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/auth"} />} />
      <Route path="/auth" element={<Sign />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/tasks" element={<TasksPage />} />
      <Route path="/buylist" />
      <Route path="/calender" />
      <Route path="/friends" />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
