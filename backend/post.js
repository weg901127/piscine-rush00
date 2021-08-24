const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define(
    "Post",
    {
        content: {
            type: DataTypes.TEXT,
            allowNULL: false,
        },
    },
    {
        chartset: "utf8mb4",
        collate: "utf8mb4_general_ci",
    }
);
    return Post;
}