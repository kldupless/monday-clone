import TicketForm from '../components/TicketForm.js'

const TicketPage = () => {
    const editMode = false

    return (
        <div className="p-5 w-3/5">
            <h1 className="font-light text-2xl">{editMode ? 'Update your ticket' : 'Create a ticket'}</h1>
            <div>
                <TicketForm/>
            </div>
        </div>
    )
}

export default TicketPage