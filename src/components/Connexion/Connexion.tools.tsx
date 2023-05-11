import ReactDOM from "react-dom";

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
    const login = document.forms['connectionForm']['login'];
    const mdp = document.forms['connectionForm']['password'];
	if (login.value === "")
	{
		setErrorMessage("Veuillez renseigner un login");
		return 1;
	}
	else if (mdp.value === "")
	{
		setErrorMessage("Veuillez renseigner un mot de passe")
		return 1;
	}
    return ({loginOutput: login.value, mdpOutput: mdp.value})
}