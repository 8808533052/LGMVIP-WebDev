import React, { useState } from 'react'
import axios from 'axios';
import { CircularProgress } from "@material-ui/core";
import Loader from './Loader';

const Navbar = () => {

    const [users, setUsers] = useState([]);

    const [loading, setLoading] = useState(false)

    const handleClick = async () => {
        setLoading(true)
        const calll = await axios.get('https://reqres.in/api/users?page=1')
        // console.log(calll.data.data)
        setUsers(calll.data.data)
        setLoading(false)
    }

    return (
        <>
            <nav>
                <div className="nav-container">
                    <p>LetsGrow<span>More</span></p>
                    <button onClick={handleClick}>
                        {/* {
                            users == 0 && (

                                <CircularProgress color="white" size="20px" />
                            )
                        } */}
                        get user</button>
                </div>

            </nav>


            {users == 0 && (

                <div className="home">
                    click on button in the Navbar saying " Get Users" to fetch API
                </div>
            )}
            {users !== 0 && (
                < div className="container">
                    {
                        users === 0 ?
                            <CircularProgress color="white" size="20px" /> :
                            ""
                    }
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

            <Loader load={loading} />
        </>
    )
}

export default Navbar
