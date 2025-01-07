import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const [form, setForm] = useState({ site: "", username: "", password: "" })
    const [passwordArrray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])

    const savePass = () => {
        if(form.site.length>3 && form.username.length>3 && form.password.length>3){
            setPasswordArray([...passwordArrray, {...form, id: uuidv4()}])
            localStorage.setItem("passwords", JSON.stringify([...passwordArrray, {...form, id: uuidv4()}]))
            setForm({ site: "", username: "", password: "" })
        }
        else{
            alert("parameters should be of length more than 3")
        }
    }

    const deletePass = (id) => {
        let confirmation = confirm("Do Yoy Really Want to Detete The Password ??")
        if(confirmation){
            setPasswordArray(passwordArrray.filter(item => item.id !== id))
            localStorage.setItem("passwords", JSON.stringify(passwordArrray.filter(item => item.id !== id)))
        }
    }

    const editPass = (id) => {
        setForm(passwordArrray.filter(i=>i.id===id)[0])
        setPasswordArray(passwordArrray.filter(item => item.id !== id))
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const copyText = (text) => {
        toast('Copied to Clipboard', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        navigator.clipboard.writeText(text)
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />

            {/* Background is copied from this website : https://bg.ibelick.com/ */}
            <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>

            <div className='p-2 md:p-0 md:mycontainer'>
                <h1 className='text-4xl font-bold flex justify-center'>
                    <span className='text-green-700'>&lt;</span>
                    Pass <span className='text-green-700'>Op</span>
                    <span className='text-green-700'>/&gt;</span>
                </h1>
                <p className='text-2xl flex justify-center'>Your Own Passworf Manager</p>

                <div className='text-white flex flex-col items-center p-4'>
                    <input value={form.site} onChange={handleChange} type="text" name='site' placeholder='Enter Website Name' id='site' className='rounded-full border border-green-950 text-black w-full py-1 p-4' />
                    <div className='flex flex-col md:flex-row justify-center gap-4 mt-4'>
                        <input value={form.username} onChange={handleChange} type="text" name='username' placeholder='Enter Username' id='username' className='rounded-full border border-green-950 text-black py-1 p-4' />
                        <input value={form.password} onChange={handleChange} type="text" name='password' placeholder='Enter Password' id='password' className='rounded-full border border-green-950 text-black py-1 p-4' />
                    </div>

                    <button onClick={savePass} className='flex justify-center items-center mt-4 bg-green-500 rounded-full w-fit px-3 py-1.5 text-black gap-2'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon>
                        Save Password
                    </button>
                </div>

                <div className='passwords'>
                    <h2 className='font-bold text-xl py-4'>Your Passwords :</h2>
                    {passwordArrray.length === 0 && <div>No Passwords to Show</div>}
                    {passwordArrray.length != 0 &&
                        <table className="table-auto w-full">
                            <thead className=' bg-green-300'>
                                <tr>
                                    <th>Site</th>
                                    <th>UserName</th>
                                    <th>Password</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className='bg-green-100'>
                                {passwordArrray.map((item, index) => {
                                    return <tr key={index}>
                                        <td className='text-center'>
                                            <div className='flex items-center justify-center gap-3'>
                                                <span>{item.site}</span>
                                                <div className='lordiconcopy cursor-pointer size-7' onClick={() => { copyText(item.site) }}>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover">
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='text-center'>
                                            <div className='flex items-center justify-center gap-3'>
                                                <span>{item.username}</span>
                                                <div className='lordiconcopy cursor-pointer size-7' onClick={() => { copyText(item.username) }}>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover">
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='text-center'>
                                            <div className='flex items-center justify-center gap-3'>
                                                <span>{item.password}</span>
                                                <div className='lordiconcopy cursor-pointer size-7' onClick={() => { copyText(item.password) }}>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/iykgtsbt.json"
                                                        trigger="hover">
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='text-center'>
                                            <span className='cursor-pointer mx-2' onClick={() => {editPass(item.id)}}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/gwlusjdu.json"
                                                    trigger="hover">
                                                </lord-icon>
                                            </span>
                                            <span className='cursor-pointer mx-2' onClick={() => {deletePass(item.id)}}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/skkahier.json"
                                                    trigger="hover">
                                                </lord-icon>
                                            </span>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>}
                </div>

            </div>
        </>
    )
}

export default Manager
