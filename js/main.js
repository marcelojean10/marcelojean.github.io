const myUserGithub = `marcelojeantech`;

fetch(`https://api.github.com/users/${myUserGithub}`, {
    method: 'GET',
    headers: new Headers()
    })
    .then(async function (response) {
            const { avatar_url, name, company } = await response.json();

            document.getElementById("photo-perfil").src = avatar_url;
            document.getElementById("name-perfil").innerText = name;
            document.getElementById("company-perfil").innerText = company;
    })
    .catch(error => console.error(error));

