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

interface TeamInput {
	loginOutput: string;
	mdpOutput: string;
}

export function parseInputCo() : TeamInput
{
	const login = document.forms.namedItem('connectionForm')?.querySelector<HTMLInputElement>('[name="login"]');
	const mdp = document.forms.namedItem('connectionForm')?.querySelector<HTMLInputElement>('[name="password"]');
	if (!login || login.value === "")
	{
		setErrorMessage("Veuillez renseigner un login");
		return ({loginOutput: "", mdpOutput: ""})
	}
	else if (!mdp || mdp.value === "")
	{
		setErrorMessage("Veuillez renseigner un mot de passe")
		return ({loginOutput: "", mdpOutput: ""})
	}
    return ({loginOutput: login.value, mdpOutput: mdp.value})
}

interface responseLoginJSON {

		error_code: number,
		message: string,
		userId: string,
		token: string
}

export function manageResponseLogin(resJSON : responseLoginJSON, setIncorrectCreds : React.Dispatch<React.SetStateAction<boolean>>)
{
	if (resJSON.error_code === 1)
	{
		setIncorrectCreds(true);
	}
	else
	{
		
		localStorage.setItem('token', resJSON.token);
		localStorage.setItem('userId', resJSON.userId);
		window.location.href = "/MatchCreator"
	}
}