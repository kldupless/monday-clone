import { ReactComponent as Delete } from '../images/icon-close.svg'
const DeleteBlock = () => {

    const deleteTicket = () => {
        console.log('Ticket deleted')
    }

    return (
        <div className="m-1 p-3 flex items-center justify-center bg-gray-100">
            <div className="w-5 h-5 flex items-center justify-center" onClick={deleteTicket}>
                <Delete className="fill-red-500"/>
            </div>
        </div>
    )
}

export default DeleteBlock