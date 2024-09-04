import { Route, Routes } from "react-router-dom";
import Home from "./pages/user/home/Home";
import Test from "./pages/user/Test";

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Test />} />
    </Routes>
  )
}
