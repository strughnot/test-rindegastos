import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('getDaysUntilMyBirthday')
  getDaysUntilBirthday(@Query('birthdate') birthdate: string) {

    if (!birthdate) {
      throw new BadRequestException('Debes enviar una fecha: ?birthdate=YYYY-MM-DD');
    }

    const today = new Date();
    const bday = new Date(birthdate);

    const nextBirthday = new Date(today.getFullYear(), bday.getMonth(), bday.getDate());

    today.setHours(0, 0, 0, 0);
    nextBirthday.setHours(0, 0, 0, 0);

    if (nextBirthday.getTime() < today.getTime()) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const diffTime = nextBirthday.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const mensaje = diffDays === 1 
      ? `Falta ${diffDays} día para tu cumpleaños` 
      : `Faltan ${diffDays} días para tu cumpleaños`;

    return {
      mensaje,
      dias: diffDays
    };
  }
}
