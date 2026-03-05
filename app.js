// 模拟API数据
const API_DATA = [
    {
        id: 1, journal: "管理世界", level: "CSSCI", region: "domestic", quarter: "CSSCI",
        title: "数字化转型对企业创新绩效的影响研究", downloads: 1523, publishDate: "2026-02-15",
        abstractCN: "本文基于2015-2023年中国上市公司数据,实证检验了数字化转型对企业创新绩效的影响机制。",
        abstractEN: "This study examines the impact of digital transformation on corporate innovation performance.",
        innovation: "首次构建多维度数字化转型指数",
        pdfUrl: "https://www.mwm.net.cn", officialUrl: "https://www.mwm.net.cn", downloadUrl: "https://www.mwm.net.cn"
    },
    {
        id: 2, journal: "经济研究", level: "CSSCI", region: "domestic", quarter: "CSSCI",
        title: "共同富裕目标下的收入分配政策效应评估", downloads: 2341, publishDate: "2026-01-20",
        abstractCN: "本文构建动态一般均衡模型,模拟分析了不同收入分配政策的影响。",
        abstractEN: "This paper builds a dynamic general equilibrium model to simulate policy effects.",
        innovation: "创新性地将共同富裕目标量化",
        pdfUrl: "http://www.erj.cn", officialUrl: "http://www.erj.cn", downloadUrl: "http://www.erj.cn"
    },
    {
        id: 3, journal: "Journal of Finance", level: "Q1", region: "foreign", quarter: "Q1",
        title: "ESG投资与长期股票收益:来自全球市场的证据", downloads: 3156, publishDate: "2026-03-01",
        abstractCN: "本研究利用全球45个国家的数据,检验了ESG评级与股票长期收益的关系。",
        abstractEN: "Using data from 45 countries, this study examines ESG ratings and stock returns.",
        innovation: "首次在全球范围内验证ESG投资的长期价值",
        pdfUrl: "https://onlinelibrary.wiley.com/journal/15406261", officialUrl: "https://onlinelibrary.wiley.com/journal/15406261", downloadUrl: "https://onlinelibrary.wiley.com/journal/15406261"
    },
    {
        id: 4, journal: "会计研究", level: "CSSCI", region: "domestic", quarter: "CSSCI",
        title: "人工智能审计技术应用与审计质量提升", downloads: 1876, publishDate: "2026-02-28",
        abstractCN: "本文研究了AI技术在审计中的应用效果。",
        abstractEN: "This study investigates AI technology application effects in auditing.",
        innovation: "构建了AI审计质量评价体系",
        pdfUrl: "http://www.kjyj.org.cn", officialUrl: "http://www.kjyj.org.cn", downloadUrl: "http://www.kjyj.org.cn"
    },
    {
        id: 5, journal: "Academy of Management Journal", level: "Q1", region: "foreign", quarter: "Q1",
        title: "组织韧性与危机管理:疫情后的战略转型", downloads: 2567, publishDate: "2026-02-10",
        abstractCN: "研究组织如何在危机中建立韧性并实现战略转型。",
        abstractEN: "Examines how organizations build resilience and achieve strategic transformation.",
        innovation: "提出组织韧性三维模型",
        pdfUrl: "https://journals.aom.org/journal/amj", officialUrl: "https://journals.aom.org/journal/amj", downloadUrl: "https://journals.aom.org/journal/amj"
    },
    {
        id: 6, journal: "金融研究", level: "CSSCI", region: "domestic", quarter: "CSSCI",
        title: "金融科技对商业银行风险承担的影响", downloads: 1945, publishDate: "2026-01-15",
        abstractCN: "分析金融科技如何影响商业银行的风险承担行为。",
        abstractEN: "Analyzes how fintech affects commercial banks' risk-taking behavior.",
        innovation: "构建金融科技影响机制模型",
        pdfUrl: "http://www.jryj.org.cn", officialUrl: "http://www.jryj.org.cn", downloadUrl: "http://www.jryj.org.cn"
    },
    {
        id: 7, journal: "中国工业经济", level: "CSSCI", region: "domestic", quarter: "CSSCI",
        title: "产业链供应链韧性提升路径研究", downloads: 2134, publishDate: "2026-02-05",
        abstractCN: "基于全球价值链视角,探讨中国产业链供应链韧性提升的实现路径。",
        abstractEN: "Explores pathways to enhance China's industrial and supply chain resilience from a global value chain perspective.",
        innovation: "提出产业链韧性评价指标体系",
        pdfUrl: "http://www.ciejournal.org", officialUrl: "http://www.ciejournal.org", downloadUrl: "http://www.ciejournal.org"
    },
    {
        id: 8, journal: "Management Science", level: "Q1", region: "foreign", quarter: "Q1",
        title: "Platform Competition and Network Effects in Digital Markets", downloads: 2890, publishDate: "2026-02-20",
        abstractCN: "研究数字市场中平台竞争与网络效应的动态关系。",
        abstractEN: "Investigates the dynamic relationship between platform competition and network effects in digital markets.",
        innovation: "构建双边市场竞争模型",
        pdfUrl: "https://pubsonline.informs.org/journal/mnsc", officialUrl: "https://pubsonline.informs.org/journal/mnsc", downloadUrl: "https://pubsonline.informs.org/journal/mnsc"
    },
    {
        id: 9, journal: "南开管理评论", level: "CSSCI", region: "domestic", quarter: "CSSCI",
        title: "高管团队异质性对企业战略变革的影响", downloads: 1678, publishDate: "2026-01-25",
        abstractCN: "探讨高管团队异质性如何影响企业战略变革的速度和效果。",
        abstractEN: "Explores how top management team heterogeneity affects the speed and effectiveness of strategic change.",
        innovation: "揭示异质性的双刃剑效应",
        pdfUrl: "http://nkglpl.nankai.edu.cn", officialUrl: "http://nkglpl.nankai.edu.cn", downloadUrl: "http://nkglpl.nankai.edu.cn"
    },
    {
        id: 10, journal: "Journal of Marketing", level: "Q1", region: "foreign", quarter: "Q1",
        title: "AI-Powered Personalization and Consumer Privacy Concerns", downloads: 3245, publishDate: "2026-03-05",
        abstractCN: "研究AI驱动的个性化营销与消费者隐私担忧之间的权衡。",
        abstractEN: "Examines the trade-off between AI-powered personalization and consumer privacy concerns.",
        innovation: "提出隐私-个性化平衡框架",
        pdfUrl: "https://journals.sagepub.com/home/jmx", officialUrl: "https://journals.sagepub.com/home/jmx", downloadUrl: "https://journals.sagepub.com/home/jmx"
    },
    {
        id: 11, journal: "管理科学学报", level: "CSSCI", region: "domestic", quarter: "CSSCI",
        title: "双碳目标下企业绿色创新驱动因素研究", downloads: 1823, publishDate: "2026-02-12",
        abstractCN: "基于制度理论和资源基础观,探讨双碳目标下企业绿色创新的驱动机制。",
        abstractEN: "Based on institutional theory and resource-based view, explores drivers of corporate green innovation under carbon neutrality goals.",
        innovation: "识别政策压力与市场机会的协同效应",
        pdfUrl: "http://jms.sem.tsinghua.edu.cn", officialUrl: "http://jms.sem.tsinghua.edu.cn", downloadUrl: "http://jms.sem.tsinghua.edu.cn"
    },
    {
        id: 12, journal: "Strategic Management Journal", level: "Q1", region: "foreign", quarter: "Q1",
        title: "Dynamic Capabilities in the Age of AI", downloads: 2976, publishDate: "2026-02-25",
        abstractCN: "探讨人工智能时代企业动态能力的重构与演化。",
        abstractEN: "Explores the reconfiguration and evolution of dynamic capabilities in the AI era.",
        innovation: "提出AI赋能的动态能力框架",
        pdfUrl: "https://onlinelibrary.wiley.com/journal/10970266", officialUrl: "https://onlinelibrary.wiley.com/journal/10970266", downloadUrl: "https://onlinelibrary.wiley.com/journal/10970266"
    },
    {
        id: 13, journal: "中国管理科学", level: "CSSCI", region: "domestic", quarter: "CSSCI",
        title: "区块链技术在供应链金融中的应用研究", downloads: 1567, publishDate: "2026-01-30",
        abstractCN: "分析区块链技术如何解决供应链金融中的信息不对称问题。",
        abstractEN: "Analyzes how blockchain technology addresses information asymmetry in supply chain finance.",
        innovation: "构建基于智能合约的信用评估模型",
        pdfUrl: "http://www.zgglkx.com", officialUrl: "http://www.zgglkx.com", downloadUrl: "http://www.zgglkx.com"
    },
    {
        id: 14, journal: "Journal of Financial Economics", level: "Q1", region: "foreign", quarter: "Q1",
        title: "Cryptocurrency Adoption and Financial Inclusion", downloads: 3421, publishDate: "2026-03-02",
        abstractCN: "研究加密货币采用对金融包容性的影响。",
        abstractEN: "Examines the impact of cryptocurrency adoption on financial inclusion.",
        innovation: "量化数字货币的普惠金融效应",
        pdfUrl: "https://www.sciencedirect.com/journal/journal-of-financial-economics", officialUrl: "https://www.sciencedirect.com/journal/journal-of-financial-economics", downloadUrl: "https://www.sciencedirect.com/journal/journal-of-financial-economics"
    },
    {
        id: 15, journal: "审计研究", level: "CSSCI", region: "domestic", quarter: "CSSCI",
        title: "大数据审计技术在国家治理中的应用", downloads: 1456, publishDate: "2026-02-08",
        abstractCN: "探讨大数据审计技术如何提升国家治理现代化水平。",
        abstractEN: "Explores how big data audit technology enhances national governance modernization.",
        innovation: "提出国家审计数字化转型路径",
        pdfUrl: "http://www.sjyj.net.cn", officialUrl: "http://www.sjyj.net.cn", downloadUrl: "http://www.sjyj.net.cn"
    },
    {
        id: 16, journal: "Organization Science", level: "Q1", region: "foreign", quarter: "Q1",
        title: "Remote Work and Organizational Culture Transformation", downloads: 2654, publishDate: "2026-02-18",
        abstractCN: "研究远程工作如何重塑组织文化。",
        abstractEN: "Investigates how remote work reshapes organizational culture.",
        innovation: "识别虚拟协作的文化适应机制",
        pdfUrl: "https://pubsonline.informs.org/journal/orsc", officialUrl: "https://pubsonline.informs.org/journal/orsc", downloadUrl: "https://pubsonline.informs.org/journal/orsc"
    },
    {
        id: 17, journal: "财经研究", level: "CSSCI", region: "domestic", quarter: "CSSCI",
        title: "数字人民币对货币政策传导机制的影响", downloads: 2012, publishDate: "2026-01-18",
        abstractCN: "分析数字人民币如何改变传统货币政策传导路径。",
        abstractEN: "Analyzes how digital RMB changes traditional monetary policy transmission channels.",
        innovation: "构建数字货币政策传导模型",
        pdfUrl: "http://www.cjyj.shufe.edu.cn", officialUrl: "http://www.cjyj.shufe.edu.cn", downloadUrl: "http://www.cjyj.shufe.edu.cn"
    },
    {
        id: 18, journal: "Journal of Operations Management", level: "Q1", region: "foreign", quarter: "Q1",
        title: "Sustainable Operations in Circular Economy", downloads: 2345, publishDate: "2026-02-22",
        abstractCN: "探讨循环经济模式下的可持续运营管理。",
        abstractEN: "Explores sustainable operations management in circular economy models.",
        innovation: "提出闭环供应链优化框架",
        pdfUrl: "https://onlinelibrary.wiley.com/journal/18731317", officialUrl: "https://onlinelibrary.wiley.com/journal/18731317", downloadUrl: "https://onlinelibrary.wiley.com/journal/18731317"
    },
    {
        id: 19, journal: "外国经济与管理", level: "CSSCI", region: "domestic", quarter: "CSSCI",
        title: "跨国公司在华投资的地缘政治风险应对", downloads: 1734, publishDate: "2026-02-03",
        abstractCN: "研究跨国公司如何应对中国市场的地缘政治风险。",
        abstractEN: "Examines how multinational corporations respond to geopolitical risks in China.",
        innovation: "构建地缘政治风险评估体系",
        pdfUrl: "http://www.feem.shufe.edu.cn", officialUrl: "http://www.feem.shufe.edu.cn", downloadUrl: "http://www.feem.shufe.edu.cn"
    },
    {
        id: 20, journal: "Journal of Consumer Research", level: "Q1", region: "foreign", quarter: "Q1",
        title: "Social Media Influencers and Consumer Decision Making", downloads: 3087, publishDate: "2026-03-04",
        abstractCN: "研究社交媒体影响者如何影响消费者决策过程。",
        abstractEN: "Investigates how social media influencers affect consumer decision-making processes.",
        innovation: "揭示影响者可信度的多维构成",
        pdfUrl: "https://academic.oup.com/jcr", officialUrl: "https://academic.oup.com/jcr", downloadUrl: "https://academic.oup.com/jcr"
    },
    {
        id: 21, journal: "数量经济技术经济研究", level: "CSSCI", region: "domestic", quarter: "CSSCI",
        title: "机器学习在宏观经济预测中的应用", downloads: 1890, publishDate: "2026-01-22",
        abstractCN: "运用机器学习方法提升宏观经济指标预测精度。",
        abstractEN: "Applies machine learning methods to improve macroeconomic forecasting accuracy.",
        innovation: "集成多种算法的预测模型",
        pdfUrl: "http://www.jqte.net", officialUrl: "http://www.jqte.net", downloadUrl: "http://www.jqte.net"
    },
    {
        id: 22, journal: "Journal of International Business Studies", level: "Q1", region: "foreign", quarter: "Q1",
        title: "Emerging Market Multinationals and Global Value Chains", downloads: 2456, publishDate: "2026-02-14",
        abstractCN: "研究新兴市场跨国公司在全球价值链中的升级路径。",
        abstractEN: "Examines upgrading paths of emerging market multinationals in global value chains.",
        innovation: "提出双向价值链整合模型",
        pdfUrl: "https://www.palgrave.com/gp/journal/41267", officialUrl: "https://www.palgrave.com/gp/journal/41267", downloadUrl: "https://www.palgrave.com/gp/journal/41267"
    },
    {
        id: 23, journal: "商业研究", level: "CSSCI", region: "domestic", quarter: "CSSCI",
        title: "直播电商对传统零售业态的冲击与融合", downloads: 1623, publishDate: "2026-02-06",
        abstractCN: "分析直播电商如何重塑零售业态格局。",
        abstractEN: "Analyzes how live-streaming e-commerce reshapes retail formats.",
        innovation: "识别线上线下融合的关键路径",
        pdfUrl: "http://www.shangyeyanjiu.com", officialUrl: "http://www.shangyeyanjiu.com", downloadUrl: "http://www.shangyeyanjiu.com"
    },
    {
        id: 24, journal: "Administrative Science Quarterly", level: "Q1", region: "foreign", quarter: "Q1",
        title: "Leadership in Hybrid Work Environments", downloads: 2789, publishDate: "2026-02-27",
        abstractCN: "探讨混合工作环境下的领导力实践。",
        abstractEN: "Explores leadership practices in hybrid work environments.",
        innovation: "提出情境适应型领导模型",
        pdfUrl: "https://journals.sagepub.com/home/asq", officialUrl: "https://journals.sagepub.com/home/asq", downloadUrl: "https://journals.sagepub.com/home/asq"
    },
    {
        id: 25, journal: "世界经济", level: "CSSCI", region: "domestic", quarter: "CSSCI",
        title: "全球产业链重构与中国制造业转型", downloads: 2145, publishDate: "2026-01-28",
        abstractCN: "分析全球产业链重构背景下中国制造业的转型策略。",
        abstractEN: "Analyzes transformation strategies of Chinese manufacturing amid global industrial chain restructuring.",
        innovation: "构建产业链安全评估框架",
        pdfUrl: "http://www.iwep.org.cn", officialUrl: "http://www.iwep.org.cn", downloadUrl: "http://www.iwep.org.cn"
    },
    {
        id: 26, journal: "Journal of Accounting Research", level: "Q1", region: "foreign", quarter: "Q1",
        title: "Blockchain and Financial Reporting Transparency", downloads: 2934, publishDate: "2026-03-03",
        abstractCN: "研究区块链技术对财务报告透明度的影响。",
        abstractEN: "Examines the impact of blockchain technology on financial reporting transparency.",
        innovation: "提出分布式账本审计方法",
        pdfUrl: "https://onlinelibrary.wiley.com/journal/1475679x", officialUrl: "https://onlinelibrary.wiley.com/journal/1475679x", downloadUrl: "https://onlinelibrary.wiley.com/journal/1475679x"
    },
    {
        id: 27, journal: "科研管理", level: "CSSCI", region: "domestic", quarter: "CSSCI",
        title: "科技成果转化的激励机制设计", downloads: 1512, publishDate: "2026-02-11",
        abstractCN: "探讨如何设计有效的科技成果转化激励机制。",
        abstractEN: "Explores how to design effective incentive mechanisms for technology transfer.",
        innovation: "提出多主体协同激励模型",
        pdfUrl: "http://www.kygl.net.cn", officialUrl: "http://www.kygl.net.cn", downloadUrl: "http://www.kygl.net.cn"
    },
    {
        id: 28, journal: "Journal of Business Ethics", level: "Q1", region: "foreign", quarter: "Q1",
        title: "Corporate Social Responsibility in the Digital Age", downloads: 2567, publishDate: "2026-02-19",
        abstractCN: "研究数字时代企业社会责任的新内涵与实践。",
        abstractEN: "Examines new connotations and practices of CSR in the digital age.",
        innovation: "构建数字化CSR评价体系",
        pdfUrl: "https://www.springer.com/journal/10551", officialUrl: "https://www.springer.com/journal/10551", downloadUrl: "https://www.springer.com/journal/10551"
    },
    {
        id: 29, journal: "经济学动态", level: "CSSCI", region: "domestic", quarter: "CSSCI",
        title: "平台经济反垄断的理论与实践", downloads: 1876, publishDate: "2026-01-26",
        abstractCN: "分析平台经济反垄断的理论基础与监管实践。",
        abstractEN: "Analyzes theoretical foundations and regulatory practices of platform economy antitrust.",
        innovation: "提出动态市场势力评估方法",
        pdfUrl: "http://www.jjxdt.org", officialUrl: "http://www.jjxdt.org", downloadUrl: "http://www.jjxdt.org"
    },
    {
        id: 30, journal: "Journal of Marketing Research", level: "Q1", region: "foreign", quarter: "Q1",
        title: "Neuromarketing and Consumer Behavior Analysis", downloads: 3156, publishDate: "2026-03-01",
        abstractCN: "运用神经营销学方法深入分析消费者行为。",
        abstractEN: "Applies neuromarketing methods to deeply analyze consumer behavior.",
        innovation: "整合脑科学与营销学的研究范式",
        pdfUrl: "https://journals.sagepub.com/home/mrj", officialUrl: "https://journals.sagepub.com/home/mrj", downloadUrl: "https://journals.sagepub.com/home/mrj"
    }
];

