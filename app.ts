import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
// NOVA CONTA COM O MÉTODO DEPÓSITO
import { ChallengeAccount } from './class/challengeAccount'

// INSTÂNCIAS
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
const challengeAccount: ChallengeAccount = new ChallengeAccount('Desafio', 30)



console.log('-----------------------PEOPLE ACCOUNT-----------------------');

// UTILIZAÇÃO DOS MÉTODOS DA PeopleAccount
peopleAccount.deposit(10)
console.log(peopleAccount.getDocId());
peopleAccount.setDocId(10)
console.log(peopleAccount.getDocId());
console.log(peopleAccount.getName());
peopleAccount.setBalance(20)
console.log(peopleAccount.getBalance());
// SALDO SUFICIENTE PARA SAQUE
peopleAccount.withdraw(10)
// SALDO INSUFICIENTE PARA SAQUE
peopleAccount.withdraw(400000)

console.log('-----------------------PEOPLE ACCOUNT-----------------------');


console.log('-----------------------COMPANY ACCOUNT-----------------------');

// UTILIZAÇÃO DOS MÉTODOS DA CompanyAccount
companyAccount.deposit(10)
console.log(companyAccount.getName());
console.log(companyAccount.getBalance());
companyAccount.getLoan(10000000)
console.log('-----------------------COMPANY ACCOUNT-----------------------');


console.log('-----------------------CALLENGE ACCOUNT-----------------------');

// UTILIZAÇÃO DOS MÉTODOS DA CompanyAccount
console.log(challengeAccount.getBalance());
challengeAccount.deposit(10)
console.log(challengeAccount.getName());
console.log(challengeAccount.getBalance());

console.log('-----------------------CALLENGE ACCOUNT-----------------------');
