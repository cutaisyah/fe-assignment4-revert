import { User } from './User';
export interface Tournament {
  id: number;
  idPanitia: User;
  tournament_name: string;
  image: string;
  total_participant: number;
  age_minimum: number;
  description: string;
  // is_started: number
  // categories: string
  // id_prize: string
  // first_winner: string
  // second_winner: string
  // third_winner: string
  // districts: string
}
