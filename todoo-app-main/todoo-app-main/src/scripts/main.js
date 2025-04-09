import axios from "axios"
import Swal from "sweetalert2"

const TOKEN_NAME = "private"

const Main = () => ({
  showSection: "taskSection",
  email: "",
  nickname: "",
  password: "",
  islogin: false,
  todos: [],
  task: "",
  clearText() {
    this.email = ""
    this.nickname = ""
    this.password = ""
  },
  init() {
    const token = localStorage.getItem(TOKEN_NAME)
    if (token) {
      this.islogin = true
      this.showtaskInput()
      this.getTodos()
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
  async addTodos() {
    const token = localStorage.getItem(TOKEN_NAME)
    if (token && this.task != "") {
      const url = "https://todoo.5xcamp.us/todos"
      const todoData = { todo: { content: this.task } }
      const config = { headers: { Authorization: token } }

      try {
        const resp = await axios.post(url, todoData, config) //實際上傳 透過post
        console.log(resp)
        console.log(resp.data)
        this.task = ""
        this.todos.unshift(resp.data) //表視覺效果 無實際上傳
      } catch (err) {
        console.log(err)
        Swal.fire({
          title: "錯誤",
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
    //要向哪個網址請求api
    const url = "https://todoo.5xcamp.us/todos"
    // 本機的存儲資料
    const token = localStorage.getItem(TOKEN_NAME)
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
