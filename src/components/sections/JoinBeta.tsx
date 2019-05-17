// @ts-ignore
import addToMailchimp from "gatsby-plugin-mailchimp"
import React, { useState } from "react"
import styled from "styled-components"
import { Container } from "../global"

export default ({ inverse }: { inverse?: boolean }) => {
  const [email, setEmail] = useState("")
  const [result, setResult] = useState({ msg: "", success: true })

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const r = await addToMailchimp(email)
    setResult(
      r.result === "error"
        ? { msg: "Invalid email, please try again.", success: false }
        : { msg: "You're signed up, stay tuned for an invite!", success: true }
    )
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
            type="email"
            onChange={e => setEmail(e.target.value)}
            placeholder="Email Address"
            name="email"
          />
          <Button type="submit" value="Join Beta" />
        </Form>
        {result.msg ? (
          <p
            style={{
              color: result.success ? "#211E26" : "#d00000",
              fontSize: `20px`
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
