exports.table = [
    "CREATE TABLE IF NOT EXISTS zcn_user(" +
    "user_id INT UNSIGNED AUTO_INCREMENT," +
    "user_name VARCHAR(20) NOT NULL," +
    "password VARCHAR(40) NOT NULL," +
    "create_date DATETIME," +
    "revise_date TIMESTAMP," +
    "PRIMARY KEY (user_id)" +
    ")ENGINE=InnoDB DEFAULT CHARSET=utf8",  //  用户表
    "CREATE TABLE IF NOT EXISTS zcn_article(" +
    "article_id INT UNSIGNED AUTO_INCREMENT," +
    "article_title VARCHAR(40) NOT NULL," +
    "article_summary VARCHAR(80)," +
    "article_author VARCHAR(20)," +
    "article_content LONGTEXT NOT NULL," +
    "create_date DATETIME," +
    "revise_date TIMESTAMP," +
    "PRIMARY KEY (article_id)" +
    ")ENGINE=InnoDB DEFAULT CHARSET=utf8",  //文章表
]
