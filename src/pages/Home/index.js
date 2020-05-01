import React, { useState, useEffect } from 'react';
import { GiRaceCar } from 'react-icons/gi';
import { FaMotorcycle } from 'react-icons/fa';
import axios from 'axios';
import history from '../../services/history';

import logo from '../../assets/webmotors.png';
import { Container, Content, SelectionDiv, Option, Form } from './styles';

export default function Home() {
  useEffect(() => {
    async function loadChallenge() {
      const response = await axios
        .create()
        .get('http://desafioonline.webmotors.com.br/api/OnlineChallenge/Make');

      console.log(response.data);
    }

    loadChallenge();
  }, []);

  async function handleClick(e) {
    e.preventDefault();
  }

  return (
    <Container>
      <header>
        <img src={logo} />
      </header>

      <Content>
        <header>
          <SelectionDiv>
            <Option>
              <GiRaceCar size={40} color="red" />
              <div>
                <span>COMPRAR</span>
                <strong>CARROS</strong>
              </div>
            </Option>

            <Option>
              <FaMotorcycle size={30} color="gray" />
              <div>
                <span>COMPRAR</span>
                <strong>MOTOS</strong>
              </div>
            </Option>
          </SelectionDiv>
          <button type="button">Vender meu carro</button>
        </header>

        <Form></Form>
      </Content>
    </Container>
  );
}
