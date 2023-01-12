import classnames from 'classnames'

const StatusDisplay = ( {status} ) => {

    const getColor = (status) => {
        let color
        switch (status) {
            case 'done':
                color = 'bg-green-300'
                break
            case 'working on it':
                color = 'bg-blue-300'
                break
            case 'stuck':
                color = 'bg-orange-300'
                break
        default:
            color = 'bg-gray-300'
        }
        return color
    }
    const statusBg = classnames(
        "m-1 p-5 w-full flex items-center justify-center",
        getColor(status)
    )

    return (
        <div className={statusBg}>
            {status}
        </div>
    )
}

export default StatusDisplay