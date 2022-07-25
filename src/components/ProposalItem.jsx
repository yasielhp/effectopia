export const ProposalItem = ({proposal}) => {
  return (
      <fieldset className="my-6 p-2 border rounded-lg w-full" key={proposal.proposalId}>
        <legend className="text-lg px-1">{proposal.description}</legend>
          <div className="mt-2 flex ">
            {proposal.votes.map(({ type, label }) => (
              <div className="flex items-center mr-4 mb-4" key={type}>
                <input
                  type="radio"
                  className="sr-only peer"
                  id={proposal.proposalId + "-" + type}
                  name={proposal.proposalId}
                  value={type}
                  defaultChecked={type === 2}
                />
                <label className="flex px-4 py-2 bg-none border border-none rounded-lg cursor-pointer focus:outline-none hover:bg-orange-900 hover:text-orange-200 peer-checked:ring-orange-800 peer-checked:text-orange-200 peer-checked:bg-orange-900  peer-checked:border-transparent" htmlFor={proposal.proposalId + "-" + type}>
                  {label}
                </label>
              </div>
            ))}
          </div>
      </fieldset>

  )
}
