function App() {
  const scrollToAchievements = () => {
    document.querySelector('.achievements').scrollIntoView({
      behavior: 'smooth'
    });

  };

  return (
    <div>
        {/* Banner */}
        <header>
            <div className="container banner">
                <img src="images/building_gyousei_kokuzeichou.png" alt="Logo" />
                <h1>2025&nbsp;彳丁止攵阝元</h1>
            </div>
        </header>

        {/* Hero Section */}
        <section className="hero">
            <img 
                src="images/TwZAkQq.png" 
                alt="背景圖片" 
                className="hero-bg"
            />
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h2 className="hero-title">2025 全民補貼再加碼</h2>
                <p className="hero-subtitle">單身孩童弱勢至少補助 3000</p>
                <button 
                    className="hero-button"
                    onClick={scrollToAchievements}
                >
                    了解更多
                </button>
            </div>
        </section>

        {/* Achievements Section */}
        <section className="achievements">
            <div className="container">
                <h2 className="section-title">2024 全民社福補貼辦法</h2>
                <div className="achievements-grid">
                    {[
                        {
                            title: "單身租金補貼",
                            subtitle: "最高每月 8000 元",
                            description: "18~39 歲單身者租金補貼，總預算300億新台幣",
                            image: "images/iede_boy.png"
                        },
                        {
                            title: "0~6 歲國家養",
                            subtitle: "每一孩童每月 5000 元",
                            description: "生 1 人x1.4倍，衛福部預算 304 億",
                            image: "images/friends_mamatomo2.png"
                        },
                        {
                            title: "長者弱勢年金補助",
                            subtitle: "3500~7000 元不等",
                            description: "包含 65 歲以上長者、身心障礙、災民等，總預算1314億元",
                            image: "images/densya_silverseat.png"
                        }
                    ].map((item, index) => (
                        <div key={index} className="achievement-card">
                            <img src={item.image} alt={item.title} />
                            <h3>{item.title}</h3>
                            <h4>{item.subtitle}</h4>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Future Policy Section */}
        <section className="future-policy">
            <div className="container">
                <h2 className="section-title">2025 年補貼辦法</h2>
                <p className="policy-text">
                    單身租金補貼<br/>
                    0 ~ 6 歲國家養<br/>
                    長者弱勢年金補助
                    <br/>
                  這些經費，在本屆立法院都被<span class="hightlight">財劃法修惡</span>修掉了。<br/>
                </p>
            </div>
        </section>

        {/* Hero Section */}
        <section className="slogan">
            <img 
                src="images/poor.jpg" 
                alt="背景圖片" 
                className="slogan-bg"
            />
            <div className="slogan-overlay"></div>
            <div className="slogan-content">
                <h2>亂修財劃法<br/>福利沒經費</h2>
            </div>
        </section>

        {/* Slogan 2 Section */}
        <section className="future-policy">
            <div className="container">
                <h2 className="section-title">福利變不見<br/>這不是詐騙</h2>
            </div>
        </section>

        <div className="news-container">
            <h2 className="news-title">相關新聞</h2>
            <ul className="news-list">
                {[
                  {
                      title: "財劃法三讀 藍白聯手增3753億統籌分配稅款 | 中央社",
                      url: "https://www.cna.com.tw/news/ahel/202412200377.aspx",
                      date: "2024-12-20"
                  },
                  {
                      title: "《財劃法》修正地方財源增3,753億元 財部憂支出浪費 | 工商時報",
                      url: "https://www.ctee.com.tw/news/20241221700024-430104",
                      date: "2024-12-21"
                  },
                  {
                      title: "修財劃法未考慮事權不合理 主計長要地方拿回省府業務 | 聯合新聞網",
                      url: "https://udn.com/news/story/124307/8443364",
                      date: "2024-12-23"
                  }
                  ].map((item, index) => (
                    <li key={index} className="news-item">
                        <a href={item.url} className="news-link" target="_blank" rel="noopener noreferrer">
                            <h3 className="news-heading">{item.title}</h3>
                            <p className="news-date">{item.date}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>

        {/* intro Section */}
        <section className="intro">
            <div className="container">
                <p>
                  我們是關心社會的一群公民<br/>
                  立法院應該跟其他院會合作<br/>
                  共同擘劃施政藍圖<br/>
                  而不是惡性競爭<br/>
                  你以為的監督，其實是在透支未來
                </p>
                <p>
                  沒有實質討論不是真的民主<br/>
                  希望透過這樣的行為藝術網站<br/>
                  讓更多人了解事情的嚴重性<br/>
                </p>
            </div>
        </section>
    </div>
    );

}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));