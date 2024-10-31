import { Controller, Get } from '@nestjs/common';
import { ServicePhoneService } from './service-phone.service';

@Controller('service-phones')
export class ServicePhoneController {
  constructor(private servicePhoneService: ServicePhoneService) {}

  @Get()
  async findAll() {
    return this.servicePhoneService.findAll();
  }
}
