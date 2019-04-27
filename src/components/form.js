import React from "react"

const Form = () => (
  <form
    class="submit-form"
    name="contact"
    method="POST"
    data-netlify="true"
    action="/success"
    netlify-honeypot="bot-field"
  >
    <div class="hidden" style={{ display: "none" }}>
      <label>
        <input type="hidden" name="bot-field" />
      </label>
    </div>
    <div class="form-group">
      <label>
        <span>Your Name</span>
        <input type="text" name="name" placeholder="Your Name" />
      </label>
    </div>
    <div class="form-group">
      <label>
        <span>Your Email</span>
        <input type="email" name="email" placeholder="Your Email Address" />
      </label>
    </div>
    <div class="form-group">
      <label>
        <span>Message: </span>
        <textarea name="message" />
      </label>
    </div>
    <div class="button-group">
      <button type="submit">Send</button>
    </div>
  </form>
)

export default Form
