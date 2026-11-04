import WrestlingContest from "./Q10a";

export default function Q10(){
    const contestName="WWE";
    const wrestlers=[
        "John Cena",
        "Roman Reigns",
        "Randy Orton",
        "The Undertaker",
        "Seth Rollins"
    ]

    return(
        <div>
            <WrestlingContest contestName={contestName} wrestlers={wrestlers}/>
        </div>
    )
}