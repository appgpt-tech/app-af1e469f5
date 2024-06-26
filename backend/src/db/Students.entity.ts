//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Students')
export class StudentsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  Name: string;

  @Column('text', { nullable: true })
  Gmail: string;

  @Column('date', { nullable: true })
  DateOfBirth: Date;

  @Column('integer', { nullable: true })
  Number: number;

  @Column('text', { nullable: true })
  Class: string;
}
