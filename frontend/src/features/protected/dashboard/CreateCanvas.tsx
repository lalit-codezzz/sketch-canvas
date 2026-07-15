import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

export default function CreateCanvas({setShowCreateCanvasDialog}: {setShowCreateCanvasDialog: React.Dispatch<React.SetStateAction<boolean>>}) {
    const [name, setName] = useState("");

    const handleCreate = () => {
        if (!name.trim()) return;
        console.log("Creating canvas:", name);
    };

    return (
        <div className="min-h-130 absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black/50 backdrop-blur-[1px] px-4">
            <div className="w-full max-w-sm rounded-xl border border-white/10 bg-[#1a1a1a] p-6 shadow-xl relative">

                <button className="absolute top-2 right-2 cursor-pointer rounded-full" onClick={() => setShowCreateCanvasDialog(false)}>
                    <IoIosCloseCircle size={35} />
                </button>

                <h2 className="mb-1 text-lg font-medium text-white">
                    Create canvas
                </h2>
                <p className="mb-6 text-sm text-white/50">
                    Give your canvas a name to get started.
                </p>

                <label className="mb-2 block text-xs font-medium text-white/60">
                    Canvas name
                </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Untitled canvas"
                    className="mb-6 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/30 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />

                <button
                    onClick={handleCreate}
                    disabled={!name.trim()}
                    className="w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/30"
                >
                    Create canvas
                </button>
            </div>
        </div>
    );
}