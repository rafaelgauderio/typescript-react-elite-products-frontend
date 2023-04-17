export type PaginaSpring<T> = {    
    content: T[];
    last: boolean;
    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
    first: boolean;  
    numerOFelements?: number;
    empty: boolean; 
  };