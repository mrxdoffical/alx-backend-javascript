export default class ClassRoom {
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }

  initializeRooms() {
    this.initializeRooms(this._maxStudentsSize);
  }
}
