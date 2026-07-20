import { useState } from "react";

export default function UserProfile() {

    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className="text-white pt-4 flex flex-col items-center justify-start gap-20">
            <div className="flex justify-end w-full">
                <div>
                    {
                        !isEditing ? <button className="text-sm bg-green-900 px-4 py-2 rounded-sm font-semibold cursor-pointer hover:bg-green-700 transition-colors duration-300" onClick={() => setIsEditing(prev => !prev)}>Edit Details</button>

                            :
                            <button className="text-sm bg-purple-900 px-4 py-2 rounded-sm font-semibold cursor-pointer hover:bg-purple-700 transition-colors duration-300" onClick={() => setIsEditing(prev => !prev)}>Cancel Editing</button>
                    }

                </div>
                <button className="text-sm bg-red-900 mx-4 px-4 py-2 rounded-sm font-semibold cursor-pointer hover:bg-red-800 transition-colors duration-300">Logout</button>

            </div>

            <div className="border border-neutral-700 p-8 rounded-sm">
                <div className="my-4 flex flex-col jusfity-start gap-2">
                    <label className="text-sm font-semibold">Name:</label>
                    <input disabled={!isEditing} className={((!isEditing ? "bg-neutral-800 text-neutral-400 cursor-not-allowed" : "bg-transparent text-white cursor-text")) + " border border-neutral-700 text-sm px-4 py-2 rounded-sm"} value="Lalit Upadhyay" />
                </div>

                <div className="my-4 flex flex-col jusfity-start gap-2">
                    <label className="text-sm font-semibold">Email:</label>
                    <input disabled={!isEditing} className={((!isEditing ? "bg-neutral-800 text-neutral-400 cursor-not-allowed" : "bg-transparent text-white cursor-text")) + " border border-neutral-700 text-sm px-4 py-2 rounded-sm"}value="lalit@gmail.com" />
                </div>

            </div>

        </div>
    );
}