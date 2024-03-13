import { NextResponse, NextRequest } from 'next/server'
       
export async function POST(req: Request) {  
  const body = await req.json();
    // Replace :portalId and :formGuid with actual values
    console.log(body);
    const timestamp = new Date().toLocaleString();

    const payLoad = {
      "submittedAt": new Date().toISOString(),
      "fields": [
          {
          "name": "firstname",
          "value": body.firstname
          },
          {
          "name": "lastname",
          "value": body.lastname
          },
          {
          "name": "phone",
          "value": body.phone
          },
          {
          "name": "email",
          "value": body.email
          },
          {
            "name": "lifecyclestage",
            "value": "New"
          },
          {
          "name": "message",
          "value": body.message
          }
      ],
      "context": {
          // To know how to use hutk get in touch with me.
          //"hutk": ':hutk', // include this parameter and set it to the hubspotutk cookie value to enable cookie tracking on your submission
          "pageUri": "https://www.conexionlegalhispana.com",
          "pageName": "Home Page"
      },
      "legalConsentOptions": {
          "consent": {
          "consentToProcess": "True",
          "text": "I agree to allow ConexionLegalHispana to store and process my personal data.",
          "communications": [
              {
              "value": "True",
              "subscriptionTypeId": 999,
              "text": "I agree to receive marketing communications from ConexionLegalHispana."
              }
          ]
          }
      }
  }

    console.log(payLoad)


    if (req.method === 'POST') {
      try {
   
        // console.log(fields);
        
        // Parse JSON data from the request body
  
        // Log the data
  
        // Replace :portalId and :formGuid with actual values
        const portalId = '45489682';
        const formGuid = 'f8e8262e-4183-4dd1-b78a-0ec7ec4c099d';

        // Construct the HubSpot submission URL
        const hubSpotUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;
        // Make a POST request to HubSpot with the form data
        const hubSpotResponse = await fetch(hubSpotUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payLoad),
        });
  
        // Check the response from HubSpot
        if (hubSpotResponse.ok) {
          // HubSpot accepted the submission
          return NextResponse.json({ message: 'Form submitted successfully' });
        } else {
          // HubSpot returned an error
          const hubSpotError = await hubSpotResponse.json();
          console.error('HubSpot Error:', hubSpotError);
          return NextResponse.json({ error: 'HubSpot Error', details: hubSpotError }, { status: 500 });
        }
      } catch (error) {
        // Handle any errors during parsing or processing
        console.error('Error processing form data:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
      }
    } else {
      // If the request method is not POST, respond with a 405 error
      return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
    }
}


