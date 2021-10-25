/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import type * as PrismaClient from ".prisma/client"
import type { Context as ContextModule } from "./../api/contextModule"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  IngredientQuantityInput: { // input type
    amount: number; // Int!
    ingredientId: string; // String!
    unit: string; // String!
  }
}

export interface NexusGenEnums {
  MealType: PrismaClient.MealType
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
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

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Ingredient: { // field return type
    id: string; // ID!
    name: string; // String!
    type: NexusGenRootTypes['IngredientType'] | null; // IngredientType
  }
  IngredientType: { // field return type
    id: string; // ID!
    name: string; // String!
  }
  MealPlan: { // field return type
    id: string; // ID!
    schedule: NexusGenRootTypes['MealPlanEntry'][]; // [MealPlanEntry!]!
  }
  MealPlanEntry: { // field return type
    date: string; // String!
    id: string; // ID!
    mealType: NexusGenEnums['MealType']; // MealType!
    recipe: NexusGenRootTypes['Recipe']; // Recipe!
  }
  Mutation: { // field return type
    addIngredientQuantityToRecipe: NexusGenRootTypes['Recipe'] | null; // Recipe
    addRecipeToMealPlan: NexusGenRootTypes['MealPlanEntry'] | null; // MealPlanEntry
    createIngredient: NexusGenRootTypes['Ingredient']; // Ingredient!
    createIngredientType: NexusGenRootTypes['IngredientType'] | null; // IngredientType
    createRecipe: NexusGenRootTypes['Recipe'] | null; // Recipe
    deleteMealPlanEntry: NexusGenRootTypes['MealPlanEntry'] | null; // MealPlanEntry
    deleteRecipe: NexusGenRootTypes['Recipe'] | null; // Recipe
    editRecipe: NexusGenRootTypes['Recipe'] | null; // Recipe
    removeIngredientFromRecipe: NexusGenRootTypes['Recipe'] | null; // Recipe
    updateIngredientQuantityInRecipe: NexusGenRootTypes['Recipe'] | null; // Recipe
  }
  Query: { // field return type
    allUsers: NexusGenRootTypes['User'][]; // [User!]!
    currentUser: NexusGenRootTypes['User'] | null; // User
    ingredientTypes: NexusGenRootTypes['IngredientType'][]; // [IngredientType!]!
    ingredients: NexusGenRootTypes['Ingredient'][]; // [Ingredient!]!
    recipe: NexusGenRootTypes['Recipe'] | null; // Recipe
    recipeCategories: NexusGenRootTypes['RecipeCategory'][]; // [RecipeCategory!]!
    recipes: NexusGenRootTypes['Recipe'][]; // [Recipe!]!
  }
  Recipe: { // field return type
    category: NexusGenRootTypes['RecipeCategory'] | null; // RecipeCategory
    content: string | null; // String
    id: string; // ID!
    imageUrl: string | null; // String
    ingredientQuantities: NexusGenRootTypes['RecipeIngredientQuantity'][]; // [RecipeIngredientQuantity!]!
    name: string; // String!
  }
  RecipeCategory: { // field return type
    id: string; // ID!
    name: string; // String!
  }
  RecipeIngredientQuantity: { // field return type
    amount: number; // Int!
    ingredient: NexusGenRootTypes['Ingredient']; // Ingredient!
    recipe: NexusGenRootTypes['Recipe']; // Recipe!
    unit: string; // String!
  }
  User: { // field return type
    email: string | null; // String
    id: string; // ID!
    mealPlan: NexusGenRootTypes['MealPlan'] | null; // MealPlan
    recipes: Array<NexusGenRootTypes['Recipe'] | null>; // [Recipe]!
    username: string | null; // String
  }
}

export interface NexusGenFieldTypeNames {
  Ingredient: { // field return type name
    id: 'ID'
    name: 'String'
    type: 'IngredientType'
  }
  IngredientType: { // field return type name
    id: 'ID'
    name: 'String'
  }
  MealPlan: { // field return type name
    id: 'ID'
    schedule: 'MealPlanEntry'
  }
  MealPlanEntry: { // field return type name
    date: 'String'
    id: 'ID'
    mealType: 'MealType'
    recipe: 'Recipe'
  }
  Mutation: { // field return type name
    addIngredientQuantityToRecipe: 'Recipe'
    addRecipeToMealPlan: 'MealPlanEntry'
    createIngredient: 'Ingredient'
    createIngredientType: 'IngredientType'
    createRecipe: 'Recipe'
    deleteMealPlanEntry: 'MealPlanEntry'
    deleteRecipe: 'Recipe'
    editRecipe: 'Recipe'
    removeIngredientFromRecipe: 'Recipe'
    updateIngredientQuantityInRecipe: 'Recipe'
  }
  Query: { // field return type name
    allUsers: 'User'
    currentUser: 'User'
    ingredientTypes: 'IngredientType'
    ingredients: 'Ingredient'
    recipe: 'Recipe'
    recipeCategories: 'RecipeCategory'
    recipes: 'Recipe'
  }
  Recipe: { // field return type name
    category: 'RecipeCategory'
    content: 'String'
    id: 'ID'
    imageUrl: 'String'
    ingredientQuantities: 'RecipeIngredientQuantity'
    name: 'String'
  }
  RecipeCategory: { // field return type name
    id: 'ID'
    name: 'String'
  }
  RecipeIngredientQuantity: { // field return type name
    amount: 'Int'
    ingredient: 'Ingredient'
    recipe: 'Recipe'
    unit: 'String'
  }
  User: { // field return type name
    email: 'String'
    id: 'ID'
    mealPlan: 'MealPlan'
    recipes: 'Recipe'
    username: 'String'
  }
}

export interface NexusGenArgTypes {
  MealPlan: {
    schedule: { // args
      endDate: string; // String!
      startDate: string; // String!
    }
  }
  Mutation: {
    addIngredientQuantityToRecipe: { // args
      ingredientQuantity: NexusGenInputs['IngredientQuantityInput']; // IngredientQuantityInput!
      recipeId: string; // ID!
    }
    addRecipeToMealPlan: { // args
      date: string; // String!
      mealPlanId: string; // ID!
      mealType: NexusGenEnums['MealType']; // MealType!
      recipeId: string; // ID!
    }
    createIngredient: { // args
      ingredientTypeId?: string | null; // ID
      name: string; // String!
    }
    createIngredientType: { // args
      name: string; // String!
    }
    createRecipe: { // args
      content?: string | null; // String
      imageUrl?: string | null; // String
      ingredientQuantities: NexusGenInputs['IngredientQuantityInput'][]; // [IngredientQuantityInput!]!
      name: string; // String!
    }
    deleteMealPlanEntry: { // args
      mealPlanEntryId: string; // ID!
    }
    deleteRecipe: { // args
      recipeId: string; // ID!
    }
    editRecipe: { // args
      content?: string | null; // String
      imageUrl?: string | null; // String
      name?: string | null; // String
      recipeId: string; // String!
    }
    removeIngredientFromRecipe: { // args
      ingredientId: string; // ID!
      recipeId: string; // ID!
    }
    updateIngredientQuantityInRecipe: { // args
      amount?: number | null; // Int
      ingredientId: string; // ID!
      recipeId: string; // ID!
      unit?: string | null; // String
    }
  }
  Query: {
    recipe: { // args
      recipeId: string; // ID!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

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
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

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
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}