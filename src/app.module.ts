import { Module } from '@nestjs/common';
import { ArticleController } from './article/article.controller';
import { ServicePhoneController } from './service-phone/service-phone.controller';
import { ShelterController } from './shelter/shelter.controller';
import { UserController } from './user/user.controller';
import { PrismaService } from './prisma/prisma.service';
import { ArticleService } from './article/article.service';
import { UserService } from './user/user.service';
import { ShelterService } from './shelter/shelter.service';
import { ServicePhoneService } from './service-phone/service-phone.service';
import { VideoService } from './video/video.service';
import { VideoController } from './video/video.controller';

@Module({
  imports: [],
  controllers: [
    ArticleController,
    ServicePhoneController,
    ShelterController,
    UserController,
    VideoController,
  ],
  providers: [
    PrismaService,
    ArticleService,
    UserService,
    ShelterService,
    ServicePhoneService,
    VideoService,
  ],
})
export class AppModule {}
