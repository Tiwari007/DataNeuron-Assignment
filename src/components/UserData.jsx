import React, { useState } from 'react';
import axios from 'axios';

const apiUrl = "https://5000-tiwari007-dataneuronass-esy0p7krmxc.ws-us110.gitpod.io"

const UserData = ({ userData, dataAltered }) => {
    const [data, setData] = useState({});
    const [isInputFilled, setIsInputFilled] = useState(false); // Add state to track input filled status

    const dataChanged = () => {
        dataAltered(true)
    }

    const handleAdd = async (e) => {
        e.preventDefault()
        const temp = { ...data, id: Number(Math.random() * 100000) }
        const dataTobeSend = { userData: temp, count: 12 }
        try {
            await axios.post(`${apiUrl}/addUser`, dataTobeSend);
        } catch (error) {
            console.error('Error adding data:', error);
        }

        setData({ name: "", age: "", designation: "" })
        dataChanged()
    };

    // Function to check if all input fields are filled
    const checkInputFilled = () => {
        const { name, age, designation } = data;
        return name !== "" && age !== "" && designation !== "";
    }

    return (
        <div className="flex h-1/2">
            <div className="w-1/2 p-4 m-2 bg-gray-200">
                <input
                    type="text"
                    value={data.name}
                    required
                    onChange={(e) => {
                        setData({ ...data, name: e.target.value });
                        setIsInputFilled(checkInputFilled());
                    }}
                    placeholder="Name"
                    className="w-full p-2"
                />
                <input
                    type="number"
                    value={data.age}
                    required
                    onChange={(e) => {
                        setData({ ...data, age: parseInt(e.target.value) });
                        setIsInputFilled(checkInputFilled());
                    }}
                    placeholder="Age"
                    className="w-full p-2 mt-2"
                />
                <input
                    type="text"
                    value={data.designation}
                    required
                    onChange={(e) => {
                        setData({ ...data, designation: e.target.value });
                        setIsInputFilled(checkInputFilled());
                    }}
                    placeholder="Designation"
                    className="w-full p-2 mt-2"
                />
                <div className="mt-4">
                    <button disabled={!isInputFilled} onClick={(e) => handleAdd(e)} className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2 ${!isInputFilled && 'opacity-50 cursor-not-allowed'}`}>
                        Add
                    </button>
                </div>
            </div>
            <div className="w-1/2 p-4 m-2 bg-gray-200">
                <h2 className='flex justify-center'>Data Table</h2>
                <ul className='overflow-scroll h-full'>
                    {
                        userData?.map((ele) => {
                            return (
                                <li key={ele.id} className="w-full bg-white border border-gray-200 rounded-lg shadow flex p-4 my-2">
                                    <h1 className='text-grey capitalize px-4'>{ele.userData.name}</h1>
                                    <h1 className='text-grey capitalize px-4'>{ele.userData.age}</h1>
                                    <h1 className='text-grey capitalize px-4'>{ele.userData.designation}</h1>
                                    <button onClick={() => handleUpdate(ele.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-6 rounded">
                                        Update
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default UserData;
