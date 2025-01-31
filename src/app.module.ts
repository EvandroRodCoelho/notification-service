import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MailService } from './mail/mail.service';
import { SMTPMailService } from './mail/smtp-mail.service';
import { HttpModule } from './http.module';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [{
    provide: MailService,
    useClass: SMTPMailService
  }],
})
export class AppModule { }
