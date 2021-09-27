import { Injectable } from "@angular/core";
import { getUnixTime } from "date-fns";
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

    fetch(startIndex: number, count: number): Articles {
        return new Articles(this.articles.map(a => this.toArticle(a))
            .sort((a, b) => { return getUnixTime(b.publishDate.value) - getUnixTime(a.publishDate.value) })
            .slice(startIndex, startIndex + count))
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
        {
            title: "メルペイの公的個人認証による本人確認の仕組み",
            publishDate: new Date("2021-09-27"),
            companyName: "株式会社メルカリ",
            url: "https://engineering.mercari.com/blog/entry/20210927-3a843cdfa3/",
            category: [
                {
                    id: "authentication",
                    name: "認証"
                },
            ]
        },
        {
            title: "メルペイiOSでのAppium活用事例",
            publishDate: new Date("2021-09-27"),
            companyName: "株式会社メルカリ",
            url: "https://engineering.mercari.com/blog/entry/20210923-32355a8c7b/",
            category: [
                {
                    id: "ios",
                    name: "iOS",
                },
                {
                    id: "appium",
                    name: "Appium",
                },

            ]
        },
        {
            title: "加盟店リソース作成時の整合性担保の検討と実装",
            publishDate: new Date("2021-09-24"),
            companyName: "株式会社メルカリ",
            url: "https://engineering.mercari.com/blog/entry/20210923-7171b62de5/",
            category: [
                {
                    id: "microservices",
                    name: "マイクロサービス"
                },
            ]
        },
        {
            title: "つくって学ぶ Protocol Buffers エンコーディング",
            publishDate: new Date("2021-09-22"),
            companyName: "株式会社メルカリ",
            url: "https://engineering.mercari.com/blog/entry/20210921-ca19c9f371/",
            category: [
                {
                    id: "protocolbuffers",
                    name: "Protocol Buffers"
                },
            ]
        },
        {
            title: "なぜメルペイに女性エンジニアをエンパワーメントするプロジェクトが発足したのか",
            publishDate: new Date("2021-09-22"),
            companyName: "株式会社メルカリ",
            url: "https://engineering.mercari.com/blog/entry/20210903-20210903/",
            category: [
                {
                    id: "culture",
                    name: "文化"
                },
            ]
        },
        {
            title: "つながりをデータから解き明かしたい ~ 複雑ネットワークの世界とそれを活用した不正検知システム，さらに向こうへ",
            publishDate: new Date("2021-09-21"),
            companyName: "株式会社メルカリ",
            url: "https://engineering.mercari.com/blog/entry/20210920-complex-network-ml-and-vertex-pipelines-in-merpay-ml-team/",
            category: [
                {
                    id: "machinelearning",
                    name: "機械学習"
                },
            ]
        },
        {
            title: "機械学習TeamとBackend Teamを1つにしてFeature Teamを作った話",
            publishDate: new Date("2021-09-17"),
            companyName: "株式会社メルカリ",
            url: "https://engineering.mercari.com/blog/entry/20210917-c65f33502c/",
            category: [
                {
                    id: "organization",
                    name: "組織"
                },
            ]
        },
        {
            title: "Frontend E2Eテストの安定化の取り組み",
            publishDate: new Date("2021-09-17"),
            companyName: "株式会社メルカリ",
            url: "https://engineering.mercari.com/blog/entry/20210914-fb8ff85b9a/",
            category: [
                {
                    id: "autotest",
                    name: "自動テスト"
                },
            ]
        },
        {
            title: "品質保証について語るときにメルペイQAエンジニアの語ること",
            publishDate: new Date("2021-09-16"),
            companyName: "株式会社メルカリ",
            url: "https://engineering.mercari.com/blog/entry/20210915-c9577ca624/",
            category: [
                {
                    id: "qa",
                    name: "品質保証"
                },
            ]
        },
        {
            title: "なめらかな立ち上がりのためのメルペイAndroidチームのオンボーディング",
            publishDate: new Date("2021-09-13"),
            companyName: "株式会社メルカリ",
            url: "https://engineering.mercari.com/blog/entry/20210913-merpay-android-team-onboarding/",
            category: [
                {
                    id: "android",
                    name: "Android"
                },

            ]
        },
        {
            title: "Sansanモバイルエンジニアが使える社内制度特集",
            publishDate: new Date("2021-09-22"),
            companyName: "株式会社Sansan",
            url: "https://buildersbox.corp-sansan.com/archive/2021/09/22",
            "category": [
                { id: "organization", name: "組織" },
                { id: "culture", name: "文化" },    
            ]
        },
        {
            title: "BERTによる日本語固有表現抽出の精度改善 〜BERT-CRFの紹介〜",
            publishDate: new Date("2021-09-21"),
            companyName: "株式会社Sansan",
            url: "https://buildersbox.corp-sansan.com/archive/2021/09/21",
            "category": [
                { id: "bert", name: "BERT" },
                { id: "machinelearning", name: "機械学習" },    
            ]
        },
        {
            title: "Sansan Androidチームの技術研鑽の取り組み",
            publishDate: new Date("2021-09-16"),
            companyName: "株式会社Sansan",
            url: "https://buildersbox.corp-sansan.com/archive/2021/09/16",
            "category": [
                { id: "organization", name: "組織" },
                { id: "android", name: "Android" },
            ]
        },
        {
            title: "「事業を成長させるQA体制のつくり方」について発表しました",
            publishDate: new Date("2021-09-13"),
            companyName: "株式会社Sansan",
            url: "https://buildersbox.corp-sansan.com/archive/2021/09/13",
            "category": [
                { id: "qa", name: "品質保証" },
                { id: "organization", name: "組織" },
            ]
        },
        {
            title: "【Dive into the Economics of Networks】vol.5 Exponential Random Graph Model (ERGM) を R で推定・シミュレーションしてみる",
            publishDate: new Date("2021-09-08"),
            companyName: "株式会社Sansan",
            url: "https://buildersbox.corp-sansan.com/archive/2021/09/08",
            "category": [
                { id: "rlang", name: "R" },
                { id: "machinelearning", name: "機械学習" },
            ]
        }
    ]
}