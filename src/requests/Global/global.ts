export async function getTeamName()
{
    fetch('http://localhost:5175/api/global/getname', {
		method: "get",
		headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
		},
		body: null
	})
    .then (res => {return (res.json())})
    .catch(e => {
        console.log(e);
        return null;
    })
}