export const ProposalItem = ({description, votes, proposalId}) => {
  return (
      <fieldset className="my-6 p-2 border rounded-lg w-full">
        <legend className="text-lg px-1">{description}</legend>
          <div className="mt-2 flex ">
            {votes.map((vote) => (
              <div className="flex items-center mr-4 mb-4" key={vote.type}>
                <input
                  type="radio"
                  className="sr-only peer"
                  id={proposalId + "-" + vote.type}
                  name={proposalId}
                  value={vote.type}
                  defaultChecked={vote.type === 2}
                />
                <label className="flex px-4 py-2 bg-none border border-none rounded-lg cursor-pointer focus:outline-none hover:bg-orange-900 hover:text-orange-200 peer-checked:ring-orange-800 peer-checked:text-orange-200 peer-checked:bg-orange-900  peer-checked:border-transparent" htmlFor={proposalId + "-" + vote.type}>
                  {vote.label}
                </label>
              </div>
            ))}
          </div>
      </fieldset>

  )
}
