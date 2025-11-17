
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model chatsDev
 * 
 */
export type chatsDev = $Result.DefaultSelection<Prisma.$chatsDevPayload>
/**
 * Model chatsProd
 * 
 */
export type chatsProd = $Result.DefaultSelection<Prisma.$chatsProdPayload>
/**
 * Model invalid_tokensDev
 * 
 */
export type invalid_tokensDev = $Result.DefaultSelection<Prisma.$invalid_tokensDevPayload>
/**
 * Model invalid_tokensProd
 * 
 */
export type invalid_tokensProd = $Result.DefaultSelection<Prisma.$invalid_tokensProdPayload>
/**
 * Model messagesDev
 * 
 */
export type messagesDev = $Result.DefaultSelection<Prisma.$messagesDevPayload>
/**
 * Model messagesProd
 * 
 */
export type messagesProd = $Result.DefaultSelection<Prisma.$messagesProdPayload>
/**
 * Model productsDev
 * 
 */
export type productsDev = $Result.DefaultSelection<Prisma.$productsDevPayload>
/**
 * Model productsProd
 * 
 */
export type productsProd = $Result.DefaultSelection<Prisma.$productsProdPayload>
/**
 * Model usersDev
 * 
 */
export type usersDev = $Result.DefaultSelection<Prisma.$usersDevPayload>
/**
 * Model usersProd
 * 
 */
export type usersProd = $Result.DefaultSelection<Prisma.$usersProdPayload>
/**
 * Model product_categoriesDev
 * 
 */
export type product_categoriesDev = $Result.DefaultSelection<Prisma.$product_categoriesDevPayload>
/**
 * Model product_categoriesProd
 * 
 */
export type product_categoriesProd = $Result.DefaultSelection<Prisma.$product_categoriesProdPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RemitenteTipoDev: {
  usuario: 'usuario',
  ia: 'ia'
};

export type RemitenteTipoDev = (typeof RemitenteTipoDev)[keyof typeof RemitenteTipoDev]


export const RemitenteTipoProd: {
  usuario: 'usuario',
  ia: 'ia'
};

export type RemitenteTipoProd = (typeof RemitenteTipoProd)[keyof typeof RemitenteTipoProd]


export const TokenTipoDev: {
  access: 'access',
  refresh: 'refresh'
};

export type TokenTipoDev = (typeof TokenTipoDev)[keyof typeof TokenTipoDev]


export const TokenTipoProd: {
  access: 'access',
  refresh: 'refresh'
};

export type TokenTipoProd = (typeof TokenTipoProd)[keyof typeof TokenTipoProd]


export const remitente_enumDev: {
  usuario: 'usuario',
  ia: 'ia'
};

export type remitente_enumDev = (typeof remitente_enumDev)[keyof typeof remitente_enumDev]


export const remitente_enumProd: {
  usuario: 'usuario',
  ia: 'ia'
};

export type remitente_enumProd = (typeof remitente_enumProd)[keyof typeof remitente_enumProd]


export const tipo_token_enumDev: {
  access: 'access',
  refresh: 'refresh'
};

export type tipo_token_enumDev = (typeof tipo_token_enumDev)[keyof typeof tipo_token_enumDev]


export const tipo_token_enumProd: {
  access: 'access',
  refresh: 'refresh'
};

export type tipo_token_enumProd = (typeof tipo_token_enumProd)[keyof typeof tipo_token_enumProd]

}

export type RemitenteTipoDev = $Enums.RemitenteTipoDev

export const RemitenteTipoDev: typeof $Enums.RemitenteTipoDev

export type RemitenteTipoProd = $Enums.RemitenteTipoProd

export const RemitenteTipoProd: typeof $Enums.RemitenteTipoProd

export type TokenTipoDev = $Enums.TokenTipoDev

export const TokenTipoDev: typeof $Enums.TokenTipoDev

export type TokenTipoProd = $Enums.TokenTipoProd

export const TokenTipoProd: typeof $Enums.TokenTipoProd

export type remitente_enumDev = $Enums.remitente_enumDev

export const remitente_enumDev: typeof $Enums.remitente_enumDev

export type remitente_enumProd = $Enums.remitente_enumProd

export const remitente_enumProd: typeof $Enums.remitente_enumProd

export type tipo_token_enumDev = $Enums.tipo_token_enumDev

export const tipo_token_enumDev: typeof $Enums.tipo_token_enumDev

export type tipo_token_enumProd = $Enums.tipo_token_enumProd

