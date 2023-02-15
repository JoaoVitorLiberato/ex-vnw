import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  background-color: #800080;
  padding: 50px;

  @media(max-width:600px) {
    padding: 0;
  }
`

export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 46px;
  color: #FFFFFF;
  margin-bottom: 90px;

  @media(max-width:600px) {
    text-align: center;
    padding-top: 30px;
  }
`

export const Limitador = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media(max-width:600px) {
    flex-direction: column;
  }
`

export const Card = styled.div`
  width: 290px;
  height: 350px;
  background-color: yellow;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 20px;
  padding: 20px;

  border-radius: 10px;

  img {
    width: 150px;
    height: 200px;
  }
  h3 {
    font-weight: 700;
    font-size: 48px;

    color: #ED2E2E;
  }
`

