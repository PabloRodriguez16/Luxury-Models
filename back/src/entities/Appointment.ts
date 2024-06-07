import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm"
import { User } from "./User"

@Entity({
    name: "appointments"
})
export class Appointment {
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    date: Date

    @Column()
    time: string

    @Column()
    service: "Compra de vehículo" | "Prueba de manejo" | "Asesoramiento personalizado" 
    | "Servicio de mantenimiento"

    @Column()
    status: "Active" | "Cancelled" | "Expired"
    
    @ManyToOne(() => User, (user) => user.appointments)
    user: User
}