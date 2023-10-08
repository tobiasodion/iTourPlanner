import { v4 as uuidv4 } from 'uuid';
import { UUID } from "../types/PropTypes";

export function generateRandomUUID(): UUID {
    return uuidv4();
}
