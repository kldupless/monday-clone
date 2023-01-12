import { Link } from 'react-router-dom'
import classnames from 'classnames'
import AvatarDisplay from './AvatarDisplay'
import StatusDisplay from './StatusDisplay'
import ProgressDisplay from './ProgressDisplay'
import PriorityDisplay from './PriorityDisplay'
import DeleteBlock from './DeleteBlock'

const TicketCard = ({ ticket }) => {
    const ticketColorClass = classnames(
        "w-4 m-1 p-2",
        ticket.color
    )
    return (
        <div className="flex w-full">
            <Link to={`/ticket/${ticket.documentId}`} id="link" className="flex w-full">
                <div className={ticketColorClass}></div>
                <h3 className="m-1 p-5 w-full flex items-center bg-gray-100">{ticket.title}</h3>
                <AvatarDisplay ticket={ticket}/>
                <StatusDisplay status={ticket.status}/>
                <ProgressDisplay progress={ticket.progress}/>
                <PriorityDisplay priority={ticket.priority}/>
            </Link>
            <DeleteBlock/>
        </div>
    )
}

export default TicketCard