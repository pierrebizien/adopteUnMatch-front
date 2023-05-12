export function setErrorMessage(error_message : string) : void
{
    const tmp = document.createElement('h2');
    tmp.classList.add('errorMessageInscription')
    tmp.innerText = error_message;
    document.getElementById('ancreErrMess')?.appendChild(tmp);
}

export function deleteErrorMessage() : void
{
    document.querySelector('.errorMessageInscription')?.remove();
}

export function parseInputCo() : Number | Object
{
	const login = document.forms.namedItem('connectionForm')?.querySelector<HTMLInputElement>('[name="login"]');
	const mdp = document.forms.namedItem('connectionForm')?.querySelector<HTMLInputElement>('[name="password"]');
	if (!login || login.value === "")
	{
		setErrorMessage("Veuillez renseigner un login");
		return 1;
	}
	else if (!mdp || mdp.value === "")
	{
		setErrorMessage("Veuillez renseigner un mot de passe")
		return 1;
	}
    return ({loginOutput: login.value, mdpOutput: mdp.value})
}

interface responseLoginJSON {

		error_code: number,
		message: string,
		userId: string,
		token: string
}

export function manageResponseLogin(resJSON : responseLoginJSON)
{
	if (resJSON.error_code === 1)
	{
		setErrorMessage('Credentials incorrects')
	}
	else
	{
		
		localStorage.setItem('token', resJSON.token);
		localStorage.setItem('userId', resJSON.userId);
		window.location.href = "/MatchFinder"
	}
}