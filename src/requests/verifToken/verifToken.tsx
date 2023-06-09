export async function sendVerifToken()
{
    return (await fetch(`${import.meta.env.VITE_BACK_PATH}/api/verif/token`, {
		method: "get",
		headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
		},
		body: null
	}))
}