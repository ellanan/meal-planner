/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import type * as PrismaClient from ".prisma/client";
import type { Context as ContextModule } from "../apiUtils/_helpers/contextModule";

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  IngredientQuantityInput: {
    // input type
    amount: number; // Int!
    ingredientId: string; // String!
    unit: string; // String!
  };
}

export interface NexusGenEnums {
  MealType: PrismaClient.MealType;
  Order: "asc" | "desc";
  RecipeOrderBy: "createdAt" | "updatedAt";
}

export interface NexusGenScalars {
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  Date: any;
  DateTime: any;
}

export interface NexusGenObjects {
  Ingredient: PrismaClient.Ingredient;
  IngredientType: PrismaClient.IngredientType;
  MealPlan: PrismaClient.MealPlan;
  MealPlanEntry: PrismaClient.MealPlanEntry;
  Mutation: {};
  Query: {};
  Recipe: PrismaClient.Recipe;
  RecipeCategory: PrismaClient.RecipeCategory;
  RecipeIngredientQuantity: PrismaClient.RecipeIngredientQuantity;
  User: PrismaClient.User;
}

export interface NexusGenInterfaces {}

export interface NexusGenUnions {}

export type NexusGenRootTypes = NexusGenObjects;

export type NexusGenAllTypes = NexusGenRootTypes &
  NexusGenScalars &
  NexusGenEnums;

export interface NexusGenFieldTypes {
  Ingredient: {
    // field return type
    id: string; // ID!
    name: string; // String!
    type: NexusGenRootTypes["IngredientType"] | null; // IngredientType
  };
  IngredientType: {
    // field return type
    id: string; // ID!
    name: string; // String!
  };
  MealPlan: {
    // field return type
    id: string; // ID!
    ingredientTypes: NexusGenRootTypes["IngredientType"][]; // [IngredientType!]!
    ingredients: NexusGenRootTypes["Ingredient"][]; // [Ingredient!]!
    popularRecipes: NexusGenRootTypes["Recipe"][]; // [Recipe!]!
    recipe: NexusGenRootTypes["Recipe"] | null; // Recipe
    recipes: NexusGenRootTypes["Recipe"][]; // [Recipe!]!
    schedule: NexusGenRootTypes["MealPlanEntry"][]; // [MealPlanEntry!]!
  };
  MealPlanEntry: {
    // field return type
    date: string; // String!
    id: string; // ID!
    mealType: NexusGenEnums["MealType"]; // MealType!
    recipe: NexusGenRootTypes["Recipe"]; // Recipe!
  };
  Mutation: {
    // field return type
    addIngredientQuantityToRecipe: NexusGenRootTypes["Recipe"] | null; // Recipe
    addRecipeToMealPlan: NexusGenRootTypes["MealPlanEntry"] | null; // MealPlanEntry
    createIngredient: NexusGenRootTypes["Ingredient"]; // Ingredient!
    createIngredientType: NexusGenRootTypes["IngredientType"] | null; // IngredientType
    createRecipe: NexusGenRootTypes["Recipe"] | null; // Recipe
    deleteAllMealPlanEntries: number | null; // Int
    deleteIngredientType: NexusGenRootTypes["IngredientType"] | null; // IngredientType
    deleteMealPlanEntry: NexusGenRootTypes["MealPlanEntry"] | null; // MealPlanEntry
    deleteRecipe: NexusGenRootTypes["Recipe"] | null; // Recipe
    editIngredientType: NexusGenRootTypes["IngredientType"] | null; // IngredientType
    editRecipe: NexusGenRootTypes["Recipe"] | null; // Recipe
    initWithData: NexusGenRootTypes["MealPlan"] | null; // MealPlan
    joinMealPlan: NexusGenRootTypes["MealPlan"] | null; // MealPlan
    removeIngredientFromRecipe: NexusGenRootTypes["Recipe"] | null; // Recipe
    updateIngredient: NexusGenRootTypes["Ingredient"] | null; // Ingredient
    updateIngredientQuantityInRecipe: NexusGenRootTypes["Recipe"] | null; // Recipe
  };
  Query: {
    // field return type
    allUsers: NexusGenRootTypes["User"][]; // [User!]!
    currentUser: NexusGenRootTypes["User"] | null; // User
    ingredientTypes: NexusGenRootTypes["IngredientType"][]; // [IngredientType!]!
    ingredients: NexusGenRootTypes["Ingredient"][]; // [Ingredient!]!
    recipe: NexusGenRootTypes["Recipe"] | null; // Recipe
    recipeCategories: NexusGenRootTypes["RecipeCategory"][]; // [RecipeCategory!]!
  };
  Recipe: {
    // field return type
    category: NexusGenRootTypes["RecipeCategory"] | null; // RecipeCategory
    content: string | null; // String
    createdAt: NexusGenScalars["DateTime"]; // DateTime!
    id: string; // ID!
    imageUrl: string | null; // String
    ingredientQuantities: NexusGenRootTypes["RecipeIngredientQuantity"][]; // [RecipeIngredientQuantity!]!
    name: string; // String!
    updatedAt: NexusGenScalars["DateTime"]; // DateTime!
  };
  RecipeCategory: {
    // field return type
    id: string; // ID!
    name: string; // String!
  };
  RecipeIngredientQuantity: {
    // field return type
    amount: number; // Float!
    ingredient: NexusGenRootTypes["Ingredient"]; // Ingredient!
    recipe: NexusGenRootTypes["Recipe"]; // Recipe!
    unit: string; // String!
  };
  User: {
    // field return type
    email: string | null; // String
    id: string; // ID!
    mealPlan: NexusGenRootTypes["MealPlan"] | null; // MealPlan
    recipes: Array<NexusGenRootTypes["Recipe"] | null>; // [Recipe]!
    username: string | null; // String
  };
}

