import { useState } from "react"
import CreateCanvas from "./dashboard/CreateCanvas";

export default function Dashboard() {

    const [showCreateCanvasDialog, setShowCreateCanvasDialog] = useState<boolean>(false);

    return <div className="relative h-full border-t border-neutral-800 text-white ">
        <div className="flex justify-end pr-4 mt-4">
            <button className="bg-neutral-300 text-black font-semibold px-4 py-2 rounded-sm text-sm cursor-pointer hover:bg-white transition-colors duration-300" onClick={() => setShowCreateCanvasDialog(true)}>Create Canvas + </button>
        </div>
        {
            showCreateCanvasDialog && <CreateCanvas setShowCreateCanvasDialog={setShowCreateCanvasDialog} />
        }
    </div>
}