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
        ]
    }
});