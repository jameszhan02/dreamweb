package com.dreamweb.apiserver.Entities;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@Table(name ="post")
@RequiredArgsConstructor
public class Post {
    @javax.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;
    private String postTitle;
    private String postText;
    private long postUser;
    private Date postDate;

    @Lob
    @Basic(optional = true)
    private String postImg;
    private String postImgalt;
}
