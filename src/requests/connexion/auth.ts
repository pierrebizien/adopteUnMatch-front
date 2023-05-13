import '../../components/Inscription/Inscription.tools.tsx'

interface TeamInput {
		login: string;
  		password: string;
}

export async function sendCreds(input : TeamInput)
{
    return (await fetch("http://localhost:5175/api/login", {
		method: "post",
		headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
		},

		body: JSON.stringify({
			login: input.login,
			password: input.password,
		})
	}))
}
