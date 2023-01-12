const PriorityDisplay = ({ priority }) => {

    return (
        <div className="m-1 p-5 w-full flex items-center bg-gray-100">
            <div className="flex flex-row gap-2">
                <h3 className={priority >=1 ? 'text-amber-300' : 'text-transparent'}>★</h3>
                <h3 className={priority >=2 ? 'text-amber-300' : 'text-transparent'}>★</h3>
                <h3 className={priority >=3 ? 'text-amber-300' : 'text-transparent'}>★</h3>
                <h3 className={priority >=4 ? 'text-amber-300' : 'text-transparent'}>★</h3>
                <h3 className={priority >=5 ? 'text-amber-300' : 'text-transparent'}>★</h3>
            </div>
        </div>
    )
}

export default PriorityDisplay