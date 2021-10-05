import { Article, Articles, PublishDate } from "src/lib/domain/article"
import { AggregatedCompanies, AggregatedCompany, Company, } from "src/lib/domain/company"

describe('Articles', () => {
    test('記事の集合から集約された企業の集合を作る', () => {
        const articles = new Articles([
            new Article(
                "title A",
                new PublishDate(new Date()),
                new Company("A"),
                "http://example.net/A",
            ),
            new Article(
                "title B",
                new PublishDate(new Date()),
                new Company("B"),
                "http://example.net/B",
            ),
            new Article(
                "title C",
                new PublishDate(new Date()),
                new Company("A"),
                "http://example.net/C",
            ),
        ])
        const expected = new AggregatedCompanies([
            new AggregatedCompany("A",2),
            new AggregatedCompany("B",1),
        ])

        expect(articles.toAggregatedCompanies()).toEqual(expected)
    })
    test('更新日の降順でソートされた記事の集合を返す', () => {

        const articles = new Articles([
            new Article(
                "記事A",
                new PublishDate(new Date("2021-02-01")),
                new Company("A"),
                "http://example.com/A",
            ),
            new Article(
                "記事B",
                new PublishDate(new Date("2021-03-01")),
                new Company("B"),
                "http://example.com/B",
            ),
            new Article(
                "記事C",
                new PublishDate(new Date("2021-01-01")),
                new Company("C"),
                "http://example.com/C",
            ),
        ])
        const expected = new Articles([
            new Article(
                "記事B",
                new PublishDate(new Date("2021-03-01")),
                new Company("B"),
                "http://example.com/B",
            ),
            new Article(
                "記事A",
                new PublishDate(new Date("2021-02-01")),
                new Company("A"),
                "http://example.com/A",
            ),
            new Article(
                "記事C",
                new PublishDate(new Date("2021-01-01")),
                new Company("C"),
                "http://example.com/C",
            ),
        ])

        expect(articles.sortByPublishDateDescending()).toEqual(expected)
    })
})