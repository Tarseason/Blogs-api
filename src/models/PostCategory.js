module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {
      postId: {
        type: DataTypes.INTEGER,
        foreignKey: true
      },
      categoryId: {
        type: DataTypes.INTEGER,
        foreignKey: true
      },
    },
    { timestamps: false,
      tablename: 'posts_category',
      underscored: true,
    },
  );

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'post_id',
      otherKey: 'category_id',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blog_post',
      through: PostCategory,
      foreignKey: 'category_id',
      otherKey: 'post_id'
    })
  }

  return PostCategory
}