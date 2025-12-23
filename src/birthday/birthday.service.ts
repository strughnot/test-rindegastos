import { Injectable } from '@nestjs/common';

@Injectable ()
export class BirthdayService {
    calculateDays(birthdateStr: string): { mensaje: string; dias: number } {
        const today = new Date();
        const birthdate = new Date(birthdateStr);

        
        const nextBirthday = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate());

        today.setHours(0, 0, 0, 0);
        nextBirthday.setHours(0, 0, 0, 0);

        if (nextBirthday.getTime() < today.getTime()) {
            nextBirthday.setFullYear(today.getFullYear() + 1);
        }

        const diffTime = Math.abs(nextBirthday.getTime() - today.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        return {
            mensaje: `Faltan ${diffDays} dias para tu cumpleaños`,
            dias: diffDays
        };
    }
}