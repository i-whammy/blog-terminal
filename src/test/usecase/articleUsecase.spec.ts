import { when } from 'jest-when'
import { Articles } from "src/lib/domain/article"
import { ArticleDisplayPort } from "src/lib/port/articleDisplayPort"
import { ArticlePort } from "src/lib/port/articlePort"
import { AggregatedCompanyDisplayPort } from "src/lib/port/companyDisplayPort"
import { ArticleUsecase } from "src/lib/usecase/articleUsecase"

describe('ArticleUsecase', () => {
    test('最新の記事を指定された件数だけ取得して、表示用のPortに保存する', () => {
        const articlePort = {} as ArticlePort
        const articles = {} as Articles
        const articleDisplayPort = {} as ArticleDisplayPort
        const aggregatedCompanyDisplayPort = {} as AggregatedCompanyDisplayPort
        const articleUsecase = new ArticleUsecase(articlePort, articleDisplayPort, aggregatedCompanyDisplayPort)

        const fetch = jest.fn()
        articlePort.fetch = fetch
        when(fetch).calledWith(0,5).mockReturnValue(articles)

        const storeArticles = jest.fn()
        articleUsecase.storeArticles = storeArticles
        when(storeArticles).expectCalledWith(articles)

        articleUsecase.fetchLatestArticles(5)
    })

    test('指定された箇所から始まる件数の記事を取得して、表示用のPortに追加する', () => {
        const articlePort = {} as ArticlePort
        const articles = {} as Articles
        const articleDisplayPort = {} as ArticleDisplayPort
        const aggregatedCompanyDisplayPort = {} as AggregatedCompanyDisplayPort
        const articleUsecase = new ArticleUsecase(articlePort, articleDisplayPort, aggregatedCompanyDisplayPort)

        const fetch = jest.fn()
        articlePort.fetch = fetch
        when(fetch).calledWith(10,5).mockReturnValue(articles)

        const addArticles = jest.fn()
        articleUsecase.addArticles = addArticles
        when(addArticles).expectCalledWith(articles)

        articleUsecase.fetchLatestArticlesFrom(10, 5)
    })
})