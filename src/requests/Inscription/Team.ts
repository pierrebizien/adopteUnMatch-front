export async function createTeam()
{

	const login = document.forms['connectionForm']['login'];
    const mdp = document.forms['connectionForm']['password'];
    const city = document.forms['connectionForm']['city'];
    const name = document.forms['connectionForm']['name'];
    // console.log(login, mdp)
	if (login.value === "")
	{
		console.log("Erreur : login vide");
	}
    return (await fetch("http://localhost:5175/api/createteam", {
		method: "post",
		headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
		},

		body: JSON.stringify({
			login: login.value,
			name: name.value,
			password: mdp.value,
			city: city.value
		})
	}))

}
