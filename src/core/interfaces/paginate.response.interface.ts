export interface IPaginatedResponse<T> {
  items: T[];
  total: number;
  hasMore: boolean;
}
