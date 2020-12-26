import { User } from './User';
import { Game } from './Game';
import { District } from './District';
import { IsStarted } from './IsStarted';
import { CategoriesTournament } from './CategoriesTournament';

export interface Tournament {
  id: number;
  idPanitia: User;
  tournament_name: string;
  permalink: string;
  categories: CategoriesTournament;
  register_total_participant: number;
  max_total_participant: number;
  age_minimum: number;
  description: string;
  is_started: IsStarted;
  districts: District;
  image: string;
  first_prize: string,  
  second_prize: string,  
  third_prize: string, 
  game: Game,
}
