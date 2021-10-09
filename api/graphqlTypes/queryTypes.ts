import { PrismaClient } from '@prisma/client';
import { nonNull, objectType, queryType, idArg } from 'nexus';

const prisma = new PrismaClient();

export const Query = queryType({
  definition(t) {
    t.field('currentUser', {
      type: 'User',
      resolve: (_parent, _args, context) =>
        prisma.user.findUnique({
          where: {
            id: context.currentUser?.id,
          },
        }),
    });

    t.nonNull.list.nonNull.field('allUsers', {
      type: 'User',
      resolve: () => prisma.user.findMany(),
    });

    t.nonNull.list.nonNull.field('ingredients', {
      type: 'Ingredient',
      resolve: () => prisma.ingredient.findMany(),
    });

    t.nonNull.list.nonNull.field('ingredientTypes', {
      type: 'IngredientType',
      resolve: () => prisma.ingredientType.findMany(),
    });

    t.nonNull.list.nonNull.field('recipes', {
      type: 'Recipe',
      resolve: () => prisma.recipe.findMany(),
    });

    t.field('recipe', {
      type: 'Recipe',
      args: {
        recipeId: nonNull(idArg()),
      },
      resolve: async (_parent, args) =>
        prisma.recipe.findUnique({
          where: { id: args.recipeId },
        }),
    });

    t.nonNull.list.nonNull.field('recipeCategories', {
      type: 'RecipeCategory',
      resolve: () => prisma.recipeCategory.findMany(),
    });
  },
});

export const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.id('id');
    t.string('username');
    t.string('email');
    t.nonNull.list.field('recipes', {
      type: 'Recipe',
      async resolve(parent) {
        const userId = parent.id;
        return prisma.recipe.findMany({
          where: {
            user: {
              is: {
                id: userId,
              },
            },
          },
        });
      },
    });
  },
});

export const IngredientType = objectType({
  name: 'IngredientType',
  definition(t) {
    t.nonNull.id('id');
    t.nonNull.string('name');
  },
});

export const Ingredient = objectType({
  name: 'Ingredient',
  definition(t) {
    t.nonNull.id('id');
    t.nonNull.string('name');
    t.field('type', {
      type: 'IngredientType',
      resolve: async (src) => {
        return await prisma.ingredientType.findUnique({
          where: {
            id: src.ingredientTypeId,
          },
        });
      },
    });
  },
});

export const RecipeCategory = objectType({
  name: 'RecipeCategory',
  definition(t) {
    t.nonNull.id('id');
    t.nonNull.string('name');
  },
});

export const Recipes = objectType({
  name: 'Recipe',
  definition(t) {
    t.nonNull.id('id');
    t.nonNull.string('name');
    t.field('category', {
      type: 'RecipeCategory',
      resolve: async (parent) => {
        return (
          (
            await prisma.recipe.findUnique({
              where: {
                id: parent.id,
              },
              include: {
                category: true,
              },
            })
          )?.category ?? null
        );
      },
    });
    t.list.nonNull.field('ingredients', {
      type: 'Ingredient',
      resolve: async (parent) => {
        return (
          (
            await prisma.recipe.findUnique({
              where: {
                id: parent.id,
              },
              include: {
                ingredients: true,
              },
            })
          )?.ingredients ?? null
        );
      },
    });
  },
});
