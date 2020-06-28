import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import Pet from './Pet';
import Event from './Event';
import AdoptionRequest from './AdoptionRequest';

@Entity('user')
export default class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    length: 100,
  })
  name: string;

  @Column({
    length: 11,
    unique: true,
  })
  cpf: string;

  @Column()
  phone: string;

  @Column()
  city: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;

  // relação
  @OneToMany(type => Pet, users => User)
  pets: Pet[];

  @OneToMany(type => Event, users => User)
  events: Event[];

  @OneToMany(type => AdoptionRequest, users => User)
  adoptionRequests: AdoptionRequest[];

  @CreateDateColumn({ name: 'created_At' })
  created_At: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updated_At: Date;
}
