import { DioAccount } from "./DioAccount"

export class ChallengeAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.setBalance(this.getBalance() + value + 10)
      console.log(`Depósito realizado com sucesso! seu saldo atual é: ${this.getBalance()}`)
    }
  }
}
