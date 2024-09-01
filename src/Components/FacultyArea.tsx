import { FC, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import FacultyCard from "./FacultyCard";
import { User } from "../Models/user";

type FacultyAreaProps = {
    title: string,
    user: User[],
};

const FacultyArea: FC<FacultyAreaProps> = ({ title, user }) => {
    const [sortedUsers, setSortedUsers] = useState<User[]>([...user]);

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const sortBy = e.target.value;
        let sortedArray = [...user];

        switch (sortBy) {
            case "name":
                sortedArray.sort((a, b) => a.full_name.localeCompare(b.full_name));
                break;
            case "subject":
                sortedArray.sort((a, b) => a.department_name.localeCompare(b.department_name));
                break;
            default:
                break;
        }

        setSortedUsers(sortedArray);
    };

    return (
        <div className="bg-white rounded-md shadow-md p-3 flex flex-col gap-2">
            <div className="flex justify-between">
                <div className="bg-white rounded-md shadow-xl px-4 py-2 flex justify-between w-1/2 text-sm">
                    <h1>{title} Faculty</h1>
                    <IoMdAdd />
                </div>
                <div className="bg-white rounded-md shadow-xl border-1 border-black px-4 py-2 text-xs">
                    <select name="Sort" id="sorting_select" onChange={handleSortChange}>
                        <option value="name">By Name</option>
                        <option value="subject">By Subject</option>
                    </select>
                </div>
            </div>
            <div className="flex grow gap-4 overflow-auto">
                {sortedUsers && sortedUsers.map((user) => (
                    <FacultyCard 
                        key={user.id} // Make sure `user.id` or another unique identifier exists in the `User` model
                        name={user.full_name} 
                        subject={user.department_name} 
                    />
                ))}
            </div>
        </div>
    );
}

export default FacultyArea;
