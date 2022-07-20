import { Routes, Route } from "react-router-dom";
import { CommunityPage, HomePage, MemberPage, VotePages } from "../pages";
import { Navbar, Footer } from '../components';
export const AppRouter = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="community" element={<CommunityPage />} />
        <Route path="member" element={<MemberPage />} />
        <Route path="vote" element={<VotePages />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer/>
    </>
  )
}
