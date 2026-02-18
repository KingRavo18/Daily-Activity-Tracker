

export default function Connect(){

    async function HandleSignUp(): Promise<void>{

    }

    return(
        <main>
            <form onSubmit={HandleSignUp}>
                <h1>Sign Up</h1>
                <input type="username"/>
                <input type="email"/>
                <input type="password"/>
                <input type="submit" value="Sign Up"/>
            </form>
        </main>
    );
}