import axios from "axios"
import Swal from "sweetalert2"

const Main = () => ({
  showSection: "taskSection",
  email: "",
  nickname: "",
  password: "",
  clearText() {
    this.email = ""
    this.nickname = ""
    this.password = ""
  },
  showlogin() {
    this.showSection = "loginSection"
  },
  showsignUp() {
    this.showSection = "signUpSection"
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
        localStorage.setItem("private", resp.headers.authorization)
        this.clearText()
      } catch (err) {
        console.log(err)
      }
    }
  },
})

export default Main
