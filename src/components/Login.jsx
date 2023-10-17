import React from "react"
import { provider, auth } from "../firebase"
import { signInWithPopup, signInWithRedirect } from "firebase/auth"
function Login() {
    const signIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider).catch(
                (error) => alert(error.message)
            )

            // The signed-in user info.
            const user = result.user

            const credential = provider.credentialFromResult(auth, result)
            const token = credential.accessToken

            console.log(user)
        } catch (e) {
            console.error(e)
        }
    }
    return (
        <div className="login">
            <button onClick={signIn}>Login with Google</button>
        </div>
    )
}

export default Login
