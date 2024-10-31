import { Test, TestingModule } from '@nestjs/testing';
import { ServicePhoneController } from './service-phone.controller';

describe('ServicePhoneController', () => {
  let controller: ServicePhoneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServicePhoneController],
    }).compile();

    controller = module.get<ServicePhoneController>(ServicePhoneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
