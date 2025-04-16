import axios from "axios"
import Swal from "sweetalert2"
import { throttle } from "throttle-debounce"

const TOKEN_NAME = "private"

const Main = () => ({
  showSection: "taskSection",
  email: "",
  nickname: "",
  password: "",
  islogin: false,
  todos: [],
  task: "",
  showDialog: false,
  editText: "",
  //editing: null,
  //tempContent: "",
  clearText() {
    this.email = ""
    this.nickname = ""
    this.password = ""
    this.tempContent = ""
  },
  init() {
    const token = localStorage.getItem(TOKEN_NAME)
    if (token) {
      this.islogin = true
      this.showtaskInput()
      this.getTodos()
    }
  },
  removeTodo(todos, id) {
    const Idx = todos.findIndex((todo) => todo.id == id)
    if (Idx >= 0) {
      todos.splice(Idx, 1)
    }
  },
  showtaskInput() {
    this.showSection = "taskSection"
  },
  showlogin() {
    this.showSection = "loginSection"
  },
  showsignUp() {
    this.showSection = "signUpSection"
  },

  //$el alpine內建方法 dataset作法
  //modifyOpen() {
  //  this.editing = this.todo.id
  //},
  //async modifyTodos(id, tempContent) {
  //  const token = localStorage.getItem(TOKEN_NAME)
  //  if (token && tempContent != " ") {
  //    const url = `https://todoo.5xcamp.us/todos/${id}`
  //    const modifyData = { todo: { content: this.tempContent } }
  //    const config = { headers: { Authorization: token } }
  //    try {
  //      const resp = await axios.put(url, modifyData, config)
  //      console.log(resp)
  //      this.editing = null
  //      this.clearText()
  //      this.getTodos()
  //    } catch (err) {
  //      console.log(err)
  //    }
  //  }
  //},
  editTodos(id) {
    const todo = this.todos.find((todo) => todo.id == id)
    console.log(todo)

    if (todo) {
      this.editText = todo.content
      this.$refs.modal.dataset.id = id
      console.log(this.$refs.modal.dataset.id)
      this.$refs.modal.showModal()
    }
  },

  async updateText() {
    const id = this.$refs.modal.dataset.id
    console.log(id)
    const token = localStorage.getItem(TOKEN_NAME)
    if (id && token) {
      const url = `https://todoo.5xcamp.us/todos/${id}`
      const todoData = { todo: { content: this.editText } }
      const config = { headers: { Authorization: token } }
      try {
        this.$refs.modal.close() //關掉視窗
        const todo = this.todos.find((todo) => todo.id == id)
        todo.content = this.editText //取得最新資料
        await axios.put(url, todoData, config)
      } catch {
        console.log("error")
      }
    }
  },
  async toggleTodo(id) {
    const token = localStorage.getItem(TOKEN_NAME)
    if (token) {
      const url = `https://todoo.5xcamp.us/todos/${id}/toggle`
      const config = { headers: { Authorization: token } }
      try {
        const resp = await axios.patch(url, null, config)
        console.log(resp.data.completed_at)
      } catch {
        console.log("error")
      }
    }
  },
  async deleteTodos(id) {
    if (confirm("確定要刪除嗎?")) {
      const token = localStorage.getItem(TOKEN_NAME)
      //console.log(this.$el.dataset.id)
      //console.log(url)
      if (token) {
        //const id = this.$el.dataset.id html <!--x-bind:data-id="todo.id"-->
        const url = `https://todoo.5xcamp.us/todos/${id}`
        const config = { headers: { Authorization: token } }
        this.removeTodo(this.todos, id)
        try {
          //this.$el.parentNode.parentNode.remove()
          const resp = await axios.delete(url, config)
          console.log(resp)
          //this.getTodos()
          //this.getTodos() //直接拿api
        } catch (err) {
          console.log(err)
        }
      }
    }
  },
  async addTodos() {
    const token = localStorage.getItem(TOKEN_NAME)
    if (token && this.task != "") {
      const url = "https://todoo.5xcamp.us/todos"
      const todoData = { todo: { content: this.task } }
      const config = { headers: { Authorization: token } }

      try {
        const resp = await axios.post(url, todoData, config) //實際上傳 透過post
        //this.todos.unshift(resp.data) //表視覺效果 無實際上傳
        console.log(resp)
        console.log(resp.data)
        this.task = ""
        this.getTodos()
        //this.getTodos() 再取一次api
      } catch (err) {
        console.log(err)
        Swal.fire({
          title: "錯誤",
          html: "無法刪除，請稍後在試",
          icon: "error",
          confirmButtonText: "確認",
        })
      }
    }

    //console.log(this.task)
    //this.todos.push(this.task)
    //this.task = ""
  },
  async getTodos() {
    // 本機的存儲資料
    const token = localStorage.getItem(TOKEN_NAME)
    //要向哪個網址請求api
    const url = "https://todoo.5xcamp.us/todos"
    //如果存在的話
    if (token) {
      //headers資料
      const config = { headers: { Authorization: token } }
      try {
        const resp = await axios.get(url, config)
        const todos = resp.data.todos
        //console.log(todos)
        this.todos = todos
      } catch (err) {
        console.log(err)
      }
    }
  },
  async logout() {
    const url = "https://todoo.5xcamp.us/users/sign_out"
    const token = localStorage.getItem(TOKEN_NAME)
    if (token) {
      //axios.defaults.headers.common["Authorization"] = token

      try {
        const config = { headers: { Authorization: token } }
        await axios.delete(url, config)
      } catch {
      } finally {
        localStorage.removeItem(TOKEN_NAME)
        //axios.defaults.headers.common["Authorization"] = null
        this.islogin = false
        this.showlogin()
        this.todos = []
        Swal.fire({
          title: "已登出",
          icon: "error",
          confirmButtonText: "確認",
        })
      }
      //localStorage.removeItem(TOKEN_NAME)
      //const resp = await axios.delete(url)
      //console.log(resp)
    }
  },
  async login() {
    if (this.email != "" && this.password != "") {
      const userData = {
        user: {
          email: this.email,
          password: this.password,
        },
      }
      try {
        const resp = await axios.post("https://todoo.5xcamp.us/users/sign_in", userData)
        console.log(resp.headers.authorization)
        localStorage.setItem(TOKEN_NAME, resp.headers.authorization)
        this.clearText()
        this.islogin = true
        this.showtaskInput()
        this.getTodos()
      } catch (err) {
        console.log(err)
        Swal.fire({
          title: "OOPS",
          html: err.response.data.message,
          icon: "error",
          confirmButtonText: "確認",
        })
      }
    }
  },

  async sign() {
    if (this.email != "" && this.nickname != "" && this.password != "") {
      const userData = {
        user: {
          email: this.email,
          nickname: this.nickname,
          password: this.password,
        },
      }
      try {
        await axios.post("https://todoo.5xcamp.us/users", userData)
        this.clearText()
        this.showlogin()
      } catch (err) {
        console.log(err.response.data.error.join(""))
        this.clearText()
        Swal.fire({
          title: "OOPS",
          html: err.response.data.error.join("<br />"),
          icon: "error",
          confirmButtonText: "確認",
        })
      }
    }
  },
})

export default Main
