import React, { useState } from "react";
import ErrorMessage from "../Components/ErrorMessage";
import ConnectLoadingSpinner from "./Components/ConnectLoadingSpinner";

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
            const response = await fetch("");
            if(!response.ok){
                throw new Error("Could not sign up. Please try again later.");
            }
        }
        catch(error){
            setErrorMessage((error as Error).message);
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
        if(password.length > 255){
            throw new Error("A password cannot be longer than 255 characters.");
        }
        if(password.length < 8){
            throw new Error("A password must be at least 8 symbols long.");
        }
        if(!Boolean(password.match(/[a-z]/))){
            throw new Error("A password must contain a non-capital letter.");
        }
        if(!Boolean(password.match(/[A-Z]/))){
            throw new Error("A password must contain a capital letter.");
        }
        if(!Boolean(password.match(/[0-9]/))){
            throw new Error("A password must contain a number.");
        }
        if(!Boolean(password.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/))){
            throw new Error("A password must contain a special character.");
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
            {isLoading && !errorMessage && <ConnectLoadingSpinner />}
            {!isLoading && errorMessage && <ErrorMessage errorMessage={errorMessage} />}
        </main>
    );
}