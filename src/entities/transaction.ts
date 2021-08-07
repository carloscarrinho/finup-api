import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";

enum TransactionType {
  "EXPENSE",
  "REVENUE",
  "TRANSFER",
}

interface Repetition {
  id: string;
  installments_quantity: number;
  installment: number;
}

@Entity("transactions")
export default class Transaction {
  @PrimaryColumn()
  id: string;

  @Column()
  account_id: string;

  @Column()
  user_id: string;

  @Column()
  description: string;

  @Column()
  is_paid: boolean;

  // @Column({ type: "enum", enum: TransactionType, enumName: "TransactionType" })
  type: string;

  @Column()
  category: string;

  @Column()
  value: number;

  @Column()
  payment_date: Date;

  @Column()
  effective_date: Date;

  @Column()
  single: boolean;

  @Column()
  repetition: string;

  @Column()
  comments: string;
}
