import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {

    const [isEdit, setIsEdit] = useState(false)

    const [userData, setUserData] = useState({
        name: "Riya",
        image: assets.profile_pic,
        email: 'riyaa@gmail.com',
        phone: '+91 6005732387',
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Church Road, LGachibowli',
        },
        gender: 'Male',
        dob: '2000-01-20'
    })

    return (
        <div className='max-w-lg flex flex-col gap-2 text-sm'>
            <img className='w-36 rounded' src="src\assets\ppic.png" alt="" />

            {isEdit
                ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type="text" onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))} value={userData.name} />
                : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
            }

            <hr className='bg-zinc-400 h-[1px] border-none' />
            <div>
                <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
                <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
                    <p className='font-medium'>Email id:</p>
                    <p className='text-blue-500'>{userData.email}</p>
                    <p className='font-medium'>Phone:</p>
                    {isEdit
                        ? <input className='bg-gray-100 max-w-52' type="text" onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))} value={userData.phone} />
                        : <p className='text-blue-400'>{userData.phone}</p>}
                    <p className='font-medium'>Address:</p>
                    {isEdit
                        ? <p>
                            <input className='bg-gray-50' type="text" onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} />
                            <br />
                            <input className='bg-gray-50' type="text" onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} /></p>
                        : <p className='text-gray-500'>{userData.address.line1} <br /> {userData.address.line2}</p>
                    }
                </div>
            </div>
            <div>
                <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
                <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
                    <p className='font-medium'>Gender:</p>
                    {isEdit
                        ? <select className='max-w-20 bg-gray-100' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender} >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        : <p className='text-gray-400'>{userData.gender}</p>}
                    <p className='font-medium'>Birthday:</p>
                    {isEdit
                        ? <input className='max-w-28 bg-gray-100' type='date' onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} />
                        : <p className='text-gray-400'>{userData.dob}</p>}
                </div>
            </div>
            <div className='mt-10'>
                {
                    isEdit
                        ? <button onClick={() => setIsEdit(false)} className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all'>Save information</button>
                        : <button onClick={() => setIsEdit(true)} className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all'>Edit</button>
                }
            </div>
        </div>
    )
}

export default MyProfile