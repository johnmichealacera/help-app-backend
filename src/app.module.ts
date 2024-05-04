import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AnnouncementModule } from './announcement/announcement.module';
import { Announcement } from './entities/announcement.entity';
import { Personnel } from './entities/personnel.entity';
import { ReportModule } from './report/report.module';
import { ReportEntity } from './entities/report.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: parseInt(configService.get('POSTGRES_PORT')),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DATABASE'),
        entities: [Announcement, Personnel, ReportEntity],
        synchronize: false,
        ssl: {
          rejectUnauthorized: false, // Note: You may need to set this to true in production if using a self-signed certificate
        },
        extra: {
          sslmode: configService.get('SSL_MODE', 'require'), // Default to require if SSL_MODE is not provided
        },
      }),
      inject: [ConfigService],
    }),
    AnnouncementModule,
    ReportModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
