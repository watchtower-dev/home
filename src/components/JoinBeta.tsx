import addToMailchimp from "gatsby-plugin-mailchimp"
import React, { FormEvent, useState } from "react"
import styled from "styled-components"
import { Container } from "./global"

export default ({ inverse }: { inverse?: boolean }) => {
  const [email, setEmail] = useState("")
  const [result, setResult] = useState({ msg: "", success: true })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const r = await addToMailchimp(email)
      setResult(
        r.result === "error"
          ? { msg: "Invalid email, please try again.", success: false }
          : {
              msg: "You're signed up, stay tuned for an invite!",
              success: true
            }
      )
    } catch (e) {
      setResult({
        msg: "Failed, please disable content blockers and try again.",
        success: false
      })
    }
  }

  return (
    <Container
      style={{
        alignItems: `center`,
        display: `flex`,
        justifyContent: `center`,
        marginBottom: inverse ? `40px` : `0`,
        marginTop: inverse ? `0` : `40px`
      }}
    >
      <div style={{ display: `flex`, flexDirection: `column` }}>
        <Form onSubmit={handleSubmit}>
          <input
            aria-label="Email Address"
            name="email"
            onChange={e => setEmail(e.target.value)}
            placeholder="Email Address"
            type="email"
          />
          <Button aria-label="Join Beta" type="submit" value="Join Beta" />
        </Form>
        {result.msg ? (
          <p
            style={{
              color: result.success ? "#211E26" : "#d00000",
              fontSize: `18px`
            }}
          >
            {result.msg}
          </p>
        ) : null}
      </div>
    </Container>
  )
}

const Form = styled.form`
  display: flex;
  flex-flow: row wrap;
  align-items: center;

  input {
    vertical-align: middle;
    margin: 5px 10px 5px 0;
    padding: 10px;
    border: 1px solid ${props => props.theme.color.black.lighter};
    border-radius: 3px;
  }

  input[type="email"] {
    width: 325px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    align-items: stretch;

    input {
      margin: 10px 0;
    }
  }
`
const Button = styled.input`
  background: ${props => props.theme.color.secondary};
  color: ${props => props.theme.color.white.regular};
  cursor: pointer;
  text-transform: uppercase;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: ${props => props.theme.color.white.regular};
    color: ${props => props.theme.color.secondary};
  }
`
