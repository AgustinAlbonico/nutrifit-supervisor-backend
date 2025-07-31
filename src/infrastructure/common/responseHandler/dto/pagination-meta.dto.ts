// src/common/dto/pagination-meta.dto.ts

import { Expose } from 'class-transformer';
import { IsBoolean, IsInt, Min } from 'class-validator';

export class PaginationMetaDto {
  @Expose()
  @IsBoolean()
  hasNextPage: boolean;

  @Expose()
  @IsBoolean()
  hasPreviousPage: boolean;

  @Expose()
  @IsInt()
  @Min(1)
  currentPage: number;

  @Expose()
  @IsInt()
  @Min(1)
  itemsPerPage: number;

  @Expose()
  @IsInt()
  @Min(0)
  totalItems: number;

  constructor(currentPage: number, itemsPerPage: number, totalItems: number) {
    this.currentPage = currentPage;
    this.itemsPerPage = itemsPerPage;
    this.totalItems = totalItems;

    this.hasNextPage = currentPage * itemsPerPage < totalItems;
    this.hasPreviousPage = currentPage > 1;
  }
}
