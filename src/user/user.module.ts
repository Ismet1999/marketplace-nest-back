import { Module } from '@nestjs/common';
import { HashService } from './hash.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [UserService, HashService],
  controllers: [UserController],
  exports: [UserService, HashService],
})
export class UserModule {}
