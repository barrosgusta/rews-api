import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsController } from './news/news.controller';
import { NewsService } from './news/news.service';
import { ServicePhonesController } from './service-phones/service-phones.controller';
import { ServicePhonesService } from './service-phones/service-phones.service';

@Module({
  imports: [],
  controllers: [AppController, NewsController, ServicePhonesController],
  providers: [AppService, NewsService, ServicePhonesService],
})
export class AppModule {}
