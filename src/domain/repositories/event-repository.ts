import type { Event } from '../entities/event';
import type {
  CancelEventParams,
  EventCreateParams,
  EventUpdateParams,
  FinishEventParams,
  GetEventByIdParams,
} from '../contracts/use-case-params';

export interface EventRepository {
  createEvent(params: EventCreateParams): Promise<boolean>;
  getEventById(params: GetEventByIdParams): Promise<Event>;
  listEvents(): Promise<Event[]>;
  updateEvent(params: EventUpdateParams): Promise<boolean>;
  cancelEvent(params: CancelEventParams): Promise<void>;
  finishEvent(params: FinishEventParams): Promise<void>;
}
