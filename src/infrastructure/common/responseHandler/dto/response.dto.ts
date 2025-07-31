// src/common/dto/response.dto.ts

import { Expose, Type } from 'class-transformer';
import {
  IsBoolean,
  IsISO8601,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { PaginationMetaDto } from './pagination-meta.dto';

export class ResponseDto<T> {
  @Expose()
  @IsBoolean()
  success: boolean;

  @Expose()
  @IsString()
  message: string;

  @Expose()
  data: T;

  @Expose()
  @IsISO8601()
  timestamp: string;

  constructor(message: string, data: T) {
    this.success = true;
    this.message = message;
    this.data = data;
    this.timestamp = new Date().toISOString();
  }
}

export class PaginatedResponseDto<T> extends ResponseDto<T> {
  @Expose()
  @ValidateNested()
  @Type(() => PaginationMetaDto)
  @IsOptional()
  pagination: PaginationMetaDto;

  constructor(message: string, data: T, pagination: PaginationMetaDto) {
    super(message, data);
    this.pagination = pagination;
  }
}
