  // // <i class="fa-solid fa-trash"></i>
  // // elementos html
  // const form = document.querySelector('.form')
  // const ul = document.querySelector('.tarefas')

  // // limpaInput
  // function limpaInput(tarefa) {
  //   document.querySelector('.tarefa').value = ''
  // }

  // // criaLi
  // function criaLi() {
  //   const li = document.createElement('li')
  //   return li
  // }

  // // criaTarefa
  // function criaTarefa(tarefa) {
  //   if (!tarefa) return
  //   salvarTarefas()

  //   //validar tarefas
  //   const tarefas = localStorage.getItem('tarefas')
  //   const listaTarefas = JSON.parse(tarefas)

  //   for (let trf of listaTarefas) {
  //     if (trf === tarefa) {
  //       swal("A tarefa já existe na lista!", "Tente adicionar uma nova tarefa.", "error", {
  //         button: "Entendi"
  //       } )
  //       return
  //     }
  //   }

  //   const li = criaLi()
  //   li.innerText = tarefa
  //   btnApagar(li)
  //   ul.appendChild(li)
  //   salvarTarefas()
  // }

  // // btnApagar
  // function btnApagar(li) {
  //   const btnApagar = document.createElement('button')
  //   btnApagar.innerHTML = '<i class="fa-solid fa-trash delete"></i>'
  //   // btnApagar.classList.add('delete')
  //   li.appendChild(btnApagar)
  // }

  // // apagarTarefas
  // ul.addEventListener('click', (e) => {
  //   const elemento = e.target;

  //   if (elemento.classList.contains('delete')) {
  //     elemento.parentElement.parentElement.remove()
  //     salvarTarefas()
  //   }
  // })


  // // envio do form
  // form.addEventListener('submit', (event) => {
  //   event.preventDefault()
  //   const tarefa = form.querySelector('.tarefa').value

  //   criaTarefa(tarefa)
  //   limpaInput()
  // })

  // // salvarTarefas
  // function salvarTarefas() {
  //   const tarefas = document.querySelectorAll('li')
  //   const listaTarefas = []

  //   for (let tarefa of tarefas) {
  //     listaTarefas.push(tarefa.innerText)
  //   }

  //   const tarefasJSON = JSON.stringify(listaTarefas)
  //   localStorage.setItem('tarefas', tarefasJSON)
  // }

  // // carregaTarefasSalvas
  // (function carregaTarefasSalvas() {
  //   const tarefas = localStorage.getItem('tarefas')
  //   const listaTarefas = JSON.parse(tarefas)

  //   for (let tarefa of listaTarefas) {
  //     criaTarefa(tarefa)
  //   }
  // }) ();
