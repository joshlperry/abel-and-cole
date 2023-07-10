export function storeInSessionStorage<T>(key: string, item: T): void {
  sessionStorage.setItem(key, JSON.stringify(item));
}

export function readFromSessionStorage<T>(key: string): T | null {
  const item = sessionStorage.getItem(key);
  return item ? (JSON.parse(item) as T) : null;
}

export function deleteFromSessionStorage(key: string): void {
  sessionStorage.removeItem(key);
}
