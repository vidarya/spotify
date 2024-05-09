// const authEndPoint = "https://accounts.spotify.com/authorize?": This variable authEndPoint stores the URL endpoint for initiating the Spotify authorization flow. When a user wants to access resources on Spotify that require authentication, they need to go through this endpoint to authorize the application.
const authEndPoint = "https://accounts.spotify.com/authorize?" 
// "const clientID = "626ae6a9f92145c5a0ed32510689c0af": This variable clientID holds the unique identifier (client ID) assigned to your application by Spotify. This ID is used to identify your application when making requests to the Spotify API. It's an essential part of the OAuth 2.0 authentication process."
const clientID = "626ae6a9f92145c5a0ed32510689c0af"
// const redirectUri = "http://127.0.0.1:5500/index.html": This variable redirectUri specifies the URI where the user should be redirected after they have successfully authorized the application. In this case, it's set to a local development server (http://127.0.0.1:5500/index.html). After the user grants permission to the application, Spotify will redirect the user back to this URI, typically with an authorization code or access token appended as a query parameter.
const redirectUri = "http://127.0.0.1:5500/index.html"

const scopes = ["user-library-read", "playlist-read-private"]

export const loginEndpoint = `${authEndPoint}client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;