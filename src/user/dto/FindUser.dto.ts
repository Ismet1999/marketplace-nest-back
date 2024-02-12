import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsEnum,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { ROLES } from '../user.utils';

// export class UpdateUserDto extends CreateUserDto {}

export class FindUserDto {
  @ApiProperty({ example: 'John Doe', description: 'User firstName' })
  @IsOptional()
  @IsString({ message: 'firstName must be a valid string' })
  firstName: string;

  @ApiProperty({ example: 'John Doe', description: 'User lastName' })
  @IsOptional()
  @IsString({ message: 'lastName must be a valid string' })
  lastName: string;

  @ApiProperty({
    required: false,
    example: 'phone',
    description: 'User phone',
  })
  @IsOptional()
  @IsString({ message: 'phone must be a valid string' })
  phone: string;

  @ApiProperty({
    required: false,
    example: ROLES.USER,
    description: 'User role',
  })
  @IsOptional()
  @IsEnum(ROLES)
  role: ROLES;

  @ApiProperty({ required: false, example: true, description: 'User status' })
  @IsOptional()
  @IsBoolean()
  status: boolean;
}
// export class UpdateUserDto extends OmitType(CreateUserDto, [
//   'password',
//   'role',
// ] as const) {}
