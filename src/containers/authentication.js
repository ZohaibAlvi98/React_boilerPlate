import React, { useEffect } from "react"
import { customer_login } from "../store/actions/login"
import { useDispatch, useSelector } from "react-redux"

const Login = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(customer_login({
            email: "abcd@gmail.com",
            password: "123456",
            fcm: "dkZlj-DRQSinFdWn8Mh2Uk:APA91bFujUHwTxM2Vuc9BQ2vCAyYZkO9wI_9eiDI2885vNiqHp6x6fiVQLf65MC0mcmq2g3x6kTxiv6kzrhhathl7hQKvribXnFuEGVbcStDPAvTaqHgIL5ypnlwHnBsLDUzNQcKWGyd"
        })
        )

    }, [])

    const loginState = useSelector((state) => state.login)
    console.log(loginState, "STATEEEEEEEEEEEEEE");
    return (
        <div>
            {
                loginState.in_progess ?
                    <h1>Loading</h1>
                    :
                    !loginState.in_progess && loginState.data == null
                        ? <h1> Response Rejected</h1>
                        :
                        <h1> Response Accepted</h1>
            }
        </div >
    )
}

export default Login