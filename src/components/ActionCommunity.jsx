import { ItemAction } from "./"

const lists = [
  {
    title: "Community members",
    description: "Find and interact with any member of the community",
    icon: "img/community.svg",
    textButton: "View members",
    to: "/users"
  },
  {
    title: "Cast my vote",
    description: "Vote and decide on the future of the community together ",
    icon: "img/vote.svg",
    textButton: "Vote now",
    to: "/vote"
  },
  {
    title: "Publish content",
    description: "Post any content so that other members can interact with it",
    icon: "img/publish.svg",
    textButton: "Publish",
    to: "/publish"
  },
  {
    title: "Chat with members",
    description: "Connect with any member of the community anonymously.",
    icon:"img/chat.svg",
    textButton: "Chat now",
    to: "/chat"
  }

]

export const ActionCommunity = () => {
  return (
    <div className='flex flex-wrap -mx-3 overflow-hidden sm:-mx-3 md:-mx-3 lg:-mx-3 xl:-mx-3'>
      {
        lists.map((item) =>
          <ItemAction
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon}
            textButton={item.textButton}
            to={item.to}
          />
      )
      }
    </div>
  )
}
