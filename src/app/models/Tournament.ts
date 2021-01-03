import { User } from './User';
import { Game } from './Game';
import { District } from './District';
import { IsStarted } from './IsStarted';
import { CategoriesTournament } from './CategoriesTournament';

export interface Tournament {
  _id: string;
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
  first_prize: string;  
  second_prize: string;  
  third_prize: string; 
  game: Game;
  match_round: number;
}

export interface UpdateTournament{
  _id: string;
  categories: string;
  max_total_participant: number;
  age_minimum: number;
  description: string;
  first_prize: string;  
  second_prize: string;  
  third_prize: string; 
}

export interface setWinnerTournament{
  _id: string;
  first_winner: string;
  second_winner: string;
  third_winner: string;
}

export class UpdateIsStarted {
  _id: string;
  is_started: string;
}