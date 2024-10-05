import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const roomsizes = [19, 20, 34];
  return roomsizes.map((size) => new ClassRoom(size));
}
