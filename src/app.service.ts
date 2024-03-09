import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getPoliceAnnouncement(): string {
    return `Stay informed, stay safe! Your Socorro Police Department is hosting a Neighborhood Watch meeting on May at Socorro Gym. Join us to discuss community safety and crime prevention strategies. Remember to report any suspicious activity promptly. Working together, we can keep our community secure. For emergencies, dial [Emergency Number]. Your partnership in public safety is invaluable.`;
  }
  getHospitalAnnouncement(): string {
    return `Ensuring your well-being is our top priority at Socorro Hospital. Join us for a Health and Wellness Seminar on May at Socorro to discover valuable insights for a healthier lifestyle. We're also excited to announce the launch of our new Telehealth services – providing convenient access to medical consultations from the comfort of your home.

    For any medical concerns or to schedule an appointment, contact us at socorro@email.com.`;
  }
  getFireAnnouncement(): string {
    return `Join us for a Fire Safety Workshop on April at Socorro to enhance your preparedness. Don't miss our upcoming Community Fire Drill on [Date] – your participation is crucial! Remember to check smoke detector batteries, practice home evacuation plans, and exercise caution with outdoor fires. Your safety is our priority – stay informed and prepared!`;
  }
}
