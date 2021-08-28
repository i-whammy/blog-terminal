import { Injectable } from "@angular/core";
import { Article, Articles, Title } from "../domain/article";
import { ArticlePort } from "../port/articlePort";

type ArticleEntity = {
    title: String,
    publishDate: String,
    companyName: String,
}

@Injectable()
export class ArticleDriver extends ArticlePort {
    fetch(): Articles {
        const articles: ArticleEntity[] = [
            {
                title: "フロントの動作確認用の環境をGithub Actionsで自動構築してみた",
                publishDate: "",
                companyName: "",
            },
            {
                title: "iOSアプリにオファーコード機能を実装したときの話",
                publishDate: "",
                companyName: "",
            },
            {
                title: "ファイルダウンロードを行う E2E テストを Selenium Grid / Zalenium で実施するための拡張を作る",
                publishDate: "",
                companyName: "",
            },
        ]
        return new Articles(articles.map(a => new Article(new Title(a.title))))
    }
}