let allPapers = [];
let filteredPapers = [];
let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
let customPapers = JSON.parse(localStorage.getItem('customPapers') || '[]');

// 判断是否为今日新增
function isNewToday(dateStr) {
    const today = new Date().toISOString().split('T')[0];
    return dateStr === today;
}

// 模拟API调用
async function fetchPapers() {
    try {
        // 尝试从JSON文件加载(自动更新的数据)
        const response = await fetch('papers_data.json');
        if (response.ok) {
            const jsonData = await response.json();
            return jsonData;
        }
    } catch (e) {
        console.log('使用内置数据');
    }

    // 如果JSON文件不存在,使用内置数据
    const allData = [...API_DATA, ...customPapers];
    allData.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
    return allData;
}

// 初始化
async function init() {
    allPapers = await fetchPapers();
    filteredPapers = [...allPapers];

    populateJournalSelect();
    renderPapers();
    updateResultsCount();
    updateFavCount();
    bindEvents();
}

// 填充期刊下拉框
function populateJournalSelect() {
    const journals = [...new Set(allPapers.map(p => p.journal))];
    const select = document.getElementById('journal-select');
    journals.forEach(j => {
        const option = document.createElement('option');
        option.value = j;
        option.textContent = j;
        select.appendChild(option);
    });
}

