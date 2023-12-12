

export default function SearchFile() {
    return (
        <form className=" relative pt-6">
            <img src="/image/home/Magnifier.svg" alt="trip vault" width={20} height={20} 
            className=" absolute opacity-50 bottom-[10px] left-1"/>
            <input placeholder="Search ..." className="border border-gray-600 w-full rounded py-2 px-7"/>
        </form>
    )
}