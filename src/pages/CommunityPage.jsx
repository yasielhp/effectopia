import { ActionCommunity } from "../components"

export const CommunityPage = () => {
  return (
    <>
      <section className="flex flex-col h-full py-10">
        <h1 className="text-5xl font-semibold mb-7 w-4/5 text-left">Welcome to Community</h1>
        <p className="w-11/12 text-lg font-normal mb-7">Effectopia is a revolutionary virtual community; a real-time peer-to-peer collaboration platform for teachers and students powered by the #MASSIVEADOPTION movement. Join the community and join us in our mission to provide diversity, individuality and freedom like never before.</p>
      </section>
      <section className="flex flex-col h-full">
        <h2 className="text-2xl font-semibold mb-2 w-full text-center">What do you want to do in the community?</h2>
        <p className="w-full text-base font-normal mb-7 text-center text-neutral-400">Select the action you want to perform in the community</p>
        <ActionCommunity/>
      </section>
    </>
  )
}
