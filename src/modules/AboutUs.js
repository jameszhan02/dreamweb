import React from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Carousel, Statistic, Row, Col } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
import styles from '../styles/card.module.css'
var LunBoComponent = require('./lunbopic/lunbo.jsx');
var data = require('./lunbopic/data.json');
//MUST START WITH capital letter  (link below)
//https://dev.to/ranewallin/js-bites-react-hook-is-called-in-a-function-which-is-neither-a-react-function-or-sic-a-custom-react-hook-1g2c
const AboutUs = () => {
    const onChange = (a, b, c) => {
        console.log(a, b, c);
    }
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    const wrapStyle = {
        width: '70%',
        margin: 'auto'
    };

    
    return (
        <div>
            <LunBoComponent lunboObject={data.lunboObject} imgArray={data.imgArray} linkArray={data.linkArray}/>
           

            <br />
            <div className={styles.aboutusmid}>
            <Row gutter={16} >
                <Col span={12}>
                    <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
                </Col>
                <Col span={12}>
                    <Statistic title="Active Users" value={2308} />
                </Col>
            </Row>
            </div>
            <div className={styles.card}>
                
            <div className={styles.aboutUsContainer}></div>
            <h2>Chinese Gang</h2>
            <p>
            Chinese gang is a study group composed of 4 level 6 students from Fanshawe College, namely: </p>
            <p><strong>Ma Tianyi</strong></p>
            <p><strong>Li Tianyi</strong></p>
            <p><strong>Zheng Shan</strong></p>
            <p><strong>Stephan, Singh</strong></p>
            <h2>Dream Web</h2>
            <p>
            The "Dream Web" website is a web forum developed by the Chinese Gang group. Its business mainly includes: </p>
            <a href="./postlist"><p><strong>second-hand goods trading</strong></p></a>
            <a href="./postlist"><p><strong>house rental</strong></p></a>
            <a href="./postlist"><p><strong>second-hand car transfer</strong></p></a>
            <a href="./postlist"><p><strong>advertising</strong></p></a>
            </div>
            <br />
            <br />
            <br />
            <div className={styles.aboutUsFooter}>
                <div>Contact Us At</div>
                <div >
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" className={styles.aboutUsImg}><img src="../static/gmail.png" width="30px" height="30px"/></a> 
                <a href="https://www.facebook.com/tianyi.ma.10" className={styles.aboutUsImg}><img src="../static/facebook.png" width="30px" height="30px"/></a> 
                <a href="https://wx.qq.com/" className={styles.aboutUsImg}><img src="../static/wechat.png" width="30px" height="30px"/></a> 
                </div>
            </div>
        </div>

    );

};

export default AboutUs;