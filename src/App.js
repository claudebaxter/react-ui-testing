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
            margin: '100px 100px', 
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
    </>
  );
}


export default App;