
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Dataset
 * 
 */
export type Dataset = $Result.DefaultSelection<Prisma.$DatasetPayload>
/**
 * Model DatasetColumn
 * 
 */
export type DatasetColumn = $Result.DefaultSelection<Prisma.$DatasetColumnPayload>
/**
 * Model QueryHistory
 * 
 */
export type QueryHistory = $Result.DefaultSelection<Prisma.$QueryHistoryPayload>
/**
 * Model ChatHistory
 * 
 */
export type ChatHistory = $Result.DefaultSelection<Prisma.$ChatHistoryPayload>
/**
 * Model Insight
 * 
 */
export type Insight = $Result.DefaultSelection<Prisma.$InsightPayload>
/**
 * Model Settings
 * 
 */
export type Settings = $Result.DefaultSelection<Prisma.$SettingsPayload>
/**
 * Model UploadHistory
 * 
 */
export type UploadHistory = $Result.DefaultSelection<Prisma.$UploadHistoryPayload>
/**
 * Model ActivityLog
 * 
 */
export type ActivityLog = $Result.DefaultSelection<Prisma.$ActivityLogPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dataset`: Exposes CRUD operations for the **Dataset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Datasets
    * const datasets = await prisma.dataset.findMany()
    * ```
    */
  get dataset(): Prisma.DatasetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.datasetColumn`: Exposes CRUD operations for the **DatasetColumn** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DatasetColumns
    * const datasetColumns = await prisma.datasetColumn.findMany()
    * ```
    */
  get datasetColumn(): Prisma.DatasetColumnDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.queryHistory`: Exposes CRUD operations for the **QueryHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QueryHistories
    * const queryHistories = await prisma.queryHistory.findMany()
    * ```
    */
  get queryHistory(): Prisma.QueryHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatHistory`: Exposes CRUD operations for the **ChatHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatHistories
    * const chatHistories = await prisma.chatHistory.findMany()
    * ```
    */
  get chatHistory(): Prisma.ChatHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.insight`: Exposes CRUD operations for the **Insight** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Insights
    * const insights = await prisma.insight.findMany()
    * ```
    */
  get insight(): Prisma.InsightDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.settings`: Exposes CRUD operations for the **Settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.settings.findMany()
    * ```
    */
  get settings(): Prisma.SettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.uploadHistory`: Exposes CRUD operations for the **UploadHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UploadHistories
    * const uploadHistories = await prisma.uploadHistory.findMany()
    * ```
    */
  get uploadHistory(): Prisma.UploadHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityLog`: Exposes CRUD operations for the **ActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityLogs
    * const activityLogs = await prisma.activityLog.findMany()
    * ```
    */
  get activityLog(): Prisma.ActivityLogDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
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
    User: 'User',
    Dataset: 'Dataset',
    DatasetColumn: 'DatasetColumn',
    QueryHistory: 'QueryHistory',
    ChatHistory: 'ChatHistory',
    Insight: 'Insight',
    Settings: 'Settings',
    UploadHistory: 'UploadHistory',
    ActivityLog: 'ActivityLog'
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
      modelProps: "user" | "dataset" | "datasetColumn" | "queryHistory" | "chatHistory" | "insight" | "settings" | "uploadHistory" | "activityLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Dataset: {
        payload: Prisma.$DatasetPayload<ExtArgs>
        fields: Prisma.DatasetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DatasetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DatasetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>
          }
          findFirst: {
            args: Prisma.DatasetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DatasetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>
          }
          findMany: {
            args: Prisma.DatasetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>[]
          }
          create: {
            args: Prisma.DatasetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>
          }
          createMany: {
            args: Prisma.DatasetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DatasetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>[]
          }
          delete: {
            args: Prisma.DatasetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>
          }
          update: {
            args: Prisma.DatasetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>
          }
          deleteMany: {
            args: Prisma.DatasetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DatasetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DatasetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>[]
          }
          upsert: {
            args: Prisma.DatasetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>
          }
          aggregate: {
            args: Prisma.DatasetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataset>
          }
          groupBy: {
            args: Prisma.DatasetGroupByArgs<ExtArgs>
            result: $Utils.Optional<DatasetGroupByOutputType>[]
          }
          count: {
            args: Prisma.DatasetCountArgs<ExtArgs>
            result: $Utils.Optional<DatasetCountAggregateOutputType> | number
          }
        }
      }
      DatasetColumn: {
        payload: Prisma.$DatasetColumnPayload<ExtArgs>
        fields: Prisma.DatasetColumnFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DatasetColumnFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetColumnPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DatasetColumnFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetColumnPayload>
          }
          findFirst: {
            args: Prisma.DatasetColumnFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetColumnPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DatasetColumnFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetColumnPayload>
          }
          findMany: {
            args: Prisma.DatasetColumnFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetColumnPayload>[]
          }
          create: {
            args: Prisma.DatasetColumnCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetColumnPayload>
          }
          createMany: {
            args: Prisma.DatasetColumnCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DatasetColumnCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetColumnPayload>[]
          }
          delete: {
            args: Prisma.DatasetColumnDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetColumnPayload>
          }
          update: {
            args: Prisma.DatasetColumnUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetColumnPayload>
          }
          deleteMany: {
            args: Prisma.DatasetColumnDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DatasetColumnUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DatasetColumnUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetColumnPayload>[]
          }
          upsert: {
            args: Prisma.DatasetColumnUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetColumnPayload>
          }
          aggregate: {
            args: Prisma.DatasetColumnAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDatasetColumn>
          }
          groupBy: {
            args: Prisma.DatasetColumnGroupByArgs<ExtArgs>
            result: $Utils.Optional<DatasetColumnGroupByOutputType>[]
          }
          count: {
            args: Prisma.DatasetColumnCountArgs<ExtArgs>
            result: $Utils.Optional<DatasetColumnCountAggregateOutputType> | number
          }
        }
      }
      QueryHistory: {
        payload: Prisma.$QueryHistoryPayload<ExtArgs>
        fields: Prisma.QueryHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QueryHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QueryHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryHistoryPayload>
          }
          findFirst: {
            args: Prisma.QueryHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QueryHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryHistoryPayload>
          }
          findMany: {
            args: Prisma.QueryHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryHistoryPayload>[]
          }
          create: {
            args: Prisma.QueryHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryHistoryPayload>
          }
          createMany: {
            args: Prisma.QueryHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QueryHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryHistoryPayload>[]
          }
          delete: {
            args: Prisma.QueryHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryHistoryPayload>
          }
          update: {
            args: Prisma.QueryHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryHistoryPayload>
          }
          deleteMany: {
            args: Prisma.QueryHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QueryHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QueryHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryHistoryPayload>[]
          }
          upsert: {
            args: Prisma.QueryHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryHistoryPayload>
          }
          aggregate: {
            args: Prisma.QueryHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQueryHistory>
          }
          groupBy: {
            args: Prisma.QueryHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<QueryHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.QueryHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<QueryHistoryCountAggregateOutputType> | number
          }
        }
      }
      ChatHistory: {
        payload: Prisma.$ChatHistoryPayload<ExtArgs>
        fields: Prisma.ChatHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatHistoryPayload>
          }
          findFirst: {
            args: Prisma.ChatHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatHistoryPayload>
          }
          findMany: {
            args: Prisma.ChatHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatHistoryPayload>[]
          }
          create: {
            args: Prisma.ChatHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatHistoryPayload>
          }
          createMany: {
            args: Prisma.ChatHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatHistoryPayload>[]
          }
          delete: {
            args: Prisma.ChatHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatHistoryPayload>
          }
          update: {
            args: Prisma.ChatHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ChatHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatHistoryPayload>[]
          }
          upsert: {
            args: Prisma.ChatHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatHistoryPayload>
          }
          aggregate: {
            args: Prisma.ChatHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatHistory>
          }
          groupBy: {
            args: Prisma.ChatHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ChatHistoryCountAggregateOutputType> | number
          }
        }
      }
      Insight: {
        payload: Prisma.$InsightPayload<ExtArgs>
        fields: Prisma.InsightFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InsightFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsightPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InsightFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsightPayload>
          }
          findFirst: {
            args: Prisma.InsightFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsightPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InsightFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsightPayload>
          }
          findMany: {
            args: Prisma.InsightFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsightPayload>[]
          }
          create: {
            args: Prisma.InsightCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsightPayload>
          }
          createMany: {
            args: Prisma.InsightCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InsightCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsightPayload>[]
          }
          delete: {
            args: Prisma.InsightDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsightPayload>
          }
          update: {
            args: Prisma.InsightUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsightPayload>
          }
          deleteMany: {
            args: Prisma.InsightDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InsightUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InsightUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsightPayload>[]
          }
          upsert: {
            args: Prisma.InsightUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsightPayload>
          }
          aggregate: {
            args: Prisma.InsightAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInsight>
          }
          groupBy: {
            args: Prisma.InsightGroupByArgs<ExtArgs>
            result: $Utils.Optional<InsightGroupByOutputType>[]
          }
          count: {
            args: Prisma.InsightCountArgs<ExtArgs>
            result: $Utils.Optional<InsightCountAggregateOutputType> | number
          }
        }
      }
      Settings: {
        payload: Prisma.$SettingsPayload<ExtArgs>
        fields: Prisma.SettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findFirst: {
            args: Prisma.SettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findMany: {
            args: Prisma.SettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          create: {
            args: Prisma.SettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          createMany: {
            args: Prisma.SettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          delete: {
            args: Prisma.SettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          update: {
            args: Prisma.SettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          deleteMany: {
            args: Prisma.SettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          upsert: {
            args: Prisma.SettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          aggregate: {
            args: Prisma.SettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettings>
          }
          groupBy: {
            args: Prisma.SettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingsCountArgs<ExtArgs>
            result: $Utils.Optional<SettingsCountAggregateOutputType> | number
          }
        }
      }
      UploadHistory: {
        payload: Prisma.$UploadHistoryPayload<ExtArgs>
        fields: Prisma.UploadHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UploadHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UploadHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadHistoryPayload>
          }
          findFirst: {
            args: Prisma.UploadHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UploadHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadHistoryPayload>
          }
          findMany: {
            args: Prisma.UploadHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadHistoryPayload>[]
          }
          create: {
            args: Prisma.UploadHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadHistoryPayload>
          }
          createMany: {
            args: Prisma.UploadHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UploadHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadHistoryPayload>[]
          }
          delete: {
            args: Prisma.UploadHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadHistoryPayload>
          }
          update: {
            args: Prisma.UploadHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadHistoryPayload>
          }
          deleteMany: {
            args: Prisma.UploadHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UploadHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UploadHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadHistoryPayload>[]
          }
          upsert: {
            args: Prisma.UploadHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadHistoryPayload>
          }
          aggregate: {
            args: Prisma.UploadHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUploadHistory>
          }
          groupBy: {
            args: Prisma.UploadHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<UploadHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.UploadHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<UploadHistoryCountAggregateOutputType> | number
          }
        }
      }
      ActivityLog: {
        payload: Prisma.$ActivityLogPayload<ExtArgs>
        fields: Prisma.ActivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findFirst: {
            args: Prisma.ActivityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findMany: {
            args: Prisma.ActivityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          create: {
            args: Prisma.ActivityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          createMany: {
            args: Prisma.ActivityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          delete: {
            args: Prisma.ActivityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          update: {
            args: Prisma.ActivityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          deleteMany: {
            args: Prisma.ActivityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          upsert: {
            args: Prisma.ActivityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          aggregate: {
            args: Prisma.ActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityLog>
          }
          groupBy: {
            args: Prisma.ActivityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityLogCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogCountAggregateOutputType> | number
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
    user?: UserOmit
    dataset?: DatasetOmit
    datasetColumn?: DatasetColumnOmit
    queryHistory?: QueryHistoryOmit
    chatHistory?: ChatHistoryOmit
    insight?: InsightOmit
    settings?: SettingsOmit
    uploadHistory?: UploadHistoryOmit
    activityLog?: ActivityLogOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    datasets: number
    queryHistories: number
    chatHistories: number
    activityLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    datasets?: boolean | UserCountOutputTypeCountDatasetsArgs
    queryHistories?: boolean | UserCountOutputTypeCountQueryHistoriesArgs
    chatHistories?: boolean | UserCountOutputTypeCountChatHistoriesArgs
    activityLogs?: boolean | UserCountOutputTypeCountActivityLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDatasetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatasetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQueryHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QueryHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
  }


  /**
   * Count Type DatasetCountOutputType
   */

  export type DatasetCountOutputType = {
    columns: number
    queryHistories: number
    chatHistories: number
    insights: number
  }

  export type DatasetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    columns?: boolean | DatasetCountOutputTypeCountColumnsArgs
    queryHistories?: boolean | DatasetCountOutputTypeCountQueryHistoriesArgs
    chatHistories?: boolean | DatasetCountOutputTypeCountChatHistoriesArgs
    insights?: boolean | DatasetCountOutputTypeCountInsightsArgs
  }

  // Custom InputTypes
  /**
   * DatasetCountOutputType without action
   */
  export type DatasetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetCountOutputType
     */
    select?: DatasetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DatasetCountOutputType without action
   */
  export type DatasetCountOutputTypeCountColumnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatasetColumnWhereInput
  }

  /**
   * DatasetCountOutputType without action
   */
  export type DatasetCountOutputTypeCountQueryHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QueryHistoryWhereInput
  }

  /**
   * DatasetCountOutputType without action
   */
  export type DatasetCountOutputTypeCountChatHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatHistoryWhereInput
  }

  /**
   * DatasetCountOutputType without action
   */
  export type DatasetCountOutputTypeCountInsightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InsightWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    datasets?: boolean | User$datasetsArgs<ExtArgs>
    queryHistories?: boolean | User$queryHistoriesArgs<ExtArgs>
    chatHistories?: boolean | User$chatHistoriesArgs<ExtArgs>
    settings?: boolean | User$settingsArgs<ExtArgs>
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    datasets?: boolean | User$datasetsArgs<ExtArgs>
    queryHistories?: boolean | User$queryHistoriesArgs<ExtArgs>
    chatHistories?: boolean | User$chatHistoriesArgs<ExtArgs>
    settings?: boolean | User$settingsArgs<ExtArgs>
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      datasets: Prisma.$DatasetPayload<ExtArgs>[]
      queryHistories: Prisma.$QueryHistoryPayload<ExtArgs>[]
      chatHistories: Prisma.$ChatHistoryPayload<ExtArgs>[]
      settings: Prisma.$SettingsPayload<ExtArgs> | null
      activityLogs: Prisma.$ActivityLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    datasets<T extends User$datasetsArgs<ExtArgs> = {}>(args?: Subset<T, User$datasetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    queryHistories<T extends User$queryHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$queryHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueryHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatHistories<T extends User$chatHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$chatHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    settings<T extends User$settingsArgs<ExtArgs> = {}>(args?: Subset<T, User$settingsArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    activityLogs<T extends User$activityLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$activityLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.datasets
   */
  export type User$datasetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    where?: DatasetWhereInput
    orderBy?: DatasetOrderByWithRelationInput | DatasetOrderByWithRelationInput[]
    cursor?: DatasetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DatasetScalarFieldEnum | DatasetScalarFieldEnum[]
  }

  /**
   * User.queryHistories
   */
  export type User$queryHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryHistory
     */
    select?: QueryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueryHistory
     */
    omit?: QueryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryHistoryInclude<ExtArgs> | null
    where?: QueryHistoryWhereInput
    orderBy?: QueryHistoryOrderByWithRelationInput | QueryHistoryOrderByWithRelationInput[]
    cursor?: QueryHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QueryHistoryScalarFieldEnum | QueryHistoryScalarFieldEnum[]
  }

  /**
   * User.chatHistories
   */
  export type User$chatHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryInclude<ExtArgs> | null
    where?: ChatHistoryWhereInput
    orderBy?: ChatHistoryOrderByWithRelationInput | ChatHistoryOrderByWithRelationInput[]
    cursor?: ChatHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatHistoryScalarFieldEnum | ChatHistoryScalarFieldEnum[]
  }

  /**
   * User.settings
   */
  export type User$settingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    where?: SettingsWhereInput
  }

  /**
   * User.activityLogs
   */
  export type User$activityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    cursor?: ActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Dataset
   */

  export type AggregateDataset = {
    _count: DatasetCountAggregateOutputType | null
    _avg: DatasetAvgAggregateOutputType | null
    _sum: DatasetSumAggregateOutputType | null
    _min: DatasetMinAggregateOutputType | null
    _max: DatasetMaxAggregateOutputType | null
  }

  export type DatasetAvgAggregateOutputType = {
    rowCount: number | null
    sizeBytes: number | null
  }

  export type DatasetSumAggregateOutputType = {
    rowCount: number | null
    sizeBytes: number | null
  }

  export type DatasetMinAggregateOutputType = {
    id: string | null
    userId: string | null
    originalName: string | null
    tableName: string | null
    status: string | null
    rowCount: number | null
    sizeBytes: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DatasetMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    originalName: string | null
    tableName: string | null
    status: string | null
    rowCount: number | null
    sizeBytes: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DatasetCountAggregateOutputType = {
    id: number
    userId: number
    originalName: number
    tableName: number
    status: number
    rowCount: number
    sizeBytes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DatasetAvgAggregateInputType = {
    rowCount?: true
    sizeBytes?: true
  }

  export type DatasetSumAggregateInputType = {
    rowCount?: true
    sizeBytes?: true
  }

  export type DatasetMinAggregateInputType = {
    id?: true
    userId?: true
    originalName?: true
    tableName?: true
    status?: true
    rowCount?: true
    sizeBytes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DatasetMaxAggregateInputType = {
    id?: true
    userId?: true
    originalName?: true
    tableName?: true
    status?: true
    rowCount?: true
    sizeBytes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DatasetCountAggregateInputType = {
    id?: true
    userId?: true
    originalName?: true
    tableName?: true
    status?: true
    rowCount?: true
    sizeBytes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DatasetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dataset to aggregate.
     */
    where?: DatasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Datasets to fetch.
     */
    orderBy?: DatasetOrderByWithRelationInput | DatasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DatasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Datasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Datasets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Datasets
    **/
    _count?: true | DatasetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DatasetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DatasetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DatasetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DatasetMaxAggregateInputType
  }

  export type GetDatasetAggregateType<T extends DatasetAggregateArgs> = {
        [P in keyof T & keyof AggregateDataset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataset[P]>
      : GetScalarType<T[P], AggregateDataset[P]>
  }




  export type DatasetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatasetWhereInput
    orderBy?: DatasetOrderByWithAggregationInput | DatasetOrderByWithAggregationInput[]
    by: DatasetScalarFieldEnum[] | DatasetScalarFieldEnum
    having?: DatasetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DatasetCountAggregateInputType | true
    _avg?: DatasetAvgAggregateInputType
    _sum?: DatasetSumAggregateInputType
    _min?: DatasetMinAggregateInputType
    _max?: DatasetMaxAggregateInputType
  }

  export type DatasetGroupByOutputType = {
    id: string
    userId: string
    originalName: string
    tableName: string
    status: string
    rowCount: number
    sizeBytes: number
    createdAt: Date
    updatedAt: Date
    _count: DatasetCountAggregateOutputType | null
    _avg: DatasetAvgAggregateOutputType | null
    _sum: DatasetSumAggregateOutputType | null
    _min: DatasetMinAggregateOutputType | null
    _max: DatasetMaxAggregateOutputType | null
  }

  type GetDatasetGroupByPayload<T extends DatasetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DatasetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DatasetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DatasetGroupByOutputType[P]>
            : GetScalarType<T[P], DatasetGroupByOutputType[P]>
        }
      >
    >


  export type DatasetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    originalName?: boolean
    tableName?: boolean
    status?: boolean
    rowCount?: boolean
    sizeBytes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    columns?: boolean | Dataset$columnsArgs<ExtArgs>
    queryHistories?: boolean | Dataset$queryHistoriesArgs<ExtArgs>
    chatHistories?: boolean | Dataset$chatHistoriesArgs<ExtArgs>
    insights?: boolean | Dataset$insightsArgs<ExtArgs>
    uploadHistory?: boolean | Dataset$uploadHistoryArgs<ExtArgs>
    _count?: boolean | DatasetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataset"]>

  export type DatasetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    originalName?: boolean
    tableName?: boolean
    status?: boolean
    rowCount?: boolean
    sizeBytes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataset"]>

  export type DatasetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    originalName?: boolean
    tableName?: boolean
    status?: boolean
    rowCount?: boolean
    sizeBytes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataset"]>

  export type DatasetSelectScalar = {
    id?: boolean
    userId?: boolean
    originalName?: boolean
    tableName?: boolean
    status?: boolean
    rowCount?: boolean
    sizeBytes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DatasetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "originalName" | "tableName" | "status" | "rowCount" | "sizeBytes" | "createdAt" | "updatedAt", ExtArgs["result"]["dataset"]>
  export type DatasetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    columns?: boolean | Dataset$columnsArgs<ExtArgs>
    queryHistories?: boolean | Dataset$queryHistoriesArgs<ExtArgs>
    chatHistories?: boolean | Dataset$chatHistoriesArgs<ExtArgs>
    insights?: boolean | Dataset$insightsArgs<ExtArgs>
    uploadHistory?: boolean | Dataset$uploadHistoryArgs<ExtArgs>
    _count?: boolean | DatasetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DatasetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DatasetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DatasetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dataset"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      columns: Prisma.$DatasetColumnPayload<ExtArgs>[]
      queryHistories: Prisma.$QueryHistoryPayload<ExtArgs>[]
      chatHistories: Prisma.$ChatHistoryPayload<ExtArgs>[]
      insights: Prisma.$InsightPayload<ExtArgs>[]
      uploadHistory: Prisma.$UploadHistoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      originalName: string
      tableName: string
      status: string
      rowCount: number
      sizeBytes: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dataset"]>
    composites: {}
  }

  type DatasetGetPayload<S extends boolean | null | undefined | DatasetDefaultArgs> = $Result.GetResult<Prisma.$DatasetPayload, S>

  type DatasetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DatasetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DatasetCountAggregateInputType | true
    }

  export interface DatasetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dataset'], meta: { name: 'Dataset' } }
    /**
     * Find zero or one Dataset that matches the filter.
     * @param {DatasetFindUniqueArgs} args - Arguments to find a Dataset
     * @example
     * // Get one Dataset
     * const dataset = await prisma.dataset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DatasetFindUniqueArgs>(args: SelectSubset<T, DatasetFindUniqueArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dataset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DatasetFindUniqueOrThrowArgs} args - Arguments to find a Dataset
     * @example
     * // Get one Dataset
     * const dataset = await prisma.dataset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DatasetFindUniqueOrThrowArgs>(args: SelectSubset<T, DatasetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dataset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetFindFirstArgs} args - Arguments to find a Dataset
     * @example
     * // Get one Dataset
     * const dataset = await prisma.dataset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DatasetFindFirstArgs>(args?: SelectSubset<T, DatasetFindFirstArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dataset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetFindFirstOrThrowArgs} args - Arguments to find a Dataset
     * @example
     * // Get one Dataset
     * const dataset = await prisma.dataset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DatasetFindFirstOrThrowArgs>(args?: SelectSubset<T, DatasetFindFirstOrThrowArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Datasets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Datasets
     * const datasets = await prisma.dataset.findMany()
     * 
     * // Get first 10 Datasets
     * const datasets = await prisma.dataset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const datasetWithIdOnly = await prisma.dataset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DatasetFindManyArgs>(args?: SelectSubset<T, DatasetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dataset.
     * @param {DatasetCreateArgs} args - Arguments to create a Dataset.
     * @example
     * // Create one Dataset
     * const Dataset = await prisma.dataset.create({
     *   data: {
     *     // ... data to create a Dataset
     *   }
     * })
     * 
     */
    create<T extends DatasetCreateArgs>(args: SelectSubset<T, DatasetCreateArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Datasets.
     * @param {DatasetCreateManyArgs} args - Arguments to create many Datasets.
     * @example
     * // Create many Datasets
     * const dataset = await prisma.dataset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DatasetCreateManyArgs>(args?: SelectSubset<T, DatasetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Datasets and returns the data saved in the database.
     * @param {DatasetCreateManyAndReturnArgs} args - Arguments to create many Datasets.
     * @example
     * // Create many Datasets
     * const dataset = await prisma.dataset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Datasets and only return the `id`
     * const datasetWithIdOnly = await prisma.dataset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DatasetCreateManyAndReturnArgs>(args?: SelectSubset<T, DatasetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dataset.
     * @param {DatasetDeleteArgs} args - Arguments to delete one Dataset.
     * @example
     * // Delete one Dataset
     * const Dataset = await prisma.dataset.delete({
     *   where: {
     *     // ... filter to delete one Dataset
     *   }
     * })
     * 
     */
    delete<T extends DatasetDeleteArgs>(args: SelectSubset<T, DatasetDeleteArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dataset.
     * @param {DatasetUpdateArgs} args - Arguments to update one Dataset.
     * @example
     * // Update one Dataset
     * const dataset = await prisma.dataset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DatasetUpdateArgs>(args: SelectSubset<T, DatasetUpdateArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Datasets.
     * @param {DatasetDeleteManyArgs} args - Arguments to filter Datasets to delete.
     * @example
     * // Delete a few Datasets
     * const { count } = await prisma.dataset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DatasetDeleteManyArgs>(args?: SelectSubset<T, DatasetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Datasets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Datasets
     * const dataset = await prisma.dataset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DatasetUpdateManyArgs>(args: SelectSubset<T, DatasetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Datasets and returns the data updated in the database.
     * @param {DatasetUpdateManyAndReturnArgs} args - Arguments to update many Datasets.
     * @example
     * // Update many Datasets
     * const dataset = await prisma.dataset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Datasets and only return the `id`
     * const datasetWithIdOnly = await prisma.dataset.updateManyAndReturn({
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
    updateManyAndReturn<T extends DatasetUpdateManyAndReturnArgs>(args: SelectSubset<T, DatasetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dataset.
     * @param {DatasetUpsertArgs} args - Arguments to update or create a Dataset.
     * @example
     * // Update or create a Dataset
     * const dataset = await prisma.dataset.upsert({
     *   create: {
     *     // ... data to create a Dataset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dataset we want to update
     *   }
     * })
     */
    upsert<T extends DatasetUpsertArgs>(args: SelectSubset<T, DatasetUpsertArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Datasets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetCountArgs} args - Arguments to filter Datasets to count.
     * @example
     * // Count the number of Datasets
     * const count = await prisma.dataset.count({
     *   where: {
     *     // ... the filter for the Datasets we want to count
     *   }
     * })
    **/
    count<T extends DatasetCountArgs>(
      args?: Subset<T, DatasetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DatasetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dataset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DatasetAggregateArgs>(args: Subset<T, DatasetAggregateArgs>): Prisma.PrismaPromise<GetDatasetAggregateType<T>>

    /**
     * Group by Dataset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetGroupByArgs} args - Group by arguments.
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
      T extends DatasetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DatasetGroupByArgs['orderBy'] }
        : { orderBy?: DatasetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DatasetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatasetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dataset model
   */
  readonly fields: DatasetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dataset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DatasetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    columns<T extends Dataset$columnsArgs<ExtArgs> = {}>(args?: Subset<T, Dataset$columnsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetColumnPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    queryHistories<T extends Dataset$queryHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, Dataset$queryHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueryHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatHistories<T extends Dataset$chatHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, Dataset$chatHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    insights<T extends Dataset$insightsArgs<ExtArgs> = {}>(args?: Subset<T, Dataset$insightsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    uploadHistory<T extends Dataset$uploadHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Dataset$uploadHistoryArgs<ExtArgs>>): Prisma__UploadHistoryClient<$Result.GetResult<Prisma.$UploadHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Dataset model
   */
  interface DatasetFieldRefs {
    readonly id: FieldRef<"Dataset", 'String'>
    readonly userId: FieldRef<"Dataset", 'String'>
    readonly originalName: FieldRef<"Dataset", 'String'>
    readonly tableName: FieldRef<"Dataset", 'String'>
    readonly status: FieldRef<"Dataset", 'String'>
    readonly rowCount: FieldRef<"Dataset", 'Int'>
    readonly sizeBytes: FieldRef<"Dataset", 'Int'>
    readonly createdAt: FieldRef<"Dataset", 'DateTime'>
    readonly updatedAt: FieldRef<"Dataset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dataset findUnique
   */
  export type DatasetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * Filter, which Dataset to fetch.
     */
    where: DatasetWhereUniqueInput
  }

  /**
   * Dataset findUniqueOrThrow
   */
  export type DatasetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * Filter, which Dataset to fetch.
     */
    where: DatasetWhereUniqueInput
  }

  /**
   * Dataset findFirst
   */
  export type DatasetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * Filter, which Dataset to fetch.
     */
    where?: DatasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Datasets to fetch.
     */
    orderBy?: DatasetOrderByWithRelationInput | DatasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Datasets.
     */
    cursor?: DatasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Datasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Datasets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Datasets.
     */
    distinct?: DatasetScalarFieldEnum | DatasetScalarFieldEnum[]
  }

  /**
   * Dataset findFirstOrThrow
   */
  export type DatasetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * Filter, which Dataset to fetch.
     */
    where?: DatasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Datasets to fetch.
     */
    orderBy?: DatasetOrderByWithRelationInput | DatasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Datasets.
     */
    cursor?: DatasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Datasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Datasets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Datasets.
     */
    distinct?: DatasetScalarFieldEnum | DatasetScalarFieldEnum[]
  }

  /**
   * Dataset findMany
   */
  export type DatasetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * Filter, which Datasets to fetch.
     */
    where?: DatasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Datasets to fetch.
     */
    orderBy?: DatasetOrderByWithRelationInput | DatasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Datasets.
     */
    cursor?: DatasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Datasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Datasets.
     */
    skip?: number
    distinct?: DatasetScalarFieldEnum | DatasetScalarFieldEnum[]
  }

  /**
   * Dataset create
   */
  export type DatasetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * The data needed to create a Dataset.
     */
    data: XOR<DatasetCreateInput, DatasetUncheckedCreateInput>
  }

  /**
   * Dataset createMany
   */
  export type DatasetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Datasets.
     */
    data: DatasetCreateManyInput | DatasetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dataset createManyAndReturn
   */
  export type DatasetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * The data used to create many Datasets.
     */
    data: DatasetCreateManyInput | DatasetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dataset update
   */
  export type DatasetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * The data needed to update a Dataset.
     */
    data: XOR<DatasetUpdateInput, DatasetUncheckedUpdateInput>
    /**
     * Choose, which Dataset to update.
     */
    where: DatasetWhereUniqueInput
  }

  /**
   * Dataset updateMany
   */
  export type DatasetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Datasets.
     */
    data: XOR<DatasetUpdateManyMutationInput, DatasetUncheckedUpdateManyInput>
    /**
     * Filter which Datasets to update
     */
    where?: DatasetWhereInput
    /**
     * Limit how many Datasets to update.
     */
    limit?: number
  }

  /**
   * Dataset updateManyAndReturn
   */
  export type DatasetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * The data used to update Datasets.
     */
    data: XOR<DatasetUpdateManyMutationInput, DatasetUncheckedUpdateManyInput>
    /**
     * Filter which Datasets to update
     */
    where?: DatasetWhereInput
    /**
     * Limit how many Datasets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dataset upsert
   */
  export type DatasetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * The filter to search for the Dataset to update in case it exists.
     */
    where: DatasetWhereUniqueInput
    /**
     * In case the Dataset found by the `where` argument doesn't exist, create a new Dataset with this data.
     */
    create: XOR<DatasetCreateInput, DatasetUncheckedCreateInput>
    /**
     * In case the Dataset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DatasetUpdateInput, DatasetUncheckedUpdateInput>
  }

  /**
   * Dataset delete
   */
  export type DatasetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * Filter which Dataset to delete.
     */
    where: DatasetWhereUniqueInput
  }

  /**
   * Dataset deleteMany
   */
  export type DatasetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Datasets to delete
     */
    where?: DatasetWhereInput
    /**
     * Limit how many Datasets to delete.
     */
    limit?: number
  }

  /**
   * Dataset.columns
   */
  export type Dataset$columnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetColumn
     */
    select?: DatasetColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetColumn
     */
    omit?: DatasetColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetColumnInclude<ExtArgs> | null
    where?: DatasetColumnWhereInput
    orderBy?: DatasetColumnOrderByWithRelationInput | DatasetColumnOrderByWithRelationInput[]
    cursor?: DatasetColumnWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DatasetColumnScalarFieldEnum | DatasetColumnScalarFieldEnum[]
  }

  /**
   * Dataset.queryHistories
   */
  export type Dataset$queryHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryHistory
     */
    select?: QueryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueryHistory
     */
    omit?: QueryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryHistoryInclude<ExtArgs> | null
    where?: QueryHistoryWhereInput
    orderBy?: QueryHistoryOrderByWithRelationInput | QueryHistoryOrderByWithRelationInput[]
    cursor?: QueryHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QueryHistoryScalarFieldEnum | QueryHistoryScalarFieldEnum[]
  }

  /**
   * Dataset.chatHistories
   */
  export type Dataset$chatHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryInclude<ExtArgs> | null
    where?: ChatHistoryWhereInput
    orderBy?: ChatHistoryOrderByWithRelationInput | ChatHistoryOrderByWithRelationInput[]
    cursor?: ChatHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatHistoryScalarFieldEnum | ChatHistoryScalarFieldEnum[]
  }

  /**
   * Dataset.insights
   */
  export type Dataset$insightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightInclude<ExtArgs> | null
    where?: InsightWhereInput
    orderBy?: InsightOrderByWithRelationInput | InsightOrderByWithRelationInput[]
    cursor?: InsightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InsightScalarFieldEnum | InsightScalarFieldEnum[]
  }

  /**
   * Dataset.uploadHistory
   */
  export type Dataset$uploadHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadHistory
     */
    select?: UploadHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadHistory
     */
    omit?: UploadHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadHistoryInclude<ExtArgs> | null
    where?: UploadHistoryWhereInput
  }

  /**
   * Dataset without action
   */
  export type DatasetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
  }


  /**
   * Model DatasetColumn
   */

  export type AggregateDatasetColumn = {
    _count: DatasetColumnCountAggregateOutputType | null
    _avg: DatasetColumnAvgAggregateOutputType | null
    _sum: DatasetColumnSumAggregateOutputType | null
    _min: DatasetColumnMinAggregateOutputType | null
    _max: DatasetColumnMaxAggregateOutputType | null
  }

  export type DatasetColumnAvgAggregateOutputType = {
    average: number | null
    median: number | null
    nullCount: number | null
    uniqueCount: number | null
  }

  export type DatasetColumnSumAggregateOutputType = {
    average: number | null
    median: number | null
    nullCount: number | null
    uniqueCount: number | null
  }

  export type DatasetColumnMinAggregateOutputType = {
    id: string | null
    datasetId: string | null
    name: string | null
    type: string | null
    isNullable: boolean | null
    isUnique: boolean | null
    isPrimaryKey: boolean | null
    min: string | null
    max: string | null
    average: number | null
    median: number | null
    nullCount: number | null
    uniqueCount: number | null
  }

  export type DatasetColumnMaxAggregateOutputType = {
    id: string | null
    datasetId: string | null
    name: string | null
    type: string | null
    isNullable: boolean | null
    isUnique: boolean | null
    isPrimaryKey: boolean | null
    min: string | null
    max: string | null
    average: number | null
    median: number | null
    nullCount: number | null
    uniqueCount: number | null
  }

  export type DatasetColumnCountAggregateOutputType = {
    id: number
    datasetId: number
    name: number
    type: number
    isNullable: number
    isUnique: number
    isPrimaryKey: number
    min: number
    max: number
    average: number
    median: number
    nullCount: number
    uniqueCount: number
    _all: number
  }


  export type DatasetColumnAvgAggregateInputType = {
    average?: true
    median?: true
    nullCount?: true
    uniqueCount?: true
  }

  export type DatasetColumnSumAggregateInputType = {
    average?: true
    median?: true
    nullCount?: true
    uniqueCount?: true
  }

  export type DatasetColumnMinAggregateInputType = {
    id?: true
    datasetId?: true
    name?: true
    type?: true
    isNullable?: true
    isUnique?: true
    isPrimaryKey?: true
    min?: true
    max?: true
    average?: true
    median?: true
    nullCount?: true
    uniqueCount?: true
  }

  export type DatasetColumnMaxAggregateInputType = {
    id?: true
    datasetId?: true
    name?: true
    type?: true
    isNullable?: true
    isUnique?: true
    isPrimaryKey?: true
    min?: true
    max?: true
    average?: true
    median?: true
    nullCount?: true
    uniqueCount?: true
  }

  export type DatasetColumnCountAggregateInputType = {
    id?: true
    datasetId?: true
    name?: true
    type?: true
    isNullable?: true
    isUnique?: true
    isPrimaryKey?: true
    min?: true
    max?: true
    average?: true
    median?: true
    nullCount?: true
    uniqueCount?: true
    _all?: true
  }

  export type DatasetColumnAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DatasetColumn to aggregate.
     */
    where?: DatasetColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatasetColumns to fetch.
     */
    orderBy?: DatasetColumnOrderByWithRelationInput | DatasetColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DatasetColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatasetColumns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatasetColumns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DatasetColumns
    **/
    _count?: true | DatasetColumnCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DatasetColumnAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DatasetColumnSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DatasetColumnMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DatasetColumnMaxAggregateInputType
  }

  export type GetDatasetColumnAggregateType<T extends DatasetColumnAggregateArgs> = {
        [P in keyof T & keyof AggregateDatasetColumn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDatasetColumn[P]>
      : GetScalarType<T[P], AggregateDatasetColumn[P]>
  }




  export type DatasetColumnGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatasetColumnWhereInput
    orderBy?: DatasetColumnOrderByWithAggregationInput | DatasetColumnOrderByWithAggregationInput[]
    by: DatasetColumnScalarFieldEnum[] | DatasetColumnScalarFieldEnum
    having?: DatasetColumnScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DatasetColumnCountAggregateInputType | true
    _avg?: DatasetColumnAvgAggregateInputType
    _sum?: DatasetColumnSumAggregateInputType
    _min?: DatasetColumnMinAggregateInputType
    _max?: DatasetColumnMaxAggregateInputType
  }

  export type DatasetColumnGroupByOutputType = {
    id: string
    datasetId: string
    name: string
    type: string
    isNullable: boolean
    isUnique: boolean
    isPrimaryKey: boolean
    min: string | null
    max: string | null
    average: number | null
    median: number | null
    nullCount: number
    uniqueCount: number
    _count: DatasetColumnCountAggregateOutputType | null
    _avg: DatasetColumnAvgAggregateOutputType | null
    _sum: DatasetColumnSumAggregateOutputType | null
    _min: DatasetColumnMinAggregateOutputType | null
    _max: DatasetColumnMaxAggregateOutputType | null
  }

  type GetDatasetColumnGroupByPayload<T extends DatasetColumnGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DatasetColumnGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DatasetColumnGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DatasetColumnGroupByOutputType[P]>
            : GetScalarType<T[P], DatasetColumnGroupByOutputType[P]>
        }
      >
    >


  export type DatasetColumnSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    datasetId?: boolean
    name?: boolean
    type?: boolean
    isNullable?: boolean
    isUnique?: boolean
    isPrimaryKey?: boolean
    min?: boolean
    max?: boolean
    average?: boolean
    median?: boolean
    nullCount?: boolean
    uniqueCount?: boolean
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["datasetColumn"]>

  export type DatasetColumnSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    datasetId?: boolean
    name?: boolean
    type?: boolean
    isNullable?: boolean
    isUnique?: boolean
    isPrimaryKey?: boolean
    min?: boolean
    max?: boolean
    average?: boolean
    median?: boolean
    nullCount?: boolean
    uniqueCount?: boolean
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["datasetColumn"]>

  export type DatasetColumnSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    datasetId?: boolean
    name?: boolean
    type?: boolean
    isNullable?: boolean
    isUnique?: boolean
    isPrimaryKey?: boolean
    min?: boolean
    max?: boolean
    average?: boolean
    median?: boolean
    nullCount?: boolean
    uniqueCount?: boolean
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["datasetColumn"]>

  export type DatasetColumnSelectScalar = {
    id?: boolean
    datasetId?: boolean
    name?: boolean
    type?: boolean
    isNullable?: boolean
    isUnique?: boolean
    isPrimaryKey?: boolean
    min?: boolean
    max?: boolean
    average?: boolean
    median?: boolean
    nullCount?: boolean
    uniqueCount?: boolean
  }

  export type DatasetColumnOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "datasetId" | "name" | "type" | "isNullable" | "isUnique" | "isPrimaryKey" | "min" | "max" | "average" | "median" | "nullCount" | "uniqueCount", ExtArgs["result"]["datasetColumn"]>
  export type DatasetColumnInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
  }
  export type DatasetColumnIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
  }
  export type DatasetColumnIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
  }

  export type $DatasetColumnPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DatasetColumn"
    objects: {
      dataset: Prisma.$DatasetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      datasetId: string
      name: string
      type: string
      isNullable: boolean
      isUnique: boolean
      isPrimaryKey: boolean
      min: string | null
      max: string | null
      average: number | null
      median: number | null
      nullCount: number
      uniqueCount: number
    }, ExtArgs["result"]["datasetColumn"]>
    composites: {}
  }

  type DatasetColumnGetPayload<S extends boolean | null | undefined | DatasetColumnDefaultArgs> = $Result.GetResult<Prisma.$DatasetColumnPayload, S>

  type DatasetColumnCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DatasetColumnFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DatasetColumnCountAggregateInputType | true
    }

  export interface DatasetColumnDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DatasetColumn'], meta: { name: 'DatasetColumn' } }
    /**
     * Find zero or one DatasetColumn that matches the filter.
     * @param {DatasetColumnFindUniqueArgs} args - Arguments to find a DatasetColumn
     * @example
     * // Get one DatasetColumn
     * const datasetColumn = await prisma.datasetColumn.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DatasetColumnFindUniqueArgs>(args: SelectSubset<T, DatasetColumnFindUniqueArgs<ExtArgs>>): Prisma__DatasetColumnClient<$Result.GetResult<Prisma.$DatasetColumnPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DatasetColumn that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DatasetColumnFindUniqueOrThrowArgs} args - Arguments to find a DatasetColumn
     * @example
     * // Get one DatasetColumn
     * const datasetColumn = await prisma.datasetColumn.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DatasetColumnFindUniqueOrThrowArgs>(args: SelectSubset<T, DatasetColumnFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DatasetColumnClient<$Result.GetResult<Prisma.$DatasetColumnPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DatasetColumn that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetColumnFindFirstArgs} args - Arguments to find a DatasetColumn
     * @example
     * // Get one DatasetColumn
     * const datasetColumn = await prisma.datasetColumn.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DatasetColumnFindFirstArgs>(args?: SelectSubset<T, DatasetColumnFindFirstArgs<ExtArgs>>): Prisma__DatasetColumnClient<$Result.GetResult<Prisma.$DatasetColumnPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DatasetColumn that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetColumnFindFirstOrThrowArgs} args - Arguments to find a DatasetColumn
     * @example
     * // Get one DatasetColumn
     * const datasetColumn = await prisma.datasetColumn.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DatasetColumnFindFirstOrThrowArgs>(args?: SelectSubset<T, DatasetColumnFindFirstOrThrowArgs<ExtArgs>>): Prisma__DatasetColumnClient<$Result.GetResult<Prisma.$DatasetColumnPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DatasetColumns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetColumnFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DatasetColumns
     * const datasetColumns = await prisma.datasetColumn.findMany()
     * 
     * // Get first 10 DatasetColumns
     * const datasetColumns = await prisma.datasetColumn.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const datasetColumnWithIdOnly = await prisma.datasetColumn.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DatasetColumnFindManyArgs>(args?: SelectSubset<T, DatasetColumnFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetColumnPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DatasetColumn.
     * @param {DatasetColumnCreateArgs} args - Arguments to create a DatasetColumn.
     * @example
     * // Create one DatasetColumn
     * const DatasetColumn = await prisma.datasetColumn.create({
     *   data: {
     *     // ... data to create a DatasetColumn
     *   }
     * })
     * 
     */
    create<T extends DatasetColumnCreateArgs>(args: SelectSubset<T, DatasetColumnCreateArgs<ExtArgs>>): Prisma__DatasetColumnClient<$Result.GetResult<Prisma.$DatasetColumnPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DatasetColumns.
     * @param {DatasetColumnCreateManyArgs} args - Arguments to create many DatasetColumns.
     * @example
     * // Create many DatasetColumns
     * const datasetColumn = await prisma.datasetColumn.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DatasetColumnCreateManyArgs>(args?: SelectSubset<T, DatasetColumnCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DatasetColumns and returns the data saved in the database.
     * @param {DatasetColumnCreateManyAndReturnArgs} args - Arguments to create many DatasetColumns.
     * @example
     * // Create many DatasetColumns
     * const datasetColumn = await prisma.datasetColumn.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DatasetColumns and only return the `id`
     * const datasetColumnWithIdOnly = await prisma.datasetColumn.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DatasetColumnCreateManyAndReturnArgs>(args?: SelectSubset<T, DatasetColumnCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetColumnPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DatasetColumn.
     * @param {DatasetColumnDeleteArgs} args - Arguments to delete one DatasetColumn.
     * @example
     * // Delete one DatasetColumn
     * const DatasetColumn = await prisma.datasetColumn.delete({
     *   where: {
     *     // ... filter to delete one DatasetColumn
     *   }
     * })
     * 
     */
    delete<T extends DatasetColumnDeleteArgs>(args: SelectSubset<T, DatasetColumnDeleteArgs<ExtArgs>>): Prisma__DatasetColumnClient<$Result.GetResult<Prisma.$DatasetColumnPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DatasetColumn.
     * @param {DatasetColumnUpdateArgs} args - Arguments to update one DatasetColumn.
     * @example
     * // Update one DatasetColumn
     * const datasetColumn = await prisma.datasetColumn.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DatasetColumnUpdateArgs>(args: SelectSubset<T, DatasetColumnUpdateArgs<ExtArgs>>): Prisma__DatasetColumnClient<$Result.GetResult<Prisma.$DatasetColumnPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DatasetColumns.
     * @param {DatasetColumnDeleteManyArgs} args - Arguments to filter DatasetColumns to delete.
     * @example
     * // Delete a few DatasetColumns
     * const { count } = await prisma.datasetColumn.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DatasetColumnDeleteManyArgs>(args?: SelectSubset<T, DatasetColumnDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DatasetColumns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetColumnUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DatasetColumns
     * const datasetColumn = await prisma.datasetColumn.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DatasetColumnUpdateManyArgs>(args: SelectSubset<T, DatasetColumnUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DatasetColumns and returns the data updated in the database.
     * @param {DatasetColumnUpdateManyAndReturnArgs} args - Arguments to update many DatasetColumns.
     * @example
     * // Update many DatasetColumns
     * const datasetColumn = await prisma.datasetColumn.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DatasetColumns and only return the `id`
     * const datasetColumnWithIdOnly = await prisma.datasetColumn.updateManyAndReturn({
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
    updateManyAndReturn<T extends DatasetColumnUpdateManyAndReturnArgs>(args: SelectSubset<T, DatasetColumnUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetColumnPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DatasetColumn.
     * @param {DatasetColumnUpsertArgs} args - Arguments to update or create a DatasetColumn.
     * @example
     * // Update or create a DatasetColumn
     * const datasetColumn = await prisma.datasetColumn.upsert({
     *   create: {
     *     // ... data to create a DatasetColumn
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DatasetColumn we want to update
     *   }
     * })
     */
    upsert<T extends DatasetColumnUpsertArgs>(args: SelectSubset<T, DatasetColumnUpsertArgs<ExtArgs>>): Prisma__DatasetColumnClient<$Result.GetResult<Prisma.$DatasetColumnPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DatasetColumns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetColumnCountArgs} args - Arguments to filter DatasetColumns to count.
     * @example
     * // Count the number of DatasetColumns
     * const count = await prisma.datasetColumn.count({
     *   where: {
     *     // ... the filter for the DatasetColumns we want to count
     *   }
     * })
    **/
    count<T extends DatasetColumnCountArgs>(
      args?: Subset<T, DatasetColumnCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DatasetColumnCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DatasetColumn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetColumnAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DatasetColumnAggregateArgs>(args: Subset<T, DatasetColumnAggregateArgs>): Prisma.PrismaPromise<GetDatasetColumnAggregateType<T>>

    /**
     * Group by DatasetColumn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetColumnGroupByArgs} args - Group by arguments.
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
      T extends DatasetColumnGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DatasetColumnGroupByArgs['orderBy'] }
        : { orderBy?: DatasetColumnGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DatasetColumnGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatasetColumnGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DatasetColumn model
   */
  readonly fields: DatasetColumnFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DatasetColumn.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DatasetColumnClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dataset<T extends DatasetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DatasetDefaultArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DatasetColumn model
   */
  interface DatasetColumnFieldRefs {
    readonly id: FieldRef<"DatasetColumn", 'String'>
    readonly datasetId: FieldRef<"DatasetColumn", 'String'>
    readonly name: FieldRef<"DatasetColumn", 'String'>
    readonly type: FieldRef<"DatasetColumn", 'String'>
    readonly isNullable: FieldRef<"DatasetColumn", 'Boolean'>
    readonly isUnique: FieldRef<"DatasetColumn", 'Boolean'>
    readonly isPrimaryKey: FieldRef<"DatasetColumn", 'Boolean'>
    readonly min: FieldRef<"DatasetColumn", 'String'>
    readonly max: FieldRef<"DatasetColumn", 'String'>
    readonly average: FieldRef<"DatasetColumn", 'Float'>
    readonly median: FieldRef<"DatasetColumn", 'Float'>
    readonly nullCount: FieldRef<"DatasetColumn", 'Int'>
    readonly uniqueCount: FieldRef<"DatasetColumn", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DatasetColumn findUnique
   */
  export type DatasetColumnFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetColumn
     */
    select?: DatasetColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetColumn
     */
    omit?: DatasetColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetColumnInclude<ExtArgs> | null
    /**
     * Filter, which DatasetColumn to fetch.
     */
    where: DatasetColumnWhereUniqueInput
  }

  /**
   * DatasetColumn findUniqueOrThrow
   */
  export type DatasetColumnFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetColumn
     */
    select?: DatasetColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetColumn
     */
    omit?: DatasetColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetColumnInclude<ExtArgs> | null
    /**
     * Filter, which DatasetColumn to fetch.
     */
    where: DatasetColumnWhereUniqueInput
  }

  /**
   * DatasetColumn findFirst
   */
  export type DatasetColumnFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetColumn
     */
    select?: DatasetColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetColumn
     */
    omit?: DatasetColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetColumnInclude<ExtArgs> | null
    /**
     * Filter, which DatasetColumn to fetch.
     */
    where?: DatasetColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatasetColumns to fetch.
     */
    orderBy?: DatasetColumnOrderByWithRelationInput | DatasetColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DatasetColumns.
     */
    cursor?: DatasetColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatasetColumns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatasetColumns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DatasetColumns.
     */
    distinct?: DatasetColumnScalarFieldEnum | DatasetColumnScalarFieldEnum[]
  }

  /**
   * DatasetColumn findFirstOrThrow
   */
  export type DatasetColumnFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetColumn
     */
    select?: DatasetColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetColumn
     */
    omit?: DatasetColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetColumnInclude<ExtArgs> | null
    /**
     * Filter, which DatasetColumn to fetch.
     */
    where?: DatasetColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatasetColumns to fetch.
     */
    orderBy?: DatasetColumnOrderByWithRelationInput | DatasetColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DatasetColumns.
     */
    cursor?: DatasetColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatasetColumns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatasetColumns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DatasetColumns.
     */
    distinct?: DatasetColumnScalarFieldEnum | DatasetColumnScalarFieldEnum[]
  }

  /**
   * DatasetColumn findMany
   */
  export type DatasetColumnFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetColumn
     */
    select?: DatasetColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetColumn
     */
    omit?: DatasetColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetColumnInclude<ExtArgs> | null
    /**
     * Filter, which DatasetColumns to fetch.
     */
    where?: DatasetColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatasetColumns to fetch.
     */
    orderBy?: DatasetColumnOrderByWithRelationInput | DatasetColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DatasetColumns.
     */
    cursor?: DatasetColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatasetColumns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatasetColumns.
     */
    skip?: number
    distinct?: DatasetColumnScalarFieldEnum | DatasetColumnScalarFieldEnum[]
  }

  /**
   * DatasetColumn create
   */
  export type DatasetColumnCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetColumn
     */
    select?: DatasetColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetColumn
     */
    omit?: DatasetColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetColumnInclude<ExtArgs> | null
    /**
     * The data needed to create a DatasetColumn.
     */
    data: XOR<DatasetColumnCreateInput, DatasetColumnUncheckedCreateInput>
  }

  /**
   * DatasetColumn createMany
   */
  export type DatasetColumnCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DatasetColumns.
     */
    data: DatasetColumnCreateManyInput | DatasetColumnCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DatasetColumn createManyAndReturn
   */
  export type DatasetColumnCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetColumn
     */
    select?: DatasetColumnSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetColumn
     */
    omit?: DatasetColumnOmit<ExtArgs> | null
    /**
     * The data used to create many DatasetColumns.
     */
    data: DatasetColumnCreateManyInput | DatasetColumnCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetColumnIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DatasetColumn update
   */
  export type DatasetColumnUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetColumn
     */
    select?: DatasetColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetColumn
     */
    omit?: DatasetColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetColumnInclude<ExtArgs> | null
    /**
     * The data needed to update a DatasetColumn.
     */
    data: XOR<DatasetColumnUpdateInput, DatasetColumnUncheckedUpdateInput>
    /**
     * Choose, which DatasetColumn to update.
     */
    where: DatasetColumnWhereUniqueInput
  }

  /**
   * DatasetColumn updateMany
   */
  export type DatasetColumnUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DatasetColumns.
     */
    data: XOR<DatasetColumnUpdateManyMutationInput, DatasetColumnUncheckedUpdateManyInput>
    /**
     * Filter which DatasetColumns to update
     */
    where?: DatasetColumnWhereInput
    /**
     * Limit how many DatasetColumns to update.
     */
    limit?: number
  }

  /**
   * DatasetColumn updateManyAndReturn
   */
  export type DatasetColumnUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetColumn
     */
    select?: DatasetColumnSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetColumn
     */
    omit?: DatasetColumnOmit<ExtArgs> | null
    /**
     * The data used to update DatasetColumns.
     */
    data: XOR<DatasetColumnUpdateManyMutationInput, DatasetColumnUncheckedUpdateManyInput>
    /**
     * Filter which DatasetColumns to update
     */
    where?: DatasetColumnWhereInput
    /**
     * Limit how many DatasetColumns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetColumnIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DatasetColumn upsert
   */
  export type DatasetColumnUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetColumn
     */
    select?: DatasetColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetColumn
     */
    omit?: DatasetColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetColumnInclude<ExtArgs> | null
    /**
     * The filter to search for the DatasetColumn to update in case it exists.
     */
    where: DatasetColumnWhereUniqueInput
    /**
     * In case the DatasetColumn found by the `where` argument doesn't exist, create a new DatasetColumn with this data.
     */
    create: XOR<DatasetColumnCreateInput, DatasetColumnUncheckedCreateInput>
    /**
     * In case the DatasetColumn was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DatasetColumnUpdateInput, DatasetColumnUncheckedUpdateInput>
  }

  /**
   * DatasetColumn delete
   */
  export type DatasetColumnDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetColumn
     */
    select?: DatasetColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetColumn
     */
    omit?: DatasetColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetColumnInclude<ExtArgs> | null
    /**
     * Filter which DatasetColumn to delete.
     */
    where: DatasetColumnWhereUniqueInput
  }

  /**
   * DatasetColumn deleteMany
   */
  export type DatasetColumnDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DatasetColumns to delete
     */
    where?: DatasetColumnWhereInput
    /**
     * Limit how many DatasetColumns to delete.
     */
    limit?: number
  }

  /**
   * DatasetColumn without action
   */
  export type DatasetColumnDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetColumn
     */
    select?: DatasetColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetColumn
     */
    omit?: DatasetColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetColumnInclude<ExtArgs> | null
  }


  /**
   * Model QueryHistory
   */

  export type AggregateQueryHistory = {
    _count: QueryHistoryCountAggregateOutputType | null
    _avg: QueryHistoryAvgAggregateOutputType | null
    _sum: QueryHistorySumAggregateOutputType | null
    _min: QueryHistoryMinAggregateOutputType | null
    _max: QueryHistoryMaxAggregateOutputType | null
  }

  export type QueryHistoryAvgAggregateOutputType = {
    executionTime: number | null
    rowsReturned: number | null
  }

  export type QueryHistorySumAggregateOutputType = {
    executionTime: number | null
    rowsReturned: number | null
  }

  export type QueryHistoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    datasetId: string | null
    prompt: string | null
    sqlQuery: string | null
    executionTime: number | null
    rowsReturned: number | null
    isFavorite: boolean | null
    createdAt: Date | null
  }

  export type QueryHistoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    datasetId: string | null
    prompt: string | null
    sqlQuery: string | null
    executionTime: number | null
    rowsReturned: number | null
    isFavorite: boolean | null
    createdAt: Date | null
  }

  export type QueryHistoryCountAggregateOutputType = {
    id: number
    userId: number
    datasetId: number
    prompt: number
    sqlQuery: number
    executionTime: number
    rowsReturned: number
    isFavorite: number
    createdAt: number
    _all: number
  }


  export type QueryHistoryAvgAggregateInputType = {
    executionTime?: true
    rowsReturned?: true
  }

  export type QueryHistorySumAggregateInputType = {
    executionTime?: true
    rowsReturned?: true
  }

  export type QueryHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    datasetId?: true
    prompt?: true
    sqlQuery?: true
    executionTime?: true
    rowsReturned?: true
    isFavorite?: true
    createdAt?: true
  }

  export type QueryHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    datasetId?: true
    prompt?: true
    sqlQuery?: true
    executionTime?: true
    rowsReturned?: true
    isFavorite?: true
    createdAt?: true
  }

  export type QueryHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    datasetId?: true
    prompt?: true
    sqlQuery?: true
    executionTime?: true
    rowsReturned?: true
    isFavorite?: true
    createdAt?: true
    _all?: true
  }

  export type QueryHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QueryHistory to aggregate.
     */
    where?: QueryHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QueryHistories to fetch.
     */
    orderBy?: QueryHistoryOrderByWithRelationInput | QueryHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QueryHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QueryHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QueryHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QueryHistories
    **/
    _count?: true | QueryHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QueryHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QueryHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QueryHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QueryHistoryMaxAggregateInputType
  }

  export type GetQueryHistoryAggregateType<T extends QueryHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateQueryHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQueryHistory[P]>
      : GetScalarType<T[P], AggregateQueryHistory[P]>
  }




  export type QueryHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QueryHistoryWhereInput
    orderBy?: QueryHistoryOrderByWithAggregationInput | QueryHistoryOrderByWithAggregationInput[]
    by: QueryHistoryScalarFieldEnum[] | QueryHistoryScalarFieldEnum
    having?: QueryHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QueryHistoryCountAggregateInputType | true
    _avg?: QueryHistoryAvgAggregateInputType
    _sum?: QueryHistorySumAggregateInputType
    _min?: QueryHistoryMinAggregateInputType
    _max?: QueryHistoryMaxAggregateInputType
  }

  export type QueryHistoryGroupByOutputType = {
    id: string
    userId: string
    datasetId: string
    prompt: string | null
    sqlQuery: string
    executionTime: number
    rowsReturned: number
    isFavorite: boolean
    createdAt: Date
    _count: QueryHistoryCountAggregateOutputType | null
    _avg: QueryHistoryAvgAggregateOutputType | null
    _sum: QueryHistorySumAggregateOutputType | null
    _min: QueryHistoryMinAggregateOutputType | null
    _max: QueryHistoryMaxAggregateOutputType | null
  }

  type GetQueryHistoryGroupByPayload<T extends QueryHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QueryHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QueryHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QueryHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], QueryHistoryGroupByOutputType[P]>
        }
      >
    >


  export type QueryHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    datasetId?: boolean
    prompt?: boolean
    sqlQuery?: boolean
    executionTime?: boolean
    rowsReturned?: boolean
    isFavorite?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["queryHistory"]>

  export type QueryHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    datasetId?: boolean
    prompt?: boolean
    sqlQuery?: boolean
    executionTime?: boolean
    rowsReturned?: boolean
    isFavorite?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["queryHistory"]>

  export type QueryHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    datasetId?: boolean
    prompt?: boolean
    sqlQuery?: boolean
    executionTime?: boolean
    rowsReturned?: boolean
    isFavorite?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["queryHistory"]>

  export type QueryHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    datasetId?: boolean
    prompt?: boolean
    sqlQuery?: boolean
    executionTime?: boolean
    rowsReturned?: boolean
    isFavorite?: boolean
    createdAt?: boolean
  }

  export type QueryHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "datasetId" | "prompt" | "sqlQuery" | "executionTime" | "rowsReturned" | "isFavorite" | "createdAt", ExtArgs["result"]["queryHistory"]>
  export type QueryHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
  }
  export type QueryHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
  }
  export type QueryHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
  }

  export type $QueryHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QueryHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      dataset: Prisma.$DatasetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      datasetId: string
      prompt: string | null
      sqlQuery: string
      executionTime: number
      rowsReturned: number
      isFavorite: boolean
      createdAt: Date
    }, ExtArgs["result"]["queryHistory"]>
    composites: {}
  }

  type QueryHistoryGetPayload<S extends boolean | null | undefined | QueryHistoryDefaultArgs> = $Result.GetResult<Prisma.$QueryHistoryPayload, S>

  type QueryHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QueryHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QueryHistoryCountAggregateInputType | true
    }

  export interface QueryHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QueryHistory'], meta: { name: 'QueryHistory' } }
    /**
     * Find zero or one QueryHistory that matches the filter.
     * @param {QueryHistoryFindUniqueArgs} args - Arguments to find a QueryHistory
     * @example
     * // Get one QueryHistory
     * const queryHistory = await prisma.queryHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QueryHistoryFindUniqueArgs>(args: SelectSubset<T, QueryHistoryFindUniqueArgs<ExtArgs>>): Prisma__QueryHistoryClient<$Result.GetResult<Prisma.$QueryHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QueryHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QueryHistoryFindUniqueOrThrowArgs} args - Arguments to find a QueryHistory
     * @example
     * // Get one QueryHistory
     * const queryHistory = await prisma.queryHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QueryHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, QueryHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QueryHistoryClient<$Result.GetResult<Prisma.$QueryHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QueryHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryHistoryFindFirstArgs} args - Arguments to find a QueryHistory
     * @example
     * // Get one QueryHistory
     * const queryHistory = await prisma.queryHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QueryHistoryFindFirstArgs>(args?: SelectSubset<T, QueryHistoryFindFirstArgs<ExtArgs>>): Prisma__QueryHistoryClient<$Result.GetResult<Prisma.$QueryHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QueryHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryHistoryFindFirstOrThrowArgs} args - Arguments to find a QueryHistory
     * @example
     * // Get one QueryHistory
     * const queryHistory = await prisma.queryHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QueryHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, QueryHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__QueryHistoryClient<$Result.GetResult<Prisma.$QueryHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QueryHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QueryHistories
     * const queryHistories = await prisma.queryHistory.findMany()
     * 
     * // Get first 10 QueryHistories
     * const queryHistories = await prisma.queryHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const queryHistoryWithIdOnly = await prisma.queryHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QueryHistoryFindManyArgs>(args?: SelectSubset<T, QueryHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueryHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QueryHistory.
     * @param {QueryHistoryCreateArgs} args - Arguments to create a QueryHistory.
     * @example
     * // Create one QueryHistory
     * const QueryHistory = await prisma.queryHistory.create({
     *   data: {
     *     // ... data to create a QueryHistory
     *   }
     * })
     * 
     */
    create<T extends QueryHistoryCreateArgs>(args: SelectSubset<T, QueryHistoryCreateArgs<ExtArgs>>): Prisma__QueryHistoryClient<$Result.GetResult<Prisma.$QueryHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QueryHistories.
     * @param {QueryHistoryCreateManyArgs} args - Arguments to create many QueryHistories.
     * @example
     * // Create many QueryHistories
     * const queryHistory = await prisma.queryHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QueryHistoryCreateManyArgs>(args?: SelectSubset<T, QueryHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QueryHistories and returns the data saved in the database.
     * @param {QueryHistoryCreateManyAndReturnArgs} args - Arguments to create many QueryHistories.
     * @example
     * // Create many QueryHistories
     * const queryHistory = await prisma.queryHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QueryHistories and only return the `id`
     * const queryHistoryWithIdOnly = await prisma.queryHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QueryHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, QueryHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueryHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QueryHistory.
     * @param {QueryHistoryDeleteArgs} args - Arguments to delete one QueryHistory.
     * @example
     * // Delete one QueryHistory
     * const QueryHistory = await prisma.queryHistory.delete({
     *   where: {
     *     // ... filter to delete one QueryHistory
     *   }
     * })
     * 
     */
    delete<T extends QueryHistoryDeleteArgs>(args: SelectSubset<T, QueryHistoryDeleteArgs<ExtArgs>>): Prisma__QueryHistoryClient<$Result.GetResult<Prisma.$QueryHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QueryHistory.
     * @param {QueryHistoryUpdateArgs} args - Arguments to update one QueryHistory.
     * @example
     * // Update one QueryHistory
     * const queryHistory = await prisma.queryHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QueryHistoryUpdateArgs>(args: SelectSubset<T, QueryHistoryUpdateArgs<ExtArgs>>): Prisma__QueryHistoryClient<$Result.GetResult<Prisma.$QueryHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QueryHistories.
     * @param {QueryHistoryDeleteManyArgs} args - Arguments to filter QueryHistories to delete.
     * @example
     * // Delete a few QueryHistories
     * const { count } = await prisma.queryHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QueryHistoryDeleteManyArgs>(args?: SelectSubset<T, QueryHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QueryHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QueryHistories
     * const queryHistory = await prisma.queryHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QueryHistoryUpdateManyArgs>(args: SelectSubset<T, QueryHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QueryHistories and returns the data updated in the database.
     * @param {QueryHistoryUpdateManyAndReturnArgs} args - Arguments to update many QueryHistories.
     * @example
     * // Update many QueryHistories
     * const queryHistory = await prisma.queryHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QueryHistories and only return the `id`
     * const queryHistoryWithIdOnly = await prisma.queryHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends QueryHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, QueryHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueryHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QueryHistory.
     * @param {QueryHistoryUpsertArgs} args - Arguments to update or create a QueryHistory.
     * @example
     * // Update or create a QueryHistory
     * const queryHistory = await prisma.queryHistory.upsert({
     *   create: {
     *     // ... data to create a QueryHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QueryHistory we want to update
     *   }
     * })
     */
    upsert<T extends QueryHistoryUpsertArgs>(args: SelectSubset<T, QueryHistoryUpsertArgs<ExtArgs>>): Prisma__QueryHistoryClient<$Result.GetResult<Prisma.$QueryHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QueryHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryHistoryCountArgs} args - Arguments to filter QueryHistories to count.
     * @example
     * // Count the number of QueryHistories
     * const count = await prisma.queryHistory.count({
     *   where: {
     *     // ... the filter for the QueryHistories we want to count
     *   }
     * })
    **/
    count<T extends QueryHistoryCountArgs>(
      args?: Subset<T, QueryHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QueryHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QueryHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QueryHistoryAggregateArgs>(args: Subset<T, QueryHistoryAggregateArgs>): Prisma.PrismaPromise<GetQueryHistoryAggregateType<T>>

    /**
     * Group by QueryHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryHistoryGroupByArgs} args - Group by arguments.
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
      T extends QueryHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QueryHistoryGroupByArgs['orderBy'] }
        : { orderBy?: QueryHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QueryHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQueryHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QueryHistory model
   */
  readonly fields: QueryHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QueryHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QueryHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dataset<T extends DatasetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DatasetDefaultArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the QueryHistory model
   */
  interface QueryHistoryFieldRefs {
    readonly id: FieldRef<"QueryHistory", 'String'>
    readonly userId: FieldRef<"QueryHistory", 'String'>
    readonly datasetId: FieldRef<"QueryHistory", 'String'>
    readonly prompt: FieldRef<"QueryHistory", 'String'>
    readonly sqlQuery: FieldRef<"QueryHistory", 'String'>
    readonly executionTime: FieldRef<"QueryHistory", 'Int'>
    readonly rowsReturned: FieldRef<"QueryHistory", 'Int'>
    readonly isFavorite: FieldRef<"QueryHistory", 'Boolean'>
    readonly createdAt: FieldRef<"QueryHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QueryHistory findUnique
   */
  export type QueryHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryHistory
     */
    select?: QueryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueryHistory
     */
    omit?: QueryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryHistoryInclude<ExtArgs> | null
    /**
     * Filter, which QueryHistory to fetch.
     */
    where: QueryHistoryWhereUniqueInput
  }

  /**
   * QueryHistory findUniqueOrThrow
   */
  export type QueryHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryHistory
     */
    select?: QueryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueryHistory
     */
    omit?: QueryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryHistoryInclude<ExtArgs> | null
    /**
     * Filter, which QueryHistory to fetch.
     */
    where: QueryHistoryWhereUniqueInput
  }

  /**
   * QueryHistory findFirst
   */
  export type QueryHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryHistory
     */
    select?: QueryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueryHistory
     */
    omit?: QueryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryHistoryInclude<ExtArgs> | null
    /**
     * Filter, which QueryHistory to fetch.
     */
    where?: QueryHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QueryHistories to fetch.
     */
    orderBy?: QueryHistoryOrderByWithRelationInput | QueryHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QueryHistories.
     */
    cursor?: QueryHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QueryHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QueryHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QueryHistories.
     */
    distinct?: QueryHistoryScalarFieldEnum | QueryHistoryScalarFieldEnum[]
  }

  /**
   * QueryHistory findFirstOrThrow
   */
  export type QueryHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryHistory
     */
    select?: QueryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueryHistory
     */
    omit?: QueryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryHistoryInclude<ExtArgs> | null
    /**
     * Filter, which QueryHistory to fetch.
     */
    where?: QueryHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QueryHistories to fetch.
     */
    orderBy?: QueryHistoryOrderByWithRelationInput | QueryHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QueryHistories.
     */
    cursor?: QueryHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QueryHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QueryHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QueryHistories.
     */
    distinct?: QueryHistoryScalarFieldEnum | QueryHistoryScalarFieldEnum[]
  }

  /**
   * QueryHistory findMany
   */
  export type QueryHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryHistory
     */
    select?: QueryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueryHistory
     */
    omit?: QueryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryHistoryInclude<ExtArgs> | null
    /**
     * Filter, which QueryHistories to fetch.
     */
    where?: QueryHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QueryHistories to fetch.
     */
    orderBy?: QueryHistoryOrderByWithRelationInput | QueryHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QueryHistories.
     */
    cursor?: QueryHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QueryHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QueryHistories.
     */
    skip?: number
    distinct?: QueryHistoryScalarFieldEnum | QueryHistoryScalarFieldEnum[]
  }

  /**
   * QueryHistory create
   */
  export type QueryHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryHistory
     */
    select?: QueryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueryHistory
     */
    omit?: QueryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a QueryHistory.
     */
    data: XOR<QueryHistoryCreateInput, QueryHistoryUncheckedCreateInput>
  }

  /**
   * QueryHistory createMany
   */
  export type QueryHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QueryHistories.
     */
    data: QueryHistoryCreateManyInput | QueryHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QueryHistory createManyAndReturn
   */
  export type QueryHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryHistory
     */
    select?: QueryHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QueryHistory
     */
    omit?: QueryHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many QueryHistories.
     */
    data: QueryHistoryCreateManyInput | QueryHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QueryHistory update
   */
  export type QueryHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryHistory
     */
    select?: QueryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueryHistory
     */
    omit?: QueryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a QueryHistory.
     */
    data: XOR<QueryHistoryUpdateInput, QueryHistoryUncheckedUpdateInput>
    /**
     * Choose, which QueryHistory to update.
     */
    where: QueryHistoryWhereUniqueInput
  }

  /**
   * QueryHistory updateMany
   */
  export type QueryHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QueryHistories.
     */
    data: XOR<QueryHistoryUpdateManyMutationInput, QueryHistoryUncheckedUpdateManyInput>
    /**
     * Filter which QueryHistories to update
     */
    where?: QueryHistoryWhereInput
    /**
     * Limit how many QueryHistories to update.
     */
    limit?: number
  }

  /**
   * QueryHistory updateManyAndReturn
   */
  export type QueryHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryHistory
     */
    select?: QueryHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QueryHistory
     */
    omit?: QueryHistoryOmit<ExtArgs> | null
    /**
     * The data used to update QueryHistories.
     */
    data: XOR<QueryHistoryUpdateManyMutationInput, QueryHistoryUncheckedUpdateManyInput>
    /**
     * Filter which QueryHistories to update
     */
    where?: QueryHistoryWhereInput
    /**
     * Limit how many QueryHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QueryHistory upsert
   */
  export type QueryHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryHistory
     */
    select?: QueryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueryHistory
     */
    omit?: QueryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the QueryHistory to update in case it exists.
     */
    where: QueryHistoryWhereUniqueInput
    /**
     * In case the QueryHistory found by the `where` argument doesn't exist, create a new QueryHistory with this data.
     */
    create: XOR<QueryHistoryCreateInput, QueryHistoryUncheckedCreateInput>
    /**
     * In case the QueryHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QueryHistoryUpdateInput, QueryHistoryUncheckedUpdateInput>
  }

  /**
   * QueryHistory delete
   */
  export type QueryHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryHistory
     */
    select?: QueryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueryHistory
     */
    omit?: QueryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryHistoryInclude<ExtArgs> | null
    /**
     * Filter which QueryHistory to delete.
     */
    where: QueryHistoryWhereUniqueInput
  }

  /**
   * QueryHistory deleteMany
   */
  export type QueryHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QueryHistories to delete
     */
    where?: QueryHistoryWhereInput
    /**
     * Limit how many QueryHistories to delete.
     */
    limit?: number
  }

  /**
   * QueryHistory without action
   */
  export type QueryHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryHistory
     */
    select?: QueryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueryHistory
     */
    omit?: QueryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryHistoryInclude<ExtArgs> | null
  }


  /**
   * Model ChatHistory
   */

  export type AggregateChatHistory = {
    _count: ChatHistoryCountAggregateOutputType | null
    _min: ChatHistoryMinAggregateOutputType | null
    _max: ChatHistoryMaxAggregateOutputType | null
  }

  export type ChatHistoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    datasetId: string | null
    role: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ChatHistoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    datasetId: string | null
    role: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ChatHistoryCountAggregateOutputType = {
    id: number
    userId: number
    datasetId: number
    role: number
    content: number
    createdAt: number
    _all: number
  }


  export type ChatHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    datasetId?: true
    role?: true
    content?: true
    createdAt?: true
  }

  export type ChatHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    datasetId?: true
    role?: true
    content?: true
    createdAt?: true
  }

  export type ChatHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    datasetId?: true
    role?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type ChatHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatHistory to aggregate.
     */
    where?: ChatHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatHistories to fetch.
     */
    orderBy?: ChatHistoryOrderByWithRelationInput | ChatHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatHistories
    **/
    _count?: true | ChatHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatHistoryMaxAggregateInputType
  }

  export type GetChatHistoryAggregateType<T extends ChatHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateChatHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatHistory[P]>
      : GetScalarType<T[P], AggregateChatHistory[P]>
  }




  export type ChatHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatHistoryWhereInput
    orderBy?: ChatHistoryOrderByWithAggregationInput | ChatHistoryOrderByWithAggregationInput[]
    by: ChatHistoryScalarFieldEnum[] | ChatHistoryScalarFieldEnum
    having?: ChatHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatHistoryCountAggregateInputType | true
    _min?: ChatHistoryMinAggregateInputType
    _max?: ChatHistoryMaxAggregateInputType
  }

  export type ChatHistoryGroupByOutputType = {
    id: string
    userId: string
    datasetId: string
    role: string
    content: string
    createdAt: Date
    _count: ChatHistoryCountAggregateOutputType | null
    _min: ChatHistoryMinAggregateOutputType | null
    _max: ChatHistoryMaxAggregateOutputType | null
  }

  type GetChatHistoryGroupByPayload<T extends ChatHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ChatHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ChatHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    datasetId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatHistory"]>

  export type ChatHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    datasetId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatHistory"]>

  export type ChatHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    datasetId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatHistory"]>

  export type ChatHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    datasetId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type ChatHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "datasetId" | "role" | "content" | "createdAt", ExtArgs["result"]["chatHistory"]>
  export type ChatHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
  }
  export type ChatHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
  }
  export type ChatHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
  }

  export type $ChatHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      dataset: Prisma.$DatasetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      datasetId: string
      role: string
      content: string
      createdAt: Date
    }, ExtArgs["result"]["chatHistory"]>
    composites: {}
  }

  type ChatHistoryGetPayload<S extends boolean | null | undefined | ChatHistoryDefaultArgs> = $Result.GetResult<Prisma.$ChatHistoryPayload, S>

  type ChatHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatHistoryCountAggregateInputType | true
    }

  export interface ChatHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatHistory'], meta: { name: 'ChatHistory' } }
    /**
     * Find zero or one ChatHistory that matches the filter.
     * @param {ChatHistoryFindUniqueArgs} args - Arguments to find a ChatHistory
     * @example
     * // Get one ChatHistory
     * const chatHistory = await prisma.chatHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatHistoryFindUniqueArgs>(args: SelectSubset<T, ChatHistoryFindUniqueArgs<ExtArgs>>): Prisma__ChatHistoryClient<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatHistoryFindUniqueOrThrowArgs} args - Arguments to find a ChatHistory
     * @example
     * // Get one ChatHistory
     * const chatHistory = await prisma.chatHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatHistoryClient<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatHistoryFindFirstArgs} args - Arguments to find a ChatHistory
     * @example
     * // Get one ChatHistory
     * const chatHistory = await prisma.chatHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatHistoryFindFirstArgs>(args?: SelectSubset<T, ChatHistoryFindFirstArgs<ExtArgs>>): Prisma__ChatHistoryClient<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatHistoryFindFirstOrThrowArgs} args - Arguments to find a ChatHistory
     * @example
     * // Get one ChatHistory
     * const chatHistory = await prisma.chatHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatHistoryClient<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatHistories
     * const chatHistories = await prisma.chatHistory.findMany()
     * 
     * // Get first 10 ChatHistories
     * const chatHistories = await prisma.chatHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatHistoryWithIdOnly = await prisma.chatHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatHistoryFindManyArgs>(args?: SelectSubset<T, ChatHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatHistory.
     * @param {ChatHistoryCreateArgs} args - Arguments to create a ChatHistory.
     * @example
     * // Create one ChatHistory
     * const ChatHistory = await prisma.chatHistory.create({
     *   data: {
     *     // ... data to create a ChatHistory
     *   }
     * })
     * 
     */
    create<T extends ChatHistoryCreateArgs>(args: SelectSubset<T, ChatHistoryCreateArgs<ExtArgs>>): Prisma__ChatHistoryClient<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatHistories.
     * @param {ChatHistoryCreateManyArgs} args - Arguments to create many ChatHistories.
     * @example
     * // Create many ChatHistories
     * const chatHistory = await prisma.chatHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatHistoryCreateManyArgs>(args?: SelectSubset<T, ChatHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatHistories and returns the data saved in the database.
     * @param {ChatHistoryCreateManyAndReturnArgs} args - Arguments to create many ChatHistories.
     * @example
     * // Create many ChatHistories
     * const chatHistory = await prisma.chatHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatHistories and only return the `id`
     * const chatHistoryWithIdOnly = await prisma.chatHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatHistory.
     * @param {ChatHistoryDeleteArgs} args - Arguments to delete one ChatHistory.
     * @example
     * // Delete one ChatHistory
     * const ChatHistory = await prisma.chatHistory.delete({
     *   where: {
     *     // ... filter to delete one ChatHistory
     *   }
     * })
     * 
     */
    delete<T extends ChatHistoryDeleteArgs>(args: SelectSubset<T, ChatHistoryDeleteArgs<ExtArgs>>): Prisma__ChatHistoryClient<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatHistory.
     * @param {ChatHistoryUpdateArgs} args - Arguments to update one ChatHistory.
     * @example
     * // Update one ChatHistory
     * const chatHistory = await prisma.chatHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatHistoryUpdateArgs>(args: SelectSubset<T, ChatHistoryUpdateArgs<ExtArgs>>): Prisma__ChatHistoryClient<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatHistories.
     * @param {ChatHistoryDeleteManyArgs} args - Arguments to filter ChatHistories to delete.
     * @example
     * // Delete a few ChatHistories
     * const { count } = await prisma.chatHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatHistoryDeleteManyArgs>(args?: SelectSubset<T, ChatHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatHistories
     * const chatHistory = await prisma.chatHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatHistoryUpdateManyArgs>(args: SelectSubset<T, ChatHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatHistories and returns the data updated in the database.
     * @param {ChatHistoryUpdateManyAndReturnArgs} args - Arguments to update many ChatHistories.
     * @example
     * // Update many ChatHistories
     * const chatHistory = await prisma.chatHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatHistories and only return the `id`
     * const chatHistoryWithIdOnly = await prisma.chatHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatHistory.
     * @param {ChatHistoryUpsertArgs} args - Arguments to update or create a ChatHistory.
     * @example
     * // Update or create a ChatHistory
     * const chatHistory = await prisma.chatHistory.upsert({
     *   create: {
     *     // ... data to create a ChatHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatHistory we want to update
     *   }
     * })
     */
    upsert<T extends ChatHistoryUpsertArgs>(args: SelectSubset<T, ChatHistoryUpsertArgs<ExtArgs>>): Prisma__ChatHistoryClient<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatHistoryCountArgs} args - Arguments to filter ChatHistories to count.
     * @example
     * // Count the number of ChatHistories
     * const count = await prisma.chatHistory.count({
     *   where: {
     *     // ... the filter for the ChatHistories we want to count
     *   }
     * })
    **/
    count<T extends ChatHistoryCountArgs>(
      args?: Subset<T, ChatHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatHistoryAggregateArgs>(args: Subset<T, ChatHistoryAggregateArgs>): Prisma.PrismaPromise<GetChatHistoryAggregateType<T>>

    /**
     * Group by ChatHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatHistoryGroupByArgs} args - Group by arguments.
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
      T extends ChatHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ChatHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatHistory model
   */
  readonly fields: ChatHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dataset<T extends DatasetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DatasetDefaultArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChatHistory model
   */
  interface ChatHistoryFieldRefs {
    readonly id: FieldRef<"ChatHistory", 'String'>
    readonly userId: FieldRef<"ChatHistory", 'String'>
    readonly datasetId: FieldRef<"ChatHistory", 'String'>
    readonly role: FieldRef<"ChatHistory", 'String'>
    readonly content: FieldRef<"ChatHistory", 'String'>
    readonly createdAt: FieldRef<"ChatHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatHistory findUnique
   */
  export type ChatHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ChatHistory to fetch.
     */
    where: ChatHistoryWhereUniqueInput
  }

  /**
   * ChatHistory findUniqueOrThrow
   */
  export type ChatHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ChatHistory to fetch.
     */
    where: ChatHistoryWhereUniqueInput
  }

  /**
   * ChatHistory findFirst
   */
  export type ChatHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ChatHistory to fetch.
     */
    where?: ChatHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatHistories to fetch.
     */
    orderBy?: ChatHistoryOrderByWithRelationInput | ChatHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatHistories.
     */
    cursor?: ChatHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatHistories.
     */
    distinct?: ChatHistoryScalarFieldEnum | ChatHistoryScalarFieldEnum[]
  }

  /**
   * ChatHistory findFirstOrThrow
   */
  export type ChatHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ChatHistory to fetch.
     */
    where?: ChatHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatHistories to fetch.
     */
    orderBy?: ChatHistoryOrderByWithRelationInput | ChatHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatHistories.
     */
    cursor?: ChatHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatHistories.
     */
    distinct?: ChatHistoryScalarFieldEnum | ChatHistoryScalarFieldEnum[]
  }

  /**
   * ChatHistory findMany
   */
  export type ChatHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ChatHistories to fetch.
     */
    where?: ChatHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatHistories to fetch.
     */
    orderBy?: ChatHistoryOrderByWithRelationInput | ChatHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatHistories.
     */
    cursor?: ChatHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatHistories.
     */
    skip?: number
    distinct?: ChatHistoryScalarFieldEnum | ChatHistoryScalarFieldEnum[]
  }

  /**
   * ChatHistory create
   */
  export type ChatHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatHistory.
     */
    data: XOR<ChatHistoryCreateInput, ChatHistoryUncheckedCreateInput>
  }

  /**
   * ChatHistory createMany
   */
  export type ChatHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatHistories.
     */
    data: ChatHistoryCreateManyInput | ChatHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatHistory createManyAndReturn
   */
  export type ChatHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many ChatHistories.
     */
    data: ChatHistoryCreateManyInput | ChatHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatHistory update
   */
  export type ChatHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatHistory.
     */
    data: XOR<ChatHistoryUpdateInput, ChatHistoryUncheckedUpdateInput>
    /**
     * Choose, which ChatHistory to update.
     */
    where: ChatHistoryWhereUniqueInput
  }

  /**
   * ChatHistory updateMany
   */
  export type ChatHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatHistories.
     */
    data: XOR<ChatHistoryUpdateManyMutationInput, ChatHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ChatHistories to update
     */
    where?: ChatHistoryWhereInput
    /**
     * Limit how many ChatHistories to update.
     */
    limit?: number
  }

  /**
   * ChatHistory updateManyAndReturn
   */
  export type ChatHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * The data used to update ChatHistories.
     */
    data: XOR<ChatHistoryUpdateManyMutationInput, ChatHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ChatHistories to update
     */
    where?: ChatHistoryWhereInput
    /**
     * Limit how many ChatHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatHistory upsert
   */
  export type ChatHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatHistory to update in case it exists.
     */
    where: ChatHistoryWhereUniqueInput
    /**
     * In case the ChatHistory found by the `where` argument doesn't exist, create a new ChatHistory with this data.
     */
    create: XOR<ChatHistoryCreateInput, ChatHistoryUncheckedCreateInput>
    /**
     * In case the ChatHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatHistoryUpdateInput, ChatHistoryUncheckedUpdateInput>
  }

  /**
   * ChatHistory delete
   */
  export type ChatHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryInclude<ExtArgs> | null
    /**
     * Filter which ChatHistory to delete.
     */
    where: ChatHistoryWhereUniqueInput
  }

  /**
   * ChatHistory deleteMany
   */
  export type ChatHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatHistories to delete
     */
    where?: ChatHistoryWhereInput
    /**
     * Limit how many ChatHistories to delete.
     */
    limit?: number
  }

  /**
   * ChatHistory without action
   */
  export type ChatHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Insight
   */

  export type AggregateInsight = {
    _count: InsightCountAggregateOutputType | null
    _min: InsightMinAggregateOutputType | null
    _max: InsightMaxAggregateOutputType | null
  }

  export type InsightMinAggregateOutputType = {
    id: string | null
    datasetId: string | null
    title: string | null
    description: string | null
    type: string | null
    createdAt: Date | null
  }

  export type InsightMaxAggregateOutputType = {
    id: string | null
    datasetId: string | null
    title: string | null
    description: string | null
    type: string | null
    createdAt: Date | null
  }

  export type InsightCountAggregateOutputType = {
    id: number
    datasetId: number
    title: number
    description: number
    type: number
    content: number
    createdAt: number
    _all: number
  }


  export type InsightMinAggregateInputType = {
    id?: true
    datasetId?: true
    title?: true
    description?: true
    type?: true
    createdAt?: true
  }

  export type InsightMaxAggregateInputType = {
    id?: true
    datasetId?: true
    title?: true
    description?: true
    type?: true
    createdAt?: true
  }

  export type InsightCountAggregateInputType = {
    id?: true
    datasetId?: true
    title?: true
    description?: true
    type?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type InsightAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Insight to aggregate.
     */
    where?: InsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insights to fetch.
     */
    orderBy?: InsightOrderByWithRelationInput | InsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Insights
    **/
    _count?: true | InsightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InsightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InsightMaxAggregateInputType
  }

  export type GetInsightAggregateType<T extends InsightAggregateArgs> = {
        [P in keyof T & keyof AggregateInsight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInsight[P]>
      : GetScalarType<T[P], AggregateInsight[P]>
  }




  export type InsightGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InsightWhereInput
    orderBy?: InsightOrderByWithAggregationInput | InsightOrderByWithAggregationInput[]
    by: InsightScalarFieldEnum[] | InsightScalarFieldEnum
    having?: InsightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InsightCountAggregateInputType | true
    _min?: InsightMinAggregateInputType
    _max?: InsightMaxAggregateInputType
  }

  export type InsightGroupByOutputType = {
    id: string
    datasetId: string
    title: string
    description: string
    type: string
    content: JsonValue | null
    createdAt: Date
    _count: InsightCountAggregateOutputType | null
    _min: InsightMinAggregateOutputType | null
    _max: InsightMaxAggregateOutputType | null
  }

  type GetInsightGroupByPayload<T extends InsightGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InsightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InsightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InsightGroupByOutputType[P]>
            : GetScalarType<T[P], InsightGroupByOutputType[P]>
        }
      >
    >


  export type InsightSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    datasetId?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    content?: boolean
    createdAt?: boolean
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["insight"]>

  export type InsightSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    datasetId?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    content?: boolean
    createdAt?: boolean
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["insight"]>

  export type InsightSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    datasetId?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    content?: boolean
    createdAt?: boolean
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["insight"]>

  export type InsightSelectScalar = {
    id?: boolean
    datasetId?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type InsightOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "datasetId" | "title" | "description" | "type" | "content" | "createdAt", ExtArgs["result"]["insight"]>
  export type InsightInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
  }
  export type InsightIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
  }
  export type InsightIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
  }

  export type $InsightPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Insight"
    objects: {
      dataset: Prisma.$DatasetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      datasetId: string
      title: string
      description: string
      type: string
      content: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["insight"]>
    composites: {}
  }

  type InsightGetPayload<S extends boolean | null | undefined | InsightDefaultArgs> = $Result.GetResult<Prisma.$InsightPayload, S>

  type InsightCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InsightFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InsightCountAggregateInputType | true
    }

  export interface InsightDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Insight'], meta: { name: 'Insight' } }
    /**
     * Find zero or one Insight that matches the filter.
     * @param {InsightFindUniqueArgs} args - Arguments to find a Insight
     * @example
     * // Get one Insight
     * const insight = await prisma.insight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InsightFindUniqueArgs>(args: SelectSubset<T, InsightFindUniqueArgs<ExtArgs>>): Prisma__InsightClient<$Result.GetResult<Prisma.$InsightPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Insight that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InsightFindUniqueOrThrowArgs} args - Arguments to find a Insight
     * @example
     * // Get one Insight
     * const insight = await prisma.insight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InsightFindUniqueOrThrowArgs>(args: SelectSubset<T, InsightFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InsightClient<$Result.GetResult<Prisma.$InsightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Insight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsightFindFirstArgs} args - Arguments to find a Insight
     * @example
     * // Get one Insight
     * const insight = await prisma.insight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InsightFindFirstArgs>(args?: SelectSubset<T, InsightFindFirstArgs<ExtArgs>>): Prisma__InsightClient<$Result.GetResult<Prisma.$InsightPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Insight that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsightFindFirstOrThrowArgs} args - Arguments to find a Insight
     * @example
     * // Get one Insight
     * const insight = await prisma.insight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InsightFindFirstOrThrowArgs>(args?: SelectSubset<T, InsightFindFirstOrThrowArgs<ExtArgs>>): Prisma__InsightClient<$Result.GetResult<Prisma.$InsightPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Insights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsightFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Insights
     * const insights = await prisma.insight.findMany()
     * 
     * // Get first 10 Insights
     * const insights = await prisma.insight.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const insightWithIdOnly = await prisma.insight.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InsightFindManyArgs>(args?: SelectSubset<T, InsightFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Insight.
     * @param {InsightCreateArgs} args - Arguments to create a Insight.
     * @example
     * // Create one Insight
     * const Insight = await prisma.insight.create({
     *   data: {
     *     // ... data to create a Insight
     *   }
     * })
     * 
     */
    create<T extends InsightCreateArgs>(args: SelectSubset<T, InsightCreateArgs<ExtArgs>>): Prisma__InsightClient<$Result.GetResult<Prisma.$InsightPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Insights.
     * @param {InsightCreateManyArgs} args - Arguments to create many Insights.
     * @example
     * // Create many Insights
     * const insight = await prisma.insight.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InsightCreateManyArgs>(args?: SelectSubset<T, InsightCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Insights and returns the data saved in the database.
     * @param {InsightCreateManyAndReturnArgs} args - Arguments to create many Insights.
     * @example
     * // Create many Insights
     * const insight = await prisma.insight.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Insights and only return the `id`
     * const insightWithIdOnly = await prisma.insight.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InsightCreateManyAndReturnArgs>(args?: SelectSubset<T, InsightCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsightPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Insight.
     * @param {InsightDeleteArgs} args - Arguments to delete one Insight.
     * @example
     * // Delete one Insight
     * const Insight = await prisma.insight.delete({
     *   where: {
     *     // ... filter to delete one Insight
     *   }
     * })
     * 
     */
    delete<T extends InsightDeleteArgs>(args: SelectSubset<T, InsightDeleteArgs<ExtArgs>>): Prisma__InsightClient<$Result.GetResult<Prisma.$InsightPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Insight.
     * @param {InsightUpdateArgs} args - Arguments to update one Insight.
     * @example
     * // Update one Insight
     * const insight = await prisma.insight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InsightUpdateArgs>(args: SelectSubset<T, InsightUpdateArgs<ExtArgs>>): Prisma__InsightClient<$Result.GetResult<Prisma.$InsightPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Insights.
     * @param {InsightDeleteManyArgs} args - Arguments to filter Insights to delete.
     * @example
     * // Delete a few Insights
     * const { count } = await prisma.insight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InsightDeleteManyArgs>(args?: SelectSubset<T, InsightDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Insights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Insights
     * const insight = await prisma.insight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InsightUpdateManyArgs>(args: SelectSubset<T, InsightUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Insights and returns the data updated in the database.
     * @param {InsightUpdateManyAndReturnArgs} args - Arguments to update many Insights.
     * @example
     * // Update many Insights
     * const insight = await prisma.insight.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Insights and only return the `id`
     * const insightWithIdOnly = await prisma.insight.updateManyAndReturn({
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
    updateManyAndReturn<T extends InsightUpdateManyAndReturnArgs>(args: SelectSubset<T, InsightUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsightPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Insight.
     * @param {InsightUpsertArgs} args - Arguments to update or create a Insight.
     * @example
     * // Update or create a Insight
     * const insight = await prisma.insight.upsert({
     *   create: {
     *     // ... data to create a Insight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Insight we want to update
     *   }
     * })
     */
    upsert<T extends InsightUpsertArgs>(args: SelectSubset<T, InsightUpsertArgs<ExtArgs>>): Prisma__InsightClient<$Result.GetResult<Prisma.$InsightPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Insights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsightCountArgs} args - Arguments to filter Insights to count.
     * @example
     * // Count the number of Insights
     * const count = await prisma.insight.count({
     *   where: {
     *     // ... the filter for the Insights we want to count
     *   }
     * })
    **/
    count<T extends InsightCountArgs>(
      args?: Subset<T, InsightCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InsightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Insight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InsightAggregateArgs>(args: Subset<T, InsightAggregateArgs>): Prisma.PrismaPromise<GetInsightAggregateType<T>>

    /**
     * Group by Insight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsightGroupByArgs} args - Group by arguments.
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
      T extends InsightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InsightGroupByArgs['orderBy'] }
        : { orderBy?: InsightGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InsightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInsightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Insight model
   */
  readonly fields: InsightFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Insight.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InsightClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dataset<T extends DatasetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DatasetDefaultArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Insight model
   */
  interface InsightFieldRefs {
    readonly id: FieldRef<"Insight", 'String'>
    readonly datasetId: FieldRef<"Insight", 'String'>
    readonly title: FieldRef<"Insight", 'String'>
    readonly description: FieldRef<"Insight", 'String'>
    readonly type: FieldRef<"Insight", 'String'>
    readonly content: FieldRef<"Insight", 'Json'>
    readonly createdAt: FieldRef<"Insight", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Insight findUnique
   */
  export type InsightFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightInclude<ExtArgs> | null
    /**
     * Filter, which Insight to fetch.
     */
    where: InsightWhereUniqueInput
  }

  /**
   * Insight findUniqueOrThrow
   */
  export type InsightFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightInclude<ExtArgs> | null
    /**
     * Filter, which Insight to fetch.
     */
    where: InsightWhereUniqueInput
  }

  /**
   * Insight findFirst
   */
  export type InsightFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightInclude<ExtArgs> | null
    /**
     * Filter, which Insight to fetch.
     */
    where?: InsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insights to fetch.
     */
    orderBy?: InsightOrderByWithRelationInput | InsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Insights.
     */
    cursor?: InsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Insights.
     */
    distinct?: InsightScalarFieldEnum | InsightScalarFieldEnum[]
  }

  /**
   * Insight findFirstOrThrow
   */
  export type InsightFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightInclude<ExtArgs> | null
    /**
     * Filter, which Insight to fetch.
     */
    where?: InsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insights to fetch.
     */
    orderBy?: InsightOrderByWithRelationInput | InsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Insights.
     */
    cursor?: InsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Insights.
     */
    distinct?: InsightScalarFieldEnum | InsightScalarFieldEnum[]
  }

  /**
   * Insight findMany
   */
  export type InsightFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightInclude<ExtArgs> | null
    /**
     * Filter, which Insights to fetch.
     */
    where?: InsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insights to fetch.
     */
    orderBy?: InsightOrderByWithRelationInput | InsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Insights.
     */
    cursor?: InsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insights.
     */
    skip?: number
    distinct?: InsightScalarFieldEnum | InsightScalarFieldEnum[]
  }

  /**
   * Insight create
   */
  export type InsightCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightInclude<ExtArgs> | null
    /**
     * The data needed to create a Insight.
     */
    data: XOR<InsightCreateInput, InsightUncheckedCreateInput>
  }

  /**
   * Insight createMany
   */
  export type InsightCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Insights.
     */
    data: InsightCreateManyInput | InsightCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Insight createManyAndReturn
   */
  export type InsightCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null
    /**
     * The data used to create many Insights.
     */
    data: InsightCreateManyInput | InsightCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Insight update
   */
  export type InsightUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightInclude<ExtArgs> | null
    /**
     * The data needed to update a Insight.
     */
    data: XOR<InsightUpdateInput, InsightUncheckedUpdateInput>
    /**
     * Choose, which Insight to update.
     */
    where: InsightWhereUniqueInput
  }

  /**
   * Insight updateMany
   */
  export type InsightUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Insights.
     */
    data: XOR<InsightUpdateManyMutationInput, InsightUncheckedUpdateManyInput>
    /**
     * Filter which Insights to update
     */
    where?: InsightWhereInput
    /**
     * Limit how many Insights to update.
     */
    limit?: number
  }

  /**
   * Insight updateManyAndReturn
   */
  export type InsightUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null
    /**
     * The data used to update Insights.
     */
    data: XOR<InsightUpdateManyMutationInput, InsightUncheckedUpdateManyInput>
    /**
     * Filter which Insights to update
     */
    where?: InsightWhereInput
    /**
     * Limit how many Insights to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Insight upsert
   */
  export type InsightUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightInclude<ExtArgs> | null
    /**
     * The filter to search for the Insight to update in case it exists.
     */
    where: InsightWhereUniqueInput
    /**
     * In case the Insight found by the `where` argument doesn't exist, create a new Insight with this data.
     */
    create: XOR<InsightCreateInput, InsightUncheckedCreateInput>
    /**
     * In case the Insight was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InsightUpdateInput, InsightUncheckedUpdateInput>
  }

  /**
   * Insight delete
   */
  export type InsightDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightInclude<ExtArgs> | null
    /**
     * Filter which Insight to delete.
     */
    where: InsightWhereUniqueInput
  }

  /**
   * Insight deleteMany
   */
  export type InsightDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Insights to delete
     */
    where?: InsightWhereInput
    /**
     * Limit how many Insights to delete.
     */
    limit?: number
  }

  /**
   * Insight without action
   */
  export type InsightDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insight
     */
    select?: InsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insight
     */
    omit?: InsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsightInclude<ExtArgs> | null
  }


  /**
   * Model Settings
   */

  export type AggregateSettings = {
    _count: SettingsCountAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  export type SettingsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    theme: string | null
    language: string | null
    aiModel: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SettingsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    theme: string | null
    language: string | null
    aiModel: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SettingsCountAggregateOutputType = {
    id: number
    userId: number
    theme: number
    language: number
    aiModel: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SettingsMinAggregateInputType = {
    id?: true
    userId?: true
    theme?: true
    language?: true
    aiModel?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SettingsMaxAggregateInputType = {
    id?: true
    userId?: true
    theme?: true
    language?: true
    aiModel?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SettingsCountAggregateInputType = {
    id?: true
    userId?: true
    theme?: true
    language?: true
    aiModel?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to aggregate.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingsMaxAggregateInputType
  }

  export type GetSettingsAggregateType<T extends SettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettings[P]>
      : GetScalarType<T[P], AggregateSettings[P]>
  }




  export type SettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingsWhereInput
    orderBy?: SettingsOrderByWithAggregationInput | SettingsOrderByWithAggregationInput[]
    by: SettingsScalarFieldEnum[] | SettingsScalarFieldEnum
    having?: SettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingsCountAggregateInputType | true
    _min?: SettingsMinAggregateInputType
    _max?: SettingsMaxAggregateInputType
  }

  export type SettingsGroupByOutputType = {
    id: string
    userId: string
    theme: string
    language: string
    aiModel: string
    createdAt: Date
    updatedAt: Date
    _count: SettingsCountAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  type GetSettingsGroupByPayload<T extends SettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SettingsGroupByOutputType[P]>
        }
      >
    >


  export type SettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    theme?: boolean
    language?: boolean
    aiModel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    theme?: boolean
    language?: boolean
    aiModel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    theme?: boolean
    language?: boolean
    aiModel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectScalar = {
    id?: boolean
    userId?: boolean
    theme?: boolean
    language?: boolean
    aiModel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "theme" | "language" | "aiModel" | "createdAt" | "updatedAt", ExtArgs["result"]["settings"]>
  export type SettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SettingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Settings"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      theme: string
      language: string
      aiModel: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["settings"]>
    composites: {}
  }

  type SettingsGetPayload<S extends boolean | null | undefined | SettingsDefaultArgs> = $Result.GetResult<Prisma.$SettingsPayload, S>

  type SettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingsCountAggregateInputType | true
    }

  export interface SettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Settings'], meta: { name: 'Settings' } }
    /**
     * Find zero or one Settings that matches the filter.
     * @param {SettingsFindUniqueArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingsFindUniqueArgs>(args: SelectSubset<T, SettingsFindUniqueArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Settings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettingsFindUniqueOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingsFindFirstArgs>(args?: SelectSubset<T, SettingsFindFirstArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.settings.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.settings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingsWithIdOnly = await prisma.settings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettingsFindManyArgs>(args?: SelectSubset<T, SettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Settings.
     * @param {SettingsCreateArgs} args - Arguments to create a Settings.
     * @example
     * // Create one Settings
     * const Settings = await prisma.settings.create({
     *   data: {
     *     // ... data to create a Settings
     *   }
     * })
     * 
     */
    create<T extends SettingsCreateArgs>(args: SelectSubset<T, SettingsCreateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {SettingsCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingsCreateManyArgs>(args?: SelectSubset<T, SettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {SettingsCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `id`
     * const settingsWithIdOnly = await prisma.settings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, SettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Settings.
     * @param {SettingsDeleteArgs} args - Arguments to delete one Settings.
     * @example
     * // Delete one Settings
     * const Settings = await prisma.settings.delete({
     *   where: {
     *     // ... filter to delete one Settings
     *   }
     * })
     * 
     */
    delete<T extends SettingsDeleteArgs>(args: SelectSubset<T, SettingsDeleteArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Settings.
     * @param {SettingsUpdateArgs} args - Arguments to update one Settings.
     * @example
     * // Update one Settings
     * const settings = await prisma.settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingsUpdateArgs>(args: SelectSubset<T, SettingsUpdateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {SettingsDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingsDeleteManyArgs>(args?: SelectSubset<T, SettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingsUpdateManyArgs>(args: SelectSubset<T, SettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings and returns the data updated in the database.
     * @param {SettingsUpdateManyAndReturnArgs} args - Arguments to update many Settings.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settings and only return the `id`
     * const settingsWithIdOnly = await prisma.settings.updateManyAndReturn({
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
    updateManyAndReturn<T extends SettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, SettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Settings.
     * @param {SettingsUpsertArgs} args - Arguments to update or create a Settings.
     * @example
     * // Update or create a Settings
     * const settings = await prisma.settings.upsert({
     *   create: {
     *     // ... data to create a Settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Settings we want to update
     *   }
     * })
     */
    upsert<T extends SettingsUpsertArgs>(args: SelectSubset<T, SettingsUpsertArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.settings.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingsCountArgs>(
      args?: Subset<T, SettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SettingsAggregateArgs>(args: Subset<T, SettingsAggregateArgs>): Prisma.PrismaPromise<GetSettingsAggregateType<T>>

    /**
     * Group by Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsGroupByArgs} args - Group by arguments.
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
      T extends SettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingsGroupByArgs['orderBy'] }
        : { orderBy?: SettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Settings model
   */
  readonly fields: SettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Settings model
   */
  interface SettingsFieldRefs {
    readonly id: FieldRef<"Settings", 'String'>
    readonly userId: FieldRef<"Settings", 'String'>
    readonly theme: FieldRef<"Settings", 'String'>
    readonly language: FieldRef<"Settings", 'String'>
    readonly aiModel: FieldRef<"Settings", 'String'>
    readonly createdAt: FieldRef<"Settings", 'DateTime'>
    readonly updatedAt: FieldRef<"Settings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Settings findUnique
   */
  export type SettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findUniqueOrThrow
   */
  export type SettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findFirst
   */
  export type SettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findFirstOrThrow
   */
  export type SettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findMany
   */
  export type SettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings create
   */
  export type SettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a Settings.
     */
    data: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
  }

  /**
   * Settings createMany
   */
  export type SettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Settings createManyAndReturn
   */
  export type SettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Settings update
   */
  export type SettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a Settings.
     */
    data: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
    /**
     * Choose, which Settings to update.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings updateMany
   */
  export type SettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingsUpdateManyMutationInput, SettingsUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Settings updateManyAndReturn
   */
  export type SettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingsUpdateManyMutationInput, SettingsUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Settings upsert
   */
  export type SettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the Settings to update in case it exists.
     */
    where: SettingsWhereUniqueInput
    /**
     * In case the Settings found by the `where` argument doesn't exist, create a new Settings with this data.
     */
    create: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
    /**
     * In case the Settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
  }

  /**
   * Settings delete
   */
  export type SettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter which Settings to delete.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings deleteMany
   */
  export type SettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to delete.
     */
    limit?: number
  }

  /**
   * Settings without action
   */
  export type SettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
  }


  /**
   * Model UploadHistory
   */

  export type AggregateUploadHistory = {
    _count: UploadHistoryCountAggregateOutputType | null
    _avg: UploadHistoryAvgAggregateOutputType | null
    _sum: UploadHistorySumAggregateOutputType | null
    _min: UploadHistoryMinAggregateOutputType | null
    _max: UploadHistoryMaxAggregateOutputType | null
  }

  export type UploadHistoryAvgAggregateOutputType = {
    fileSize: number | null
  }

  export type UploadHistorySumAggregateOutputType = {
    fileSize: number | null
  }

  export type UploadHistoryMinAggregateOutputType = {
    id: string | null
    datasetId: string | null
    fileName: string | null
    fileSize: number | null
    mimeType: string | null
    status: string | null
    errorMessage: string | null
    createdAt: Date | null
  }

  export type UploadHistoryMaxAggregateOutputType = {
    id: string | null
    datasetId: string | null
    fileName: string | null
    fileSize: number | null
    mimeType: string | null
    status: string | null
    errorMessage: string | null
    createdAt: Date | null
  }

  export type UploadHistoryCountAggregateOutputType = {
    id: number
    datasetId: number
    fileName: number
    fileSize: number
    mimeType: number
    status: number
    errorMessage: number
    createdAt: number
    _all: number
  }


  export type UploadHistoryAvgAggregateInputType = {
    fileSize?: true
  }

  export type UploadHistorySumAggregateInputType = {
    fileSize?: true
  }

  export type UploadHistoryMinAggregateInputType = {
    id?: true
    datasetId?: true
    fileName?: true
    fileSize?: true
    mimeType?: true
    status?: true
    errorMessage?: true
    createdAt?: true
  }

  export type UploadHistoryMaxAggregateInputType = {
    id?: true
    datasetId?: true
    fileName?: true
    fileSize?: true
    mimeType?: true
    status?: true
    errorMessage?: true
    createdAt?: true
  }

  export type UploadHistoryCountAggregateInputType = {
    id?: true
    datasetId?: true
    fileName?: true
    fileSize?: true
    mimeType?: true
    status?: true
    errorMessage?: true
    createdAt?: true
    _all?: true
  }

  export type UploadHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UploadHistory to aggregate.
     */
    where?: UploadHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadHistories to fetch.
     */
    orderBy?: UploadHistoryOrderByWithRelationInput | UploadHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UploadHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UploadHistories
    **/
    _count?: true | UploadHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UploadHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UploadHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UploadHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UploadHistoryMaxAggregateInputType
  }

  export type GetUploadHistoryAggregateType<T extends UploadHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateUploadHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUploadHistory[P]>
      : GetScalarType<T[P], AggregateUploadHistory[P]>
  }




  export type UploadHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UploadHistoryWhereInput
    orderBy?: UploadHistoryOrderByWithAggregationInput | UploadHistoryOrderByWithAggregationInput[]
    by: UploadHistoryScalarFieldEnum[] | UploadHistoryScalarFieldEnum
    having?: UploadHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UploadHistoryCountAggregateInputType | true
    _avg?: UploadHistoryAvgAggregateInputType
    _sum?: UploadHistorySumAggregateInputType
    _min?: UploadHistoryMinAggregateInputType
    _max?: UploadHistoryMaxAggregateInputType
  }

  export type UploadHistoryGroupByOutputType = {
    id: string
    datasetId: string
    fileName: string
    fileSize: number
    mimeType: string
    status: string
    errorMessage: string | null
    createdAt: Date
    _count: UploadHistoryCountAggregateOutputType | null
    _avg: UploadHistoryAvgAggregateOutputType | null
    _sum: UploadHistorySumAggregateOutputType | null
    _min: UploadHistoryMinAggregateOutputType | null
    _max: UploadHistoryMaxAggregateOutputType | null
  }

  type GetUploadHistoryGroupByPayload<T extends UploadHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UploadHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UploadHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UploadHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], UploadHistoryGroupByOutputType[P]>
        }
      >
    >


  export type UploadHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    datasetId?: boolean
    fileName?: boolean
    fileSize?: boolean
    mimeType?: boolean
    status?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uploadHistory"]>

  export type UploadHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    datasetId?: boolean
    fileName?: boolean
    fileSize?: boolean
    mimeType?: boolean
    status?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uploadHistory"]>

  export type UploadHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    datasetId?: boolean
    fileName?: boolean
    fileSize?: boolean
    mimeType?: boolean
    status?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uploadHistory"]>

  export type UploadHistorySelectScalar = {
    id?: boolean
    datasetId?: boolean
    fileName?: boolean
    fileSize?: boolean
    mimeType?: boolean
    status?: boolean
    errorMessage?: boolean
    createdAt?: boolean
  }

  export type UploadHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "datasetId" | "fileName" | "fileSize" | "mimeType" | "status" | "errorMessage" | "createdAt", ExtArgs["result"]["uploadHistory"]>
  export type UploadHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
  }
  export type UploadHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
  }
  export type UploadHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
  }

  export type $UploadHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UploadHistory"
    objects: {
      dataset: Prisma.$DatasetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      datasetId: string
      fileName: string
      fileSize: number
      mimeType: string
      status: string
      errorMessage: string | null
      createdAt: Date
    }, ExtArgs["result"]["uploadHistory"]>
    composites: {}
  }

  type UploadHistoryGetPayload<S extends boolean | null | undefined | UploadHistoryDefaultArgs> = $Result.GetResult<Prisma.$UploadHistoryPayload, S>

  type UploadHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UploadHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UploadHistoryCountAggregateInputType | true
    }

  export interface UploadHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UploadHistory'], meta: { name: 'UploadHistory' } }
    /**
     * Find zero or one UploadHistory that matches the filter.
     * @param {UploadHistoryFindUniqueArgs} args - Arguments to find a UploadHistory
     * @example
     * // Get one UploadHistory
     * const uploadHistory = await prisma.uploadHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UploadHistoryFindUniqueArgs>(args: SelectSubset<T, UploadHistoryFindUniqueArgs<ExtArgs>>): Prisma__UploadHistoryClient<$Result.GetResult<Prisma.$UploadHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UploadHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UploadHistoryFindUniqueOrThrowArgs} args - Arguments to find a UploadHistory
     * @example
     * // Get one UploadHistory
     * const uploadHistory = await prisma.uploadHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UploadHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, UploadHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UploadHistoryClient<$Result.GetResult<Prisma.$UploadHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UploadHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadHistoryFindFirstArgs} args - Arguments to find a UploadHistory
     * @example
     * // Get one UploadHistory
     * const uploadHistory = await prisma.uploadHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UploadHistoryFindFirstArgs>(args?: SelectSubset<T, UploadHistoryFindFirstArgs<ExtArgs>>): Prisma__UploadHistoryClient<$Result.GetResult<Prisma.$UploadHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UploadHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadHistoryFindFirstOrThrowArgs} args - Arguments to find a UploadHistory
     * @example
     * // Get one UploadHistory
     * const uploadHistory = await prisma.uploadHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UploadHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, UploadHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__UploadHistoryClient<$Result.GetResult<Prisma.$UploadHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UploadHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UploadHistories
     * const uploadHistories = await prisma.uploadHistory.findMany()
     * 
     * // Get first 10 UploadHistories
     * const uploadHistories = await prisma.uploadHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uploadHistoryWithIdOnly = await prisma.uploadHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UploadHistoryFindManyArgs>(args?: SelectSubset<T, UploadHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UploadHistory.
     * @param {UploadHistoryCreateArgs} args - Arguments to create a UploadHistory.
     * @example
     * // Create one UploadHistory
     * const UploadHistory = await prisma.uploadHistory.create({
     *   data: {
     *     // ... data to create a UploadHistory
     *   }
     * })
     * 
     */
    create<T extends UploadHistoryCreateArgs>(args: SelectSubset<T, UploadHistoryCreateArgs<ExtArgs>>): Prisma__UploadHistoryClient<$Result.GetResult<Prisma.$UploadHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UploadHistories.
     * @param {UploadHistoryCreateManyArgs} args - Arguments to create many UploadHistories.
     * @example
     * // Create many UploadHistories
     * const uploadHistory = await prisma.uploadHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UploadHistoryCreateManyArgs>(args?: SelectSubset<T, UploadHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UploadHistories and returns the data saved in the database.
     * @param {UploadHistoryCreateManyAndReturnArgs} args - Arguments to create many UploadHistories.
     * @example
     * // Create many UploadHistories
     * const uploadHistory = await prisma.uploadHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UploadHistories and only return the `id`
     * const uploadHistoryWithIdOnly = await prisma.uploadHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UploadHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, UploadHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UploadHistory.
     * @param {UploadHistoryDeleteArgs} args - Arguments to delete one UploadHistory.
     * @example
     * // Delete one UploadHistory
     * const UploadHistory = await prisma.uploadHistory.delete({
     *   where: {
     *     // ... filter to delete one UploadHistory
     *   }
     * })
     * 
     */
    delete<T extends UploadHistoryDeleteArgs>(args: SelectSubset<T, UploadHistoryDeleteArgs<ExtArgs>>): Prisma__UploadHistoryClient<$Result.GetResult<Prisma.$UploadHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UploadHistory.
     * @param {UploadHistoryUpdateArgs} args - Arguments to update one UploadHistory.
     * @example
     * // Update one UploadHistory
     * const uploadHistory = await prisma.uploadHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UploadHistoryUpdateArgs>(args: SelectSubset<T, UploadHistoryUpdateArgs<ExtArgs>>): Prisma__UploadHistoryClient<$Result.GetResult<Prisma.$UploadHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UploadHistories.
     * @param {UploadHistoryDeleteManyArgs} args - Arguments to filter UploadHistories to delete.
     * @example
     * // Delete a few UploadHistories
     * const { count } = await prisma.uploadHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UploadHistoryDeleteManyArgs>(args?: SelectSubset<T, UploadHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UploadHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UploadHistories
     * const uploadHistory = await prisma.uploadHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UploadHistoryUpdateManyArgs>(args: SelectSubset<T, UploadHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UploadHistories and returns the data updated in the database.
     * @param {UploadHistoryUpdateManyAndReturnArgs} args - Arguments to update many UploadHistories.
     * @example
     * // Update many UploadHistories
     * const uploadHistory = await prisma.uploadHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UploadHistories and only return the `id`
     * const uploadHistoryWithIdOnly = await prisma.uploadHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends UploadHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, UploadHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UploadHistory.
     * @param {UploadHistoryUpsertArgs} args - Arguments to update or create a UploadHistory.
     * @example
     * // Update or create a UploadHistory
     * const uploadHistory = await prisma.uploadHistory.upsert({
     *   create: {
     *     // ... data to create a UploadHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UploadHistory we want to update
     *   }
     * })
     */
    upsert<T extends UploadHistoryUpsertArgs>(args: SelectSubset<T, UploadHistoryUpsertArgs<ExtArgs>>): Prisma__UploadHistoryClient<$Result.GetResult<Prisma.$UploadHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UploadHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadHistoryCountArgs} args - Arguments to filter UploadHistories to count.
     * @example
     * // Count the number of UploadHistories
     * const count = await prisma.uploadHistory.count({
     *   where: {
     *     // ... the filter for the UploadHistories we want to count
     *   }
     * })
    **/
    count<T extends UploadHistoryCountArgs>(
      args?: Subset<T, UploadHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UploadHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UploadHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UploadHistoryAggregateArgs>(args: Subset<T, UploadHistoryAggregateArgs>): Prisma.PrismaPromise<GetUploadHistoryAggregateType<T>>

    /**
     * Group by UploadHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadHistoryGroupByArgs} args - Group by arguments.
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
      T extends UploadHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UploadHistoryGroupByArgs['orderBy'] }
        : { orderBy?: UploadHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UploadHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUploadHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UploadHistory model
   */
  readonly fields: UploadHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UploadHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UploadHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dataset<T extends DatasetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DatasetDefaultArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UploadHistory model
   */
  interface UploadHistoryFieldRefs {
    readonly id: FieldRef<"UploadHistory", 'String'>
    readonly datasetId: FieldRef<"UploadHistory", 'String'>
    readonly fileName: FieldRef<"UploadHistory", 'String'>
    readonly fileSize: FieldRef<"UploadHistory", 'Int'>
    readonly mimeType: FieldRef<"UploadHistory", 'String'>
    readonly status: FieldRef<"UploadHistory", 'String'>
    readonly errorMessage: FieldRef<"UploadHistory", 'String'>
    readonly createdAt: FieldRef<"UploadHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UploadHistory findUnique
   */
  export type UploadHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadHistory
     */
    select?: UploadHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadHistory
     */
    omit?: UploadHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadHistoryInclude<ExtArgs> | null
    /**
     * Filter, which UploadHistory to fetch.
     */
    where: UploadHistoryWhereUniqueInput
  }

  /**
   * UploadHistory findUniqueOrThrow
   */
  export type UploadHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadHistory
     */
    select?: UploadHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadHistory
     */
    omit?: UploadHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadHistoryInclude<ExtArgs> | null
    /**
     * Filter, which UploadHistory to fetch.
     */
    where: UploadHistoryWhereUniqueInput
  }

  /**
   * UploadHistory findFirst
   */
  export type UploadHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadHistory
     */
    select?: UploadHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadHistory
     */
    omit?: UploadHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadHistoryInclude<ExtArgs> | null
    /**
     * Filter, which UploadHistory to fetch.
     */
    where?: UploadHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadHistories to fetch.
     */
    orderBy?: UploadHistoryOrderByWithRelationInput | UploadHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UploadHistories.
     */
    cursor?: UploadHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UploadHistories.
     */
    distinct?: UploadHistoryScalarFieldEnum | UploadHistoryScalarFieldEnum[]
  }

  /**
   * UploadHistory findFirstOrThrow
   */
  export type UploadHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadHistory
     */
    select?: UploadHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadHistory
     */
    omit?: UploadHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadHistoryInclude<ExtArgs> | null
    /**
     * Filter, which UploadHistory to fetch.
     */
    where?: UploadHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadHistories to fetch.
     */
    orderBy?: UploadHistoryOrderByWithRelationInput | UploadHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UploadHistories.
     */
    cursor?: UploadHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UploadHistories.
     */
    distinct?: UploadHistoryScalarFieldEnum | UploadHistoryScalarFieldEnum[]
  }

  /**
   * UploadHistory findMany
   */
  export type UploadHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadHistory
     */
    select?: UploadHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadHistory
     */
    omit?: UploadHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadHistoryInclude<ExtArgs> | null
    /**
     * Filter, which UploadHistories to fetch.
     */
    where?: UploadHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadHistories to fetch.
     */
    orderBy?: UploadHistoryOrderByWithRelationInput | UploadHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UploadHistories.
     */
    cursor?: UploadHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadHistories.
     */
    skip?: number
    distinct?: UploadHistoryScalarFieldEnum | UploadHistoryScalarFieldEnum[]
  }

  /**
   * UploadHistory create
   */
  export type UploadHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadHistory
     */
    select?: UploadHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadHistory
     */
    omit?: UploadHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a UploadHistory.
     */
    data: XOR<UploadHistoryCreateInput, UploadHistoryUncheckedCreateInput>
  }

  /**
   * UploadHistory createMany
   */
  export type UploadHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UploadHistories.
     */
    data: UploadHistoryCreateManyInput | UploadHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UploadHistory createManyAndReturn
   */
  export type UploadHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadHistory
     */
    select?: UploadHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UploadHistory
     */
    omit?: UploadHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many UploadHistories.
     */
    data: UploadHistoryCreateManyInput | UploadHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UploadHistory update
   */
  export type UploadHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadHistory
     */
    select?: UploadHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadHistory
     */
    omit?: UploadHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a UploadHistory.
     */
    data: XOR<UploadHistoryUpdateInput, UploadHistoryUncheckedUpdateInput>
    /**
     * Choose, which UploadHistory to update.
     */
    where: UploadHistoryWhereUniqueInput
  }

  /**
   * UploadHistory updateMany
   */
  export type UploadHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UploadHistories.
     */
    data: XOR<UploadHistoryUpdateManyMutationInput, UploadHistoryUncheckedUpdateManyInput>
    /**
     * Filter which UploadHistories to update
     */
    where?: UploadHistoryWhereInput
    /**
     * Limit how many UploadHistories to update.
     */
    limit?: number
  }

  /**
   * UploadHistory updateManyAndReturn
   */
  export type UploadHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadHistory
     */
    select?: UploadHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UploadHistory
     */
    omit?: UploadHistoryOmit<ExtArgs> | null
    /**
     * The data used to update UploadHistories.
     */
    data: XOR<UploadHistoryUpdateManyMutationInput, UploadHistoryUncheckedUpdateManyInput>
    /**
     * Filter which UploadHistories to update
     */
    where?: UploadHistoryWhereInput
    /**
     * Limit how many UploadHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UploadHistory upsert
   */
  export type UploadHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadHistory
     */
    select?: UploadHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadHistory
     */
    omit?: UploadHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the UploadHistory to update in case it exists.
     */
    where: UploadHistoryWhereUniqueInput
    /**
     * In case the UploadHistory found by the `where` argument doesn't exist, create a new UploadHistory with this data.
     */
    create: XOR<UploadHistoryCreateInput, UploadHistoryUncheckedCreateInput>
    /**
     * In case the UploadHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UploadHistoryUpdateInput, UploadHistoryUncheckedUpdateInput>
  }

  /**
   * UploadHistory delete
   */
  export type UploadHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadHistory
     */
    select?: UploadHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadHistory
     */
    omit?: UploadHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadHistoryInclude<ExtArgs> | null
    /**
     * Filter which UploadHistory to delete.
     */
    where: UploadHistoryWhereUniqueInput
  }

  /**
   * UploadHistory deleteMany
   */
  export type UploadHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UploadHistories to delete
     */
    where?: UploadHistoryWhereInput
    /**
     * Limit how many UploadHistories to delete.
     */
    limit?: number
  }

  /**
   * UploadHistory without action
   */
  export type UploadHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadHistory
     */
    select?: UploadHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadHistory
     */
    omit?: UploadHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadHistoryInclude<ExtArgs> | null
  }


  /**
   * Model ActivityLog
   */

  export type AggregateActivityLog = {
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  export type ActivityLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    details: string | null
    ipAddress: string | null
    createdAt: Date | null
  }

  export type ActivityLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    details: string | null
    ipAddress: string | null
    createdAt: Date | null
  }

  export type ActivityLogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    details: number
    ipAddress: number
    createdAt: number
    _all: number
  }


  export type ActivityLogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    details?: true
    ipAddress?: true
    createdAt?: true
  }

  export type ActivityLogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    details?: true
    ipAddress?: true
    createdAt?: true
  }

  export type ActivityLogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    details?: true
    ipAddress?: true
    createdAt?: true
    _all?: true
  }

  export type ActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLog to aggregate.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityLogs
    **/
    _count?: true | ActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityLogMaxAggregateInputType
  }

  export type GetActivityLogAggregateType<T extends ActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityLog[P]>
      : GetScalarType<T[P], AggregateActivityLog[P]>
  }




  export type ActivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithAggregationInput | ActivityLogOrderByWithAggregationInput[]
    by: ActivityLogScalarFieldEnum[] | ActivityLogScalarFieldEnum
    having?: ActivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityLogCountAggregateInputType | true
    _min?: ActivityLogMinAggregateInputType
    _max?: ActivityLogMaxAggregateInputType
  }

  export type ActivityLogGroupByOutputType = {
    id: string
    userId: string
    action: string
    details: string | null
    ipAddress: string | null
    createdAt: Date
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  type GetActivityLogGroupByPayload<T extends ActivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type ActivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    details?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    details?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    details?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    details?: boolean
    ipAddress?: boolean
    createdAt?: boolean
  }

  export type ActivityLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "action" | "details" | "ipAddress" | "createdAt", ExtArgs["result"]["activityLog"]>
  export type ActivityLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ActivityLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ActivityLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      action: string
      details: string | null
      ipAddress: string | null
      createdAt: Date
    }, ExtArgs["result"]["activityLog"]>
    composites: {}
  }

  type ActivityLogGetPayload<S extends boolean | null | undefined | ActivityLogDefaultArgs> = $Result.GetResult<Prisma.$ActivityLogPayload, S>

  type ActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityLogCountAggregateInputType | true
    }

  export interface ActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityLog'], meta: { name: 'ActivityLog' } }
    /**
     * Find zero or one ActivityLog that matches the filter.
     * @param {ActivityLogFindUniqueArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityLogFindUniqueArgs>(args: SelectSubset<T, ActivityLogFindUniqueArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityLogFindUniqueOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityLogFindFirstArgs>(args?: SelectSubset<T, ActivityLogFindFirstArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany()
     * 
     * // Get first 10 ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityLogFindManyArgs>(args?: SelectSubset<T, ActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityLog.
     * @param {ActivityLogCreateArgs} args - Arguments to create a ActivityLog.
     * @example
     * // Create one ActivityLog
     * const ActivityLog = await prisma.activityLog.create({
     *   data: {
     *     // ... data to create a ActivityLog
     *   }
     * })
     * 
     */
    create<T extends ActivityLogCreateArgs>(args: SelectSubset<T, ActivityLogCreateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityLogs.
     * @param {ActivityLogCreateManyArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityLogCreateManyArgs>(args?: SelectSubset<T, ActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityLogs and returns the data saved in the database.
     * @param {ActivityLogCreateManyAndReturnArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivityLog.
     * @param {ActivityLogDeleteArgs} args - Arguments to delete one ActivityLog.
     * @example
     * // Delete one ActivityLog
     * const ActivityLog = await prisma.activityLog.delete({
     *   where: {
     *     // ... filter to delete one ActivityLog
     *   }
     * })
     * 
     */
    delete<T extends ActivityLogDeleteArgs>(args: SelectSubset<T, ActivityLogDeleteArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityLog.
     * @param {ActivityLogUpdateArgs} args - Arguments to update one ActivityLog.
     * @example
     * // Update one ActivityLog
     * const activityLog = await prisma.activityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityLogUpdateArgs>(args: SelectSubset<T, ActivityLogUpdateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityLogs.
     * @param {ActivityLogDeleteManyArgs} args - Arguments to filter ActivityLogs to delete.
     * @example
     * // Delete a few ActivityLogs
     * const { count } = await prisma.activityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityLogDeleteManyArgs>(args?: SelectSubset<T, ActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityLogUpdateManyArgs>(args: SelectSubset<T, ActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs and returns the data updated in the database.
     * @param {ActivityLogUpdateManyAndReturnArgs} args - Arguments to update many ActivityLogs.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends ActivityLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivityLog.
     * @param {ActivityLogUpsertArgs} args - Arguments to update or create a ActivityLog.
     * @example
     * // Update or create a ActivityLog
     * const activityLog = await prisma.activityLog.upsert({
     *   create: {
     *     // ... data to create a ActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends ActivityLogUpsertArgs>(args: SelectSubset<T, ActivityLogUpsertArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogCountArgs} args - Arguments to filter ActivityLogs to count.
     * @example
     * // Count the number of ActivityLogs
     * const count = await prisma.activityLog.count({
     *   where: {
     *     // ... the filter for the ActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends ActivityLogCountArgs>(
      args?: Subset<T, ActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityLogAggregateArgs>(args: Subset<T, ActivityLogAggregateArgs>): Prisma.PrismaPromise<GetActivityLogAggregateType<T>>

    /**
     * Group by ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogGroupByArgs} args - Group by arguments.
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
      T extends ActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: ActivityLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityLog model
   */
  readonly fields: ActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ActivityLog model
   */
  interface ActivityLogFieldRefs {
    readonly id: FieldRef<"ActivityLog", 'String'>
    readonly userId: FieldRef<"ActivityLog", 'String'>
    readonly action: FieldRef<"ActivityLog", 'String'>
    readonly details: FieldRef<"ActivityLog", 'String'>
    readonly ipAddress: FieldRef<"ActivityLog", 'String'>
    readonly createdAt: FieldRef<"ActivityLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivityLog findUnique
   */
  export type ActivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findUniqueOrThrow
   */
  export type ActivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findFirst
   */
  export type ActivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findFirstOrThrow
   */
  export type ActivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findMany
   */
  export type ActivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLogs to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog create
   */
  export type ActivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityLog.
     */
    data: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
  }

  /**
   * ActivityLog createMany
   */
  export type ActivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityLog createManyAndReturn
   */
  export type ActivityLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog update
   */
  export type ActivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityLog.
     */
    data: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
    /**
     * Choose, which ActivityLog to update.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog updateMany
   */
  export type ActivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
  }

  /**
   * ActivityLog updateManyAndReturn
   */
  export type ActivityLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog upsert
   */
  export type ActivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityLog to update in case it exists.
     */
    where: ActivityLogWhereUniqueInput
    /**
     * In case the ActivityLog found by the `where` argument doesn't exist, create a new ActivityLog with this data.
     */
    create: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
    /**
     * In case the ActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
  }

  /**
   * ActivityLog delete
   */
  export type ActivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter which ActivityLog to delete.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog deleteMany
   */
  export type ActivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLogs to delete
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to delete.
     */
    limit?: number
  }

  /**
   * ActivityLog without action
   */
  export type ActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DatasetScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    originalName: 'originalName',
    tableName: 'tableName',
    status: 'status',
    rowCount: 'rowCount',
    sizeBytes: 'sizeBytes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DatasetScalarFieldEnum = (typeof DatasetScalarFieldEnum)[keyof typeof DatasetScalarFieldEnum]


  export const DatasetColumnScalarFieldEnum: {
    id: 'id',
    datasetId: 'datasetId',
    name: 'name',
    type: 'type',
    isNullable: 'isNullable',
    isUnique: 'isUnique',
    isPrimaryKey: 'isPrimaryKey',
    min: 'min',
    max: 'max',
    average: 'average',
    median: 'median',
    nullCount: 'nullCount',
    uniqueCount: 'uniqueCount'
  };

  export type DatasetColumnScalarFieldEnum = (typeof DatasetColumnScalarFieldEnum)[keyof typeof DatasetColumnScalarFieldEnum]


  export const QueryHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    datasetId: 'datasetId',
    prompt: 'prompt',
    sqlQuery: 'sqlQuery',
    executionTime: 'executionTime',
    rowsReturned: 'rowsReturned',
    isFavorite: 'isFavorite',
    createdAt: 'createdAt'
  };

  export type QueryHistoryScalarFieldEnum = (typeof QueryHistoryScalarFieldEnum)[keyof typeof QueryHistoryScalarFieldEnum]


  export const ChatHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    datasetId: 'datasetId',
    role: 'role',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type ChatHistoryScalarFieldEnum = (typeof ChatHistoryScalarFieldEnum)[keyof typeof ChatHistoryScalarFieldEnum]


  export const InsightScalarFieldEnum: {
    id: 'id',
    datasetId: 'datasetId',
    title: 'title',
    description: 'description',
    type: 'type',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type InsightScalarFieldEnum = (typeof InsightScalarFieldEnum)[keyof typeof InsightScalarFieldEnum]


  export const SettingsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    theme: 'theme',
    language: 'language',
    aiModel: 'aiModel',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SettingsScalarFieldEnum = (typeof SettingsScalarFieldEnum)[keyof typeof SettingsScalarFieldEnum]


  export const UploadHistoryScalarFieldEnum: {
    id: 'id',
    datasetId: 'datasetId',
    fileName: 'fileName',
    fileSize: 'fileSize',
    mimeType: 'mimeType',
    status: 'status',
    errorMessage: 'errorMessage',
    createdAt: 'createdAt'
  };

  export type UploadHistoryScalarFieldEnum = (typeof UploadHistoryScalarFieldEnum)[keyof typeof UploadHistoryScalarFieldEnum]


  export const ActivityLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    details: 'details',
    ipAddress: 'ipAddress',
    createdAt: 'createdAt'
  };

  export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    datasets?: DatasetListRelationFilter
    queryHistories?: QueryHistoryListRelationFilter
    chatHistories?: ChatHistoryListRelationFilter
    settings?: XOR<SettingsNullableScalarRelationFilter, SettingsWhereInput> | null
    activityLogs?: ActivityLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    datasets?: DatasetOrderByRelationAggregateInput
    queryHistories?: QueryHistoryOrderByRelationAggregateInput
    chatHistories?: ChatHistoryOrderByRelationAggregateInput
    settings?: SettingsOrderByWithRelationInput
    activityLogs?: ActivityLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    datasets?: DatasetListRelationFilter
    queryHistories?: QueryHistoryListRelationFilter
    chatHistories?: ChatHistoryListRelationFilter
    settings?: XOR<SettingsNullableScalarRelationFilter, SettingsWhereInput> | null
    activityLogs?: ActivityLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DatasetWhereInput = {
    AND?: DatasetWhereInput | DatasetWhereInput[]
    OR?: DatasetWhereInput[]
    NOT?: DatasetWhereInput | DatasetWhereInput[]
    id?: StringFilter<"Dataset"> | string
    userId?: StringFilter<"Dataset"> | string
    originalName?: StringFilter<"Dataset"> | string
    tableName?: StringFilter<"Dataset"> | string
    status?: StringFilter<"Dataset"> | string
    rowCount?: IntFilter<"Dataset"> | number
    sizeBytes?: IntFilter<"Dataset"> | number
    createdAt?: DateTimeFilter<"Dataset"> | Date | string
    updatedAt?: DateTimeFilter<"Dataset"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    columns?: DatasetColumnListRelationFilter
    queryHistories?: QueryHistoryListRelationFilter
    chatHistories?: ChatHistoryListRelationFilter
    insights?: InsightListRelationFilter
    uploadHistory?: XOR<UploadHistoryNullableScalarRelationFilter, UploadHistoryWhereInput> | null
  }

  export type DatasetOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    originalName?: SortOrder
    tableName?: SortOrder
    status?: SortOrder
    rowCount?: SortOrder
    sizeBytes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    columns?: DatasetColumnOrderByRelationAggregateInput
    queryHistories?: QueryHistoryOrderByRelationAggregateInput
    chatHistories?: ChatHistoryOrderByRelationAggregateInput
    insights?: InsightOrderByRelationAggregateInput
    uploadHistory?: UploadHistoryOrderByWithRelationInput
  }

  export type DatasetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tableName?: string
    AND?: DatasetWhereInput | DatasetWhereInput[]
    OR?: DatasetWhereInput[]
    NOT?: DatasetWhereInput | DatasetWhereInput[]
    userId?: StringFilter<"Dataset"> | string
    originalName?: StringFilter<"Dataset"> | string
    status?: StringFilter<"Dataset"> | string
    rowCount?: IntFilter<"Dataset"> | number
    sizeBytes?: IntFilter<"Dataset"> | number
    createdAt?: DateTimeFilter<"Dataset"> | Date | string
    updatedAt?: DateTimeFilter<"Dataset"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    columns?: DatasetColumnListRelationFilter
    queryHistories?: QueryHistoryListRelationFilter
    chatHistories?: ChatHistoryListRelationFilter
    insights?: InsightListRelationFilter
    uploadHistory?: XOR<UploadHistoryNullableScalarRelationFilter, UploadHistoryWhereInput> | null
  }, "id" | "tableName">

  export type DatasetOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    originalName?: SortOrder
    tableName?: SortOrder
    status?: SortOrder
    rowCount?: SortOrder
    sizeBytes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DatasetCountOrderByAggregateInput
    _avg?: DatasetAvgOrderByAggregateInput
    _max?: DatasetMaxOrderByAggregateInput
    _min?: DatasetMinOrderByAggregateInput
    _sum?: DatasetSumOrderByAggregateInput
  }

  export type DatasetScalarWhereWithAggregatesInput = {
    AND?: DatasetScalarWhereWithAggregatesInput | DatasetScalarWhereWithAggregatesInput[]
    OR?: DatasetScalarWhereWithAggregatesInput[]
    NOT?: DatasetScalarWhereWithAggregatesInput | DatasetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dataset"> | string
    userId?: StringWithAggregatesFilter<"Dataset"> | string
    originalName?: StringWithAggregatesFilter<"Dataset"> | string
    tableName?: StringWithAggregatesFilter<"Dataset"> | string
    status?: StringWithAggregatesFilter<"Dataset"> | string
    rowCount?: IntWithAggregatesFilter<"Dataset"> | number
    sizeBytes?: IntWithAggregatesFilter<"Dataset"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Dataset"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Dataset"> | Date | string
  }

  export type DatasetColumnWhereInput = {
    AND?: DatasetColumnWhereInput | DatasetColumnWhereInput[]
    OR?: DatasetColumnWhereInput[]
    NOT?: DatasetColumnWhereInput | DatasetColumnWhereInput[]
    id?: StringFilter<"DatasetColumn"> | string
    datasetId?: StringFilter<"DatasetColumn"> | string
    name?: StringFilter<"DatasetColumn"> | string
    type?: StringFilter<"DatasetColumn"> | string
    isNullable?: BoolFilter<"DatasetColumn"> | boolean
    isUnique?: BoolFilter<"DatasetColumn"> | boolean
    isPrimaryKey?: BoolFilter<"DatasetColumn"> | boolean
    min?: StringNullableFilter<"DatasetColumn"> | string | null
    max?: StringNullableFilter<"DatasetColumn"> | string | null
    average?: FloatNullableFilter<"DatasetColumn"> | number | null
    median?: FloatNullableFilter<"DatasetColumn"> | number | null
    nullCount?: IntFilter<"DatasetColumn"> | number
    uniqueCount?: IntFilter<"DatasetColumn"> | number
    dataset?: XOR<DatasetScalarRelationFilter, DatasetWhereInput>
  }

  export type DatasetColumnOrderByWithRelationInput = {
    id?: SortOrder
    datasetId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    isNullable?: SortOrder
    isUnique?: SortOrder
    isPrimaryKey?: SortOrder
    min?: SortOrderInput | SortOrder
    max?: SortOrderInput | SortOrder
    average?: SortOrderInput | SortOrder
    median?: SortOrderInput | SortOrder
    nullCount?: SortOrder
    uniqueCount?: SortOrder
    dataset?: DatasetOrderByWithRelationInput
  }

  export type DatasetColumnWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DatasetColumnWhereInput | DatasetColumnWhereInput[]
    OR?: DatasetColumnWhereInput[]
    NOT?: DatasetColumnWhereInput | DatasetColumnWhereInput[]
    datasetId?: StringFilter<"DatasetColumn"> | string
    name?: StringFilter<"DatasetColumn"> | string
    type?: StringFilter<"DatasetColumn"> | string
    isNullable?: BoolFilter<"DatasetColumn"> | boolean
    isUnique?: BoolFilter<"DatasetColumn"> | boolean
    isPrimaryKey?: BoolFilter<"DatasetColumn"> | boolean
    min?: StringNullableFilter<"DatasetColumn"> | string | null
    max?: StringNullableFilter<"DatasetColumn"> | string | null
    average?: FloatNullableFilter<"DatasetColumn"> | number | null
    median?: FloatNullableFilter<"DatasetColumn"> | number | null
    nullCount?: IntFilter<"DatasetColumn"> | number
    uniqueCount?: IntFilter<"DatasetColumn"> | number
    dataset?: XOR<DatasetScalarRelationFilter, DatasetWhereInput>
  }, "id">

  export type DatasetColumnOrderByWithAggregationInput = {
    id?: SortOrder
    datasetId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    isNullable?: SortOrder
    isUnique?: SortOrder
    isPrimaryKey?: SortOrder
    min?: SortOrderInput | SortOrder
    max?: SortOrderInput | SortOrder
    average?: SortOrderInput | SortOrder
    median?: SortOrderInput | SortOrder
    nullCount?: SortOrder
    uniqueCount?: SortOrder
    _count?: DatasetColumnCountOrderByAggregateInput
    _avg?: DatasetColumnAvgOrderByAggregateInput
    _max?: DatasetColumnMaxOrderByAggregateInput
    _min?: DatasetColumnMinOrderByAggregateInput
    _sum?: DatasetColumnSumOrderByAggregateInput
  }

  export type DatasetColumnScalarWhereWithAggregatesInput = {
    AND?: DatasetColumnScalarWhereWithAggregatesInput | DatasetColumnScalarWhereWithAggregatesInput[]
    OR?: DatasetColumnScalarWhereWithAggregatesInput[]
    NOT?: DatasetColumnScalarWhereWithAggregatesInput | DatasetColumnScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DatasetColumn"> | string
    datasetId?: StringWithAggregatesFilter<"DatasetColumn"> | string
    name?: StringWithAggregatesFilter<"DatasetColumn"> | string
    type?: StringWithAggregatesFilter<"DatasetColumn"> | string
    isNullable?: BoolWithAggregatesFilter<"DatasetColumn"> | boolean
    isUnique?: BoolWithAggregatesFilter<"DatasetColumn"> | boolean
    isPrimaryKey?: BoolWithAggregatesFilter<"DatasetColumn"> | boolean
    min?: StringNullableWithAggregatesFilter<"DatasetColumn"> | string | null
    max?: StringNullableWithAggregatesFilter<"DatasetColumn"> | string | null
    average?: FloatNullableWithAggregatesFilter<"DatasetColumn"> | number | null
    median?: FloatNullableWithAggregatesFilter<"DatasetColumn"> | number | null
    nullCount?: IntWithAggregatesFilter<"DatasetColumn"> | number
    uniqueCount?: IntWithAggregatesFilter<"DatasetColumn"> | number
  }

  export type QueryHistoryWhereInput = {
    AND?: QueryHistoryWhereInput | QueryHistoryWhereInput[]
    OR?: QueryHistoryWhereInput[]
    NOT?: QueryHistoryWhereInput | QueryHistoryWhereInput[]
    id?: StringFilter<"QueryHistory"> | string
    userId?: StringFilter<"QueryHistory"> | string
    datasetId?: StringFilter<"QueryHistory"> | string
    prompt?: StringNullableFilter<"QueryHistory"> | string | null
    sqlQuery?: StringFilter<"QueryHistory"> | string
    executionTime?: IntFilter<"QueryHistory"> | number
    rowsReturned?: IntFilter<"QueryHistory"> | number
    isFavorite?: BoolFilter<"QueryHistory"> | boolean
    createdAt?: DateTimeFilter<"QueryHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    dataset?: XOR<DatasetScalarRelationFilter, DatasetWhereInput>
  }

  export type QueryHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    datasetId?: SortOrder
    prompt?: SortOrderInput | SortOrder
    sqlQuery?: SortOrder
    executionTime?: SortOrder
    rowsReturned?: SortOrder
    isFavorite?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    dataset?: DatasetOrderByWithRelationInput
  }

  export type QueryHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QueryHistoryWhereInput | QueryHistoryWhereInput[]
    OR?: QueryHistoryWhereInput[]
    NOT?: QueryHistoryWhereInput | QueryHistoryWhereInput[]
    userId?: StringFilter<"QueryHistory"> | string
    datasetId?: StringFilter<"QueryHistory"> | string
    prompt?: StringNullableFilter<"QueryHistory"> | string | null
    sqlQuery?: StringFilter<"QueryHistory"> | string
    executionTime?: IntFilter<"QueryHistory"> | number
    rowsReturned?: IntFilter<"QueryHistory"> | number
    isFavorite?: BoolFilter<"QueryHistory"> | boolean
    createdAt?: DateTimeFilter<"QueryHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    dataset?: XOR<DatasetScalarRelationFilter, DatasetWhereInput>
  }, "id">

  export type QueryHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    datasetId?: SortOrder
    prompt?: SortOrderInput | SortOrder
    sqlQuery?: SortOrder
    executionTime?: SortOrder
    rowsReturned?: SortOrder
    isFavorite?: SortOrder
    createdAt?: SortOrder
    _count?: QueryHistoryCountOrderByAggregateInput
    _avg?: QueryHistoryAvgOrderByAggregateInput
    _max?: QueryHistoryMaxOrderByAggregateInput
    _min?: QueryHistoryMinOrderByAggregateInput
    _sum?: QueryHistorySumOrderByAggregateInput
  }

  export type QueryHistoryScalarWhereWithAggregatesInput = {
    AND?: QueryHistoryScalarWhereWithAggregatesInput | QueryHistoryScalarWhereWithAggregatesInput[]
    OR?: QueryHistoryScalarWhereWithAggregatesInput[]
    NOT?: QueryHistoryScalarWhereWithAggregatesInput | QueryHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QueryHistory"> | string
    userId?: StringWithAggregatesFilter<"QueryHistory"> | string
    datasetId?: StringWithAggregatesFilter<"QueryHistory"> | string
    prompt?: StringNullableWithAggregatesFilter<"QueryHistory"> | string | null
    sqlQuery?: StringWithAggregatesFilter<"QueryHistory"> | string
    executionTime?: IntWithAggregatesFilter<"QueryHistory"> | number
    rowsReturned?: IntWithAggregatesFilter<"QueryHistory"> | number
    isFavorite?: BoolWithAggregatesFilter<"QueryHistory"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"QueryHistory"> | Date | string
  }

  export type ChatHistoryWhereInput = {
    AND?: ChatHistoryWhereInput | ChatHistoryWhereInput[]
    OR?: ChatHistoryWhereInput[]
    NOT?: ChatHistoryWhereInput | ChatHistoryWhereInput[]
    id?: StringFilter<"ChatHistory"> | string
    userId?: StringFilter<"ChatHistory"> | string
    datasetId?: StringFilter<"ChatHistory"> | string
    role?: StringFilter<"ChatHistory"> | string
    content?: StringFilter<"ChatHistory"> | string
    createdAt?: DateTimeFilter<"ChatHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    dataset?: XOR<DatasetScalarRelationFilter, DatasetWhereInput>
  }

  export type ChatHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    datasetId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    dataset?: DatasetOrderByWithRelationInput
  }

  export type ChatHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatHistoryWhereInput | ChatHistoryWhereInput[]
    OR?: ChatHistoryWhereInput[]
    NOT?: ChatHistoryWhereInput | ChatHistoryWhereInput[]
    userId?: StringFilter<"ChatHistory"> | string
    datasetId?: StringFilter<"ChatHistory"> | string
    role?: StringFilter<"ChatHistory"> | string
    content?: StringFilter<"ChatHistory"> | string
    createdAt?: DateTimeFilter<"ChatHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    dataset?: XOR<DatasetScalarRelationFilter, DatasetWhereInput>
  }, "id">

  export type ChatHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    datasetId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: ChatHistoryCountOrderByAggregateInput
    _max?: ChatHistoryMaxOrderByAggregateInput
    _min?: ChatHistoryMinOrderByAggregateInput
  }

  export type ChatHistoryScalarWhereWithAggregatesInput = {
    AND?: ChatHistoryScalarWhereWithAggregatesInput | ChatHistoryScalarWhereWithAggregatesInput[]
    OR?: ChatHistoryScalarWhereWithAggregatesInput[]
    NOT?: ChatHistoryScalarWhereWithAggregatesInput | ChatHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatHistory"> | string
    userId?: StringWithAggregatesFilter<"ChatHistory"> | string
    datasetId?: StringWithAggregatesFilter<"ChatHistory"> | string
    role?: StringWithAggregatesFilter<"ChatHistory"> | string
    content?: StringWithAggregatesFilter<"ChatHistory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatHistory"> | Date | string
  }

  export type InsightWhereInput = {
    AND?: InsightWhereInput | InsightWhereInput[]
    OR?: InsightWhereInput[]
    NOT?: InsightWhereInput | InsightWhereInput[]
    id?: StringFilter<"Insight"> | string
    datasetId?: StringFilter<"Insight"> | string
    title?: StringFilter<"Insight"> | string
    description?: StringFilter<"Insight"> | string
    type?: StringFilter<"Insight"> | string
    content?: JsonNullableFilter<"Insight">
    createdAt?: DateTimeFilter<"Insight"> | Date | string
    dataset?: XOR<DatasetScalarRelationFilter, DatasetWhereInput>
  }

  export type InsightOrderByWithRelationInput = {
    id?: SortOrder
    datasetId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    content?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    dataset?: DatasetOrderByWithRelationInput
  }

  export type InsightWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InsightWhereInput | InsightWhereInput[]
    OR?: InsightWhereInput[]
    NOT?: InsightWhereInput | InsightWhereInput[]
    datasetId?: StringFilter<"Insight"> | string
    title?: StringFilter<"Insight"> | string
    description?: StringFilter<"Insight"> | string
    type?: StringFilter<"Insight"> | string
    content?: JsonNullableFilter<"Insight">
    createdAt?: DateTimeFilter<"Insight"> | Date | string
    dataset?: XOR<DatasetScalarRelationFilter, DatasetWhereInput>
  }, "id">

  export type InsightOrderByWithAggregationInput = {
    id?: SortOrder
    datasetId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    content?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: InsightCountOrderByAggregateInput
    _max?: InsightMaxOrderByAggregateInput
    _min?: InsightMinOrderByAggregateInput
  }

  export type InsightScalarWhereWithAggregatesInput = {
    AND?: InsightScalarWhereWithAggregatesInput | InsightScalarWhereWithAggregatesInput[]
    OR?: InsightScalarWhereWithAggregatesInput[]
    NOT?: InsightScalarWhereWithAggregatesInput | InsightScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Insight"> | string
    datasetId?: StringWithAggregatesFilter<"Insight"> | string
    title?: StringWithAggregatesFilter<"Insight"> | string
    description?: StringWithAggregatesFilter<"Insight"> | string
    type?: StringWithAggregatesFilter<"Insight"> | string
    content?: JsonNullableWithAggregatesFilter<"Insight">
    createdAt?: DateTimeWithAggregatesFilter<"Insight"> | Date | string
  }

  export type SettingsWhereInput = {
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    id?: StringFilter<"Settings"> | string
    userId?: StringFilter<"Settings"> | string
    theme?: StringFilter<"Settings"> | string
    language?: StringFilter<"Settings"> | string
    aiModel?: StringFilter<"Settings"> | string
    createdAt?: DateTimeFilter<"Settings"> | Date | string
    updatedAt?: DateTimeFilter<"Settings"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SettingsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    theme?: SortOrder
    language?: SortOrder
    aiModel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    theme?: StringFilter<"Settings"> | string
    language?: StringFilter<"Settings"> | string
    aiModel?: StringFilter<"Settings"> | string
    createdAt?: DateTimeFilter<"Settings"> | Date | string
    updatedAt?: DateTimeFilter<"Settings"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type SettingsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    theme?: SortOrder
    language?: SortOrder
    aiModel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SettingsCountOrderByAggregateInput
    _max?: SettingsMaxOrderByAggregateInput
    _min?: SettingsMinOrderByAggregateInput
  }

  export type SettingsScalarWhereWithAggregatesInput = {
    AND?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    OR?: SettingsScalarWhereWithAggregatesInput[]
    NOT?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Settings"> | string
    userId?: StringWithAggregatesFilter<"Settings"> | string
    theme?: StringWithAggregatesFilter<"Settings"> | string
    language?: StringWithAggregatesFilter<"Settings"> | string
    aiModel?: StringWithAggregatesFilter<"Settings"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Settings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Settings"> | Date | string
  }

  export type UploadHistoryWhereInput = {
    AND?: UploadHistoryWhereInput | UploadHistoryWhereInput[]
    OR?: UploadHistoryWhereInput[]
    NOT?: UploadHistoryWhereInput | UploadHistoryWhereInput[]
    id?: StringFilter<"UploadHistory"> | string
    datasetId?: StringFilter<"UploadHistory"> | string
    fileName?: StringFilter<"UploadHistory"> | string
    fileSize?: IntFilter<"UploadHistory"> | number
    mimeType?: StringFilter<"UploadHistory"> | string
    status?: StringFilter<"UploadHistory"> | string
    errorMessage?: StringNullableFilter<"UploadHistory"> | string | null
    createdAt?: DateTimeFilter<"UploadHistory"> | Date | string
    dataset?: XOR<DatasetScalarRelationFilter, DatasetWhereInput>
  }

  export type UploadHistoryOrderByWithRelationInput = {
    id?: SortOrder
    datasetId?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    dataset?: DatasetOrderByWithRelationInput
  }

  export type UploadHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    datasetId?: string
    AND?: UploadHistoryWhereInput | UploadHistoryWhereInput[]
    OR?: UploadHistoryWhereInput[]
    NOT?: UploadHistoryWhereInput | UploadHistoryWhereInput[]
    fileName?: StringFilter<"UploadHistory"> | string
    fileSize?: IntFilter<"UploadHistory"> | number
    mimeType?: StringFilter<"UploadHistory"> | string
    status?: StringFilter<"UploadHistory"> | string
    errorMessage?: StringNullableFilter<"UploadHistory"> | string | null
    createdAt?: DateTimeFilter<"UploadHistory"> | Date | string
    dataset?: XOR<DatasetScalarRelationFilter, DatasetWhereInput>
  }, "id" | "datasetId">

  export type UploadHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    datasetId?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UploadHistoryCountOrderByAggregateInput
    _avg?: UploadHistoryAvgOrderByAggregateInput
    _max?: UploadHistoryMaxOrderByAggregateInput
    _min?: UploadHistoryMinOrderByAggregateInput
    _sum?: UploadHistorySumOrderByAggregateInput
  }

  export type UploadHistoryScalarWhereWithAggregatesInput = {
    AND?: UploadHistoryScalarWhereWithAggregatesInput | UploadHistoryScalarWhereWithAggregatesInput[]
    OR?: UploadHistoryScalarWhereWithAggregatesInput[]
    NOT?: UploadHistoryScalarWhereWithAggregatesInput | UploadHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UploadHistory"> | string
    datasetId?: StringWithAggregatesFilter<"UploadHistory"> | string
    fileName?: StringWithAggregatesFilter<"UploadHistory"> | string
    fileSize?: IntWithAggregatesFilter<"UploadHistory"> | number
    mimeType?: StringWithAggregatesFilter<"UploadHistory"> | string
    status?: StringWithAggregatesFilter<"UploadHistory"> | string
    errorMessage?: StringNullableWithAggregatesFilter<"UploadHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UploadHistory"> | Date | string
  }

  export type ActivityLogWhereInput = {
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    userId?: StringFilter<"ActivityLog"> | string
    action?: StringFilter<"ActivityLog"> | string
    details?: StringNullableFilter<"ActivityLog"> | string | null
    ipAddress?: StringNullableFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ActivityLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    details?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    userId?: StringFilter<"ActivityLog"> | string
    action?: StringFilter<"ActivityLog"> | string
    details?: StringNullableFilter<"ActivityLog"> | string | null
    ipAddress?: StringNullableFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ActivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    details?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ActivityLogCountOrderByAggregateInput
    _max?: ActivityLogMaxOrderByAggregateInput
    _min?: ActivityLogMinOrderByAggregateInput
  }

  export type ActivityLogScalarWhereWithAggregatesInput = {
    AND?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    OR?: ActivityLogScalarWhereWithAggregatesInput[]
    NOT?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActivityLog"> | string
    userId?: StringWithAggregatesFilter<"ActivityLog"> | string
    action?: StringWithAggregatesFilter<"ActivityLog"> | string
    details?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ActivityLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    datasets?: DatasetCreateNestedManyWithoutUserInput
    queryHistories?: QueryHistoryCreateNestedManyWithoutUserInput
    chatHistories?: ChatHistoryCreateNestedManyWithoutUserInput
    settings?: SettingsCreateNestedOneWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    datasets?: DatasetUncheckedCreateNestedManyWithoutUserInput
    queryHistories?: QueryHistoryUncheckedCreateNestedManyWithoutUserInput
    chatHistories?: ChatHistoryUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingsUncheckedCreateNestedOneWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    datasets?: DatasetUpdateManyWithoutUserNestedInput
    queryHistories?: QueryHistoryUpdateManyWithoutUserNestedInput
    chatHistories?: ChatHistoryUpdateManyWithoutUserNestedInput
    settings?: SettingsUpdateOneWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    datasets?: DatasetUncheckedUpdateManyWithoutUserNestedInput
    queryHistories?: QueryHistoryUncheckedUpdateManyWithoutUserNestedInput
    chatHistories?: ChatHistoryUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatasetCreateInput = {
    id?: string
    originalName: string
    tableName: string
    status?: string
    rowCount?: number
    sizeBytes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDatasetsInput
    columns?: DatasetColumnCreateNestedManyWithoutDatasetInput
    queryHistories?: QueryHistoryCreateNestedManyWithoutDatasetInput
    chatHistories?: ChatHistoryCreateNestedManyWithoutDatasetInput
    insights?: InsightCreateNestedManyWithoutDatasetInput
    uploadHistory?: UploadHistoryCreateNestedOneWithoutDatasetInput
  }

  export type DatasetUncheckedCreateInput = {
    id?: string
    userId: string
    originalName: string
    tableName: string
    status?: string
    rowCount?: number
    sizeBytes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    columns?: DatasetColumnUncheckedCreateNestedManyWithoutDatasetInput
    queryHistories?: QueryHistoryUncheckedCreateNestedManyWithoutDatasetInput
    chatHistories?: ChatHistoryUncheckedCreateNestedManyWithoutDatasetInput
    insights?: InsightUncheckedCreateNestedManyWithoutDatasetInput
    uploadHistory?: UploadHistoryUncheckedCreateNestedOneWithoutDatasetInput
  }

  export type DatasetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rowCount?: IntFieldUpdateOperationsInput | number
    sizeBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDatasetsNestedInput
    columns?: DatasetColumnUpdateManyWithoutDatasetNestedInput
    queryHistories?: QueryHistoryUpdateManyWithoutDatasetNestedInput
    chatHistories?: ChatHistoryUpdateManyWithoutDatasetNestedInput
    insights?: InsightUpdateManyWithoutDatasetNestedInput
    uploadHistory?: UploadHistoryUpdateOneWithoutDatasetNestedInput
  }

  export type DatasetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rowCount?: IntFieldUpdateOperationsInput | number
    sizeBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    columns?: DatasetColumnUncheckedUpdateManyWithoutDatasetNestedInput
    queryHistories?: QueryHistoryUncheckedUpdateManyWithoutDatasetNestedInput
    chatHistories?: ChatHistoryUncheckedUpdateManyWithoutDatasetNestedInput
    insights?: InsightUncheckedUpdateManyWithoutDatasetNestedInput
    uploadHistory?: UploadHistoryUncheckedUpdateOneWithoutDatasetNestedInput
  }

  export type DatasetCreateManyInput = {
    id?: string
    userId: string
    originalName: string
    tableName: string
    status?: string
    rowCount?: number
    sizeBytes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DatasetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rowCount?: IntFieldUpdateOperationsInput | number
    sizeBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatasetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rowCount?: IntFieldUpdateOperationsInput | number
    sizeBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatasetColumnCreateInput = {
    id?: string
    name: string
    type: string
    isNullable?: boolean
    isUnique?: boolean
    isPrimaryKey?: boolean
    min?: string | null
    max?: string | null
    average?: number | null
    median?: number | null
    nullCount?: number
    uniqueCount?: number
    dataset: DatasetCreateNestedOneWithoutColumnsInput
  }

  export type DatasetColumnUncheckedCreateInput = {
    id?: string
    datasetId: string
    name: string
    type: string
    isNullable?: boolean
    isUnique?: boolean
    isPrimaryKey?: boolean
    min?: string | null
    max?: string | null
    average?: number | null
    median?: number | null
    nullCount?: number
    uniqueCount?: number
  }

  export type DatasetColumnUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isNullable?: BoolFieldUpdateOperationsInput | boolean
    isUnique?: BoolFieldUpdateOperationsInput | boolean
    isPrimaryKey?: BoolFieldUpdateOperationsInput | boolean
    min?: NullableStringFieldUpdateOperationsInput | string | null
    max?: NullableStringFieldUpdateOperationsInput | string | null
    average?: NullableFloatFieldUpdateOperationsInput | number | null
    median?: NullableFloatFieldUpdateOperationsInput | number | null
    nullCount?: IntFieldUpdateOperationsInput | number
    uniqueCount?: IntFieldUpdateOperationsInput | number
    dataset?: DatasetUpdateOneRequiredWithoutColumnsNestedInput
  }

  export type DatasetColumnUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    datasetId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isNullable?: BoolFieldUpdateOperationsInput | boolean
    isUnique?: BoolFieldUpdateOperationsInput | boolean
    isPrimaryKey?: BoolFieldUpdateOperationsInput | boolean
    min?: NullableStringFieldUpdateOperationsInput | string | null
    max?: NullableStringFieldUpdateOperationsInput | string | null
    average?: NullableFloatFieldUpdateOperationsInput | number | null
    median?: NullableFloatFieldUpdateOperationsInput | number | null
    nullCount?: IntFieldUpdateOperationsInput | number
    uniqueCount?: IntFieldUpdateOperationsInput | number
  }

  export type DatasetColumnCreateManyInput = {
    id?: string
    datasetId: string
    name: string
    type: string
    isNullable?: boolean
    isUnique?: boolean
    isPrimaryKey?: boolean
    min?: string | null
    max?: string | null
    average?: number | null
    median?: number | null
    nullCount?: number
    uniqueCount?: number
  }

  export type DatasetColumnUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isNullable?: BoolFieldUpdateOperationsInput | boolean
    isUnique?: BoolFieldUpdateOperationsInput | boolean
    isPrimaryKey?: BoolFieldUpdateOperationsInput | boolean
    min?: NullableStringFieldUpdateOperationsInput | string | null
    max?: NullableStringFieldUpdateOperationsInput | string | null
    average?: NullableFloatFieldUpdateOperationsInput | number | null
    median?: NullableFloatFieldUpdateOperationsInput | number | null
    nullCount?: IntFieldUpdateOperationsInput | number
    uniqueCount?: IntFieldUpdateOperationsInput | number
  }

  export type DatasetColumnUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    datasetId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isNullable?: BoolFieldUpdateOperationsInput | boolean
    isUnique?: BoolFieldUpdateOperationsInput | boolean
    isPrimaryKey?: BoolFieldUpdateOperationsInput | boolean
    min?: NullableStringFieldUpdateOperationsInput | string | null
    max?: NullableStringFieldUpdateOperationsInput | string | null
    average?: NullableFloatFieldUpdateOperationsInput | number | null
    median?: NullableFloatFieldUpdateOperationsInput | number | null
    nullCount?: IntFieldUpdateOperationsInput | number
    uniqueCount?: IntFieldUpdateOperationsInput | number
  }

  export type QueryHistoryCreateInput = {
    id?: string
    prompt?: string | null
    sqlQuery: string
    executionTime: number
    rowsReturned?: number
    isFavorite?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutQueryHistoriesInput
    dataset: DatasetCreateNestedOneWithoutQueryHistoriesInput
  }

  export type QueryHistoryUncheckedCreateInput = {
    id?: string
    userId: string
    datasetId: string
    prompt?: string | null
    sqlQuery: string
    executionTime: number
    rowsReturned?: number
    isFavorite?: boolean
    createdAt?: Date | string
  }

  export type QueryHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    sqlQuery?: StringFieldUpdateOperationsInput | string
    executionTime?: IntFieldUpdateOperationsInput | number
    rowsReturned?: IntFieldUpdateOperationsInput | number
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutQueryHistoriesNestedInput
    dataset?: DatasetUpdateOneRequiredWithoutQueryHistoriesNestedInput
  }

  export type QueryHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    datasetId?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    sqlQuery?: StringFieldUpdateOperationsInput | string
    executionTime?: IntFieldUpdateOperationsInput | number
    rowsReturned?: IntFieldUpdateOperationsInput | number
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QueryHistoryCreateManyInput = {
    id?: string
    userId: string
    datasetId: string
    prompt?: string | null
    sqlQuery: string
    executionTime: number
    rowsReturned?: number
    isFavorite?: boolean
    createdAt?: Date | string
  }

  export type QueryHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    sqlQuery?: StringFieldUpdateOperationsInput | string
    executionTime?: IntFieldUpdateOperationsInput | number
    rowsReturned?: IntFieldUpdateOperationsInput | number
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QueryHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    datasetId?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    sqlQuery?: StringFieldUpdateOperationsInput | string
    executionTime?: IntFieldUpdateOperationsInput | number
    rowsReturned?: IntFieldUpdateOperationsInput | number
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatHistoryCreateInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutChatHistoriesInput
    dataset: DatasetCreateNestedOneWithoutChatHistoriesInput
  }

  export type ChatHistoryUncheckedCreateInput = {
    id?: string
    userId: string
    datasetId: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ChatHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatHistoriesNestedInput
    dataset?: DatasetUpdateOneRequiredWithoutChatHistoriesNestedInput
  }

  export type ChatHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    datasetId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatHistoryCreateManyInput = {
    id?: string
    userId: string
    datasetId: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ChatHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    datasetId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsightCreateInput = {
    id?: string
    title: string
    description: string
    type: string
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    dataset: DatasetCreateNestedOneWithoutInsightsInput
  }

  export type InsightUncheckedCreateInput = {
    id?: string
    datasetId: string
    title: string
    description: string
    type: string
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type InsightUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataset?: DatasetUpdateOneRequiredWithoutInsightsNestedInput
  }

  export type InsightUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    datasetId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsightCreateManyInput = {
    id?: string
    datasetId: string
    title: string
    description: string
    type: string
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type InsightUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsightUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    datasetId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsCreateInput = {
    id?: string
    theme?: string
    language?: string
    aiModel?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSettingsInput
  }

  export type SettingsUncheckedCreateInput = {
    id?: string
    userId: string
    theme?: string
    language?: string
    aiModel?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    aiModel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSettingsNestedInput
  }

  export type SettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    aiModel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsCreateManyInput = {
    id?: string
    userId: string
    theme?: string
    language?: string
    aiModel?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    aiModel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    aiModel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadHistoryCreateInput = {
    id?: string
    fileName: string
    fileSize: number
    mimeType: string
    status: string
    errorMessage?: string | null
    createdAt?: Date | string
    dataset: DatasetCreateNestedOneWithoutUploadHistoryInput
  }

  export type UploadHistoryUncheckedCreateInput = {
    id?: string
    datasetId: string
    fileName: string
    fileSize: number
    mimeType: string
    status: string
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type UploadHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataset?: DatasetUpdateOneRequiredWithoutUploadHistoryNestedInput
  }

  export type UploadHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    datasetId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadHistoryCreateManyInput = {
    id?: string
    datasetId: string
    fileName: string
    fileSize: number
    mimeType: string
    status: string
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type UploadHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    datasetId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateInput = {
    id?: string
    action: string
    details?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutActivityLogsInput
  }

  export type ActivityLogUncheckedCreateInput = {
    id?: string
    userId: string
    action: string
    details?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutActivityLogsNestedInput
  }

  export type ActivityLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateManyInput = {
    id?: string
    userId: string
    action: string
    details?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DatasetListRelationFilter = {
    every?: DatasetWhereInput
    some?: DatasetWhereInput
    none?: DatasetWhereInput
  }

  export type QueryHistoryListRelationFilter = {
    every?: QueryHistoryWhereInput
    some?: QueryHistoryWhereInput
    none?: QueryHistoryWhereInput
  }

  export type ChatHistoryListRelationFilter = {
    every?: ChatHistoryWhereInput
    some?: ChatHistoryWhereInput
    none?: ChatHistoryWhereInput
  }

  export type SettingsNullableScalarRelationFilter = {
    is?: SettingsWhereInput | null
    isNot?: SettingsWhereInput | null
  }

  export type ActivityLogListRelationFilter = {
    every?: ActivityLogWhereInput
    some?: ActivityLogWhereInput
    none?: ActivityLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DatasetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QueryHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DatasetColumnListRelationFilter = {
    every?: DatasetColumnWhereInput
    some?: DatasetColumnWhereInput
    none?: DatasetColumnWhereInput
  }

  export type InsightListRelationFilter = {
    every?: InsightWhereInput
    some?: InsightWhereInput
    none?: InsightWhereInput
  }

  export type UploadHistoryNullableScalarRelationFilter = {
    is?: UploadHistoryWhereInput | null
    isNot?: UploadHistoryWhereInput | null
  }

  export type DatasetColumnOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InsightOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DatasetCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    originalName?: SortOrder
    tableName?: SortOrder
    status?: SortOrder
    rowCount?: SortOrder
    sizeBytes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DatasetAvgOrderByAggregateInput = {
    rowCount?: SortOrder
    sizeBytes?: SortOrder
  }

  export type DatasetMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    originalName?: SortOrder
    tableName?: SortOrder
    status?: SortOrder
    rowCount?: SortOrder
    sizeBytes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DatasetMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    originalName?: SortOrder
    tableName?: SortOrder
    status?: SortOrder
    rowCount?: SortOrder
    sizeBytes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DatasetSumOrderByAggregateInput = {
    rowCount?: SortOrder
    sizeBytes?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DatasetScalarRelationFilter = {
    is?: DatasetWhereInput
    isNot?: DatasetWhereInput
  }

  export type DatasetColumnCountOrderByAggregateInput = {
    id?: SortOrder
    datasetId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    isNullable?: SortOrder
    isUnique?: SortOrder
    isPrimaryKey?: SortOrder
    min?: SortOrder
    max?: SortOrder
    average?: SortOrder
    median?: SortOrder
    nullCount?: SortOrder
    uniqueCount?: SortOrder
  }

  export type DatasetColumnAvgOrderByAggregateInput = {
    average?: SortOrder
    median?: SortOrder
    nullCount?: SortOrder
    uniqueCount?: SortOrder
  }

  export type DatasetColumnMaxOrderByAggregateInput = {
    id?: SortOrder
    datasetId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    isNullable?: SortOrder
    isUnique?: SortOrder
    isPrimaryKey?: SortOrder
    min?: SortOrder
    max?: SortOrder
    average?: SortOrder
    median?: SortOrder
    nullCount?: SortOrder
    uniqueCount?: SortOrder
  }

  export type DatasetColumnMinOrderByAggregateInput = {
    id?: SortOrder
    datasetId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    isNullable?: SortOrder
    isUnique?: SortOrder
    isPrimaryKey?: SortOrder
    min?: SortOrder
    max?: SortOrder
    average?: SortOrder
    median?: SortOrder
    nullCount?: SortOrder
    uniqueCount?: SortOrder
  }

  export type DatasetColumnSumOrderByAggregateInput = {
    average?: SortOrder
    median?: SortOrder
    nullCount?: SortOrder
    uniqueCount?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type QueryHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    datasetId?: SortOrder
    prompt?: SortOrder
    sqlQuery?: SortOrder
    executionTime?: SortOrder
    rowsReturned?: SortOrder
    isFavorite?: SortOrder
    createdAt?: SortOrder
  }

  export type QueryHistoryAvgOrderByAggregateInput = {
    executionTime?: SortOrder
    rowsReturned?: SortOrder
  }

  export type QueryHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    datasetId?: SortOrder
    prompt?: SortOrder
    sqlQuery?: SortOrder
    executionTime?: SortOrder
    rowsReturned?: SortOrder
    isFavorite?: SortOrder
    createdAt?: SortOrder
  }

  export type QueryHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    datasetId?: SortOrder
    prompt?: SortOrder
    sqlQuery?: SortOrder
    executionTime?: SortOrder
    rowsReturned?: SortOrder
    isFavorite?: SortOrder
    createdAt?: SortOrder
  }

  export type QueryHistorySumOrderByAggregateInput = {
    executionTime?: SortOrder
    rowsReturned?: SortOrder
  }

  export type ChatHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    datasetId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    datasetId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    datasetId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type InsightCountOrderByAggregateInput = {
    id?: SortOrder
    datasetId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type InsightMaxOrderByAggregateInput = {
    id?: SortOrder
    datasetId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type InsightMinOrderByAggregateInput = {
    id?: SortOrder
    datasetId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type SettingsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    theme?: SortOrder
    language?: SortOrder
    aiModel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    theme?: SortOrder
    language?: SortOrder
    aiModel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    theme?: SortOrder
    language?: SortOrder
    aiModel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UploadHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    datasetId?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type UploadHistoryAvgOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type UploadHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    datasetId?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type UploadHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    datasetId?: SortOrder
    fileName?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type UploadHistorySumOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type ActivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    details?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    details?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    details?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type DatasetCreateNestedManyWithoutUserInput = {
    create?: XOR<DatasetCreateWithoutUserInput, DatasetUncheckedCreateWithoutUserInput> | DatasetCreateWithoutUserInput[] | DatasetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DatasetCreateOrConnectWithoutUserInput | DatasetCreateOrConnectWithoutUserInput[]
    createMany?: DatasetCreateManyUserInputEnvelope
    connect?: DatasetWhereUniqueInput | DatasetWhereUniqueInput[]
  }

  export type QueryHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<QueryHistoryCreateWithoutUserInput, QueryHistoryUncheckedCreateWithoutUserInput> | QueryHistoryCreateWithoutUserInput[] | QueryHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QueryHistoryCreateOrConnectWithoutUserInput | QueryHistoryCreateOrConnectWithoutUserInput[]
    createMany?: QueryHistoryCreateManyUserInputEnvelope
    connect?: QueryHistoryWhereUniqueInput | QueryHistoryWhereUniqueInput[]
  }

  export type ChatHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatHistoryCreateWithoutUserInput, ChatHistoryUncheckedCreateWithoutUserInput> | ChatHistoryCreateWithoutUserInput[] | ChatHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatHistoryCreateOrConnectWithoutUserInput | ChatHistoryCreateOrConnectWithoutUserInput[]
    createMany?: ChatHistoryCreateManyUserInputEnvelope
    connect?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
  }

  export type SettingsCreateNestedOneWithoutUserInput = {
    create?: XOR<SettingsCreateWithoutUserInput, SettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: SettingsCreateOrConnectWithoutUserInput
    connect?: SettingsWhereUniqueInput
  }

  export type ActivityLogCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type DatasetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DatasetCreateWithoutUserInput, DatasetUncheckedCreateWithoutUserInput> | DatasetCreateWithoutUserInput[] | DatasetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DatasetCreateOrConnectWithoutUserInput | DatasetCreateOrConnectWithoutUserInput[]
    createMany?: DatasetCreateManyUserInputEnvelope
    connect?: DatasetWhereUniqueInput | DatasetWhereUniqueInput[]
  }

  export type QueryHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QueryHistoryCreateWithoutUserInput, QueryHistoryUncheckedCreateWithoutUserInput> | QueryHistoryCreateWithoutUserInput[] | QueryHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QueryHistoryCreateOrConnectWithoutUserInput | QueryHistoryCreateOrConnectWithoutUserInput[]
    createMany?: QueryHistoryCreateManyUserInputEnvelope
    connect?: QueryHistoryWhereUniqueInput | QueryHistoryWhereUniqueInput[]
  }

  export type ChatHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatHistoryCreateWithoutUserInput, ChatHistoryUncheckedCreateWithoutUserInput> | ChatHistoryCreateWithoutUserInput[] | ChatHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatHistoryCreateOrConnectWithoutUserInput | ChatHistoryCreateOrConnectWithoutUserInput[]
    createMany?: ChatHistoryCreateManyUserInputEnvelope
    connect?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
  }

  export type SettingsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SettingsCreateWithoutUserInput, SettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: SettingsCreateOrConnectWithoutUserInput
    connect?: SettingsWhereUniqueInput
  }

  export type ActivityLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DatasetUpdateManyWithoutUserNestedInput = {
    create?: XOR<DatasetCreateWithoutUserInput, DatasetUncheckedCreateWithoutUserInput> | DatasetCreateWithoutUserInput[] | DatasetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DatasetCreateOrConnectWithoutUserInput | DatasetCreateOrConnectWithoutUserInput[]
    upsert?: DatasetUpsertWithWhereUniqueWithoutUserInput | DatasetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DatasetCreateManyUserInputEnvelope
    set?: DatasetWhereUniqueInput | DatasetWhereUniqueInput[]
    disconnect?: DatasetWhereUniqueInput | DatasetWhereUniqueInput[]
    delete?: DatasetWhereUniqueInput | DatasetWhereUniqueInput[]
    connect?: DatasetWhereUniqueInput | DatasetWhereUniqueInput[]
    update?: DatasetUpdateWithWhereUniqueWithoutUserInput | DatasetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DatasetUpdateManyWithWhereWithoutUserInput | DatasetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DatasetScalarWhereInput | DatasetScalarWhereInput[]
  }

  export type QueryHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<QueryHistoryCreateWithoutUserInput, QueryHistoryUncheckedCreateWithoutUserInput> | QueryHistoryCreateWithoutUserInput[] | QueryHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QueryHistoryCreateOrConnectWithoutUserInput | QueryHistoryCreateOrConnectWithoutUserInput[]
    upsert?: QueryHistoryUpsertWithWhereUniqueWithoutUserInput | QueryHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QueryHistoryCreateManyUserInputEnvelope
    set?: QueryHistoryWhereUniqueInput | QueryHistoryWhereUniqueInput[]
    disconnect?: QueryHistoryWhereUniqueInput | QueryHistoryWhereUniqueInput[]
    delete?: QueryHistoryWhereUniqueInput | QueryHistoryWhereUniqueInput[]
    connect?: QueryHistoryWhereUniqueInput | QueryHistoryWhereUniqueInput[]
    update?: QueryHistoryUpdateWithWhereUniqueWithoutUserInput | QueryHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QueryHistoryUpdateManyWithWhereWithoutUserInput | QueryHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QueryHistoryScalarWhereInput | QueryHistoryScalarWhereInput[]
  }

  export type ChatHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatHistoryCreateWithoutUserInput, ChatHistoryUncheckedCreateWithoutUserInput> | ChatHistoryCreateWithoutUserInput[] | ChatHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatHistoryCreateOrConnectWithoutUserInput | ChatHistoryCreateOrConnectWithoutUserInput[]
    upsert?: ChatHistoryUpsertWithWhereUniqueWithoutUserInput | ChatHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatHistoryCreateManyUserInputEnvelope
    set?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    disconnect?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    delete?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    connect?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    update?: ChatHistoryUpdateWithWhereUniqueWithoutUserInput | ChatHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatHistoryUpdateManyWithWhereWithoutUserInput | ChatHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatHistoryScalarWhereInput | ChatHistoryScalarWhereInput[]
  }

  export type SettingsUpdateOneWithoutUserNestedInput = {
    create?: XOR<SettingsCreateWithoutUserInput, SettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: SettingsCreateOrConnectWithoutUserInput
    upsert?: SettingsUpsertWithoutUserInput
    disconnect?: SettingsWhereInput | boolean
    delete?: SettingsWhereInput | boolean
    connect?: SettingsWhereUniqueInput
    update?: XOR<XOR<SettingsUpdateToOneWithWhereWithoutUserInput, SettingsUpdateWithoutUserInput>, SettingsUncheckedUpdateWithoutUserInput>
  }

  export type ActivityLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type DatasetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DatasetCreateWithoutUserInput, DatasetUncheckedCreateWithoutUserInput> | DatasetCreateWithoutUserInput[] | DatasetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DatasetCreateOrConnectWithoutUserInput | DatasetCreateOrConnectWithoutUserInput[]
    upsert?: DatasetUpsertWithWhereUniqueWithoutUserInput | DatasetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DatasetCreateManyUserInputEnvelope
    set?: DatasetWhereUniqueInput | DatasetWhereUniqueInput[]
    disconnect?: DatasetWhereUniqueInput | DatasetWhereUniqueInput[]
    delete?: DatasetWhereUniqueInput | DatasetWhereUniqueInput[]
    connect?: DatasetWhereUniqueInput | DatasetWhereUniqueInput[]
    update?: DatasetUpdateWithWhereUniqueWithoutUserInput | DatasetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DatasetUpdateManyWithWhereWithoutUserInput | DatasetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DatasetScalarWhereInput | DatasetScalarWhereInput[]
  }

  export type QueryHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QueryHistoryCreateWithoutUserInput, QueryHistoryUncheckedCreateWithoutUserInput> | QueryHistoryCreateWithoutUserInput[] | QueryHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QueryHistoryCreateOrConnectWithoutUserInput | QueryHistoryCreateOrConnectWithoutUserInput[]
    upsert?: QueryHistoryUpsertWithWhereUniqueWithoutUserInput | QueryHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QueryHistoryCreateManyUserInputEnvelope
    set?: QueryHistoryWhereUniqueInput | QueryHistoryWhereUniqueInput[]
    disconnect?: QueryHistoryWhereUniqueInput | QueryHistoryWhereUniqueInput[]
    delete?: QueryHistoryWhereUniqueInput | QueryHistoryWhereUniqueInput[]
    connect?: QueryHistoryWhereUniqueInput | QueryHistoryWhereUniqueInput[]
    update?: QueryHistoryUpdateWithWhereUniqueWithoutUserInput | QueryHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QueryHistoryUpdateManyWithWhereWithoutUserInput | QueryHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QueryHistoryScalarWhereInput | QueryHistoryScalarWhereInput[]
  }

  export type ChatHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatHistoryCreateWithoutUserInput, ChatHistoryUncheckedCreateWithoutUserInput> | ChatHistoryCreateWithoutUserInput[] | ChatHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatHistoryCreateOrConnectWithoutUserInput | ChatHistoryCreateOrConnectWithoutUserInput[]
    upsert?: ChatHistoryUpsertWithWhereUniqueWithoutUserInput | ChatHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatHistoryCreateManyUserInputEnvelope
    set?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    disconnect?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    delete?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    connect?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    update?: ChatHistoryUpdateWithWhereUniqueWithoutUserInput | ChatHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatHistoryUpdateManyWithWhereWithoutUserInput | ChatHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatHistoryScalarWhereInput | ChatHistoryScalarWhereInput[]
  }

  export type SettingsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SettingsCreateWithoutUserInput, SettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: SettingsCreateOrConnectWithoutUserInput
    upsert?: SettingsUpsertWithoutUserInput
    disconnect?: SettingsWhereInput | boolean
    delete?: SettingsWhereInput | boolean
    connect?: SettingsWhereUniqueInput
    update?: XOR<XOR<SettingsUpdateToOneWithWhereWithoutUserInput, SettingsUpdateWithoutUserInput>, SettingsUncheckedUpdateWithoutUserInput>
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDatasetsInput = {
    create?: XOR<UserCreateWithoutDatasetsInput, UserUncheckedCreateWithoutDatasetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDatasetsInput
    connect?: UserWhereUniqueInput
  }

  export type DatasetColumnCreateNestedManyWithoutDatasetInput = {
    create?: XOR<DatasetColumnCreateWithoutDatasetInput, DatasetColumnUncheckedCreateWithoutDatasetInput> | DatasetColumnCreateWithoutDatasetInput[] | DatasetColumnUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: DatasetColumnCreateOrConnectWithoutDatasetInput | DatasetColumnCreateOrConnectWithoutDatasetInput[]
    createMany?: DatasetColumnCreateManyDatasetInputEnvelope
    connect?: DatasetColumnWhereUniqueInput | DatasetColumnWhereUniqueInput[]
  }

  export type QueryHistoryCreateNestedManyWithoutDatasetInput = {
    create?: XOR<QueryHistoryCreateWithoutDatasetInput, QueryHistoryUncheckedCreateWithoutDatasetInput> | QueryHistoryCreateWithoutDatasetInput[] | QueryHistoryUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: QueryHistoryCreateOrConnectWithoutDatasetInput | QueryHistoryCreateOrConnectWithoutDatasetInput[]
    createMany?: QueryHistoryCreateManyDatasetInputEnvelope
    connect?: QueryHistoryWhereUniqueInput | QueryHistoryWhereUniqueInput[]
  }

  export type ChatHistoryCreateNestedManyWithoutDatasetInput = {
    create?: XOR<ChatHistoryCreateWithoutDatasetInput, ChatHistoryUncheckedCreateWithoutDatasetInput> | ChatHistoryCreateWithoutDatasetInput[] | ChatHistoryUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: ChatHistoryCreateOrConnectWithoutDatasetInput | ChatHistoryCreateOrConnectWithoutDatasetInput[]
    createMany?: ChatHistoryCreateManyDatasetInputEnvelope
    connect?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
  }

  export type InsightCreateNestedManyWithoutDatasetInput = {
    create?: XOR<InsightCreateWithoutDatasetInput, InsightUncheckedCreateWithoutDatasetInput> | InsightCreateWithoutDatasetInput[] | InsightUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: InsightCreateOrConnectWithoutDatasetInput | InsightCreateOrConnectWithoutDatasetInput[]
    createMany?: InsightCreateManyDatasetInputEnvelope
    connect?: InsightWhereUniqueInput | InsightWhereUniqueInput[]
  }

  export type UploadHistoryCreateNestedOneWithoutDatasetInput = {
    create?: XOR<UploadHistoryCreateWithoutDatasetInput, UploadHistoryUncheckedCreateWithoutDatasetInput>
    connectOrCreate?: UploadHistoryCreateOrConnectWithoutDatasetInput
    connect?: UploadHistoryWhereUniqueInput
  }

  export type DatasetColumnUncheckedCreateNestedManyWithoutDatasetInput = {
    create?: XOR<DatasetColumnCreateWithoutDatasetInput, DatasetColumnUncheckedCreateWithoutDatasetInput> | DatasetColumnCreateWithoutDatasetInput[] | DatasetColumnUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: DatasetColumnCreateOrConnectWithoutDatasetInput | DatasetColumnCreateOrConnectWithoutDatasetInput[]
    createMany?: DatasetColumnCreateManyDatasetInputEnvelope
    connect?: DatasetColumnWhereUniqueInput | DatasetColumnWhereUniqueInput[]
  }

  export type QueryHistoryUncheckedCreateNestedManyWithoutDatasetInput = {
    create?: XOR<QueryHistoryCreateWithoutDatasetInput, QueryHistoryUncheckedCreateWithoutDatasetInput> | QueryHistoryCreateWithoutDatasetInput[] | QueryHistoryUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: QueryHistoryCreateOrConnectWithoutDatasetInput | QueryHistoryCreateOrConnectWithoutDatasetInput[]
    createMany?: QueryHistoryCreateManyDatasetInputEnvelope
    connect?: QueryHistoryWhereUniqueInput | QueryHistoryWhereUniqueInput[]
  }

  export type ChatHistoryUncheckedCreateNestedManyWithoutDatasetInput = {
    create?: XOR<ChatHistoryCreateWithoutDatasetInput, ChatHistoryUncheckedCreateWithoutDatasetInput> | ChatHistoryCreateWithoutDatasetInput[] | ChatHistoryUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: ChatHistoryCreateOrConnectWithoutDatasetInput | ChatHistoryCreateOrConnectWithoutDatasetInput[]
    createMany?: ChatHistoryCreateManyDatasetInputEnvelope
    connect?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
  }

  export type InsightUncheckedCreateNestedManyWithoutDatasetInput = {
    create?: XOR<InsightCreateWithoutDatasetInput, InsightUncheckedCreateWithoutDatasetInput> | InsightCreateWithoutDatasetInput[] | InsightUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: InsightCreateOrConnectWithoutDatasetInput | InsightCreateOrConnectWithoutDatasetInput[]
    createMany?: InsightCreateManyDatasetInputEnvelope
    connect?: InsightWhereUniqueInput | InsightWhereUniqueInput[]
  }

  export type UploadHistoryUncheckedCreateNestedOneWithoutDatasetInput = {
    create?: XOR<UploadHistoryCreateWithoutDatasetInput, UploadHistoryUncheckedCreateWithoutDatasetInput>
    connectOrCreate?: UploadHistoryCreateOrConnectWithoutDatasetInput
    connect?: UploadHistoryWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutDatasetsNestedInput = {
    create?: XOR<UserCreateWithoutDatasetsInput, UserUncheckedCreateWithoutDatasetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDatasetsInput
    upsert?: UserUpsertWithoutDatasetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDatasetsInput, UserUpdateWithoutDatasetsInput>, UserUncheckedUpdateWithoutDatasetsInput>
  }

  export type DatasetColumnUpdateManyWithoutDatasetNestedInput = {
    create?: XOR<DatasetColumnCreateWithoutDatasetInput, DatasetColumnUncheckedCreateWithoutDatasetInput> | DatasetColumnCreateWithoutDatasetInput[] | DatasetColumnUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: DatasetColumnCreateOrConnectWithoutDatasetInput | DatasetColumnCreateOrConnectWithoutDatasetInput[]
    upsert?: DatasetColumnUpsertWithWhereUniqueWithoutDatasetInput | DatasetColumnUpsertWithWhereUniqueWithoutDatasetInput[]
    createMany?: DatasetColumnCreateManyDatasetInputEnvelope
    set?: DatasetColumnWhereUniqueInput | DatasetColumnWhereUniqueInput[]
    disconnect?: DatasetColumnWhereUniqueInput | DatasetColumnWhereUniqueInput[]
    delete?: DatasetColumnWhereUniqueInput | DatasetColumnWhereUniqueInput[]
    connect?: DatasetColumnWhereUniqueInput | DatasetColumnWhereUniqueInput[]
    update?: DatasetColumnUpdateWithWhereUniqueWithoutDatasetInput | DatasetColumnUpdateWithWhereUniqueWithoutDatasetInput[]
    updateMany?: DatasetColumnUpdateManyWithWhereWithoutDatasetInput | DatasetColumnUpdateManyWithWhereWithoutDatasetInput[]
    deleteMany?: DatasetColumnScalarWhereInput | DatasetColumnScalarWhereInput[]
  }

  export type QueryHistoryUpdateManyWithoutDatasetNestedInput = {
    create?: XOR<QueryHistoryCreateWithoutDatasetInput, QueryHistoryUncheckedCreateWithoutDatasetInput> | QueryHistoryCreateWithoutDatasetInput[] | QueryHistoryUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: QueryHistoryCreateOrConnectWithoutDatasetInput | QueryHistoryCreateOrConnectWithoutDatasetInput[]
    upsert?: QueryHistoryUpsertWithWhereUniqueWithoutDatasetInput | QueryHistoryUpsertWithWhereUniqueWithoutDatasetInput[]
    createMany?: QueryHistoryCreateManyDatasetInputEnvelope
    set?: QueryHistoryWhereUniqueInput | QueryHistoryWhereUniqueInput[]
    disconnect?: QueryHistoryWhereUniqueInput | QueryHistoryWhereUniqueInput[]
    delete?: QueryHistoryWhereUniqueInput | QueryHistoryWhereUniqueInput[]
    connect?: QueryHistoryWhereUniqueInput | QueryHistoryWhereUniqueInput[]
    update?: QueryHistoryUpdateWithWhereUniqueWithoutDatasetInput | QueryHistoryUpdateWithWhereUniqueWithoutDatasetInput[]
    updateMany?: QueryHistoryUpdateManyWithWhereWithoutDatasetInput | QueryHistoryUpdateManyWithWhereWithoutDatasetInput[]
    deleteMany?: QueryHistoryScalarWhereInput | QueryHistoryScalarWhereInput[]
  }

  export type ChatHistoryUpdateManyWithoutDatasetNestedInput = {
    create?: XOR<ChatHistoryCreateWithoutDatasetInput, ChatHistoryUncheckedCreateWithoutDatasetInput> | ChatHistoryCreateWithoutDatasetInput[] | ChatHistoryUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: ChatHistoryCreateOrConnectWithoutDatasetInput | ChatHistoryCreateOrConnectWithoutDatasetInput[]
    upsert?: ChatHistoryUpsertWithWhereUniqueWithoutDatasetInput | ChatHistoryUpsertWithWhereUniqueWithoutDatasetInput[]
    createMany?: ChatHistoryCreateManyDatasetInputEnvelope
    set?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    disconnect?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    delete?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    connect?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    update?: ChatHistoryUpdateWithWhereUniqueWithoutDatasetInput | ChatHistoryUpdateWithWhereUniqueWithoutDatasetInput[]
    updateMany?: ChatHistoryUpdateManyWithWhereWithoutDatasetInput | ChatHistoryUpdateManyWithWhereWithoutDatasetInput[]
    deleteMany?: ChatHistoryScalarWhereInput | ChatHistoryScalarWhereInput[]
  }

  export type InsightUpdateManyWithoutDatasetNestedInput = {
    create?: XOR<InsightCreateWithoutDatasetInput, InsightUncheckedCreateWithoutDatasetInput> | InsightCreateWithoutDatasetInput[] | InsightUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: InsightCreateOrConnectWithoutDatasetInput | InsightCreateOrConnectWithoutDatasetInput[]
    upsert?: InsightUpsertWithWhereUniqueWithoutDatasetInput | InsightUpsertWithWhereUniqueWithoutDatasetInput[]
    createMany?: InsightCreateManyDatasetInputEnvelope
    set?: InsightWhereUniqueInput | InsightWhereUniqueInput[]
    disconnect?: InsightWhereUniqueInput | InsightWhereUniqueInput[]
    delete?: InsightWhereUniqueInput | InsightWhereUniqueInput[]
    connect?: InsightWhereUniqueInput | InsightWhereUniqueInput[]
    update?: InsightUpdateWithWhereUniqueWithoutDatasetInput | InsightUpdateWithWhereUniqueWithoutDatasetInput[]
    updateMany?: InsightUpdateManyWithWhereWithoutDatasetInput | InsightUpdateManyWithWhereWithoutDatasetInput[]
    deleteMany?: InsightScalarWhereInput | InsightScalarWhereInput[]
  }

  export type UploadHistoryUpdateOneWithoutDatasetNestedInput = {
    create?: XOR<UploadHistoryCreateWithoutDatasetInput, UploadHistoryUncheckedCreateWithoutDatasetInput>
    connectOrCreate?: UploadHistoryCreateOrConnectWithoutDatasetInput
    upsert?: UploadHistoryUpsertWithoutDatasetInput
    disconnect?: UploadHistoryWhereInput | boolean
    delete?: UploadHistoryWhereInput | boolean
    connect?: UploadHistoryWhereUniqueInput
    update?: XOR<XOR<UploadHistoryUpdateToOneWithWhereWithoutDatasetInput, UploadHistoryUpdateWithoutDatasetInput>, UploadHistoryUncheckedUpdateWithoutDatasetInput>
  }

  export type DatasetColumnUncheckedUpdateManyWithoutDatasetNestedInput = {
    create?: XOR<DatasetColumnCreateWithoutDatasetInput, DatasetColumnUncheckedCreateWithoutDatasetInput> | DatasetColumnCreateWithoutDatasetInput[] | DatasetColumnUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: DatasetColumnCreateOrConnectWithoutDatasetInput | DatasetColumnCreateOrConnectWithoutDatasetInput[]
    upsert?: DatasetColumnUpsertWithWhereUniqueWithoutDatasetInput | DatasetColumnUpsertWithWhereUniqueWithoutDatasetInput[]
    createMany?: DatasetColumnCreateManyDatasetInputEnvelope
    set?: DatasetColumnWhereUniqueInput | DatasetColumnWhereUniqueInput[]
    disconnect?: DatasetColumnWhereUniqueInput | DatasetColumnWhereUniqueInput[]
    delete?: DatasetColumnWhereUniqueInput | DatasetColumnWhereUniqueInput[]
    connect?: DatasetColumnWhereUniqueInput | DatasetColumnWhereUniqueInput[]
    update?: DatasetColumnUpdateWithWhereUniqueWithoutDatasetInput | DatasetColumnUpdateWithWhereUniqueWithoutDatasetInput[]
    updateMany?: DatasetColumnUpdateManyWithWhereWithoutDatasetInput | DatasetColumnUpdateManyWithWhereWithoutDatasetInput[]
    deleteMany?: DatasetColumnScalarWhereInput | DatasetColumnScalarWhereInput[]
  }

  export type QueryHistoryUncheckedUpdateManyWithoutDatasetNestedInput = {
    create?: XOR<QueryHistoryCreateWithoutDatasetInput, QueryHistoryUncheckedCreateWithoutDatasetInput> | QueryHistoryCreateWithoutDatasetInput[] | QueryHistoryUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: QueryHistoryCreateOrConnectWithoutDatasetInput | QueryHistoryCreateOrConnectWithoutDatasetInput[]
    upsert?: QueryHistoryUpsertWithWhereUniqueWithoutDatasetInput | QueryHistoryUpsertWithWhereUniqueWithoutDatasetInput[]
    createMany?: QueryHistoryCreateManyDatasetInputEnvelope
    set?: QueryHistoryWhereUniqueInput | QueryHistoryWhereUniqueInput[]
    disconnect?: QueryHistoryWhereUniqueInput | QueryHistoryWhereUniqueInput[]
    delete?: QueryHistoryWhereUniqueInput | QueryHistoryWhereUniqueInput[]
    connect?: QueryHistoryWhereUniqueInput | QueryHistoryWhereUniqueInput[]
    update?: QueryHistoryUpdateWithWhereUniqueWithoutDatasetInput | QueryHistoryUpdateWithWhereUniqueWithoutDatasetInput[]
    updateMany?: QueryHistoryUpdateManyWithWhereWithoutDatasetInput | QueryHistoryUpdateManyWithWhereWithoutDatasetInput[]
    deleteMany?: QueryHistoryScalarWhereInput | QueryHistoryScalarWhereInput[]
  }

  export type ChatHistoryUncheckedUpdateManyWithoutDatasetNestedInput = {
    create?: XOR<ChatHistoryCreateWithoutDatasetInput, ChatHistoryUncheckedCreateWithoutDatasetInput> | ChatHistoryCreateWithoutDatasetInput[] | ChatHistoryUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: ChatHistoryCreateOrConnectWithoutDatasetInput | ChatHistoryCreateOrConnectWithoutDatasetInput[]
    upsert?: ChatHistoryUpsertWithWhereUniqueWithoutDatasetInput | ChatHistoryUpsertWithWhereUniqueWithoutDatasetInput[]
    createMany?: ChatHistoryCreateManyDatasetInputEnvelope
    set?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    disconnect?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    delete?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    connect?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    update?: ChatHistoryUpdateWithWhereUniqueWithoutDatasetInput | ChatHistoryUpdateWithWhereUniqueWithoutDatasetInput[]
    updateMany?: ChatHistoryUpdateManyWithWhereWithoutDatasetInput | ChatHistoryUpdateManyWithWhereWithoutDatasetInput[]
    deleteMany?: ChatHistoryScalarWhereInput | ChatHistoryScalarWhereInput[]
  }

  export type InsightUncheckedUpdateManyWithoutDatasetNestedInput = {
    create?: XOR<InsightCreateWithoutDatasetInput, InsightUncheckedCreateWithoutDatasetInput> | InsightCreateWithoutDatasetInput[] | InsightUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: InsightCreateOrConnectWithoutDatasetInput | InsightCreateOrConnectWithoutDatasetInput[]
    upsert?: InsightUpsertWithWhereUniqueWithoutDatasetInput | InsightUpsertWithWhereUniqueWithoutDatasetInput[]
    createMany?: InsightCreateManyDatasetInputEnvelope
    set?: InsightWhereUniqueInput | InsightWhereUniqueInput[]
    disconnect?: InsightWhereUniqueInput | InsightWhereUniqueInput[]
    delete?: InsightWhereUniqueInput | InsightWhereUniqueInput[]
    connect?: InsightWhereUniqueInput | InsightWhereUniqueInput[]
    update?: InsightUpdateWithWhereUniqueWithoutDatasetInput | InsightUpdateWithWhereUniqueWithoutDatasetInput[]
    updateMany?: InsightUpdateManyWithWhereWithoutDatasetInput | InsightUpdateManyWithWhereWithoutDatasetInput[]
    deleteMany?: InsightScalarWhereInput | InsightScalarWhereInput[]
  }

  export type UploadHistoryUncheckedUpdateOneWithoutDatasetNestedInput = {
    create?: XOR<UploadHistoryCreateWithoutDatasetInput, UploadHistoryUncheckedCreateWithoutDatasetInput>
    connectOrCreate?: UploadHistoryCreateOrConnectWithoutDatasetInput
    upsert?: UploadHistoryUpsertWithoutDatasetInput
    disconnect?: UploadHistoryWhereInput | boolean
    delete?: UploadHistoryWhereInput | boolean
    connect?: UploadHistoryWhereUniqueInput
    update?: XOR<XOR<UploadHistoryUpdateToOneWithWhereWithoutDatasetInput, UploadHistoryUpdateWithoutDatasetInput>, UploadHistoryUncheckedUpdateWithoutDatasetInput>
  }

  export type DatasetCreateNestedOneWithoutColumnsInput = {
    create?: XOR<DatasetCreateWithoutColumnsInput, DatasetUncheckedCreateWithoutColumnsInput>
    connectOrCreate?: DatasetCreateOrConnectWithoutColumnsInput
    connect?: DatasetWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DatasetUpdateOneRequiredWithoutColumnsNestedInput = {
    create?: XOR<DatasetCreateWithoutColumnsInput, DatasetUncheckedCreateWithoutColumnsInput>
    connectOrCreate?: DatasetCreateOrConnectWithoutColumnsInput
    upsert?: DatasetUpsertWithoutColumnsInput
    connect?: DatasetWhereUniqueInput
    update?: XOR<XOR<DatasetUpdateToOneWithWhereWithoutColumnsInput, DatasetUpdateWithoutColumnsInput>, DatasetUncheckedUpdateWithoutColumnsInput>
  }

  export type UserCreateNestedOneWithoutQueryHistoriesInput = {
    create?: XOR<UserCreateWithoutQueryHistoriesInput, UserUncheckedCreateWithoutQueryHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutQueryHistoriesInput
    connect?: UserWhereUniqueInput
  }

  export type DatasetCreateNestedOneWithoutQueryHistoriesInput = {
    create?: XOR<DatasetCreateWithoutQueryHistoriesInput, DatasetUncheckedCreateWithoutQueryHistoriesInput>
    connectOrCreate?: DatasetCreateOrConnectWithoutQueryHistoriesInput
    connect?: DatasetWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutQueryHistoriesNestedInput = {
    create?: XOR<UserCreateWithoutQueryHistoriesInput, UserUncheckedCreateWithoutQueryHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutQueryHistoriesInput
    upsert?: UserUpsertWithoutQueryHistoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQueryHistoriesInput, UserUpdateWithoutQueryHistoriesInput>, UserUncheckedUpdateWithoutQueryHistoriesInput>
  }

  export type DatasetUpdateOneRequiredWithoutQueryHistoriesNestedInput = {
    create?: XOR<DatasetCreateWithoutQueryHistoriesInput, DatasetUncheckedCreateWithoutQueryHistoriesInput>
    connectOrCreate?: DatasetCreateOrConnectWithoutQueryHistoriesInput
    upsert?: DatasetUpsertWithoutQueryHistoriesInput
    connect?: DatasetWhereUniqueInput
    update?: XOR<XOR<DatasetUpdateToOneWithWhereWithoutQueryHistoriesInput, DatasetUpdateWithoutQueryHistoriesInput>, DatasetUncheckedUpdateWithoutQueryHistoriesInput>
  }

  export type UserCreateNestedOneWithoutChatHistoriesInput = {
    create?: XOR<UserCreateWithoutChatHistoriesInput, UserUncheckedCreateWithoutChatHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatHistoriesInput
    connect?: UserWhereUniqueInput
  }

  export type DatasetCreateNestedOneWithoutChatHistoriesInput = {
    create?: XOR<DatasetCreateWithoutChatHistoriesInput, DatasetUncheckedCreateWithoutChatHistoriesInput>
    connectOrCreate?: DatasetCreateOrConnectWithoutChatHistoriesInput
    connect?: DatasetWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutChatHistoriesNestedInput = {
    create?: XOR<UserCreateWithoutChatHistoriesInput, UserUncheckedCreateWithoutChatHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatHistoriesInput
    upsert?: UserUpsertWithoutChatHistoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatHistoriesInput, UserUpdateWithoutChatHistoriesInput>, UserUncheckedUpdateWithoutChatHistoriesInput>
  }

  export type DatasetUpdateOneRequiredWithoutChatHistoriesNestedInput = {
    create?: XOR<DatasetCreateWithoutChatHistoriesInput, DatasetUncheckedCreateWithoutChatHistoriesInput>
    connectOrCreate?: DatasetCreateOrConnectWithoutChatHistoriesInput
    upsert?: DatasetUpsertWithoutChatHistoriesInput
    connect?: DatasetWhereUniqueInput
    update?: XOR<XOR<DatasetUpdateToOneWithWhereWithoutChatHistoriesInput, DatasetUpdateWithoutChatHistoriesInput>, DatasetUncheckedUpdateWithoutChatHistoriesInput>
  }

  export type DatasetCreateNestedOneWithoutInsightsInput = {
    create?: XOR<DatasetCreateWithoutInsightsInput, DatasetUncheckedCreateWithoutInsightsInput>
    connectOrCreate?: DatasetCreateOrConnectWithoutInsightsInput
    connect?: DatasetWhereUniqueInput
  }

  export type DatasetUpdateOneRequiredWithoutInsightsNestedInput = {
    create?: XOR<DatasetCreateWithoutInsightsInput, DatasetUncheckedCreateWithoutInsightsInput>
    connectOrCreate?: DatasetCreateOrConnectWithoutInsightsInput
    upsert?: DatasetUpsertWithoutInsightsInput
    connect?: DatasetWhereUniqueInput
    update?: XOR<XOR<DatasetUpdateToOneWithWhereWithoutInsightsInput, DatasetUpdateWithoutInsightsInput>, DatasetUncheckedUpdateWithoutInsightsInput>
  }

  export type UserCreateNestedOneWithoutSettingsInput = {
    create?: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettingsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSettingsNestedInput = {
    create?: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettingsInput
    upsert?: UserUpsertWithoutSettingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSettingsInput, UserUpdateWithoutSettingsInput>, UserUncheckedUpdateWithoutSettingsInput>
  }

  export type DatasetCreateNestedOneWithoutUploadHistoryInput = {
    create?: XOR<DatasetCreateWithoutUploadHistoryInput, DatasetUncheckedCreateWithoutUploadHistoryInput>
    connectOrCreate?: DatasetCreateOrConnectWithoutUploadHistoryInput
    connect?: DatasetWhereUniqueInput
  }

  export type DatasetUpdateOneRequiredWithoutUploadHistoryNestedInput = {
    create?: XOR<DatasetCreateWithoutUploadHistoryInput, DatasetUncheckedCreateWithoutUploadHistoryInput>
    connectOrCreate?: DatasetCreateOrConnectWithoutUploadHistoryInput
    upsert?: DatasetUpsertWithoutUploadHistoryInput
    connect?: DatasetWhereUniqueInput
    update?: XOR<XOR<DatasetUpdateToOneWithWhereWithoutUploadHistoryInput, DatasetUpdateWithoutUploadHistoryInput>, DatasetUncheckedUpdateWithoutUploadHistoryInput>
  }

  export type UserCreateNestedOneWithoutActivityLogsInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutActivityLogsNestedInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    upsert?: UserUpsertWithoutActivityLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivityLogsInput, UserUpdateWithoutActivityLogsInput>, UserUncheckedUpdateWithoutActivityLogsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DatasetCreateWithoutUserInput = {
    id?: string
    originalName: string
    tableName: string
    status?: string
    rowCount?: number
    sizeBytes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    columns?: DatasetColumnCreateNestedManyWithoutDatasetInput
    queryHistories?: QueryHistoryCreateNestedManyWithoutDatasetInput
    chatHistories?: ChatHistoryCreateNestedManyWithoutDatasetInput
    insights?: InsightCreateNestedManyWithoutDatasetInput
    uploadHistory?: UploadHistoryCreateNestedOneWithoutDatasetInput
  }

  export type DatasetUncheckedCreateWithoutUserInput = {
    id?: string
    originalName: string
    tableName: string
    status?: string
    rowCount?: number
    sizeBytes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    columns?: DatasetColumnUncheckedCreateNestedManyWithoutDatasetInput
    queryHistories?: QueryHistoryUncheckedCreateNestedManyWithoutDatasetInput
    chatHistories?: ChatHistoryUncheckedCreateNestedManyWithoutDatasetInput
    insights?: InsightUncheckedCreateNestedManyWithoutDatasetInput
    uploadHistory?: UploadHistoryUncheckedCreateNestedOneWithoutDatasetInput
  }

  export type DatasetCreateOrConnectWithoutUserInput = {
    where: DatasetWhereUniqueInput
    create: XOR<DatasetCreateWithoutUserInput, DatasetUncheckedCreateWithoutUserInput>
  }

  export type DatasetCreateManyUserInputEnvelope = {
    data: DatasetCreateManyUserInput | DatasetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type QueryHistoryCreateWithoutUserInput = {
    id?: string
    prompt?: string | null
    sqlQuery: string
    executionTime: number
    rowsReturned?: number
    isFavorite?: boolean
    createdAt?: Date | string
    dataset: DatasetCreateNestedOneWithoutQueryHistoriesInput
  }

  export type QueryHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    datasetId: string
    prompt?: string | null
    sqlQuery: string
    executionTime: number
    rowsReturned?: number
    isFavorite?: boolean
    createdAt?: Date | string
  }

  export type QueryHistoryCreateOrConnectWithoutUserInput = {
    where: QueryHistoryWhereUniqueInput
    create: XOR<QueryHistoryCreateWithoutUserInput, QueryHistoryUncheckedCreateWithoutUserInput>
  }

  export type QueryHistoryCreateManyUserInputEnvelope = {
    data: QueryHistoryCreateManyUserInput | QueryHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatHistoryCreateWithoutUserInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
    dataset: DatasetCreateNestedOneWithoutChatHistoriesInput
  }

  export type ChatHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    datasetId: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ChatHistoryCreateOrConnectWithoutUserInput = {
    where: ChatHistoryWhereUniqueInput
    create: XOR<ChatHistoryCreateWithoutUserInput, ChatHistoryUncheckedCreateWithoutUserInput>
  }

  export type ChatHistoryCreateManyUserInputEnvelope = {
    data: ChatHistoryCreateManyUserInput | ChatHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SettingsCreateWithoutUserInput = {
    id?: string
    theme?: string
    language?: string
    aiModel?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SettingsUncheckedCreateWithoutUserInput = {
    id?: string
    theme?: string
    language?: string
    aiModel?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SettingsCreateOrConnectWithoutUserInput = {
    where: SettingsWhereUniqueInput
    create: XOR<SettingsCreateWithoutUserInput, SettingsUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogCreateWithoutUserInput = {
    id?: string
    action: string
    details?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogUncheckedCreateWithoutUserInput = {
    id?: string
    action: string
    details?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogCreateOrConnectWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogCreateManyUserInputEnvelope = {
    data: ActivityLogCreateManyUserInput | ActivityLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DatasetUpsertWithWhereUniqueWithoutUserInput = {
    where: DatasetWhereUniqueInput
    update: XOR<DatasetUpdateWithoutUserInput, DatasetUncheckedUpdateWithoutUserInput>
    create: XOR<DatasetCreateWithoutUserInput, DatasetUncheckedCreateWithoutUserInput>
  }

  export type DatasetUpdateWithWhereUniqueWithoutUserInput = {
    where: DatasetWhereUniqueInput
    data: XOR<DatasetUpdateWithoutUserInput, DatasetUncheckedUpdateWithoutUserInput>
  }

  export type DatasetUpdateManyWithWhereWithoutUserInput = {
    where: DatasetScalarWhereInput
    data: XOR<DatasetUpdateManyMutationInput, DatasetUncheckedUpdateManyWithoutUserInput>
  }

  export type DatasetScalarWhereInput = {
    AND?: DatasetScalarWhereInput | DatasetScalarWhereInput[]
    OR?: DatasetScalarWhereInput[]
    NOT?: DatasetScalarWhereInput | DatasetScalarWhereInput[]
    id?: StringFilter<"Dataset"> | string
    userId?: StringFilter<"Dataset"> | string
    originalName?: StringFilter<"Dataset"> | string
    tableName?: StringFilter<"Dataset"> | string
    status?: StringFilter<"Dataset"> | string
    rowCount?: IntFilter<"Dataset"> | number
    sizeBytes?: IntFilter<"Dataset"> | number
    createdAt?: DateTimeFilter<"Dataset"> | Date | string
    updatedAt?: DateTimeFilter<"Dataset"> | Date | string
  }

  export type QueryHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: QueryHistoryWhereUniqueInput
    update: XOR<QueryHistoryUpdateWithoutUserInput, QueryHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<QueryHistoryCreateWithoutUserInput, QueryHistoryUncheckedCreateWithoutUserInput>
  }

  export type QueryHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: QueryHistoryWhereUniqueInput
    data: XOR<QueryHistoryUpdateWithoutUserInput, QueryHistoryUncheckedUpdateWithoutUserInput>
  }

  export type QueryHistoryUpdateManyWithWhereWithoutUserInput = {
    where: QueryHistoryScalarWhereInput
    data: XOR<QueryHistoryUpdateManyMutationInput, QueryHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type QueryHistoryScalarWhereInput = {
    AND?: QueryHistoryScalarWhereInput | QueryHistoryScalarWhereInput[]
    OR?: QueryHistoryScalarWhereInput[]
    NOT?: QueryHistoryScalarWhereInput | QueryHistoryScalarWhereInput[]
    id?: StringFilter<"QueryHistory"> | string
    userId?: StringFilter<"QueryHistory"> | string
    datasetId?: StringFilter<"QueryHistory"> | string
    prompt?: StringNullableFilter<"QueryHistory"> | string | null
    sqlQuery?: StringFilter<"QueryHistory"> | string
    executionTime?: IntFilter<"QueryHistory"> | number
    rowsReturned?: IntFilter<"QueryHistory"> | number
    isFavorite?: BoolFilter<"QueryHistory"> | boolean
    createdAt?: DateTimeFilter<"QueryHistory"> | Date | string
  }

  export type ChatHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatHistoryWhereUniqueInput
    update: XOR<ChatHistoryUpdateWithoutUserInput, ChatHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<ChatHistoryCreateWithoutUserInput, ChatHistoryUncheckedCreateWithoutUserInput>
  }

  export type ChatHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatHistoryWhereUniqueInput
    data: XOR<ChatHistoryUpdateWithoutUserInput, ChatHistoryUncheckedUpdateWithoutUserInput>
  }

  export type ChatHistoryUpdateManyWithWhereWithoutUserInput = {
    where: ChatHistoryScalarWhereInput
    data: XOR<ChatHistoryUpdateManyMutationInput, ChatHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatHistoryScalarWhereInput = {
    AND?: ChatHistoryScalarWhereInput | ChatHistoryScalarWhereInput[]
    OR?: ChatHistoryScalarWhereInput[]
    NOT?: ChatHistoryScalarWhereInput | ChatHistoryScalarWhereInput[]
    id?: StringFilter<"ChatHistory"> | string
    userId?: StringFilter<"ChatHistory"> | string
    datasetId?: StringFilter<"ChatHistory"> | string
    role?: StringFilter<"ChatHistory"> | string
    content?: StringFilter<"ChatHistory"> | string
    createdAt?: DateTimeFilter<"ChatHistory"> | Date | string
  }

  export type SettingsUpsertWithoutUserInput = {
    update: XOR<SettingsUpdateWithoutUserInput, SettingsUncheckedUpdateWithoutUserInput>
    create: XOR<SettingsCreateWithoutUserInput, SettingsUncheckedCreateWithoutUserInput>
    where?: SettingsWhereInput
  }

  export type SettingsUpdateToOneWithWhereWithoutUserInput = {
    where?: SettingsWhereInput
    data: XOR<SettingsUpdateWithoutUserInput, SettingsUncheckedUpdateWithoutUserInput>
  }

  export type SettingsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    aiModel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    aiModel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUpsertWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    update: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogUpdateWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    data: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
  }

  export type ActivityLogUpdateManyWithWhereWithoutUserInput = {
    where: ActivityLogScalarWhereInput
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyWithoutUserInput>
  }

  export type ActivityLogScalarWhereInput = {
    AND?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    OR?: ActivityLogScalarWhereInput[]
    NOT?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    userId?: StringFilter<"ActivityLog"> | string
    action?: StringFilter<"ActivityLog"> | string
    details?: StringNullableFilter<"ActivityLog"> | string | null
    ipAddress?: StringNullableFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
  }

  export type UserCreateWithoutDatasetsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    queryHistories?: QueryHistoryCreateNestedManyWithoutUserInput
    chatHistories?: ChatHistoryCreateNestedManyWithoutUserInput
    settings?: SettingsCreateNestedOneWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDatasetsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    queryHistories?: QueryHistoryUncheckedCreateNestedManyWithoutUserInput
    chatHistories?: ChatHistoryUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingsUncheckedCreateNestedOneWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDatasetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDatasetsInput, UserUncheckedCreateWithoutDatasetsInput>
  }

  export type DatasetColumnCreateWithoutDatasetInput = {
    id?: string
    name: string
    type: string
    isNullable?: boolean
    isUnique?: boolean
    isPrimaryKey?: boolean
    min?: string | null
    max?: string | null
    average?: number | null
    median?: number | null
    nullCount?: number
    uniqueCount?: number
  }

  export type DatasetColumnUncheckedCreateWithoutDatasetInput = {
    id?: string
    name: string
    type: string
    isNullable?: boolean
    isUnique?: boolean
    isPrimaryKey?: boolean
    min?: string | null
    max?: string | null
    average?: number | null
    median?: number | null
    nullCount?: number
    uniqueCount?: number
  }

  export type DatasetColumnCreateOrConnectWithoutDatasetInput = {
    where: DatasetColumnWhereUniqueInput
    create: XOR<DatasetColumnCreateWithoutDatasetInput, DatasetColumnUncheckedCreateWithoutDatasetInput>
  }

  export type DatasetColumnCreateManyDatasetInputEnvelope = {
    data: DatasetColumnCreateManyDatasetInput | DatasetColumnCreateManyDatasetInput[]
    skipDuplicates?: boolean
  }

  export type QueryHistoryCreateWithoutDatasetInput = {
    id?: string
    prompt?: string | null
    sqlQuery: string
    executionTime: number
    rowsReturned?: number
    isFavorite?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutQueryHistoriesInput
  }

  export type QueryHistoryUncheckedCreateWithoutDatasetInput = {
    id?: string
    userId: string
    prompt?: string | null
    sqlQuery: string
    executionTime: number
    rowsReturned?: number
    isFavorite?: boolean
    createdAt?: Date | string
  }

  export type QueryHistoryCreateOrConnectWithoutDatasetInput = {
    where: QueryHistoryWhereUniqueInput
    create: XOR<QueryHistoryCreateWithoutDatasetInput, QueryHistoryUncheckedCreateWithoutDatasetInput>
  }

  export type QueryHistoryCreateManyDatasetInputEnvelope = {
    data: QueryHistoryCreateManyDatasetInput | QueryHistoryCreateManyDatasetInput[]
    skipDuplicates?: boolean
  }

  export type ChatHistoryCreateWithoutDatasetInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutChatHistoriesInput
  }

  export type ChatHistoryUncheckedCreateWithoutDatasetInput = {
    id?: string
    userId: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ChatHistoryCreateOrConnectWithoutDatasetInput = {
    where: ChatHistoryWhereUniqueInput
    create: XOR<ChatHistoryCreateWithoutDatasetInput, ChatHistoryUncheckedCreateWithoutDatasetInput>
  }

  export type ChatHistoryCreateManyDatasetInputEnvelope = {
    data: ChatHistoryCreateManyDatasetInput | ChatHistoryCreateManyDatasetInput[]
    skipDuplicates?: boolean
  }

  export type InsightCreateWithoutDatasetInput = {
    id?: string
    title: string
    description: string
    type: string
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type InsightUncheckedCreateWithoutDatasetInput = {
    id?: string
    title: string
    description: string
    type: string
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type InsightCreateOrConnectWithoutDatasetInput = {
    where: InsightWhereUniqueInput
    create: XOR<InsightCreateWithoutDatasetInput, InsightUncheckedCreateWithoutDatasetInput>
  }

  export type InsightCreateManyDatasetInputEnvelope = {
    data: InsightCreateManyDatasetInput | InsightCreateManyDatasetInput[]
    skipDuplicates?: boolean
  }

  export type UploadHistoryCreateWithoutDatasetInput = {
    id?: string
    fileName: string
    fileSize: number
    mimeType: string
    status: string
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type UploadHistoryUncheckedCreateWithoutDatasetInput = {
    id?: string
    fileName: string
    fileSize: number
    mimeType: string
    status: string
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type UploadHistoryCreateOrConnectWithoutDatasetInput = {
    where: UploadHistoryWhereUniqueInput
    create: XOR<UploadHistoryCreateWithoutDatasetInput, UploadHistoryUncheckedCreateWithoutDatasetInput>
  }

  export type UserUpsertWithoutDatasetsInput = {
    update: XOR<UserUpdateWithoutDatasetsInput, UserUncheckedUpdateWithoutDatasetsInput>
    create: XOR<UserCreateWithoutDatasetsInput, UserUncheckedCreateWithoutDatasetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDatasetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDatasetsInput, UserUncheckedUpdateWithoutDatasetsInput>
  }

  export type UserUpdateWithoutDatasetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    queryHistories?: QueryHistoryUpdateManyWithoutUserNestedInput
    chatHistories?: ChatHistoryUpdateManyWithoutUserNestedInput
    settings?: SettingsUpdateOneWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDatasetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    queryHistories?: QueryHistoryUncheckedUpdateManyWithoutUserNestedInput
    chatHistories?: ChatHistoryUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DatasetColumnUpsertWithWhereUniqueWithoutDatasetInput = {
    where: DatasetColumnWhereUniqueInput
    update: XOR<DatasetColumnUpdateWithoutDatasetInput, DatasetColumnUncheckedUpdateWithoutDatasetInput>
    create: XOR<DatasetColumnCreateWithoutDatasetInput, DatasetColumnUncheckedCreateWithoutDatasetInput>
  }

  export type DatasetColumnUpdateWithWhereUniqueWithoutDatasetInput = {
    where: DatasetColumnWhereUniqueInput
    data: XOR<DatasetColumnUpdateWithoutDatasetInput, DatasetColumnUncheckedUpdateWithoutDatasetInput>
  }

  export type DatasetColumnUpdateManyWithWhereWithoutDatasetInput = {
    where: DatasetColumnScalarWhereInput
    data: XOR<DatasetColumnUpdateManyMutationInput, DatasetColumnUncheckedUpdateManyWithoutDatasetInput>
  }

  export type DatasetColumnScalarWhereInput = {
    AND?: DatasetColumnScalarWhereInput | DatasetColumnScalarWhereInput[]
    OR?: DatasetColumnScalarWhereInput[]
    NOT?: DatasetColumnScalarWhereInput | DatasetColumnScalarWhereInput[]
    id?: StringFilter<"DatasetColumn"> | string
    datasetId?: StringFilter<"DatasetColumn"> | string
    name?: StringFilter<"DatasetColumn"> | string
    type?: StringFilter<"DatasetColumn"> | string
    isNullable?: BoolFilter<"DatasetColumn"> | boolean
    isUnique?: BoolFilter<"DatasetColumn"> | boolean
    isPrimaryKey?: BoolFilter<"DatasetColumn"> | boolean
    min?: StringNullableFilter<"DatasetColumn"> | string | null
    max?: StringNullableFilter<"DatasetColumn"> | string | null
    average?: FloatNullableFilter<"DatasetColumn"> | number | null
    median?: FloatNullableFilter<"DatasetColumn"> | number | null
    nullCount?: IntFilter<"DatasetColumn"> | number
    uniqueCount?: IntFilter<"DatasetColumn"> | number
  }

  export type QueryHistoryUpsertWithWhereUniqueWithoutDatasetInput = {
    where: QueryHistoryWhereUniqueInput
    update: XOR<QueryHistoryUpdateWithoutDatasetInput, QueryHistoryUncheckedUpdateWithoutDatasetInput>
    create: XOR<QueryHistoryCreateWithoutDatasetInput, QueryHistoryUncheckedCreateWithoutDatasetInput>
  }

  export type QueryHistoryUpdateWithWhereUniqueWithoutDatasetInput = {
    where: QueryHistoryWhereUniqueInput
    data: XOR<QueryHistoryUpdateWithoutDatasetInput, QueryHistoryUncheckedUpdateWithoutDatasetInput>
  }

  export type QueryHistoryUpdateManyWithWhereWithoutDatasetInput = {
    where: QueryHistoryScalarWhereInput
    data: XOR<QueryHistoryUpdateManyMutationInput, QueryHistoryUncheckedUpdateManyWithoutDatasetInput>
  }

  export type ChatHistoryUpsertWithWhereUniqueWithoutDatasetInput = {
    where: ChatHistoryWhereUniqueInput
    update: XOR<ChatHistoryUpdateWithoutDatasetInput, ChatHistoryUncheckedUpdateWithoutDatasetInput>
    create: XOR<ChatHistoryCreateWithoutDatasetInput, ChatHistoryUncheckedCreateWithoutDatasetInput>
  }

  export type ChatHistoryUpdateWithWhereUniqueWithoutDatasetInput = {
    where: ChatHistoryWhereUniqueInput
    data: XOR<ChatHistoryUpdateWithoutDatasetInput, ChatHistoryUncheckedUpdateWithoutDatasetInput>
  }

  export type ChatHistoryUpdateManyWithWhereWithoutDatasetInput = {
    where: ChatHistoryScalarWhereInput
    data: XOR<ChatHistoryUpdateManyMutationInput, ChatHistoryUncheckedUpdateManyWithoutDatasetInput>
  }

  export type InsightUpsertWithWhereUniqueWithoutDatasetInput = {
    where: InsightWhereUniqueInput
    update: XOR<InsightUpdateWithoutDatasetInput, InsightUncheckedUpdateWithoutDatasetInput>
    create: XOR<InsightCreateWithoutDatasetInput, InsightUncheckedCreateWithoutDatasetInput>
  }

  export type InsightUpdateWithWhereUniqueWithoutDatasetInput = {
    where: InsightWhereUniqueInput
    data: XOR<InsightUpdateWithoutDatasetInput, InsightUncheckedUpdateWithoutDatasetInput>
  }

  export type InsightUpdateManyWithWhereWithoutDatasetInput = {
    where: InsightScalarWhereInput
    data: XOR<InsightUpdateManyMutationInput, InsightUncheckedUpdateManyWithoutDatasetInput>
  }

  export type InsightScalarWhereInput = {
    AND?: InsightScalarWhereInput | InsightScalarWhereInput[]
    OR?: InsightScalarWhereInput[]
    NOT?: InsightScalarWhereInput | InsightScalarWhereInput[]
    id?: StringFilter<"Insight"> | string
    datasetId?: StringFilter<"Insight"> | string
    title?: StringFilter<"Insight"> | string
    description?: StringFilter<"Insight"> | string
    type?: StringFilter<"Insight"> | string
    content?: JsonNullableFilter<"Insight">
    createdAt?: DateTimeFilter<"Insight"> | Date | string
  }

  export type UploadHistoryUpsertWithoutDatasetInput = {
    update: XOR<UploadHistoryUpdateWithoutDatasetInput, UploadHistoryUncheckedUpdateWithoutDatasetInput>
    create: XOR<UploadHistoryCreateWithoutDatasetInput, UploadHistoryUncheckedCreateWithoutDatasetInput>
    where?: UploadHistoryWhereInput
  }

  export type UploadHistoryUpdateToOneWithWhereWithoutDatasetInput = {
    where?: UploadHistoryWhereInput
    data: XOR<UploadHistoryUpdateWithoutDatasetInput, UploadHistoryUncheckedUpdateWithoutDatasetInput>
  }

  export type UploadHistoryUpdateWithoutDatasetInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadHistoryUncheckedUpdateWithoutDatasetInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatasetCreateWithoutColumnsInput = {
    id?: string
    originalName: string
    tableName: string
    status?: string
    rowCount?: number
    sizeBytes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDatasetsInput
    queryHistories?: QueryHistoryCreateNestedManyWithoutDatasetInput
    chatHistories?: ChatHistoryCreateNestedManyWithoutDatasetInput
    insights?: InsightCreateNestedManyWithoutDatasetInput
    uploadHistory?: UploadHistoryCreateNestedOneWithoutDatasetInput
  }

  export type DatasetUncheckedCreateWithoutColumnsInput = {
    id?: string
    userId: string
    originalName: string
    tableName: string
    status?: string
    rowCount?: number
    sizeBytes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    queryHistories?: QueryHistoryUncheckedCreateNestedManyWithoutDatasetInput
    chatHistories?: ChatHistoryUncheckedCreateNestedManyWithoutDatasetInput
    insights?: InsightUncheckedCreateNestedManyWithoutDatasetInput
    uploadHistory?: UploadHistoryUncheckedCreateNestedOneWithoutDatasetInput
  }

  export type DatasetCreateOrConnectWithoutColumnsInput = {
    where: DatasetWhereUniqueInput
    create: XOR<DatasetCreateWithoutColumnsInput, DatasetUncheckedCreateWithoutColumnsInput>
  }

  export type DatasetUpsertWithoutColumnsInput = {
    update: XOR<DatasetUpdateWithoutColumnsInput, DatasetUncheckedUpdateWithoutColumnsInput>
    create: XOR<DatasetCreateWithoutColumnsInput, DatasetUncheckedCreateWithoutColumnsInput>
    where?: DatasetWhereInput
  }

  export type DatasetUpdateToOneWithWhereWithoutColumnsInput = {
    where?: DatasetWhereInput
    data: XOR<DatasetUpdateWithoutColumnsInput, DatasetUncheckedUpdateWithoutColumnsInput>
  }

  export type DatasetUpdateWithoutColumnsInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rowCount?: IntFieldUpdateOperationsInput | number
    sizeBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDatasetsNestedInput
    queryHistories?: QueryHistoryUpdateManyWithoutDatasetNestedInput
    chatHistories?: ChatHistoryUpdateManyWithoutDatasetNestedInput
    insights?: InsightUpdateManyWithoutDatasetNestedInput
    uploadHistory?: UploadHistoryUpdateOneWithoutDatasetNestedInput
  }

  export type DatasetUncheckedUpdateWithoutColumnsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rowCount?: IntFieldUpdateOperationsInput | number
    sizeBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    queryHistories?: QueryHistoryUncheckedUpdateManyWithoutDatasetNestedInput
    chatHistories?: ChatHistoryUncheckedUpdateManyWithoutDatasetNestedInput
    insights?: InsightUncheckedUpdateManyWithoutDatasetNestedInput
    uploadHistory?: UploadHistoryUncheckedUpdateOneWithoutDatasetNestedInput
  }

  export type UserCreateWithoutQueryHistoriesInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    datasets?: DatasetCreateNestedManyWithoutUserInput
    chatHistories?: ChatHistoryCreateNestedManyWithoutUserInput
    settings?: SettingsCreateNestedOneWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQueryHistoriesInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    datasets?: DatasetUncheckedCreateNestedManyWithoutUserInput
    chatHistories?: ChatHistoryUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingsUncheckedCreateNestedOneWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQueryHistoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQueryHistoriesInput, UserUncheckedCreateWithoutQueryHistoriesInput>
  }

  export type DatasetCreateWithoutQueryHistoriesInput = {
    id?: string
    originalName: string
    tableName: string
    status?: string
    rowCount?: number
    sizeBytes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDatasetsInput
    columns?: DatasetColumnCreateNestedManyWithoutDatasetInput
    chatHistories?: ChatHistoryCreateNestedManyWithoutDatasetInput
    insights?: InsightCreateNestedManyWithoutDatasetInput
    uploadHistory?: UploadHistoryCreateNestedOneWithoutDatasetInput
  }

  export type DatasetUncheckedCreateWithoutQueryHistoriesInput = {
    id?: string
    userId: string
    originalName: string
    tableName: string
    status?: string
    rowCount?: number
    sizeBytes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    columns?: DatasetColumnUncheckedCreateNestedManyWithoutDatasetInput
    chatHistories?: ChatHistoryUncheckedCreateNestedManyWithoutDatasetInput
    insights?: InsightUncheckedCreateNestedManyWithoutDatasetInput
    uploadHistory?: UploadHistoryUncheckedCreateNestedOneWithoutDatasetInput
  }

  export type DatasetCreateOrConnectWithoutQueryHistoriesInput = {
    where: DatasetWhereUniqueInput
    create: XOR<DatasetCreateWithoutQueryHistoriesInput, DatasetUncheckedCreateWithoutQueryHistoriesInput>
  }

  export type UserUpsertWithoutQueryHistoriesInput = {
    update: XOR<UserUpdateWithoutQueryHistoriesInput, UserUncheckedUpdateWithoutQueryHistoriesInput>
    create: XOR<UserCreateWithoutQueryHistoriesInput, UserUncheckedCreateWithoutQueryHistoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQueryHistoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQueryHistoriesInput, UserUncheckedUpdateWithoutQueryHistoriesInput>
  }

  export type UserUpdateWithoutQueryHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    datasets?: DatasetUpdateManyWithoutUserNestedInput
    chatHistories?: ChatHistoryUpdateManyWithoutUserNestedInput
    settings?: SettingsUpdateOneWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutQueryHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    datasets?: DatasetUncheckedUpdateManyWithoutUserNestedInput
    chatHistories?: ChatHistoryUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DatasetUpsertWithoutQueryHistoriesInput = {
    update: XOR<DatasetUpdateWithoutQueryHistoriesInput, DatasetUncheckedUpdateWithoutQueryHistoriesInput>
    create: XOR<DatasetCreateWithoutQueryHistoriesInput, DatasetUncheckedCreateWithoutQueryHistoriesInput>
    where?: DatasetWhereInput
  }

  export type DatasetUpdateToOneWithWhereWithoutQueryHistoriesInput = {
    where?: DatasetWhereInput
    data: XOR<DatasetUpdateWithoutQueryHistoriesInput, DatasetUncheckedUpdateWithoutQueryHistoriesInput>
  }

  export type DatasetUpdateWithoutQueryHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rowCount?: IntFieldUpdateOperationsInput | number
    sizeBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDatasetsNestedInput
    columns?: DatasetColumnUpdateManyWithoutDatasetNestedInput
    chatHistories?: ChatHistoryUpdateManyWithoutDatasetNestedInput
    insights?: InsightUpdateManyWithoutDatasetNestedInput
    uploadHistory?: UploadHistoryUpdateOneWithoutDatasetNestedInput
  }

  export type DatasetUncheckedUpdateWithoutQueryHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rowCount?: IntFieldUpdateOperationsInput | number
    sizeBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    columns?: DatasetColumnUncheckedUpdateManyWithoutDatasetNestedInput
    chatHistories?: ChatHistoryUncheckedUpdateManyWithoutDatasetNestedInput
    insights?: InsightUncheckedUpdateManyWithoutDatasetNestedInput
    uploadHistory?: UploadHistoryUncheckedUpdateOneWithoutDatasetNestedInput
  }

  export type UserCreateWithoutChatHistoriesInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    datasets?: DatasetCreateNestedManyWithoutUserInput
    queryHistories?: QueryHistoryCreateNestedManyWithoutUserInput
    settings?: SettingsCreateNestedOneWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatHistoriesInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    datasets?: DatasetUncheckedCreateNestedManyWithoutUserInput
    queryHistories?: QueryHistoryUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingsUncheckedCreateNestedOneWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatHistoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatHistoriesInput, UserUncheckedCreateWithoutChatHistoriesInput>
  }

  export type DatasetCreateWithoutChatHistoriesInput = {
    id?: string
    originalName: string
    tableName: string
    status?: string
    rowCount?: number
    sizeBytes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDatasetsInput
    columns?: DatasetColumnCreateNestedManyWithoutDatasetInput
    queryHistories?: QueryHistoryCreateNestedManyWithoutDatasetInput
    insights?: InsightCreateNestedManyWithoutDatasetInput
    uploadHistory?: UploadHistoryCreateNestedOneWithoutDatasetInput
  }

  export type DatasetUncheckedCreateWithoutChatHistoriesInput = {
    id?: string
    userId: string
    originalName: string
    tableName: string
    status?: string
    rowCount?: number
    sizeBytes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    columns?: DatasetColumnUncheckedCreateNestedManyWithoutDatasetInput
    queryHistories?: QueryHistoryUncheckedCreateNestedManyWithoutDatasetInput
    insights?: InsightUncheckedCreateNestedManyWithoutDatasetInput
    uploadHistory?: UploadHistoryUncheckedCreateNestedOneWithoutDatasetInput
  }

  export type DatasetCreateOrConnectWithoutChatHistoriesInput = {
    where: DatasetWhereUniqueInput
    create: XOR<DatasetCreateWithoutChatHistoriesInput, DatasetUncheckedCreateWithoutChatHistoriesInput>
  }

  export type UserUpsertWithoutChatHistoriesInput = {
    update: XOR<UserUpdateWithoutChatHistoriesInput, UserUncheckedUpdateWithoutChatHistoriesInput>
    create: XOR<UserCreateWithoutChatHistoriesInput, UserUncheckedCreateWithoutChatHistoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatHistoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatHistoriesInput, UserUncheckedUpdateWithoutChatHistoriesInput>
  }

  export type UserUpdateWithoutChatHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    datasets?: DatasetUpdateManyWithoutUserNestedInput
    queryHistories?: QueryHistoryUpdateManyWithoutUserNestedInput
    settings?: SettingsUpdateOneWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    datasets?: DatasetUncheckedUpdateManyWithoutUserNestedInput
    queryHistories?: QueryHistoryUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DatasetUpsertWithoutChatHistoriesInput = {
    update: XOR<DatasetUpdateWithoutChatHistoriesInput, DatasetUncheckedUpdateWithoutChatHistoriesInput>
    create: XOR<DatasetCreateWithoutChatHistoriesInput, DatasetUncheckedCreateWithoutChatHistoriesInput>
    where?: DatasetWhereInput
  }

  export type DatasetUpdateToOneWithWhereWithoutChatHistoriesInput = {
    where?: DatasetWhereInput
    data: XOR<DatasetUpdateWithoutChatHistoriesInput, DatasetUncheckedUpdateWithoutChatHistoriesInput>
  }

  export type DatasetUpdateWithoutChatHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rowCount?: IntFieldUpdateOperationsInput | number
    sizeBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDatasetsNestedInput
    columns?: DatasetColumnUpdateManyWithoutDatasetNestedInput
    queryHistories?: QueryHistoryUpdateManyWithoutDatasetNestedInput
    insights?: InsightUpdateManyWithoutDatasetNestedInput
    uploadHistory?: UploadHistoryUpdateOneWithoutDatasetNestedInput
  }

  export type DatasetUncheckedUpdateWithoutChatHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rowCount?: IntFieldUpdateOperationsInput | number
    sizeBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    columns?: DatasetColumnUncheckedUpdateManyWithoutDatasetNestedInput
    queryHistories?: QueryHistoryUncheckedUpdateManyWithoutDatasetNestedInput
    insights?: InsightUncheckedUpdateManyWithoutDatasetNestedInput
    uploadHistory?: UploadHistoryUncheckedUpdateOneWithoutDatasetNestedInput
  }

  export type DatasetCreateWithoutInsightsInput = {
    id?: string
    originalName: string
    tableName: string
    status?: string
    rowCount?: number
    sizeBytes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDatasetsInput
    columns?: DatasetColumnCreateNestedManyWithoutDatasetInput
    queryHistories?: QueryHistoryCreateNestedManyWithoutDatasetInput
    chatHistories?: ChatHistoryCreateNestedManyWithoutDatasetInput
    uploadHistory?: UploadHistoryCreateNestedOneWithoutDatasetInput
  }

  export type DatasetUncheckedCreateWithoutInsightsInput = {
    id?: string
    userId: string
    originalName: string
    tableName: string
    status?: string
    rowCount?: number
    sizeBytes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    columns?: DatasetColumnUncheckedCreateNestedManyWithoutDatasetInput
    queryHistories?: QueryHistoryUncheckedCreateNestedManyWithoutDatasetInput
    chatHistories?: ChatHistoryUncheckedCreateNestedManyWithoutDatasetInput
    uploadHistory?: UploadHistoryUncheckedCreateNestedOneWithoutDatasetInput
  }

  export type DatasetCreateOrConnectWithoutInsightsInput = {
    where: DatasetWhereUniqueInput
    create: XOR<DatasetCreateWithoutInsightsInput, DatasetUncheckedCreateWithoutInsightsInput>
  }

  export type DatasetUpsertWithoutInsightsInput = {
    update: XOR<DatasetUpdateWithoutInsightsInput, DatasetUncheckedUpdateWithoutInsightsInput>
    create: XOR<DatasetCreateWithoutInsightsInput, DatasetUncheckedCreateWithoutInsightsInput>
    where?: DatasetWhereInput
  }

  export type DatasetUpdateToOneWithWhereWithoutInsightsInput = {
    where?: DatasetWhereInput
    data: XOR<DatasetUpdateWithoutInsightsInput, DatasetUncheckedUpdateWithoutInsightsInput>
  }

  export type DatasetUpdateWithoutInsightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rowCount?: IntFieldUpdateOperationsInput | number
    sizeBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDatasetsNestedInput
    columns?: DatasetColumnUpdateManyWithoutDatasetNestedInput
    queryHistories?: QueryHistoryUpdateManyWithoutDatasetNestedInput
    chatHistories?: ChatHistoryUpdateManyWithoutDatasetNestedInput
    uploadHistory?: UploadHistoryUpdateOneWithoutDatasetNestedInput
  }

  export type DatasetUncheckedUpdateWithoutInsightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rowCount?: IntFieldUpdateOperationsInput | number
    sizeBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    columns?: DatasetColumnUncheckedUpdateManyWithoutDatasetNestedInput
    queryHistories?: QueryHistoryUncheckedUpdateManyWithoutDatasetNestedInput
    chatHistories?: ChatHistoryUncheckedUpdateManyWithoutDatasetNestedInput
    uploadHistory?: UploadHistoryUncheckedUpdateOneWithoutDatasetNestedInput
  }

  export type UserCreateWithoutSettingsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    datasets?: DatasetCreateNestedManyWithoutUserInput
    queryHistories?: QueryHistoryCreateNestedManyWithoutUserInput
    chatHistories?: ChatHistoryCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSettingsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    datasets?: DatasetUncheckedCreateNestedManyWithoutUserInput
    queryHistories?: QueryHistoryUncheckedCreateNestedManyWithoutUserInput
    chatHistories?: ChatHistoryUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSettingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
  }

  export type UserUpsertWithoutSettingsInput = {
    update: XOR<UserUpdateWithoutSettingsInput, UserUncheckedUpdateWithoutSettingsInput>
    create: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSettingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSettingsInput, UserUncheckedUpdateWithoutSettingsInput>
  }

  export type UserUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    datasets?: DatasetUpdateManyWithoutUserNestedInput
    queryHistories?: QueryHistoryUpdateManyWithoutUserNestedInput
    chatHistories?: ChatHistoryUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    datasets?: DatasetUncheckedUpdateManyWithoutUserNestedInput
    queryHistories?: QueryHistoryUncheckedUpdateManyWithoutUserNestedInput
    chatHistories?: ChatHistoryUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DatasetCreateWithoutUploadHistoryInput = {
    id?: string
    originalName: string
    tableName: string
    status?: string
    rowCount?: number
    sizeBytes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDatasetsInput
    columns?: DatasetColumnCreateNestedManyWithoutDatasetInput
    queryHistories?: QueryHistoryCreateNestedManyWithoutDatasetInput
    chatHistories?: ChatHistoryCreateNestedManyWithoutDatasetInput
    insights?: InsightCreateNestedManyWithoutDatasetInput
  }

  export type DatasetUncheckedCreateWithoutUploadHistoryInput = {
    id?: string
    userId: string
    originalName: string
    tableName: string
    status?: string
    rowCount?: number
    sizeBytes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    columns?: DatasetColumnUncheckedCreateNestedManyWithoutDatasetInput
    queryHistories?: QueryHistoryUncheckedCreateNestedManyWithoutDatasetInput
    chatHistories?: ChatHistoryUncheckedCreateNestedManyWithoutDatasetInput
    insights?: InsightUncheckedCreateNestedManyWithoutDatasetInput
  }

  export type DatasetCreateOrConnectWithoutUploadHistoryInput = {
    where: DatasetWhereUniqueInput
    create: XOR<DatasetCreateWithoutUploadHistoryInput, DatasetUncheckedCreateWithoutUploadHistoryInput>
  }

  export type DatasetUpsertWithoutUploadHistoryInput = {
    update: XOR<DatasetUpdateWithoutUploadHistoryInput, DatasetUncheckedUpdateWithoutUploadHistoryInput>
    create: XOR<DatasetCreateWithoutUploadHistoryInput, DatasetUncheckedCreateWithoutUploadHistoryInput>
    where?: DatasetWhereInput
  }

  export type DatasetUpdateToOneWithWhereWithoutUploadHistoryInput = {
    where?: DatasetWhereInput
    data: XOR<DatasetUpdateWithoutUploadHistoryInput, DatasetUncheckedUpdateWithoutUploadHistoryInput>
  }

  export type DatasetUpdateWithoutUploadHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rowCount?: IntFieldUpdateOperationsInput | number
    sizeBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDatasetsNestedInput
    columns?: DatasetColumnUpdateManyWithoutDatasetNestedInput
    queryHistories?: QueryHistoryUpdateManyWithoutDatasetNestedInput
    chatHistories?: ChatHistoryUpdateManyWithoutDatasetNestedInput
    insights?: InsightUpdateManyWithoutDatasetNestedInput
  }

  export type DatasetUncheckedUpdateWithoutUploadHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rowCount?: IntFieldUpdateOperationsInput | number
    sizeBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    columns?: DatasetColumnUncheckedUpdateManyWithoutDatasetNestedInput
    queryHistories?: QueryHistoryUncheckedUpdateManyWithoutDatasetNestedInput
    chatHistories?: ChatHistoryUncheckedUpdateManyWithoutDatasetNestedInput
    insights?: InsightUncheckedUpdateManyWithoutDatasetNestedInput
  }

  export type UserCreateWithoutActivityLogsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    datasets?: DatasetCreateNestedManyWithoutUserInput
    queryHistories?: QueryHistoryCreateNestedManyWithoutUserInput
    chatHistories?: ChatHistoryCreateNestedManyWithoutUserInput
    settings?: SettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutActivityLogsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    datasets?: DatasetUncheckedCreateNestedManyWithoutUserInput
    queryHistories?: QueryHistoryUncheckedCreateNestedManyWithoutUserInput
    chatHistories?: ChatHistoryUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutActivityLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
  }

  export type UserUpsertWithoutActivityLogsInput = {
    update: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivityLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
  }

  export type UserUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    datasets?: DatasetUpdateManyWithoutUserNestedInput
    queryHistories?: QueryHistoryUpdateManyWithoutUserNestedInput
    chatHistories?: ChatHistoryUpdateManyWithoutUserNestedInput
    settings?: SettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    datasets?: DatasetUncheckedUpdateManyWithoutUserNestedInput
    queryHistories?: QueryHistoryUncheckedUpdateManyWithoutUserNestedInput
    chatHistories?: ChatHistoryUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type DatasetCreateManyUserInput = {
    id?: string
    originalName: string
    tableName: string
    status?: string
    rowCount?: number
    sizeBytes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QueryHistoryCreateManyUserInput = {
    id?: string
    datasetId: string
    prompt?: string | null
    sqlQuery: string
    executionTime: number
    rowsReturned?: number
    isFavorite?: boolean
    createdAt?: Date | string
  }

  export type ChatHistoryCreateManyUserInput = {
    id?: string
    datasetId: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type ActivityLogCreateManyUserInput = {
    id?: string
    action: string
    details?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type DatasetUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rowCount?: IntFieldUpdateOperationsInput | number
    sizeBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    columns?: DatasetColumnUpdateManyWithoutDatasetNestedInput
    queryHistories?: QueryHistoryUpdateManyWithoutDatasetNestedInput
    chatHistories?: ChatHistoryUpdateManyWithoutDatasetNestedInput
    insights?: InsightUpdateManyWithoutDatasetNestedInput
    uploadHistory?: UploadHistoryUpdateOneWithoutDatasetNestedInput
  }

  export type DatasetUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rowCount?: IntFieldUpdateOperationsInput | number
    sizeBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    columns?: DatasetColumnUncheckedUpdateManyWithoutDatasetNestedInput
    queryHistories?: QueryHistoryUncheckedUpdateManyWithoutDatasetNestedInput
    chatHistories?: ChatHistoryUncheckedUpdateManyWithoutDatasetNestedInput
    insights?: InsightUncheckedUpdateManyWithoutDatasetNestedInput
    uploadHistory?: UploadHistoryUncheckedUpdateOneWithoutDatasetNestedInput
  }

  export type DatasetUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rowCount?: IntFieldUpdateOperationsInput | number
    sizeBytes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QueryHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    sqlQuery?: StringFieldUpdateOperationsInput | string
    executionTime?: IntFieldUpdateOperationsInput | number
    rowsReturned?: IntFieldUpdateOperationsInput | number
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataset?: DatasetUpdateOneRequiredWithoutQueryHistoriesNestedInput
  }

  export type QueryHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    datasetId?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    sqlQuery?: StringFieldUpdateOperationsInput | string
    executionTime?: IntFieldUpdateOperationsInput | number
    rowsReturned?: IntFieldUpdateOperationsInput | number
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QueryHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    datasetId?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    sqlQuery?: StringFieldUpdateOperationsInput | string
    executionTime?: IntFieldUpdateOperationsInput | number
    rowsReturned?: IntFieldUpdateOperationsInput | number
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataset?: DatasetUpdateOneRequiredWithoutChatHistoriesNestedInput
  }

  export type ChatHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    datasetId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    datasetId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatasetColumnCreateManyDatasetInput = {
    id?: string
    name: string
    type: string
    isNullable?: boolean
    isUnique?: boolean
    isPrimaryKey?: boolean
    min?: string | null
    max?: string | null
    average?: number | null
    median?: number | null
    nullCount?: number
    uniqueCount?: number
  }

  export type QueryHistoryCreateManyDatasetInput = {
    id?: string
    userId: string
    prompt?: string | null
    sqlQuery: string
    executionTime: number
    rowsReturned?: number
    isFavorite?: boolean
    createdAt?: Date | string
  }

  export type ChatHistoryCreateManyDatasetInput = {
    id?: string
    userId: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type InsightCreateManyDatasetInput = {
    id?: string
    title: string
    description: string
    type: string
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DatasetColumnUpdateWithoutDatasetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isNullable?: BoolFieldUpdateOperationsInput | boolean
    isUnique?: BoolFieldUpdateOperationsInput | boolean
    isPrimaryKey?: BoolFieldUpdateOperationsInput | boolean
    min?: NullableStringFieldUpdateOperationsInput | string | null
    max?: NullableStringFieldUpdateOperationsInput | string | null
    average?: NullableFloatFieldUpdateOperationsInput | number | null
    median?: NullableFloatFieldUpdateOperationsInput | number | null
    nullCount?: IntFieldUpdateOperationsInput | number
    uniqueCount?: IntFieldUpdateOperationsInput | number
  }

  export type DatasetColumnUncheckedUpdateWithoutDatasetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isNullable?: BoolFieldUpdateOperationsInput | boolean
    isUnique?: BoolFieldUpdateOperationsInput | boolean
    isPrimaryKey?: BoolFieldUpdateOperationsInput | boolean
    min?: NullableStringFieldUpdateOperationsInput | string | null
    max?: NullableStringFieldUpdateOperationsInput | string | null
    average?: NullableFloatFieldUpdateOperationsInput | number | null
    median?: NullableFloatFieldUpdateOperationsInput | number | null
    nullCount?: IntFieldUpdateOperationsInput | number
    uniqueCount?: IntFieldUpdateOperationsInput | number
  }

  export type DatasetColumnUncheckedUpdateManyWithoutDatasetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isNullable?: BoolFieldUpdateOperationsInput | boolean
    isUnique?: BoolFieldUpdateOperationsInput | boolean
    isPrimaryKey?: BoolFieldUpdateOperationsInput | boolean
    min?: NullableStringFieldUpdateOperationsInput | string | null
    max?: NullableStringFieldUpdateOperationsInput | string | null
    average?: NullableFloatFieldUpdateOperationsInput | number | null
    median?: NullableFloatFieldUpdateOperationsInput | number | null
    nullCount?: IntFieldUpdateOperationsInput | number
    uniqueCount?: IntFieldUpdateOperationsInput | number
  }

  export type QueryHistoryUpdateWithoutDatasetInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    sqlQuery?: StringFieldUpdateOperationsInput | string
    executionTime?: IntFieldUpdateOperationsInput | number
    rowsReturned?: IntFieldUpdateOperationsInput | number
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutQueryHistoriesNestedInput
  }

  export type QueryHistoryUncheckedUpdateWithoutDatasetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    sqlQuery?: StringFieldUpdateOperationsInput | string
    executionTime?: IntFieldUpdateOperationsInput | number
    rowsReturned?: IntFieldUpdateOperationsInput | number
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QueryHistoryUncheckedUpdateManyWithoutDatasetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    sqlQuery?: StringFieldUpdateOperationsInput | string
    executionTime?: IntFieldUpdateOperationsInput | number
    rowsReturned?: IntFieldUpdateOperationsInput | number
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatHistoryUpdateWithoutDatasetInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatHistoriesNestedInput
  }

  export type ChatHistoryUncheckedUpdateWithoutDatasetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatHistoryUncheckedUpdateManyWithoutDatasetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsightUpdateWithoutDatasetInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsightUncheckedUpdateWithoutDatasetInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsightUncheckedUpdateManyWithoutDatasetInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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