type ErrorProps = {
    errorMessage: string;
}

export default function ErrorMessage({ errorMessage }: ErrorProps){
    return(
        <p>Error: {errorMessage}</p>
    )
}