// 渲染论文
function renderPapers() {
    const grid = document.getElementById('papers-grid');
    grid.innerHTML = '';

    filteredPapers.forEach(paper => {
        const isFav = favorites.includes(paper.id);
        const isNew = isNewToday(paper.publishDate);
        const card = document.createElement('div');
        card.className = 'paper-card';

        card.innerHTML = `
            <button class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite(${paper.id}, event)">${isFav ? '⭐' : '☆'}</button>
            <div class="journal-badge">${paper.journal} · ${paper.level}${isNew ? '<span class="new-badge">🔥 今日新增</span>' : ''}</div>
            <h3 class="paper-title">${paper.title}</h3>
            <div class="paper-meta">
                <div class="downloads">📥 ${paper.downloads.toLocaleString()} 次</div>
                <div class="publish-date">📅 ${paper.publishDate}</div>
            </div>
            <div class="paper-abstract"><strong>中文:</strong> ${paper.abstractCN}</div>
            <div class="paper-abstract"><strong>English:</strong> ${paper.abstractEN}</div>
            <div class="innovation">💡 ${paper.innovation}</div>
            <button class="share-btn" onclick="sharePaper(${paper.id}, event)">🔗 分享</button>
        `;

        card.onclick = (e) => {
            if (!e.target.classList.contains('fav-btn') && !e.target.classList.contains('share-btn')) {
                openModal(paper);
            }
        };

        grid.appendChild(card);
    });
}

