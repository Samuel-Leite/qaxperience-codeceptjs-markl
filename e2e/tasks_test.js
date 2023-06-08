Feature('tasks')

const tasks = new DataTable(['name'])

tasks.add(['Fazer compras'])
tasks.add(['Estudar JS'])
tasks.add(['Ler um livro Node.js'])

Data(tasks).Scenario('deve cadastrar uma nova tarefa', ({ I, tasksPage, current }) => {

    const taskName = current.name

    I.deleteByHelper(taskName)

    tasksPage.create(taskName)
    tasksPage.haveTask(taskName)
})

Scenario('não deve cadastrar tarefas com nome duplicado', ({ I, tasksPage }) => {

    // Dado que eu tenha uma nova tarefa
    const task = {
        name: 'Pagar a fatura do cartão',
        is_done: false
    }

    I.deleteByHelper(task.name)
    I.postTask(task)
    
    tasksPage.create(task.name)
    tasksPage.popUpHaveText('Task already exist!')
}).tag('critical')