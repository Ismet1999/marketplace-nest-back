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

export class UpdateUserDto {
  @ApiProperty({ example: 'John Doe', description: 'User fullName' })
  @IsOptional()
  @IsString({ message: 'fullName must be a valid string' })
  fullName: string;

  @ApiProperty({ example: [' +998 99 999 99 99'], description: 'User phone' })
  @IsOptional()
  @IsArray({ message: 'phone must be a valid array' })
  @ArrayMinSize(1)
  @IsString({ each: true, message: 'phone must be a valid string' })
  phone: string;

  // @ApiProperty({ example: 1 })
  // @IsOptional({ message: 'branch is required' })
  // branch: number;

  @ApiProperty({
    example: 'password',
    description: 'User password',
  })
  @IsOptional()
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
  // @IsOptional({ message: 'Password confirmation is required' })
  // @Match('password', { message: 'Passwords do not match' })
  // passwordConfirmation: string;

  @ApiProperty({
    example: 'passportSeries',
    description: 'User passportSeries',
  })
  @IsOptional()
  @IsString({ message: 'passportSeries must be a valid string' })
  passportSeries: string;

  @ApiProperty({
    example: 1,
    description: 'User branchId',
  })
  @IsOptional()
  @IsString({ message: 'branchId must be a valid string' })
  branchId: string;

  @ApiProperty({
    example: ROLES.USER,
    description: 'User role',
  })
  @IsOptional()
  @IsEnum(ROLES)
  role: ROLES;

  @ApiProperty({
    example: true,
    description: 'User status',
  })
  @IsOptional()
  @IsBoolean()
  status: boolean;
}
// export class UpdateUserDto extends OmitType(CreateUserDto, [
//   'password',
//   'role',
// ] as const) {}
