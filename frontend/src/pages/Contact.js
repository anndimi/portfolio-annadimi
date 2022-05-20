import React, { useRef } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import '../styles/sweetalert.css'

const Contact = () => {
  const form = useRef()
  const { REACT_APP_USER_ID, REACT_APP_TEMPLATE_ID, REACT_APP_SERVICE_ID } =
    process.env

  const swalWithCustomStyling = Swal.mixin({
    customClass: {
      title: 'alert-title',
      popup: 'alert-popup',
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        `${REACT_APP_SERVICE_ID}`,
        `${REACT_APP_TEMPLATE_ID}`,
        form.current,
        `${REACT_APP_USER_ID}`
      )
      .then(
        (result) => {
          console.log(result.text)
          swalWithCustomStyling.fire({
            title: 'Message sent successfully!',
            backdrop: '#39393966',
            showConfirmButton: false,
            timer: 2000,
          })
        },
        (error) => {
          console.log(error.text)
          swalWithCustomStyling.fire({
            title: 'Something went wrong. Please try again!',
            backdrop: '#39393966',
            showConfirmButton: false,
            timer: 2000,
          })
        }
      )

    form.current.reset()
  }

  return (
    <>
      <ContactContainer>
        <h1>/contact me</h1>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <label>
            name <input type="text" name="user_name" required />
          </label>
          <label>
            e-mail <input type="email" name="user_email" required />
          </label>
          <label>
            message <textarea name="message" required />
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
  justify-content: center;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 80%;
  z-index: 1;
  label {
    display: flex;
    flex-direction: column;
    input {
      height: 30px;
      border: 1px solid transparent;
      font-family: inherit;
      color: inherit;
      background-color: #ffe54c;
      :focus {
        outline: none;
      }
    }
    textarea {
      resize: none;
      height: 300px;
      border: 1px solid transparent;
      font-family: inherit;
      color: inherit;
      background-color: #ffe54c;
      :focus {
        outline: none;
      }
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
