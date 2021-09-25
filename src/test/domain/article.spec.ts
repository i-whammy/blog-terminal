import { Article, Articles, PublishDate, Title, URL } from "src/lib/domain/article"
import { AggregatedCompanies, AggregatedCompany, Company, CompanyName } from "src/lib/domain/company"

describe('Articles', () => {
    test('記事の集合から集約された企業の集合を作る', () => {
        const articles = new Articles([
            new Article(
                new Title("any"),
                new PublishDate(new Date()),
                new Company(
                    new CompanyName("A")
                ),
                new URL("")
            ),
            new Article(
                new Title("any2"),
                new PublishDate(new Date()),
                new Company(
                    new CompanyName("B")
                ),
                new URL("")
            ),
            new Article(
                new Title("any3"),
                new PublishDate(new Date()),
                new Company(
                    new CompanyName("A")
                ),
                new URL("")
            ),
        ])
        const expected = new AggregatedCompanies([
            new AggregatedCompany("A",2),
            new AggregatedCompany("B",1),
        ])

        expect(articles.toAggregatedCompanies()).toEqual(expected)
    })
})