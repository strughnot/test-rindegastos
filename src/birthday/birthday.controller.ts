import { Controller, Get, Query } from '@nestjs/common';
import { BirthdayService } from './birthday.service';
import { GetBirthdayDto } from './dto/get-birthday.dto';

@Controller('birthday')
export class BirthdayController {
  constructor(private readonly birthdayService: BirthdayService) { }

  @Get('getDaysUntilMyBirthday')
  getDays(@Query() params: GetBirthdayDto) {
    return this.birthdayService.calculateDays(params.birthdate);
  }
}
