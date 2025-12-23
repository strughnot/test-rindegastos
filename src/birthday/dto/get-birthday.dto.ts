import { IsNotEmpty, IsDateString } from 'class-validator';

export class GetBirthdayDto { 
    @IsNotEmpty({ message: 'La fecha de cumpleaños es obligatoria.'})
    @IsDateString({}, { message: 'El formato debe ser una fecha valida (YYYY-MM-DD).'})
    birthdate: string;
}