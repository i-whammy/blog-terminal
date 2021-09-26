import { when } from 'jest-when'
import { Articles } from "src/lib/domain/article"
import { ArticleDisplayPort } from "src/lib/port/articleDisplayPort"
import { ArticlePort } from "src/lib/port/articlePort"
import { AggregatedCompanyDisplayPort } from "src/lib/port/companyDisplayPort"
import { ArticleUsecase } from "src/lib/usecase/articleUsecase"

describe('ArticleUsecase', () => {
    test('最初の5件記事を取得して、表示用のPortに保存する', () => {
        const articlePort = {} as ArticlePort
        const articles = {} as Articles
        const sortedArticles = {} as Articles
        const articleDisplayPort = {} as ArticleDisplayPort
        const aggregatedCompanyDisplayPort = {} as AggregatedCompanyDisplayPort
        const articleUsecase = new ArticleUsecase(articlePort, articleDisplayPort, aggregatedCompanyDisplayPort)

        const fetch = jest.fn()
        articlePort.fetch = fetch
        when(fetch).mockReturnValue(articles)

        const sortByPublishDateDescending = jest.fn()
        articles.sortByPublishDateDescending = sortByPublishDateDescending
        when(sortByPublishDateDescending).mockReturnValue(sortedArticles)

        const storeArticles = jest.fn()
        articleUsecase.storeArticles = storeArticles
        when(sortByPublishDateDescending).expectCalledWith(sortedArticles)

        articleUsecase.fetch()
    })
})