import { Brackets, SelectQueryBuilder } from "typeorm";

export function paginate<Entity>(
    qb: SelectQueryBuilder<Entity>,
    page: number = 1,
    numberPerPage: number = 10
): SelectQueryBuilder<Entity> {

    const skip = (page - 1) * numberPerPage;
    qb.skip(skip);
    qb.limit(numberPerPage);
    return qb;
}

export function filterByDate<Entity>(
    qb: SelectQueryBuilder<Entity>,
    dateName: string,
    minDate: Date | null = null,
    maxDate: Date | null = null
): SelectQueryBuilder<Entity> {
    if(minDate || maxDate) {
        qb.andWhere(
            new Brackets((qb) => {
                if (minDate) {
                    qb.andWhere(`${dateName} > :minDate`, {minDate})
                }
                if (maxDate) {
                    qb.andWhere(`${dateName} < :maxDate`, {maxDate})
                }    
            }),
        );        
    }
    return qb;
}