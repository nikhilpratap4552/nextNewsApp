'use client';

export default function Filtererror({error}){
    return(
        <>
        <div id="error">
            <h2>A error occured !</h2>
            <p>{error.message}</p>
        </div>
        </>
    )
}