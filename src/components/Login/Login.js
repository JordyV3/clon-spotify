import { Container, LoginButton} from "./styles"

const endpoints = "https://accounts.spotify.com/authorize";
const clientID = "bb7e57424fb64a4394e3b7433961f5d6";
const redirectUri = "http://localhost:3000/";
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"];

const LoginUrl = `${endpoints}?client_id=${clientID}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&show_dialog=true`;

const Login = () => {
    return (
        <Container>
            <img src="https://images.vexels.com/media/users/3/137413/isolated/preview/4acb8e52632aa9b7c874b878eaf02bc4-logotipo-del-icono-de-spotify-by-vexels.png" alt="logo"/>
            <LoginButton href={LoginUrl}>Login with spotify</LoginButton>
        </Container>
    )
}

export default Login
