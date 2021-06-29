const formElement = document.querySelector("#form");
formElement.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();

  const validate = document.getElementById("create-input-product").value;

  if (validate.trim() === "") {
    alert("Preencha o campo");
    return false;
  }
  createRegister(event);
}

function createRegister(event) {
  const createInputName = document.getElementById("create-input-product");

  const createInputPrice = document.getElementById("create-input-price");

  const format = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(createInputPrice.value);

  const tdProduct = document.createElement("td");
  const tdPrice = document.createElement("td");

  tdProduct.textContent = createInputName.value;
  tdPrice.textContent = format;

  const id = Date.now();
  const idNode = document.createTextNode(id);
  const idTag = document.createElement("td");
  idTag.appendChild(idNode);

  const body = document.getElementById("tbody");
  const newTr = document.createElement("tr");

  body.appendChild(newTr);

  newTr.appendChild(idTag);
  newTr.appendChild(tdProduct);
  newTr.appendChild(tdPrice);

  document.getElementById("create-input-product").value = "";
  document.getElementById("create-input-price").value = "";
}
