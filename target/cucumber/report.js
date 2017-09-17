$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('net\masterthought\example\ATM.feature');
formatter.feature({
  "line": 1,
  "name": "Account Holder withdraws cash",
  "description": "As an Account Holder\nI want to withdraw cash from an ATM\nSo that I can get money when the bank is closed",
  "id": "account-holder-withdraws-cash",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 18,
  "name": "Account has sufficient funds",
  "description": "",
  "id": "account-holder-withdraws-cash;account-has-sufficient-funds;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@myone"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "the account balance is 1004",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the card is valid",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the machine contains 100",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the Account Holder requests 20",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the ATM should dispense 20",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "the account balance should be 984",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the card should be returned",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "1004",
      "offset": 23
    }
  ],
  "location": "ATMScenario.createAccount(int)"
});
formatter.result({
  "duration": 115797957,
  "status": "passed"
});
formatter.match({
  "location": "ATMScenario.createCreditCard()"
});
formatter.result({
  "duration": 36266,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 21
    }
  ],
  "location": "ATMScenario.createATM(int)"
});
formatter.result({
  "duration": 61867,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 28
    }
  ],
  "location": "ATMScenario.requestMoney(int)"
});
formatter.result({
  "duration": 52480,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 24
    }
  ],
  "location": "ATMScenario.checkMoney(int)"
});
formatter.result({
  "duration": 2623578,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "984",
      "offset": 30
    }
  ],
  "location": "ATMScenario.checkBalance(int)"
});
formatter.result({
  "duration": 67413,
  "status": "passed"
});
formatter.match({
  "location": "ATMScenario.cardShouldBeReturned()"
});
formatter.result({
  "duration": 27734,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Account has sufficient funds",
  "description": "",
  "id": "account-holder-withdraws-cash;account-has-sufficient-funds;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@myone"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "the account balance is 1001",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the card is valid",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the machine contains 100",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the Account Holder requests 20",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the ATM should dispense 20",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "the account balance should be 981",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the card should be returned",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "1001",
      "offset": 23
    }
  ],
  "location": "ATMScenario.createAccount(int)"
});
formatter.result({
  "duration": 127574,
  "status": "passed"
});
formatter.match({
  "location": "ATMScenario.createCreditCard()"
});
formatter.result({
  "duration": 17920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 21
    }
  ],
  "location": "ATMScenario.createATM(int)"
});
formatter.result({
  "duration": 49920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 28
    }
  ],
  "location": "ATMScenario.requestMoney(int)"
});
formatter.result({
  "duration": 49067,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 24
    }
  ],
  "location": "ATMScenario.checkMoney(int)"
});
formatter.result({
  "duration": 44800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "981",
      "offset": 30
    }
  ],
  "location": "ATMScenario.checkBalance(int)"
});
formatter.result({
  "duration": 42666,
  "status": "passed"
});
formatter.match({
  "location": "ATMScenario.cardShouldBeReturned()"
});
formatter.result({
  "duration": 19627,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Account has sufficient funds again",
  "description": "",
  "id": "account-holder-withdraws-cash;account-has-sufficient-funds-again",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "the account balance is 300",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "the card is valid",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the machine contains 300",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the Account Holder requests 20",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the ATM should dispense 20",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "the account balance should be 280",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "the card should be returned",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 23
    }
  ],
  "location": "ATMScenario.createAccount(int)"
});
formatter.result({
  "duration": 96853,
  "status": "passed"
});
formatter.match({
  "location": "ATMScenario.createCreditCard()"
});
formatter.result({
  "duration": 26880,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 21
    }
  ],
  "location": "ATMScenario.createATM(int)"
});
formatter.result({
  "duration": 63574,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 28
    }
  ],
  "location": "ATMScenario.requestMoney(int)"
});
formatter.result({
  "duration": 65280,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 24
    }
  ],
  "location": "ATMScenario.checkMoney(int)"
});
formatter.result({
  "duration": 72960,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "280",
      "offset": 30
    }
  ],
  "location": "ATMScenario.checkBalance(int)"
});
formatter.result({
  "duration": 153600,
  "status": "passed"
});
formatter.match({
  "location": "ATMScenario.cardShouldBeReturned()"
});
formatter.result({
  "duration": 35840,
  "status": "passed"
});
formatter.uri('net\masterthought\example\ATMK.feature');
formatter.feature({
  "line": 1,
  "name": "Account Holder withdraws cash",
  "description": "As an Account Holder\nI want to withdraw cash from an ATM\nSo that I can get money when the bank is closed",
  "id": "account-holder-withdraws-cash",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 17,
  "name": "Account has sufficient funds",
  "description": "",
  "id": "account-holder-withdraws-cash;account-has-sufficient-funds;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "the account balance is 100",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the card is valid",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the machine contains 100",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the Account Holder requests 20",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the ATM should dispense 20",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the account balance should be 80",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the card should be returned",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 23
    }
  ],
  "location": "ATMScenario.createAccount(int)"
});
formatter.result({
  "duration": 2599685,
  "status": "passed"
});
formatter.match({
  "location": "ATMScenario.createCreditCard()"
});
formatter.result({
  "duration": 25173,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 21
    }
  ],
  "location": "ATMScenario.createATM(int)"
});
formatter.result({
  "duration": 70400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 28
    }
  ],
  "location": "ATMScenario.requestMoney(int)"
});
formatter.result({
  "duration": 48640,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 24
    }
  ],
  "location": "ATMScenario.checkMoney(int)"
});
formatter.result({
  "duration": 65280,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 30
    }
  ],
  "location": "ATMScenario.checkBalance(int)"
});
formatter.result({
  "duration": 72533,
  "status": "passed"
});
formatter.match({
  "location": "ATMScenario.cardShouldBeReturned()"
});
formatter.result({
  "duration": 25173,
  "status": "passed"
});
});