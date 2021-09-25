import { Articles } from "src/lib/domain/article"
import { AggregatedCompanies } from "src/lib/domain/company"

describe('Articles', () => {
    test('記事の集合から集約された企業の集合を作る', () => {
        const articles = new Articles([])
        const expected = new AggregatedCompanies([])

        expect(articles.toAggregatedCompanies()).toEqual(expected)
    })
})