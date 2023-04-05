function App() {

  return (
    <>
      <div style={{
        display: 'flex', 
        justifyContent: 'center'
      }}>
          <div style={{
            border: '5px solid rgb(255,255,255)', 
            boxShadow: '0 0 15px 5px rgba(211,211,211,.75)', 
            margin: '25px', 
            borderRadius: '20px', 
            textAlign: 'center',
            color: 'white',
            padding: '20px',
            maxWidth: '600px',
            minWidth: '350px'}}>
              <img src={process.env.PUBLIC_URL + '/icon.png'} 
                alt="logo"
                style={{
                  alignItems: 'center',
                  width: '85px',
                  height: '85px',
                  margin: '0, -35px'
                }} /> 
              <h1 style={{
                fontFamily: 'Arial, sans-serif',
                textAlign: 'center',
                fontSize: '1.5em',
                textTransform: 'uppercase',
                margin: '0, auto, 10px, auto'
              }}>Dark Coin V2 Token Claim Form</h1>
              <p style={{
                
              }}>
                Please fill out the form below accurately to open up a claim for DCV2 Distribution. 

                Please understand that as claims are handled on a case by case basis and require individual analysis, 
                it may take some time to respond and fulfill your claim--but we will ensure it is resolved as soon as possible.

                This will be an ongoing effort until all of the users affected by the hack and following announcements are made whole.
              </p>
          </div>
      </div>
      <div style={{
        display: 'flex', 
        justifyContent: 'center'
      }}>
        <div style={{
            border: '5px solid rgb(255,255,255)', 
            boxShadow: '0 0 15px 5px rgba(211,211,211,.75)', 
            margin: '25px', 
            borderRadius: '20px', 
            textAlign: 'center',
            color: 'white',
            padding: '20px',
            maxWidth: '600px',
            minWidth: '350px'}}>
              <label style={{
                marginBottom: '10px'
              }}>Wallet Address:</label>
              <input 
              placeholder="(Required)"
              style={{
                margin: 'auto',
                display: 'flex',
                marginBottom: '15px',
                width: '275px'
              }}
              required></input>

              <label style={{
                marginBottom: '10px'
              }}>Email:</label>
              <input 
              type="email" 
              placeholder="(Optional)"
              style={{
                margin: 'auto',
                display: 'flex',
                marginBottom: '15px',
                width: '275px'
              }}></input>

              <label style={{
                marginBottom: '10px'
              }}>DCV1 Held (pre hack/announcement):</label>
              <input 
              placeholder="(Doesn't include DC bought after announcement)"
              style={{
                margin: 'auto',
                display: 'flex',
                marginBottom: '15px',
                width: '275px'
              }}></input> 

              <label style={{
                marginBottom: '10px'
              }}>DCV1 Sold (if sold after hack/announcement):</label>
              <input 
              placeholder="(Amount of DC sold)"
              style={{
                margin: 'auto',
                display: 'flex',
                marginBottom: '15px',
                width: '275px'
              }}></input> 

              <label style={{
                marginBottom: '10px'
              }}>TRX ID (for DC sold after announcement):</label>
              <input 
              placeholder="(TRX ID for DC Sold)"
              style={{
                margin: 'auto',
                display: 'flex',
                marginBottom: '15px',
                width: '275px'
              }}></input> 

              <label style={{
                marginBottom: '10px'
              }}>Questions or concerns:</label>
              <textarea 
              placeholder="(To receive a response, please include email)"
              style={{
                margin: 'auto',
                display: 'flex',
                marginBottom: '15px',
                width: '275px',
                height: '150px'
              }}></textarea> 
        </div>
      </div>
      <div style={{
        display: 'flex', 
        justifyContent: 'center'
      }}>
        <button style={{
          border: '1px solid white',
          padding: '20px',
          borderRadius: '15px',
          backgroundColor: 'black',
          color: 'white'
        }}>
          SUBMIT
        </button>
      </div>
    </>
  );
}


export default App;