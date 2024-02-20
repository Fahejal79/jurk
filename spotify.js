import axios from "axios"

const authEndpoint = "https://accounts.spotify.com/authorize?"
const clientId = "923b442eb6d04d98823f2be03e2e8662"
const redirecturl = "http://localhost:3000"
const scopes = ["user-library-read","playlist-read-private"]

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirecturl}&scope=${scopes.join(
"%20"
)}&response_type=token&show_dialog=true`;

