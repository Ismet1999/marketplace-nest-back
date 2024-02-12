import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUser.dto';
import { HashService } from './hash.service';
import { ROLES } from './user.utils';
import { PrismaService } from 'src/prisma/prisma.service';
import { User, Prisma } from '@prisma/client';
import { UpdateUserDto } from './dto/UpdateUser.dto';
import { FindUserDto } from './dto/FindUser.dto';

@Injectable()
export class UserService {
  constructor(
    private hashService: HashService,
    private prisma: PrismaService,
  ) {}
  getUsers(query: any) {
    let where = {};
    if (query.companyId) {
      where = {
        ...where,
        branch: { companyId: query.companyId },
      };
    }
    return this.prisma.user.findMany({
      where,
    });
  }
  getAllUser(where: FindUserDto) {
    return this.prisma.user.findMany({
      where: {
        ...where,
        firstName: {
          contains: where.firstName,
        },
        phone: {
          contains: where.phone,
        },
      },
    });
  }
  async createUser(user: CreateUserDto): Promise<User> {
    return this.prisma.user.create({
      data: {
        ...user,
        password: await this.hashService.hash(user.password),
      },
    });
  }

  getUserById(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async updateUserById(id: string, body: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: {
        ...body,
        password: await this.hashService.hash(body.password),
        phone: body.phone, // Fix: Convert "phone" to "StringFieldUpdateOperationsInput"
      },
    });
  }
  updatePhotoUserById(id: string, body: { photo: string }) {
    return this.prisma.user.update({
      where: { id },
      data: body,
    });
  }

  patchUserById(id: string, body: any) {
    return this.prisma.user.update({
      where: { id },
      data: body,
    });
  }
  deleteUserById(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }

  getUserByMainPhone(phone: string) {
    return this.prisma.user.findUnique({ where: { phone } });
  }
}