// 筛选逻辑
function applyFilters() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const region = document.querySelector('input[name="region"]:checked').value;
    const quarters = Array.from(document.querySelectorAll('.quarter-filter:checked')).map(cb => cb.value);
    const journal = document.getElementById('journal-select').value;

    filteredPapers = allPapers.filter(p => {
        const matchSearch = p.title.toLowerCase().includes(searchTerm) ||
                          p.abstractCN.toLowerCase().includes(searchTerm);
        const matchRegion = region === 'all' || p.region === region;
        const matchQuarter = quarters.includes(p.quarter);
        const matchJournal = journal === 'all' || p.journal === journal;

        return matchSearch && matchRegion && matchQuarter && matchJournal;
    });

    renderPapers();
    updateResultsCount();
}

// 绑定事件
function bindEvents() {
    document.getElementById('search-input').addEventListener('input', applyFilters);
    document.querySelectorAll('input[name="region"]').forEach(r => r.addEventListener('change', applyFilters));
    document.querySelectorAll('.quarter-filter').forEach(cb => cb.addEventListener('change', applyFilters));
    document.getElementById('journal-select').addEventListener('change', applyFilters);

    document.getElementById('reset-filters').addEventListener('click', () => {
        document.getElementById('search-input').value = '';
        document.querySelector('input[name="region"][value="all"]').checked = true;
        document.querySelectorAll('.quarter-filter').forEach(cb => cb.checked = true);
        document.getElementById('journal-select').value = 'all';
        applyFilters();
    });

    document.getElementById('show-favorites').addEventListener('click', () => {
        filteredPapers = allPapers.filter(p => favorites.includes(p.id));
        renderPapers();
        updateResultsCount();
    });

    document.getElementById('admin-btn').addEventListener('click', showAddPaperForm);
}

