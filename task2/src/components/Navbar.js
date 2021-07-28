import React, { useState } from 'react'
import axios from 'axios';

const Navbar = () => {

    const [users, setUsers] = useState([]);

    const handleClick = async () => {
        const calll = await axios.get('https://reqres.in/api/users?page=1')
        // console.log(calll.data.data)
        setUsers(calll.data.data)
    }

    return (
        <>
            <nav>
                <div className="nav-container">
                    <p>LetsGrow<span>More</span></p>
                    <button onClick={handleClick}>get user</button>
                </div>

            </nav>


            {users == 0 && (

                <div className="home">
                    click on button in the Navbar saying " Get Users" to fetch
                </div>
            )}
            {users !== 0 && (

                <div className="container">
                    {
                        users.map((Elem) => {
                            const { id, avatar, email, first_name, last_name } = Elem;
                            return (
                                <>
                                    <div className="box" key={id}>
                                        <img src={avatar} alt="" />
                                        <p>{first_name} {last_name} </p>
                                        <p>{email}</p>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            )
            }
        </>
    )
}

export default Navbar
