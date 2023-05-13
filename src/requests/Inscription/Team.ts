import '../../components/Inscription/Inscription.tools.tsx'

type Inputs = {
    login  : string,
    password: string,
    name: string,
    city: string
  };

export async function createTeam(input : Inputs)
{
    return (await fetch("http://localhost:5175/api/createteam", {
		method: "post",
		headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
		},

		body: JSON.stringify({
			login: input.login,
			name: input.name,
			password: input.password,
			city: input.city
		})
	}))

}
