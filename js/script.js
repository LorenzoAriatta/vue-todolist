console.log('JS OK!');

const app = new Vue({
    el: '#app',
    data: {

        toDoList: [{
            text: 'Create a Portfolio site',
            done: false
        },
        {
            text: 'Pay bills',
            done: false
        },
        {
            text: 'JavaScript practice',
            done: false
        },
        {
            text: 'Recording Session',
            done: false
        },
        {
            text: 'Friday 10pm Rehersal Room',
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
        },
        taskIsDone(item) {
            item.done = true;
            if (item.done) {
                this.doneList.push(item);
            }
        }
    }
});
