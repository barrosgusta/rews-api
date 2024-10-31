import { Controller, Get } from '@nestjs/common';
import { ShelterService } from './shelter.service';

@Controller('shelters')
export class ShelterController {
  constructor(private shelterService: ShelterService) {}

  @Get('/maintown')
  async findMainTown() {
    const maintown = {
      latitude: process.env.MAINTOWN_LATITUDE,
      longitude: process.env.MAINTOWN_LONGITUDE,
    };

    return maintown;
  }
  @Get()
  async findAll() {
    return this.shelterService.findAll();
  }
}
