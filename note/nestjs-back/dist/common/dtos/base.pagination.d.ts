export declare class BasePaginationInputDto {
    page: number;
    take: number;
}
export declare class BasePaginationOutputDto<T> {
    resultPage: number;
    resultTotalPage: number;
    currentList: T[];
}
