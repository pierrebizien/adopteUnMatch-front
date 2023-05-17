

function MyPlayers({data} : any)
{
    return (
        <div>
            <h2>Mon Equipe</h2>
            <p>{data.player1}</p>
            <p>{data.player2}</p>
            <p>{data.player3}</p>
            <p>{data.player4}</p>
            <p>{data.player5}</p>
        </div>
    )
}
export default MyPlayers