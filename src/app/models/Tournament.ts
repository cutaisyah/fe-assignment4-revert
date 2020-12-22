import { User } from './User';
export interface Tournament {
  id: number;
  idPanitia: User;
  tournament_name: string;
  permalink: string;
  categories: string;
  total_participant: number;
  age_minimum: number;
  description: string;
  image: string;
  // is_started: number
  // id_prize: string
  // first_winner: string
  // second_winner: string
  // third_winner: string
  // districts: string
}
