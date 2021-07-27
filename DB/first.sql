-- create database inuapp3;
use inuapp3;

-- create table department(
-- 	department_number varchar(3) NOT NULL PRIMARY KEY,
--     department_name varchar(15) NOT NULL
-- );
-- -- 
--     
-- insert into department values('1','computer');
-- insert into department values('2','design');
-- insert into department values('3','embeded');
-- select * from department;


-- create table user(
--     user_number mediumint unsigned PRIMARY KEY auto_increment, 
--     user_id varchar(20) NOT NULL,
--     user_pw varchar(1000) NOT NULL,
--     user_nickname varchar(10) NOT NULL,
--     created_date datetime NOT NULL,
--     user_name varchar(10) NOT NULL,
--     user_department_number varchar(3) NOT NULL,
--     user_student_id varchar(9) NOT NULL,
--     FOREIGN KEY (user_department_number) REFERENCES department(department_number)
--     );
-- alter table user modify column user_pw varchar(1000) not null;
 select * from user;
-- SELECT `user_number`, `user_id`, `user_pw`, `user_nickname`, `created_date`, `user_name`, `user_department_number`, `user_student_id` FROM `user` AS `user` WHERE `user`.`user_id` = 'testing3';

-- insert into 
-- user values(1,'dlckdals','1234','이닉넴','2021-01-01 16:00:01','이창민','1','201601620');
--  
-- insert into 
-- user values(4,'ghdtmddyd','2222','홍닉넴','2020-02-04 18:20:41','홍승용','2','201501234');	
 
-- select * from user;

-- create table board(
-- 	board_number varchar(3) PRIMARY KEY,
--     board_name varchar(20) NOT NULL
-- );


-- insert into board values(1,'HOT 게시판');
-- insert into board values(2,'BEST 게시판');
-- insert into board values(3,'자유게시판');
-- insert into board values(4,'Q&A');
-- insert into board values(5,'동아리게시판');
-- insert into board values(6,'전시게시판');
-- insert into board values(7,'총학게시판');
-- insert into board values(8,'홍보게시판');
-- insert into board values(9,'정보게시판');
-- insert into board values(10,'기숙사게시판');


-- select * from board;
-- select * from post;
-- create table post(
-- 	post_number mediumint unsigned PRIMARY KEY auto_increment,
--     board_number varchar(3) NOT NULL,
--     post_title varchar(100) NOT NULL,
--     post_content varchar(1000) DEFAULT 'insert contents',
-- 	   user_number mediumint unsigned NOT NULL,
--     last_modified_date datetime NOT NULL,        
--     
--     FOREIGN KEY (board_number) REFERENCES board(board_number),
--     FOREIGN KEY (user_number) REFERENCES user(user_number)
-- );


-- insert into post(board_number, post_title, post_content, user_number, last_modified_date)
-- values(3,'제목1','내용1',4,'2021-07-07 15:00:00');
-- insert into post(board_number, post_title, post_content, user_number, last_modified_date)
-- values(3,'제목2','내용2',4,'2021-07-08 15:00:00');
-- insert into post(board_number, post_title, post_content, user_number, last_modified_date)
-- values(4,'제목1','내용1',4,'2021-07-07 15:00:00');
-- insert into post(board_number, post_title, post_content, user_number, last_modified_date)
-- values(4,'제목2','내용2',4,'2021-07-08 15:00:00');
-- insert into post(board_number, post_title, post_content, user_number, last_modified_date)
-- values(5,'제목1','내용1',4,'2021-07-07 15:00:00');
-- insert into post(board_number, post_title, post_content, user_number, last_modified_date)
-- values(5,'제목2','내용2',4,'2021-07-08 15:00:00');
-- insert into post(board_number, post_title, post_content, user_number, last_modified_date)
-- values(6,'제목1','내용1',4,'2021-07-07 15:00:00');
-- insert into post(board_number, post_title, post_content, user_number, last_modified_date)
-- values(7,'제목2','내용2',4,'2021-07-08 15:00:00');
-- insert into post(board_number, post_title, post_content, user_number, last_modified_date)
-- values(8,'제목1','내용1',4,'2021-07-07 15:00:00');
-- insert into post(board_number, post_title, post_content, user_number, last_modified_date)
-- values(8,'제목2','내용2',4,'2021-07-08 15:00:00');
-- insert into post(board_number, post_title, post_content, user_number, last_modified_date)
-- values(9,'제목1','내용1',4,'2021-07-07 15:00:00');
-- insert into post(board_number, post_title, post_content, user_number, last_modified_date)
-- values(9,'제목2','내용2',4,'2021-07-08 15:00:00');
-- insert into post(board_number, post_title, post_content, user_number, last_modified_date)
-- values(10,'제목1','내용1',4,'2021-07-07 15:00:00');
-- insert into post(board_number, post_title, post_content, user_number, last_modified_date)
-- values(10,'제목2','내용2',4,'2021-07-08 15:00:00');

-- select * from post;


-- create table hashtag(
-- 	hashtag_number mediumint unsigned PRIMARY KEY,
--     hashtag_name varchar(100) NOT NULL,
--     hashtag_post_number mediumint unsigned NOT NULL,
--     
--     FOREIGN KEY (hashtag_post_number) REFERENCES post(post_number)   
-- );

-- insert into hashtag(hashtag_number,hashtag_name,hashtag_post_number)
-- values(1,'해시1번',1);

-- select * from hashtag;


-- create table comment(
-- 	comment_number mediumint unsigned PRIMARY KEY AUTO_INCREMENT,
--     comment_user_number mediumint unsigned NOT NULL,
--     comment_content varchar(1000) NOT NULL,
--     comment_depth tinyint unsigned NOT NULL,
--     comment_ref mediumint unsigned,
--     last_modified_date datetime NOT NULL,
--     post_number_ref mediumint unsigned NOT NULL,
--     
--     FOREIGN KEY (comment_ref) REFERENCES comment(comment_number),
--     FOREIGN KEY (post_number_ref) REFERENCES post(post_number),
--     FOREIGN KEY (comment_user_number) REFERENCES user(user_number)
-- );

-- insert into comment
-- values(1,1,"댓글1",0,null,'2021-01-01 15:00:00','1');
-- insert into comment
-- values(2,1,"대댓글1",1,1,'2021-01-01 15:00:00','1');

-- select * from comment;