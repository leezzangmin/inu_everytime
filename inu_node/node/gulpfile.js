const gulp = require('gulp');
const dotenv = require('dotenv');
const Sequelize_auto = require('sequelize-auto');

dotenv.config();

gulp.task('default', async () => {
    const sequelize_auto = new Sequelize_auto(
        process.env.DB_NAME,
        process.env.DB_USERNAME,
        process.env.DB_PASSWORD,
        {
            host: process.env.DB_HOST,
            port: '3306',
            dialect: 'mysql',
        },
    );
    sequelize_auto.run((err) => {
        if (err) {
            throw err;
        }
    });
});