export interface NexusGenFieldTypeNames {
  Ingredient: {
    // field return type name
    id: "ID";
    name: "String";
    type: "IngredientType";
  };
  IngredientType: {
    // field return type name
    id: "ID";
    name: "String";
  };
  MealPlan: {
    // field return type name
    id: "ID";
    ingredientTypes: "IngredientType";
    ingredients: "Ingredient";
    popularRecipes: "Recipe";
    recipe: "Recipe";
    recipes: "Recipe";
    schedule: "MealPlanEntry";
  };
  MealPlanEntry: {
    // field return type name
    date: "String";
    id: "ID";
    mealType: "MealType";
    recipe: "Recipe";
  };
  Mutation: {
    // field return type name
    addIngredientQuantityToRecipe: "Recipe";
    addRecipeToMealPlan: "MealPlanEntry";
    createIngredient: "Ingredient";
    createIngredientType: "IngredientType";
    createRecipe: "Recipe";
    deleteAllMealPlanEntries: "Int";
    deleteIngredientType: "IngredientType";
    deleteMealPlanEntry: "MealPlanEntry";
    deleteRecipe: "Recipe";
    editIngredientType: "IngredientType";
    editRecipe: "Recipe";
    initWithData: "MealPlan";
    joinMealPlan: "MealPlan";
    removeIngredientFromRecipe: "Recipe";
    updateIngredient: "Ingredient";
    updateIngredientQuantityInRecipe: "Recipe";
  };
  Query: {
    // field return type name
    allUsers: "User";
    currentUser: "User";
    ingredientTypes: "IngredientType";
    ingredients: "Ingredient";
    recipe: "Recipe";
    recipeCategories: "RecipeCategory";
  };
  Recipe: {
    // field return type name
    category: "RecipeCategory";
    content: "String";
    createdAt: "DateTime";
    id: "ID";
    imageUrl: "String";
    ingredientQuantities: "RecipeIngredientQuantity";
    name: "String";
    updatedAt: "DateTime";
  };
  RecipeCategory: {
    // field return type name
    id: "ID";
    name: "String";
  };
  RecipeIngredientQuantity: {
    // field return type name
    amount: "Float";
    ingredient: "Ingredient";
    recipe: "Recipe";
    unit: "String";
  };
  User: {
    // field return type name
    email: "String";
    id: "ID";
    mealPlan: "MealPlan";
    recipes: "Recipe";
    username: "String";
  };
}

