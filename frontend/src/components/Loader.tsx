export default function Loader() {
    return <div className="absolute top-0 left-0 h-full w-full bg-black flex items-center justify-center">

        <div className="h-16 w-16 flex items-center justify-center overflow-hidden rounded-full">
            <div className="h-64 w-64 bg-conic from-black to-white flex items-center justify-center animate-spin rounded-full">
                <div className="h-14 w-14 bg-black rounded-full"></div>
            </div>
        </div>

    </div>
}