import { Link } from 'react-router-dom'
import classnames from 'classnames'
import AvatarDisplay from './AvatarDisplay'
import StatusDisplay from './StatusDisplay'
import ProgressDisplay from './ProgressDisplay'
import PriorityDisplay from './PriorityDisplay'
import DeleteBlock from './DeleteBlock'

const TicketCard = ({ color, ticket }) => {

    return (
        <div className="flex w-full">
            <Link to={`/ticket/${ticket.documentId}`} id="link" className="flex w-full">
                <div className={classnames("w-4 m-1 p-2", {color})}></div>
                <h3 className="m-1 p-5 w-full flex items-center bg-gray-400">{ticket.title}</h3>
                <AvatarDisplay ticket={ticket}/>
                <StatusDisplay />
                <ProgressDisplay />
                <PriorityDisplay />
            </Link>
            <DeleteBlock/>
        </div>
    )
}

export default TicketCard