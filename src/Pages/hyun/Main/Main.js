import React from "react";
// import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';
import Reply from './Reply/Reply'
import './Main.scss';


class MainHyun extends React.Component {
    render(){
        return(
            <div className="MainHyun">
    <header>
        <nav>
            <h1>Westagram</h1>
            <input className="searchInput" type="text" placeholder="검색" />
            <div className="icons">
            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" alt="explore" />
            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="like" />
            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" alt="profile" />
            </div>
        </nav>
    </header>
    <main>
        <div className="centerBox">
            <article className="storiesAndFeeds">
                <section className="stories">
                    <div className="story story1">
                        <img alt="ch.keeps" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/117648414_727855131400183_4085965008266904814_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=L_dpIG-MxAAAX_Tu_Jz&tp=1&oh=67f632ff2d9b1945e964d0961c9afd58&oe=60641FA9" />
                        <span>ch.keeps</span>
                    </div>
                    <div className="story story2">
                        <img alt="sukicat" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/68763591_384685372220491_3522731321480708096_n.jpg?tp=1&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=BvdQ1M1vNtkAX9-4Od-&oh=a0d1ca5960a4b2595c4362fde7db0e70&oe=60665414"  />
                        <span>sukicat</span>
                    </div>
                    <div className="story story3">
                        <img alt="itsselynn" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/119188310_325746038538319_302232268190399447_n.jpg?tp=1&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=0pZGvKEQO4sAX-_EOCD&oh=eff1dda0b9a5bcbd290980b3fe7d677a&oe=6066EF23"  />
                        <span>itsselynn</span>
                    </div>
                </section>
                <section className="feeds">
                    <div className="feed feed1">
                        <div className="profile">
                            <img alt="doowop79 프로필" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/120077226_784973128995560_2429183293847764217_n.jpg?tp=1&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=sjs37tzdTE4AX8RzOZ0&oh=c0707a475cc36f2123987e465d1703f9&oe=6064E92F"/>
                            <span>doowop79</span>
                            <span className="dots">···</span>
                        </div>
                        <img alt="doowop79 피드" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/153554778_1134026250362683_832804551239084161_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=8d1JLyQb7ksAX-8EFlv&tp=1&oh=d7ffb9595c9e2f142e9589816fa593b4&oe=6061376C"  />
                        <Reply />
                    </div>
                    <div className="feed feed2">
                        <div className="profile">
                            <img alt="roary_city 프로필" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/18948097_104290886846123_4922688508750987264_a.jpg?tp=1&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=GKDrH9N-bFsAX-1-ktS&oh=f3ea19ab82b29b6eb95d882f210dab9d&oe=60636641"  />
                            <span>roary_city</span>
                            <span className="dots">···</span>
                        </div>
                        <img alt="roary_city 피드" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/155016661_1342889699417284_1228962152844862307_n.jpg?tp=1&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=d2f_0fpydEcAX9kow_Y&oh=d1e9f5f340dc6b43eff43e037f819ba5&oe=60653DCB"  />
                        <div className="replyBox">
                            <ul>
                                <li><span className="userId">좋아요 1971개</span></li>
                                <li><span className="userId">lynnka_b</span>Adorable!! I love u😍😍😍</li>
                                <li><span className="userId">irinacramer</span>💖</li>
                            </ul> 
                        </div>
                        <input className="replyInput" type="text" placeholder="댓글 달기..."  />
                    </div>
                </section>
            </article>
            <aside className="main-right">
                <section className="myId">
                    <img alt="pika_pika" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/15337133_209335429518588_7310622559332990976_a.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=tXjThA9A6jQAX9VFQ6u&tp=1&oh=e1ba29a351324b27fd8c6bd28d958f3f&oe=6063FC37"  />
                    <span>pika_pika</span>
                </section>
                <section className="recommends">
                    <span className="grey">회원님을 위한 추천</span>
                    <div className="recommend recommend1">
                        <img alt="ch.keeps" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/117648414_727855131400183_4085965008266904814_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=L_dpIG-MxAAAX_Tu_Jz&tp=1&oh=67f632ff2d9b1945e964d0961c9afd58&oe=60641FA9"  />
                        <div className="recommendText">
                            <span>ch.keeps</span>
                            <span className="grey">회원님을 팔로우합니다.</span>
                        </div>
                        <span className="follow">팔로우</span>
                    </div>
                    <div className="recommend recommend2">
                        <img alt="sukicat" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/68763591_384685372220491_3522731321480708096_n.jpg?tp=1&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=BvdQ1M1vNtkAX9-4Od-&oh=a0d1ca5960a4b2595c4362fde7db0e70&oe=60665414"  />
                        <div className="recommendText">
                            <span>sukicat</span>
                            <span className="grey">danajjung님이 팔로우합니다</span>
                        </div>
                        <span className="follow">팔로우</span>
                    </div>
                    <div className="recommend recommend3">
                        <img alt="itsselynn" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/119188310_325746038538319_302232268190399447_n.jpg?tp=1&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=0pZGvKEQO4sAX-_EOCD&oh=eff1dda0b9a5bcbd290980b3fe7d677a&oe=6066EF23"  />
                        <div className="recommendText">
                            <span>itsselynn</span>
                            <span className="grey">Instagram 신규 가입</span>
                        </div>
                        <span className="follow">팔로우</span>
                    </div>
                </section>
                <section className="copyright">
                    <span>소개 · 도움말 · 홍보 센터 · API · 채용 정보 · 개인정보처리방침 · 약관 · 위치 · 인기 계정 · 해시태그 · 언어<br  /><br  />
                    © 2021 INSTAGRAM FROM FACEBOOK
                    </span> 
                </section>
            </aside>
        </div>
    </main>
</div>
        )
    }
}
export default MainHyun;