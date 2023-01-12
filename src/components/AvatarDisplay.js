import blankAvatar from '../images/blank-avatar.svg'

const AvatarDisplay = ({ ticket }) => {

    return (
        <div className="w-20 m-1 p-5 flex justify-center items-center bg-gray-100">
            <div className="h-12 w-12 rounded-full overflow-hidden">
                <img src={ticket.avatar ? ticket.avatar : blankAvatar} alt={'avatar of ' + ticket.owner} className="w-full"/>
            </div>
        </div>
    )
}

export default AvatarDisplay