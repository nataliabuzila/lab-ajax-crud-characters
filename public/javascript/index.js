const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI
    .getFullList()
    .then((response) => {
      console.log(response);
    })
    .catch(error => console.log(error));
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    charactersAPI
    .getOneRegister (id)
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI
    .deleteOneRegister (id)
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    charactersAPI
    .updateOneRegister (id, characterObject)
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    charactersAPI
    .createOneRegister (characterObject)
  });
});
