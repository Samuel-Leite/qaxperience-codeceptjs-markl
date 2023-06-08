const { I } = inject();

module.exports = {

  create: function(taskName){
    I.amOnPage('/')
    I.fillField('input[placeholder$=Task]', taskName)
    I.click('Create')
  },

  haveTask: function(taskName){
    // css aonde esta a variavel para validar = '.task-item'
    I.see(taskName, '.task-item')
  },

  popUpHaveText: function(text){
    // Então devo ver uma mensagem de duplicidade
    I.see(text, '.swal2-html-container')
  }
}
