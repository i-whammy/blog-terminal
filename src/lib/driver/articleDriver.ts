import { Injectable } from "@angular/core";
import { Article, Articles, CompanyName, PublishDate, Title } from "../domain/article";
import { ArticlePort } from "../port/articlePort";

type ArticleEntity = {
    title: String,
    publishDate: Date,
    companyName: String,
}

@Injectable()
export class ArticleDriver extends ArticlePort {
    fetch(): Articles {
        const articles: ArticleEntity[] = [
            {
                title: "フロントの動作確認用の環境をGithub Actionsで自動構築してみた",
                publishDate: new Date("2021-08-19"),
                companyName: "株式会社ユーザベース",
            },
            {
                title: "iOSアプリにオファーコード機能を実装したときの話",
                publishDate: new Date("2021-08-11"),
                companyName: "株式会社ユーザベース",
            },
            {
                title: "ファイルダウンロードを行う E2E テストを Selenium Grid / Zalenium で実施するための拡張を作る",
                publishDate: new Date("2021-08-10"),
                companyName: "株式会社ユーザベース",
            },
        ]
        return new Articles(articles.map(a =>
            new Article(new Title(a.title),
            new PublishDate(new Date(a.publishDate)),
            new CompanyName(a.companyName))))
    }
}