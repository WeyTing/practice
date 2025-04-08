import axios from "axios"
import Swal from "sweetalert2"

const TOKEN_NAME = "private"

const Main = () => ({
  showSection: "taskSection",
  email: "",
  nickname: "",
  password: "",
  islogin: false,
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
  async logout() {
    const url = "https://todoo.5xcamp.us/users/sign_out"
    const token = localStorage.getItem(TOKEN_NAME)
    if (token) {
      axios.defaults.headers.common["Authorization"] = token
      localStorage.removeItem(TOKEN_NAME)
      const resp = await axios.delete(url)
      console.log(resp)
      this.showlogin()
      this.islogin = false
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
      } catch (err) {
        console.log(err.response.data)
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
