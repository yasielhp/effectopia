import { Button } from "./"
export const ProposalItem = ({title,option }) => {
  return (
    <form>
    <fieldset className="my-6 p-2 border rounded-lg w-full">
      <legend className="text-lg px-1">{title}</legend>
      <div className="mt-2 flex ">
      {
        option.map(option => (
          <div className="flex items-center mr-4 mb-4">
            <input className="sr-only peer" type="radio" id={option} name="radio" value={option} />
            <label className="flex px-4 py-2 bg-none border border-none rounded-lg cursor-pointer focus:outline-none hover:bg-orange-900 hover:text-orange-200 peer-checked:ring-orange-800 peer-checked:text-orange-200 peer-checked:bg-orange-900  peer-checked:border-transparent" for={option}>
              {option}</label>
          </div>
        ))
      }
      </div>
      <Button title="Vote" onClick={""}>Vote</Button>
      </fieldset>
    </form>
  )
}
