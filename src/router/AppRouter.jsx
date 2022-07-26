import { Routes, Route } from "react-router-dom";
import { HomePage, MembershipPage, CommunityPage,MemberPage, VotePage, PublishPage, ChatPage, ErrorPage } from "../pages";
import { Navbar, Footer } from '../components';
export const AppRouter = () => {
  return (
    <>
      <Navbar/>
      <main className="flex flex-col items-center justify-center w-full h-full px-24 py-4">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="membership" element={<MembershipPage />} />
        <Route path="community" element={<CommunityPage />} />
        <Route path="member" element={<MemberPage />} />
        <Route path="vote" element={<VotePage />} />
        <Route path="publish" element={<PublishPage />} />
        <Route path="chat" element={<ChatPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </main>
      <Footer/>
    </>
  )
}
