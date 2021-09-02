
const body = {
    data() {
        return {
            appTitle: 'Список дел на Vue',
            inputValue: '',
            isAppActive: false,
            isActive: false,
            inputPlaceholder: 'Введите задачу',
            tasks: []
        }
    },
    methods: {
        inputCreateTaskHandler(event) {
            this.inputTask = event.target.value
        },
        addNewTask() {
            let newTask = this.inputTask
            if (newTask !== undefined) {   // проверка введены ли символы в input
                let newTaskWithOutSpaces = newTask.replace(/ /g, "")
                if (newTaskWithOutSpaces !== '') {  // проверка не состоит ли строка только из пробелов
                    this.tasks.unshift(this.inputTask)
                    this.inputTask = ''
                }
            }
        },
        toUpperCase(item) {
            let firstSymbol = item[0].toUpperCase()
            return firstSymbol + item.substr(1)
        },
        inputKeyPress(event) {
            if (event.key === 'Enter') {
                this.addNewTask()
            }
        },
        deleteTask(index) {
            this.tasks.splice(index, 1)
        }
    }
}

Vue.createApp(body).mount('body')