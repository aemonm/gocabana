import React from "react"
import { navigateTo } from "gatsby-link"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  render() {
    return (
      <form
        class="submit-form"
        name="contact"
        method="POST"
        data-netlify="true"
        action="/success/"
        onSubmit={this.handleSubmit}
        data-netlify-honeypot="bot-field"
      >
        <div class="hidden">
          <label>
            <input
              type="hidden"
              name="bot-field"
              value="contact"
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div class="form-group">
          <label>
            <span>Your Name</span>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div class="form-group">
          <label>
            <span>Your Email</span>
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div class="form-group">
          <label>
            <span>Message: </span>
            <textarea name="message" onChange={this.handleChange} />
          </label>
        </div>
        <div class="button-group">
          <button type="submit">Send</button>
        </div>
      </form>
    )
  }
}

export default Contact
