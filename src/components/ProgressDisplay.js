const ProgressDisplay = ({ progress }) => {

    return (
        <div className="m-1 p-5 min-w-[200px] flex items-center bg-gray-100">
            <div className="w-full bg-gray-300 h-5 rounded-lg overflow-hidden">
                <div className="bg-sky-300 h-full" style={{width: progress + '%'}}></div>
            </div>
        </div>
    )
}

export default ProgressDisplay