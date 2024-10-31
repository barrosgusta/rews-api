import { Controller, Get } from '@nestjs/common';
import { VideoService } from './video.service';

@Controller('videos')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Get()
  async findAll() {
    return this.videoService.findAll();
  }
}
