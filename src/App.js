import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Sign from "./Pages/Sign";

import NotFoundPage from "./Pages/NotFoundPage";
import Dashboard from "./Pages/Dashboard";
import Tasks from "./Pages/Tasks";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/auth"} />} />
      <Route path="/auth" element={<Sign />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/buylist" element={<Dashboard />} />
      <Route path="/calender" element={<Dashboard />} />
      <Route path="/messages" element={<Dashboard />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
