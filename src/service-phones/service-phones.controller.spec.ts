import { Test, TestingModule } from '@nestjs/testing';
import { ServicePhonesController } from './service-phones.controller';

describe('ServicePhonesController', () => {
  let controller: ServicePhonesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServicePhonesController],
    }).compile();

    controller = module.get<ServicePhonesController>(ServicePhonesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
