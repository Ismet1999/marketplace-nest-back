import { ApiProperty } from '@nestjs/swagger';

import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { ROLES } from '../user.utils';

export class CreateUserDto {
  @ApiProperty({ example: 'John Doe', description: 'User firstName' })
  @IsOptional()
  @IsString({ message: 'firstName must be a valid string' })
  firstName: string;

  @ApiProperty({ example: 'John Doe', description: 'User lastName' })
  @IsOptional()
  @IsString({ message: 'lastName must be a valid string' })
  lastName: string;

  @ApiProperty({ example: '+998 99 999 99 99', description: 'phone' })
  @IsNotEmpty({ message: 'phone is required' })
  @IsString({ message: 'phone must be a valid string' })
  phone: string;

  @ApiProperty({
    example: 'password',
    description: 'User password',
  })
  @IsNotEmpty({ message: 'Password is required' })
  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 0,
      minUppercase: 0,
      minNumbers: 0,
      minSymbols: 0,
    },
    { message: 'Password is too weak' },
  )
  @IsString({ message: 'Password must be a valid string' })
  password: string;

  // @ApiProperty({
  //   example: 'password',
  //   description: 'User password confirmation',
  // })
  // @IsNotEmpty({ message: 'Password confirmation is required' })
  // @Match('password', { message: 'Passwords do not match' })
  // passwordConfirmation: string;

  @ApiProperty({
    example: ROLES.USER,
    description: 'User role',
  })
  @IsNotEmpty({ message: 'role is required' })
  @IsString({ message: 'role must be a valid string' })
  role: ROLES;

  @ApiProperty({
    example: true,
    description: 'User status',
  })
  @IsOptional()
  @IsBoolean({ message: 'status must be a valid boolean' })
  status: boolean;
}
