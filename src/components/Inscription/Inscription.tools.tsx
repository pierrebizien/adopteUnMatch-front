
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
	nameOutput: string;
	mdpOutput: string;
	cityOutput: string;
}

export function parseInputInscr() : TeamInput
{
	const login = document.forms.namedItem('connectionForm')?.querySelector<HTMLInputElement>('[name="login"]');
	const mdp = document.forms.namedItem('connectionForm')?.querySelector<HTMLInputElement>('[name="password"]');
	const city = document.forms.namedItem('connectionForm')?.querySelector<HTMLInputElement>('[name="city"]');
	const name = document.forms.namedItem('connectionForm')?.querySelector<HTMLInputElement>('[name="name"]');
	if (!login || login.value === "")
	{
		setErrorMessage("Veuillez renseigner un login");
		return {loginOutput: "", mdpOutput: "", cityOutput: "", nameOutput: ""}	
	}
	else if (!mdp || mdp.value === "")
	{
		setErrorMessage("Veuillez renseigner un mot de passe")
		return {loginOutput: "", mdpOutput: "", cityOutput: "", nameOutput: ""}	
	}
	else if  (!name || name.value === "")
	{
		setErrorMessage("Veuillez renseigner un nom d'equipe")
		return {loginOutput: "", mdpOutput: "", cityOutput: "", nameOutput: ""}	
	}
	else if (!city || city.value === "")
	{
		setErrorMessage("Veuillez renseigner une ville")
		return {loginOutput: "", mdpOutput: "", cityOutput: "", nameOutput: ""}	
	}
    return ({loginOutput: login.value, mdpOutput: mdp.value, cityOutput: city.value, nameOutput: name.value})
}