class Todo {
    Texto
    Prioridade
    Feito = false   
    constructor(texto,prioridade){
        this.Texto = texto
        this.Prioridade = prioridade
    }
}
let arraytodo = []

function ToDo(texto,prioridade,arraytodo){
let objetoToDo = new Todo(texto,prioridade)
if(!arraytodo.some(x => x.Texto == texto)){
arraytodo.push(objetoToDo)
}
return objetoToDo
}

function atualizarTodo(textoAntigo,textoNovo,arraytodo){
let atualizado = true
arraytodo.forEach(Todo =>{
    if(Todo.Texto == textoAntigo){
        Todo.texto = textoNovo
        atualizado = true
    }
})
return atualizado
}
 
function concluirTodo(arraytodo,texto){
let concluido = false
arraytodo.forEach(Todo =>{
    if(Todo.Texto == texto){
        if(Todo.Feito){
            Todo.Feito = false
        }else{
            Todo.Feito = true
        }
        concluido = true
         }
})
return concluido
}

function excluirTodo(arraytodo,texto){
let index
let removido = false
arraytodo.forEach(Todo =>{
    if(Todo.texto == texto){
     index = arraytodo.indexof(Todo)
     removido = true
    }
})
arraytodo.splice(index,1)
return removido
}

function pesquisarTodo(arraytodo,texto){
    let pesquisa = false
    arraytodo.forEach(Todo =>{
        if(Todo.Texto.includes(texto)){
            pesquisa = true
        }
    })
    return pesquisa
}

function ordenarCrescente(arraytodo){
    arraytodo.sort((a,b) => a.Prioridade - b.Prioridade)
    return arraytodo
}

function ordenarDecrescente(arraytodo){
    arraytodo.sort((a,b) => b.Prioridade - a.Prioridade)
    return arraytodo
}