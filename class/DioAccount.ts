export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  setBalance = (newBalance: number): void => {
    this.balance = newBalance
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    console.log('\n*******************SISTEMA DE SAQUE*******************\n');

    if (this.validateStatus()) {
      console.log(`Saldo anterior: R$${this.balance}\nSaldo depositado: R$${value}\nSaldo atual: R$${this.balance + value}`)
      this.balance = this.balance + value
    }

  }

  withdraw = (value: number): void => {
    if (this.validateStatus()) {
      console.log('\n*******************SISTEMA DE SAQUE*******************\n');

      if (this.balance >= value) {
        console.log(`Saque realizado com sucesso!\nSaldo anterior: R$${this.balance}\nValor sacado: R$${value}\nSaldo atual: R$${this.balance + value}\n`);
        this.balance = this.balance - value
      } else {
        console.log(`Saldo insuficiente para saque.\n`);
      }
    }

  }

  getBalance = (): number => {
    return this.balance
  }

  public validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
