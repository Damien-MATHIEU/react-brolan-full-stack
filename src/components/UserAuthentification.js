import axios from 'axios'

function UserAuthentification() {
    axios.defaults.withCredentials = true;

    const serverUrl = "https://brolan.damien-mathieu.fr"

    axios.get(serverUrl + '/isUserAuth', {
        headers: {
            "x-access-token": localStorage.getItem("token")
        }
    }).then((response) => {
        console.log(response);
    })
}

export default UserAuthentification
