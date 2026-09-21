function ClubCard(Club, Joining) {
    let status;
    let clubbox;


    if (Club.joined) {
       Club.members +=1;
       status="joined"
       clubbox = "new member"
    } else {
        Club.members-=1;
        status = "left";
        clubbox = "past member";
    }
    return (
        
            <div>
                <h2>Club Card</h2>
                <h3>Club Name : {Club.name}</h3>
                <p>Club Catagory : {Club.catagory}</p>
                <p>Club coordinator:{Club.coordinator}</p>
                <p>Club Members : {Club.members}</p>
                <button onClick={(Joining(Club.id))}>
                    {clubbox}
                </button>
            </div>

    )

}
export default ClubCard