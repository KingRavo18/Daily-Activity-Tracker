import React, { useState } from "react";

export default function Connect(){
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    async function HandleSignUp(e: React.): Promise<void>{
        e.preventDefault();
        try{

        }
        catch(error){

        }
        finally{

        }
    }

    return(
        <main className="connection_forms">
            <form onSubmit={e => HandleSignUp(e)}>
                <h1>Sign Up</h1>
                <input type="username" 
                       value={username} 
                       onChange={(e) => setUsername(e.target.value)}
                       placeholder="Enter username:"
                       title="Enter username"
                       aria-label="Enter username"
                       autoFocus
                />
                <input type="email" 
                       value={email} 
                       onChange={(e) => setEmail(e.target.value)}
                       placeholder="Enter email:"
                       title="Enter email"
                       aria-label="Enter email"
                />
                <input type="password" 
                       value={password} 
                       onChange={(e) => setPassword(e.target.value)}
                       placeholder="Enter password:"
                       aria-label="Enter password"
                />
                <input type="submit" 
                       value="Sign Up"
                       title="Submit to Sign Up"
                       aria-label="Submit to Sign Up"
                />
            </form>
        </main>
    );
}