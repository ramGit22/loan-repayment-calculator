import React, { useState } from 'react';
import styled from 'styled-components';

const LoanCalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
`;

const InputLabel = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  height: 30px;
  width: 200px;
  padding: 5px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  height: 40px;
  width: 200px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  margin-top: 10px;
  cursor: pointer;
`;

const Result = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`;

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanDuration, setLoanDuration] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateMonthlyPayment = () => {
    const monthlyInterestRate = interestRate / 12 / 100;
    const numberOfPayments = loanDuration * 12;
    const monthlyPayment = (
      (monthlyInterestRate * loanAmount) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments))
    ).toFixed(2);
    setMonthlyPayment(monthlyPayment);
  };

  return (
    <LoanCalculatorContainer>
      <InputContainer>
        <InputLabel htmlFor="loanAmount">Loan Amount (€):</InputLabel>
        <Input
          type="number"
          id="loanAmount"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor="interestRate">
          Yearly Interest Rate (%):
        </InputLabel>
        <Input
          type="number"
          id="interestRate"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor="loanDuration">Loan Duration (Years):</InputLabel>
        <Input
          type="number"
          id="loanDuration"
          value={loanDuration}
          onChange={(e) => setLoanDuration(e.target.value)}
        />
      </InputContainer>
      <Button onClick={calculateMonthlyPayment}>
        Calculate Monthly Payment
      </Button>
      {monthlyPayment !== 0 && (
        <Result>Monthly Payment: €{monthlyPayment}</Result>
      )}
    </LoanCalculatorContainer>
  );
};

export default LoanCalculator;
