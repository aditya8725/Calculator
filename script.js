var form = document.getElementById("formId");
function submitForm(event) 
{
  event.preventDefault();
}
form.addEventListener("submit", submitForm);
