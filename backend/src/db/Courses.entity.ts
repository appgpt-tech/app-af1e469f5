//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Courses')
export class CoursesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  Name: string;

  @Column('text', { nullable: true })
  Description: string;
}
