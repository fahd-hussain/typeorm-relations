import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll(): Promise<any> {
    return this.appService.getAll();
  }

  @Get(':id')
  getOneById(@Query() id: string): Promise<any> {
    return this.appService.getOneById({ id });
  }

  @Post()
  createUser(@Body() body): Promise<any> {
    return this.appService.createUser(body);
  }

  @Patch()
  updateUser(@Body() body): Promise<any> {
    return this.appService.updateUser(body);
  }

  @Delete()
  deleteUser(@Body() body): Promise<any> {
    return this.appService.deleteUser(body);
  }
}
