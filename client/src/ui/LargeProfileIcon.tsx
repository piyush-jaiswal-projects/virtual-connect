import { UserIcon } from "../assets/icons"


const LargeProfileIcon = () => {
    return (
        <div className="rounded-full w-[150px] h-[150px] bg-gray-200 overfloe-hidden flex justify-center items-center">
            <img src={UserIcon} alt="" width={100}  height={100}/>
        </div>
    )
}

export default LargeProfileIcon