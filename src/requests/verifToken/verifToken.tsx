export async function sendVerifToken()
{
    return (await fetch("http://localhost:5175/api/verifToken", {
		method: "get",
		headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
		},
		body: null
	}))
}