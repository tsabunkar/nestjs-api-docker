import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  ironManEvents = [
    {
      name: 'IRONMAN World Championship',
      location: 'Kailua-Kona, Hawaii, USA',
      date: '2025-10-11',
    },
    {
      name: 'IRONMAN 70.3 Dubai',
      location: 'Dubai, UAE',
      date: '2025-02-28',
    },
    {
      name: 'IRONMAN European Championship',
      location: 'Frankfurt, Germany',
      date: '2025-06-29',
    },
    {
      name: 'IRONMAN Cairns',
      location: 'Cairns, Australia',
      date: '2025-06-08',
    },
    {
      name: 'IRONMAN Cozumel',
      location: 'Cozumel, Mexico',
      date: '2025-11-23',
    },
  ];

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('events/ironman')
  getIronmanEvents(): { name: string; location: string; date: string }[] {
    return this.ironManEvents;
  }
}
