import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import PostPage from "./components/post/PostPage"
import PostForm from "./components/write-post/PostForm"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/writepost" element={<PostForm />} />
        <Route path="/" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter