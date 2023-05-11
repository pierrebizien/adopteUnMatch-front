import '/mnt/nfs/homes/pbizien/Documents/adoptUnMatch/frontend/src/components/Inscription/Inscription.tools.tsx'

interface TeamInput {
		loginOutput: string;
 	 	nameOutput: string;
  		mdpOutput: string;
  		cityOutput: string;
}

export async function createTeam(input : TeamInput)
{
    return (await fetch("http://localhost:5175/api/createteam", {
		method: "post",
		headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
		},

		body: JSON.stringify({
			login: input.loginOutput,
			name: input.nameOutput,
			password: input.mdpOutput,
			city: input.cityOutput
		})
	}))

}