export const tipo_token_enumProd: typeof $Enums.tipo_token_enumProd

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ChatsDevs
 * const chatsDevs = await prisma.chatsDev.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ChatsDevs
   * const chatsDevs = await prisma.chatsDev.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.chatsDev`: Exposes CRUD operations for the **chatsDev** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatsDevs
    * const chatsDevs = await prisma.chatsDev.findMany()
    * ```
    */
  get chatsDev(): Prisma.chatsDevDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatsProd`: Exposes CRUD operations for the **chatsProd** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatsProds
    * const chatsProds = await prisma.chatsProd.findMany()
    * ```
    */
  get chatsProd(): Prisma.chatsProdDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invalid_tokensDev`: Exposes CRUD operations for the **invalid_tokensDev** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invalid_tokensDevs
    * const invalid_tokensDevs = await prisma.invalid_tokensDev.findMany()
    * ```
    */
  get invalid_tokensDev(): Prisma.invalid_tokensDevDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invalid_tokensProd`: Exposes CRUD operations for the **invalid_tokensProd** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invalid_tokensProds
    * const invalid_tokensProds = await prisma.invalid_tokensProd.findMany()
    * ```
    */
  get invalid_tokensProd(): Prisma.invalid_tokensProdDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messagesDev`: Exposes CRUD operations for the **messagesDev** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessagesDevs
    * const messagesDevs = await prisma.messagesDev.findMany()
    * ```
    */
  get messagesDev(): Prisma.messagesDevDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messagesProd`: Exposes CRUD operations for the **messagesProd** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessagesProds
    * const messagesProds = await prisma.messagesProd.findMany()
    * ```
    */
  get messagesProd(): Prisma.messagesProdDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productsDevDev`: Exposes CRUD operations for the **productsDev** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductsDevs
    * const productsDevs = await prisma.productsDevDev.findMany()
    * ```
    */
  get productsDev(): prisma.productsDevDevDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productsDevProd`: Exposes CRUD operations for the **productsProd** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductsProds
    * const productsProds = await prisma.productsDevProd.findMany()
    * ```
    */
  get productsProd(): prisma.productsDevProdDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usersDev`: Exposes CRUD operations for the **usersDev** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsersDevs
    * const usersDevs = await prisma.usersDev.findMany()
    * ```
    */
  get usersDev(): Prisma.usersDevDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usersProd`: Exposes CRUD operations for the **usersProd** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsersProds
    * const usersProds = await prisma.usersProd.findMany()
    * ```
    */
  get usersProd(): Prisma.usersProdDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product_categoriesDevDev`: Exposes CRUD operations for the **product_categoriesDev** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Product_categoriesDevs
    * const product_categoriesDevs = await prisma.product_categoriesDevDev.findMany()
    * ```
    */
  get product_categoriesDev(): prisma.product_categoriesDevDevDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product_categoriesDevProd`: Exposes CRUD operations for the **product_categoriesProd** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Product_categoriesProds
    * const product_categoriesProds = await prisma.product_categoriesDevProd.findMany()
    * ```
    */
  get product_categoriesProd(): prisma.product_categoriesDevProdDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    chatsDev: 'chatsDev',
    chatsProd: 'chatsProd',
    invalid_tokensDev: 'invalid_tokensDev',
    invalid_tokensProd: 'invalid_tokensProd',
    messagesDev: 'messagesDev',
    messagesProd: 'messagesProd',
    productsDev: 'productsDev',
    productsProd: 'productsProd',
    usersDev: 'usersDev',
    usersProd: 'usersProd',
    product_categoriesDev: 'product_categoriesDev',
    product_categoriesProd: 'product_categoriesProd'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "chatsDev" | "chatsProd" | "invalid_tokensDev" | "invalid_tokensProd" | "messagesDev" | "messagesProd" | "productsDev" | "productsProd" | "usersDev" | "usersProd" | "product_categoriesDev" | "product_categoriesProd"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      chatsDev: {
        payload: Prisma.$chatsDevPayload<ExtArgs>
        fields: Prisma.chatsDevFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chatsDevFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsDevPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chatsDevFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsDevPayload>
          }
          findFirst: {
            args: Prisma.chatsDevFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsDevPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chatsDevFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsDevPayload>
          }
          findMany: {
            args: Prisma.chatsDevFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsDevPayload>[]
          }
          create: {
            args: Prisma.chatsDevCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsDevPayload>
          }
          createMany: {
            args: Prisma.chatsDevCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.chatsDevCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsDevPayload>[]
          }
          delete: {
            args: Prisma.chatsDevDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsDevPayload>
          }
          update: {
            args: Prisma.chatsDevUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsDevPayload>
          }
          deleteMany: {
            args: Prisma.chatsDevDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chatsDevUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.chatsDevUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsDevPayload>[]
          }
          upsert: {
            args: Prisma.chatsDevUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsDevPayload>
          }
          aggregate: {
            args: Prisma.ChatsDevAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatsDev>
          }
          groupBy: {
            args: Prisma.chatsDevGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatsDevGroupByOutputType>[]
          }
          count: {
            args: Prisma.chatsDevCountArgs<ExtArgs>
            result: $Utils.Optional<ChatsDevCountAggregateOutputType> | number
          }
        }
      }
      chatsProd: {
        payload: Prisma.$chatsProdPayload<ExtArgs>
        fields: Prisma.chatsProdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chatsProdFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsProdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chatsProdFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsProdPayload>
          }
          findFirst: {
            args: Prisma.chatsProdFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsProdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chatsProdFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsProdPayload>
          }
          findMany: {
            args: Prisma.chatsProdFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsProdPayload>[]
          }
          create: {
            args: Prisma.chatsProdCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsProdPayload>
          }
          createMany: {
            args: Prisma.chatsProdCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.chatsProdCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsProdPayload>[]
          }
          delete: {
            args: Prisma.chatsProdDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsProdPayload>
          }
          update: {
            args: Prisma.chatsProdUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsProdPayload>
          }
          deleteMany: {
            args: Prisma.chatsProdDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chatsProdUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.chatsProdUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsProdPayload>[]
          }
          upsert: {
            args: Prisma.chatsProdUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatsProdPayload>
          }
          aggregate: {
            args: Prisma.ChatsProdAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatsProd>
          }
          groupBy: {
            args: Prisma.chatsProdGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatsProdGroupByOutputType>[]
          }
          count: {
            args: Prisma.chatsProdCountArgs<ExtArgs>
            result: $Utils.Optional<ChatsProdCountAggregateOutputType> | number
          }
        }
      }
      invalid_tokensDev: {
        payload: Prisma.$invalid_tokensDevPayload<ExtArgs>
        fields: Prisma.invalid_tokensDevFieldRefs
        operations: {
          findUnique: {
            args: Prisma.invalid_tokensDevFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invalid_tokensDevPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.invalid_tokensDevFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invalid_tokensDevPayload>
          }
          findFirst: {
            args: Prisma.invalid_tokensDevFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invalid_tokensDevPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.invalid_tokensDevFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invalid_tokensDevPayload>
          }
          findMany: {
            args: Prisma.invalid_tokensDevFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invalid_tokensDevPayload>[]
          }
          create: {
            args: Prisma.invalid_tokensDevCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invalid_tokensDevPayload>
          }
          createMany: {
            args: Prisma.invalid_tokensDevCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.invalid_tokensDevCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invalid_tokensDevPayload>[]
          }
          delete: {
            args: Prisma.invalid_tokensDevDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invalid_tokensDevPayload>
          }
          update: {
            args: Prisma.invalid_tokensDevUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invalid_tokensDevPayload>
          }
          deleteMany: {
            args: Prisma.invalid_tokensDevDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.invalid_tokensDevUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.invalid_tokensDevUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invalid_tokensDevPayload>[]
          }
          upsert: {
            args: Prisma.invalid_tokensDevUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invalid_tokensDevPayload>
          }
          aggregate: {
            args: Prisma.Invalid_tokensDevAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvalid_tokensDev>
          }
          groupBy: {
            args: Prisma.invalid_tokensDevGroupByArgs<ExtArgs>
            result: $Utils.Optional<Invalid_tokensDevGroupByOutputType>[]
          }
          count: {
            args: Prisma.invalid_tokensDevCountArgs<ExtArgs>
            result: $Utils.Optional<Invalid_tokensDevCountAggregateOutputType> | number
          }
        }
      }
      invalid_tokensProd: {
        payload: Prisma.$invalid_tokensProdPayload<ExtArgs>
        fields: Prisma.invalid_tokensProdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.invalid_tokensProdFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invalid_tokensProdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.invalid_tokensProdFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invalid_tokensProdPayload>
          }
          findFirst: {
            args: Prisma.invalid_tokensProdFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invalid_tokensProdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.invalid_tokensProdFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invalid_tokensProdPayload>
          }
          findMany: {
            args: Prisma.invalid_tokensProdFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invalid_tokensProdPayload>[]
          }
          create: {
            args: Prisma.invalid_tokensProdCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invalid_tokensProdPayload>
          }
          createMany: {
            args: Prisma.invalid_tokensProdCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.invalid_tokensProdCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invalid_tokensProdPayload>[]
          }
          delete: {
            args: Prisma.invalid_tokensProdDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invalid_tokensProdPayload>
          }
          update: {
            args: Prisma.invalid_tokensProdUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invalid_tokensProdPayload>
          }
          deleteMany: {
            args: Prisma.invalid_tokensProdDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.invalid_tokensProdUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.invalid_tokensProdUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invalid_tokensProdPayload>[]
          }
          upsert: {
            args: Prisma.invalid_tokensProdUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invalid_tokensProdPayload>
          }
          aggregate: {
            args: Prisma.Invalid_tokensProdAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvalid_tokensProd>
          }
          groupBy: {
            args: Prisma.invalid_tokensProdGroupByArgs<ExtArgs>
            result: $Utils.Optional<Invalid_tokensProdGroupByOutputType>[]
          }
          count: {
            args: Prisma.invalid_tokensProdCountArgs<ExtArgs>
            result: $Utils.Optional<Invalid_tokensProdCountAggregateOutputType> | number
          }
        }
      }
      messagesDev: {
        payload: Prisma.$messagesDevPayload<ExtArgs>
        fields: Prisma.messagesDevFieldRefs
        operations: {
          findUnique: {
            args: Prisma.messagesDevFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesDevPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.messagesDevFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesDevPayload>
          }
          findFirst: {
            args: Prisma.messagesDevFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesDevPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.messagesDevFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesDevPayload>
          }
          findMany: {
            args: Prisma.messagesDevFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesDevPayload>[]
          }
          create: {
            args: Prisma.messagesDevCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesDevPayload>
          }
          createMany: {
            args: Prisma.messagesDevCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.messagesDevCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesDevPayload>[]
          }
          delete: {
            args: Prisma.messagesDevDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesDevPayload>
          }
          update: {
            args: Prisma.messagesDevUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesDevPayload>
          }
          deleteMany: {
            args: Prisma.messagesDevDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.messagesDevUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.messagesDevUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesDevPayload>[]
          }
          upsert: {
            args: Prisma.messagesDevUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesDevPayload>
          }
          aggregate: {
            args: Prisma.MessagesDevAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessagesDev>
          }
          groupBy: {
            args: Prisma.messagesDevGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessagesDevGroupByOutputType>[]
          }
          count: {
            args: Prisma.messagesDevCountArgs<ExtArgs>
            result: $Utils.Optional<MessagesDevCountAggregateOutputType> | number
          }
        }
      }
      messagesProd: {
        payload: Prisma.$messagesProdPayload<ExtArgs>
        fields: Prisma.messagesProdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.messagesProdFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesProdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.messagesProdFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesProdPayload>
          }
          findFirst: {
            args: Prisma.messagesProdFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesProdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.messagesProdFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesProdPayload>
          }
          findMany: {
            args: Prisma.messagesProdFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesProdPayload>[]
          }
          create: {
            args: Prisma.messagesProdCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesProdPayload>
          }
          createMany: {
            args: Prisma.messagesProdCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.messagesProdCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesProdPayload>[]
          }
          delete: {
            args: Prisma.messagesProdDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesProdPayload>
          }
          update: {
            args: Prisma.messagesProdUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesProdPayload>
          }
          deleteMany: {
            args: Prisma.messagesProdDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.messagesProdUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.messagesProdUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesProdPayload>[]
          }
          upsert: {
            args: Prisma.messagesProdUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$messagesProdPayload>
          }
          aggregate: {
            args: Prisma.MessagesProdAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessagesProd>
          }
          groupBy: {
            args: Prisma.messagesProdGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessagesProdGroupByOutputType>[]
          }
          count: {
            args: Prisma.messagesProdCountArgs<ExtArgs>
            result: $Utils.Optional<MessagesProdCountAggregateOutputType> | number
          }
        }
      }
      productsDev: {
        payload: Prisma.$productsDevPayload<ExtArgs>
        fields: prisma.productsDevDevFieldRefs
        operations: {
          findUnique: {
            args: prisma.productsDevDevFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsDevPayload> | null
          }
          findUniqueOrThrow: {
            args: prisma.productsDevDevFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsDevPayload>
          }
          findFirst: {
            args: prisma.productsDevDevFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsDevPayload> | null
          }
          findFirstOrThrow: {
            args: prisma.productsDevDevFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsDevPayload>
          }
          findMany: {
            args: prisma.productsDevDevFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsDevPayload>[]
          }
          create: {
            args: prisma.productsDevDevCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsDevPayload>
          }
          createMany: {
            args: prisma.productsDevDevCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: prisma.productsDevDevCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsDevPayload>[]
          }
          delete: {
            args: prisma.productsDevDevDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsDevPayload>
          }
          update: {
            args: prisma.productsDevDevUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsDevPayload>
          }
          deleteMany: {
            args: prisma.productsDevDevDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: prisma.productsDevDevUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: prisma.productsDevDevUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsDevPayload>[]
          }
          upsert: {
            args: prisma.productsDevDevUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsDevPayload>
          }
          aggregate: {
            args: prisma.productsDevDevAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductsDev>
          }
          groupBy: {
            args: prisma.productsDevDevGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsDevGroupByOutputType>[]
          }
          count: {
            args: prisma.productsDevDevCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsDevCountAggregateOutputType> | number
          }
        }
      }
      productsProd: {
        payload: Prisma.$productsProdPayload<ExtArgs>
        fields: prisma.productsDevProdFieldRefs
        operations: {
          findUnique: {
            args: prisma.productsDevProdFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsProdPayload> | null
          }
          findUniqueOrThrow: {
            args: prisma.productsDevProdFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsProdPayload>
          }
          findFirst: {
            args: prisma.productsDevProdFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsProdPayload> | null
          }
          findFirstOrThrow: {
            args: prisma.productsDevProdFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsProdPayload>
          }
          findMany: {
            args: prisma.productsDevProdFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsProdPayload>[]
          }
          create: {
            args: prisma.productsDevProdCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsProdPayload>
          }
          createMany: {
            args: prisma.productsDevProdCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: prisma.productsDevProdCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsProdPayload>[]
          }
          delete: {
            args: prisma.productsDevProdDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsProdPayload>
          }
          update: {
            args: prisma.productsDevProdUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsProdPayload>
          }
          deleteMany: {
            args: prisma.productsDevProdDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: prisma.productsDevProdUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: prisma.productsDevProdUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsProdPayload>[]
          }
          upsert: {
            args: prisma.productsDevProdUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsProdPayload>
          }
          aggregate: {
            args: prisma.productsDevProdAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductsProd>
          }
          groupBy: {
            args: prisma.productsDevProdGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsProdGroupByOutputType>[]
          }
          count: {
            args: prisma.productsDevProdCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsProdCountAggregateOutputType> | number
          }
        }
      }
      usersDev: {
        payload: Prisma.$usersDevPayload<ExtArgs>
        fields: Prisma.usersDevFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersDevFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersDevPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersDevFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersDevPayload>
          }
          findFirst: {
            args: Prisma.usersDevFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersDevPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersDevFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersDevPayload>
          }
          findMany: {
            args: Prisma.usersDevFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersDevPayload>[]
          }
          create: {
            args: Prisma.usersDevCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersDevPayload>
          }
          createMany: {
            args: Prisma.usersDevCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersDevCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersDevPayload>[]
          }
          delete: {
            args: Prisma.usersDevDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersDevPayload>
          }
          update: {
            args: Prisma.usersDevUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersDevPayload>
          }
          deleteMany: {
            args: Prisma.usersDevDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersDevUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersDevUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersDevPayload>[]
          }
          upsert: {
            args: Prisma.usersDevUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersDevPayload>
          }
          aggregate: {
            args: Prisma.UsersDevAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsersDev>
          }
          groupBy: {
            args: Prisma.usersDevGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersDevGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersDevCountArgs<ExtArgs>
            result: $Utils.Optional<UsersDevCountAggregateOutputType> | number
          }
        }
      }
      usersProd: {
        payload: Prisma.$usersProdPayload<ExtArgs>
        fields: Prisma.usersProdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersProdFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersProdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersProdFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersProdPayload>
          }
          findFirst: {
            args: Prisma.usersProdFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersProdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersProdFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersProdPayload>
          }
          findMany: {
            args: Prisma.usersProdFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersProdPayload>[]
          }
          create: {
            args: Prisma.usersProdCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersProdPayload>
          }
          createMany: {
            args: Prisma.usersProdCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersProdCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersProdPayload>[]
          }
          delete: {
            args: Prisma.usersProdDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersProdPayload>
          }
          update: {
            args: Prisma.usersProdUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersProdPayload>
          }
          deleteMany: {
            args: Prisma.usersProdDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersProdUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersProdUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersProdPayload>[]
          }
          upsert: {
            args: Prisma.usersProdUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersProdPayload>
          }
          aggregate: {
            args: Prisma.UsersProdAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsersProd>
          }
          groupBy: {
            args: Prisma.usersProdGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersProdGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersProdCountArgs<ExtArgs>
            result: $Utils.Optional<UsersProdCountAggregateOutputType> | number
          }
        }
      }
      product_categoriesDev: {
        payload: Prisma.$product_categoriesDevPayload<ExtArgs>
        fields: prisma.product_categoriesDevDevFieldRefs
        operations: {
          findUnique: {
            args: prisma.product_categoriesDevDevFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesDevPayload> | null
          }
          findUniqueOrThrow: {
            args: prisma.product_categoriesDevDevFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesDevPayload>
          }
          findFirst: {
            args: prisma.product_categoriesDevDevFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesDevPayload> | null
          }
          findFirstOrThrow: {
            args: prisma.product_categoriesDevDevFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesDevPayload>
          }
          findMany: {
            args: prisma.product_categoriesDevDevFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesDevPayload>[]
          }
          create: {
            args: prisma.product_categoriesDevDevCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesDevPayload>
          }
          createMany: {
            args: prisma.product_categoriesDevDevCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: prisma.product_categoriesDevDevCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesDevPayload>[]
          }
          delete: {
            args: prisma.product_categoriesDevDevDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesDevPayload>
          }
          update: {
            args: prisma.product_categoriesDevDevUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesDevPayload>
          }
          deleteMany: {
            args: prisma.product_categoriesDevDevDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: prisma.product_categoriesDevDevUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: prisma.product_categoriesDevDevUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesDevPayload>[]
          }
          upsert: {
            args: prisma.product_categoriesDevDevUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesDevPayload>
          }
          aggregate: {
            args: prisma.product_categoriesDevDevAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct_categoriesDev>
          }
          groupBy: {
            args: prisma.product_categoriesDevDevGroupByArgs<ExtArgs>
            result: $Utils.Optional<Product_categoriesDevGroupByOutputType>[]
          }
          count: {
            args: prisma.product_categoriesDevDevCountArgs<ExtArgs>
            result: $Utils.Optional<Product_categoriesDevCountAggregateOutputType> | number
          }
        }
      }
      product_categoriesProd: {
        payload: Prisma.$product_categoriesProdPayload<ExtArgs>
        fields: prisma.product_categoriesDevProdFieldRefs
        operations: {
          findUnique: {
            args: prisma.product_categoriesDevProdFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesProdPayload> | null
          }
          findUniqueOrThrow: {
            args: prisma.product_categoriesDevProdFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesProdPayload>
          }
          findFirst: {
            args: prisma.product_categoriesDevProdFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesProdPayload> | null
          }
          findFirstOrThrow: {
            args: prisma.product_categoriesDevProdFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesProdPayload>
          }
          findMany: {
            args: prisma.product_categoriesDevProdFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesProdPayload>[]
          }
          create: {
            args: prisma.product_categoriesDevProdCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesProdPayload>
          }
          createMany: {
            args: prisma.product_categoriesDevProdCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: prisma.product_categoriesDevProdCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesProdPayload>[]
          }
          delete: {
            args: prisma.product_categoriesDevProdDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesProdPayload>
          }
          update: {
            args: prisma.product_categoriesDevProdUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesProdPayload>
          }
          deleteMany: {
            args: prisma.product_categoriesDevProdDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: prisma.product_categoriesDevProdUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: prisma.product_categoriesDevProdUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesProdPayload>[]
          }
          upsert: {
            args: prisma.product_categoriesDevProdUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_categoriesProdPayload>
          }
          aggregate: {
            args: prisma.product_categoriesDevProdAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct_categoriesProd>
          }
          groupBy: {
            args: prisma.product_categoriesDevProdGroupByArgs<ExtArgs>
            result: $Utils.Optional<Product_categoriesProdGroupByOutputType>[]
          }
          count: {
            args: prisma.product_categoriesDevProdCountArgs<ExtArgs>
            result: $Utils.Optional<Product_categoriesProdCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    chatsDev?: chatsDevOmit
    chatsProd?: chatsProdOmit
    invalid_tokensDev?: invalid_tokensDevOmit
    invalid_tokensProd?: invalid_tokensProdOmit
    messagesDev?: messagesDevOmit
    messagesProd?: messagesProdOmit
    productsDev?: productsDevOmit
    productsProd?: productsProdOmit
    usersDev?: usersDevOmit
    usersProd?: usersProdOmit
    product_categoriesDev?: product_categoriesDevOmit
    product_categoriesProd?: product_categoriesProdOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model chatsDev
   */

  export type AggregateChatsDev = {
    _count: ChatsDevCountAggregateOutputType | null
    _avg: ChatsDevAvgAggregateOutputType | null
    _sum: ChatsDevSumAggregateOutputType | null
    _min: ChatsDevMinAggregateOutputType | null
    _max: ChatsDevMaxAggregateOutputType | null
  }

  export type ChatsDevAvgAggregateOutputType = {
    id: number | null
    usuario_id: number | null
  }

  export type ChatsDevSumAggregateOutputType = {
    id: number | null
    usuario_id: number | null
  }

  export type ChatsDevMinAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    titulo: string | null
    creado_en: Date | null
    actualizado_en: Date | null
  }

  export type ChatsDevMaxAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    titulo: string | null
    creado_en: Date | null
    actualizado_en: Date | null
  }

  export type ChatsDevCountAggregateOutputType = {
    id: number
    usuario_id: number
    titulo: number
    creado_en: number
    actualizado_en: number
    _all: number
  }


  export type ChatsDevAvgAggregateInputType = {
    id?: true
    usuario_id?: true
  }

  export type ChatsDevSumAggregateInputType = {
    id?: true
    usuario_id?: true
  }

  export type ChatsDevMinAggregateInputType = {
    id?: true
    usuario_id?: true
    titulo?: true
    creado_en?: true
    actualizado_en?: true
  }

  export type ChatsDevMaxAggregateInputType = {
    id?: true
    usuario_id?: true
    titulo?: true
    creado_en?: true
    actualizado_en?: true
  }

  export type ChatsDevCountAggregateInputType = {
    id?: true
    usuario_id?: true
    titulo?: true
    creado_en?: true
    actualizado_en?: true
    _all?: true
  }

  export type ChatsDevAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chatsDev to aggregate.
     */
    where?: chatsDevWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatsDevs to fetch.
     */
    orderBy?: chatsDevOrderByWithRelationInput | chatsDevOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chatsDevWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatsDevs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatsDevs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chatsDevs
    **/
    _count?: true | ChatsDevCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatsDevAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatsDevSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatsDevMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatsDevMaxAggregateInputType
  }

  export type GetChatsDevAggregateType<T extends ChatsDevAggregateArgs> = {
        [P in keyof T & keyof AggregateChatsDev]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatsDev[P]>
      : GetScalarType<T[P], AggregateChatsDev[P]>
  }




  export type chatsDevGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatsDevWhereInput
    orderBy?: chatsDevOrderByWithAggregationInput | chatsDevOrderByWithAggregationInput[]
    by: ChatsDevScalarFieldEnum[] | ChatsDevScalarFieldEnum
    having?: chatsDevScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatsDevCountAggregateInputType | true
    _avg?: ChatsDevAvgAggregateInputType
    _sum?: ChatsDevSumAggregateInputType
    _min?: ChatsDevMinAggregateInputType
    _max?: ChatsDevMaxAggregateInputType
  }

  export type ChatsDevGroupByOutputType = {
    id: number
    usuario_id: number
    titulo: string
    creado_en: Date
    actualizado_en: Date
    _count: ChatsDevCountAggregateOutputType | null
    _avg: ChatsDevAvgAggregateOutputType | null
    _sum: ChatsDevSumAggregateOutputType | null
    _min: ChatsDevMinAggregateOutputType | null
    _max: ChatsDevMaxAggregateOutputType | null
  }

  type GetChatsDevGroupByPayload<T extends chatsDevGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatsDevGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatsDevGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatsDevGroupByOutputType[P]>
            : GetScalarType<T[P], ChatsDevGroupByOutputType[P]>
        }
      >
    >


  export type chatsDevSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    titulo?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
  }, ExtArgs["result"]["chatsDev"]>

  export type chatsDevSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    titulo?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
  }, ExtArgs["result"]["chatsDev"]>

  export type chatsDevSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    titulo?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
  }, ExtArgs["result"]["chatsDev"]>

  export type chatsDevSelectScalar = {
    id?: boolean
    usuario_id?: boolean
    titulo?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
  }

  export type chatsDevOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario_id" | "titulo" | "creado_en" | "actualizado_en", ExtArgs["result"]["chatsDev"]>

  export type $chatsDevPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chatsDev"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuario_id: number
      titulo: string
      creado_en: Date
      actualizado_en: Date
    }, ExtArgs["result"]["chatsDev"]>
    composites: {}
  }

  type chatsDevGetPayload<S extends boolean | null | undefined | chatsDevDefaultArgs> = $Result.GetResult<Prisma.$chatsDevPayload, S>

  type chatsDevCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chatsDevFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatsDevCountAggregateInputType | true
    }

  export interface chatsDevDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chatsDev'], meta: { name: 'chatsDev' } }
    /**
     * Find zero or one ChatsDev that matches the filter.
     * @param {chatsDevFindUniqueArgs} args - Arguments to find a ChatsDev
     * @example
     * // Get one ChatsDev
     * const chatsDev = await prisma.chatsDev.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chatsDevFindUniqueArgs>(args: SelectSubset<T, chatsDevFindUniqueArgs<ExtArgs>>): Prisma__chatsDevClient<$Result.GetResult<Prisma.$chatsDevPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatsDev that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chatsDevFindUniqueOrThrowArgs} args - Arguments to find a ChatsDev
     * @example
     * // Get one ChatsDev
     * const chatsDev = await prisma.chatsDev.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chatsDevFindUniqueOrThrowArgs>(args: SelectSubset<T, chatsDevFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chatsDevClient<$Result.GetResult<Prisma.$chatsDevPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatsDev that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatsDevFindFirstArgs} args - Arguments to find a ChatsDev
     * @example
     * // Get one ChatsDev
     * const chatsDev = await prisma.chatsDev.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chatsDevFindFirstArgs>(args?: SelectSubset<T, chatsDevFindFirstArgs<ExtArgs>>): Prisma__chatsDevClient<$Result.GetResult<Prisma.$chatsDevPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatsDev that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatsDevFindFirstOrThrowArgs} args - Arguments to find a ChatsDev
     * @example
     * // Get one ChatsDev
     * const chatsDev = await prisma.chatsDev.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chatsDevFindFirstOrThrowArgs>(args?: SelectSubset<T, chatsDevFindFirstOrThrowArgs<ExtArgs>>): Prisma__chatsDevClient<$Result.GetResult<Prisma.$chatsDevPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatsDevs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatsDevFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatsDevs
     * const chatsDevs = await prisma.chatsDev.findMany()
     * 
     * // Get first 10 ChatsDevs
     * const chatsDevs = await prisma.chatsDev.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatsDevWithIdOnly = await prisma.chatsDev.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends chatsDevFindManyArgs>(args?: SelectSubset<T, chatsDevFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatsDevPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatsDev.
     * @param {chatsDevCreateArgs} args - Arguments to create a ChatsDev.
     * @example
     * // Create one ChatsDev
     * const ChatsDev = await prisma.chatsDev.create({
     *   data: {
     *     // ... data to create a ChatsDev
     *   }
     * })
     * 
     */
    create<T extends chatsDevCreateArgs>(args: SelectSubset<T, chatsDevCreateArgs<ExtArgs>>): Prisma__chatsDevClient<$Result.GetResult<Prisma.$chatsDevPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatsDevs.
     * @param {chatsDevCreateManyArgs} args - Arguments to create many ChatsDevs.
     * @example
     * // Create many ChatsDevs
     * const chatsDev = await prisma.chatsDev.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chatsDevCreateManyArgs>(args?: SelectSubset<T, chatsDevCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatsDevs and returns the data saved in the database.
     * @param {chatsDevCreateManyAndReturnArgs} args - Arguments to create many ChatsDevs.
     * @example
     * // Create many ChatsDevs
     * const chatsDev = await prisma.chatsDev.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatsDevs and only return the `id`
     * const chatsDevWithIdOnly = await prisma.chatsDev.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends chatsDevCreateManyAndReturnArgs>(args?: SelectSubset<T, chatsDevCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatsDevPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatsDev.
     * @param {chatsDevDeleteArgs} args - Arguments to delete one ChatsDev.
     * @example
     * // Delete one ChatsDev
     * const ChatsDev = await prisma.chatsDev.delete({
     *   where: {
     *     // ... filter to delete one ChatsDev
     *   }
     * })
     * 
     */
    delete<T extends chatsDevDeleteArgs>(args: SelectSubset<T, chatsDevDeleteArgs<ExtArgs>>): Prisma__chatsDevClient<$Result.GetResult<Prisma.$chatsDevPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatsDev.
     * @param {chatsDevUpdateArgs} args - Arguments to update one ChatsDev.
     * @example
     * // Update one ChatsDev
     * const chatsDev = await prisma.chatsDev.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chatsDevUpdateArgs>(args: SelectSubset<T, chatsDevUpdateArgs<ExtArgs>>): Prisma__chatsDevClient<$Result.GetResult<Prisma.$chatsDevPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatsDevs.
     * @param {chatsDevDeleteManyArgs} args - Arguments to filter ChatsDevs to delete.
     * @example
     * // Delete a few ChatsDevs
     * const { count } = await prisma.chatsDev.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chatsDevDeleteManyArgs>(args?: SelectSubset<T, chatsDevDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatsDevs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatsDevUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatsDevs
     * const chatsDev = await prisma.chatsDev.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chatsDevUpdateManyArgs>(args: SelectSubset<T, chatsDevUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatsDevs and returns the data updated in the database.
     * @param {chatsDevUpdateManyAndReturnArgs} args - Arguments to update many ChatsDevs.
     * @example
     * // Update many ChatsDevs
     * const chatsDev = await prisma.chatsDev.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatsDevs and only return the `id`
     * const chatsDevWithIdOnly = await prisma.chatsDev.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends chatsDevUpdateManyAndReturnArgs>(args: SelectSubset<T, chatsDevUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatsDevPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatsDev.
     * @param {chatsDevUpsertArgs} args - Arguments to update or create a ChatsDev.
     * @example
     * // Update or create a ChatsDev
     * const chatsDev = await prisma.chatsDev.upsert({
     *   create: {
     *     // ... data to create a ChatsDev
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatsDev we want to update
     *   }
     * })
     */
    upsert<T extends chatsDevUpsertArgs>(args: SelectSubset<T, chatsDevUpsertArgs<ExtArgs>>): Prisma__chatsDevClient<$Result.GetResult<Prisma.$chatsDevPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatsDevs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatsDevCountArgs} args - Arguments to filter ChatsDevs to count.
     * @example
     * // Count the number of ChatsDevs
     * const count = await prisma.chatsDev.count({
     *   where: {
     *     // ... the filter for the ChatsDevs we want to count
     *   }
     * })
    **/
    count<T extends chatsDevCountArgs>(
      args?: Subset<T, chatsDevCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatsDevCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatsDev.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatsDevAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatsDevAggregateArgs>(args: Subset<T, ChatsDevAggregateArgs>): Prisma.PrismaPromise<GetChatsDevAggregateType<T>>

    /**
     * Group by ChatsDev.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatsDevGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends chatsDevGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chatsDevGroupByArgs['orderBy'] }
        : { orderBy?: chatsDevGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, chatsDevGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatsDevGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chatsDev model
   */
  readonly fields: chatsDevFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chatsDev.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chatsDevClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the chatsDev model
   */
  interface chatsDevFieldRefs {
    readonly id: FieldRef<"chatsDev", 'Int'>
    readonly usuario_id: FieldRef<"chatsDev", 'Int'>
    readonly titulo: FieldRef<"chatsDev", 'String'>
    readonly creado_en: FieldRef<"chatsDev", 'DateTime'>
    readonly actualizado_en: FieldRef<"chatsDev", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * chatsDev findUnique
   */
  export type chatsDevFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatsDev
     */
    select?: chatsDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatsDev
     */
    omit?: chatsDevOmit<ExtArgs> | null
    /**
     * Filter, which chatsDev to fetch.
     */
    where: chatsDevWhereUniqueInput
  }

  /**
   * chatsDev findUniqueOrThrow
   */
  export type chatsDevFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatsDev
     */
    select?: chatsDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatsDev
     */
    omit?: chatsDevOmit<ExtArgs> | null
    /**
     * Filter, which chatsDev to fetch.
     */
    where: chatsDevWhereUniqueInput
  }

  /**
   * chatsDev findFirst
   */
  export type chatsDevFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatsDev
     */
    select?: chatsDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatsDev
     */
    omit?: chatsDevOmit<ExtArgs> | null
    /**
     * Filter, which chatsDev to fetch.
     */
    where?: chatsDevWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatsDevs to fetch.
     */
    orderBy?: chatsDevOrderByWithRelationInput | chatsDevOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chatsDevs.
     */
    cursor?: chatsDevWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatsDevs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatsDevs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatsDevs.
     */
    distinct?: ChatsDevScalarFieldEnum | ChatsDevScalarFieldEnum[]
  }

  /**
   * chatsDev findFirstOrThrow
   */
  export type chatsDevFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatsDev
     */
    select?: chatsDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatsDev
     */
    omit?: chatsDevOmit<ExtArgs> | null
    /**
     * Filter, which chatsDev to fetch.
     */
    where?: chatsDevWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatsDevs to fetch.
     */
    orderBy?: chatsDevOrderByWithRelationInput | chatsDevOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chatsDevs.
     */
    cursor?: chatsDevWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatsDevs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatsDevs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatsDevs.
     */
    distinct?: ChatsDevScalarFieldEnum | ChatsDevScalarFieldEnum[]
  }

  /**
   * chatsDev findMany
   */
  export type chatsDevFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatsDev
     */
    select?: chatsDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatsDev
     */
    omit?: chatsDevOmit<ExtArgs> | null
    /**
     * Filter, which chatsDevs to fetch.
     */
    where?: chatsDevWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatsDevs to fetch.
     */
    orderBy?: chatsDevOrderByWithRelationInput | chatsDevOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chatsDevs.
     */
    cursor?: chatsDevWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatsDevs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatsDevs.
     */
    skip?: number
    distinct?: ChatsDevScalarFieldEnum | ChatsDevScalarFieldEnum[]
  }

  /**
   * chatsDev create
   */
  export type chatsDevCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatsDev
     */
    select?: chatsDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatsDev
     */
    omit?: chatsDevOmit<ExtArgs> | null
    /**
     * The data needed to create a chatsDev.
     */
    data: XOR<chatsDevCreateInput, chatsDevUncheckedCreateInput>
  }

  /**
   * chatsDev createMany
   */
  export type chatsDevCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chatsDevs.
     */
    data: chatsDevCreateManyInput | chatsDevCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chatsDev createManyAndReturn
   */
  export type chatsDevCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatsDev
     */
    select?: chatsDevSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chatsDev
     */
    omit?: chatsDevOmit<ExtArgs> | null
    /**
     * The data used to create many chatsDevs.
     */
    data: chatsDevCreateManyInput | chatsDevCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chatsDev update
   */
  export type chatsDevUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatsDev
     */
    select?: chatsDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatsDev
     */
    omit?: chatsDevOmit<ExtArgs> | null
    /**
     * The data needed to update a chatsDev.
     */
    data: XOR<chatsDevUpdateInput, chatsDevUncheckedUpdateInput>
    /**
     * Choose, which chatsDev to update.
     */
    where: chatsDevWhereUniqueInput
  }

  /**
   * chatsDev updateMany
   */
  export type chatsDevUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chatsDevs.
     */
    data: XOR<chatsDevUpdateManyMutationInput, chatsDevUncheckedUpdateManyInput>
    /**
     * Filter which chatsDevs to update
     */
    where?: chatsDevWhereInput
    /**
     * Limit how many chatsDevs to update.
     */
    limit?: number
  }

  /**
   * chatsDev updateManyAndReturn
   */
  export type chatsDevUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatsDev
     */
    select?: chatsDevSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chatsDev
     */
    omit?: chatsDevOmit<ExtArgs> | null
    /**
     * The data used to update chatsDevs.
     */
    data: XOR<chatsDevUpdateManyMutationInput, chatsDevUncheckedUpdateManyInput>
    /**
     * Filter which chatsDevs to update
     */
    where?: chatsDevWhereInput
    /**
     * Limit how many chatsDevs to update.
     */
    limit?: number
  }

  /**
   * chatsDev upsert
   */
  export type chatsDevUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatsDev
     */
    select?: chatsDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatsDev
     */
    omit?: chatsDevOmit<ExtArgs> | null
    /**
     * The filter to search for the chatsDev to update in case it exists.
     */
    where: chatsDevWhereUniqueInput
    /**
     * In case the chatsDev found by the `where` argument doesn't exist, create a new chatsDev with this data.
     */
    create: XOR<chatsDevCreateInput, chatsDevUncheckedCreateInput>
    /**
     * In case the chatsDev was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chatsDevUpdateInput, chatsDevUncheckedUpdateInput>
  }

  /**
   * chatsDev delete
   */
  export type chatsDevDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatsDev
     */
    select?: chatsDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatsDev
     */
    omit?: chatsDevOmit<ExtArgs> | null
    /**
     * Filter which chatsDev to delete.
     */
    where: chatsDevWhereUniqueInput
  }

  /**
   * chatsDev deleteMany
   */
  export type chatsDevDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chatsDevs to delete
     */
    where?: chatsDevWhereInput
    /**
     * Limit how many chatsDevs to delete.
     */
    limit?: number
  }

  /**
   * chatsDev without action
   */
  export type chatsDevDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatsDev
     */
    select?: chatsDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatsDev
     */
    omit?: chatsDevOmit<ExtArgs> | null
  }


  /**
   * Model chatsProd
   */

  export type AggregateChatsProd = {
    _count: ChatsProdCountAggregateOutputType | null
    _avg: ChatsProdAvgAggregateOutputType | null
    _sum: ChatsProdSumAggregateOutputType | null
    _min: ChatsProdMinAggregateOutputType | null
    _max: ChatsProdMaxAggregateOutputType | null
  }

  export type ChatsProdAvgAggregateOutputType = {
    id: number | null
    usuario_id: number | null
  }

  export type ChatsProdSumAggregateOutputType = {
    id: number | null
    usuario_id: number | null
  }

  export type ChatsProdMinAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    titulo: string | null
    creado_en: Date | null
    actualizado_en: Date | null
  }

  export type ChatsProdMaxAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    titulo: string | null
    creado_en: Date | null
    actualizado_en: Date | null
  }

  export type ChatsProdCountAggregateOutputType = {
    id: number
    usuario_id: number
    titulo: number
    creado_en: number
    actualizado_en: number
    _all: number
  }


  export type ChatsProdAvgAggregateInputType = {
    id?: true
    usuario_id?: true
  }

  export type ChatsProdSumAggregateInputType = {
    id?: true
    usuario_id?: true
  }

  export type ChatsProdMinAggregateInputType = {
    id?: true
    usuario_id?: true
    titulo?: true
    creado_en?: true
    actualizado_en?: true
  }

  export type ChatsProdMaxAggregateInputType = {
    id?: true
    usuario_id?: true
    titulo?: true
    creado_en?: true
    actualizado_en?: true
  }

  export type ChatsProdCountAggregateInputType = {
    id?: true
    usuario_id?: true
    titulo?: true
    creado_en?: true
    actualizado_en?: true
    _all?: true
  }

  export type ChatsProdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chatsProd to aggregate.
     */
    where?: chatsProdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatsProds to fetch.
     */
    orderBy?: chatsProdOrderByWithRelationInput | chatsProdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chatsProdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatsProds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatsProds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chatsProds
    **/
    _count?: true | ChatsProdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatsProdAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatsProdSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatsProdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatsProdMaxAggregateInputType
  }

  export type GetChatsProdAggregateType<T extends ChatsProdAggregateArgs> = {
        [P in keyof T & keyof AggregateChatsProd]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatsProd[P]>
      : GetScalarType<T[P], AggregateChatsProd[P]>
  }




  export type chatsProdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatsProdWhereInput
    orderBy?: chatsProdOrderByWithAggregationInput | chatsProdOrderByWithAggregationInput[]
    by: ChatsProdScalarFieldEnum[] | ChatsProdScalarFieldEnum
    having?: chatsProdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatsProdCountAggregateInputType | true
    _avg?: ChatsProdAvgAggregateInputType
    _sum?: ChatsProdSumAggregateInputType
    _min?: ChatsProdMinAggregateInputType
    _max?: ChatsProdMaxAggregateInputType
  }

  export type ChatsProdGroupByOutputType = {
    id: number
    usuario_id: number
    titulo: string
    creado_en: Date
    actualizado_en: Date
    _count: ChatsProdCountAggregateOutputType | null
    _avg: ChatsProdAvgAggregateOutputType | null
    _sum: ChatsProdSumAggregateOutputType | null
    _min: ChatsProdMinAggregateOutputType | null
    _max: ChatsProdMaxAggregateOutputType | null
  }

  type GetChatsProdGroupByPayload<T extends chatsProdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatsProdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatsProdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatsProdGroupByOutputType[P]>
            : GetScalarType<T[P], ChatsProdGroupByOutputType[P]>
        }
      >
    >


  export type chatsProdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    titulo?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
  }, ExtArgs["result"]["chatsProd"]>

  export type chatsProdSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    titulo?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
  }, ExtArgs["result"]["chatsProd"]>

  export type chatsProdSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    titulo?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
  }, ExtArgs["result"]["chatsProd"]>

  export type chatsProdSelectScalar = {
    id?: boolean
    usuario_id?: boolean
    titulo?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
  }

  export type chatsProdOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario_id" | "titulo" | "creado_en" | "actualizado_en", ExtArgs["result"]["chatsProd"]>

  export type $chatsProdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chatsProd"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuario_id: number
      titulo: string
      creado_en: Date
      actualizado_en: Date
    }, ExtArgs["result"]["chatsProd"]>
    composites: {}
  }

  type chatsProdGetPayload<S extends boolean | null | undefined | chatsProdDefaultArgs> = $Result.GetResult<Prisma.$chatsProdPayload, S>

  type chatsProdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chatsProdFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatsProdCountAggregateInputType | true
    }

  export interface chatsProdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chatsProd'], meta: { name: 'chatsProd' } }
    /**
     * Find zero or one ChatsProd that matches the filter.
     * @param {chatsProdFindUniqueArgs} args - Arguments to find a ChatsProd
     * @example
     * // Get one ChatsProd
     * const chatsProd = await prisma.chatsProd.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chatsProdFindUniqueArgs>(args: SelectSubset<T, chatsProdFindUniqueArgs<ExtArgs>>): Prisma__chatsProdClient<$Result.GetResult<Prisma.$chatsProdPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatsProd that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chatsProdFindUniqueOrThrowArgs} args - Arguments to find a ChatsProd
     * @example
     * // Get one ChatsProd
     * const chatsProd = await prisma.chatsProd.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chatsProdFindUniqueOrThrowArgs>(args: SelectSubset<T, chatsProdFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chatsProdClient<$Result.GetResult<Prisma.$chatsProdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatsProd that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatsProdFindFirstArgs} args - Arguments to find a ChatsProd
     * @example
     * // Get one ChatsProd
     * const chatsProd = await prisma.chatsProd.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chatsProdFindFirstArgs>(args?: SelectSubset<T, chatsProdFindFirstArgs<ExtArgs>>): Prisma__chatsProdClient<$Result.GetResult<Prisma.$chatsProdPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatsProd that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatsProdFindFirstOrThrowArgs} args - Arguments to find a ChatsProd
     * @example
     * // Get one ChatsProd
     * const chatsProd = await prisma.chatsProd.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chatsProdFindFirstOrThrowArgs>(args?: SelectSubset<T, chatsProdFindFirstOrThrowArgs<ExtArgs>>): Prisma__chatsProdClient<$Result.GetResult<Prisma.$chatsProdPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatsProds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatsProdFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatsProds
     * const chatsProds = await prisma.chatsProd.findMany()
     * 
     * // Get first 10 ChatsProds
     * const chatsProds = await prisma.chatsProd.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatsProdWithIdOnly = await prisma.chatsProd.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends chatsProdFindManyArgs>(args?: SelectSubset<T, chatsProdFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatsProdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatsProd.
     * @param {chatsProdCreateArgs} args - Arguments to create a ChatsProd.
     * @example
     * // Create one ChatsProd
     * const ChatsProd = await prisma.chatsProd.create({
     *   data: {
     *     // ... data to create a ChatsProd
     *   }
     * })
     * 
     */
    create<T extends chatsProdCreateArgs>(args: SelectSubset<T, chatsProdCreateArgs<ExtArgs>>): Prisma__chatsProdClient<$Result.GetResult<Prisma.$chatsProdPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatsProds.
     * @param {chatsProdCreateManyArgs} args - Arguments to create many ChatsProds.
     * @example
     * // Create many ChatsProds
     * const chatsProd = await prisma.chatsProd.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chatsProdCreateManyArgs>(args?: SelectSubset<T, chatsProdCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatsProds and returns the data saved in the database.
     * @param {chatsProdCreateManyAndReturnArgs} args - Arguments to create many ChatsProds.
     * @example
     * // Create many ChatsProds
     * const chatsProd = await prisma.chatsProd.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatsProds and only return the `id`
     * const chatsProdWithIdOnly = await prisma.chatsProd.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends chatsProdCreateManyAndReturnArgs>(args?: SelectSubset<T, chatsProdCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatsProdPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatsProd.
     * @param {chatsProdDeleteArgs} args - Arguments to delete one ChatsProd.
     * @example
     * // Delete one ChatsProd
     * const ChatsProd = await prisma.chatsProd.delete({
     *   where: {
     *     // ... filter to delete one ChatsProd
     *   }
     * })
     * 
     */
    delete<T extends chatsProdDeleteArgs>(args: SelectSubset<T, chatsProdDeleteArgs<ExtArgs>>): Prisma__chatsProdClient<$Result.GetResult<Prisma.$chatsProdPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatsProd.
     * @param {chatsProdUpdateArgs} args - Arguments to update one ChatsProd.
     * @example
     * // Update one ChatsProd
     * const chatsProd = await prisma.chatsProd.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chatsProdUpdateArgs>(args: SelectSubset<T, chatsProdUpdateArgs<ExtArgs>>): Prisma__chatsProdClient<$Result.GetResult<Prisma.$chatsProdPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatsProds.
     * @param {chatsProdDeleteManyArgs} args - Arguments to filter ChatsProds to delete.
     * @example
     * // Delete a few ChatsProds
     * const { count } = await prisma.chatsProd.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chatsProdDeleteManyArgs>(args?: SelectSubset<T, chatsProdDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatsProds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatsProdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatsProds
     * const chatsProd = await prisma.chatsProd.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chatsProdUpdateManyArgs>(args: SelectSubset<T, chatsProdUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatsProds and returns the data updated in the database.
     * @param {chatsProdUpdateManyAndReturnArgs} args - Arguments to update many ChatsProds.
     * @example
     * // Update many ChatsProds
     * const chatsProd = await prisma.chatsProd.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatsProds and only return the `id`
     * const chatsProdWithIdOnly = await prisma.chatsProd.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends chatsProdUpdateManyAndReturnArgs>(args: SelectSubset<T, chatsProdUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatsProdPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatsProd.
     * @param {chatsProdUpsertArgs} args - Arguments to update or create a ChatsProd.
     * @example
     * // Update or create a ChatsProd
     * const chatsProd = await prisma.chatsProd.upsert({
     *   create: {
     *     // ... data to create a ChatsProd
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatsProd we want to update
     *   }
     * })
     */
    upsert<T extends chatsProdUpsertArgs>(args: SelectSubset<T, chatsProdUpsertArgs<ExtArgs>>): Prisma__chatsProdClient<$Result.GetResult<Prisma.$chatsProdPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatsProds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatsProdCountArgs} args - Arguments to filter ChatsProds to count.
     * @example
     * // Count the number of ChatsProds
     * const count = await prisma.chatsProd.count({
     *   where: {
     *     // ... the filter for the ChatsProds we want to count
     *   }
     * })
    **/
    count<T extends chatsProdCountArgs>(
      args?: Subset<T, chatsProdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatsProdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatsProd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatsProdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatsProdAggregateArgs>(args: Subset<T, ChatsProdAggregateArgs>): Prisma.PrismaPromise<GetChatsProdAggregateType<T>>

    /**
     * Group by ChatsProd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatsProdGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends chatsProdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chatsProdGroupByArgs['orderBy'] }
        : { orderBy?: chatsProdGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, chatsProdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatsProdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chatsProd model
   */
  readonly fields: chatsProdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chatsProd.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chatsProdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the chatsProd model
   */
  interface chatsProdFieldRefs {
    readonly id: FieldRef<"chatsProd", 'Int'>
    readonly usuario_id: FieldRef<"chatsProd", 'Int'>
    readonly titulo: FieldRef<"chatsProd", 'String'>
    readonly creado_en: FieldRef<"chatsProd", 'DateTime'>
    readonly actualizado_en: FieldRef<"chatsProd", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * chatsProd findUnique
   */
  export type chatsProdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatsProd
     */
    select?: chatsProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatsProd
     */
    omit?: chatsProdOmit<ExtArgs> | null
    /**
     * Filter, which chatsProd to fetch.
     */
    where: chatsProdWhereUniqueInput
  }

  /**
   * chatsProd findUniqueOrThrow
   */
  export type chatsProdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatsProd
     */
    select?: chatsProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatsProd
     */
    omit?: chatsProdOmit<ExtArgs> | null
    /**
     * Filter, which chatsProd to fetch.
     */
    where: chatsProdWhereUniqueInput
  }

  /**
   * chatsProd findFirst
   */
  export type chatsProdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatsProd
     */
    select?: chatsProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatsProd
     */
    omit?: chatsProdOmit<ExtArgs> | null
    /**
     * Filter, which chatsProd to fetch.
     */
    where?: chatsProdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatsProds to fetch.
     */
    orderBy?: chatsProdOrderByWithRelationInput | chatsProdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chatsProds.
     */
    cursor?: chatsProdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatsProds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatsProds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatsProds.
     */
    distinct?: ChatsProdScalarFieldEnum | ChatsProdScalarFieldEnum[]
  }

  /**
   * chatsProd findFirstOrThrow
   */
  export type chatsProdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatsProd
     */
    select?: chatsProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatsProd
     */
    omit?: chatsProdOmit<ExtArgs> | null
    /**
     * Filter, which chatsProd to fetch.
     */
    where?: chatsProdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatsProds to fetch.
     */
    orderBy?: chatsProdOrderByWithRelationInput | chatsProdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chatsProds.
     */
    cursor?: chatsProdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatsProds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatsProds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatsProds.
     */
    distinct?: ChatsProdScalarFieldEnum | ChatsProdScalarFieldEnum[]
  }

  /**
   * chatsProd findMany
   */
  export type chatsProdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatsProd
     */
    select?: chatsProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatsProd
     */
    omit?: chatsProdOmit<ExtArgs> | null
    /**
     * Filter, which chatsProds to fetch.
     */
    where?: chatsProdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatsProds to fetch.
     */
    orderBy?: chatsProdOrderByWithRelationInput | chatsProdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chatsProds.
     */
    cursor?: chatsProdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatsProds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatsProds.
     */
    skip?: number
    distinct?: ChatsProdScalarFieldEnum | ChatsProdScalarFieldEnum[]
  }

  /**
   * chatsProd create
   */
  export type chatsProdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatsProd
     */
    select?: chatsProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatsProd
     */
    omit?: chatsProdOmit<ExtArgs> | null
    /**
     * The data needed to create a chatsProd.
     */
    data: XOR<chatsProdCreateInput, chatsProdUncheckedCreateInput>
  }

  /**
   * chatsProd createMany
   */
  export type chatsProdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chatsProds.
     */
    data: chatsProdCreateManyInput | chatsProdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chatsProd createManyAndReturn
   */
  export type chatsProdCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatsProd
     */
    select?: chatsProdSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chatsProd
     */
    omit?: chatsProdOmit<ExtArgs> | null
    /**
     * The data used to create many chatsProds.
     */
    data: chatsProdCreateManyInput | chatsProdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chatsProd update
   */
  export type chatsProdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatsProd
     */
    select?: chatsProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatsProd
     */
    omit?: chatsProdOmit<ExtArgs> | null
    /**
     * The data needed to update a chatsProd.
     */
    data: XOR<chatsProdUpdateInput, chatsProdUncheckedUpdateInput>
    /**
     * Choose, which chatsProd to update.
     */
    where: chatsProdWhereUniqueInput
  }

  /**
   * chatsProd updateMany
   */
  export type chatsProdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chatsProds.
     */
    data: XOR<chatsProdUpdateManyMutationInput, chatsProdUncheckedUpdateManyInput>
    /**
     * Filter which chatsProds to update
     */
    where?: chatsProdWhereInput
    /**
     * Limit how many chatsProds to update.
     */
    limit?: number
  }

  /**
   * chatsProd updateManyAndReturn
   */
  export type chatsProdUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatsProd
     */
    select?: chatsProdSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chatsProd
     */
    omit?: chatsProdOmit<ExtArgs> | null
    /**
     * The data used to update chatsProds.
     */
    data: XOR<chatsProdUpdateManyMutationInput, chatsProdUncheckedUpdateManyInput>
    /**
     * Filter which chatsProds to update
     */
    where?: chatsProdWhereInput
    /**
     * Limit how many chatsProds to update.
     */
    limit?: number
  }

  /**
   * chatsProd upsert
   */
  export type chatsProdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatsProd
     */
    select?: chatsProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatsProd
     */
    omit?: chatsProdOmit<ExtArgs> | null
    /**
     * The filter to search for the chatsProd to update in case it exists.
     */
    where: chatsProdWhereUniqueInput
    /**
     * In case the chatsProd found by the `where` argument doesn't exist, create a new chatsProd with this data.
     */
    create: XOR<chatsProdCreateInput, chatsProdUncheckedCreateInput>
    /**
     * In case the chatsProd was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chatsProdUpdateInput, chatsProdUncheckedUpdateInput>
  }

  /**
   * chatsProd delete
   */
  export type chatsProdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatsProd
     */
    select?: chatsProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatsProd
     */
    omit?: chatsProdOmit<ExtArgs> | null
    /**
     * Filter which chatsProd to delete.
     */
    where: chatsProdWhereUniqueInput
  }

  /**
   * chatsProd deleteMany
   */
  export type chatsProdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chatsProds to delete
     */
    where?: chatsProdWhereInput
    /**
     * Limit how many chatsProds to delete.
     */
    limit?: number
  }

  /**
   * chatsProd without action
   */
  export type chatsProdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatsProd
     */
    select?: chatsProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatsProd
     */
    omit?: chatsProdOmit<ExtArgs> | null
  }


  /**
   * Model invalid_tokensDev
   */

  export type AggregateInvalid_tokensDev = {
    _count: Invalid_tokensDevCountAggregateOutputType | null
    _avg: Invalid_tokensDevAvgAggregateOutputType | null
    _sum: Invalid_tokensDevSumAggregateOutputType | null
    _min: Invalid_tokensDevMinAggregateOutputType | null
    _max: Invalid_tokensDevMaxAggregateOutputType | null
  }

  export type Invalid_tokensDevAvgAggregateOutputType = {
    id: number | null
  }

  export type Invalid_tokensDevSumAggregateOutputType = {
    id: number | null
  }

  export type Invalid_tokensDevMinAggregateOutputType = {
    id: number | null
    token: string | null
    tipo: $Enums.TokenTipoDev | null
    invalidado_en: Date | null
  }

  export type Invalid_tokensDevMaxAggregateOutputType = {
    id: number | null
    token: string | null
    tipo: $Enums.TokenTipoDev | null
    invalidado_en: Date | null
  }

  export type Invalid_tokensDevCountAggregateOutputType = {
    id: number
    token: number
    tipo: number
    invalidado_en: number
    _all: number
  }


  export type Invalid_tokensDevAvgAggregateInputType = {
    id?: true
  }

  export type Invalid_tokensDevSumAggregateInputType = {
    id?: true
  }

  export type Invalid_tokensDevMinAggregateInputType = {
    id?: true
    token?: true
    tipo?: true
    invalidado_en?: true
  }

  export type Invalid_tokensDevMaxAggregateInputType = {
    id?: true
    token?: true
    tipo?: true
    invalidado_en?: true
  }

  export type Invalid_tokensDevCountAggregateInputType = {
    id?: true
    token?: true
    tipo?: true
    invalidado_en?: true
    _all?: true
  }

  export type Invalid_tokensDevAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invalid_tokensDev to aggregate.
     */
    where?: invalid_tokensDevWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invalid_tokensDevs to fetch.
     */
    orderBy?: invalid_tokensDevOrderByWithRelationInput | invalid_tokensDevOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: invalid_tokensDevWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invalid_tokensDevs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invalid_tokensDevs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned invalid_tokensDevs
    **/
    _count?: true | Invalid_tokensDevCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Invalid_tokensDevAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Invalid_tokensDevSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Invalid_tokensDevMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Invalid_tokensDevMaxAggregateInputType
  }

  export type GetInvalid_tokensDevAggregateType<T extends Invalid_tokensDevAggregateArgs> = {
        [P in keyof T & keyof AggregateInvalid_tokensDev]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvalid_tokensDev[P]>
      : GetScalarType<T[P], AggregateInvalid_tokensDev[P]>
  }




  export type invalid_tokensDevGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invalid_tokensDevWhereInput
    orderBy?: invalid_tokensDevOrderByWithAggregationInput | invalid_tokensDevOrderByWithAggregationInput[]
    by: Invalid_tokensDevScalarFieldEnum[] | Invalid_tokensDevScalarFieldEnum
    having?: invalid_tokensDevScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Invalid_tokensDevCountAggregateInputType | true
    _avg?: Invalid_tokensDevAvgAggregateInputType
    _sum?: Invalid_tokensDevSumAggregateInputType
    _min?: Invalid_tokensDevMinAggregateInputType
    _max?: Invalid_tokensDevMaxAggregateInputType
  }

  export type Invalid_tokensDevGroupByOutputType = {
    id: number
    token: string
    tipo: $Enums.TokenTipoDev
    invalidado_en: Date
    _count: Invalid_tokensDevCountAggregateOutputType | null
    _avg: Invalid_tokensDevAvgAggregateOutputType | null
    _sum: Invalid_tokensDevSumAggregateOutputType | null
    _min: Invalid_tokensDevMinAggregateOutputType | null
    _max: Invalid_tokensDevMaxAggregateOutputType | null
  }

  type GetInvalid_tokensDevGroupByPayload<T extends invalid_tokensDevGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Invalid_tokensDevGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Invalid_tokensDevGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Invalid_tokensDevGroupByOutputType[P]>
            : GetScalarType<T[P], Invalid_tokensDevGroupByOutputType[P]>
        }
      >
    >


  export type invalid_tokensDevSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    tipo?: boolean
    invalidado_en?: boolean
  }, ExtArgs["result"]["invalid_tokensDev"]>

  export type invalid_tokensDevSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    tipo?: boolean
    invalidado_en?: boolean
  }, ExtArgs["result"]["invalid_tokensDev"]>

  export type invalid_tokensDevSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    tipo?: boolean
    invalidado_en?: boolean
  }, ExtArgs["result"]["invalid_tokensDev"]>

  export type invalid_tokensDevSelectScalar = {
    id?: boolean
    token?: boolean
    tipo?: boolean
    invalidado_en?: boolean
  }

  export type invalid_tokensDevOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "tipo" | "invalidado_en", ExtArgs["result"]["invalid_tokensDev"]>

  export type $invalid_tokensDevPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "invalid_tokensDev"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      token: string
      tipo: $Enums.TokenTipoDev
      invalidado_en: Date
    }, ExtArgs["result"]["invalid_tokensDev"]>
    composites: {}
  }

  type invalid_tokensDevGetPayload<S extends boolean | null | undefined | invalid_tokensDevDefaultArgs> = $Result.GetResult<Prisma.$invalid_tokensDevPayload, S>

  type invalid_tokensDevCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<invalid_tokensDevFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Invalid_tokensDevCountAggregateInputType | true
    }

  export interface invalid_tokensDevDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['invalid_tokensDev'], meta: { name: 'invalid_tokensDev' } }
    /**
     * Find zero or one Invalid_tokensDev that matches the filter.
     * @param {invalid_tokensDevFindUniqueArgs} args - Arguments to find a Invalid_tokensDev
     * @example
     * // Get one Invalid_tokensDev
     * const invalid_tokensDev = await prisma.invalid_tokensDev.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends invalid_tokensDevFindUniqueArgs>(args: SelectSubset<T, invalid_tokensDevFindUniqueArgs<ExtArgs>>): Prisma__invalid_tokensDevClient<$Result.GetResult<Prisma.$invalid_tokensDevPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invalid_tokensDev that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {invalid_tokensDevFindUniqueOrThrowArgs} args - Arguments to find a Invalid_tokensDev
     * @example
     * // Get one Invalid_tokensDev
     * const invalid_tokensDev = await prisma.invalid_tokensDev.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends invalid_tokensDevFindUniqueOrThrowArgs>(args: SelectSubset<T, invalid_tokensDevFindUniqueOrThrowArgs<ExtArgs>>): Prisma__invalid_tokensDevClient<$Result.GetResult<Prisma.$invalid_tokensDevPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invalid_tokensDev that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invalid_tokensDevFindFirstArgs} args - Arguments to find a Invalid_tokensDev
     * @example
     * // Get one Invalid_tokensDev
     * const invalid_tokensDev = await prisma.invalid_tokensDev.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends invalid_tokensDevFindFirstArgs>(args?: SelectSubset<T, invalid_tokensDevFindFirstArgs<ExtArgs>>): Prisma__invalid_tokensDevClient<$Result.GetResult<Prisma.$invalid_tokensDevPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invalid_tokensDev that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invalid_tokensDevFindFirstOrThrowArgs} args - Arguments to find a Invalid_tokensDev
     * @example
     * // Get one Invalid_tokensDev
     * const invalid_tokensDev = await prisma.invalid_tokensDev.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends invalid_tokensDevFindFirstOrThrowArgs>(args?: SelectSubset<T, invalid_tokensDevFindFirstOrThrowArgs<ExtArgs>>): Prisma__invalid_tokensDevClient<$Result.GetResult<Prisma.$invalid_tokensDevPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invalid_tokensDevs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invalid_tokensDevFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invalid_tokensDevs
     * const invalid_tokensDevs = await prisma.invalid_tokensDev.findMany()
     * 
     * // Get first 10 Invalid_tokensDevs
     * const invalid_tokensDevs = await prisma.invalid_tokensDev.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invalid_tokensDevWithIdOnly = await prisma.invalid_tokensDev.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends invalid_tokensDevFindManyArgs>(args?: SelectSubset<T, invalid_tokensDevFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invalid_tokensDevPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invalid_tokensDev.
     * @param {invalid_tokensDevCreateArgs} args - Arguments to create a Invalid_tokensDev.
     * @example
     * // Create one Invalid_tokensDev
     * const Invalid_tokensDev = await prisma.invalid_tokensDev.create({
     *   data: {
     *     // ... data to create a Invalid_tokensDev
     *   }
     * })
     * 
     */
    create<T extends invalid_tokensDevCreateArgs>(args: SelectSubset<T, invalid_tokensDevCreateArgs<ExtArgs>>): Prisma__invalid_tokensDevClient<$Result.GetResult<Prisma.$invalid_tokensDevPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invalid_tokensDevs.
     * @param {invalid_tokensDevCreateManyArgs} args - Arguments to create many Invalid_tokensDevs.
     * @example
     * // Create many Invalid_tokensDevs
     * const invalid_tokensDev = await prisma.invalid_tokensDev.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends invalid_tokensDevCreateManyArgs>(args?: SelectSubset<T, invalid_tokensDevCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invalid_tokensDevs and returns the data saved in the database.
     * @param {invalid_tokensDevCreateManyAndReturnArgs} args - Arguments to create many Invalid_tokensDevs.
     * @example
     * // Create many Invalid_tokensDevs
     * const invalid_tokensDev = await prisma.invalid_tokensDev.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invalid_tokensDevs and only return the `id`
     * const invalid_tokensDevWithIdOnly = await prisma.invalid_tokensDev.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends invalid_tokensDevCreateManyAndReturnArgs>(args?: SelectSubset<T, invalid_tokensDevCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invalid_tokensDevPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invalid_tokensDev.
     * @param {invalid_tokensDevDeleteArgs} args - Arguments to delete one Invalid_tokensDev.
     * @example
     * // Delete one Invalid_tokensDev
     * const Invalid_tokensDev = await prisma.invalid_tokensDev.delete({
     *   where: {
     *     // ... filter to delete one Invalid_tokensDev
     *   }
     * })
     * 
     */
    delete<T extends invalid_tokensDevDeleteArgs>(args: SelectSubset<T, invalid_tokensDevDeleteArgs<ExtArgs>>): Prisma__invalid_tokensDevClient<$Result.GetResult<Prisma.$invalid_tokensDevPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invalid_tokensDev.
     * @param {invalid_tokensDevUpdateArgs} args - Arguments to update one Invalid_tokensDev.
     * @example
     * // Update one Invalid_tokensDev
     * const invalid_tokensDev = await prisma.invalid_tokensDev.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends invalid_tokensDevUpdateArgs>(args: SelectSubset<T, invalid_tokensDevUpdateArgs<ExtArgs>>): Prisma__invalid_tokensDevClient<$Result.GetResult<Prisma.$invalid_tokensDevPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invalid_tokensDevs.
     * @param {invalid_tokensDevDeleteManyArgs} args - Arguments to filter Invalid_tokensDevs to delete.
     * @example
     * // Delete a few Invalid_tokensDevs
     * const { count } = await prisma.invalid_tokensDev.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends invalid_tokensDevDeleteManyArgs>(args?: SelectSubset<T, invalid_tokensDevDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invalid_tokensDevs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invalid_tokensDevUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invalid_tokensDevs
     * const invalid_tokensDev = await prisma.invalid_tokensDev.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends invalid_tokensDevUpdateManyArgs>(args: SelectSubset<T, invalid_tokensDevUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invalid_tokensDevs and returns the data updated in the database.
     * @param {invalid_tokensDevUpdateManyAndReturnArgs} args - Arguments to update many Invalid_tokensDevs.
     * @example
     * // Update many Invalid_tokensDevs
     * const invalid_tokensDev = await prisma.invalid_tokensDev.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invalid_tokensDevs and only return the `id`
     * const invalid_tokensDevWithIdOnly = await prisma.invalid_tokensDev.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends invalid_tokensDevUpdateManyAndReturnArgs>(args: SelectSubset<T, invalid_tokensDevUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invalid_tokensDevPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invalid_tokensDev.
     * @param {invalid_tokensDevUpsertArgs} args - Arguments to update or create a Invalid_tokensDev.
     * @example
     * // Update or create a Invalid_tokensDev
     * const invalid_tokensDev = await prisma.invalid_tokensDev.upsert({
     *   create: {
     *     // ... data to create a Invalid_tokensDev
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invalid_tokensDev we want to update
     *   }
     * })
     */
    upsert<T extends invalid_tokensDevUpsertArgs>(args: SelectSubset<T, invalid_tokensDevUpsertArgs<ExtArgs>>): Prisma__invalid_tokensDevClient<$Result.GetResult<Prisma.$invalid_tokensDevPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invalid_tokensDevs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invalid_tokensDevCountArgs} args - Arguments to filter Invalid_tokensDevs to count.
     * @example
     * // Count the number of Invalid_tokensDevs
     * const count = await prisma.invalid_tokensDev.count({
     *   where: {
     *     // ... the filter for the Invalid_tokensDevs we want to count
     *   }
     * })
    **/
    count<T extends invalid_tokensDevCountArgs>(
      args?: Subset<T, invalid_tokensDevCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Invalid_tokensDevCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invalid_tokensDev.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Invalid_tokensDevAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Invalid_tokensDevAggregateArgs>(args: Subset<T, Invalid_tokensDevAggregateArgs>): Prisma.PrismaPromise<GetInvalid_tokensDevAggregateType<T>>

    /**
     * Group by Invalid_tokensDev.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invalid_tokensDevGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends invalid_tokensDevGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: invalid_tokensDevGroupByArgs['orderBy'] }
        : { orderBy?: invalid_tokensDevGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, invalid_tokensDevGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvalid_tokensDevGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the invalid_tokensDev model
   */
  readonly fields: invalid_tokensDevFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for invalid_tokensDev.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__invalid_tokensDevClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the invalid_tokensDev model
   */
  interface invalid_tokensDevFieldRefs {
    readonly id: FieldRef<"invalid_tokensDev", 'Int'>
    readonly token: FieldRef<"invalid_tokensDev", 'String'>
    readonly tipo: FieldRef<"invalid_tokensDev", 'TokenTipoDev'>
    readonly invalidado_en: FieldRef<"invalid_tokensDev", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * invalid_tokensDev findUnique
   */
  export type invalid_tokensDevFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invalid_tokensDev
     */
    select?: invalid_tokensDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invalid_tokensDev
     */
    omit?: invalid_tokensDevOmit<ExtArgs> | null
    /**
     * Filter, which invalid_tokensDev to fetch.
     */
    where: invalid_tokensDevWhereUniqueInput
  }

  /**
   * invalid_tokensDev findUniqueOrThrow
   */
  export type invalid_tokensDevFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invalid_tokensDev
     */
    select?: invalid_tokensDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invalid_tokensDev
     */
    omit?: invalid_tokensDevOmit<ExtArgs> | null
    /**
     * Filter, which invalid_tokensDev to fetch.
     */
    where: invalid_tokensDevWhereUniqueInput
  }

  /**
   * invalid_tokensDev findFirst
   */
  export type invalid_tokensDevFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invalid_tokensDev
     */
    select?: invalid_tokensDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invalid_tokensDev
     */
    omit?: invalid_tokensDevOmit<ExtArgs> | null
    /**
     * Filter, which invalid_tokensDev to fetch.
     */
    where?: invalid_tokensDevWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invalid_tokensDevs to fetch.
     */
    orderBy?: invalid_tokensDevOrderByWithRelationInput | invalid_tokensDevOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invalid_tokensDevs.
     */
    cursor?: invalid_tokensDevWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invalid_tokensDevs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invalid_tokensDevs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invalid_tokensDevs.
     */
    distinct?: Invalid_tokensDevScalarFieldEnum | Invalid_tokensDevScalarFieldEnum[]
  }

  /**
   * invalid_tokensDev findFirstOrThrow
   */
  export type invalid_tokensDevFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invalid_tokensDev
     */
    select?: invalid_tokensDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invalid_tokensDev
     */
    omit?: invalid_tokensDevOmit<ExtArgs> | null
    /**
     * Filter, which invalid_tokensDev to fetch.
     */
    where?: invalid_tokensDevWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invalid_tokensDevs to fetch.
     */
    orderBy?: invalid_tokensDevOrderByWithRelationInput | invalid_tokensDevOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invalid_tokensDevs.
     */
    cursor?: invalid_tokensDevWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invalid_tokensDevs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invalid_tokensDevs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invalid_tokensDevs.
     */
    distinct?: Invalid_tokensDevScalarFieldEnum | Invalid_tokensDevScalarFieldEnum[]
  }

  /**
   * invalid_tokensDev findMany
   */
  export type invalid_tokensDevFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invalid_tokensDev
     */
    select?: invalid_tokensDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invalid_tokensDev
     */
    omit?: invalid_tokensDevOmit<ExtArgs> | null
    /**
     * Filter, which invalid_tokensDevs to fetch.
     */
    where?: invalid_tokensDevWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invalid_tokensDevs to fetch.
     */
    orderBy?: invalid_tokensDevOrderByWithRelationInput | invalid_tokensDevOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing invalid_tokensDevs.
     */
    cursor?: invalid_tokensDevWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invalid_tokensDevs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invalid_tokensDevs.
     */
    skip?: number
    distinct?: Invalid_tokensDevScalarFieldEnum | Invalid_tokensDevScalarFieldEnum[]
  }

  /**
   * invalid_tokensDev create
   */
  export type invalid_tokensDevCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invalid_tokensDev
     */
    select?: invalid_tokensDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invalid_tokensDev
     */
    omit?: invalid_tokensDevOmit<ExtArgs> | null
    /**
     * The data needed to create a invalid_tokensDev.
     */
    data: XOR<invalid_tokensDevCreateInput, invalid_tokensDevUncheckedCreateInput>
  }

  /**
   * invalid_tokensDev createMany
   */
  export type invalid_tokensDevCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many invalid_tokensDevs.
     */
    data: invalid_tokensDevCreateManyInput | invalid_tokensDevCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * invalid_tokensDev createManyAndReturn
   */
  export type invalid_tokensDevCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invalid_tokensDev
     */
    select?: invalid_tokensDevSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the invalid_tokensDev
     */
    omit?: invalid_tokensDevOmit<ExtArgs> | null
    /**
     * The data used to create many invalid_tokensDevs.
     */
    data: invalid_tokensDevCreateManyInput | invalid_tokensDevCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * invalid_tokensDev update
   */
  export type invalid_tokensDevUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invalid_tokensDev
     */
    select?: invalid_tokensDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invalid_tokensDev
     */
    omit?: invalid_tokensDevOmit<ExtArgs> | null
    /**
     * The data needed to update a invalid_tokensDev.
     */
    data: XOR<invalid_tokensDevUpdateInput, invalid_tokensDevUncheckedUpdateInput>
    /**
     * Choose, which invalid_tokensDev to update.
     */
    where: invalid_tokensDevWhereUniqueInput
  }

  /**
   * invalid_tokensDev updateMany
   */
  export type invalid_tokensDevUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update invalid_tokensDevs.
     */
    data: XOR<invalid_tokensDevUpdateManyMutationInput, invalid_tokensDevUncheckedUpdateManyInput>
    /**
     * Filter which invalid_tokensDevs to update
     */
    where?: invalid_tokensDevWhereInput
    /**
     * Limit how many invalid_tokensDevs to update.
     */
    limit?: number
  }

  /**
   * invalid_tokensDev updateManyAndReturn
   */
  export type invalid_tokensDevUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invalid_tokensDev
     */
    select?: invalid_tokensDevSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the invalid_tokensDev
     */
    omit?: invalid_tokensDevOmit<ExtArgs> | null
    /**
     * The data used to update invalid_tokensDevs.
     */
    data: XOR<invalid_tokensDevUpdateManyMutationInput, invalid_tokensDevUncheckedUpdateManyInput>
    /**
     * Filter which invalid_tokensDevs to update
     */
    where?: invalid_tokensDevWhereInput
    /**
     * Limit how many invalid_tokensDevs to update.
     */
    limit?: number
  }

  /**
   * invalid_tokensDev upsert
   */
  export type invalid_tokensDevUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invalid_tokensDev
     */
    select?: invalid_tokensDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invalid_tokensDev
     */
    omit?: invalid_tokensDevOmit<ExtArgs> | null
    /**
     * The filter to search for the invalid_tokensDev to update in case it exists.
     */
    where: invalid_tokensDevWhereUniqueInput
    /**
     * In case the invalid_tokensDev found by the `where` argument doesn't exist, create a new invalid_tokensDev with this data.
     */
    create: XOR<invalid_tokensDevCreateInput, invalid_tokensDevUncheckedCreateInput>
    /**
     * In case the invalid_tokensDev was found with the provided `where` argument, update it with this data.
     */
    update: XOR<invalid_tokensDevUpdateInput, invalid_tokensDevUncheckedUpdateInput>
  }

  /**
   * invalid_tokensDev delete
   */
  export type invalid_tokensDevDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invalid_tokensDev
     */
    select?: invalid_tokensDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invalid_tokensDev
     */
    omit?: invalid_tokensDevOmit<ExtArgs> | null
    /**
     * Filter which invalid_tokensDev to delete.
     */
    where: invalid_tokensDevWhereUniqueInput
  }

  /**
   * invalid_tokensDev deleteMany
   */
  export type invalid_tokensDevDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invalid_tokensDevs to delete
     */
    where?: invalid_tokensDevWhereInput
    /**
     * Limit how many invalid_tokensDevs to delete.
     */
    limit?: number
  }

  /**
   * invalid_tokensDev without action
   */
  export type invalid_tokensDevDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invalid_tokensDev
     */
    select?: invalid_tokensDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invalid_tokensDev
     */
    omit?: invalid_tokensDevOmit<ExtArgs> | null
  }


  /**
   * Model invalid_tokensProd
   */

  export type AggregateInvalid_tokensProd = {
    _count: Invalid_tokensProdCountAggregateOutputType | null
    _avg: Invalid_tokensProdAvgAggregateOutputType | null
    _sum: Invalid_tokensProdSumAggregateOutputType | null
    _min: Invalid_tokensProdMinAggregateOutputType | null
    _max: Invalid_tokensProdMaxAggregateOutputType | null
  }

  export type Invalid_tokensProdAvgAggregateOutputType = {
    id: number | null
  }

  export type Invalid_tokensProdSumAggregateOutputType = {
    id: number | null
  }

  export type Invalid_tokensProdMinAggregateOutputType = {
    id: number | null
    token: string | null
    tipo: $Enums.TokenTipoProd | null
    invalidado_en: Date | null
  }

  export type Invalid_tokensProdMaxAggregateOutputType = {
    id: number | null
    token: string | null
    tipo: $Enums.TokenTipoProd | null
    invalidado_en: Date | null
  }

  export type Invalid_tokensProdCountAggregateOutputType = {
    id: number
    token: number
    tipo: number
    invalidado_en: number
    _all: number
  }


  export type Invalid_tokensProdAvgAggregateInputType = {
    id?: true
  }

  export type Invalid_tokensProdSumAggregateInputType = {
    id?: true
  }

  export type Invalid_tokensProdMinAggregateInputType = {
    id?: true
    token?: true
    tipo?: true
    invalidado_en?: true
  }

  export type Invalid_tokensProdMaxAggregateInputType = {
    id?: true
    token?: true
    tipo?: true
    invalidado_en?: true
  }

  export type Invalid_tokensProdCountAggregateInputType = {
    id?: true
    token?: true
    tipo?: true
    invalidado_en?: true
    _all?: true
  }

  export type Invalid_tokensProdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invalid_tokensProd to aggregate.
     */
    where?: invalid_tokensProdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invalid_tokensProds to fetch.
     */
    orderBy?: invalid_tokensProdOrderByWithRelationInput | invalid_tokensProdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: invalid_tokensProdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invalid_tokensProds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invalid_tokensProds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned invalid_tokensProds
    **/
    _count?: true | Invalid_tokensProdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Invalid_tokensProdAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Invalid_tokensProdSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Invalid_tokensProdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Invalid_tokensProdMaxAggregateInputType
  }

  export type GetInvalid_tokensProdAggregateType<T extends Invalid_tokensProdAggregateArgs> = {
        [P in keyof T & keyof AggregateInvalid_tokensProd]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvalid_tokensProd[P]>
      : GetScalarType<T[P], AggregateInvalid_tokensProd[P]>
  }




  export type invalid_tokensProdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invalid_tokensProdWhereInput
    orderBy?: invalid_tokensProdOrderByWithAggregationInput | invalid_tokensProdOrderByWithAggregationInput[]
    by: Invalid_tokensProdScalarFieldEnum[] | Invalid_tokensProdScalarFieldEnum
    having?: invalid_tokensProdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Invalid_tokensProdCountAggregateInputType | true
    _avg?: Invalid_tokensProdAvgAggregateInputType
    _sum?: Invalid_tokensProdSumAggregateInputType
    _min?: Invalid_tokensProdMinAggregateInputType
    _max?: Invalid_tokensProdMaxAggregateInputType
  }

  export type Invalid_tokensProdGroupByOutputType = {
    id: number
    token: string
    tipo: $Enums.TokenTipoProd
    invalidado_en: Date
    _count: Invalid_tokensProdCountAggregateOutputType | null
    _avg: Invalid_tokensProdAvgAggregateOutputType | null
    _sum: Invalid_tokensProdSumAggregateOutputType | null
    _min: Invalid_tokensProdMinAggregateOutputType | null
    _max: Invalid_tokensProdMaxAggregateOutputType | null
  }

  type GetInvalid_tokensProdGroupByPayload<T extends invalid_tokensProdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Invalid_tokensProdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Invalid_tokensProdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Invalid_tokensProdGroupByOutputType[P]>
            : GetScalarType<T[P], Invalid_tokensProdGroupByOutputType[P]>
        }
      >
    >


  export type invalid_tokensProdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    tipo?: boolean
    invalidado_en?: boolean
  }, ExtArgs["result"]["invalid_tokensProd"]>

  export type invalid_tokensProdSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    tipo?: boolean
    invalidado_en?: boolean
  }, ExtArgs["result"]["invalid_tokensProd"]>

  export type invalid_tokensProdSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    tipo?: boolean
    invalidado_en?: boolean
  }, ExtArgs["result"]["invalid_tokensProd"]>

  export type invalid_tokensProdSelectScalar = {
    id?: boolean
    token?: boolean
    tipo?: boolean
    invalidado_en?: boolean
  }

  export type invalid_tokensProdOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "tipo" | "invalidado_en", ExtArgs["result"]["invalid_tokensProd"]>

  export type $invalid_tokensProdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "invalid_tokensProd"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      token: string
      tipo: $Enums.TokenTipoProd
      invalidado_en: Date
    }, ExtArgs["result"]["invalid_tokensProd"]>
    composites: {}
  }

  type invalid_tokensProdGetPayload<S extends boolean | null | undefined | invalid_tokensProdDefaultArgs> = $Result.GetResult<Prisma.$invalid_tokensProdPayload, S>

  type invalid_tokensProdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<invalid_tokensProdFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Invalid_tokensProdCountAggregateInputType | true
    }

  export interface invalid_tokensProdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['invalid_tokensProd'], meta: { name: 'invalid_tokensProd' } }
    /**
     * Find zero or one Invalid_tokensProd that matches the filter.
     * @param {invalid_tokensProdFindUniqueArgs} args - Arguments to find a Invalid_tokensProd
     * @example
     * // Get one Invalid_tokensProd
     * const invalid_tokensProd = await prisma.invalid_tokensProd.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends invalid_tokensProdFindUniqueArgs>(args: SelectSubset<T, invalid_tokensProdFindUniqueArgs<ExtArgs>>): Prisma__invalid_tokensProdClient<$Result.GetResult<Prisma.$invalid_tokensProdPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invalid_tokensProd that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {invalid_tokensProdFindUniqueOrThrowArgs} args - Arguments to find a Invalid_tokensProd
     * @example
     * // Get one Invalid_tokensProd
     * const invalid_tokensProd = await prisma.invalid_tokensProd.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends invalid_tokensProdFindUniqueOrThrowArgs>(args: SelectSubset<T, invalid_tokensProdFindUniqueOrThrowArgs<ExtArgs>>): Prisma__invalid_tokensProdClient<$Result.GetResult<Prisma.$invalid_tokensProdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invalid_tokensProd that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invalid_tokensProdFindFirstArgs} args - Arguments to find a Invalid_tokensProd
     * @example
     * // Get one Invalid_tokensProd
     * const invalid_tokensProd = await prisma.invalid_tokensProd.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends invalid_tokensProdFindFirstArgs>(args?: SelectSubset<T, invalid_tokensProdFindFirstArgs<ExtArgs>>): Prisma__invalid_tokensProdClient<$Result.GetResult<Prisma.$invalid_tokensProdPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invalid_tokensProd that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invalid_tokensProdFindFirstOrThrowArgs} args - Arguments to find a Invalid_tokensProd
     * @example
     * // Get one Invalid_tokensProd
     * const invalid_tokensProd = await prisma.invalid_tokensProd.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends invalid_tokensProdFindFirstOrThrowArgs>(args?: SelectSubset<T, invalid_tokensProdFindFirstOrThrowArgs<ExtArgs>>): Prisma__invalid_tokensProdClient<$Result.GetResult<Prisma.$invalid_tokensProdPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invalid_tokensProds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invalid_tokensProdFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invalid_tokensProds
     * const invalid_tokensProds = await prisma.invalid_tokensProd.findMany()
     * 
     * // Get first 10 Invalid_tokensProds
     * const invalid_tokensProds = await prisma.invalid_tokensProd.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invalid_tokensProdWithIdOnly = await prisma.invalid_tokensProd.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends invalid_tokensProdFindManyArgs>(args?: SelectSubset<T, invalid_tokensProdFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invalid_tokensProdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invalid_tokensProd.
     * @param {invalid_tokensProdCreateArgs} args - Arguments to create a Invalid_tokensProd.
     * @example
     * // Create one Invalid_tokensProd
     * const Invalid_tokensProd = await prisma.invalid_tokensProd.create({
     *   data: {
     *     // ... data to create a Invalid_tokensProd
     *   }
     * })
     * 
     */
    create<T extends invalid_tokensProdCreateArgs>(args: SelectSubset<T, invalid_tokensProdCreateArgs<ExtArgs>>): Prisma__invalid_tokensProdClient<$Result.GetResult<Prisma.$invalid_tokensProdPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invalid_tokensProds.
     * @param {invalid_tokensProdCreateManyArgs} args - Arguments to create many Invalid_tokensProds.
     * @example
     * // Create many Invalid_tokensProds
     * const invalid_tokensProd = await prisma.invalid_tokensProd.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends invalid_tokensProdCreateManyArgs>(args?: SelectSubset<T, invalid_tokensProdCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invalid_tokensProds and returns the data saved in the database.
     * @param {invalid_tokensProdCreateManyAndReturnArgs} args - Arguments to create many Invalid_tokensProds.
     * @example
     * // Create many Invalid_tokensProds
     * const invalid_tokensProd = await prisma.invalid_tokensProd.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invalid_tokensProds and only return the `id`
     * const invalid_tokensProdWithIdOnly = await prisma.invalid_tokensProd.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends invalid_tokensProdCreateManyAndReturnArgs>(args?: SelectSubset<T, invalid_tokensProdCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invalid_tokensProdPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invalid_tokensProd.
     * @param {invalid_tokensProdDeleteArgs} args - Arguments to delete one Invalid_tokensProd.
     * @example
     * // Delete one Invalid_tokensProd
     * const Invalid_tokensProd = await prisma.invalid_tokensProd.delete({
     *   where: {
     *     // ... filter to delete one Invalid_tokensProd
     *   }
     * })
     * 
     */
    delete<T extends invalid_tokensProdDeleteArgs>(args: SelectSubset<T, invalid_tokensProdDeleteArgs<ExtArgs>>): Prisma__invalid_tokensProdClient<$Result.GetResult<Prisma.$invalid_tokensProdPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invalid_tokensProd.
     * @param {invalid_tokensProdUpdateArgs} args - Arguments to update one Invalid_tokensProd.
     * @example
     * // Update one Invalid_tokensProd
     * const invalid_tokensProd = await prisma.invalid_tokensProd.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends invalid_tokensProdUpdateArgs>(args: SelectSubset<T, invalid_tokensProdUpdateArgs<ExtArgs>>): Prisma__invalid_tokensProdClient<$Result.GetResult<Prisma.$invalid_tokensProdPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invalid_tokensProds.
     * @param {invalid_tokensProdDeleteManyArgs} args - Arguments to filter Invalid_tokensProds to delete.
     * @example
     * // Delete a few Invalid_tokensProds
     * const { count } = await prisma.invalid_tokensProd.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends invalid_tokensProdDeleteManyArgs>(args?: SelectSubset<T, invalid_tokensProdDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invalid_tokensProds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invalid_tokensProdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invalid_tokensProds
     * const invalid_tokensProd = await prisma.invalid_tokensProd.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends invalid_tokensProdUpdateManyArgs>(args: SelectSubset<T, invalid_tokensProdUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invalid_tokensProds and returns the data updated in the database.
     * @param {invalid_tokensProdUpdateManyAndReturnArgs} args - Arguments to update many Invalid_tokensProds.
     * @example
     * // Update many Invalid_tokensProds
     * const invalid_tokensProd = await prisma.invalid_tokensProd.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invalid_tokensProds and only return the `id`
     * const invalid_tokensProdWithIdOnly = await prisma.invalid_tokensProd.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends invalid_tokensProdUpdateManyAndReturnArgs>(args: SelectSubset<T, invalid_tokensProdUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invalid_tokensProdPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invalid_tokensProd.
     * @param {invalid_tokensProdUpsertArgs} args - Arguments to update or create a Invalid_tokensProd.
     * @example
     * // Update or create a Invalid_tokensProd
     * const invalid_tokensProd = await prisma.invalid_tokensProd.upsert({
     *   create: {
     *     // ... data to create a Invalid_tokensProd
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invalid_tokensProd we want to update
     *   }
     * })
     */
    upsert<T extends invalid_tokensProdUpsertArgs>(args: SelectSubset<T, invalid_tokensProdUpsertArgs<ExtArgs>>): Prisma__invalid_tokensProdClient<$Result.GetResult<Prisma.$invalid_tokensProdPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invalid_tokensProds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invalid_tokensProdCountArgs} args - Arguments to filter Invalid_tokensProds to count.
     * @example
     * // Count the number of Invalid_tokensProds
     * const count = await prisma.invalid_tokensProd.count({
     *   where: {
     *     // ... the filter for the Invalid_tokensProds we want to count
     *   }
     * })
    **/
    count<T extends invalid_tokensProdCountArgs>(
      args?: Subset<T, invalid_tokensProdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Invalid_tokensProdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invalid_tokensProd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Invalid_tokensProdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Invalid_tokensProdAggregateArgs>(args: Subset<T, Invalid_tokensProdAggregateArgs>): Prisma.PrismaPromise<GetInvalid_tokensProdAggregateType<T>>

    /**
     * Group by Invalid_tokensProd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invalid_tokensProdGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends invalid_tokensProdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: invalid_tokensProdGroupByArgs['orderBy'] }
        : { orderBy?: invalid_tokensProdGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, invalid_tokensProdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvalid_tokensProdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the invalid_tokensProd model
   */
  readonly fields: invalid_tokensProdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for invalid_tokensProd.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__invalid_tokensProdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the invalid_tokensProd model
   */
  interface invalid_tokensProdFieldRefs {
    readonly id: FieldRef<"invalid_tokensProd", 'Int'>
    readonly token: FieldRef<"invalid_tokensProd", 'String'>
    readonly tipo: FieldRef<"invalid_tokensProd", 'TokenTipoProd'>
    readonly invalidado_en: FieldRef<"invalid_tokensProd", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * invalid_tokensProd findUnique
   */
  export type invalid_tokensProdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invalid_tokensProd
     */
    select?: invalid_tokensProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invalid_tokensProd
     */
    omit?: invalid_tokensProdOmit<ExtArgs> | null
    /**
     * Filter, which invalid_tokensProd to fetch.
     */
    where: invalid_tokensProdWhereUniqueInput
  }

  /**
   * invalid_tokensProd findUniqueOrThrow
   */
  export type invalid_tokensProdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invalid_tokensProd
     */
    select?: invalid_tokensProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invalid_tokensProd
     */
    omit?: invalid_tokensProdOmit<ExtArgs> | null
    /**
     * Filter, which invalid_tokensProd to fetch.
     */
    where: invalid_tokensProdWhereUniqueInput
  }

  /**
   * invalid_tokensProd findFirst
   */
  export type invalid_tokensProdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invalid_tokensProd
     */
    select?: invalid_tokensProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invalid_tokensProd
     */
    omit?: invalid_tokensProdOmit<ExtArgs> | null
    /**
     * Filter, which invalid_tokensProd to fetch.
     */
    where?: invalid_tokensProdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invalid_tokensProds to fetch.
     */
    orderBy?: invalid_tokensProdOrderByWithRelationInput | invalid_tokensProdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invalid_tokensProds.
     */
    cursor?: invalid_tokensProdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invalid_tokensProds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invalid_tokensProds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invalid_tokensProds.
     */
    distinct?: Invalid_tokensProdScalarFieldEnum | Invalid_tokensProdScalarFieldEnum[]
  }

  /**
   * invalid_tokensProd findFirstOrThrow
   */
  export type invalid_tokensProdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invalid_tokensProd
     */
    select?: invalid_tokensProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invalid_tokensProd
     */
    omit?: invalid_tokensProdOmit<ExtArgs> | null
    /**
     * Filter, which invalid_tokensProd to fetch.
     */
    where?: invalid_tokensProdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invalid_tokensProds to fetch.
     */
    orderBy?: invalid_tokensProdOrderByWithRelationInput | invalid_tokensProdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invalid_tokensProds.
     */
    cursor?: invalid_tokensProdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invalid_tokensProds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invalid_tokensProds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invalid_tokensProds.
     */
    distinct?: Invalid_tokensProdScalarFieldEnum | Invalid_tokensProdScalarFieldEnum[]
  }

  /**
   * invalid_tokensProd findMany
   */
  export type invalid_tokensProdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invalid_tokensProd
     */
    select?: invalid_tokensProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invalid_tokensProd
     */
    omit?: invalid_tokensProdOmit<ExtArgs> | null
    /**
     * Filter, which invalid_tokensProds to fetch.
     */
    where?: invalid_tokensProdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invalid_tokensProds to fetch.
     */
    orderBy?: invalid_tokensProdOrderByWithRelationInput | invalid_tokensProdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing invalid_tokensProds.
     */
    cursor?: invalid_tokensProdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invalid_tokensProds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invalid_tokensProds.
     */
    skip?: number
    distinct?: Invalid_tokensProdScalarFieldEnum | Invalid_tokensProdScalarFieldEnum[]
  }

  /**
   * invalid_tokensProd create
   */
  export type invalid_tokensProdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invalid_tokensProd
     */
    select?: invalid_tokensProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invalid_tokensProd
     */
    omit?: invalid_tokensProdOmit<ExtArgs> | null
    /**
     * The data needed to create a invalid_tokensProd.
     */
    data: XOR<invalid_tokensProdCreateInput, invalid_tokensProdUncheckedCreateInput>
  }

  /**
   * invalid_tokensProd createMany
   */
  export type invalid_tokensProdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many invalid_tokensProds.
     */
    data: invalid_tokensProdCreateManyInput | invalid_tokensProdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * invalid_tokensProd createManyAndReturn
   */
  export type invalid_tokensProdCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invalid_tokensProd
     */
    select?: invalid_tokensProdSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the invalid_tokensProd
     */
    omit?: invalid_tokensProdOmit<ExtArgs> | null
    /**
     * The data used to create many invalid_tokensProds.
     */
    data: invalid_tokensProdCreateManyInput | invalid_tokensProdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * invalid_tokensProd update
   */
  export type invalid_tokensProdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invalid_tokensProd
     */
    select?: invalid_tokensProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invalid_tokensProd
     */
    omit?: invalid_tokensProdOmit<ExtArgs> | null
    /**
     * The data needed to update a invalid_tokensProd.
     */
    data: XOR<invalid_tokensProdUpdateInput, invalid_tokensProdUncheckedUpdateInput>
    /**
     * Choose, which invalid_tokensProd to update.
     */
    where: invalid_tokensProdWhereUniqueInput
  }

  /**
   * invalid_tokensProd updateMany
   */
  export type invalid_tokensProdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update invalid_tokensProds.
     */
    data: XOR<invalid_tokensProdUpdateManyMutationInput, invalid_tokensProdUncheckedUpdateManyInput>
    /**
     * Filter which invalid_tokensProds to update
     */
    where?: invalid_tokensProdWhereInput
    /**
     * Limit how many invalid_tokensProds to update.
     */
    limit?: number
  }

  /**
   * invalid_tokensProd updateManyAndReturn
   */
  export type invalid_tokensProdUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invalid_tokensProd
     */
    select?: invalid_tokensProdSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the invalid_tokensProd
     */
    omit?: invalid_tokensProdOmit<ExtArgs> | null
    /**
     * The data used to update invalid_tokensProds.
     */
    data: XOR<invalid_tokensProdUpdateManyMutationInput, invalid_tokensProdUncheckedUpdateManyInput>
    /**
     * Filter which invalid_tokensProds to update
     */
    where?: invalid_tokensProdWhereInput
    /**
     * Limit how many invalid_tokensProds to update.
     */
    limit?: number
  }

  /**
   * invalid_tokensProd upsert
   */
  export type invalid_tokensProdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invalid_tokensProd
     */
    select?: invalid_tokensProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invalid_tokensProd
     */
    omit?: invalid_tokensProdOmit<ExtArgs> | null
    /**
     * The filter to search for the invalid_tokensProd to update in case it exists.
     */
    where: invalid_tokensProdWhereUniqueInput
    /**
     * In case the invalid_tokensProd found by the `where` argument doesn't exist, create a new invalid_tokensProd with this data.
     */
    create: XOR<invalid_tokensProdCreateInput, invalid_tokensProdUncheckedCreateInput>
    /**
     * In case the invalid_tokensProd was found with the provided `where` argument, update it with this data.
     */
    update: XOR<invalid_tokensProdUpdateInput, invalid_tokensProdUncheckedUpdateInput>
  }

  /**
   * invalid_tokensProd delete
   */
  export type invalid_tokensProdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invalid_tokensProd
     */
    select?: invalid_tokensProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invalid_tokensProd
     */
    omit?: invalid_tokensProdOmit<ExtArgs> | null
    /**
     * Filter which invalid_tokensProd to delete.
     */
    where: invalid_tokensProdWhereUniqueInput
  }

  /**
   * invalid_tokensProd deleteMany
   */
  export type invalid_tokensProdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invalid_tokensProds to delete
     */
    where?: invalid_tokensProdWhereInput
    /**
     * Limit how many invalid_tokensProds to delete.
     */
    limit?: number
  }

  /**
   * invalid_tokensProd without action
   */
  export type invalid_tokensProdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invalid_tokensProd
     */
    select?: invalid_tokensProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invalid_tokensProd
     */
    omit?: invalid_tokensProdOmit<ExtArgs> | null
  }


  /**
   * Model messagesDev
   */

  export type AggregateMessagesDev = {
    _count: MessagesDevCountAggregateOutputType | null
    _avg: MessagesDevAvgAggregateOutputType | null
    _sum: MessagesDevSumAggregateOutputType | null
    _min: MessagesDevMinAggregateOutputType | null
    _max: MessagesDevMaxAggregateOutputType | null
  }

  export type MessagesDevAvgAggregateOutputType = {
    id: number | null
    chat_id: number | null
  }

  export type MessagesDevSumAggregateOutputType = {
    id: number | null
    chat_id: number | null
  }

  export type MessagesDevMinAggregateOutputType = {
    id: number | null
    chat_id: number | null
    remitente: $Enums.RemitenteTipoDev | null
    contenido: string | null
    creado_en: Date | null
  }

  export type MessagesDevMaxAggregateOutputType = {
    id: number | null
    chat_id: number | null
    remitente: $Enums.RemitenteTipoDev | null
    contenido: string | null
    creado_en: Date | null
  }

  export type MessagesDevCountAggregateOutputType = {
    id: number
    chat_id: number
    remitente: number
    contenido: number
    creado_en: number
    _all: number
  }


  export type MessagesDevAvgAggregateInputType = {
    id?: true
    chat_id?: true
  }

  export type MessagesDevSumAggregateInputType = {
    id?: true
    chat_id?: true
  }

  export type MessagesDevMinAggregateInputType = {
    id?: true
    chat_id?: true
    remitente?: true
    contenido?: true
    creado_en?: true
  }

  export type MessagesDevMaxAggregateInputType = {
    id?: true
    chat_id?: true
    remitente?: true
    contenido?: true
    creado_en?: true
  }

  export type MessagesDevCountAggregateInputType = {
    id?: true
    chat_id?: true
    remitente?: true
    contenido?: true
    creado_en?: true
    _all?: true
  }

  export type MessagesDevAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messagesDev to aggregate.
     */
    where?: messagesDevWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messagesDevs to fetch.
     */
    orderBy?: messagesDevOrderByWithRelationInput | messagesDevOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: messagesDevWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messagesDevs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messagesDevs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned messagesDevs
    **/
    _count?: true | MessagesDevCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessagesDevAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessagesDevSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessagesDevMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessagesDevMaxAggregateInputType
  }

  export type GetMessagesDevAggregateType<T extends MessagesDevAggregateArgs> = {
        [P in keyof T & keyof AggregateMessagesDev]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessagesDev[P]>
      : GetScalarType<T[P], AggregateMessagesDev[P]>
  }




  export type messagesDevGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesDevWhereInput
    orderBy?: messagesDevOrderByWithAggregationInput | messagesDevOrderByWithAggregationInput[]
    by: MessagesDevScalarFieldEnum[] | MessagesDevScalarFieldEnum
    having?: messagesDevScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessagesDevCountAggregateInputType | true
    _avg?: MessagesDevAvgAggregateInputType
    _sum?: MessagesDevSumAggregateInputType
    _min?: MessagesDevMinAggregateInputType
    _max?: MessagesDevMaxAggregateInputType
  }

  export type MessagesDevGroupByOutputType = {
    id: number
    chat_id: number
    remitente: $Enums.RemitenteTipoDev
    contenido: string
    creado_en: Date
    _count: MessagesDevCountAggregateOutputType | null
    _avg: MessagesDevAvgAggregateOutputType | null
    _sum: MessagesDevSumAggregateOutputType | null
    _min: MessagesDevMinAggregateOutputType | null
    _max: MessagesDevMaxAggregateOutputType | null
  }

  type GetMessagesDevGroupByPayload<T extends messagesDevGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessagesDevGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessagesDevGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessagesDevGroupByOutputType[P]>
            : GetScalarType<T[P], MessagesDevGroupByOutputType[P]>
        }
      >
    >


  export type messagesDevSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chat_id?: boolean
    remitente?: boolean
    contenido?: boolean
    creado_en?: boolean
  }, ExtArgs["result"]["messagesDev"]>

  export type messagesDevSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chat_id?: boolean
    remitente?: boolean
    contenido?: boolean
    creado_en?: boolean
  }, ExtArgs["result"]["messagesDev"]>

  export type messagesDevSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chat_id?: boolean
    remitente?: boolean
    contenido?: boolean
    creado_en?: boolean
  }, ExtArgs["result"]["messagesDev"]>

  export type messagesDevSelectScalar = {
    id?: boolean
    chat_id?: boolean
    remitente?: boolean
    contenido?: boolean
    creado_en?: boolean
  }

  export type messagesDevOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chat_id" | "remitente" | "contenido" | "creado_en", ExtArgs["result"]["messagesDev"]>

  export type $messagesDevPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "messagesDev"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chat_id: number
      remitente: $Enums.RemitenteTipoDev
      contenido: string
      creado_en: Date
    }, ExtArgs["result"]["messagesDev"]>
    composites: {}
  }

  type messagesDevGetPayload<S extends boolean | null | undefined | messagesDevDefaultArgs> = $Result.GetResult<Prisma.$messagesDevPayload, S>

  type messagesDevCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<messagesDevFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessagesDevCountAggregateInputType | true
    }

  export interface messagesDevDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['messagesDev'], meta: { name: 'messagesDev' } }
    /**
     * Find zero or one MessagesDev that matches the filter.
     * @param {messagesDevFindUniqueArgs} args - Arguments to find a MessagesDev
     * @example
     * // Get one MessagesDev
     * const messagesDev = await prisma.messagesDev.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends messagesDevFindUniqueArgs>(args: SelectSubset<T, messagesDevFindUniqueArgs<ExtArgs>>): Prisma__messagesDevClient<$Result.GetResult<Prisma.$messagesDevPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MessagesDev that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {messagesDevFindUniqueOrThrowArgs} args - Arguments to find a MessagesDev
     * @example
     * // Get one MessagesDev
     * const messagesDev = await prisma.messagesDev.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends messagesDevFindUniqueOrThrowArgs>(args: SelectSubset<T, messagesDevFindUniqueOrThrowArgs<ExtArgs>>): Prisma__messagesDevClient<$Result.GetResult<Prisma.$messagesDevPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessagesDev that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesDevFindFirstArgs} args - Arguments to find a MessagesDev
     * @example
     * // Get one MessagesDev
     * const messagesDev = await prisma.messagesDev.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends messagesDevFindFirstArgs>(args?: SelectSubset<T, messagesDevFindFirstArgs<ExtArgs>>): Prisma__messagesDevClient<$Result.GetResult<Prisma.$messagesDevPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessagesDev that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesDevFindFirstOrThrowArgs} args - Arguments to find a MessagesDev
     * @example
     * // Get one MessagesDev
     * const messagesDev = await prisma.messagesDev.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends messagesDevFindFirstOrThrowArgs>(args?: SelectSubset<T, messagesDevFindFirstOrThrowArgs<ExtArgs>>): Prisma__messagesDevClient<$Result.GetResult<Prisma.$messagesDevPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MessagesDevs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesDevFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessagesDevs
     * const messagesDevs = await prisma.messagesDev.findMany()
     * 
     * // Get first 10 MessagesDevs
     * const messagesDevs = await prisma.messagesDev.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messagesDevWithIdOnly = await prisma.messagesDev.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends messagesDevFindManyArgs>(args?: SelectSubset<T, messagesDevFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesDevPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MessagesDev.
     * @param {messagesDevCreateArgs} args - Arguments to create a MessagesDev.
     * @example
     * // Create one MessagesDev
     * const MessagesDev = await prisma.messagesDev.create({
     *   data: {
     *     // ... data to create a MessagesDev
     *   }
     * })
     * 
     */
    create<T extends messagesDevCreateArgs>(args: SelectSubset<T, messagesDevCreateArgs<ExtArgs>>): Prisma__messagesDevClient<$Result.GetResult<Prisma.$messagesDevPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MessagesDevs.
     * @param {messagesDevCreateManyArgs} args - Arguments to create many MessagesDevs.
     * @example
     * // Create many MessagesDevs
     * const messagesDev = await prisma.messagesDev.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends messagesDevCreateManyArgs>(args?: SelectSubset<T, messagesDevCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MessagesDevs and returns the data saved in the database.
     * @param {messagesDevCreateManyAndReturnArgs} args - Arguments to create many MessagesDevs.
     * @example
     * // Create many MessagesDevs
     * const messagesDev = await prisma.messagesDev.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MessagesDevs and only return the `id`
     * const messagesDevWithIdOnly = await prisma.messagesDev.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends messagesDevCreateManyAndReturnArgs>(args?: SelectSubset<T, messagesDevCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesDevPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MessagesDev.
     * @param {messagesDevDeleteArgs} args - Arguments to delete one MessagesDev.
     * @example
     * // Delete one MessagesDev
     * const MessagesDev = await prisma.messagesDev.delete({
     *   where: {
     *     // ... filter to delete one MessagesDev
     *   }
     * })
     * 
     */
    delete<T extends messagesDevDeleteArgs>(args: SelectSubset<T, messagesDevDeleteArgs<ExtArgs>>): Prisma__messagesDevClient<$Result.GetResult<Prisma.$messagesDevPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MessagesDev.
     * @param {messagesDevUpdateArgs} args - Arguments to update one MessagesDev.
     * @example
     * // Update one MessagesDev
     * const messagesDev = await prisma.messagesDev.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends messagesDevUpdateArgs>(args: SelectSubset<T, messagesDevUpdateArgs<ExtArgs>>): Prisma__messagesDevClient<$Result.GetResult<Prisma.$messagesDevPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MessagesDevs.
     * @param {messagesDevDeleteManyArgs} args - Arguments to filter MessagesDevs to delete.
     * @example
     * // Delete a few MessagesDevs
     * const { count } = await prisma.messagesDev.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends messagesDevDeleteManyArgs>(args?: SelectSubset<T, messagesDevDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessagesDevs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesDevUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessagesDevs
     * const messagesDev = await prisma.messagesDev.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends messagesDevUpdateManyArgs>(args: SelectSubset<T, messagesDevUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessagesDevs and returns the data updated in the database.
     * @param {messagesDevUpdateManyAndReturnArgs} args - Arguments to update many MessagesDevs.
     * @example
     * // Update many MessagesDevs
     * const messagesDev = await prisma.messagesDev.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MessagesDevs and only return the `id`
     * const messagesDevWithIdOnly = await prisma.messagesDev.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends messagesDevUpdateManyAndReturnArgs>(args: SelectSubset<T, messagesDevUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesDevPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MessagesDev.
     * @param {messagesDevUpsertArgs} args - Arguments to update or create a MessagesDev.
     * @example
     * // Update or create a MessagesDev
     * const messagesDev = await prisma.messagesDev.upsert({
     *   create: {
     *     // ... data to create a MessagesDev
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessagesDev we want to update
     *   }
     * })
     */
    upsert<T extends messagesDevUpsertArgs>(args: SelectSubset<T, messagesDevUpsertArgs<ExtArgs>>): Prisma__messagesDevClient<$Result.GetResult<Prisma.$messagesDevPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MessagesDevs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesDevCountArgs} args - Arguments to filter MessagesDevs to count.
     * @example
     * // Count the number of MessagesDevs
     * const count = await prisma.messagesDev.count({
     *   where: {
     *     // ... the filter for the MessagesDevs we want to count
     *   }
     * })
    **/
    count<T extends messagesDevCountArgs>(
      args?: Subset<T, messagesDevCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessagesDevCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessagesDev.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesDevAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessagesDevAggregateArgs>(args: Subset<T, MessagesDevAggregateArgs>): Prisma.PrismaPromise<GetMessagesDevAggregateType<T>>

    /**
     * Group by MessagesDev.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesDevGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends messagesDevGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: messagesDevGroupByArgs['orderBy'] }
        : { orderBy?: messagesDevGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, messagesDevGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesDevGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the messagesDev model
   */
  readonly fields: messagesDevFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for messagesDev.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__messagesDevClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the messagesDev model
   */
  interface messagesDevFieldRefs {
    readonly id: FieldRef<"messagesDev", 'Int'>
    readonly chat_id: FieldRef<"messagesDev", 'Int'>
    readonly remitente: FieldRef<"messagesDev", 'RemitenteTipoDev'>
    readonly contenido: FieldRef<"messagesDev", 'String'>
    readonly creado_en: FieldRef<"messagesDev", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * messagesDev findUnique
   */
  export type messagesDevFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messagesDev
     */
    select?: messagesDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messagesDev
     */
    omit?: messagesDevOmit<ExtArgs> | null
    /**
     * Filter, which messagesDev to fetch.
     */
    where: messagesDevWhereUniqueInput
  }

  /**
   * messagesDev findUniqueOrThrow
   */
  export type messagesDevFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messagesDev
     */
    select?: messagesDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messagesDev
     */
    omit?: messagesDevOmit<ExtArgs> | null
    /**
     * Filter, which messagesDev to fetch.
     */
    where: messagesDevWhereUniqueInput
  }

  /**
   * messagesDev findFirst
   */
  export type messagesDevFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messagesDev
     */
    select?: messagesDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messagesDev
     */
    omit?: messagesDevOmit<ExtArgs> | null
    /**
     * Filter, which messagesDev to fetch.
     */
    where?: messagesDevWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messagesDevs to fetch.
     */
    orderBy?: messagesDevOrderByWithRelationInput | messagesDevOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messagesDevs.
     */
    cursor?: messagesDevWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messagesDevs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messagesDevs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messagesDevs.
     */
    distinct?: MessagesDevScalarFieldEnum | MessagesDevScalarFieldEnum[]
  }

  /**
   * messagesDev findFirstOrThrow
   */
  export type messagesDevFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messagesDev
     */
    select?: messagesDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messagesDev
     */
    omit?: messagesDevOmit<ExtArgs> | null
    /**
     * Filter, which messagesDev to fetch.
     */
    where?: messagesDevWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messagesDevs to fetch.
     */
    orderBy?: messagesDevOrderByWithRelationInput | messagesDevOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messagesDevs.
     */
    cursor?: messagesDevWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messagesDevs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messagesDevs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messagesDevs.
     */
    distinct?: MessagesDevScalarFieldEnum | MessagesDevScalarFieldEnum[]
  }

  /**
   * messagesDev findMany
   */
  export type messagesDevFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messagesDev
     */
    select?: messagesDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messagesDev
     */
    omit?: messagesDevOmit<ExtArgs> | null
    /**
     * Filter, which messagesDevs to fetch.
     */
    where?: messagesDevWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messagesDevs to fetch.
     */
    orderBy?: messagesDevOrderByWithRelationInput | messagesDevOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing messagesDevs.
     */
    cursor?: messagesDevWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messagesDevs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messagesDevs.
     */
    skip?: number
    distinct?: MessagesDevScalarFieldEnum | MessagesDevScalarFieldEnum[]
  }

  /**
   * messagesDev create
   */
  export type messagesDevCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messagesDev
     */
    select?: messagesDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messagesDev
     */
    omit?: messagesDevOmit<ExtArgs> | null
    /**
     * The data needed to create a messagesDev.
     */
    data: XOR<messagesDevCreateInput, messagesDevUncheckedCreateInput>
  }

  /**
   * messagesDev createMany
   */
  export type messagesDevCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many messagesDevs.
     */
    data: messagesDevCreateManyInput | messagesDevCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * messagesDev createManyAndReturn
   */
  export type messagesDevCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messagesDev
     */
    select?: messagesDevSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the messagesDev
     */
    omit?: messagesDevOmit<ExtArgs> | null
    /**
     * The data used to create many messagesDevs.
     */
    data: messagesDevCreateManyInput | messagesDevCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * messagesDev update
   */
  export type messagesDevUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messagesDev
     */
    select?: messagesDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messagesDev
     */
    omit?: messagesDevOmit<ExtArgs> | null
    /**
     * The data needed to update a messagesDev.
     */
    data: XOR<messagesDevUpdateInput, messagesDevUncheckedUpdateInput>
    /**
     * Choose, which messagesDev to update.
     */
    where: messagesDevWhereUniqueInput
  }

  /**
   * messagesDev updateMany
   */
  export type messagesDevUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update messagesDevs.
     */
    data: XOR<messagesDevUpdateManyMutationInput, messagesDevUncheckedUpdateManyInput>
    /**
     * Filter which messagesDevs to update
     */
    where?: messagesDevWhereInput
    /**
     * Limit how many messagesDevs to update.
     */
    limit?: number
  }

  /**
   * messagesDev updateManyAndReturn
   */
  export type messagesDevUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messagesDev
     */
    select?: messagesDevSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the messagesDev
     */
    omit?: messagesDevOmit<ExtArgs> | null
    /**
     * The data used to update messagesDevs.
     */
    data: XOR<messagesDevUpdateManyMutationInput, messagesDevUncheckedUpdateManyInput>
    /**
     * Filter which messagesDevs to update
     */
    where?: messagesDevWhereInput
    /**
     * Limit how many messagesDevs to update.
     */
    limit?: number
  }

  /**
   * messagesDev upsert
   */
  export type messagesDevUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messagesDev
     */
    select?: messagesDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messagesDev
     */
    omit?: messagesDevOmit<ExtArgs> | null
    /**
     * The filter to search for the messagesDev to update in case it exists.
     */
    where: messagesDevWhereUniqueInput
    /**
     * In case the messagesDev found by the `where` argument doesn't exist, create a new messagesDev with this data.
     */
    create: XOR<messagesDevCreateInput, messagesDevUncheckedCreateInput>
    /**
     * In case the messagesDev was found with the provided `where` argument, update it with this data.
     */
    update: XOR<messagesDevUpdateInput, messagesDevUncheckedUpdateInput>
  }

  /**
   * messagesDev delete
   */
  export type messagesDevDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messagesDev
     */
    select?: messagesDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messagesDev
     */
    omit?: messagesDevOmit<ExtArgs> | null
    /**
     * Filter which messagesDev to delete.
     */
    where: messagesDevWhereUniqueInput
  }

  /**
   * messagesDev deleteMany
   */
  export type messagesDevDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messagesDevs to delete
     */
    where?: messagesDevWhereInput
    /**
     * Limit how many messagesDevs to delete.
     */
    limit?: number
  }

  /**
   * messagesDev without action
   */
  export type messagesDevDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messagesDev
     */
    select?: messagesDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messagesDev
     */
    omit?: messagesDevOmit<ExtArgs> | null
  }


  /**
   * Model messagesProd
   */

  export type AggregateMessagesProd = {
    _count: MessagesProdCountAggregateOutputType | null
    _avg: MessagesProdAvgAggregateOutputType | null
    _sum: MessagesProdSumAggregateOutputType | null
    _min: MessagesProdMinAggregateOutputType | null
    _max: MessagesProdMaxAggregateOutputType | null
  }

  export type MessagesProdAvgAggregateOutputType = {
    id: number | null
    chat_id: number | null
  }

  export type MessagesProdSumAggregateOutputType = {
    id: number | null
    chat_id: number | null
  }

  export type MessagesProdMinAggregateOutputType = {
    id: number | null
    chat_id: number | null
    remitente: $Enums.RemitenteTipoProd | null
    contenido: string | null
    creado_en: Date | null
  }

  export type MessagesProdMaxAggregateOutputType = {
    id: number | null
    chat_id: number | null
    remitente: $Enums.RemitenteTipoProd | null
    contenido: string | null
    creado_en: Date | null
  }

  export type MessagesProdCountAggregateOutputType = {
    id: number
    chat_id: number
    remitente: number
    contenido: number
    creado_en: number
    _all: number
  }


  export type MessagesProdAvgAggregateInputType = {
    id?: true
    chat_id?: true
  }

  export type MessagesProdSumAggregateInputType = {
    id?: true
    chat_id?: true
  }

  export type MessagesProdMinAggregateInputType = {
    id?: true
    chat_id?: true
    remitente?: true
    contenido?: true
    creado_en?: true
  }

  export type MessagesProdMaxAggregateInputType = {
    id?: true
    chat_id?: true
    remitente?: true
    contenido?: true
    creado_en?: true
  }

  export type MessagesProdCountAggregateInputType = {
    id?: true
    chat_id?: true
    remitente?: true
    contenido?: true
    creado_en?: true
    _all?: true
  }

  export type MessagesProdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messagesProd to aggregate.
     */
    where?: messagesProdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messagesProds to fetch.
     */
    orderBy?: messagesProdOrderByWithRelationInput | messagesProdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: messagesProdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messagesProds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messagesProds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned messagesProds
    **/
    _count?: true | MessagesProdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessagesProdAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessagesProdSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessagesProdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessagesProdMaxAggregateInputType
  }

  export type GetMessagesProdAggregateType<T extends MessagesProdAggregateArgs> = {
        [P in keyof T & keyof AggregateMessagesProd]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessagesProd[P]>
      : GetScalarType<T[P], AggregateMessagesProd[P]>
  }




  export type messagesProdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: messagesProdWhereInput
    orderBy?: messagesProdOrderByWithAggregationInput | messagesProdOrderByWithAggregationInput[]
    by: MessagesProdScalarFieldEnum[] | MessagesProdScalarFieldEnum
    having?: messagesProdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessagesProdCountAggregateInputType | true
    _avg?: MessagesProdAvgAggregateInputType
    _sum?: MessagesProdSumAggregateInputType
    _min?: MessagesProdMinAggregateInputType
    _max?: MessagesProdMaxAggregateInputType
  }

  export type MessagesProdGroupByOutputType = {
    id: number
    chat_id: number
    remitente: $Enums.RemitenteTipoProd
    contenido: string
    creado_en: Date
    _count: MessagesProdCountAggregateOutputType | null
    _avg: MessagesProdAvgAggregateOutputType | null
    _sum: MessagesProdSumAggregateOutputType | null
    _min: MessagesProdMinAggregateOutputType | null
    _max: MessagesProdMaxAggregateOutputType | null
  }

  type GetMessagesProdGroupByPayload<T extends messagesProdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessagesProdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessagesProdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessagesProdGroupByOutputType[P]>
            : GetScalarType<T[P], MessagesProdGroupByOutputType[P]>
        }
      >
    >


  export type messagesProdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chat_id?: boolean
    remitente?: boolean
    contenido?: boolean
    creado_en?: boolean
  }, ExtArgs["result"]["messagesProd"]>

  export type messagesProdSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chat_id?: boolean
    remitente?: boolean
    contenido?: boolean
    creado_en?: boolean
  }, ExtArgs["result"]["messagesProd"]>

  export type messagesProdSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chat_id?: boolean
    remitente?: boolean
    contenido?: boolean
    creado_en?: boolean
  }, ExtArgs["result"]["messagesProd"]>

  export type messagesProdSelectScalar = {
    id?: boolean
    chat_id?: boolean
    remitente?: boolean
    contenido?: boolean
    creado_en?: boolean
  }

  export type messagesProdOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chat_id" | "remitente" | "contenido" | "creado_en", ExtArgs["result"]["messagesProd"]>

  export type $messagesProdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "messagesProd"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chat_id: number
      remitente: $Enums.RemitenteTipoProd
      contenido: string
      creado_en: Date
    }, ExtArgs["result"]["messagesProd"]>
    composites: {}
  }

  type messagesProdGetPayload<S extends boolean | null | undefined | messagesProdDefaultArgs> = $Result.GetResult<Prisma.$messagesProdPayload, S>

  type messagesProdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<messagesProdFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessagesProdCountAggregateInputType | true
    }

  export interface messagesProdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['messagesProd'], meta: { name: 'messagesProd' } }
    /**
     * Find zero or one MessagesProd that matches the filter.
     * @param {messagesProdFindUniqueArgs} args - Arguments to find a MessagesProd
     * @example
     * // Get one MessagesProd
     * const messagesProd = await prisma.messagesProd.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends messagesProdFindUniqueArgs>(args: SelectSubset<T, messagesProdFindUniqueArgs<ExtArgs>>): Prisma__messagesProdClient<$Result.GetResult<Prisma.$messagesProdPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MessagesProd that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {messagesProdFindUniqueOrThrowArgs} args - Arguments to find a MessagesProd
     * @example
     * // Get one MessagesProd
     * const messagesProd = await prisma.messagesProd.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends messagesProdFindUniqueOrThrowArgs>(args: SelectSubset<T, messagesProdFindUniqueOrThrowArgs<ExtArgs>>): Prisma__messagesProdClient<$Result.GetResult<Prisma.$messagesProdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessagesProd that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesProdFindFirstArgs} args - Arguments to find a MessagesProd
     * @example
     * // Get one MessagesProd
     * const messagesProd = await prisma.messagesProd.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends messagesProdFindFirstArgs>(args?: SelectSubset<T, messagesProdFindFirstArgs<ExtArgs>>): Prisma__messagesProdClient<$Result.GetResult<Prisma.$messagesProdPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessagesProd that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesProdFindFirstOrThrowArgs} args - Arguments to find a MessagesProd
     * @example
     * // Get one MessagesProd
     * const messagesProd = await prisma.messagesProd.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends messagesProdFindFirstOrThrowArgs>(args?: SelectSubset<T, messagesProdFindFirstOrThrowArgs<ExtArgs>>): Prisma__messagesProdClient<$Result.GetResult<Prisma.$messagesProdPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MessagesProds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesProdFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessagesProds
     * const messagesProds = await prisma.messagesProd.findMany()
     * 
     * // Get first 10 MessagesProds
     * const messagesProds = await prisma.messagesProd.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messagesProdWithIdOnly = await prisma.messagesProd.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends messagesProdFindManyArgs>(args?: SelectSubset<T, messagesProdFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesProdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MessagesProd.
     * @param {messagesProdCreateArgs} args - Arguments to create a MessagesProd.
     * @example
     * // Create one MessagesProd
     * const MessagesProd = await prisma.messagesProd.create({
     *   data: {
     *     // ... data to create a MessagesProd
     *   }
     * })
     * 
     */
    create<T extends messagesProdCreateArgs>(args: SelectSubset<T, messagesProdCreateArgs<ExtArgs>>): Prisma__messagesProdClient<$Result.GetResult<Prisma.$messagesProdPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MessagesProds.
     * @param {messagesProdCreateManyArgs} args - Arguments to create many MessagesProds.
     * @example
     * // Create many MessagesProds
     * const messagesProd = await prisma.messagesProd.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends messagesProdCreateManyArgs>(args?: SelectSubset<T, messagesProdCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MessagesProds and returns the data saved in the database.
     * @param {messagesProdCreateManyAndReturnArgs} args - Arguments to create many MessagesProds.
     * @example
     * // Create many MessagesProds
     * const messagesProd = await prisma.messagesProd.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MessagesProds and only return the `id`
     * const messagesProdWithIdOnly = await prisma.messagesProd.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends messagesProdCreateManyAndReturnArgs>(args?: SelectSubset<T, messagesProdCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesProdPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MessagesProd.
     * @param {messagesProdDeleteArgs} args - Arguments to delete one MessagesProd.
     * @example
     * // Delete one MessagesProd
     * const MessagesProd = await prisma.messagesProd.delete({
     *   where: {
     *     // ... filter to delete one MessagesProd
     *   }
     * })
     * 
     */
    delete<T extends messagesProdDeleteArgs>(args: SelectSubset<T, messagesProdDeleteArgs<ExtArgs>>): Prisma__messagesProdClient<$Result.GetResult<Prisma.$messagesProdPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MessagesProd.
     * @param {messagesProdUpdateArgs} args - Arguments to update one MessagesProd.
     * @example
     * // Update one MessagesProd
     * const messagesProd = await prisma.messagesProd.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends messagesProdUpdateArgs>(args: SelectSubset<T, messagesProdUpdateArgs<ExtArgs>>): Prisma__messagesProdClient<$Result.GetResult<Prisma.$messagesProdPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MessagesProds.
     * @param {messagesProdDeleteManyArgs} args - Arguments to filter MessagesProds to delete.
     * @example
     * // Delete a few MessagesProds
     * const { count } = await prisma.messagesProd.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends messagesProdDeleteManyArgs>(args?: SelectSubset<T, messagesProdDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessagesProds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesProdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessagesProds
     * const messagesProd = await prisma.messagesProd.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends messagesProdUpdateManyArgs>(args: SelectSubset<T, messagesProdUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessagesProds and returns the data updated in the database.
     * @param {messagesProdUpdateManyAndReturnArgs} args - Arguments to update many MessagesProds.
     * @example
     * // Update many MessagesProds
     * const messagesProd = await prisma.messagesProd.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MessagesProds and only return the `id`
     * const messagesProdWithIdOnly = await prisma.messagesProd.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends messagesProdUpdateManyAndReturnArgs>(args: SelectSubset<T, messagesProdUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$messagesProdPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MessagesProd.
     * @param {messagesProdUpsertArgs} args - Arguments to update or create a MessagesProd.
     * @example
     * // Update or create a MessagesProd
     * const messagesProd = await prisma.messagesProd.upsert({
     *   create: {
     *     // ... data to create a MessagesProd
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessagesProd we want to update
     *   }
     * })
     */
    upsert<T extends messagesProdUpsertArgs>(args: SelectSubset<T, messagesProdUpsertArgs<ExtArgs>>): Prisma__messagesProdClient<$Result.GetResult<Prisma.$messagesProdPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MessagesProds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesProdCountArgs} args - Arguments to filter MessagesProds to count.
     * @example
     * // Count the number of MessagesProds
     * const count = await prisma.messagesProd.count({
     *   where: {
     *     // ... the filter for the MessagesProds we want to count
     *   }
     * })
    **/
    count<T extends messagesProdCountArgs>(
      args?: Subset<T, messagesProdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessagesProdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessagesProd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesProdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessagesProdAggregateArgs>(args: Subset<T, MessagesProdAggregateArgs>): Prisma.PrismaPromise<GetMessagesProdAggregateType<T>>

    /**
     * Group by MessagesProd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {messagesProdGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends messagesProdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: messagesProdGroupByArgs['orderBy'] }
        : { orderBy?: messagesProdGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, messagesProdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesProdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the messagesProd model
   */
  readonly fields: messagesProdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for messagesProd.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__messagesProdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the messagesProd model
   */
  interface messagesProdFieldRefs {
    readonly id: FieldRef<"messagesProd", 'Int'>
    readonly chat_id: FieldRef<"messagesProd", 'Int'>
    readonly remitente: FieldRef<"messagesProd", 'RemitenteTipoProd'>
    readonly contenido: FieldRef<"messagesProd", 'String'>
    readonly creado_en: FieldRef<"messagesProd", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * messagesProd findUnique
   */
  export type messagesProdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messagesProd
     */
    select?: messagesProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messagesProd
     */
    omit?: messagesProdOmit<ExtArgs> | null
    /**
     * Filter, which messagesProd to fetch.
     */
    where: messagesProdWhereUniqueInput
  }

  /**
   * messagesProd findUniqueOrThrow
   */
  export type messagesProdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messagesProd
     */
    select?: messagesProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messagesProd
     */
    omit?: messagesProdOmit<ExtArgs> | null
    /**
     * Filter, which messagesProd to fetch.
     */
    where: messagesProdWhereUniqueInput
  }

  /**
   * messagesProd findFirst
   */
  export type messagesProdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messagesProd
     */
    select?: messagesProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messagesProd
     */
    omit?: messagesProdOmit<ExtArgs> | null
    /**
     * Filter, which messagesProd to fetch.
     */
    where?: messagesProdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messagesProds to fetch.
     */
    orderBy?: messagesProdOrderByWithRelationInput | messagesProdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messagesProds.
     */
    cursor?: messagesProdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messagesProds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messagesProds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messagesProds.
     */
    distinct?: MessagesProdScalarFieldEnum | MessagesProdScalarFieldEnum[]
  }

  /**
   * messagesProd findFirstOrThrow
   */
  export type messagesProdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messagesProd
     */
    select?: messagesProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messagesProd
     */
    omit?: messagesProdOmit<ExtArgs> | null
    /**
     * Filter, which messagesProd to fetch.
     */
    where?: messagesProdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messagesProds to fetch.
     */
    orderBy?: messagesProdOrderByWithRelationInput | messagesProdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for messagesProds.
     */
    cursor?: messagesProdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messagesProds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messagesProds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of messagesProds.
     */
    distinct?: MessagesProdScalarFieldEnum | MessagesProdScalarFieldEnum[]
  }

  /**
   * messagesProd findMany
   */
  export type messagesProdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messagesProd
     */
    select?: messagesProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messagesProd
     */
    omit?: messagesProdOmit<ExtArgs> | null
    /**
     * Filter, which messagesProds to fetch.
     */
    where?: messagesProdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of messagesProds to fetch.
     */
    orderBy?: messagesProdOrderByWithRelationInput | messagesProdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing messagesProds.
     */
    cursor?: messagesProdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` messagesProds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` messagesProds.
     */
    skip?: number
    distinct?: MessagesProdScalarFieldEnum | MessagesProdScalarFieldEnum[]
  }

  /**
   * messagesProd create
   */
  export type messagesProdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messagesProd
     */
    select?: messagesProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messagesProd
     */
    omit?: messagesProdOmit<ExtArgs> | null
    /**
     * The data needed to create a messagesProd.
     */
    data: XOR<messagesProdCreateInput, messagesProdUncheckedCreateInput>
  }

  /**
   * messagesProd createMany
   */
  export type messagesProdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many messagesProds.
     */
    data: messagesProdCreateManyInput | messagesProdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * messagesProd createManyAndReturn
   */
  export type messagesProdCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messagesProd
     */
    select?: messagesProdSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the messagesProd
     */
    omit?: messagesProdOmit<ExtArgs> | null
    /**
     * The data used to create many messagesProds.
     */
    data: messagesProdCreateManyInput | messagesProdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * messagesProd update
   */
  export type messagesProdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messagesProd
     */
    select?: messagesProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messagesProd
     */
    omit?: messagesProdOmit<ExtArgs> | null
    /**
     * The data needed to update a messagesProd.
     */
    data: XOR<messagesProdUpdateInput, messagesProdUncheckedUpdateInput>
    /**
     * Choose, which messagesProd to update.
     */
    where: messagesProdWhereUniqueInput
  }

  /**
   * messagesProd updateMany
   */
  export type messagesProdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update messagesProds.
     */
    data: XOR<messagesProdUpdateManyMutationInput, messagesProdUncheckedUpdateManyInput>
    /**
     * Filter which messagesProds to update
     */
    where?: messagesProdWhereInput
    /**
     * Limit how many messagesProds to update.
     */
    limit?: number
  }

  /**
   * messagesProd updateManyAndReturn
   */
  export type messagesProdUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messagesProd
     */
    select?: messagesProdSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the messagesProd
     */
    omit?: messagesProdOmit<ExtArgs> | null
    /**
     * The data used to update messagesProds.
     */
    data: XOR<messagesProdUpdateManyMutationInput, messagesProdUncheckedUpdateManyInput>
    /**
     * Filter which messagesProds to update
     */
    where?: messagesProdWhereInput
    /**
     * Limit how many messagesProds to update.
     */
    limit?: number
  }

  /**
   * messagesProd upsert
   */
  export type messagesProdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messagesProd
     */
    select?: messagesProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messagesProd
     */
    omit?: messagesProdOmit<ExtArgs> | null
    /**
     * The filter to search for the messagesProd to update in case it exists.
     */
    where: messagesProdWhereUniqueInput
    /**
     * In case the messagesProd found by the `where` argument doesn't exist, create a new messagesProd with this data.
     */
    create: XOR<messagesProdCreateInput, messagesProdUncheckedCreateInput>
    /**
     * In case the messagesProd was found with the provided `where` argument, update it with this data.
     */
    update: XOR<messagesProdUpdateInput, messagesProdUncheckedUpdateInput>
  }

  /**
   * messagesProd delete
   */
  export type messagesProdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messagesProd
     */
    select?: messagesProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messagesProd
     */
    omit?: messagesProdOmit<ExtArgs> | null
    /**
     * Filter which messagesProd to delete.
     */
    where: messagesProdWhereUniqueInput
  }

  /**
   * messagesProd deleteMany
   */
  export type messagesProdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which messagesProds to delete
     */
    where?: messagesProdWhereInput
    /**
     * Limit how many messagesProds to delete.
     */
    limit?: number
  }

  /**
   * messagesProd without action
   */
  export type messagesProdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the messagesProd
     */
    select?: messagesProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the messagesProd
     */
    omit?: messagesProdOmit<ExtArgs> | null
  }


  /**
   * Model productsDev
   */

  export type AggregateProductsDev = {
    _count: ProductsDevCountAggregateOutputType | null
    _avg: ProductsDevAvgAggregateOutputType | null
    _sum: ProductsDevSumAggregateOutputType | null
    _min: ProductsDevMinAggregateOutputType | null
    _max: ProductsDevMaxAggregateOutputType | null
  }

  export type ProductsDevAvgAggregateOutputType = {
    id: number | null
    precio: number | null
    stock: number | null
    product_category: number | null
  }

  export type ProductsDevSumAggregateOutputType = {
    id: number | null
    precio: number | null
    stock: number | null
    product_category: number | null
  }

  export type ProductsDevMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    precio: number | null
    stock: number | null
    activo: boolean | null
    creado_en: Date | null
    actualizado_en: Date | null
    img_url: string | null
    product_category: number | null
  }

  export type ProductsDevMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    precio: number | null
    stock: number | null
    activo: boolean | null
    creado_en: Date | null
    actualizado_en: Date | null
    img_url: string | null
    product_category: number | null
  }

  export type ProductsDevCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    precio: number
    stock: number
    activo: number
    creado_en: number
    actualizado_en: number
    img_url: number
    product_category: number
    _all: number
  }


  export type ProductsDevAvgAggregateInputType = {
    id?: true
    precio?: true
    stock?: true
    product_category?: true
  }

  export type ProductsDevSumAggregateInputType = {
    id?: true
    precio?: true
    stock?: true
    product_category?: true
  }

  export type ProductsDevMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    stock?: true
    activo?: true
    creado_en?: true
    actualizado_en?: true
    img_url?: true
    product_category?: true
  }

  export type ProductsDevMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    stock?: true
    activo?: true
    creado_en?: true
    actualizado_en?: true
    img_url?: true
    product_category?: true
  }

  export type ProductsDevCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    stock?: true
    activo?: true
    creado_en?: true
    actualizado_en?: true
    img_url?: true
    product_category?: true
    _all?: true
  }

  export type ProductsDevAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productsDev to aggregate.
     */
    where?: productsDevWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productsDevs to fetch.
     */
    orderBy?: productsDevOrderByWithRelationInput | productsDevOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsDevWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productsDevs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productsDevs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned productsDevs
    **/
    _count?: true | ProductsDevCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsDevAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsDevSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsDevMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsDevMaxAggregateInputType
  }

  export type GetProductsDevAggregateType<T extends ProductsDevAggregateArgs> = {
        [P in keyof T & keyof AggregateProductsDev]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductsDev[P]>
      : GetScalarType<T[P], AggregateProductsDev[P]>
  }




  export type productsDevGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsDevWhereInput
    orderBy?: productsDevOrderByWithAggregationInput | productsDevOrderByWithAggregationInput[]
    by: ProductsDevScalarFieldEnum[] | ProductsDevScalarFieldEnum
    having?: productsDevScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsDevCountAggregateInputType | true
    _avg?: ProductsDevAvgAggregateInputType
    _sum?: ProductsDevSumAggregateInputType
    _min?: ProductsDevMinAggregateInputType
    _max?: ProductsDevMaxAggregateInputType
  }

  export type ProductsDevGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string | null
    precio: number
    stock: number
    activo: boolean
    creado_en: Date
    actualizado_en: Date
    img_url: string
    product_category: number | null
    _count: ProductsDevCountAggregateOutputType | null
    _avg: ProductsDevAvgAggregateOutputType | null
    _sum: ProductsDevSumAggregateOutputType | null
    _min: ProductsDevMinAggregateOutputType | null
    _max: ProductsDevMaxAggregateOutputType | null
  }

  type GetProductsDevGroupByPayload<T extends productsDevGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsDevGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsDevGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsDevGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsDevGroupByOutputType[P]>
        }
      >
    >


  export type productsDevSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    stock?: boolean
    activo?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
    img_url?: boolean
    product_category?: boolean
  }, ExtArgs["result"]["productsDev"]>

  export type productsDevSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    stock?: boolean
    activo?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
    img_url?: boolean
    product_category?: boolean
  }, ExtArgs["result"]["productsDev"]>

  export type productsDevSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    stock?: boolean
    activo?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
    img_url?: boolean
    product_category?: boolean
  }, ExtArgs["result"]["productsDev"]>

  export type productsDevSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    stock?: boolean
    activo?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
    img_url?: boolean
    product_category?: boolean
  }

  export type productsDevOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "precio" | "stock" | "activo" | "creado_en" | "actualizado_en" | "img_url" | "product_category", ExtArgs["result"]["productsDev"]>

  export type $productsDevPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "productsDev"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string | null
      precio: number
      stock: number
      activo: boolean
      creado_en: Date
      actualizado_en: Date
      img_url: string
      product_category: number | null
    }, ExtArgs["result"]["productsDev"]>
    composites: {}
  }

  type productsDevGetPayload<S extends boolean | null | undefined | productsDevDefaultArgs> = $Result.GetResult<Prisma.$productsDevPayload, S>

  type productsDevCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productsDevFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsDevCountAggregateInputType | true
    }

  export interface productsDevDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['productsDev'], meta: { name: 'productsDev' } }
    /**
     * Find zero or one ProductsDev that matches the filter.
     * @param {productsDevFindUniqueArgs} args - Arguments to find a ProductsDev
     * @example
     * // Get one ProductsDev
     * const productsDev = await prisma.productsDevDev.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsDevFindUniqueArgs>(args: SelectSubset<T, productsDevFindUniqueArgs<ExtArgs>>): Prisma__productsDevClient<$Result.GetResult<Prisma.$productsDevPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductsDev that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productsDevFindUniqueOrThrowArgs} args - Arguments to find a ProductsDev
     * @example
     * // Get one ProductsDev
     * const productsDev = await prisma.productsDevDev.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsDevFindUniqueOrThrowArgs>(args: SelectSubset<T, productsDevFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsDevClient<$Result.GetResult<Prisma.$productsDevPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductsDev that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsDevFindFirstArgs} args - Arguments to find a ProductsDev
     * @example
     * // Get one ProductsDev
     * const productsDev = await prisma.productsDevDev.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsDevFindFirstArgs>(args?: SelectSubset<T, productsDevFindFirstArgs<ExtArgs>>): Prisma__productsDevClient<$Result.GetResult<Prisma.$productsDevPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductsDev that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsDevFindFirstOrThrowArgs} args - Arguments to find a ProductsDev
     * @example
     * // Get one ProductsDev
     * const productsDev = await prisma.productsDevDev.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsDevFindFirstOrThrowArgs>(args?: SelectSubset<T, productsDevFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsDevClient<$Result.GetResult<Prisma.$productsDevPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductsDevs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsDevFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductsDevs
     * const productsDevs = await prisma.productsDevDev.findMany()
     * 
     * // Get first 10 ProductsDevs
     * const productsDevs = await prisma.productsDevDev.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsDevWithIdOnly = await prisma.productsDevDev.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productsDevFindManyArgs>(args?: SelectSubset<T, productsDevFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsDevPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductsDev.
     * @param {productsDevCreateArgs} args - Arguments to create a ProductsDev.
     * @example
     * // Create one ProductsDev
     * const ProductsDev = await prisma.productsDevDev.create({
     *   data: {
     *     // ... data to create a ProductsDev
     *   }
     * })
     * 
     */
    create<T extends productsDevCreateArgs>(args: SelectSubset<T, productsDevCreateArgs<ExtArgs>>): Prisma__productsDevClient<$Result.GetResult<Prisma.$productsDevPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductsDevs.
     * @param {productsDevCreateManyArgs} args - Arguments to create many ProductsDevs.
     * @example
     * // Create many ProductsDevs
     * const productsDev = await prisma.productsDevDev.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsDevCreateManyArgs>(args?: SelectSubset<T, productsDevCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductsDevs and returns the data saved in the database.
     * @param {productsDevCreateManyAndReturnArgs} args - Arguments to create many ProductsDevs.
     * @example
     * // Create many ProductsDevs
     * const productsDev = await prisma.productsDevDev.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductsDevs and only return the `id`
     * const productsDevWithIdOnly = await prisma.productsDevDev.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productsDevCreateManyAndReturnArgs>(args?: SelectSubset<T, productsDevCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsDevPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductsDev.
     * @param {productsDevDeleteArgs} args - Arguments to delete one ProductsDev.
     * @example
     * // Delete one ProductsDev
     * const ProductsDev = await prisma.productsDevDev.delete({
     *   where: {
     *     // ... filter to delete one ProductsDev
     *   }
     * })
     * 
     */
    delete<T extends productsDevDeleteArgs>(args: SelectSubset<T, productsDevDeleteArgs<ExtArgs>>): Prisma__productsDevClient<$Result.GetResult<Prisma.$productsDevPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductsDev.
     * @param {productsDevUpdateArgs} args - Arguments to update one ProductsDev.
     * @example
     * // Update one ProductsDev
     * const productsDev = await prisma.productsDevDev.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsDevUpdateArgs>(args: SelectSubset<T, productsDevUpdateArgs<ExtArgs>>): Prisma__productsDevClient<$Result.GetResult<Prisma.$productsDevPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductsDevs.
     * @param {productsDevDeleteManyArgs} args - Arguments to filter ProductsDevs to delete.
     * @example
     * // Delete a few ProductsDevs
     * const { count } = await prisma.productsDevDev.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsDevDeleteManyArgs>(args?: SelectSubset<T, productsDevDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductsDevs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsDevUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductsDevs
     * const productsDev = await prisma.productsDevDev.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsDevUpdateManyArgs>(args: SelectSubset<T, productsDevUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductsDevs and returns the data updated in the database.
     * @param {productsDevUpdateManyAndReturnArgs} args - Arguments to update many ProductsDevs.
     * @example
     * // Update many ProductsDevs
     * const productsDev = await prisma.productsDevDev.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductsDevs and only return the `id`
     * const productsDevWithIdOnly = await prisma.productsDevDev.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends productsDevUpdateManyAndReturnArgs>(args: SelectSubset<T, productsDevUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsDevPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductsDev.
     * @param {productsDevUpsertArgs} args - Arguments to update or create a ProductsDev.
     * @example
     * // Update or create a ProductsDev
     * const productsDev = await prisma.productsDevDev.upsert({
     *   create: {
     *     // ... data to create a ProductsDev
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductsDev we want to update
     *   }
     * })
     */
    upsert<T extends productsDevUpsertArgs>(args: SelectSubset<T, productsDevUpsertArgs<ExtArgs>>): Prisma__productsDevClient<$Result.GetResult<Prisma.$productsDevPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductsDevs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsDevCountArgs} args - Arguments to filter ProductsDevs to count.
     * @example
     * // Count the number of ProductsDevs
     * const count = await prisma.productsDevDev.count({
     *   where: {
     *     // ... the filter for the ProductsDevs we want to count
     *   }
     * })
    **/
    count<T extends productsDevCountArgs>(
      args?: Subset<T, productsDevCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsDevCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductsDev.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsDevAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsDevAggregateArgs>(args: Subset<T, ProductsDevAggregateArgs>): Prisma.PrismaPromise<GetProductsDevAggregateType<T>>

    /**
     * Group by ProductsDev.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsDevGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productsDevGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsDevGroupByArgs['orderBy'] }
        : { orderBy?: productsDevGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productsDevGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsDevGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the productsDev model
   */
  readonly fields: productsDevFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for productsDev.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsDevClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the productsDev model
   */
  interface productsDevFieldRefs {
    readonly id: FieldRef<"productsDev", 'Int'>
    readonly nombre: FieldRef<"productsDev", 'String'>
    readonly descripcion: FieldRef<"productsDev", 'String'>
    readonly precio: FieldRef<"productsDev", 'Float'>
    readonly stock: FieldRef<"productsDev", 'Int'>
    readonly activo: FieldRef<"productsDev", 'Boolean'>
    readonly creado_en: FieldRef<"productsDev", 'DateTime'>
    readonly actualizado_en: FieldRef<"productsDev", 'DateTime'>
    readonly img_url: FieldRef<"productsDev", 'String'>
    readonly product_category: FieldRef<"productsDev", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * productsDev findUnique
   */
  export type productsDevFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productsDev
     */
    select?: productsDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productsDev
     */
    omit?: productsDevOmit<ExtArgs> | null
    /**
     * Filter, which productsDev to fetch.
     */
    where: productsDevWhereUniqueInput
  }

  /**
   * productsDev findUniqueOrThrow
   */
  export type productsDevFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productsDev
     */
    select?: productsDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productsDev
     */
    omit?: productsDevOmit<ExtArgs> | null
    /**
     * Filter, which productsDev to fetch.
     */
    where: productsDevWhereUniqueInput
  }

  /**
   * productsDev findFirst
   */
  export type productsDevFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productsDev
     */
    select?: productsDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productsDev
     */
    omit?: productsDevOmit<ExtArgs> | null
    /**
     * Filter, which productsDev to fetch.
     */
    where?: productsDevWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productsDevs to fetch.
     */
    orderBy?: productsDevOrderByWithRelationInput | productsDevOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productsDevs.
     */
    cursor?: productsDevWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productsDevs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productsDevs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productsDevs.
     */
    distinct?: ProductsDevScalarFieldEnum | ProductsDevScalarFieldEnum[]
  }

  /**
   * productsDev findFirstOrThrow
   */
  export type productsDevFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productsDev
     */
    select?: productsDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productsDev
     */
    omit?: productsDevOmit<ExtArgs> | null
    /**
     * Filter, which productsDev to fetch.
     */
    where?: productsDevWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productsDevs to fetch.
     */
    orderBy?: productsDevOrderByWithRelationInput | productsDevOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productsDevs.
     */
    cursor?: productsDevWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productsDevs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productsDevs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productsDevs.
     */
    distinct?: ProductsDevScalarFieldEnum | ProductsDevScalarFieldEnum[]
  }

  /**
   * productsDev findMany
   */
  export type productsDevFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productsDev
     */
    select?: productsDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productsDev
     */
    omit?: productsDevOmit<ExtArgs> | null
    /**
     * Filter, which productsDevs to fetch.
     */
    where?: productsDevWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productsDevs to fetch.
     */
    orderBy?: productsDevOrderByWithRelationInput | productsDevOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing productsDevs.
     */
    cursor?: productsDevWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productsDevs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productsDevs.
     */
    skip?: number
    distinct?: ProductsDevScalarFieldEnum | ProductsDevScalarFieldEnum[]
  }

  /**
   * productsDev create
   */
  export type productsDevCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productsDev
     */
    select?: productsDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productsDev
     */
    omit?: productsDevOmit<ExtArgs> | null
    /**
     * The data needed to create a productsDev.
     */
    data: XOR<productsDevCreateInput, productsDevUncheckedCreateInput>
  }

  /**
   * productsDev createMany
   */
  export type productsDevCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many productsDevs.
     */
    data: productsDevCreateManyInput | productsDevCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * productsDev createManyAndReturn
   */
  export type productsDevCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productsDev
     */
    select?: productsDevSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the productsDev
     */
    omit?: productsDevOmit<ExtArgs> | null
    /**
     * The data used to create many productsDevs.
     */
    data: productsDevCreateManyInput | productsDevCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * productsDev update
   */
  export type productsDevUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productsDev
     */
    select?: productsDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productsDev
     */
    omit?: productsDevOmit<ExtArgs> | null
    /**
     * The data needed to update a productsDev.
     */
    data: XOR<productsDevUpdateInput, productsDevUncheckedUpdateInput>
    /**
     * Choose, which productsDev to update.
     */
    where: productsDevWhereUniqueInput
  }

  /**
   * productsDev updateMany
   */
  export type productsDevUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update productsDevs.
     */
    data: XOR<productsDevUpdateManyMutationInput, productsDevUncheckedUpdateManyInput>
    /**
     * Filter which productsDevs to update
     */
    where?: productsDevWhereInput
    /**
     * Limit how many productsDevs to update.
     */
    limit?: number
  }

  /**
   * productsDev updateManyAndReturn
   */
  export type productsDevUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productsDev
     */
    select?: productsDevSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the productsDev
     */
    omit?: productsDevOmit<ExtArgs> | null
    /**
     * The data used to update productsDevs.
     */
    data: XOR<productsDevUpdateManyMutationInput, productsDevUncheckedUpdateManyInput>
    /**
     * Filter which productsDevs to update
     */
    where?: productsDevWhereInput
    /**
     * Limit how many productsDevs to update.
     */
    limit?: number
  }

  /**
   * productsDev upsert
   */
  export type productsDevUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productsDev
     */
    select?: productsDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productsDev
     */
    omit?: productsDevOmit<ExtArgs> | null
    /**
     * The filter to search for the productsDev to update in case it exists.
     */
    where: productsDevWhereUniqueInput
    /**
     * In case the productsDev found by the `where` argument doesn't exist, create a new productsDev with this data.
     */
    create: XOR<productsDevCreateInput, productsDevUncheckedCreateInput>
    /**
     * In case the productsDev was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsDevUpdateInput, productsDevUncheckedUpdateInput>
  }

  /**
   * productsDev delete
   */
  export type productsDevDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productsDev
     */
    select?: productsDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productsDev
     */
    omit?: productsDevOmit<ExtArgs> | null
    /**
     * Filter which productsDev to delete.
     */
    where: productsDevWhereUniqueInput
  }

  /**
   * productsDev deleteMany
   */
  export type productsDevDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productsDevs to delete
     */
    where?: productsDevWhereInput
    /**
     * Limit how many productsDevs to delete.
     */
    limit?: number
  }

  /**
   * productsDev without action
   */
  export type productsDevDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productsDev
     */
    select?: productsDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productsDev
     */
    omit?: productsDevOmit<ExtArgs> | null
  }


  /**
   * Model productsProd
   */

  export type AggregateProductsProd = {
    _count: ProductsProdCountAggregateOutputType | null
    _avg: ProductsProdAvgAggregateOutputType | null
    _sum: ProductsProdSumAggregateOutputType | null
    _min: ProductsProdMinAggregateOutputType | null
    _max: ProductsProdMaxAggregateOutputType | null
  }

  export type ProductsProdAvgAggregateOutputType = {
    id: number | null
    precio: number | null
    stock: number | null
    product_category: number | null
  }

  export type ProductsProdSumAggregateOutputType = {
    id: number | null
    precio: number | null
    stock: number | null
    product_category: number | null
  }

  export type ProductsProdMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    precio: number | null
    stock: number | null
    activo: boolean | null
    creado_en: Date | null
    actualizado_en: Date | null
    img_url: string | null
    product_category: number | null
  }

  export type ProductsProdMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    precio: number | null
    stock: number | null
    activo: boolean | null
    creado_en: Date | null
    actualizado_en: Date | null
    img_url: string | null
    product_category: number | null
  }

  export type ProductsProdCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    precio: number
    stock: number
    activo: number
    creado_en: number
    actualizado_en: number
    img_url: number
    product_category: number
    _all: number
  }


  export type ProductsProdAvgAggregateInputType = {
    id?: true
    precio?: true
    stock?: true
    product_category?: true
  }

  export type ProductsProdSumAggregateInputType = {
    id?: true
    precio?: true
    stock?: true
    product_category?: true
  }

  export type ProductsProdMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    stock?: true
    activo?: true
    creado_en?: true
    actualizado_en?: true
    img_url?: true
    product_category?: true
  }

  export type ProductsProdMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    stock?: true
    activo?: true
    creado_en?: true
    actualizado_en?: true
    img_url?: true
    product_category?: true
  }

  export type ProductsProdCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    stock?: true
    activo?: true
    creado_en?: true
    actualizado_en?: true
    img_url?: true
    product_category?: true
    _all?: true
  }

  export type ProductsProdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productsProd to aggregate.
     */
    where?: productsProdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productsProds to fetch.
     */
    orderBy?: productsProdOrderByWithRelationInput | productsProdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsProdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productsProds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productsProds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned productsProds
    **/
    _count?: true | ProductsProdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsProdAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsProdSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsProdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsProdMaxAggregateInputType
  }

  export type GetProductsProdAggregateType<T extends ProductsProdAggregateArgs> = {
        [P in keyof T & keyof AggregateProductsProd]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductsProd[P]>
      : GetScalarType<T[P], AggregateProductsProd[P]>
  }




  export type productsProdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsProdWhereInput
    orderBy?: productsProdOrderByWithAggregationInput | productsProdOrderByWithAggregationInput[]
    by: ProductsProdScalarFieldEnum[] | ProductsProdScalarFieldEnum
    having?: productsProdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsProdCountAggregateInputType | true
    _avg?: ProductsProdAvgAggregateInputType
    _sum?: ProductsProdSumAggregateInputType
    _min?: ProductsProdMinAggregateInputType
    _max?: ProductsProdMaxAggregateInputType
  }

  export type ProductsProdGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string | null
    precio: number
    stock: number
    activo: boolean
    creado_en: Date
    actualizado_en: Date
    img_url: string
    product_category: number | null
    _count: ProductsProdCountAggregateOutputType | null
    _avg: ProductsProdAvgAggregateOutputType | null
    _sum: ProductsProdSumAggregateOutputType | null
    _min: ProductsProdMinAggregateOutputType | null
    _max: ProductsProdMaxAggregateOutputType | null
  }

  type GetProductsProdGroupByPayload<T extends productsProdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsProdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsProdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsProdGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsProdGroupByOutputType[P]>
        }
      >
    >


  export type productsProdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    stock?: boolean
    activo?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
    img_url?: boolean
    product_category?: boolean
  }, ExtArgs["result"]["productsProd"]>

  export type productsProdSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    stock?: boolean
    activo?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
    img_url?: boolean
    product_category?: boolean
  }, ExtArgs["result"]["productsProd"]>

  export type productsProdSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    stock?: boolean
    activo?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
    img_url?: boolean
    product_category?: boolean
  }, ExtArgs["result"]["productsProd"]>

  export type productsProdSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    stock?: boolean
    activo?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
    img_url?: boolean
    product_category?: boolean
  }

  export type productsProdOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "precio" | "stock" | "activo" | "creado_en" | "actualizado_en" | "img_url" | "product_category", ExtArgs["result"]["productsProd"]>

  export type $productsProdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "productsProd"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string | null
      precio: number
      stock: number
      activo: boolean
      creado_en: Date
      actualizado_en: Date
      img_url: string
      product_category: number | null
    }, ExtArgs["result"]["productsProd"]>
    composites: {}
  }

  type productsProdGetPayload<S extends boolean | null | undefined | productsProdDefaultArgs> = $Result.GetResult<Prisma.$productsProdPayload, S>

  type productsProdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productsProdFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsProdCountAggregateInputType | true
    }

  export interface productsProdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['productsProd'], meta: { name: 'productsProd' } }
    /**
     * Find zero or one ProductsProd that matches the filter.
     * @param {productsProdFindUniqueArgs} args - Arguments to find a ProductsProd
     * @example
     * // Get one ProductsProd
     * const productsProd = await prisma.productsDevProd.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsProdFindUniqueArgs>(args: SelectSubset<T, productsProdFindUniqueArgs<ExtArgs>>): Prisma__productsProdClient<$Result.GetResult<Prisma.$productsProdPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductsProd that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productsProdFindUniqueOrThrowArgs} args - Arguments to find a ProductsProd
     * @example
     * // Get one ProductsProd
     * const productsProd = await prisma.productsDevProd.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsProdFindUniqueOrThrowArgs>(args: SelectSubset<T, productsProdFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsProdClient<$Result.GetResult<Prisma.$productsProdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductsProd that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsProdFindFirstArgs} args - Arguments to find a ProductsProd
     * @example
     * // Get one ProductsProd
     * const productsProd = await prisma.productsDevProd.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsProdFindFirstArgs>(args?: SelectSubset<T, productsProdFindFirstArgs<ExtArgs>>): Prisma__productsProdClient<$Result.GetResult<Prisma.$productsProdPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductsProd that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsProdFindFirstOrThrowArgs} args - Arguments to find a ProductsProd
     * @example
     * // Get one ProductsProd
     * const productsProd = await prisma.productsDevProd.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsProdFindFirstOrThrowArgs>(args?: SelectSubset<T, productsProdFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsProdClient<$Result.GetResult<Prisma.$productsProdPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductsProds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsProdFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductsProds
     * const productsProds = await prisma.productsDevProd.findMany()
     * 
     * // Get first 10 ProductsProds
     * const productsProds = await prisma.productsDevProd.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsProdWithIdOnly = await prisma.productsDevProd.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productsProdFindManyArgs>(args?: SelectSubset<T, productsProdFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsProdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductsProd.
     * @param {productsProdCreateArgs} args - Arguments to create a ProductsProd.
     * @example
     * // Create one ProductsProd
     * const ProductsProd = await prisma.productsDevProd.create({
     *   data: {
     *     // ... data to create a ProductsProd
     *   }
     * })
     * 
     */
    create<T extends productsProdCreateArgs>(args: SelectSubset<T, productsProdCreateArgs<ExtArgs>>): Prisma__productsProdClient<$Result.GetResult<Prisma.$productsProdPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductsProds.
     * @param {productsProdCreateManyArgs} args - Arguments to create many ProductsProds.
     * @example
     * // Create many ProductsProds
     * const productsProd = await prisma.productsDevProd.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsProdCreateManyArgs>(args?: SelectSubset<T, productsProdCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductsProds and returns the data saved in the database.
     * @param {productsProdCreateManyAndReturnArgs} args - Arguments to create many ProductsProds.
     * @example
     * // Create many ProductsProds
     * const productsProd = await prisma.productsDevProd.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductsProds and only return the `id`
     * const productsProdWithIdOnly = await prisma.productsDevProd.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productsProdCreateManyAndReturnArgs>(args?: SelectSubset<T, productsProdCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsProdPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductsProd.
     * @param {productsProdDeleteArgs} args - Arguments to delete one ProductsProd.
     * @example
     * // Delete one ProductsProd
     * const ProductsProd = await prisma.productsDevProd.delete({
     *   where: {
     *     // ... filter to delete one ProductsProd
     *   }
     * })
     * 
     */
    delete<T extends productsProdDeleteArgs>(args: SelectSubset<T, productsProdDeleteArgs<ExtArgs>>): Prisma__productsProdClient<$Result.GetResult<Prisma.$productsProdPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductsProd.
     * @param {productsProdUpdateArgs} args - Arguments to update one ProductsProd.
     * @example
     * // Update one ProductsProd
     * const productsProd = await prisma.productsDevProd.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsProdUpdateArgs>(args: SelectSubset<T, productsProdUpdateArgs<ExtArgs>>): Prisma__productsProdClient<$Result.GetResult<Prisma.$productsProdPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductsProds.
     * @param {productsProdDeleteManyArgs} args - Arguments to filter ProductsProds to delete.
     * @example
     * // Delete a few ProductsProds
     * const { count } = await prisma.productsDevProd.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsProdDeleteManyArgs>(args?: SelectSubset<T, productsProdDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductsProds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsProdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductsProds
     * const productsProd = await prisma.productsDevProd.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsProdUpdateManyArgs>(args: SelectSubset<T, productsProdUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductsProds and returns the data updated in the database.
     * @param {productsProdUpdateManyAndReturnArgs} args - Arguments to update many ProductsProds.
     * @example
     * // Update many ProductsProds
     * const productsProd = await prisma.productsDevProd.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductsProds and only return the `id`
     * const productsProdWithIdOnly = await prisma.productsDevProd.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends productsProdUpdateManyAndReturnArgs>(args: SelectSubset<T, productsProdUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsProdPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductsProd.
     * @param {productsProdUpsertArgs} args - Arguments to update or create a ProductsProd.
     * @example
     * // Update or create a ProductsProd
     * const productsProd = await prisma.productsDevProd.upsert({
     *   create: {
     *     // ... data to create a ProductsProd
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductsProd we want to update
     *   }
     * })
     */
    upsert<T extends productsProdUpsertArgs>(args: SelectSubset<T, productsProdUpsertArgs<ExtArgs>>): Prisma__productsProdClient<$Result.GetResult<Prisma.$productsProdPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductsProds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsProdCountArgs} args - Arguments to filter ProductsProds to count.
     * @example
     * // Count the number of ProductsProds
     * const count = await prisma.productsDevProd.count({
     *   where: {
     *     // ... the filter for the ProductsProds we want to count
     *   }
     * })
    **/
    count<T extends productsProdCountArgs>(
      args?: Subset<T, productsProdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsProdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductsProd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsProdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsProdAggregateArgs>(args: Subset<T, ProductsProdAggregateArgs>): Prisma.PrismaPromise<GetProductsProdAggregateType<T>>

    /**
     * Group by ProductsProd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsProdGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productsProdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsProdGroupByArgs['orderBy'] }
        : { orderBy?: productsProdGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productsProdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsProdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the productsProd model
   */
  readonly fields: productsProdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for productsProd.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsProdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the productsProd model
   */
  interface productsProdFieldRefs {
    readonly id: FieldRef<"productsProd", 'Int'>
    readonly nombre: FieldRef<"productsProd", 'String'>
    readonly descripcion: FieldRef<"productsProd", 'String'>
    readonly precio: FieldRef<"productsProd", 'Float'>
    readonly stock: FieldRef<"productsProd", 'Int'>
    readonly activo: FieldRef<"productsProd", 'Boolean'>
    readonly creado_en: FieldRef<"productsProd", 'DateTime'>
    readonly actualizado_en: FieldRef<"productsProd", 'DateTime'>
    readonly img_url: FieldRef<"productsProd", 'String'>
    readonly product_category: FieldRef<"productsProd", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * productsProd findUnique
   */
  export type productsProdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productsProd
     */
    select?: productsProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productsProd
     */
    omit?: productsProdOmit<ExtArgs> | null
    /**
     * Filter, which productsProd to fetch.
     */
    where: productsProdWhereUniqueInput
  }

  /**
   * productsProd findUniqueOrThrow
   */
  export type productsProdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productsProd
     */
    select?: productsProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productsProd
     */
    omit?: productsProdOmit<ExtArgs> | null
    /**
     * Filter, which productsProd to fetch.
     */
    where: productsProdWhereUniqueInput
  }

  /**
   * productsProd findFirst
   */
  export type productsProdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productsProd
     */
    select?: productsProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productsProd
     */
    omit?: productsProdOmit<ExtArgs> | null
    /**
     * Filter, which productsProd to fetch.
     */
    where?: productsProdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productsProds to fetch.
     */
    orderBy?: productsProdOrderByWithRelationInput | productsProdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productsProds.
     */
    cursor?: productsProdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productsProds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productsProds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productsProds.
     */
    distinct?: ProductsProdScalarFieldEnum | ProductsProdScalarFieldEnum[]
  }

  /**
   * productsProd findFirstOrThrow
   */
  export type productsProdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productsProd
     */
    select?: productsProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productsProd
     */
    omit?: productsProdOmit<ExtArgs> | null
    /**
     * Filter, which productsProd to fetch.
     */
    where?: productsProdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productsProds to fetch.
     */
    orderBy?: productsProdOrderByWithRelationInput | productsProdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productsProds.
     */
    cursor?: productsProdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productsProds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productsProds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productsProds.
     */
    distinct?: ProductsProdScalarFieldEnum | ProductsProdScalarFieldEnum[]
  }

  /**
   * productsProd findMany
   */
  export type productsProdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productsProd
     */
    select?: productsProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productsProd
     */
    omit?: productsProdOmit<ExtArgs> | null
    /**
     * Filter, which productsProds to fetch.
     */
    where?: productsProdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productsProds to fetch.
     */
    orderBy?: productsProdOrderByWithRelationInput | productsProdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing productsProds.
     */
    cursor?: productsProdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productsProds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productsProds.
     */
    skip?: number
    distinct?: ProductsProdScalarFieldEnum | ProductsProdScalarFieldEnum[]
  }

  /**
   * productsProd create
   */
  export type productsProdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productsProd
     */
    select?: productsProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productsProd
     */
    omit?: productsProdOmit<ExtArgs> | null
    /**
     * The data needed to create a productsProd.
     */
    data: XOR<productsProdCreateInput, productsProdUncheckedCreateInput>
  }

  /**
   * productsProd createMany
   */
  export type productsProdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many productsProds.
     */
    data: productsProdCreateManyInput | productsProdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * productsProd createManyAndReturn
   */
  export type productsProdCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productsProd
     */
    select?: productsProdSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the productsProd
     */
    omit?: productsProdOmit<ExtArgs> | null
    /**
     * The data used to create many productsProds.
     */
    data: productsProdCreateManyInput | productsProdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * productsProd update
   */
  export type productsProdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productsProd
     */
    select?: productsProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productsProd
     */
    omit?: productsProdOmit<ExtArgs> | null
    /**
     * The data needed to update a productsProd.
     */
    data: XOR<productsProdUpdateInput, productsProdUncheckedUpdateInput>
    /**
     * Choose, which productsProd to update.
     */
    where: productsProdWhereUniqueInput
  }

  /**
   * productsProd updateMany
   */
  export type productsProdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update productsProds.
     */
    data: XOR<productsProdUpdateManyMutationInput, productsProdUncheckedUpdateManyInput>
    /**
     * Filter which productsProds to update
     */
    where?: productsProdWhereInput
    /**
     * Limit how many productsProds to update.
     */
    limit?: number
  }

  /**
   * productsProd updateManyAndReturn
   */
  export type productsProdUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productsProd
     */
    select?: productsProdSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the productsProd
     */
    omit?: productsProdOmit<ExtArgs> | null
    /**
     * The data used to update productsProds.
     */
    data: XOR<productsProdUpdateManyMutationInput, productsProdUncheckedUpdateManyInput>
    /**
     * Filter which productsProds to update
     */
    where?: productsProdWhereInput
    /**
     * Limit how many productsProds to update.
     */
    limit?: number
  }

  /**
   * productsProd upsert
   */
  export type productsProdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productsProd
     */
    select?: productsProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productsProd
     */
    omit?: productsProdOmit<ExtArgs> | null
    /**
     * The filter to search for the productsProd to update in case it exists.
     */
    where: productsProdWhereUniqueInput
    /**
     * In case the productsProd found by the `where` argument doesn't exist, create a new productsProd with this data.
     */
    create: XOR<productsProdCreateInput, productsProdUncheckedCreateInput>
    /**
     * In case the productsProd was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsProdUpdateInput, productsProdUncheckedUpdateInput>
  }

  /**
   * productsProd delete
   */
  export type productsProdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productsProd
     */
    select?: productsProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productsProd
     */
    omit?: productsProdOmit<ExtArgs> | null
    /**
     * Filter which productsProd to delete.
     */
    where: productsProdWhereUniqueInput
  }

  /**
   * productsProd deleteMany
   */
  export type productsProdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productsProds to delete
     */
    where?: productsProdWhereInput
    /**
     * Limit how many productsProds to delete.
     */
    limit?: number
  }

  /**
   * productsProd without action
   */
  export type productsProdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productsProd
     */
    select?: productsProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productsProd
     */
    omit?: productsProdOmit<ExtArgs> | null
  }


  /**
   * Model usersDev
   */

  export type AggregateUsersDev = {
    _count: UsersDevCountAggregateOutputType | null
    _avg: UsersDevAvgAggregateOutputType | null
    _sum: UsersDevSumAggregateOutputType | null
    _min: UsersDevMinAggregateOutputType | null
    _max: UsersDevMaxAggregateOutputType | null
  }

  export type UsersDevAvgAggregateOutputType = {
    id: number | null
    rol_id: number | null
  }

  export type UsersDevSumAggregateOutputType = {
    id: number | null
    rol_id: number | null
  }

  export type UsersDevMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    password_hash: string | null
    rol_id: number | null
    token_jwt: string | null
    token_refresh: string | null
    ultimo_login: Date | null
    creado_en: Date | null
    actualizado_en: Date | null
    activo: boolean | null
  }

  export type UsersDevMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    password_hash: string | null
    rol_id: number | null
    token_jwt: string | null
    token_refresh: string | null
    ultimo_login: Date | null
    creado_en: Date | null
    actualizado_en: Date | null
    activo: boolean | null
  }

  export type UsersDevCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    password_hash: number
    rol_id: number
    token_jwt: number
    token_refresh: number
    ultimo_login: number
    creado_en: number
    actualizado_en: number
    activo: number
    _all: number
  }


  export type UsersDevAvgAggregateInputType = {
    id?: true
    rol_id?: true
  }

  export type UsersDevSumAggregateInputType = {
    id?: true
    rol_id?: true
  }

  export type UsersDevMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password_hash?: true
    rol_id?: true
    token_jwt?: true
    token_refresh?: true
    ultimo_login?: true
    creado_en?: true
    actualizado_en?: true
    activo?: true
  }

  export type UsersDevMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password_hash?: true
    rol_id?: true
    token_jwt?: true
    token_refresh?: true
    ultimo_login?: true
    creado_en?: true
    actualizado_en?: true
    activo?: true
  }

  export type UsersDevCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password_hash?: true
    rol_id?: true
    token_jwt?: true
    token_refresh?: true
    ultimo_login?: true
    creado_en?: true
    actualizado_en?: true
    activo?: true
    _all?: true
  }

  export type UsersDevAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usersDev to aggregate.
     */
    where?: usersDevWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usersDevs to fetch.
     */
    orderBy?: usersDevOrderByWithRelationInput | usersDevOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersDevWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usersDevs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usersDevs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usersDevs
    **/
    _count?: true | UsersDevCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersDevAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersDevSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersDevMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersDevMaxAggregateInputType
  }

  export type GetUsersDevAggregateType<T extends UsersDevAggregateArgs> = {
        [P in keyof T & keyof AggregateUsersDev]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsersDev[P]>
      : GetScalarType<T[P], AggregateUsersDev[P]>
  }




  export type usersDevGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersDevWhereInput
    orderBy?: usersDevOrderByWithAggregationInput | usersDevOrderByWithAggregationInput[]
    by: UsersDevScalarFieldEnum[] | UsersDevScalarFieldEnum
    having?: usersDevScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersDevCountAggregateInputType | true
    _avg?: UsersDevAvgAggregateInputType
    _sum?: UsersDevSumAggregateInputType
    _min?: UsersDevMinAggregateInputType
    _max?: UsersDevMaxAggregateInputType
  }

  export type UsersDevGroupByOutputType = {
    id: number
    nombre: string
    email: string
    password_hash: string
    rol_id: number
    token_jwt: string | null
    token_refresh: string | null
    ultimo_login: Date | null
    creado_en: Date
    actualizado_en: Date
    activo: boolean
    _count: UsersDevCountAggregateOutputType | null
    _avg: UsersDevAvgAggregateOutputType | null
    _sum: UsersDevSumAggregateOutputType | null
    _min: UsersDevMinAggregateOutputType | null
    _max: UsersDevMaxAggregateOutputType | null
  }

  type GetUsersDevGroupByPayload<T extends usersDevGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersDevGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersDevGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersDevGroupByOutputType[P]>
            : GetScalarType<T[P], UsersDevGroupByOutputType[P]>
        }
      >
    >


  export type usersDevSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password_hash?: boolean
    rol_id?: boolean
    token_jwt?: boolean
    token_refresh?: boolean
    ultimo_login?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
    activo?: boolean
  }, ExtArgs["result"]["usersDev"]>

  export type usersDevSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password_hash?: boolean
    rol_id?: boolean
    token_jwt?: boolean
    token_refresh?: boolean
    ultimo_login?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
    activo?: boolean
  }, ExtArgs["result"]["usersDev"]>

  export type usersDevSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password_hash?: boolean
    rol_id?: boolean
    token_jwt?: boolean
    token_refresh?: boolean
    ultimo_login?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
    activo?: boolean
  }, ExtArgs["result"]["usersDev"]>

  export type usersDevSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    password_hash?: boolean
    rol_id?: boolean
    token_jwt?: boolean
    token_refresh?: boolean
    ultimo_login?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
    activo?: boolean
  }

  export type usersDevOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "email" | "password_hash" | "rol_id" | "token_jwt" | "token_refresh" | "ultimo_login" | "creado_en" | "actualizado_en" | "activo", ExtArgs["result"]["usersDev"]>

  export type $usersDevPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usersDev"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      email: string
      password_hash: string
      rol_id: number
      token_jwt: string | null
      token_refresh: string | null
      ultimo_login: Date | null
      creado_en: Date
      actualizado_en: Date
      activo: boolean
    }, ExtArgs["result"]["usersDev"]>
    composites: {}
  }

  type usersDevGetPayload<S extends boolean | null | undefined | usersDevDefaultArgs> = $Result.GetResult<Prisma.$usersDevPayload, S>

  type usersDevCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersDevFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersDevCountAggregateInputType | true
    }

  export interface usersDevDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usersDev'], meta: { name: 'usersDev' } }
    /**
     * Find zero or one UsersDev that matches the filter.
     * @param {usersDevFindUniqueArgs} args - Arguments to find a UsersDev
     * @example
     * // Get one UsersDev
     * const usersDev = await prisma.usersDev.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersDevFindUniqueArgs>(args: SelectSubset<T, usersDevFindUniqueArgs<ExtArgs>>): Prisma__usersDevClient<$Result.GetResult<Prisma.$usersDevPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsersDev that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersDevFindUniqueOrThrowArgs} args - Arguments to find a UsersDev
     * @example
     * // Get one UsersDev
     * const usersDev = await prisma.usersDev.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersDevFindUniqueOrThrowArgs>(args: SelectSubset<T, usersDevFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersDevClient<$Result.GetResult<Prisma.$usersDevPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsersDev that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersDevFindFirstArgs} args - Arguments to find a UsersDev
     * @example
     * // Get one UsersDev
     * const usersDev = await prisma.usersDev.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersDevFindFirstArgs>(args?: SelectSubset<T, usersDevFindFirstArgs<ExtArgs>>): Prisma__usersDevClient<$Result.GetResult<Prisma.$usersDevPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsersDev that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersDevFindFirstOrThrowArgs} args - Arguments to find a UsersDev
     * @example
     * // Get one UsersDev
     * const usersDev = await prisma.usersDev.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersDevFindFirstOrThrowArgs>(args?: SelectSubset<T, usersDevFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersDevClient<$Result.GetResult<Prisma.$usersDevPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsersDevs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersDevFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsersDevs
     * const usersDevs = await prisma.usersDev.findMany()
     * 
     * // Get first 10 UsersDevs
     * const usersDevs = await prisma.usersDev.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersDevWithIdOnly = await prisma.usersDev.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersDevFindManyArgs>(args?: SelectSubset<T, usersDevFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersDevPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsersDev.
     * @param {usersDevCreateArgs} args - Arguments to create a UsersDev.
     * @example
     * // Create one UsersDev
     * const UsersDev = await prisma.usersDev.create({
     *   data: {
     *     // ... data to create a UsersDev
     *   }
     * })
     * 
     */
    create<T extends usersDevCreateArgs>(args: SelectSubset<T, usersDevCreateArgs<ExtArgs>>): Prisma__usersDevClient<$Result.GetResult<Prisma.$usersDevPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsersDevs.
     * @param {usersDevCreateManyArgs} args - Arguments to create many UsersDevs.
     * @example
     * // Create many UsersDevs
     * const usersDev = await prisma.usersDev.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersDevCreateManyArgs>(args?: SelectSubset<T, usersDevCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsersDevs and returns the data saved in the database.
     * @param {usersDevCreateManyAndReturnArgs} args - Arguments to create many UsersDevs.
     * @example
     * // Create many UsersDevs
     * const usersDev = await prisma.usersDev.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsersDevs and only return the `id`
     * const usersDevWithIdOnly = await prisma.usersDev.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersDevCreateManyAndReturnArgs>(args?: SelectSubset<T, usersDevCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersDevPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UsersDev.
     * @param {usersDevDeleteArgs} args - Arguments to delete one UsersDev.
     * @example
     * // Delete one UsersDev
     * const UsersDev = await prisma.usersDev.delete({
     *   where: {
     *     // ... filter to delete one UsersDev
     *   }
     * })
     * 
     */
    delete<T extends usersDevDeleteArgs>(args: SelectSubset<T, usersDevDeleteArgs<ExtArgs>>): Prisma__usersDevClient<$Result.GetResult<Prisma.$usersDevPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsersDev.
     * @param {usersDevUpdateArgs} args - Arguments to update one UsersDev.
     * @example
     * // Update one UsersDev
     * const usersDev = await prisma.usersDev.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersDevUpdateArgs>(args: SelectSubset<T, usersDevUpdateArgs<ExtArgs>>): Prisma__usersDevClient<$Result.GetResult<Prisma.$usersDevPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsersDevs.
     * @param {usersDevDeleteManyArgs} args - Arguments to filter UsersDevs to delete.
     * @example
     * // Delete a few UsersDevs
     * const { count } = await prisma.usersDev.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDevDeleteManyArgs>(args?: SelectSubset<T, usersDevDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsersDevs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersDevUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsersDevs
     * const usersDev = await prisma.usersDev.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersDevUpdateManyArgs>(args: SelectSubset<T, usersDevUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsersDevs and returns the data updated in the database.
     * @param {usersDevUpdateManyAndReturnArgs} args - Arguments to update many UsersDevs.
     * @example
     * // Update many UsersDevs
     * const usersDev = await prisma.usersDev.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsersDevs and only return the `id`
     * const usersDevWithIdOnly = await prisma.usersDev.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersDevUpdateManyAndReturnArgs>(args: SelectSubset<T, usersDevUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersDevPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UsersDev.
     * @param {usersDevUpsertArgs} args - Arguments to update or create a UsersDev.
     * @example
     * // Update or create a UsersDev
     * const usersDev = await prisma.usersDev.upsert({
     *   create: {
     *     // ... data to create a UsersDev
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsersDev we want to update
     *   }
     * })
     */
    upsert<T extends usersDevUpsertArgs>(args: SelectSubset<T, usersDevUpsertArgs<ExtArgs>>): Prisma__usersDevClient<$Result.GetResult<Prisma.$usersDevPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsersDevs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersDevCountArgs} args - Arguments to filter UsersDevs to count.
     * @example
     * // Count the number of UsersDevs
     * const count = await prisma.usersDev.count({
     *   where: {
     *     // ... the filter for the UsersDevs we want to count
     *   }
     * })
    **/
    count<T extends usersDevCountArgs>(
      args?: Subset<T, usersDevCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersDevCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsersDev.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersDevAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersDevAggregateArgs>(args: Subset<T, UsersDevAggregateArgs>): Prisma.PrismaPromise<GetUsersDevAggregateType<T>>

    /**
     * Group by UsersDev.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersDevGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersDevGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersDevGroupByArgs['orderBy'] }
        : { orderBy?: usersDevGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersDevGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersDevGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usersDev model
   */
  readonly fields: usersDevFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usersDev.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersDevClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usersDev model
   */
  interface usersDevFieldRefs {
    readonly id: FieldRef<"usersDev", 'Int'>
    readonly nombre: FieldRef<"usersDev", 'String'>
    readonly email: FieldRef<"usersDev", 'String'>
    readonly password_hash: FieldRef<"usersDev", 'String'>
    readonly rol_id: FieldRef<"usersDev", 'Int'>
    readonly token_jwt: FieldRef<"usersDev", 'String'>
    readonly token_refresh: FieldRef<"usersDev", 'String'>
    readonly ultimo_login: FieldRef<"usersDev", 'DateTime'>
    readonly creado_en: FieldRef<"usersDev", 'DateTime'>
    readonly actualizado_en: FieldRef<"usersDev", 'DateTime'>
    readonly activo: FieldRef<"usersDev", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * usersDev findUnique
   */
  export type usersDevFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersDev
     */
    select?: usersDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usersDev
     */
    omit?: usersDevOmit<ExtArgs> | null
    /**
     * Filter, which usersDev to fetch.
     */
    where: usersDevWhereUniqueInput
  }

  /**
   * usersDev findUniqueOrThrow
   */
  export type usersDevFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersDev
     */
    select?: usersDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usersDev
     */
    omit?: usersDevOmit<ExtArgs> | null
    /**
     * Filter, which usersDev to fetch.
     */
    where: usersDevWhereUniqueInput
  }

  /**
   * usersDev findFirst
   */
  export type usersDevFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersDev
     */
    select?: usersDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usersDev
     */
    omit?: usersDevOmit<ExtArgs> | null
    /**
     * Filter, which usersDev to fetch.
     */
    where?: usersDevWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usersDevs to fetch.
     */
    orderBy?: usersDevOrderByWithRelationInput | usersDevOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usersDevs.
     */
    cursor?: usersDevWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usersDevs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usersDevs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usersDevs.
     */
    distinct?: UsersDevScalarFieldEnum | UsersDevScalarFieldEnum[]
  }

  /**
   * usersDev findFirstOrThrow
   */
  export type usersDevFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersDev
     */
    select?: usersDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usersDev
     */
    omit?: usersDevOmit<ExtArgs> | null
    /**
     * Filter, which usersDev to fetch.
     */
    where?: usersDevWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usersDevs to fetch.
     */
    orderBy?: usersDevOrderByWithRelationInput | usersDevOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usersDevs.
     */
    cursor?: usersDevWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usersDevs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usersDevs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usersDevs.
     */
    distinct?: UsersDevScalarFieldEnum | UsersDevScalarFieldEnum[]
  }

  /**
   * usersDev findMany
   */
  export type usersDevFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersDev
     */
    select?: usersDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usersDev
     */
    omit?: usersDevOmit<ExtArgs> | null
    /**
     * Filter, which usersDevs to fetch.
     */
    where?: usersDevWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usersDevs to fetch.
     */
    orderBy?: usersDevOrderByWithRelationInput | usersDevOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usersDevs.
     */
    cursor?: usersDevWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usersDevs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usersDevs.
     */
    skip?: number
    distinct?: UsersDevScalarFieldEnum | UsersDevScalarFieldEnum[]
  }

  /**
   * usersDev create
   */
  export type usersDevCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersDev
     */
    select?: usersDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usersDev
     */
    omit?: usersDevOmit<ExtArgs> | null
    /**
     * The data needed to create a usersDev.
     */
    data: XOR<usersDevCreateInput, usersDevUncheckedCreateInput>
  }

  /**
   * usersDev createMany
   */
  export type usersDevCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usersDevs.
     */
    data: usersDevCreateManyInput | usersDevCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usersDev createManyAndReturn
   */
  export type usersDevCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersDev
     */
    select?: usersDevSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usersDev
     */
    omit?: usersDevOmit<ExtArgs> | null
    /**
     * The data used to create many usersDevs.
     */
    data: usersDevCreateManyInput | usersDevCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usersDev update
   */
  export type usersDevUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersDev
     */
    select?: usersDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usersDev
     */
    omit?: usersDevOmit<ExtArgs> | null
    /**
     * The data needed to update a usersDev.
     */
    data: XOR<usersDevUpdateInput, usersDevUncheckedUpdateInput>
    /**
     * Choose, which usersDev to update.
     */
    where: usersDevWhereUniqueInput
  }

  /**
   * usersDev updateMany
   */
  export type usersDevUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usersDevs.
     */
    data: XOR<usersDevUpdateManyMutationInput, usersDevUncheckedUpdateManyInput>
    /**
     * Filter which usersDevs to update
     */
    where?: usersDevWhereInput
    /**
     * Limit how many usersDevs to update.
     */
    limit?: number
  }

  /**
   * usersDev updateManyAndReturn
   */
  export type usersDevUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersDev
     */
    select?: usersDevSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usersDev
     */
    omit?: usersDevOmit<ExtArgs> | null
    /**
     * The data used to update usersDevs.
     */
    data: XOR<usersDevUpdateManyMutationInput, usersDevUncheckedUpdateManyInput>
    /**
     * Filter which usersDevs to update
     */
    where?: usersDevWhereInput
    /**
     * Limit how many usersDevs to update.
     */
    limit?: number
  }

  /**
   * usersDev upsert
   */
  export type usersDevUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersDev
     */
    select?: usersDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usersDev
     */
    omit?: usersDevOmit<ExtArgs> | null
    /**
     * The filter to search for the usersDev to update in case it exists.
     */
    where: usersDevWhereUniqueInput
    /**
     * In case the usersDev found by the `where` argument doesn't exist, create a new usersDev with this data.
     */
    create: XOR<usersDevCreateInput, usersDevUncheckedCreateInput>
    /**
     * In case the usersDev was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersDevUpdateInput, usersDevUncheckedUpdateInput>
  }

  /**
   * usersDev delete
   */
  export type usersDevDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersDev
     */
    select?: usersDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usersDev
     */
    omit?: usersDevOmit<ExtArgs> | null
    /**
     * Filter which usersDev to delete.
     */
    where: usersDevWhereUniqueInput
  }

  /**
   * usersDev deleteMany
   */
  export type usersDevDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usersDevs to delete
     */
    where?: usersDevWhereInput
    /**
     * Limit how many usersDevs to delete.
     */
    limit?: number
  }

  /**
   * usersDev without action
   */
  export type usersDevDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersDev
     */
    select?: usersDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usersDev
     */
    omit?: usersDevOmit<ExtArgs> | null
  }


  /**
   * Model usersProd
   */

  export type AggregateUsersProd = {
    _count: UsersProdCountAggregateOutputType | null
    _avg: UsersProdAvgAggregateOutputType | null
    _sum: UsersProdSumAggregateOutputType | null
    _min: UsersProdMinAggregateOutputType | null
    _max: UsersProdMaxAggregateOutputType | null
  }

  export type UsersProdAvgAggregateOutputType = {
    id: number | null
    rol_id: number | null
  }

  export type UsersProdSumAggregateOutputType = {
    id: number | null
    rol_id: number | null
  }

  export type UsersProdMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    password_hash: string | null
    rol_id: number | null
    token_jwt: string | null
    token_refresh: string | null
    ultimo_login: Date | null
    creado_en: Date | null
    actualizado_en: Date | null
    activo: boolean | null
  }

  export type UsersProdMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    email: string | null
    password_hash: string | null
    rol_id: number | null
    token_jwt: string | null
    token_refresh: string | null
    ultimo_login: Date | null
    creado_en: Date | null
    actualizado_en: Date | null
    activo: boolean | null
  }

  export type UsersProdCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    password_hash: number
    rol_id: number
    token_jwt: number
    token_refresh: number
    ultimo_login: number
    creado_en: number
    actualizado_en: number
    activo: number
    _all: number
  }


  export type UsersProdAvgAggregateInputType = {
    id?: true
    rol_id?: true
  }

  export type UsersProdSumAggregateInputType = {
    id?: true
    rol_id?: true
  }

  export type UsersProdMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password_hash?: true
    rol_id?: true
    token_jwt?: true
    token_refresh?: true
    ultimo_login?: true
    creado_en?: true
    actualizado_en?: true
    activo?: true
  }

  export type UsersProdMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password_hash?: true
    rol_id?: true
    token_jwt?: true
    token_refresh?: true
    ultimo_login?: true
    creado_en?: true
    actualizado_en?: true
    activo?: true
  }

  export type UsersProdCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password_hash?: true
    rol_id?: true
    token_jwt?: true
    token_refresh?: true
    ultimo_login?: true
    creado_en?: true
    actualizado_en?: true
    activo?: true
    _all?: true
  }

  export type UsersProdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usersProd to aggregate.
     */
    where?: usersProdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usersProds to fetch.
     */
    orderBy?: usersProdOrderByWithRelationInput | usersProdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersProdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usersProds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usersProds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usersProds
    **/
    _count?: true | UsersProdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersProdAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersProdSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersProdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersProdMaxAggregateInputType
  }

  export type GetUsersProdAggregateType<T extends UsersProdAggregateArgs> = {
        [P in keyof T & keyof AggregateUsersProd]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsersProd[P]>
      : GetScalarType<T[P], AggregateUsersProd[P]>
  }




  export type usersProdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersProdWhereInput
    orderBy?: usersProdOrderByWithAggregationInput | usersProdOrderByWithAggregationInput[]
    by: UsersProdScalarFieldEnum[] | UsersProdScalarFieldEnum
    having?: usersProdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersProdCountAggregateInputType | true
    _avg?: UsersProdAvgAggregateInputType
    _sum?: UsersProdSumAggregateInputType
    _min?: UsersProdMinAggregateInputType
    _max?: UsersProdMaxAggregateInputType
  }

  export type UsersProdGroupByOutputType = {
    id: number
    nombre: string
    email: string
    password_hash: string
    rol_id: number
    token_jwt: string | null
    token_refresh: string | null
    ultimo_login: Date | null
    creado_en: Date
    actualizado_en: Date
    activo: boolean
    _count: UsersProdCountAggregateOutputType | null
    _avg: UsersProdAvgAggregateOutputType | null
    _sum: UsersProdSumAggregateOutputType | null
    _min: UsersProdMinAggregateOutputType | null
    _max: UsersProdMaxAggregateOutputType | null
  }

  type GetUsersProdGroupByPayload<T extends usersProdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersProdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersProdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersProdGroupByOutputType[P]>
            : GetScalarType<T[P], UsersProdGroupByOutputType[P]>
        }
      >
    >


  export type usersProdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password_hash?: boolean
    rol_id?: boolean
    token_jwt?: boolean
    token_refresh?: boolean
    ultimo_login?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
    activo?: boolean
  }, ExtArgs["result"]["usersProd"]>

  export type usersProdSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password_hash?: boolean
    rol_id?: boolean
    token_jwt?: boolean
    token_refresh?: boolean
    ultimo_login?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
    activo?: boolean
  }, ExtArgs["result"]["usersProd"]>

  export type usersProdSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password_hash?: boolean
    rol_id?: boolean
    token_jwt?: boolean
    token_refresh?: boolean
    ultimo_login?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
    activo?: boolean
  }, ExtArgs["result"]["usersProd"]>

  export type usersProdSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    password_hash?: boolean
    rol_id?: boolean
    token_jwt?: boolean
    token_refresh?: boolean
    ultimo_login?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
    activo?: boolean
  }

  export type usersProdOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "email" | "password_hash" | "rol_id" | "token_jwt" | "token_refresh" | "ultimo_login" | "creado_en" | "actualizado_en" | "activo", ExtArgs["result"]["usersProd"]>

  export type $usersProdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usersProd"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      email: string
      password_hash: string
      rol_id: number
      token_jwt: string | null
      token_refresh: string | null
      ultimo_login: Date | null
      creado_en: Date
      actualizado_en: Date
      activo: boolean
    }, ExtArgs["result"]["usersProd"]>
    composites: {}
  }

  type usersProdGetPayload<S extends boolean | null | undefined | usersProdDefaultArgs> = $Result.GetResult<Prisma.$usersProdPayload, S>

  type usersProdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersProdFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersProdCountAggregateInputType | true
    }

  export interface usersProdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usersProd'], meta: { name: 'usersProd' } }
    /**
     * Find zero or one UsersProd that matches the filter.
     * @param {usersProdFindUniqueArgs} args - Arguments to find a UsersProd
     * @example
     * // Get one UsersProd
     * const usersProd = await prisma.usersProd.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersProdFindUniqueArgs>(args: SelectSubset<T, usersProdFindUniqueArgs<ExtArgs>>): Prisma__usersProdClient<$Result.GetResult<Prisma.$usersProdPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsersProd that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersProdFindUniqueOrThrowArgs} args - Arguments to find a UsersProd
     * @example
     * // Get one UsersProd
     * const usersProd = await prisma.usersProd.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersProdFindUniqueOrThrowArgs>(args: SelectSubset<T, usersProdFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersProdClient<$Result.GetResult<Prisma.$usersProdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsersProd that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersProdFindFirstArgs} args - Arguments to find a UsersProd
     * @example
     * // Get one UsersProd
     * const usersProd = await prisma.usersProd.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersProdFindFirstArgs>(args?: SelectSubset<T, usersProdFindFirstArgs<ExtArgs>>): Prisma__usersProdClient<$Result.GetResult<Prisma.$usersProdPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsersProd that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersProdFindFirstOrThrowArgs} args - Arguments to find a UsersProd
     * @example
     * // Get one UsersProd
     * const usersProd = await prisma.usersProd.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersProdFindFirstOrThrowArgs>(args?: SelectSubset<T, usersProdFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersProdClient<$Result.GetResult<Prisma.$usersProdPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsersProds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersProdFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsersProds
     * const usersProds = await prisma.usersProd.findMany()
     * 
     * // Get first 10 UsersProds
     * const usersProds = await prisma.usersProd.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersProdWithIdOnly = await prisma.usersProd.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersProdFindManyArgs>(args?: SelectSubset<T, usersProdFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersProdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsersProd.
     * @param {usersProdCreateArgs} args - Arguments to create a UsersProd.
     * @example
     * // Create one UsersProd
     * const UsersProd = await prisma.usersProd.create({
     *   data: {
     *     // ... data to create a UsersProd
     *   }
     * })
     * 
     */
    create<T extends usersProdCreateArgs>(args: SelectSubset<T, usersProdCreateArgs<ExtArgs>>): Prisma__usersProdClient<$Result.GetResult<Prisma.$usersProdPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsersProds.
     * @param {usersProdCreateManyArgs} args - Arguments to create many UsersProds.
     * @example
     * // Create many UsersProds
     * const usersProd = await prisma.usersProd.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersProdCreateManyArgs>(args?: SelectSubset<T, usersProdCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsersProds and returns the data saved in the database.
     * @param {usersProdCreateManyAndReturnArgs} args - Arguments to create many UsersProds.
     * @example
     * // Create many UsersProds
     * const usersProd = await prisma.usersProd.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsersProds and only return the `id`
     * const usersProdWithIdOnly = await prisma.usersProd.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersProdCreateManyAndReturnArgs>(args?: SelectSubset<T, usersProdCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersProdPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UsersProd.
     * @param {usersProdDeleteArgs} args - Arguments to delete one UsersProd.
     * @example
     * // Delete one UsersProd
     * const UsersProd = await prisma.usersProd.delete({
     *   where: {
     *     // ... filter to delete one UsersProd
     *   }
     * })
     * 
     */
    delete<T extends usersProdDeleteArgs>(args: SelectSubset<T, usersProdDeleteArgs<ExtArgs>>): Prisma__usersProdClient<$Result.GetResult<Prisma.$usersProdPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsersProd.
     * @param {usersProdUpdateArgs} args - Arguments to update one UsersProd.
     * @example
     * // Update one UsersProd
     * const usersProd = await prisma.usersProd.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersProdUpdateArgs>(args: SelectSubset<T, usersProdUpdateArgs<ExtArgs>>): Prisma__usersProdClient<$Result.GetResult<Prisma.$usersProdPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsersProds.
     * @param {usersProdDeleteManyArgs} args - Arguments to filter UsersProds to delete.
     * @example
     * // Delete a few UsersProds
     * const { count } = await prisma.usersProd.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersProdDeleteManyArgs>(args?: SelectSubset<T, usersProdDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsersProds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersProdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsersProds
     * const usersProd = await prisma.usersProd.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersProdUpdateManyArgs>(args: SelectSubset<T, usersProdUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsersProds and returns the data updated in the database.
     * @param {usersProdUpdateManyAndReturnArgs} args - Arguments to update many UsersProds.
     * @example
     * // Update many UsersProds
     * const usersProd = await prisma.usersProd.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsersProds and only return the `id`
     * const usersProdWithIdOnly = await prisma.usersProd.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersProdUpdateManyAndReturnArgs>(args: SelectSubset<T, usersProdUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersProdPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UsersProd.
     * @param {usersProdUpsertArgs} args - Arguments to update or create a UsersProd.
     * @example
     * // Update or create a UsersProd
     * const usersProd = await prisma.usersProd.upsert({
     *   create: {
     *     // ... data to create a UsersProd
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsersProd we want to update
     *   }
     * })
     */
    upsert<T extends usersProdUpsertArgs>(args: SelectSubset<T, usersProdUpsertArgs<ExtArgs>>): Prisma__usersProdClient<$Result.GetResult<Prisma.$usersProdPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsersProds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersProdCountArgs} args - Arguments to filter UsersProds to count.
     * @example
     * // Count the number of UsersProds
     * const count = await prisma.usersProd.count({
     *   where: {
     *     // ... the filter for the UsersProds we want to count
     *   }
     * })
    **/
    count<T extends usersProdCountArgs>(
      args?: Subset<T, usersProdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersProdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsersProd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersProdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersProdAggregateArgs>(args: Subset<T, UsersProdAggregateArgs>): Prisma.PrismaPromise<GetUsersProdAggregateType<T>>

    /**
     * Group by UsersProd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersProdGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersProdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersProdGroupByArgs['orderBy'] }
        : { orderBy?: usersProdGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersProdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersProdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usersProd model
   */
  readonly fields: usersProdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usersProd.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersProdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usersProd model
   */
  interface usersProdFieldRefs {
    readonly id: FieldRef<"usersProd", 'Int'>
    readonly nombre: FieldRef<"usersProd", 'String'>
    readonly email: FieldRef<"usersProd", 'String'>
    readonly password_hash: FieldRef<"usersProd", 'String'>
    readonly rol_id: FieldRef<"usersProd", 'Int'>
    readonly token_jwt: FieldRef<"usersProd", 'String'>
    readonly token_refresh: FieldRef<"usersProd", 'String'>
    readonly ultimo_login: FieldRef<"usersProd", 'DateTime'>
    readonly creado_en: FieldRef<"usersProd", 'DateTime'>
    readonly actualizado_en: FieldRef<"usersProd", 'DateTime'>
    readonly activo: FieldRef<"usersProd", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * usersProd findUnique
   */
  export type usersProdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersProd
     */
    select?: usersProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usersProd
     */
    omit?: usersProdOmit<ExtArgs> | null
    /**
     * Filter, which usersProd to fetch.
     */
    where: usersProdWhereUniqueInput
  }

  /**
   * usersProd findUniqueOrThrow
   */
  export type usersProdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersProd
     */
    select?: usersProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usersProd
     */
    omit?: usersProdOmit<ExtArgs> | null
    /**
     * Filter, which usersProd to fetch.
     */
    where: usersProdWhereUniqueInput
  }

  /**
   * usersProd findFirst
   */
  export type usersProdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersProd
     */
    select?: usersProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usersProd
     */
    omit?: usersProdOmit<ExtArgs> | null
    /**
     * Filter, which usersProd to fetch.
     */
    where?: usersProdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usersProds to fetch.
     */
    orderBy?: usersProdOrderByWithRelationInput | usersProdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usersProds.
     */
    cursor?: usersProdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usersProds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usersProds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usersProds.
     */
    distinct?: UsersProdScalarFieldEnum | UsersProdScalarFieldEnum[]
  }

  /**
   * usersProd findFirstOrThrow
   */
  export type usersProdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersProd
     */
    select?: usersProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usersProd
     */
    omit?: usersProdOmit<ExtArgs> | null
    /**
     * Filter, which usersProd to fetch.
     */
    where?: usersProdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usersProds to fetch.
     */
    orderBy?: usersProdOrderByWithRelationInput | usersProdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usersProds.
     */
    cursor?: usersProdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usersProds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usersProds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usersProds.
     */
    distinct?: UsersProdScalarFieldEnum | UsersProdScalarFieldEnum[]
  }

  /**
   * usersProd findMany
   */
  export type usersProdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersProd
     */
    select?: usersProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usersProd
     */
    omit?: usersProdOmit<ExtArgs> | null
    /**
     * Filter, which usersProds to fetch.
     */
    where?: usersProdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usersProds to fetch.
     */
    orderBy?: usersProdOrderByWithRelationInput | usersProdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usersProds.
     */
    cursor?: usersProdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usersProds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usersProds.
     */
    skip?: number
    distinct?: UsersProdScalarFieldEnum | UsersProdScalarFieldEnum[]
  }

  /**
   * usersProd create
   */
  export type usersProdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersProd
     */
    select?: usersProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usersProd
     */
    omit?: usersProdOmit<ExtArgs> | null
    /**
     * The data needed to create a usersProd.
     */
    data: XOR<usersProdCreateInput, usersProdUncheckedCreateInput>
  }

  /**
   * usersProd createMany
   */
  export type usersProdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usersProds.
     */
    data: usersProdCreateManyInput | usersProdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usersProd createManyAndReturn
   */
  export type usersProdCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersProd
     */
    select?: usersProdSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usersProd
     */
    omit?: usersProdOmit<ExtArgs> | null
    /**
     * The data used to create many usersProds.
     */
    data: usersProdCreateManyInput | usersProdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usersProd update
   */
  export type usersProdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersProd
     */
    select?: usersProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usersProd
     */
    omit?: usersProdOmit<ExtArgs> | null
    /**
     * The data needed to update a usersProd.
     */
    data: XOR<usersProdUpdateInput, usersProdUncheckedUpdateInput>
    /**
     * Choose, which usersProd to update.
     */
    where: usersProdWhereUniqueInput
  }

  /**
   * usersProd updateMany
   */
  export type usersProdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usersProds.
     */
    data: XOR<usersProdUpdateManyMutationInput, usersProdUncheckedUpdateManyInput>
    /**
     * Filter which usersProds to update
     */
    where?: usersProdWhereInput
    /**
     * Limit how many usersProds to update.
     */
    limit?: number
  }

  /**
   * usersProd updateManyAndReturn
   */
  export type usersProdUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersProd
     */
    select?: usersProdSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usersProd
     */
    omit?: usersProdOmit<ExtArgs> | null
    /**
     * The data used to update usersProds.
     */
    data: XOR<usersProdUpdateManyMutationInput, usersProdUncheckedUpdateManyInput>
    /**
     * Filter which usersProds to update
     */
    where?: usersProdWhereInput
    /**
     * Limit how many usersProds to update.
     */
    limit?: number
  }

  /**
   * usersProd upsert
   */
  export type usersProdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersProd
     */
    select?: usersProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usersProd
     */
    omit?: usersProdOmit<ExtArgs> | null
    /**
     * The filter to search for the usersProd to update in case it exists.
     */
    where: usersProdWhereUniqueInput
    /**
     * In case the usersProd found by the `where` argument doesn't exist, create a new usersProd with this data.
     */
    create: XOR<usersProdCreateInput, usersProdUncheckedCreateInput>
    /**
     * In case the usersProd was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersProdUpdateInput, usersProdUncheckedUpdateInput>
  }

  /**
   * usersProd delete
   */
  export type usersProdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersProd
     */
    select?: usersProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usersProd
     */
    omit?: usersProdOmit<ExtArgs> | null
    /**
     * Filter which usersProd to delete.
     */
    where: usersProdWhereUniqueInput
  }

  /**
   * usersProd deleteMany
   */
  export type usersProdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usersProds to delete
     */
    where?: usersProdWhereInput
    /**
     * Limit how many usersProds to delete.
     */
    limit?: number
  }

  /**
   * usersProd without action
   */
  export type usersProdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usersProd
     */
    select?: usersProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usersProd
     */
    omit?: usersProdOmit<ExtArgs> | null
  }


  /**
   * Model product_categoriesDev
   */

  export type AggregateProduct_categoriesDev = {
    _count: Product_categoriesDevCountAggregateOutputType | null
    _avg: Product_categoriesDevAvgAggregateOutputType | null
    _sum: Product_categoriesDevSumAggregateOutputType | null
    _min: Product_categoriesDevMinAggregateOutputType | null
    _max: Product_categoriesDevMaxAggregateOutputType | null
  }

  export type Product_categoriesDevAvgAggregateOutputType = {
    id: number | null
  }

  export type Product_categoriesDevSumAggregateOutputType = {
    id: number | null
  }

  export type Product_categoriesDevMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    img_url: string | null
  }

  export type Product_categoriesDevMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    img_url: string | null
  }

  export type Product_categoriesDevCountAggregateOutputType = {
    id: number
    nombre: number
    img_url: number
    _all: number
  }


  export type Product_categoriesDevAvgAggregateInputType = {
    id?: true
  }

  export type Product_categoriesDevSumAggregateInputType = {
    id?: true
  }

  export type Product_categoriesDevMinAggregateInputType = {
    id?: true
    nombre?: true
    img_url?: true
  }

  export type Product_categoriesDevMaxAggregateInputType = {
    id?: true
    nombre?: true
    img_url?: true
  }

  export type Product_categoriesDevCountAggregateInputType = {
    id?: true
    nombre?: true
    img_url?: true
    _all?: true
  }

  export type Product_categoriesDevAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_categoriesDev to aggregate.
     */
    where?: product_categoriesDevWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_categoriesDevs to fetch.
     */
    orderBy?: product_categoriesDevOrderByWithRelationInput | product_categoriesDevOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: product_categoriesDevWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_categoriesDevs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_categoriesDevs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned product_categoriesDevs
    **/
    _count?: true | Product_categoriesDevCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Product_categoriesDevAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Product_categoriesDevSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Product_categoriesDevMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Product_categoriesDevMaxAggregateInputType
  }

  export type GetProduct_categoriesDevAggregateType<T extends Product_categoriesDevAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct_categoriesDev]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct_categoriesDev[P]>
      : GetScalarType<T[P], AggregateProduct_categoriesDev[P]>
  }




  export type product_categoriesDevGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_categoriesDevWhereInput
    orderBy?: product_categoriesDevOrderByWithAggregationInput | product_categoriesDevOrderByWithAggregationInput[]
    by: Product_categoriesDevScalarFieldEnum[] | Product_categoriesDevScalarFieldEnum
    having?: product_categoriesDevScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Product_categoriesDevCountAggregateInputType | true
    _avg?: Product_categoriesDevAvgAggregateInputType
    _sum?: Product_categoriesDevSumAggregateInputType
    _min?: Product_categoriesDevMinAggregateInputType
    _max?: Product_categoriesDevMaxAggregateInputType
  }

  export type Product_categoriesDevGroupByOutputType = {
    id: number
    nombre: string | null
    img_url: string
    _count: Product_categoriesDevCountAggregateOutputType | null
    _avg: Product_categoriesDevAvgAggregateOutputType | null
    _sum: Product_categoriesDevSumAggregateOutputType | null
    _min: Product_categoriesDevMinAggregateOutputType | null
    _max: Product_categoriesDevMaxAggregateOutputType | null
  }

  type GetProduct_categoriesDevGroupByPayload<T extends product_categoriesDevGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Product_categoriesDevGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Product_categoriesDevGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Product_categoriesDevGroupByOutputType[P]>
            : GetScalarType<T[P], Product_categoriesDevGroupByOutputType[P]>
        }
      >
    >


  export type product_categoriesDevSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    img_url?: boolean
  }, ExtArgs["result"]["product_categoriesDev"]>

  export type product_categoriesDevSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    img_url?: boolean
  }, ExtArgs["result"]["product_categoriesDev"]>

  export type product_categoriesDevSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    img_url?: boolean
  }, ExtArgs["result"]["product_categoriesDev"]>

  export type product_categoriesDevSelectScalar = {
    id?: boolean
    nombre?: boolean
    img_url?: boolean
  }

  export type product_categoriesDevOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "img_url", ExtArgs["result"]["product_categoriesDev"]>

  export type $product_categoriesDevPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product_categoriesDev"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string | null
      img_url: string
    }, ExtArgs["result"]["product_categoriesDev"]>
    composites: {}
  }

  type product_categoriesDevGetPayload<S extends boolean | null | undefined | product_categoriesDevDefaultArgs> = $Result.GetResult<Prisma.$product_categoriesDevPayload, S>

  type product_categoriesDevCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<product_categoriesDevFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Product_categoriesDevCountAggregateInputType | true
    }

  export interface product_categoriesDevDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product_categoriesDev'], meta: { name: 'product_categoriesDev' } }
    /**
     * Find zero or one Product_categoriesDev that matches the filter.
     * @param {product_categoriesDevFindUniqueArgs} args - Arguments to find a Product_categoriesDev
     * @example
     * // Get one Product_categoriesDev
     * const product_categoriesDev = await prisma.product_categoriesDevDev.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends product_categoriesDevFindUniqueArgs>(args: SelectSubset<T, product_categoriesDevFindUniqueArgs<ExtArgs>>): Prisma__product_categoriesDevClient<$Result.GetResult<Prisma.$product_categoriesDevPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product_categoriesDev that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {product_categoriesDevFindUniqueOrThrowArgs} args - Arguments to find a Product_categoriesDev
     * @example
     * // Get one Product_categoriesDev
     * const product_categoriesDev = await prisma.product_categoriesDevDev.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends product_categoriesDevFindUniqueOrThrowArgs>(args: SelectSubset<T, product_categoriesDevFindUniqueOrThrowArgs<ExtArgs>>): Prisma__product_categoriesDevClient<$Result.GetResult<Prisma.$product_categoriesDevPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_categoriesDev that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_categoriesDevFindFirstArgs} args - Arguments to find a Product_categoriesDev
     * @example
     * // Get one Product_categoriesDev
     * const product_categoriesDev = await prisma.product_categoriesDevDev.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends product_categoriesDevFindFirstArgs>(args?: SelectSubset<T, product_categoriesDevFindFirstArgs<ExtArgs>>): Prisma__product_categoriesDevClient<$Result.GetResult<Prisma.$product_categoriesDevPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_categoriesDev that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_categoriesDevFindFirstOrThrowArgs} args - Arguments to find a Product_categoriesDev
     * @example
     * // Get one Product_categoriesDev
     * const product_categoriesDev = await prisma.product_categoriesDevDev.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends product_categoriesDevFindFirstOrThrowArgs>(args?: SelectSubset<T, product_categoriesDevFindFirstOrThrowArgs<ExtArgs>>): Prisma__product_categoriesDevClient<$Result.GetResult<Prisma.$product_categoriesDevPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Product_categoriesDevs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_categoriesDevFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Product_categoriesDevs
     * const product_categoriesDevs = await prisma.product_categoriesDevDev.findMany()
     * 
     * // Get first 10 Product_categoriesDevs
     * const product_categoriesDevs = await prisma.product_categoriesDevDev.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const product_categoriesDevWithIdOnly = await prisma.product_categoriesDevDev.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends product_categoriesDevFindManyArgs>(args?: SelectSubset<T, product_categoriesDevFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_categoriesDevPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product_categoriesDev.
     * @param {product_categoriesDevCreateArgs} args - Arguments to create a Product_categoriesDev.
     * @example
     * // Create one Product_categoriesDev
     * const Product_categoriesDev = await prisma.product_categoriesDevDev.create({
     *   data: {
     *     // ... data to create a Product_categoriesDev
     *   }
     * })
     * 
     */
    create<T extends product_categoriesDevCreateArgs>(args: SelectSubset<T, product_categoriesDevCreateArgs<ExtArgs>>): Prisma__product_categoriesDevClient<$Result.GetResult<Prisma.$product_categoriesDevPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Product_categoriesDevs.
     * @param {product_categoriesDevCreateManyArgs} args - Arguments to create many Product_categoriesDevs.
     * @example
     * // Create many Product_categoriesDevs
     * const product_categoriesDev = await prisma.product_categoriesDevDev.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends product_categoriesDevCreateManyArgs>(args?: SelectSubset<T, product_categoriesDevCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Product_categoriesDevs and returns the data saved in the database.
     * @param {product_categoriesDevCreateManyAndReturnArgs} args - Arguments to create many Product_categoriesDevs.
     * @example
     * // Create many Product_categoriesDevs
     * const product_categoriesDev = await prisma.product_categoriesDevDev.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Product_categoriesDevs and only return the `id`
     * const product_categoriesDevWithIdOnly = await prisma.product_categoriesDevDev.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends product_categoriesDevCreateManyAndReturnArgs>(args?: SelectSubset<T, product_categoriesDevCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_categoriesDevPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product_categoriesDev.
     * @param {product_categoriesDevDeleteArgs} args - Arguments to delete one Product_categoriesDev.
     * @example
     * // Delete one Product_categoriesDev
     * const Product_categoriesDev = await prisma.product_categoriesDevDev.delete({
     *   where: {
     *     // ... filter to delete one Product_categoriesDev
     *   }
     * })
     * 
     */
    delete<T extends product_categoriesDevDeleteArgs>(args: SelectSubset<T, product_categoriesDevDeleteArgs<ExtArgs>>): Prisma__product_categoriesDevClient<$Result.GetResult<Prisma.$product_categoriesDevPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product_categoriesDev.
     * @param {product_categoriesDevUpdateArgs} args - Arguments to update one Product_categoriesDev.
     * @example
     * // Update one Product_categoriesDev
     * const product_categoriesDev = await prisma.product_categoriesDevDev.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends product_categoriesDevUpdateArgs>(args: SelectSubset<T, product_categoriesDevUpdateArgs<ExtArgs>>): Prisma__product_categoriesDevClient<$Result.GetResult<Prisma.$product_categoriesDevPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Product_categoriesDevs.
     * @param {product_categoriesDevDeleteManyArgs} args - Arguments to filter Product_categoriesDevs to delete.
     * @example
     * // Delete a few Product_categoriesDevs
     * const { count } = await prisma.product_categoriesDevDev.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends product_categoriesDevDeleteManyArgs>(args?: SelectSubset<T, product_categoriesDevDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_categoriesDevs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_categoriesDevUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Product_categoriesDevs
     * const product_categoriesDev = await prisma.product_categoriesDevDev.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends product_categoriesDevUpdateManyArgs>(args: SelectSubset<T, product_categoriesDevUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_categoriesDevs and returns the data updated in the database.
     * @param {product_categoriesDevUpdateManyAndReturnArgs} args - Arguments to update many Product_categoriesDevs.
     * @example
     * // Update many Product_categoriesDevs
     * const product_categoriesDev = await prisma.product_categoriesDevDev.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Product_categoriesDevs and only return the `id`
     * const product_categoriesDevWithIdOnly = await prisma.product_categoriesDevDev.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends product_categoriesDevUpdateManyAndReturnArgs>(args: SelectSubset<T, product_categoriesDevUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_categoriesDevPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product_categoriesDev.
     * @param {product_categoriesDevUpsertArgs} args - Arguments to update or create a Product_categoriesDev.
     * @example
     * // Update or create a Product_categoriesDev
     * const product_categoriesDev = await prisma.product_categoriesDevDev.upsert({
     *   create: {
     *     // ... data to create a Product_categoriesDev
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product_categoriesDev we want to update
     *   }
     * })
     */
    upsert<T extends product_categoriesDevUpsertArgs>(args: SelectSubset<T, product_categoriesDevUpsertArgs<ExtArgs>>): Prisma__product_categoriesDevClient<$Result.GetResult<Prisma.$product_categoriesDevPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Product_categoriesDevs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_categoriesDevCountArgs} args - Arguments to filter Product_categoriesDevs to count.
     * @example
     * // Count the number of Product_categoriesDevs
     * const count = await prisma.product_categoriesDevDev.count({
     *   where: {
     *     // ... the filter for the Product_categoriesDevs we want to count
     *   }
     * })
    **/
    count<T extends product_categoriesDevCountArgs>(
      args?: Subset<T, product_categoriesDevCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Product_categoriesDevCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product_categoriesDev.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_categoriesDevAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Product_categoriesDevAggregateArgs>(args: Subset<T, Product_categoriesDevAggregateArgs>): Prisma.PrismaPromise<GetProduct_categoriesDevAggregateType<T>>

    /**
     * Group by Product_categoriesDev.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_categoriesDevGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends product_categoriesDevGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: product_categoriesDevGroupByArgs['orderBy'] }
        : { orderBy?: product_categoriesDevGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, product_categoriesDevGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_categoriesDevGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product_categoriesDev model
   */
  readonly fields: product_categoriesDevFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product_categoriesDev.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__product_categoriesDevClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the product_categoriesDev model
   */
  interface product_categoriesDevFieldRefs {
    readonly id: FieldRef<"product_categoriesDev", 'Int'>
    readonly nombre: FieldRef<"product_categoriesDev", 'String'>
    readonly img_url: FieldRef<"product_categoriesDev", 'String'>
  }
    

  // Custom InputTypes
  /**
   * product_categoriesDev findUnique
   */
  export type product_categoriesDevFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categoriesDev
     */
    select?: product_categoriesDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categoriesDev
     */
    omit?: product_categoriesDevOmit<ExtArgs> | null
    /**
     * Filter, which product_categoriesDev to fetch.
     */
    where: product_categoriesDevWhereUniqueInput
  }

  /**
   * product_categoriesDev findUniqueOrThrow
   */
  export type product_categoriesDevFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categoriesDev
     */
    select?: product_categoriesDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categoriesDev
     */
    omit?: product_categoriesDevOmit<ExtArgs> | null
    /**
     * Filter, which product_categoriesDev to fetch.
     */
    where: product_categoriesDevWhereUniqueInput
  }

  /**
   * product_categoriesDev findFirst
   */
  export type product_categoriesDevFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categoriesDev
     */
    select?: product_categoriesDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categoriesDev
     */
    omit?: product_categoriesDevOmit<ExtArgs> | null
    /**
     * Filter, which product_categoriesDev to fetch.
     */
    where?: product_categoriesDevWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_categoriesDevs to fetch.
     */
    orderBy?: product_categoriesDevOrderByWithRelationInput | product_categoriesDevOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_categoriesDevs.
     */
    cursor?: product_categoriesDevWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_categoriesDevs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_categoriesDevs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_categoriesDevs.
     */
    distinct?: Product_categoriesDevScalarFieldEnum | Product_categoriesDevScalarFieldEnum[]
  }

  /**
   * product_categoriesDev findFirstOrThrow
   */
  export type product_categoriesDevFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categoriesDev
     */
    select?: product_categoriesDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categoriesDev
     */
    omit?: product_categoriesDevOmit<ExtArgs> | null
    /**
     * Filter, which product_categoriesDev to fetch.
     */
    where?: product_categoriesDevWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_categoriesDevs to fetch.
     */
    orderBy?: product_categoriesDevOrderByWithRelationInput | product_categoriesDevOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_categoriesDevs.
     */
    cursor?: product_categoriesDevWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_categoriesDevs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_categoriesDevs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_categoriesDevs.
     */
    distinct?: Product_categoriesDevScalarFieldEnum | Product_categoriesDevScalarFieldEnum[]
  }

  /**
   * product_categoriesDev findMany
   */
  export type product_categoriesDevFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categoriesDev
     */
    select?: product_categoriesDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categoriesDev
     */
    omit?: product_categoriesDevOmit<ExtArgs> | null
    /**
     * Filter, which product_categoriesDevs to fetch.
     */
    where?: product_categoriesDevWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_categoriesDevs to fetch.
     */
    orderBy?: product_categoriesDevOrderByWithRelationInput | product_categoriesDevOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing product_categoriesDevs.
     */
    cursor?: product_categoriesDevWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_categoriesDevs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_categoriesDevs.
     */
    skip?: number
    distinct?: Product_categoriesDevScalarFieldEnum | Product_categoriesDevScalarFieldEnum[]
  }

  /**
   * product_categoriesDev create
   */
  export type product_categoriesDevCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categoriesDev
     */
    select?: product_categoriesDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categoriesDev
     */
    omit?: product_categoriesDevOmit<ExtArgs> | null
    /**
     * The data needed to create a product_categoriesDev.
     */
    data: XOR<product_categoriesDevCreateInput, product_categoriesDevUncheckedCreateInput>
  }

  /**
   * product_categoriesDev createMany
   */
  export type product_categoriesDevCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many product_categoriesDevs.
     */
    data: product_categoriesDevCreateManyInput | product_categoriesDevCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product_categoriesDev createManyAndReturn
   */
  export type product_categoriesDevCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categoriesDev
     */
    select?: product_categoriesDevSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product_categoriesDev
     */
    omit?: product_categoriesDevOmit<ExtArgs> | null
    /**
     * The data used to create many product_categoriesDevs.
     */
    data: product_categoriesDevCreateManyInput | product_categoriesDevCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product_categoriesDev update
   */
  export type product_categoriesDevUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categoriesDev
     */
    select?: product_categoriesDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categoriesDev
     */
    omit?: product_categoriesDevOmit<ExtArgs> | null
    /**
     * The data needed to update a product_categoriesDev.
     */
    data: XOR<product_categoriesDevUpdateInput, product_categoriesDevUncheckedUpdateInput>
    /**
     * Choose, which product_categoriesDev to update.
     */
    where: product_categoriesDevWhereUniqueInput
  }

  /**
   * product_categoriesDev updateMany
   */
  export type product_categoriesDevUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update product_categoriesDevs.
     */
    data: XOR<product_categoriesDevUpdateManyMutationInput, product_categoriesDevUncheckedUpdateManyInput>
    /**
     * Filter which product_categoriesDevs to update
     */
    where?: product_categoriesDevWhereInput
    /**
     * Limit how many product_categoriesDevs to update.
     */
    limit?: number
  }

  /**
   * product_categoriesDev updateManyAndReturn
   */
  export type product_categoriesDevUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categoriesDev
     */
    select?: product_categoriesDevSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product_categoriesDev
     */
    omit?: product_categoriesDevOmit<ExtArgs> | null
    /**
     * The data used to update product_categoriesDevs.
     */
    data: XOR<product_categoriesDevUpdateManyMutationInput, product_categoriesDevUncheckedUpdateManyInput>
    /**
     * Filter which product_categoriesDevs to update
     */
    where?: product_categoriesDevWhereInput
    /**
     * Limit how many product_categoriesDevs to update.
     */
    limit?: number
  }

  /**
   * product_categoriesDev upsert
   */
  export type product_categoriesDevUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categoriesDev
     */
    select?: product_categoriesDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categoriesDev
     */
    omit?: product_categoriesDevOmit<ExtArgs> | null
    /**
     * The filter to search for the product_categoriesDev to update in case it exists.
     */
    where: product_categoriesDevWhereUniqueInput
    /**
     * In case the product_categoriesDev found by the `where` argument doesn't exist, create a new product_categoriesDev with this data.
     */
    create: XOR<product_categoriesDevCreateInput, product_categoriesDevUncheckedCreateInput>
    /**
     * In case the product_categoriesDev was found with the provided `where` argument, update it with this data.
     */
    update: XOR<product_categoriesDevUpdateInput, product_categoriesDevUncheckedUpdateInput>
  }

  /**
   * product_categoriesDev delete
   */
  export type product_categoriesDevDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categoriesDev
     */
    select?: product_categoriesDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categoriesDev
     */
    omit?: product_categoriesDevOmit<ExtArgs> | null
    /**
     * Filter which product_categoriesDev to delete.
     */
    where: product_categoriesDevWhereUniqueInput
  }

  /**
   * product_categoriesDev deleteMany
   */
  export type product_categoriesDevDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_categoriesDevs to delete
     */
    where?: product_categoriesDevWhereInput
    /**
     * Limit how many product_categoriesDevs to delete.
     */
    limit?: number
  }

  /**
   * product_categoriesDev without action
   */
  export type product_categoriesDevDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categoriesDev
     */
    select?: product_categoriesDevSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categoriesDev
     */
    omit?: product_categoriesDevOmit<ExtArgs> | null
  }


  /**
   * Model product_categoriesProd
   */

  export type AggregateProduct_categoriesProd = {
    _count: Product_categoriesProdCountAggregateOutputType | null
    _avg: Product_categoriesProdAvgAggregateOutputType | null
    _sum: Product_categoriesProdSumAggregateOutputType | null
    _min: Product_categoriesProdMinAggregateOutputType | null
    _max: Product_categoriesProdMaxAggregateOutputType | null
  }

  export type Product_categoriesProdAvgAggregateOutputType = {
    id: number | null
  }

  export type Product_categoriesProdSumAggregateOutputType = {
    id: number | null
  }

  export type Product_categoriesProdMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    img_url: string | null
  }

  export type Product_categoriesProdMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    img_url: string | null
  }

  export type Product_categoriesProdCountAggregateOutputType = {
    id: number
    nombre: number
    img_url: number
    _all: number
  }


  export type Product_categoriesProdAvgAggregateInputType = {
    id?: true
  }

  export type Product_categoriesProdSumAggregateInputType = {
    id?: true
  }

  export type Product_categoriesProdMinAggregateInputType = {
    id?: true
    nombre?: true
    img_url?: true
  }

  export type Product_categoriesProdMaxAggregateInputType = {
    id?: true
    nombre?: true
    img_url?: true
  }

  export type Product_categoriesProdCountAggregateInputType = {
    id?: true
    nombre?: true
    img_url?: true
    _all?: true
  }

  export type Product_categoriesProdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_categoriesProd to aggregate.
     */
    where?: product_categoriesProdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_categoriesProds to fetch.
     */
    orderBy?: product_categoriesProdOrderByWithRelationInput | product_categoriesProdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: product_categoriesProdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_categoriesProds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_categoriesProds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned product_categoriesProds
    **/
    _count?: true | Product_categoriesProdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Product_categoriesProdAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Product_categoriesProdSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Product_categoriesProdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Product_categoriesProdMaxAggregateInputType
  }

  export type GetProduct_categoriesProdAggregateType<T extends Product_categoriesProdAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct_categoriesProd]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct_categoriesProd[P]>
      : GetScalarType<T[P], AggregateProduct_categoriesProd[P]>
  }




  export type product_categoriesProdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_categoriesProdWhereInput
    orderBy?: product_categoriesProdOrderByWithAggregationInput | product_categoriesProdOrderByWithAggregationInput[]
    by: Product_categoriesProdScalarFieldEnum[] | Product_categoriesProdScalarFieldEnum
    having?: product_categoriesProdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Product_categoriesProdCountAggregateInputType | true
    _avg?: Product_categoriesProdAvgAggregateInputType
    _sum?: Product_categoriesProdSumAggregateInputType
    _min?: Product_categoriesProdMinAggregateInputType
    _max?: Product_categoriesProdMaxAggregateInputType
  }

  export type Product_categoriesProdGroupByOutputType = {
    id: number
    nombre: string | null
    img_url: string
    _count: Product_categoriesProdCountAggregateOutputType | null
    _avg: Product_categoriesProdAvgAggregateOutputType | null
    _sum: Product_categoriesProdSumAggregateOutputType | null
    _min: Product_categoriesProdMinAggregateOutputType | null
    _max: Product_categoriesProdMaxAggregateOutputType | null
  }

  type GetProduct_categoriesProdGroupByPayload<T extends product_categoriesProdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Product_categoriesProdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Product_categoriesProdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Product_categoriesProdGroupByOutputType[P]>
            : GetScalarType<T[P], Product_categoriesProdGroupByOutputType[P]>
        }
      >
    >


  export type product_categoriesProdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    img_url?: boolean
  }, ExtArgs["result"]["product_categoriesProd"]>

  export type product_categoriesProdSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    img_url?: boolean
  }, ExtArgs["result"]["product_categoriesProd"]>

  export type product_categoriesProdSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    img_url?: boolean
  }, ExtArgs["result"]["product_categoriesProd"]>

  export type product_categoriesProdSelectScalar = {
    id?: boolean
    nombre?: boolean
    img_url?: boolean
  }

  export type product_categoriesProdOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "img_url", ExtArgs["result"]["product_categoriesProd"]>

  export type $product_categoriesProdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product_categoriesProd"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string | null
      img_url: string
    }, ExtArgs["result"]["product_categoriesProd"]>
    composites: {}
  }

  type product_categoriesProdGetPayload<S extends boolean | null | undefined | product_categoriesProdDefaultArgs> = $Result.GetResult<Prisma.$product_categoriesProdPayload, S>

  type product_categoriesProdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<product_categoriesProdFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Product_categoriesProdCountAggregateInputType | true
    }

  export interface product_categoriesProdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product_categoriesProd'], meta: { name: 'product_categoriesProd' } }
    /**
     * Find zero or one Product_categoriesProd that matches the filter.
     * @param {product_categoriesProdFindUniqueArgs} args - Arguments to find a Product_categoriesProd
     * @example
     * // Get one Product_categoriesProd
     * const product_categoriesProd = await prisma.product_categoriesDevProd.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends product_categoriesProdFindUniqueArgs>(args: SelectSubset<T, product_categoriesProdFindUniqueArgs<ExtArgs>>): Prisma__product_categoriesProdClient<$Result.GetResult<Prisma.$product_categoriesProdPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product_categoriesProd that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {product_categoriesProdFindUniqueOrThrowArgs} args - Arguments to find a Product_categoriesProd
     * @example
     * // Get one Product_categoriesProd
     * const product_categoriesProd = await prisma.product_categoriesDevProd.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends product_categoriesProdFindUniqueOrThrowArgs>(args: SelectSubset<T, product_categoriesProdFindUniqueOrThrowArgs<ExtArgs>>): Prisma__product_categoriesProdClient<$Result.GetResult<Prisma.$product_categoriesProdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_categoriesProd that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_categoriesProdFindFirstArgs} args - Arguments to find a Product_categoriesProd
     * @example
     * // Get one Product_categoriesProd
     * const product_categoriesProd = await prisma.product_categoriesDevProd.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends product_categoriesProdFindFirstArgs>(args?: SelectSubset<T, product_categoriesProdFindFirstArgs<ExtArgs>>): Prisma__product_categoriesProdClient<$Result.GetResult<Prisma.$product_categoriesProdPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_categoriesProd that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_categoriesProdFindFirstOrThrowArgs} args - Arguments to find a Product_categoriesProd
     * @example
     * // Get one Product_categoriesProd
     * const product_categoriesProd = await prisma.product_categoriesDevProd.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends product_categoriesProdFindFirstOrThrowArgs>(args?: SelectSubset<T, product_categoriesProdFindFirstOrThrowArgs<ExtArgs>>): Prisma__product_categoriesProdClient<$Result.GetResult<Prisma.$product_categoriesProdPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Product_categoriesProds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_categoriesProdFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Product_categoriesProds
     * const product_categoriesProds = await prisma.product_categoriesDevProd.findMany()
     * 
     * // Get first 10 Product_categoriesProds
     * const product_categoriesProds = await prisma.product_categoriesDevProd.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const product_categoriesProdWithIdOnly = await prisma.product_categoriesDevProd.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends product_categoriesProdFindManyArgs>(args?: SelectSubset<T, product_categoriesProdFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_categoriesProdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product_categoriesProd.
     * @param {product_categoriesProdCreateArgs} args - Arguments to create a Product_categoriesProd.
     * @example
     * // Create one Product_categoriesProd
     * const Product_categoriesProd = await prisma.product_categoriesDevProd.create({
     *   data: {
     *     // ... data to create a Product_categoriesProd
     *   }
     * })
     * 
     */
    create<T extends product_categoriesProdCreateArgs>(args: SelectSubset<T, product_categoriesProdCreateArgs<ExtArgs>>): Prisma__product_categoriesProdClient<$Result.GetResult<Prisma.$product_categoriesProdPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Product_categoriesProds.
     * @param {product_categoriesProdCreateManyArgs} args - Arguments to create many Product_categoriesProds.
     * @example
     * // Create many Product_categoriesProds
     * const product_categoriesProd = await prisma.product_categoriesDevProd.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends product_categoriesProdCreateManyArgs>(args?: SelectSubset<T, product_categoriesProdCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Product_categoriesProds and returns the data saved in the database.
     * @param {product_categoriesProdCreateManyAndReturnArgs} args - Arguments to create many Product_categoriesProds.
     * @example
     * // Create many Product_categoriesProds
     * const product_categoriesProd = await prisma.product_categoriesDevProd.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Product_categoriesProds and only return the `id`
     * const product_categoriesProdWithIdOnly = await prisma.product_categoriesDevProd.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends product_categoriesProdCreateManyAndReturnArgs>(args?: SelectSubset<T, product_categoriesProdCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_categoriesProdPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product_categoriesProd.
     * @param {product_categoriesProdDeleteArgs} args - Arguments to delete one Product_categoriesProd.
     * @example
     * // Delete one Product_categoriesProd
     * const Product_categoriesProd = await prisma.product_categoriesDevProd.delete({
     *   where: {
     *     // ... filter to delete one Product_categoriesProd
     *   }
     * })
     * 
     */
    delete<T extends product_categoriesProdDeleteArgs>(args: SelectSubset<T, product_categoriesProdDeleteArgs<ExtArgs>>): Prisma__product_categoriesProdClient<$Result.GetResult<Prisma.$product_categoriesProdPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product_categoriesProd.
     * @param {product_categoriesProdUpdateArgs} args - Arguments to update one Product_categoriesProd.
     * @example
     * // Update one Product_categoriesProd
     * const product_categoriesProd = await prisma.product_categoriesDevProd.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends product_categoriesProdUpdateArgs>(args: SelectSubset<T, product_categoriesProdUpdateArgs<ExtArgs>>): Prisma__product_categoriesProdClient<$Result.GetResult<Prisma.$product_categoriesProdPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Product_categoriesProds.
     * @param {product_categoriesProdDeleteManyArgs} args - Arguments to filter Product_categoriesProds to delete.
     * @example
     * // Delete a few Product_categoriesProds
     * const { count } = await prisma.product_categoriesDevProd.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends product_categoriesProdDeleteManyArgs>(args?: SelectSubset<T, product_categoriesProdDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_categoriesProds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_categoriesProdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Product_categoriesProds
     * const product_categoriesProd = await prisma.product_categoriesDevProd.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends product_categoriesProdUpdateManyArgs>(args: SelectSubset<T, product_categoriesProdUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_categoriesProds and returns the data updated in the database.
     * @param {product_categoriesProdUpdateManyAndReturnArgs} args - Arguments to update many Product_categoriesProds.
     * @example
     * // Update many Product_categoriesProds
     * const product_categoriesProd = await prisma.product_categoriesDevProd.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Product_categoriesProds and only return the `id`
     * const product_categoriesProdWithIdOnly = await prisma.product_categoriesDevProd.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends product_categoriesProdUpdateManyAndReturnArgs>(args: SelectSubset<T, product_categoriesProdUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_categoriesProdPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product_categoriesProd.
     * @param {product_categoriesProdUpsertArgs} args - Arguments to update or create a Product_categoriesProd.
     * @example
     * // Update or create a Product_categoriesProd
     * const product_categoriesProd = await prisma.product_categoriesDevProd.upsert({
     *   create: {
     *     // ... data to create a Product_categoriesProd
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product_categoriesProd we want to update
     *   }
     * })
     */
    upsert<T extends product_categoriesProdUpsertArgs>(args: SelectSubset<T, product_categoriesProdUpsertArgs<ExtArgs>>): Prisma__product_categoriesProdClient<$Result.GetResult<Prisma.$product_categoriesProdPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Product_categoriesProds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_categoriesProdCountArgs} args - Arguments to filter Product_categoriesProds to count.
     * @example
     * // Count the number of Product_categoriesProds
     * const count = await prisma.product_categoriesDevProd.count({
     *   where: {
     *     // ... the filter for the Product_categoriesProds we want to count
     *   }
     * })
    **/
    count<T extends product_categoriesProdCountArgs>(
      args?: Subset<T, product_categoriesProdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Product_categoriesProdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product_categoriesProd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_categoriesProdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Product_categoriesProdAggregateArgs>(args: Subset<T, Product_categoriesProdAggregateArgs>): Prisma.PrismaPromise<GetProduct_categoriesProdAggregateType<T>>

    /**
     * Group by Product_categoriesProd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_categoriesProdGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends product_categoriesProdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: product_categoriesProdGroupByArgs['orderBy'] }
        : { orderBy?: product_categoriesProdGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, product_categoriesProdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_categoriesProdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product_categoriesProd model
   */
  readonly fields: product_categoriesProdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product_categoriesProd.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__product_categoriesProdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the product_categoriesProd model
   */
  interface product_categoriesProdFieldRefs {
    readonly id: FieldRef<"product_categoriesProd", 'Int'>
    readonly nombre: FieldRef<"product_categoriesProd", 'String'>
    readonly img_url: FieldRef<"product_categoriesProd", 'String'>
  }
    

  // Custom InputTypes
  /**
   * product_categoriesProd findUnique
   */
  export type product_categoriesProdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categoriesProd
     */
    select?: product_categoriesProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categoriesProd
     */
    omit?: product_categoriesProdOmit<ExtArgs> | null
    /**
     * Filter, which product_categoriesProd to fetch.
     */
    where: product_categoriesProdWhereUniqueInput
  }

  /**
   * product_categoriesProd findUniqueOrThrow
   */
  export type product_categoriesProdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categoriesProd
     */
    select?: product_categoriesProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categoriesProd
     */
    omit?: product_categoriesProdOmit<ExtArgs> | null
    /**
     * Filter, which product_categoriesProd to fetch.
     */
    where: product_categoriesProdWhereUniqueInput
  }

  /**
   * product_categoriesProd findFirst
   */
  export type product_categoriesProdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categoriesProd
     */
    select?: product_categoriesProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categoriesProd
     */
    omit?: product_categoriesProdOmit<ExtArgs> | null
    /**
     * Filter, which product_categoriesProd to fetch.
     */
    where?: product_categoriesProdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_categoriesProds to fetch.
     */
    orderBy?: product_categoriesProdOrderByWithRelationInput | product_categoriesProdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_categoriesProds.
     */
    cursor?: product_categoriesProdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_categoriesProds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_categoriesProds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_categoriesProds.
     */
    distinct?: Product_categoriesProdScalarFieldEnum | Product_categoriesProdScalarFieldEnum[]
  }

  /**
   * product_categoriesProd findFirstOrThrow
   */
  export type product_categoriesProdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categoriesProd
     */
    select?: product_categoriesProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categoriesProd
     */
    omit?: product_categoriesProdOmit<ExtArgs> | null
    /**
     * Filter, which product_categoriesProd to fetch.
     */
    where?: product_categoriesProdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_categoriesProds to fetch.
     */
    orderBy?: product_categoriesProdOrderByWithRelationInput | product_categoriesProdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_categoriesProds.
     */
    cursor?: product_categoriesProdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_categoriesProds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_categoriesProds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_categoriesProds.
     */
    distinct?: Product_categoriesProdScalarFieldEnum | Product_categoriesProdScalarFieldEnum[]
  }

  /**
   * product_categoriesProd findMany
   */
  export type product_categoriesProdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categoriesProd
     */
    select?: product_categoriesProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categoriesProd
     */
    omit?: product_categoriesProdOmit<ExtArgs> | null
    /**
     * Filter, which product_categoriesProds to fetch.
     */
    where?: product_categoriesProdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_categoriesProds to fetch.
     */
    orderBy?: product_categoriesProdOrderByWithRelationInput | product_categoriesProdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing product_categoriesProds.
     */
    cursor?: product_categoriesProdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_categoriesProds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_categoriesProds.
     */
    skip?: number
    distinct?: Product_categoriesProdScalarFieldEnum | Product_categoriesProdScalarFieldEnum[]
  }

  /**
   * product_categoriesProd create
   */
  export type product_categoriesProdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categoriesProd
     */
    select?: product_categoriesProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categoriesProd
     */
    omit?: product_categoriesProdOmit<ExtArgs> | null
    /**
     * The data needed to create a product_categoriesProd.
     */
    data: XOR<product_categoriesProdCreateInput, product_categoriesProdUncheckedCreateInput>
  }

  /**
   * product_categoriesProd createMany
   */
  export type product_categoriesProdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many product_categoriesProds.
     */
    data: product_categoriesProdCreateManyInput | product_categoriesProdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product_categoriesProd createManyAndReturn
   */
  export type product_categoriesProdCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categoriesProd
     */
    select?: product_categoriesProdSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product_categoriesProd
     */
    omit?: product_categoriesProdOmit<ExtArgs> | null
    /**
     * The data used to create many product_categoriesProds.
     */
    data: product_categoriesProdCreateManyInput | product_categoriesProdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product_categoriesProd update
   */
  export type product_categoriesProdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categoriesProd
     */
    select?: product_categoriesProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categoriesProd
     */
    omit?: product_categoriesProdOmit<ExtArgs> | null
    /**
     * The data needed to update a product_categoriesProd.
     */
    data: XOR<product_categoriesProdUpdateInput, product_categoriesProdUncheckedUpdateInput>
    /**
     * Choose, which product_categoriesProd to update.
     */
    where: product_categoriesProdWhereUniqueInput
  }

  /**
   * product_categoriesProd updateMany
   */
  export type product_categoriesProdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update product_categoriesProds.
     */
    data: XOR<product_categoriesProdUpdateManyMutationInput, product_categoriesProdUncheckedUpdateManyInput>
    /**
     * Filter which product_categoriesProds to update
     */
    where?: product_categoriesProdWhereInput
    /**
     * Limit how many product_categoriesProds to update.
     */
    limit?: number
  }

  /**
   * product_categoriesProd updateManyAndReturn
   */
  export type product_categoriesProdUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categoriesProd
     */
    select?: product_categoriesProdSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product_categoriesProd
     */
    omit?: product_categoriesProdOmit<ExtArgs> | null
    /**
     * The data used to update product_categoriesProds.
     */
    data: XOR<product_categoriesProdUpdateManyMutationInput, product_categoriesProdUncheckedUpdateManyInput>
    /**
     * Filter which product_categoriesProds to update
     */
    where?: product_categoriesProdWhereInput
    /**
     * Limit how many product_categoriesProds to update.
     */
    limit?: number
  }

  /**
   * product_categoriesProd upsert
   */
  export type product_categoriesProdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categoriesProd
     */
    select?: product_categoriesProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categoriesProd
     */
    omit?: product_categoriesProdOmit<ExtArgs> | null
    /**
     * The filter to search for the product_categoriesProd to update in case it exists.
     */
    where: product_categoriesProdWhereUniqueInput
    /**
     * In case the product_categoriesProd found by the `where` argument doesn't exist, create a new product_categoriesProd with this data.
     */
    create: XOR<product_categoriesProdCreateInput, product_categoriesProdUncheckedCreateInput>
    /**
     * In case the product_categoriesProd was found with the provided `where` argument, update it with this data.
     */
    update: XOR<product_categoriesProdUpdateInput, product_categoriesProdUncheckedUpdateInput>
  }

  /**
   * product_categoriesProd delete
   */
  export type product_categoriesProdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categoriesProd
     */
    select?: product_categoriesProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categoriesProd
     */
    omit?: product_categoriesProdOmit<ExtArgs> | null
    /**
     * Filter which product_categoriesProd to delete.
     */
    where: product_categoriesProdWhereUniqueInput
  }

  /**
   * product_categoriesProd deleteMany
   */
  export type product_categoriesProdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_categoriesProds to delete
     */
    where?: product_categoriesProdWhereInput
    /**
     * Limit how many product_categoriesProds to delete.
     */
    limit?: number
  }

  /**
   * product_categoriesProd without action
   */
  export type product_categoriesProdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_categoriesProd
     */
    select?: product_categoriesProdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_categoriesProd
     */
    omit?: product_categoriesProdOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ChatsDevScalarFieldEnum: {
    id: 'id',
    usuario_id: 'usuario_id',
    titulo: 'titulo',
    creado_en: 'creado_en',
    actualizado_en: 'actualizado_en'
  };

  export type ChatsDevScalarFieldEnum = (typeof ChatsDevScalarFieldEnum)[keyof typeof ChatsDevScalarFieldEnum]


  export const ChatsProdScalarFieldEnum: {
    id: 'id',
    usuario_id: 'usuario_id',
    titulo: 'titulo',
    creado_en: 'creado_en',
    actualizado_en: 'actualizado_en'
  };

  export type ChatsProdScalarFieldEnum = (typeof ChatsProdScalarFieldEnum)[keyof typeof ChatsProdScalarFieldEnum]


  export const Invalid_tokensDevScalarFieldEnum: {
    id: 'id',
    token: 'token',
    tipo: 'tipo',
    invalidado_en: 'invalidado_en'
  };

  export type Invalid_tokensDevScalarFieldEnum = (typeof Invalid_tokensDevScalarFieldEnum)[keyof typeof Invalid_tokensDevScalarFieldEnum]


  export const Invalid_tokensProdScalarFieldEnum: {
    id: 'id',
    token: 'token',
    tipo: 'tipo',
    invalidado_en: 'invalidado_en'
  };

  export type Invalid_tokensProdScalarFieldEnum = (typeof Invalid_tokensProdScalarFieldEnum)[keyof typeof Invalid_tokensProdScalarFieldEnum]


  export const MessagesDevScalarFieldEnum: {
    id: 'id',
    chat_id: 'chat_id',
    remitente: 'remitente',
    contenido: 'contenido',
    creado_en: 'creado_en'
  };

  export type MessagesDevScalarFieldEnum = (typeof MessagesDevScalarFieldEnum)[keyof typeof MessagesDevScalarFieldEnum]


  export const MessagesProdScalarFieldEnum: {
    id: 'id',
    chat_id: 'chat_id',
    remitente: 'remitente',
    contenido: 'contenido',
    creado_en: 'creado_en'
  };

  export type MessagesProdScalarFieldEnum = (typeof MessagesProdScalarFieldEnum)[keyof typeof MessagesProdScalarFieldEnum]


  export const ProductsDevScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    precio: 'precio',
    stock: 'stock',
    activo: 'activo',
    creado_en: 'creado_en',
    actualizado_en: 'actualizado_en',
    img_url: 'img_url',
    product_category: 'product_category'
  };

  export type ProductsDevScalarFieldEnum = (typeof ProductsDevScalarFieldEnum)[keyof typeof ProductsDevScalarFieldEnum]


  export const ProductsProdScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    precio: 'precio',
    stock: 'stock',
    activo: 'activo',
    creado_en: 'creado_en',
    actualizado_en: 'actualizado_en',
    img_url: 'img_url',
    product_category: 'product_category'
  };

  export type ProductsProdScalarFieldEnum = (typeof ProductsProdScalarFieldEnum)[keyof typeof ProductsProdScalarFieldEnum]


  export const UsersDevScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    password_hash: 'password_hash',
    rol_id: 'rol_id',
    token_jwt: 'token_jwt',
    token_refresh: 'token_refresh',
    ultimo_login: 'ultimo_login',
    creado_en: 'creado_en',
    actualizado_en: 'actualizado_en',
    activo: 'activo'
  };

  export type UsersDevScalarFieldEnum = (typeof UsersDevScalarFieldEnum)[keyof typeof UsersDevScalarFieldEnum]


  export const UsersProdScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    password_hash: 'password_hash',
    rol_id: 'rol_id',
    token_jwt: 'token_jwt',
    token_refresh: 'token_refresh',
    ultimo_login: 'ultimo_login',
    creado_en: 'creado_en',
    actualizado_en: 'actualizado_en',
    activo: 'activo'
  };

  export type UsersProdScalarFieldEnum = (typeof UsersProdScalarFieldEnum)[keyof typeof UsersProdScalarFieldEnum]


  export const Product_categoriesDevScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    img_url: 'img_url'
  };

  export type Product_categoriesDevScalarFieldEnum = (typeof Product_categoriesDevScalarFieldEnum)[keyof typeof Product_categoriesDevScalarFieldEnum]


  export const Product_categoriesProdScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    img_url: 'img_url'
  };

  export type Product_categoriesProdScalarFieldEnum = (typeof Product_categoriesProdScalarFieldEnum)[keyof typeof Product_categoriesProdScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TokenTipoDev'
   */
  export type EnumTokenTipoDevFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenTipoDev'>
    


  /**
   * Reference to a field of type 'TokenTipoDev[]'
   */
  export type ListEnumTokenTipoDevFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenTipoDev[]'>
    


  /**
   * Reference to a field of type 'TokenTipoProd'
   */
  export type EnumTokenTipoProdFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenTipoProd'>
    


  /**
   * Reference to a field of type 'TokenTipoProd[]'
   */
  export type ListEnumTokenTipoProdFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenTipoProd[]'>
    


  /**
   * Reference to a field of type 'RemitenteTipoDev'
   */
  export type EnumRemitenteTipoDevFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RemitenteTipoDev'>
    


  /**
   * Reference to a field of type 'RemitenteTipoDev[]'
   */
  export type ListEnumRemitenteTipoDevFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RemitenteTipoDev[]'>
    


  /**
   * Reference to a field of type 'RemitenteTipoProd'
   */
  export type EnumRemitenteTipoProdFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RemitenteTipoProd'>
    


  /**
   * Reference to a field of type 'RemitenteTipoProd[]'
   */
  export type ListEnumRemitenteTipoProdFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RemitenteTipoProd[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type chatsDevWhereInput = {
    AND?: chatsDevWhereInput | chatsDevWhereInput[]
    OR?: chatsDevWhereInput[]
    NOT?: chatsDevWhereInput | chatsDevWhereInput[]
    id?: IntFilter<"chatsDev"> | number
    usuario_id?: IntFilter<"chatsDev"> | number
    titulo?: StringFilter<"chatsDev"> | string
    creado_en?: DateTimeFilter<"chatsDev"> | Date | string
    actualizado_en?: DateTimeFilter<"chatsDev"> | Date | string
  }

  export type chatsDevOrderByWithRelationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    titulo?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
  }

  export type chatsDevWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: chatsDevWhereInput | chatsDevWhereInput[]
    OR?: chatsDevWhereInput[]
    NOT?: chatsDevWhereInput | chatsDevWhereInput[]
    usuario_id?: IntFilter<"chatsDev"> | number
    titulo?: StringFilter<"chatsDev"> | string
    creado_en?: DateTimeFilter<"chatsDev"> | Date | string
    actualizado_en?: DateTimeFilter<"chatsDev"> | Date | string
  }, "id">

  export type chatsDevOrderByWithAggregationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    titulo?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
    _count?: chatsDevCountOrderByAggregateInput
    _avg?: chatsDevAvgOrderByAggregateInput
    _max?: chatsDevMaxOrderByAggregateInput
    _min?: chatsDevMinOrderByAggregateInput
    _sum?: chatsDevSumOrderByAggregateInput
  }

  export type chatsDevScalarWhereWithAggregatesInput = {
    AND?: chatsDevScalarWhereWithAggregatesInput | chatsDevScalarWhereWithAggregatesInput[]
    OR?: chatsDevScalarWhereWithAggregatesInput[]
    NOT?: chatsDevScalarWhereWithAggregatesInput | chatsDevScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"chatsDev"> | number
    usuario_id?: IntWithAggregatesFilter<"chatsDev"> | number
    titulo?: StringWithAggregatesFilter<"chatsDev"> | string
    creado_en?: DateTimeWithAggregatesFilter<"chatsDev"> | Date | string
    actualizado_en?: DateTimeWithAggregatesFilter<"chatsDev"> | Date | string
  }

  export type chatsProdWhereInput = {
    AND?: chatsProdWhereInput | chatsProdWhereInput[]
    OR?: chatsProdWhereInput[]
    NOT?: chatsProdWhereInput | chatsProdWhereInput[]
    id?: IntFilter<"chatsProd"> | number
    usuario_id?: IntFilter<"chatsProd"> | number
    titulo?: StringFilter<"chatsProd"> | string
    creado_en?: DateTimeFilter<"chatsProd"> | Date | string
    actualizado_en?: DateTimeFilter<"chatsProd"> | Date | string
  }

  export type chatsProdOrderByWithRelationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    titulo?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
  }

  export type chatsProdWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: chatsProdWhereInput | chatsProdWhereInput[]
    OR?: chatsProdWhereInput[]
    NOT?: chatsProdWhereInput | chatsProdWhereInput[]
    usuario_id?: IntFilter<"chatsProd"> | number
    titulo?: StringFilter<"chatsProd"> | string
    creado_en?: DateTimeFilter<"chatsProd"> | Date | string
    actualizado_en?: DateTimeFilter<"chatsProd"> | Date | string
  }, "id">

  export type chatsProdOrderByWithAggregationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    titulo?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
    _count?: chatsProdCountOrderByAggregateInput
    _avg?: chatsProdAvgOrderByAggregateInput
    _max?: chatsProdMaxOrderByAggregateInput
    _min?: chatsProdMinOrderByAggregateInput
    _sum?: chatsProdSumOrderByAggregateInput
  }

  export type chatsProdScalarWhereWithAggregatesInput = {
    AND?: chatsProdScalarWhereWithAggregatesInput | chatsProdScalarWhereWithAggregatesInput[]
    OR?: chatsProdScalarWhereWithAggregatesInput[]
    NOT?: chatsProdScalarWhereWithAggregatesInput | chatsProdScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"chatsProd"> | number
    usuario_id?: IntWithAggregatesFilter<"chatsProd"> | number
    titulo?: StringWithAggregatesFilter<"chatsProd"> | string
    creado_en?: DateTimeWithAggregatesFilter<"chatsProd"> | Date | string
    actualizado_en?: DateTimeWithAggregatesFilter<"chatsProd"> | Date | string
  }

  export type invalid_tokensDevWhereInput = {
    AND?: invalid_tokensDevWhereInput | invalid_tokensDevWhereInput[]
    OR?: invalid_tokensDevWhereInput[]
    NOT?: invalid_tokensDevWhereInput | invalid_tokensDevWhereInput[]
    id?: IntFilter<"invalid_tokensDev"> | number
    token?: StringFilter<"invalid_tokensDev"> | string
    tipo?: EnumTokenTipoDevFilter<"invalid_tokensDev"> | $Enums.TokenTipoDev
    invalidado_en?: DateTimeFilter<"invalid_tokensDev"> | Date | string
  }

  export type invalid_tokensDevOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    tipo?: SortOrder
    invalidado_en?: SortOrder
  }

  export type invalid_tokensDevWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: invalid_tokensDevWhereInput | invalid_tokensDevWhereInput[]
    OR?: invalid_tokensDevWhereInput[]
    NOT?: invalid_tokensDevWhereInput | invalid_tokensDevWhereInput[]
    token?: StringFilter<"invalid_tokensDev"> | string
    tipo?: EnumTokenTipoDevFilter<"invalid_tokensDev"> | $Enums.TokenTipoDev
    invalidado_en?: DateTimeFilter<"invalid_tokensDev"> | Date | string
  }, "id">

  export type invalid_tokensDevOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    tipo?: SortOrder
    invalidado_en?: SortOrder
    _count?: invalid_tokensDevCountOrderByAggregateInput
    _avg?: invalid_tokensDevAvgOrderByAggregateInput
    _max?: invalid_tokensDevMaxOrderByAggregateInput
    _min?: invalid_tokensDevMinOrderByAggregateInput
    _sum?: invalid_tokensDevSumOrderByAggregateInput
  }

  export type invalid_tokensDevScalarWhereWithAggregatesInput = {
    AND?: invalid_tokensDevScalarWhereWithAggregatesInput | invalid_tokensDevScalarWhereWithAggregatesInput[]
    OR?: invalid_tokensDevScalarWhereWithAggregatesInput[]
    NOT?: invalid_tokensDevScalarWhereWithAggregatesInput | invalid_tokensDevScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"invalid_tokensDev"> | number
    token?: StringWithAggregatesFilter<"invalid_tokensDev"> | string
    tipo?: EnumTokenTipoDevWithAggregatesFilter<"invalid_tokensDev"> | $Enums.TokenTipoDev
    invalidado_en?: DateTimeWithAggregatesFilter<"invalid_tokensDev"> | Date | string
  }

  export type invalid_tokensProdWhereInput = {
    AND?: invalid_tokensProdWhereInput | invalid_tokensProdWhereInput[]
    OR?: invalid_tokensProdWhereInput[]
    NOT?: invalid_tokensProdWhereInput | invalid_tokensProdWhereInput[]
    id?: IntFilter<"invalid_tokensProd"> | number
    token?: StringFilter<"invalid_tokensProd"> | string
    tipo?: EnumTokenTipoProdFilter<"invalid_tokensProd"> | $Enums.TokenTipoProd
    invalidado_en?: DateTimeFilter<"invalid_tokensProd"> | Date | string
  }

  export type invalid_tokensProdOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    tipo?: SortOrder
    invalidado_en?: SortOrder
  }

  export type invalid_tokensProdWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: invalid_tokensProdWhereInput | invalid_tokensProdWhereInput[]
    OR?: invalid_tokensProdWhereInput[]
    NOT?: invalid_tokensProdWhereInput | invalid_tokensProdWhereInput[]
    token?: StringFilter<"invalid_tokensProd"> | string
    tipo?: EnumTokenTipoProdFilter<"invalid_tokensProd"> | $Enums.TokenTipoProd
    invalidado_en?: DateTimeFilter<"invalid_tokensProd"> | Date | string
  }, "id">

  export type invalid_tokensProdOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    tipo?: SortOrder
    invalidado_en?: SortOrder
    _count?: invalid_tokensProdCountOrderByAggregateInput
    _avg?: invalid_tokensProdAvgOrderByAggregateInput
    _max?: invalid_tokensProdMaxOrderByAggregateInput
    _min?: invalid_tokensProdMinOrderByAggregateInput
    _sum?: invalid_tokensProdSumOrderByAggregateInput
  }

  export type invalid_tokensProdScalarWhereWithAggregatesInput = {
    AND?: invalid_tokensProdScalarWhereWithAggregatesInput | invalid_tokensProdScalarWhereWithAggregatesInput[]
    OR?: invalid_tokensProdScalarWhereWithAggregatesInput[]
    NOT?: invalid_tokensProdScalarWhereWithAggregatesInput | invalid_tokensProdScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"invalid_tokensProd"> | number
    token?: StringWithAggregatesFilter<"invalid_tokensProd"> | string
    tipo?: EnumTokenTipoProdWithAggregatesFilter<"invalid_tokensProd"> | $Enums.TokenTipoProd
    invalidado_en?: DateTimeWithAggregatesFilter<"invalid_tokensProd"> | Date | string
  }

  export type messagesDevWhereInput = {
    AND?: messagesDevWhereInput | messagesDevWhereInput[]
    OR?: messagesDevWhereInput[]
    NOT?: messagesDevWhereInput | messagesDevWhereInput[]
    id?: IntFilter<"messagesDev"> | number
    chat_id?: IntFilter<"messagesDev"> | number
    remitente?: EnumRemitenteTipoDevFilter<"messagesDev"> | $Enums.RemitenteTipoDev
    contenido?: StringFilter<"messagesDev"> | string
    creado_en?: DateTimeFilter<"messagesDev"> | Date | string
  }

  export type messagesDevOrderByWithRelationInput = {
    id?: SortOrder
    chat_id?: SortOrder
    remitente?: SortOrder
    contenido?: SortOrder
    creado_en?: SortOrder
  }

  export type messagesDevWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: messagesDevWhereInput | messagesDevWhereInput[]
    OR?: messagesDevWhereInput[]
    NOT?: messagesDevWhereInput | messagesDevWhereInput[]
    chat_id?: IntFilter<"messagesDev"> | number
    remitente?: EnumRemitenteTipoDevFilter<"messagesDev"> | $Enums.RemitenteTipoDev
    contenido?: StringFilter<"messagesDev"> | string
    creado_en?: DateTimeFilter<"messagesDev"> | Date | string
  }, "id">

  export type messagesDevOrderByWithAggregationInput = {
    id?: SortOrder
    chat_id?: SortOrder
    remitente?: SortOrder
    contenido?: SortOrder
    creado_en?: SortOrder
    _count?: messagesDevCountOrderByAggregateInput
    _avg?: messagesDevAvgOrderByAggregateInput
    _max?: messagesDevMaxOrderByAggregateInput
    _min?: messagesDevMinOrderByAggregateInput
    _sum?: messagesDevSumOrderByAggregateInput
  }

  export type messagesDevScalarWhereWithAggregatesInput = {
    AND?: messagesDevScalarWhereWithAggregatesInput | messagesDevScalarWhereWithAggregatesInput[]
    OR?: messagesDevScalarWhereWithAggregatesInput[]
    NOT?: messagesDevScalarWhereWithAggregatesInput | messagesDevScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"messagesDev"> | number
    chat_id?: IntWithAggregatesFilter<"messagesDev"> | number
    remitente?: EnumRemitenteTipoDevWithAggregatesFilter<"messagesDev"> | $Enums.RemitenteTipoDev
    contenido?: StringWithAggregatesFilter<"messagesDev"> | string
    creado_en?: DateTimeWithAggregatesFilter<"messagesDev"> | Date | string
  }

  export type messagesProdWhereInput = {
    AND?: messagesProdWhereInput | messagesProdWhereInput[]
    OR?: messagesProdWhereInput[]
    NOT?: messagesProdWhereInput | messagesProdWhereInput[]
    id?: IntFilter<"messagesProd"> | number
    chat_id?: IntFilter<"messagesProd"> | number
    remitente?: EnumRemitenteTipoProdFilter<"messagesProd"> | $Enums.RemitenteTipoProd
    contenido?: StringFilter<"messagesProd"> | string
    creado_en?: DateTimeFilter<"messagesProd"> | Date | string
  }

  export type messagesProdOrderByWithRelationInput = {
    id?: SortOrder
    chat_id?: SortOrder
    remitente?: SortOrder
    contenido?: SortOrder
    creado_en?: SortOrder
  }

  export type messagesProdWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: messagesProdWhereInput | messagesProdWhereInput[]
    OR?: messagesProdWhereInput[]
    NOT?: messagesProdWhereInput | messagesProdWhereInput[]
    chat_id?: IntFilter<"messagesProd"> | number
    remitente?: EnumRemitenteTipoProdFilter<"messagesProd"> | $Enums.RemitenteTipoProd
    contenido?: StringFilter<"messagesProd"> | string
    creado_en?: DateTimeFilter<"messagesProd"> | Date | string
  }, "id">

  export type messagesProdOrderByWithAggregationInput = {
    id?: SortOrder
    chat_id?: SortOrder
    remitente?: SortOrder
    contenido?: SortOrder
    creado_en?: SortOrder
    _count?: messagesProdCountOrderByAggregateInput
    _avg?: messagesProdAvgOrderByAggregateInput
    _max?: messagesProdMaxOrderByAggregateInput
    _min?: messagesProdMinOrderByAggregateInput
    _sum?: messagesProdSumOrderByAggregateInput
  }

  export type messagesProdScalarWhereWithAggregatesInput = {
    AND?: messagesProdScalarWhereWithAggregatesInput | messagesProdScalarWhereWithAggregatesInput[]
    OR?: messagesProdScalarWhereWithAggregatesInput[]
    NOT?: messagesProdScalarWhereWithAggregatesInput | messagesProdScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"messagesProd"> | number
    chat_id?: IntWithAggregatesFilter<"messagesProd"> | number
    remitente?: EnumRemitenteTipoProdWithAggregatesFilter<"messagesProd"> | $Enums.RemitenteTipoProd
    contenido?: StringWithAggregatesFilter<"messagesProd"> | string
    creado_en?: DateTimeWithAggregatesFilter<"messagesProd"> | Date | string
  }

  export type productsDevWhereInput = {
    AND?: productsDevWhereInput | productsDevWhereInput[]
    OR?: productsDevWhereInput[]
    NOT?: productsDevWhereInput | productsDevWhereInput[]
    id?: IntFilter<"productsDev"> | number
    nombre?: StringFilter<"productsDev"> | string
    descripcion?: StringNullableFilter<"productsDev"> | string | null
    precio?: FloatFilter<"productsDev"> | number
    stock?: IntFilter<"productsDev"> | number
    activo?: BoolFilter<"productsDev"> | boolean
    creado_en?: DateTimeFilter<"productsDev"> | Date | string
    actualizado_en?: DateTimeFilter<"productsDev"> | Date | string
    img_url?: StringFilter<"productsDev"> | string
    product_category?: IntNullableFilter<"productsDev"> | number | null
  }

  export type productsDevOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    precio?: SortOrder
    stock?: SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
    img_url?: SortOrder
    product_category?: SortOrderInput | SortOrder
  }

  export type productsDevWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: productsDevWhereInput | productsDevWhereInput[]
    OR?: productsDevWhereInput[]
    NOT?: productsDevWhereInput | productsDevWhereInput[]
    nombre?: StringFilter<"productsDev"> | string
    descripcion?: StringNullableFilter<"productsDev"> | string | null
    precio?: FloatFilter<"productsDev"> | number
    stock?: IntFilter<"productsDev"> | number
    activo?: BoolFilter<"productsDev"> | boolean
    creado_en?: DateTimeFilter<"productsDev"> | Date | string
    actualizado_en?: DateTimeFilter<"productsDev"> | Date | string
    img_url?: StringFilter<"productsDev"> | string
    product_category?: IntNullableFilter<"productsDev"> | number | null
  }, "id">

  export type productsDevOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    precio?: SortOrder
    stock?: SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
    img_url?: SortOrder
    product_category?: SortOrderInput | SortOrder
    _count?: productsDevCountOrderByAggregateInput
    _avg?: productsDevAvgOrderByAggregateInput
    _max?: productsDevMaxOrderByAggregateInput
    _min?: productsDevMinOrderByAggregateInput
    _sum?: productsDevSumOrderByAggregateInput
  }

  export type productsDevScalarWhereWithAggregatesInput = {
    AND?: productsDevScalarWhereWithAggregatesInput | productsDevScalarWhereWithAggregatesInput[]
    OR?: productsDevScalarWhereWithAggregatesInput[]
    NOT?: productsDevScalarWhereWithAggregatesInput | productsDevScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"productsDev"> | number
    nombre?: StringWithAggregatesFilter<"productsDev"> | string
    descripcion?: StringNullableWithAggregatesFilter<"productsDev"> | string | null
    precio?: FloatWithAggregatesFilter<"productsDev"> | number
    stock?: IntWithAggregatesFilter<"productsDev"> | number
    activo?: BoolWithAggregatesFilter<"productsDev"> | boolean
    creado_en?: DateTimeWithAggregatesFilter<"productsDev"> | Date | string
    actualizado_en?: DateTimeWithAggregatesFilter<"productsDev"> | Date | string
    img_url?: StringWithAggregatesFilter<"productsDev"> | string
    product_category?: IntNullableWithAggregatesFilter<"productsDev"> | number | null
  }

  export type productsProdWhereInput = {
    AND?: productsProdWhereInput | productsProdWhereInput[]
    OR?: productsProdWhereInput[]
    NOT?: productsProdWhereInput | productsProdWhereInput[]
    id?: IntFilter<"productsProd"> | number
    nombre?: StringFilter<"productsProd"> | string
    descripcion?: StringNullableFilter<"productsProd"> | string | null
    precio?: FloatFilter<"productsProd"> | number
    stock?: IntFilter<"productsProd"> | number
    activo?: BoolFilter<"productsProd"> | boolean
    creado_en?: DateTimeFilter<"productsProd"> | Date | string
    actualizado_en?: DateTimeFilter<"productsProd"> | Date | string
    img_url?: StringFilter<"productsProd"> | string
    product_category?: IntNullableFilter<"productsProd"> | number | null
  }

  export type productsProdOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    precio?: SortOrder
    stock?: SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
    img_url?: SortOrder
    product_category?: SortOrderInput | SortOrder
  }

  export type productsProdWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: productsProdWhereInput | productsProdWhereInput[]
    OR?: productsProdWhereInput[]
    NOT?: productsProdWhereInput | productsProdWhereInput[]
    nombre?: StringFilter<"productsProd"> | string
    descripcion?: StringNullableFilter<"productsProd"> | string | null
    precio?: FloatFilter<"productsProd"> | number
    stock?: IntFilter<"productsProd"> | number
    activo?: BoolFilter<"productsProd"> | boolean
    creado_en?: DateTimeFilter<"productsProd"> | Date | string
    actualizado_en?: DateTimeFilter<"productsProd"> | Date | string
    img_url?: StringFilter<"productsProd"> | string
    product_category?: IntNullableFilter<"productsProd"> | number | null
  }, "id">

  export type productsProdOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    precio?: SortOrder
    stock?: SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
    img_url?: SortOrder
    product_category?: SortOrderInput | SortOrder
    _count?: productsProdCountOrderByAggregateInput
    _avg?: productsProdAvgOrderByAggregateInput
    _max?: productsProdMaxOrderByAggregateInput
    _min?: productsProdMinOrderByAggregateInput
    _sum?: productsProdSumOrderByAggregateInput
  }

  export type productsProdScalarWhereWithAggregatesInput = {
    AND?: productsProdScalarWhereWithAggregatesInput | productsProdScalarWhereWithAggregatesInput[]
    OR?: productsProdScalarWhereWithAggregatesInput[]
    NOT?: productsProdScalarWhereWithAggregatesInput | productsProdScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"productsProd"> | number
    nombre?: StringWithAggregatesFilter<"productsProd"> | string
    descripcion?: StringNullableWithAggregatesFilter<"productsProd"> | string | null
    precio?: FloatWithAggregatesFilter<"productsProd"> | number
    stock?: IntWithAggregatesFilter<"productsProd"> | number
    activo?: BoolWithAggregatesFilter<"productsProd"> | boolean
    creado_en?: DateTimeWithAggregatesFilter<"productsProd"> | Date | string
    actualizado_en?: DateTimeWithAggregatesFilter<"productsProd"> | Date | string
    img_url?: StringWithAggregatesFilter<"productsProd"> | string
    product_category?: IntNullableWithAggregatesFilter<"productsProd"> | number | null
  }

  export type usersDevWhereInput = {
    AND?: usersDevWhereInput | usersDevWhereInput[]
    OR?: usersDevWhereInput[]
    NOT?: usersDevWhereInput | usersDevWhereInput[]
    id?: IntFilter<"usersDev"> | number
    nombre?: StringFilter<"usersDev"> | string
    email?: StringFilter<"usersDev"> | string
    password_hash?: StringFilter<"usersDev"> | string
    rol_id?: IntFilter<"usersDev"> | number
    token_jwt?: StringNullableFilter<"usersDev"> | string | null
    token_refresh?: StringNullableFilter<"usersDev"> | string | null
    ultimo_login?: DateTimeNullableFilter<"usersDev"> | Date | string | null
    creado_en?: DateTimeFilter<"usersDev"> | Date | string
    actualizado_en?: DateTimeFilter<"usersDev"> | Date | string
    activo?: BoolFilter<"usersDev"> | boolean
  }

  export type usersDevOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    rol_id?: SortOrder
    token_jwt?: SortOrderInput | SortOrder
    token_refresh?: SortOrderInput | SortOrder
    ultimo_login?: SortOrderInput | SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
    activo?: SortOrder
  }

  export type usersDevWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersDevWhereInput | usersDevWhereInput[]
    OR?: usersDevWhereInput[]
    NOT?: usersDevWhereInput | usersDevWhereInput[]
    nombre?: StringFilter<"usersDev"> | string
    password_hash?: StringFilter<"usersDev"> | string
    rol_id?: IntFilter<"usersDev"> | number
    token_jwt?: StringNullableFilter<"usersDev"> | string | null
    token_refresh?: StringNullableFilter<"usersDev"> | string | null
    ultimo_login?: DateTimeNullableFilter<"usersDev"> | Date | string | null
    creado_en?: DateTimeFilter<"usersDev"> | Date | string
    actualizado_en?: DateTimeFilter<"usersDev"> | Date | string
    activo?: BoolFilter<"usersDev"> | boolean
  }, "id" | "email">

  export type usersDevOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    rol_id?: SortOrder
    token_jwt?: SortOrderInput | SortOrder
    token_refresh?: SortOrderInput | SortOrder
    ultimo_login?: SortOrderInput | SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
    activo?: SortOrder
    _count?: usersDevCountOrderByAggregateInput
    _avg?: usersDevAvgOrderByAggregateInput
    _max?: usersDevMaxOrderByAggregateInput
    _min?: usersDevMinOrderByAggregateInput
    _sum?: usersDevSumOrderByAggregateInput
  }

  export type usersDevScalarWhereWithAggregatesInput = {
    AND?: usersDevScalarWhereWithAggregatesInput | usersDevScalarWhereWithAggregatesInput[]
    OR?: usersDevScalarWhereWithAggregatesInput[]
    NOT?: usersDevScalarWhereWithAggregatesInput | usersDevScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usersDev"> | number
    nombre?: StringWithAggregatesFilter<"usersDev"> | string
    email?: StringWithAggregatesFilter<"usersDev"> | string
    password_hash?: StringWithAggregatesFilter<"usersDev"> | string
    rol_id?: IntWithAggregatesFilter<"usersDev"> | number
    token_jwt?: StringNullableWithAggregatesFilter<"usersDev"> | string | null
    token_refresh?: StringNullableWithAggregatesFilter<"usersDev"> | string | null
    ultimo_login?: DateTimeNullableWithAggregatesFilter<"usersDev"> | Date | string | null
    creado_en?: DateTimeWithAggregatesFilter<"usersDev"> | Date | string
    actualizado_en?: DateTimeWithAggregatesFilter<"usersDev"> | Date | string
    activo?: BoolWithAggregatesFilter<"usersDev"> | boolean
  }

  export type usersProdWhereInput = {
    AND?: usersProdWhereInput | usersProdWhereInput[]
    OR?: usersProdWhereInput[]
    NOT?: usersProdWhereInput | usersProdWhereInput[]
    id?: IntFilter<"usersProd"> | number
    nombre?: StringFilter<"usersProd"> | string
    email?: StringFilter<"usersProd"> | string
    password_hash?: StringFilter<"usersProd"> | string
    rol_id?: IntFilter<"usersProd"> | number
    token_jwt?: StringNullableFilter<"usersProd"> | string | null
    token_refresh?: StringNullableFilter<"usersProd"> | string | null
    ultimo_login?: DateTimeNullableFilter<"usersProd"> | Date | string | null
    creado_en?: DateTimeFilter<"usersProd"> | Date | string
    actualizado_en?: DateTimeFilter<"usersProd"> | Date | string
    activo?: BoolFilter<"usersProd"> | boolean
  }

  export type usersProdOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    rol_id?: SortOrder
    token_jwt?: SortOrderInput | SortOrder
    token_refresh?: SortOrderInput | SortOrder
    ultimo_login?: SortOrderInput | SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
    activo?: SortOrder
  }

  export type usersProdWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersProdWhereInput | usersProdWhereInput[]
    OR?: usersProdWhereInput[]
    NOT?: usersProdWhereInput | usersProdWhereInput[]
    nombre?: StringFilter<"usersProd"> | string
    password_hash?: StringFilter<"usersProd"> | string
    rol_id?: IntFilter<"usersProd"> | number
    token_jwt?: StringNullableFilter<"usersProd"> | string | null
    token_refresh?: StringNullableFilter<"usersProd"> | string | null
    ultimo_login?: DateTimeNullableFilter<"usersProd"> | Date | string | null
    creado_en?: DateTimeFilter<"usersProd"> | Date | string
    actualizado_en?: DateTimeFilter<"usersProd"> | Date | string
    activo?: BoolFilter<"usersProd"> | boolean
  }, "id" | "email">

  export type usersProdOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    rol_id?: SortOrder
    token_jwt?: SortOrderInput | SortOrder
    token_refresh?: SortOrderInput | SortOrder
    ultimo_login?: SortOrderInput | SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
    activo?: SortOrder
    _count?: usersProdCountOrderByAggregateInput
    _avg?: usersProdAvgOrderByAggregateInput
    _max?: usersProdMaxOrderByAggregateInput
    _min?: usersProdMinOrderByAggregateInput
    _sum?: usersProdSumOrderByAggregateInput
  }

  export type usersProdScalarWhereWithAggregatesInput = {
    AND?: usersProdScalarWhereWithAggregatesInput | usersProdScalarWhereWithAggregatesInput[]
    OR?: usersProdScalarWhereWithAggregatesInput[]
    NOT?: usersProdScalarWhereWithAggregatesInput | usersProdScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usersProd"> | number
    nombre?: StringWithAggregatesFilter<"usersProd"> | string
    email?: StringWithAggregatesFilter<"usersProd"> | string
    password_hash?: StringWithAggregatesFilter<"usersProd"> | string
    rol_id?: IntWithAggregatesFilter<"usersProd"> | number
    token_jwt?: StringNullableWithAggregatesFilter<"usersProd"> | string | null
    token_refresh?: StringNullableWithAggregatesFilter<"usersProd"> | string | null
    ultimo_login?: DateTimeNullableWithAggregatesFilter<"usersProd"> | Date | string | null
    creado_en?: DateTimeWithAggregatesFilter<"usersProd"> | Date | string
    actualizado_en?: DateTimeWithAggregatesFilter<"usersProd"> | Date | string
    activo?: BoolWithAggregatesFilter<"usersProd"> | boolean
  }

  export type product_categoriesDevWhereInput = {
    AND?: product_categoriesDevWhereInput | product_categoriesDevWhereInput[]
    OR?: product_categoriesDevWhereInput[]
    NOT?: product_categoriesDevWhereInput | product_categoriesDevWhereInput[]
    id?: IntFilter<"product_categoriesDev"> | number
    nombre?: StringNullableFilter<"product_categoriesDev"> | string | null
    img_url?: StringFilter<"product_categoriesDev"> | string
  }

  export type product_categoriesDevOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    img_url?: SortOrder
  }

  export type product_categoriesDevWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: product_categoriesDevWhereInput | product_categoriesDevWhereInput[]
    OR?: product_categoriesDevWhereInput[]
    NOT?: product_categoriesDevWhereInput | product_categoriesDevWhereInput[]
    nombre?: StringNullableFilter<"product_categoriesDev"> | string | null
    img_url?: StringFilter<"product_categoriesDev"> | string
  }, "id">

  export type product_categoriesDevOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    img_url?: SortOrder
    _count?: product_categoriesDevCountOrderByAggregateInput
    _avg?: product_categoriesDevAvgOrderByAggregateInput
    _max?: product_categoriesDevMaxOrderByAggregateInput
    _min?: product_categoriesDevMinOrderByAggregateInput
    _sum?: product_categoriesDevSumOrderByAggregateInput
  }

  export type product_categoriesDevScalarWhereWithAggregatesInput = {
    AND?: product_categoriesDevScalarWhereWithAggregatesInput | product_categoriesDevScalarWhereWithAggregatesInput[]
    OR?: product_categoriesDevScalarWhereWithAggregatesInput[]
    NOT?: product_categoriesDevScalarWhereWithAggregatesInput | product_categoriesDevScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"product_categoriesDev"> | number
    nombre?: StringNullableWithAggregatesFilter<"product_categoriesDev"> | string | null
    img_url?: StringWithAggregatesFilter<"product_categoriesDev"> | string
  }

  export type product_categoriesProdWhereInput = {
    AND?: product_categoriesProdWhereInput | product_categoriesProdWhereInput[]
    OR?: product_categoriesProdWhereInput[]
    NOT?: product_categoriesProdWhereInput | product_categoriesProdWhereInput[]
    id?: IntFilter<"product_categoriesProd"> | number
    nombre?: StringNullableFilter<"product_categoriesProd"> | string | null
    img_url?: StringFilter<"product_categoriesProd"> | string
  }

  export type product_categoriesProdOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    img_url?: SortOrder
  }

  export type product_categoriesProdWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: product_categoriesProdWhereInput | product_categoriesProdWhereInput[]
    OR?: product_categoriesProdWhereInput[]
    NOT?: product_categoriesProdWhereInput | product_categoriesProdWhereInput[]
    nombre?: StringNullableFilter<"product_categoriesProd"> | string | null
    img_url?: StringFilter<"product_categoriesProd"> | string
  }, "id">

  export type product_categoriesProdOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    img_url?: SortOrder
    _count?: product_categoriesProdCountOrderByAggregateInput
    _avg?: product_categoriesProdAvgOrderByAggregateInput
    _max?: product_categoriesProdMaxOrderByAggregateInput
    _min?: product_categoriesProdMinOrderByAggregateInput
    _sum?: product_categoriesProdSumOrderByAggregateInput
  }

  export type product_categoriesProdScalarWhereWithAggregatesInput = {
    AND?: product_categoriesProdScalarWhereWithAggregatesInput | product_categoriesProdScalarWhereWithAggregatesInput[]
    OR?: product_categoriesProdScalarWhereWithAggregatesInput[]
    NOT?: product_categoriesProdScalarWhereWithAggregatesInput | product_categoriesProdScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"product_categoriesProd"> | number
    nombre?: StringNullableWithAggregatesFilter<"product_categoriesProd"> | string | null
    img_url?: StringWithAggregatesFilter<"product_categoriesProd"> | string
  }

  export type chatsDevCreateInput = {
    usuario_id: number
    titulo: string
    creado_en?: Date | string
    actualizado_en: Date | string
  }

  export type chatsDevUncheckedCreateInput = {
    id?: number
    usuario_id: number
    titulo: string
    creado_en?: Date | string
    actualizado_en: Date | string
  }

  export type chatsDevUpdateInput = {
    usuario_id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatsDevUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatsDevCreateManyInput = {
    id?: number
    usuario_id: number
    titulo: string
    creado_en?: Date | string
    actualizado_en: Date | string
  }

  export type chatsDevUpdateManyMutationInput = {
    usuario_id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatsDevUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatsProdCreateInput = {
    usuario_id: number
    titulo: string
    creado_en?: Date | string
    actualizado_en: Date | string
  }

  export type chatsProdUncheckedCreateInput = {
    id?: number
    usuario_id: number
    titulo: string
    creado_en?: Date | string
    actualizado_en: Date | string
  }

  export type chatsProdUpdateInput = {
    usuario_id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatsProdUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatsProdCreateManyInput = {
    id?: number
    usuario_id: number
    titulo: string
    creado_en?: Date | string
    actualizado_en: Date | string
  }

  export type chatsProdUpdateManyMutationInput = {
    usuario_id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatsProdUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invalid_tokensDevCreateInput = {
    token: string
    tipo: $Enums.TokenTipoDev
    invalidado_en: Date | string
  }

  export type invalid_tokensDevUncheckedCreateInput = {
    id?: number
    token: string
    tipo: $Enums.TokenTipoDev
    invalidado_en: Date | string
  }

  export type invalid_tokensDevUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTokenTipoDevFieldUpdateOperationsInput | $Enums.TokenTipoDev
    invalidado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invalid_tokensDevUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTokenTipoDevFieldUpdateOperationsInput | $Enums.TokenTipoDev
    invalidado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invalid_tokensDevCreateManyInput = {
    id?: number
    token: string
    tipo: $Enums.TokenTipoDev
    invalidado_en: Date | string
  }

  export type invalid_tokensDevUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTokenTipoDevFieldUpdateOperationsInput | $Enums.TokenTipoDev
    invalidado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invalid_tokensDevUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTokenTipoDevFieldUpdateOperationsInput | $Enums.TokenTipoDev
    invalidado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invalid_tokensProdCreateInput = {
    token: string
    tipo: $Enums.TokenTipoProd
    invalidado_en: Date | string
  }

  export type invalid_tokensProdUncheckedCreateInput = {
    id?: number
    token: string
    tipo: $Enums.TokenTipoProd
    invalidado_en: Date | string
  }

  export type invalid_tokensProdUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTokenTipoProdFieldUpdateOperationsInput | $Enums.TokenTipoProd
    invalidado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invalid_tokensProdUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTokenTipoProdFieldUpdateOperationsInput | $Enums.TokenTipoProd
    invalidado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invalid_tokensProdCreateManyInput = {
    id?: number
    token: string
    tipo: $Enums.TokenTipoProd
    invalidado_en: Date | string
  }

  export type invalid_tokensProdUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTokenTipoProdFieldUpdateOperationsInput | $Enums.TokenTipoProd
    invalidado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invalid_tokensProdUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTokenTipoProdFieldUpdateOperationsInput | $Enums.TokenTipoProd
    invalidado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesDevCreateInput = {
    chat_id: number
    remitente: $Enums.RemitenteTipoDev
    contenido: string
    creado_en?: Date | string
  }

  export type messagesDevUncheckedCreateInput = {
    id?: number
    chat_id: number
    remitente: $Enums.RemitenteTipoDev
    contenido: string
    creado_en?: Date | string
  }

  export type messagesDevUpdateInput = {
    chat_id?: IntFieldUpdateOperationsInput | number
    remitente?: EnumRemitenteTipoDevFieldUpdateOperationsInput | $Enums.RemitenteTipoDev
    contenido?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesDevUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chat_id?: IntFieldUpdateOperationsInput | number
    remitente?: EnumRemitenteTipoDevFieldUpdateOperationsInput | $Enums.RemitenteTipoDev
    contenido?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesDevCreateManyInput = {
    id?: number
    chat_id: number
    remitente: $Enums.RemitenteTipoDev
    contenido: string
    creado_en?: Date | string
  }

  export type messagesDevUpdateManyMutationInput = {
    chat_id?: IntFieldUpdateOperationsInput | number
    remitente?: EnumRemitenteTipoDevFieldUpdateOperationsInput | $Enums.RemitenteTipoDev
    contenido?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesDevUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chat_id?: IntFieldUpdateOperationsInput | number
    remitente?: EnumRemitenteTipoDevFieldUpdateOperationsInput | $Enums.RemitenteTipoDev
    contenido?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesProdCreateInput = {
    chat_id: number
    remitente: $Enums.RemitenteTipoProd
    contenido: string
    creado_en?: Date | string
  }

  export type messagesProdUncheckedCreateInput = {
    id?: number
    chat_id: number
    remitente: $Enums.RemitenteTipoProd
    contenido: string
    creado_en?: Date | string
  }

  export type messagesProdUpdateInput = {
    chat_id?: IntFieldUpdateOperationsInput | number
    remitente?: EnumRemitenteTipoProdFieldUpdateOperationsInput | $Enums.RemitenteTipoProd
    contenido?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesProdUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chat_id?: IntFieldUpdateOperationsInput | number
    remitente?: EnumRemitenteTipoProdFieldUpdateOperationsInput | $Enums.RemitenteTipoProd
    contenido?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesProdCreateManyInput = {
    id?: number
    chat_id: number
    remitente: $Enums.RemitenteTipoProd
    contenido: string
    creado_en?: Date | string
  }

  export type messagesProdUpdateManyMutationInput = {
    chat_id?: IntFieldUpdateOperationsInput | number
    remitente?: EnumRemitenteTipoProdFieldUpdateOperationsInput | $Enums.RemitenteTipoProd
    contenido?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type messagesProdUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chat_id?: IntFieldUpdateOperationsInput | number
    remitente?: EnumRemitenteTipoProdFieldUpdateOperationsInput | $Enums.RemitenteTipoProd
    contenido?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsDevCreateInput = {
    nombre: string
    descripcion?: string | null
    precio: number
    stock: number
    activo: boolean
    creado_en?: Date | string
    actualizado_en: Date | string
    img_url: string
    product_category?: number | null
  }

  export type productsDevUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    precio: number
    stock: number
    activo: boolean
    creado_en?: Date | string
    actualizado_en: Date | string
    img_url: string
    product_category?: number | null
  }

  export type productsDevUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    img_url?: StringFieldUpdateOperationsInput | string
    product_category?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type productsDevUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    img_url?: StringFieldUpdateOperationsInput | string
    product_category?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type productsDevCreateManyInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    precio: number
    stock: number
    activo: boolean
    creado_en?: Date | string
    actualizado_en: Date | string
    img_url: string
    product_category?: number | null
  }

  export type productsDevUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    img_url?: StringFieldUpdateOperationsInput | string
    product_category?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type productsDevUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    img_url?: StringFieldUpdateOperationsInput | string
    product_category?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type productsProdCreateInput = {
    nombre: string
    descripcion?: string | null
    precio: number
    stock: number
    activo: boolean
    creado_en?: Date | string
    actualizado_en: Date | string
    img_url: string
    product_category?: number | null
  }

  export type productsProdUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    precio: number
    stock: number
    activo: boolean
    creado_en?: Date | string
    actualizado_en: Date | string
    img_url: string
    product_category?: number | null
  }

  export type productsProdUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    img_url?: StringFieldUpdateOperationsInput | string
    product_category?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type productsProdUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    img_url?: StringFieldUpdateOperationsInput | string
    product_category?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type productsProdCreateManyInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    precio: number
    stock: number
    activo: boolean
    creado_en?: Date | string
    actualizado_en: Date | string
    img_url: string
    product_category?: number | null
  }

  export type productsProdUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    img_url?: StringFieldUpdateOperationsInput | string
    product_category?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type productsProdUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    img_url?: StringFieldUpdateOperationsInput | string
    product_category?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersDevCreateInput = {
    nombre: string
    email: string
    password_hash: string
    rol_id: number
    token_jwt?: string | null
    token_refresh?: string | null
    ultimo_login?: Date | string | null
    creado_en?: Date | string
    actualizado_en: Date | string
    activo: boolean
  }

  export type usersDevUncheckedCreateInput = {
    id?: number
    nombre: string
    email: string
    password_hash: string
    rol_id: number
    token_jwt?: string | null
    token_refresh?: string | null
    ultimo_login?: Date | string | null
    creado_en?: Date | string
    actualizado_en: Date | string
    activo: boolean
  }

  export type usersDevUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    rol_id?: IntFieldUpdateOperationsInput | number
    token_jwt?: NullableStringFieldUpdateOperationsInput | string | null
    token_refresh?: NullableStringFieldUpdateOperationsInput | string | null
    ultimo_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usersDevUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    rol_id?: IntFieldUpdateOperationsInput | number
    token_jwt?: NullableStringFieldUpdateOperationsInput | string | null
    token_refresh?: NullableStringFieldUpdateOperationsInput | string | null
    ultimo_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usersDevCreateManyInput = {
    id?: number
    nombre: string
    email: string
    password_hash: string
    rol_id: number
    token_jwt?: string | null
    token_refresh?: string | null
    ultimo_login?: Date | string | null
    creado_en?: Date | string
    actualizado_en: Date | string
    activo: boolean
  }

  export type usersDevUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    rol_id?: IntFieldUpdateOperationsInput | number
    token_jwt?: NullableStringFieldUpdateOperationsInput | string | null
    token_refresh?: NullableStringFieldUpdateOperationsInput | string | null
    ultimo_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usersDevUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    rol_id?: IntFieldUpdateOperationsInput | number
    token_jwt?: NullableStringFieldUpdateOperationsInput | string | null
    token_refresh?: NullableStringFieldUpdateOperationsInput | string | null
    ultimo_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usersProdCreateInput = {
    nombre: string
    email: string
    password_hash: string
    rol_id: number
    token_jwt?: string | null
    token_refresh?: string | null
    ultimo_login?: Date | string | null
    creado_en?: Date | string
    actualizado_en: Date | string
    activo: boolean
  }

  export type usersProdUncheckedCreateInput = {
    id?: number
    nombre: string
    email: string
    password_hash: string
    rol_id: number
    token_jwt?: string | null
    token_refresh?: string | null
    ultimo_login?: Date | string | null
    creado_en?: Date | string
    actualizado_en: Date | string
    activo: boolean
  }

  export type usersProdUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    rol_id?: IntFieldUpdateOperationsInput | number
    token_jwt?: NullableStringFieldUpdateOperationsInput | string | null
    token_refresh?: NullableStringFieldUpdateOperationsInput | string | null
    ultimo_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usersProdUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    rol_id?: IntFieldUpdateOperationsInput | number
    token_jwt?: NullableStringFieldUpdateOperationsInput | string | null
    token_refresh?: NullableStringFieldUpdateOperationsInput | string | null
    ultimo_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usersProdCreateManyInput = {
    id?: number
    nombre: string
    email: string
    password_hash: string
    rol_id: number
    token_jwt?: string | null
    token_refresh?: string | null
    ultimo_login?: Date | string | null
    creado_en?: Date | string
    actualizado_en: Date | string
    activo: boolean
  }

  export type usersProdUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    rol_id?: IntFieldUpdateOperationsInput | number
    token_jwt?: NullableStringFieldUpdateOperationsInput | string | null
    token_refresh?: NullableStringFieldUpdateOperationsInput | string | null
    ultimo_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usersProdUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    rol_id?: IntFieldUpdateOperationsInput | number
    token_jwt?: NullableStringFieldUpdateOperationsInput | string | null
    token_refresh?: NullableStringFieldUpdateOperationsInput | string | null
    ultimo_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type product_categoriesDevCreateInput = {
    nombre?: string | null
    img_url: string
  }

  export type product_categoriesDevUncheckedCreateInput = {
    id?: number
    nombre?: string | null
    img_url: string
  }

  export type product_categoriesDevUpdateInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: StringFieldUpdateOperationsInput | string
  }

  export type product_categoriesDevUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: StringFieldUpdateOperationsInput | string
  }

  export type product_categoriesDevCreateManyInput = {
    id?: number
    nombre?: string | null
    img_url: string
  }

  export type product_categoriesDevUpdateManyMutationInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: StringFieldUpdateOperationsInput | string
  }

  export type product_categoriesDevUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: StringFieldUpdateOperationsInput | string
  }

  export type product_categoriesProdCreateInput = {
    nombre?: string | null
    img_url: string
  }

  export type product_categoriesProdUncheckedCreateInput = {
    id?: number
    nombre?: string | null
    img_url: string
  }

  export type product_categoriesProdUpdateInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: StringFieldUpdateOperationsInput | string
  }

  export type product_categoriesProdUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: StringFieldUpdateOperationsInput | string
  }

  export type product_categoriesProdCreateManyInput = {
    id?: number
    nombre?: string | null
    img_url: string
  }

  export type product_categoriesProdUpdateManyMutationInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: StringFieldUpdateOperationsInput | string
  }

  export type product_categoriesProdUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    img_url?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type chatsDevCountOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    titulo?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
  }

  export type chatsDevAvgOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
  }

  export type chatsDevMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    titulo?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
  }

  export type chatsDevMinOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    titulo?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
  }

  export type chatsDevSumOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type chatsProdCountOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    titulo?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
  }

  export type chatsProdAvgOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
  }

  export type chatsProdMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    titulo?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
  }

  export type chatsProdMinOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    titulo?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
  }

  export type chatsProdSumOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
  }

  export type EnumTokenTipoDevFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenTipoDev | EnumTokenTipoDevFieldRefInput<$PrismaModel>
    in?: $Enums.TokenTipoDev[] | ListEnumTokenTipoDevFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenTipoDev[] | ListEnumTokenTipoDevFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTipoDevFilter<$PrismaModel> | $Enums.TokenTipoDev
  }

  export type invalid_tokensDevCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    tipo?: SortOrder
    invalidado_en?: SortOrder
  }

  export type invalid_tokensDevAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type invalid_tokensDevMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    tipo?: SortOrder
    invalidado_en?: SortOrder
  }

  export type invalid_tokensDevMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    tipo?: SortOrder
    invalidado_en?: SortOrder
  }

  export type invalid_tokensDevSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumTokenTipoDevWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenTipoDev | EnumTokenTipoDevFieldRefInput<$PrismaModel>
    in?: $Enums.TokenTipoDev[] | ListEnumTokenTipoDevFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenTipoDev[] | ListEnumTokenTipoDevFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTipoDevWithAggregatesFilter<$PrismaModel> | $Enums.TokenTipoDev
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTipoDevFilter<$PrismaModel>
    _max?: NestedEnumTokenTipoDevFilter<$PrismaModel>
  }

  export type EnumTokenTipoProdFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenTipoProd | EnumTokenTipoProdFieldRefInput<$PrismaModel>
    in?: $Enums.TokenTipoProd[] | ListEnumTokenTipoProdFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenTipoProd[] | ListEnumTokenTipoProdFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTipoProdFilter<$PrismaModel> | $Enums.TokenTipoProd
  }

  export type invalid_tokensProdCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    tipo?: SortOrder
    invalidado_en?: SortOrder
  }

  export type invalid_tokensProdAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type invalid_tokensProdMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    tipo?: SortOrder
    invalidado_en?: SortOrder
  }

  export type invalid_tokensProdMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    tipo?: SortOrder
    invalidado_en?: SortOrder
  }

  export type invalid_tokensProdSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumTokenTipoProdWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenTipoProd | EnumTokenTipoProdFieldRefInput<$PrismaModel>
    in?: $Enums.TokenTipoProd[] | ListEnumTokenTipoProdFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenTipoProd[] | ListEnumTokenTipoProdFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTipoProdWithAggregatesFilter<$PrismaModel> | $Enums.TokenTipoProd
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTipoProdFilter<$PrismaModel>
    _max?: NestedEnumTokenTipoProdFilter<$PrismaModel>
  }

  export type EnumRemitenteTipoDevFilter<$PrismaModel = never> = {
    equals?: $Enums.RemitenteTipoDev | EnumRemitenteTipoDevFieldRefInput<$PrismaModel>
    in?: $Enums.RemitenteTipoDev[] | ListEnumRemitenteTipoDevFieldRefInput<$PrismaModel>
    notIn?: $Enums.RemitenteTipoDev[] | ListEnumRemitenteTipoDevFieldRefInput<$PrismaModel>
    not?: NestedEnumRemitenteTipoDevFilter<$PrismaModel> | $Enums.RemitenteTipoDev
  }

  export type messagesDevCountOrderByAggregateInput = {
    id?: SortOrder
    chat_id?: SortOrder
    remitente?: SortOrder
    contenido?: SortOrder
    creado_en?: SortOrder
  }

  export type messagesDevAvgOrderByAggregateInput = {
    id?: SortOrder
    chat_id?: SortOrder
  }

  export type messagesDevMaxOrderByAggregateInput = {
    id?: SortOrder
    chat_id?: SortOrder
    remitente?: SortOrder
    contenido?: SortOrder
    creado_en?: SortOrder
  }

  export type messagesDevMinOrderByAggregateInput = {
    id?: SortOrder
    chat_id?: SortOrder
    remitente?: SortOrder
    contenido?: SortOrder
    creado_en?: SortOrder
  }

  export type messagesDevSumOrderByAggregateInput = {
    id?: SortOrder
    chat_id?: SortOrder
  }

  export type EnumRemitenteTipoDevWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RemitenteTipoDev | EnumRemitenteTipoDevFieldRefInput<$PrismaModel>
    in?: $Enums.RemitenteTipoDev[] | ListEnumRemitenteTipoDevFieldRefInput<$PrismaModel>
    notIn?: $Enums.RemitenteTipoDev[] | ListEnumRemitenteTipoDevFieldRefInput<$PrismaModel>
    not?: NestedEnumRemitenteTipoDevWithAggregatesFilter<$PrismaModel> | $Enums.RemitenteTipoDev
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRemitenteTipoDevFilter<$PrismaModel>
    _max?: NestedEnumRemitenteTipoDevFilter<$PrismaModel>
  }

  export type EnumRemitenteTipoProdFilter<$PrismaModel = never> = {
    equals?: $Enums.RemitenteTipoProd | EnumRemitenteTipoProdFieldRefInput<$PrismaModel>
    in?: $Enums.RemitenteTipoProd[] | ListEnumRemitenteTipoProdFieldRefInput<$PrismaModel>
    notIn?: $Enums.RemitenteTipoProd[] | ListEnumRemitenteTipoProdFieldRefInput<$PrismaModel>
    not?: NestedEnumRemitenteTipoProdFilter<$PrismaModel> | $Enums.RemitenteTipoProd
  }

  export type messagesProdCountOrderByAggregateInput = {
    id?: SortOrder
    chat_id?: SortOrder
    remitente?: SortOrder
    contenido?: SortOrder
    creado_en?: SortOrder
  }

  export type messagesProdAvgOrderByAggregateInput = {
    id?: SortOrder
    chat_id?: SortOrder
  }

  export type messagesProdMaxOrderByAggregateInput = {
    id?: SortOrder
    chat_id?: SortOrder
    remitente?: SortOrder
    contenido?: SortOrder
    creado_en?: SortOrder
  }

  export type messagesProdMinOrderByAggregateInput = {
    id?: SortOrder
    chat_id?: SortOrder
    remitente?: SortOrder
    contenido?: SortOrder
    creado_en?: SortOrder
  }

  export type messagesProdSumOrderByAggregateInput = {
    id?: SortOrder
    chat_id?: SortOrder
  }

  export type EnumRemitenteTipoProdWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RemitenteTipoProd | EnumRemitenteTipoProdFieldRefInput<$PrismaModel>
    in?: $Enums.RemitenteTipoProd[] | ListEnumRemitenteTipoProdFieldRefInput<$PrismaModel>
    notIn?: $Enums.RemitenteTipoProd[] | ListEnumRemitenteTipoProdFieldRefInput<$PrismaModel>
    not?: NestedEnumRemitenteTipoProdWithAggregatesFilter<$PrismaModel> | $Enums.RemitenteTipoProd
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRemitenteTipoProdFilter<$PrismaModel>
    _max?: NestedEnumRemitenteTipoProdFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type productsDevCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
    img_url?: SortOrder
    product_category?: SortOrder
  }

  export type productsDevAvgOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    product_category?: SortOrder
  }

  export type productsDevMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
    img_url?: SortOrder
    product_category?: SortOrder
  }

  export type productsDevMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
    img_url?: SortOrder
    product_category?: SortOrder
  }

  export type productsDevSumOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    product_category?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type productsProdCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
    img_url?: SortOrder
    product_category?: SortOrder
  }

  export type productsProdAvgOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    product_category?: SortOrder
  }

  export type productsProdMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
    img_url?: SortOrder
    product_category?: SortOrder
  }

  export type productsProdMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
    img_url?: SortOrder
    product_category?: SortOrder
  }

  export type productsProdSumOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    product_category?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type usersDevCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    rol_id?: SortOrder
    token_jwt?: SortOrder
    token_refresh?: SortOrder
    ultimo_login?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
    activo?: SortOrder
  }

  export type usersDevAvgOrderByAggregateInput = {
    id?: SortOrder
    rol_id?: SortOrder
  }

  export type usersDevMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    rol_id?: SortOrder
    token_jwt?: SortOrder
    token_refresh?: SortOrder
    ultimo_login?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
    activo?: SortOrder
  }

  export type usersDevMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    rol_id?: SortOrder
    token_jwt?: SortOrder
    token_refresh?: SortOrder
    ultimo_login?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
    activo?: SortOrder
  }

  export type usersDevSumOrderByAggregateInput = {
    id?: SortOrder
    rol_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type usersProdCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    rol_id?: SortOrder
    token_jwt?: SortOrder
    token_refresh?: SortOrder
    ultimo_login?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
    activo?: SortOrder
  }

  export type usersProdAvgOrderByAggregateInput = {
    id?: SortOrder
    rol_id?: SortOrder
  }

  export type usersProdMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    rol_id?: SortOrder
    token_jwt?: SortOrder
    token_refresh?: SortOrder
    ultimo_login?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
    activo?: SortOrder
  }

  export type usersProdMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    rol_id?: SortOrder
    token_jwt?: SortOrder
    token_refresh?: SortOrder
    ultimo_login?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
    activo?: SortOrder
  }

  export type usersProdSumOrderByAggregateInput = {
    id?: SortOrder
    rol_id?: SortOrder
  }

  export type product_categoriesDevCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    img_url?: SortOrder
  }

  export type product_categoriesDevAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type product_categoriesDevMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    img_url?: SortOrder
  }

  export type product_categoriesDevMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    img_url?: SortOrder
  }

  export type product_categoriesDevSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type product_categoriesProdCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    img_url?: SortOrder
  }

  export type product_categoriesProdAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type product_categoriesProdMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    img_url?: SortOrder
  }

  export type product_categoriesProdMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    img_url?: SortOrder
  }

  export type product_categoriesProdSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumTokenTipoDevFieldUpdateOperationsInput = {
    set?: $Enums.TokenTipoDev
  }

  export type EnumTokenTipoProdFieldUpdateOperationsInput = {
    set?: $Enums.TokenTipoProd
  }

  export type EnumRemitenteTipoDevFieldUpdateOperationsInput = {
    set?: $Enums.RemitenteTipoDev
  }

  export type EnumRemitenteTipoProdFieldUpdateOperationsInput = {
    set?: $Enums.RemitenteTipoProd
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTokenTipoDevFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenTipoDev | EnumTokenTipoDevFieldRefInput<$PrismaModel>
    in?: $Enums.TokenTipoDev[] | ListEnumTokenTipoDevFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenTipoDev[] | ListEnumTokenTipoDevFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTipoDevFilter<$PrismaModel> | $Enums.TokenTipoDev
  }

  export type NestedEnumTokenTipoDevWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenTipoDev | EnumTokenTipoDevFieldRefInput<$PrismaModel>
    in?: $Enums.TokenTipoDev[] | ListEnumTokenTipoDevFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenTipoDev[] | ListEnumTokenTipoDevFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTipoDevWithAggregatesFilter<$PrismaModel> | $Enums.TokenTipoDev
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTipoDevFilter<$PrismaModel>
    _max?: NestedEnumTokenTipoDevFilter<$PrismaModel>
  }

  export type NestedEnumTokenTipoProdFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenTipoProd | EnumTokenTipoProdFieldRefInput<$PrismaModel>
    in?: $Enums.TokenTipoProd[] | ListEnumTokenTipoProdFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenTipoProd[] | ListEnumTokenTipoProdFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTipoProdFilter<$PrismaModel> | $Enums.TokenTipoProd
  }

  export type NestedEnumTokenTipoProdWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenTipoProd | EnumTokenTipoProdFieldRefInput<$PrismaModel>
    in?: $Enums.TokenTipoProd[] | ListEnumTokenTipoProdFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenTipoProd[] | ListEnumTokenTipoProdFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTipoProdWithAggregatesFilter<$PrismaModel> | $Enums.TokenTipoProd
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTipoProdFilter<$PrismaModel>
    _max?: NestedEnumTokenTipoProdFilter<$PrismaModel>
  }

  export type NestedEnumRemitenteTipoDevFilter<$PrismaModel = never> = {
    equals?: $Enums.RemitenteTipoDev | EnumRemitenteTipoDevFieldRefInput<$PrismaModel>
    in?: $Enums.RemitenteTipoDev[] | ListEnumRemitenteTipoDevFieldRefInput<$PrismaModel>
    notIn?: $Enums.RemitenteTipoDev[] | ListEnumRemitenteTipoDevFieldRefInput<$PrismaModel>
    not?: NestedEnumRemitenteTipoDevFilter<$PrismaModel> | $Enums.RemitenteTipoDev
  }

  export type NestedEnumRemitenteTipoDevWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RemitenteTipoDev | EnumRemitenteTipoDevFieldRefInput<$PrismaModel>
    in?: $Enums.RemitenteTipoDev[] | ListEnumRemitenteTipoDevFieldRefInput<$PrismaModel>
    notIn?: $Enums.RemitenteTipoDev[] | ListEnumRemitenteTipoDevFieldRefInput<$PrismaModel>
    not?: NestedEnumRemitenteTipoDevWithAggregatesFilter<$PrismaModel> | $Enums.RemitenteTipoDev
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRemitenteTipoDevFilter<$PrismaModel>
    _max?: NestedEnumRemitenteTipoDevFilter<$PrismaModel>
  }

  export type NestedEnumRemitenteTipoProdFilter<$PrismaModel = never> = {
    equals?: $Enums.RemitenteTipoProd | EnumRemitenteTipoProdFieldRefInput<$PrismaModel>
    in?: $Enums.RemitenteTipoProd[] | ListEnumRemitenteTipoProdFieldRefInput<$PrismaModel>
    notIn?: $Enums.RemitenteTipoProd[] | ListEnumRemitenteTipoProdFieldRefInput<$PrismaModel>
    not?: NestedEnumRemitenteTipoProdFilter<$PrismaModel> | $Enums.RemitenteTipoProd
  }

  export type NestedEnumRemitenteTipoProdWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RemitenteTipoProd | EnumRemitenteTipoProdFieldRefInput<$PrismaModel>
    in?: $Enums.RemitenteTipoProd[] | ListEnumRemitenteTipoProdFieldRefInput<$PrismaModel>
    notIn?: $Enums.RemitenteTipoProd[] | ListEnumRemitenteTipoProdFieldRefInput<$PrismaModel>
    not?: NestedEnumRemitenteTipoProdWithAggregatesFilter<$PrismaModel> | $Enums.RemitenteTipoProd
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRemitenteTipoProdFilter<$PrismaModel>
    _max?: NestedEnumRemitenteTipoProdFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}