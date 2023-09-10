import {
  IsLatitude,
  IsLongitude,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateReportDto {
  @IsNumber()
  @Max(100000)
  @Min(500)
  price: number;

  @IsString()
  make: string;

  @IsString()
  model: string;

  @IsNumber()
  @Max(2050)
  @Min(1950)
  year: number;

  @IsNumber()
  @Max(100000)
  millage: number;

  @IsLongitude()
  lng: number;

  @IsLatitude()
  lat: number;
}
