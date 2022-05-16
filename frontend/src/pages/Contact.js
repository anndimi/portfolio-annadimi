import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <>
      <ContactContainer>
        <h1>contact me</h1>
        <ContactForm>
          <label>
            name <input type="text" name="name" />
          </label>
          <label>
            e-mail <input type="email" name="e-mail" />
          </label>
          <label>
            message <textarea name="message" />
          </label>
          <button className="submit-btn" type="submit">
            send
          </button>
        </ContactForm>
      </ContactContainer>
    </>
  )
}

export default Contact

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  margin: 0 auto;
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 80%;
  label {
    display: flex;
    flex-direction: column;
    input {
      height: 30px;
      border: 1px solid transparent;
      font-family: inherit;
      color: inherit;
      background-color: #ffe54c;
    }
    textarea {
      resize: none;
      height: 300px;
      border: 1px solid transparent;
      font-family: inherit;
      color: inherit;
      background-color: #ffe54c;
    }
  }
  .submit-btn {
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 1px;
    padding: 13px 50px 13px;
    outline: 0;
    border: 1px solid black;
    cursor: pointer;
    position: relative;
    background-color: rgba(0, 0, 0, 0);
    width: 50%;
    align-self: center;
    font-family: inherit;
  }

  .submit-btn:after {
    content: '';
    background-color: #ffe54c;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
  }

  .submit-btn:hover:after {
    top: 0px;
    left: 0px;
  }
`
