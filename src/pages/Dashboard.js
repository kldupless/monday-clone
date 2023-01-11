import TicketCard from '../components/TicketCard'

const Dashboard = () => {

    const tickets = [
        {
            category: 'Q1 2023',
            color: 'bg-violet-300',
            title: 'CRM clone app',
            owner: 'Krysia Sherburne',
            status: 'done',
            priority: 5,
            progress: 40,
            description: 'Make a video showing how to create a CRM clone app with React',
            timestamp: '2023-02-11T07:36:17+0000',
            avatar: ''
        },
        {
            category: 'Q1 2023',
            color: 'bg-red-300',
            title: 'Sudoku app',
            owner: 'Krysia Sherburne',
            status: 'working on it',
            priority: 2,
            progress: 20,
            description: 'Make a video about creating a sudoku app',
            timestamp: '2023-02-15T09:45:17+0000',
            avatar: ''
        },
        {
            category: 'Q2 2023',
            color: 'bg-cyan-300',
            title: 'Build a bot',
            owner: 'Krysia Sherburne',
            status: 'working on it',
            priority: 3,
            progress: 10,
            description: 'Write a bot for my Discord channel',
            timestamp: '2023-02-19T09:45:17+0000',
            avatar: ''
        },
    ]

    const uniqueCategories = [
        ...new Set(tickets?.map(({category}) => category))
    ]
    return (
        <div className="p-8 w-full">
            <h1>My Projects</h1>
            <div className="h-[80vh] overflow-scroll">
                {
                    tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
                        <div key={categoryIndex}>
                            <h3>{uniqueCategory}</h3>
                            {tickets.filter(ticket => ticket.category === uniqueCategory)
                                .map((filteredTicket, _index) => (
                                    <TicketCard
                                    id={_index}
                                    color={filteredTicket.color}
                                    ticket={filteredTicket}
                                    />
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Dashboard