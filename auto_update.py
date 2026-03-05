#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
经管类A刊论文自动更新爬虫
支持多个期刊网站的自动抓取
"""

import json
import requests
from datetime import datetime, timedelta
from bs4 import BeautifulSoup
import time
import re
import feedparser

class PaperCrawler:
    def __init__(self):
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
        }
        self.papers = []

    def fetch_all_journals(self):
        """抓取所有期刊"""
        print("🚀 开始抓取论文...")

        # 国内期刊
        self.fetch_cnki_journals()

        # 国外期刊 - 使用CrossRef API
        self.fetch_crossref_papers()

        return self.papers

    def fetch_cnki_journals(self):
        """抓取CNKI期刊(通过RSS或API)"""
        journals = {
            "管理世界": "GLSJ",
            "经济研究": "JJYJ",
            "会计研究": "KJYJ",
            "金融研究": "JRYJ",
            "中国工业经济": "ZGJJ",
            "南开管理评论": "NKGL",
            "管理科学学报": "GLKX",
            "中国管理科学": "ZGGL",
            "审计研究": "SJYJ",
            "财经研究": "CJYJ",
            "数量经济技术经济研究": "SLJJ",
            "世界经济": "SJJJ"
        }

        for journal_name, code in journals.items():
            try:
                print(f"  抓取 {journal_name}...")
                # 实际需要根据CNKI的API或RSS实现
                # 这里提供框架
                papers = self._parse_cnki_journal(journal_name, code)
                self.papers.extend(papers)
                time.sleep(2)  # 避免请求过快
            except Exception as e:
                print(f"  ❌ {journal_name} 抓取失败: {e}")

    def _parse_cnki_journal(self, journal_name, code):
        """解析CNKI期刊数据"""
        # 示例:返回模拟数据
        # 实际使用时需要实现真实的CNKI API调用
        today = datetime.now().strftime("%Y-%m-%d")

        return [{
            "id": int(time.time() * 1000),
            "journal": journal_name,
            "level": "CSSCI",
            "region": "domestic",
            "quarter": "CSSCI",
            "title": f"{journal_name}最新论文示例",
            "downloads": 0,
            "publishDate": today,
            "abstractCN": "这是自动抓取的中文摘要",
            "abstractEN": "This is automatically crawled English abstract",
            "innovation": "自动识别的创新点",
            "pdfUrl": f"http://www.cnki.net",
            "officialUrl": f"http://www.cnki.net",
            "downloadUrl": f"http://www.cnki.net"
        }]

    def fetch_crossref_papers(self):
        """使用CrossRef API抓取国外期刊"""
        # 主要经管类期刊的ISSN
        journals = {
            "Journal of Finance": "0022-1082",
            "Management Science": "0025-1909",
            "Journal of Marketing": "0022-2429",
            "Strategic Management Journal": "0143-2095",
            "Journal of Financial Economics": "0304-405X",
            "Review of Financial Studies": "0893-9454",
            "Journal of Accounting Research": "0021-8456",
            "Accounting Review": "0001-4826",
            "Journal of Marketing Research": "0022-2437",
            "Marketing Science": "0732-2399",
            "Organization Science": "1047-7039",
            "Administrative Science Quarterly": "0001-8392",
            "Academy of Management Journal": "0001-4273",
            "Journal of International Business Studies": "0047-2506",
            "Journal of Operations Management": "0272-6963"
        }

        for journal_name, issn in journals.items():
            try:
                print(f"  抓取 {journal_name}...")
                papers = self._fetch_from_crossref(journal_name, issn)
                self.papers.extend(papers)
                time.sleep(1)
            except Exception as e:
                print(f"  ❌ {journal_name} 抓取失败: {e}")

    def _fetch_from_crossref(self, journal_name, issn):
        """从CrossRef API获取论文"""
        url = f"https://api.crossref.org/journals/{issn}/works"
        params = {
            "rows": 5,
            "sort": "published",
            "order": "desc"
        }

        try:
            response = requests.get(url, params=params, headers=self.headers, timeout=10)
            if response.status_code != 200:
                return []

            data = response.json()
            papers = []

            for item in data.get('message', {}).get('items', []):
                # 提取论文信息
                title = item.get('title', [''])[0]
                if not title:
                    continue

                # 提取发表日期
                pub_date = item.get('published', {}).get('date-parts', [[]])[0]
                if pub_date:
                    date_str = f"{pub_date[0]}-{pub_date[1]:02d}-{pub_date[2]:02d}" if len(pub_date) == 3 else f"{pub_date[0]}-{pub_date[1]:02d}-01"
                else:
                    date_str = datetime.now().strftime("%Y-%m-%d")

                # 提取摘要
                abstract = item.get('abstract', '暂无摘要')

                paper = {
                    "id": int(time.time() * 1000) + len(papers),
                    "journal": journal_name,
                    "level": "Q1",
                    "region": "foreign",
                    "quarter": "Q1",
                    "title": title,
                    "downloads": 0,
                    "publishDate": date_str,
                    "abstractCN": f"来自{journal_name}的最新研究",
                    "abstractEN": abstract[:200] if abstract else "No abstract available",
                    "innovation": "国际前沿研究",
                    "pdfUrl": item.get('URL', ''),
                    "officialUrl": item.get('URL', ''),
                    "downloadUrl": item.get('URL', '')
                }
                papers.append(paper)

            return papers

        except Exception as e:
            print(f"    CrossRef API错误: {e}")
            return []


def update_papers_json():
    """更新论文数据文件"""
    json_file = "papers_data.json"

    # 读取现有数据
    try:
        with open(json_file, 'r', encoding='utf-8') as f:
            existing_papers = json.load(f)
    except FileNotFoundError:
        existing_papers = []

    # 抓取最新论文
    crawler = PaperCrawler()
    new_papers = crawler.fetch_all_journals()

    print(f"\n📊 抓取到 {len(new_papers)} 篇新论文")

    # 合并数据(去重)
    existing_ids = {p.get('title', '') for p in existing_papers}
    added_count = 0

    for paper in new_papers:
        if paper['title'] not in existing_ids:
            existing_papers.insert(0, paper)
            added_count += 1

    # 按时间排序
    existing_papers.sort(key=lambda x: x.get('publishDate', ''), reverse=True)

    # 保存数据
    with open(json_file, 'w', encoding='utf-8') as f:
        json.dump(existing_papers, f, ensure_ascii=False, indent=2)

    print(f"✅ 更新完成! 新增 {added_count} 篇论文")
    print(f"📚 当前共有 {len(existing_papers)} 篇论文")


if __name__ == "__main__":
    print("=" * 50)
    print("🚀 经管类A刊论文自动更新系统")
    print("=" * 50)
    update_papers_json()
    print("=" * 50)
    print("✨ 更新完成!")