// 显示添加论文表单
function showAddPaperForm() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';

    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
            <span class="close-btn" onclick="this.parentElement.parentElement.remove()">×</span>
            <h2 class="modal-title">➕ 添加新论文</h2>
            <form id="add-paper-form" style="color: #cbd5e0;">
                <div style="margin-bottom: 1rem;">
                    <label>论文标题*</label>
                    <input type="text" name="title" required style="width: 100%; padding: 0.5rem; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 6px; color: white; margin-top: 0.3rem;">
                </div>
                <div style="margin-bottom: 1rem;">
                    <label>期刊名称*</label>
                    <input type="text" name="journal" required style="width: 100%; padding: 0.5rem; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 6px; color: white; margin-top: 0.3rem;">
                </div>
                <div style="margin-bottom: 1rem; display: flex; gap: 1rem;">
                    <div style="flex: 1;">
                        <label>地区*</label>
                        <select name="region" required style="width: 100%; padding: 0.5rem; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 6px; color: white; margin-top: 0.3rem;">
                            <option value="domestic">国内</option>
                            <option value="foreign">国外</option>
                        </select>
                    </div>
                    <div style="flex: 1;">
                        <label>级别*</label>
                        <select name="level" required style="width: 100%; padding: 0.5rem; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 6px; color: white; margin-top: 0.3rem;">
                            <option value="CSSCI">CSSCI</option>
                            <option value="Q1">Q1</option>
                            <option value="Q2">Q2</option>
                            <option value="Q3">Q3</option>
                            <option value="Q4">Q4</option>
                        </select>
                    </div>
                </div>
                <div style="margin-bottom: 1rem;">
                    <label>中文摘要*</label>
                    <textarea name="abstractCN" required rows="3" style="width: 100%; padding: 0.5rem; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 6px; color: white; margin-top: 0.3rem;"></textarea>
                </div>
                <div style="margin-bottom: 1rem;">
                    <label>英文摘要*</label>
                    <textarea name="abstractEN" required rows="3" style="width: 100%; padding: 0.5rem; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 6px; color: white; margin-top: 0.3rem;"></textarea>
                </div>
                <div style="margin-bottom: 1rem;">
                    <label>创新点*</label>
                    <input type="text" name="innovation" required style="width: 100%; padding: 0.5rem; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 6px; color: white; margin-top: 0.3rem;">
                </div>
                <div style="margin-bottom: 1rem;">
                    <label>期刊官网*</label>
                    <input type="url" name="officialUrl" required style="width: 100%; padding: 0.5rem; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 6px; color: white; margin-top: 0.3rem;">
                </div>
                <button type="submit" class="link-btn" style="width: 100%; margin: 0;">保存论文</button>
            </form>
        </div>
    `;

    document.body.appendChild(modal);
    modal.querySelector('.modal-content').onclick = (e) => e.stopPropagation();
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };

    document.getElementById('add-paper-form').onsubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newPaper = {
            id: Date.now(),
            journal: formData.get('journal'),
            level: formData.get('level'),
            region: formData.get('region'),
            quarter: formData.get('level'),
            title: formData.get('title'),
            downloads: 0,
            publishDate: new Date().toISOString().split('T')[0],
            abstractCN: formData.get('abstractCN'),
            abstractEN: formData.get('abstractEN'),
            innovation: formData.get('innovation'),
            pdfUrl: formData.get('officialUrl'),
            officialUrl: formData.get('officialUrl'),
            downloadUrl: formData.get('officialUrl')
        };
        customPapers.unshift(newPaper);
        localStorage.setItem('customPapers', JSON.stringify(customPapers));
        modal.remove();
        init();
        alert('✅ 论文添加成功!');
    };
}

// 收藏功能
function toggleFavorite(id, event) {
    event.stopPropagation();
    const idx = favorites.indexOf(id);
    if (idx > -1) {
        favorites.splice(idx, 1);
    } else {
        favorites.push(id);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderPapers();
    updateFavCount();
}

// 分享功能
function sharePaper(id, event) {
    event.stopPropagation();
    const paper = allPapers.find(p => p.id === id);
    const shareText = `📚 ${paper.title}\n期刊: ${paper.journal} (${paper.level})\n${window.location.href}?paper=${id}`;

    if (navigator.share) {
        navigator.share({ title: paper.title, text: shareText });
    } else {
        navigator.clipboard.writeText(shareText);
        alert('链接已复制到剪贴板!');
    }
}

// 更新统计
function updateResultsCount() {
    document.getElementById('results-count').textContent = `共 ${filteredPapers.length} 篇论文`;
}

function updateFavCount() {
    document.getElementById('fav-count').textContent = favorites.length;
}

// 详情弹窗
function openModal(paper) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';

    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn" onclick="this.parentElement.parentElement.remove()">×</span>
            <h2 class="modal-title">${paper.title}</h2>
            <div class="modal-section">
                <h3>📖 期刊信息</h3>
                <p>${paper.journal} · ${paper.level} · 下载量: ${paper.downloads.toLocaleString()}</p>
            </div>
            <div class="modal-section">
                <h3>📝 研究摘要</h3>
                <p><strong>中文:</strong> ${paper.abstractCN}</p>
                <p><strong>English:</strong> ${paper.abstractEN}</p>
            </div>
            <div class="modal-section">
                <h3>💡 创新点</h3>
                <p>${paper.innovation}</p>
            </div>
            <div class="modal-section">
                <h3>🔗 资源链接</h3>
                <a href="${paper.pdfUrl}" class="link-btn" target="_blank" rel="noopener">📄 查看PDF</a>
                <a href="${paper.officialUrl}" class="link-btn" target="_blank" rel="noopener">🌐 期刊官网</a>
                <a href="${paper.downloadUrl}" class="link-btn" target="_blank" rel="noopener">⬇️ 下载论文</a>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // 阻止modal-content的点击事件冒泡
    modal.querySelector('.modal-content').onclick = (e) => e.stopPropagation();
    modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
    };
}

// PDF查看处理
function handlePdfClick(title, officialUrl) {
    alert(`📄 PDF原文功能\n\n论文: ${title}\n\n提示: 请访问期刊官网获取PDF\n官网: ${officialUrl}`);
}

// 下载处理
function handleDownload(title, id) {
    alert(`⬇️ 下载功能\n\n论文: ${title}\n\n提示: 实际使用时需要接入真实的PDF下载服务\n论文ID: ${id}`);
}

document.addEventListener('DOMContentLoaded', init);
