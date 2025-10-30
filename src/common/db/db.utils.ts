import { SelectQueryBuilder } from "typeorm";

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