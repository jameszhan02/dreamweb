import React from 'react';


export const Banner00DataSource = {
  wrapper: { className: 'banner0 ki5030kgovf-editor_css' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title',
    children: (
      <span>
        <p>Black Friday Event</p>
      </span>
    ),
  },
  content: {
    className: 'banner0-content',
    children: (
      <span>
        <span>
          <p>Free Delivery</p>
        </span>
      </span>
    ),
  },
  button: { className: 'banner0-button', children: <a href="https://www.lexus.ca/lexus/en" target="_blank">Learn More</a>},
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>Explore</p>
          </span>
        ),
        className: 'ki50b1ra0mh-editor_css',
      },
    ],
  },
  
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
              <img src="/static/aboutus.png"></img>,
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children:  <a href="about">About Us</a>,
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
              <img src="/static/sendemail.webp"></img>,
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: <a href = "mailto: ChineseGang@gmail.com">Send Email</a>,
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
              <img src="/static/policy.png"></img>,
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children:  <a href="policy">Posting Policy</a>,
            },
          ],
        },
      },
    ],
  },
};
