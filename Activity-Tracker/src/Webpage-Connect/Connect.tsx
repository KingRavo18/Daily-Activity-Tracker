import React, { useState } from "react";

export default function Connect(){
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function HandleSignUp(e: React.SubmitEvent<HTMLFormElement>): Promise<void>{
        e.preventDefault();
        setIsLoading(true);
        try{
            checkInputFields(username, email, password);
            

        }
        catch(error){

        }
        finally{
            setIsLoading(false);
        }
    }

    function checkInputFields(username: string, email: string, password: string): void{
        if(username.trim() === ""){
            throw new Error("Please input a username.");
        }
        if(email.trim() === ""){
            throw new Error("Please input an email.");
        }
        if(password.trim() === ""){
            throw new Error("Please input a password.");
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
                       disabled={isLoading}
                />
            </form>
        </main>
    );
}