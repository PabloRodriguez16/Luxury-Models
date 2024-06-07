interface appointmentsDto {
    date: Date,
    time: string,
    service: "Compra de vehículo" | "Prueba de manejo" | "Asesoramiento personalizado" | "Servicio de mantenimiento"
}

export default appointmentsDto;