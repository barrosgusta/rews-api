import { Test, TestingModule } from '@nestjs/testing';
import { ServicePhoneService } from './service-phone.service';

describe('ServicePhoneService', () => {
  let service: ServicePhoneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServicePhoneService],
    }).compile();

    service = module.get<ServicePhoneService>(ServicePhoneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
