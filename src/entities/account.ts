import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('accounts')
export default class Account {
  @PrimaryColumn()
  id: string;

  @Column()
  user_id: string;

  @Column()
  label: string;

  @Column()
  initial_balance: number;

  @Column()
  balance: number;

  @Column()
  active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
