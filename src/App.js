const players = [
  {
    characterImg: 'https://ipfs.io/ipfs/Qmdy9r3M1EkhBNahzeHZmeLDtVRHTuK3k6hi5FFJiPEjuv',
    characterName: 'Meatball Ron',
    wins: 13,
    losses: 4,
    earnings: 100000,
    costs: 10000
  },
  {
    characterImg: 'https://ipfs.io/ipfs/QmbM1c4vbBFAG5dpsP21Eawcjm51ZXM3FiKEULVJsUNtuz',
    characterName: 'Skully',
    wins: 18,
    losses: 6,
    earnings: 130000,
    costs: 10000
  },
  {
    characterImg: 'https://ipfs.io/ipfs/QmXmYHhjM4aVxpjC37UF5oy1C9STXthu8g6AsT4rZX7iTD',
    characterName: 'Odin',
    wins: 15,
    losses: 6,
    earnings: 105000,
    costs: 15000
  },
  {
    characterImg: 'https://ipfs.io/ipfs/QmejW5UYbMMtV64y9faC9bwqhNSvGxULbeBMGuoeZcjMgj',
    characterName: 'Evil Pooh',
    wins: 9,
    losses: 3,
    earnings: 75000,
    costs: 15000
  }
];


function App() {
  // sort the players by wins, then by losses, then by earnings
  const sortedPlayers = players.sort((a, b) => {
    if (a.wins !== b.wins) {
      return b.wins - a.wins; // sort by wins descending
    } else if (a.losses !== b.losses) {
      return a.losses - b.losses; // sort by losses ascending
    } else {
      return b.earnings - a.earnings; // sort by earnings descending
    }
  });

  return (
    <>
    <h1 style={{
        display: 'flex',
        margin: 'auto',
        justifyContent: 'center',
        color: 'white',
        marginTop: '30px'
    }}>
        Dark Coin Arena Leaderboard
    </h1>
    <ol
      style={{
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '5px solid white',
        borderRadius: '15px',
        marginLeft: '15%',
        marginRight: '15%',
        marginTop: '5%',
        padding: '20px',
        flexDirection: 'column',
        paddingLeft: '20px',
        '@media (max-width: 768px)': {
          fontSize: '16px',
          marginLeft: '2px',
          marginRight: '2px',
          marginTop: '5px',
          padding: '3px'
        }
      }}
    >
      <h1 style={{
        display: 'flex',
        margin: 'auto',
        justifyContent: 'center',
        marginBottom: '20px'
    }}>
        BATTLE RANK
      </h1>

      {sortedPlayers.map((player, index) => (
        <li 
          key={index}
          style={{
            border: index % 2 === 0 ? '2px solid white' : 'none',
            borderRadius: '15px',
            marginBottom: '10px',
            padding: '20px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <div style={{ marginRight: '20px', fontSize: "35px" }}>{index + 1}{index === 0 ? 'st' : index === 1 ? 'nd' : index === 2 ? 'rd' : 'th'}</div> {/* display rank */}
          <img src={player.characterImg} alt="character" 
            style={{ 
              height: '200px', 
              flex: '0 0 200px', 
              marginRight: '20px',
              '@media (max-width: 768px)': {
                height: '100px',
                flex: '0 0 100px',
                marginRight: '5px'
              } }} /> {/* display character image */}
          <div style={{ flex: '1', fontSize: '30px' }}>
            <div>Name: {player.characterName}</div> {/* display character name */}
            <div>Wins: {player.wins}</div> {/* display wins */}
            <div>Total Battles: {player.wins + player.losses}</div> {/* display total battles */}
            <div>Total Earned: {player.earnings - player.costs} DC</div> {/* display total earned */}
          </div>
        </li>
      ))}
    </ol>
    </>
  );
}


export default App;
