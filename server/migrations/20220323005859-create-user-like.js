"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "User_likes",
      {
        user_id: {
          type: Sequelize.STRING,
          references: {
            model: "Users",
            key: "id",
          },
        },
        post_id: {
          type: Sequelize.INTEGER,
          references: {
            model: "Posts",
            key: "id",
          },
        },
      },
      {
        // 테이블 옵션
        timestamps: false,
        underscored: true,
        createdAt: false,
        updatedAt: false,
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("User_likes");
  },
};
