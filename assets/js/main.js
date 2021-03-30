var app = new Vue ({
  el: '#root',
  data: {
    text: '',
    todosList: [
      {
        title: "Portale la macchina dal meccanico",
        status: 'todo'
      },
      {
        title: "Comprare il pane",
        status: 'todo'
      },
      {
        title: "Finire esercizio di Boolean",
        status: 'complete'
      }
    ],
  },
  computed: {
    sort: function () {
      let statusComplete = this.todosList.filter((todo) => todo.status == 'complete');
      let statusTodo = this.todosList.filter((todo) => todo.status == 'todo');

      return [...statusTodo, ...statusComplete];

    }
  },
  methods: {
    add: function () {
      if (this.text != "") {
        let newTodo = {
          title: this.text,
          status: 'todo'
        }
        this.todosList.push(newTodo)
        this.text = ''
      }
    },
    done: function (todo) {
      let index = this.todosList.indexOf(todo)
      this.todosList[index].status = 'complete';
    },
    remove: function (todo) {
      let index = this.todosList.indexOf(todo)
      this.todosList.splice(index,1)
    },
    edit : function (todo) {
        let i = this.todosList.indexOf(todo);
        this.text = this.todosList[i].title;
        this.todosList.splice(i ,1);
      console.log(this.text);
    },
  }

});
