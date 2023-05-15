
type Inputs = {
    date  : Date,
    city: string,
  };

  export async function createMatch(input : Inputs)
{
    return (await fetch(`${import.meta.env.VITE_BACK_PATH}/api/globaldata/newteam`, {
		method: "post",
		headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`

		},

		body: JSON.stringify({
			date: input.date,
			city: input.city
		})
	}))

}