export class Storage {
  static isWindowAvailable() {
    return typeof window !== 'undefined';
  }

  static getItem(key) {
    if (this.isWindowAvailable()) return localStorage.getItem(key);
  }

  static setItem(key, value) {
    if (!this.isWindowAvailable()) return;
    localStorage.setItem(key, value);
  }

  static delItem(key) {
    if (!this.isWindowAvailable) return;
    localStorage.removeItem(key);
  }

  static clear() {
    if (this.isWindowAvailable()) localStorage.clear();
  }
}