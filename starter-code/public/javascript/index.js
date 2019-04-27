const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {

  }

  document.getElementById('fetch-one').onclick = function () {

  }

  document.getElementById('delete-one').onclick = function () {

    let id = document.getElementById("character-id-delete").value;



    axios({
      url: `http://localhost:8000/characters/${id}`,
      method: 'Delete'
    }).then(data => {
      if (data.status === 200) {
        alert("deletado com sucesso!")
      }
    }).catch(error => {

      if (error) {
        alert("Id informado nao existe");
      }


    })



  }

  document.getElementById('edit-character-form').onsubmit = function () {



  }

  document.getElementById('new-character-form').onsubmit = function () {

    var name = document.getElementById("name").value;
    var occupation = document.getElementById("occupation").value;
    var weapon = document.getElementById("weapon").value;
    var cartoon = document.getElementById("cartoon").checked;

    axios({
      url: 'http://localhost:8000/characters',
      method: 'get'
    }).then(response => {

      var ultID = response.data[response.data.length - 1].id


      var objNewCharacter = {
        "id": ultID + 1,
        "name": name,
        "occupation": occupation,
        "weapon": weapon,
        "cartoon": cartoon

      }

      axios({
        url: 'http://localhost:8000/characters',
        method: 'post',
        data: objNewCharacter
      }).catch(error => {

        console.log(error)

      })



    }).catch(error => {

      console.log(error)

    })




  }


})