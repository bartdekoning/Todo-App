//create a new Vue
var app = new Vue ({

    el: "#wrapper",

    //data
    data: {

        //placeholder that will tell the user what to do
        info:'What do you have to do?',

        //set the value of the form to be empty
        newTodo: '',

        //array with items, each contains the text and its status of completion
        todos: [
            {
                text: "Check this Todo item",
                complete: false
            },
            {
                text: "Delete this Todo item",
                complete: false
            }

        ],

        //set active to false as default, this is used to show and hide the form
        newIsActive: false,

    },

    //functions
    methods: {

        //adds a new item to the array
        addTodo(e) {
            e.preventDefault();

            //checks if the input is empty, else add the new item
            if(this.newTodo === '') {

                //update the info to tell the user to fill in the form
                this.info = 'There must be something!'
            } else {

                //pushes the new data to the array and sets its completion to false as default
                this.todos.push({text: this.newTodo, complete: false});
                //empty the input field again
                this.newTodo = '';
                this.info = 'What do you have to do?';
                //sets active to false again to hide the form
                this.newIsActive= false;
            }

        },

        //sets isActive to true so that the class .active is added and the form will be visible
        toggleForm(e) {
            e.preventDefault();

            this.newIsActive = true;

            //set focus to input field
            this.$refs.input.focus();
        },


        //removes item from the array
        removeTodo(todo) {

            //save the item which need to be deleted to index
            var index = this.todos.indexOf(todo);

            //remove the index(item) form the array
            this.todos.splice(index, 1);
        },

        //set the complete value of the item to true
        done(todo){
            todo.complete = true
        },

        //returns the value of complete. if it is set to true, a class will be added
        isComplete(todo){
            return todo.complete;
        },

        //removes all data from array
        removeAll(e){
            e.preventDefault();
            this.todos = [];
        }
    }

});