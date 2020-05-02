import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ScrollArea from 'react-scrollbar';
import { format, parseISO } from 'date-fns';
import { IoLogoBitcoin } from 'react-icons/io';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { Container, Aside, Content, Transaction } from './styles';

export default function Home() {
  const [BTC_CAD_rate, setBTC_CAD_rate] = useState(0);
  const [ETH_CAD_rate, setETH_CAD_rate] = useState(0);

  const [transactions, setTransactions] = useState([]);

  const [CAD_balance, setCAD_balance] = useState(0);
  const [BTC_balance, setBTC_balance] = useState(0);
  const [ETH_balance, setETH_balance] = useState(0);

  const [netWorth, setNetWorth] = useState(0);

  useEffect(() => {
    async function loadRates() {
      const response = await axios
        .create()
        .get(
          'https://cors-anywhere.herokuapp.com/https://api.shakepay.co/rates',
        );

      console.log(response.data);

      const { BTC_CAD, ETH_CAD } = response.data;

      setBTC_CAD_rate(BTC_CAD);
      setETH_CAD_rate(ETH_CAD);
    }
    async function loadTransactions() {
      const response = await axios
        .create()
        .get(
          'https://shakepay.github.io/programming-exercise/web/transaction_history.json',
        );

      console.log(response.data);

      const data = response.data.map(resp => ({
        ...resp,
        formattedCreatedAt: format(
          parseISO(resp.createdAt),
          'dd MMM yy - H:mm:ss',
        ),
      }));

      setTransactions(data);
    }
    loadRates();
    loadTransactions();
  }, []);

  useEffect(() => {
    async function loadBalances() {
      transactions.map(t => {
        switch (t.currency) {
          case 'CAD':
            t.direction === 'debit'
              ? setCAD_balance(CAD_balance - t.amount)
              : setCAD_balance(CAD_balance + t.amount);
            break;

          case 'BTC':
            t.direction === 'debit'
              ? setBTC_balance(BTC_balance - t.amount)
              : setBTC_balance(BTC_balance + t.amount);
            break;

          case 'ETH':
            t.direction === 'debit'
              ? setETH_balance(ETH_balance - t.amount)
              : setETH_balance(ETH_balance + t.amount);
            break;

          default:
            console.log('Currency used isnt supported');
        }
      });
    }

    loadBalances();
  }, [transactions]);

  return (
    <Container>
      <Aside>
        <div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IoLogoBitcoin size={20} color="#999" />
            <strong> Ratings now:</strong>
          </div>
          <div>
            <strong>BTC: </strong>
            <span>{BTC_CAD_rate} CAD</span>
          </div>
          <div>
            <strong>ETH: </strong>
            <span>{ETH_CAD_rate} CAD</span>
          </div>
        </div>
        <p></p>

        <div style={{ marginTop: 30 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FaMoneyBillAlt size={20} color="#999" /> <strong> Balance</strong>
          </div>
          <div>
            <strong>CAD: </strong>
            <span>{CAD_balance} </span>
          </div>
          <div>
            <strong>BTC: </strong>
            <span>{BTC_balance} </span>
          </div>
          <div>
            <strong>ETH: </strong>
            <span>{ETH_balance} </span>
          </div>
          <div style={{ marginTop: 15 }}>
            <strong>NET WORTH: </strong>
            <span>
              {(
                CAD_balance +
                BTC_balance * BTC_CAD_rate +
                ETH_balance * ETH_CAD_rate
              ).toFixed(3)}
            </span>
          </div>
        </div>
      </Aside>
      <p></p>

      <Content>
        <h1>Transactions</h1>

        <ScrollArea
          style={{
            width: '100%',
            marginLeft: '40vw',
            alignSelf: 'center',
            justifyContent: 'center',
          }}
        >
          {transactions
            ? transactions.map(transaction => (
                <Transaction
                  direction={transaction.direction}
                  key={transaction.createdAt}
                >
                  <div>
                    <strong>Date: </strong>
                    <span>{transaction.formattedCreatedAt}</span>
                  </div>
                  <div>
                    <strong style={{ fontSize: 24 }}>Amount: </strong>
                    <span style={{ fontSize: 24 }}>
                      {transaction.amount} {transaction.currency}
                    </span>
                  </div>

                  <div>
                    <strong>Type: </strong>
                    <span>{transaction.type}</span>
                  </div>
                </Transaction>
              ))
            : null}
        </ScrollArea>
      </Content>
    </Container>
  );
}
