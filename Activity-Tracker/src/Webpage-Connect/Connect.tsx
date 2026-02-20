import { useState } from "react";

export default function Connect(){
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    async function HandleSignUp(): Promise<void>{

    }

    return(
        <main className="connection_forms">
            <form onSubmit={HandleSignUp}>
                <h1>Sign Up</h1>
                <input type="username" 
                       value={username} 
                       onChange={(e) => setUsername(e.target.value)}
                       placeholder="Enter username:"
                />
                <input type="email" 
                       value={email} 
                       onChange={(e) => setEmail(e.target.value)}
                       placeholder="Enter email:"
                />
                <input type="password" 
                       value={password} 
                       placeholder="Enter password:"
                       onChange={(e) => setPassword(e.target.value)}
                />
                <input type="submit" 
                       value="Sign Up"
                />
            </form>
        </main>
    );
}