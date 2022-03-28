console.log('JS OK!');

const app = new Vue({
    el: '#app',
    data: {

        toDoList: [{
            text: 'fare la spesa',
            done: false
        },
        {
            text: 'sala ore 20',
            done: false
        },
        {
            text: 'chiamare banca',
            done: false
        },
        {
            text: 'pagare multa',
            done: false
        },
        {
            text: 'giocare a Elden Ring',
            done: false
        },
        ],
        doneList: [],
        index: 0,
        newTask: '',
    },
    methods: {
        taskDone(item) {
            item.done = true;
            this.doneList.push(item);
            console.log(this.doneList);
        },
        lineDone(item) {
            if (item.done === true) {
                return 'line';
            }
        },
        addNewTask() {
            const newTask = this.newTask.trim();
            if (newTask.length > 0) {
                let newObj = {
                    text: this.newTask,
                    done: false
                }
                this.toDoList.push(newObj);
                this.newTask = '';
            }
        }
    }
});
