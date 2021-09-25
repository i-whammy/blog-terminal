import { Injectable } from "@angular/core";
import { Article, Articles, PublishDate, Title, URL } from "../domain/article";
import { CategoryId } from "../domain/category";
import { Company, CompanyName } from "../domain/company";
import { ArticlePort } from "../port/articlePort";

type ArticleEntity = {
    title: String,
    publishDate: Date,
    companyName: String,
    url: String,
    category: CategoryEntity[],
}

type CategoryEntity = {
    id: String,
    name: String,
}

@Injectable()
export class ArticleDriver extends ArticlePort {

    fetch(): Articles {
        return new Articles(this.articles.map(a => this.toArticle(a)))
    }

    fetchBy(categoryId: CategoryId): Articles {
        const articleEntities = this.articles.filter(a => a.category.some(c => c.id == categoryId.value))
        return new Articles(articleEntities.map(a => this.toArticle(a)))
    }

    private toArticle(articleEntity: ArticleEntity): Article {
        return new Article(
            new Title(articleEntity.title),
            new PublishDate(articleEntity.publishDate),
            new Company(
                new CompanyName(articleEntity.companyName),
            ),
            new URL(articleEntity.url)
        )
    }

    private articles: ArticleEntity[] = [
        {
            title: "フロントの動作確認用の環境をGithub Actionsで自動構築してみた",
            publishDate: new Date("2021-08-11"),
            companyName: "株式会社ユーザベース",
            url: "https://tech.uzabase.com/entry/2021/08/11/110956",
            category: [
                {
                    id: "github",
                    name: "Github",
                },
            ],
        },
        {
            title: "iOSアプリにオファーコード機能を実装したときの話",
            publishDate: new Date("2021-08-10"),
            companyName: "株式会社ユーザベース",
            url: "https://tech.uzabase.com/entry/2021/08/10/093215",
            category: [
                {
                    id: "ios",
                    name: "iOS",
                },
            ],
        },
        {
            title: "ファイルダウンロードを行う E2E テストを Selenium Grid / Zalenium で実施するための拡張を作る",
            publishDate: new Date("2021-08-04"),
            companyName: "株式会社ユーザベース",
            url: "https://tech.uzabase.com/entry/2021/08/04/161117",
            category: [
                {
                    id: "selenium",
                    name: "Selenium",
                },
            ],
        },
        {
            title: "プロダクト開発組織のチームビジョンを作ったらすごいパワーが生まれた話",
            publishDate: new Date("2021-08-19"),
            companyName: "株式会社ユーザベース",
            url: "https://tech.uzabase.com/entry/2021/08/19/195850",
            category: [
                {
                    id: "organization",
                    name: "組織",
                },
                {
                    id: "culture",
                    name: "カルチャー",
                },
            ],
        },
        {
            title: "NewsPicksのサーバーサイド言語をJavaからKotlinに切り替えるために",
            publishDate: new Date("2021-09-15"),
            companyName: "株式会社ユーザベース",
            url: "https://tech.uzabase.com/entry/2021/09/15/154445",
            category: [
                {
                    id: "kotlin",
                    name: "Kotlin",
                },
            ],
        },
        {
            title: "#37 エンジニア視点から見たUbieのアクセシビリティ with @empitsu88",
            publishDate: new Date("2021-09-22"),
            companyName: "株式会社Ubie",
            url: "https://anchor.fm/devchat-fm/episodes/37-Ubie-with-empitsu88-e17mth0",
            category: [
                {
                    id: "accessibility",
                    name: "アクセシビリティ",
                },
            ],
        },
        {
            title: "Perfettoを用いたAndroidアプリのボトルネックの特定とその改善",
            publishDate: new Date("2021-09-17"),
            companyName: "株式会社ZOZOテクノロジーズ",
            url: "https://techblog.zozo.com/entry/android-performance-improvement-with-perfetto",
            category: [
                {
                    id: "kotlin",
                    name: "Kotlin",
                },
                {
                    id: "android",
                    name: "Android",
                },

            ],
        },
        {
            title: "Kotlinのsuspend関数のバイトコードを読んでみた",
            publishDate: new Date("2021-01-28"),
            companyName: "株式会社ZOZOテクノロジーズ",
            url: "https://techblog.zozo.com/entry/kotlin-suspend-functions",
            category: [
                {
                    id: "kotlin",
                    name: "Kotlin",
                },
            ],
        },        
    ]
}