export interface NexusGenArgTypes {
  MealPlan: {
    popularRecipes: {
      // args
      endDate: string; // String!
      limit: number; // Int!
      startDate: string; // String!
    };
    recipe: {
      // args
      recipeId: string; // ID!
    };
    recipes: {
      // args
      cursor?: string | null; // ID
      limit: number; // Int!
      order: NexusGenEnums["Order"]; // Order!
      orderBy: NexusGenEnums["RecipeOrderBy"]; // RecipeOrderBy!
      search?: string | null; // String
    };
    schedule: {
      // args
      endDate: string; // String!
      startDate: string; // String!
    };
  };
  Mutation: {
    addIngredientQuantityToRecipe: {
      // args
      ingredientQuantity: NexusGenInputs["IngredientQuantityInput"]; // IngredientQuantityInput!
      recipeId: string; // ID!
    };
    addRecipeToMealPlan: {
      // args
      date: string; // String!
      mealPlanId: string; // ID!
      mealType: NexusGenEnums["MealType"]; // MealType!
      recipeId: string; // ID!
    };
    createIngredient: {
      // args
      ingredientTypeId?: string | null; // ID
      name: string; // String!
    };
    createIngredientType: {
      // args
      ingredients?: string[] | null; // [ID!]
      name: string; // String!
    };
    createRecipe: {
      // args
      content?: string | null; // String
      imageUrl?: string | null; // String
      ingredientQuantities: NexusGenInputs["IngredientQuantityInput"][]; // [IngredientQuantityInput!]!
      name: string; // String!
    };
    deleteAllMealPlanEntries: {
      // args
      mealPlanId: string; // ID!
    };
    deleteIngredientType: {
      // args
      ingredientTypeId: string; // ID!
    };
    deleteMealPlanEntry: {
      // args
      mealPlanEntryId: string; // ID!
    };
    deleteRecipe: {
      // args
      recipeId: string; // ID!
    };
    editIngredientType: {
      // args
      ingredientTypeId: string; // ID!
      name: string; // String!
    };
    editRecipe: {
      // args
      content?: string | null; // String
      imageUrl?: string | null; // String
      name?: string | null; // String
      recipeId: string; // String!
    };
    initWithData: {
      // args
      startDate: string; // String!
    };
    joinMealPlan: {
      // args
      mealPlanId: string; // ID!
    };
    removeIngredientFromRecipe: {
      // args
      ingredientId: string; // ID!
      recipeId: string; // ID!
    };
    updateIngredient: {
      // args
      ingredientId: string; // ID!
      ingredientTypeId: string; // ID!
    };
    updateIngredientQuantityInRecipe: {
      // args
      amount?: number | null; // Int
      ingredientId: string; // ID!
      recipeId: string; // ID!
      unit?: string | null; // String
    };
  };
  Query: {
    recipe: {
      // args
      recipeId: string; // ID!
    };
  };
}

export interface NexusGenAbstractTypeMembers {}

export interface NexusGenTypeInterfaces {}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false;
    resolveType: true;
    __typename: false;
  };
};

export interface NexusGenTypes {
  context: ContextModule;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes:
    | NexusGenTypes["inputNames"]
    | NexusGenTypes["enumNames"]
    | NexusGenTypes["scalarNames"];
  allOutputTypes:
    | NexusGenTypes["objectNames"]
    | NexusGenTypes["enumNames"]
    | NexusGenTypes["unionNames"]
    | NexusGenTypes["interfaceNames"]
    | NexusGenTypes["scalarNames"];
  allNamedTypes:
    | NexusGenTypes["allInputTypes"]
    | NexusGenTypes["allOutputTypes"];
  abstractTypes: NexusGenTypes["interfaceNames"] | NexusGenTypes["unionNames"];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}

declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {}
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {}
  interface NexusGenPluginFieldConfig<
    TypeName extends string,
    FieldName extends string
  > {}
  interface NexusGenPluginInputFieldConfig<
    TypeName extends string,
    FieldName extends string
  > {}
  interface NexusGenPluginSchemaConfig {}
  interface NexusGenPluginArgConfig {}
}
