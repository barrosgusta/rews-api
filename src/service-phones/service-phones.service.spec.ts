import { Test, TestingModule } from '@nestjs/testing';
import { ServicePhonesService } from './service-phones.service';

describe('ServicePhonesService', () => {
  let service: ServicePhonesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServicePhonesService],
    }).compile();

    service = module.get<ServicePhonesService>(ServicePhonesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
