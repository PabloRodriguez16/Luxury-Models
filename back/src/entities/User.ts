import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Appointment } from "./Appointment";
import { Credential } from "./Credential";

@Entity({ name: "users" })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    birth_date: Date;

    @Column({ type: "int", unique: true })
    nDni: number;

    @OneToMany(() => Appointment, appointment => appointment.user)
    appointments: Appointment[];

    @OneToOne(() => Credential)
    @JoinColumn()
    credential: Credential;
}
