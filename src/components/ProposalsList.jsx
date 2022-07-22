
import { ProposalItem } from './ProposalItem';

const proposals = [
  {
    title: 'Do you like this platform?',
    option: ['👍', '👎',],
  },
  {
    title: 'Which network would you like us to use as the final network of the platform?',
    option: ['Ethereum', 'Polygon', 'Fantom', 'Avalanche'],
  },
  {
    title: 'Would you add any more functionality to the platform?',
    option: ['Yes', 'No'],
  }
]
export const ProposalsList = () => {
  return (
    <div className=''>
      {
        proposals.map(proposal => (
          <ProposalItem key={proposal.title} title={proposal.title} option={proposal.option} />
        ))
        }
    </div>
  )
}
