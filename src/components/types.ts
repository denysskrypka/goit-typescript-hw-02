// types.ts
export interface Photo {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  description: string;
}
