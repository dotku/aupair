
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
 * Model Referral
 * 
 */
export type Referral = $Result.DefaultSelection<Prisma.$ReferralPayload>
/**
 * Model AuPairDetails
 * 
 */
export type AuPairDetails = $Result.DefaultSelection<Prisma.$AuPairDetailsPayload>
/**
 * Model HostFamilyDetails
 * 
 */
export type HostFamilyDetails = $Result.DefaultSelection<Prisma.$HostFamilyDetailsPayload>
/**
 * Model EnglishStudentDetails
 * 
 */
export type EnglishStudentDetails = $Result.DefaultSelection<Prisma.$EnglishStudentDetailsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Referrals
 * const referrals = await prisma.referral.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Referrals
   * const referrals = await prisma.referral.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.referral`: Exposes CRUD operations for the **Referral** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Referrals
    * const referrals = await prisma.referral.findMany()
    * ```
    */
  get referral(): Prisma.ReferralDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auPairDetails`: Exposes CRUD operations for the **AuPairDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuPairDetails
    * const auPairDetails = await prisma.auPairDetails.findMany()
    * ```
    */
  get auPairDetails(): Prisma.AuPairDetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hostFamilyDetails`: Exposes CRUD operations for the **HostFamilyDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HostFamilyDetails
    * const hostFamilyDetails = await prisma.hostFamilyDetails.findMany()
    * ```
    */
  get hostFamilyDetails(): Prisma.HostFamilyDetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.englishStudentDetails`: Exposes CRUD operations for the **EnglishStudentDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EnglishStudentDetails
    * const englishStudentDetails = await prisma.englishStudentDetails.findMany()
    * ```
    */
  get englishStudentDetails(): Prisma.EnglishStudentDetailsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Referral: 'Referral',
    AuPairDetails: 'AuPairDetails',
    HostFamilyDetails: 'HostFamilyDetails',
    EnglishStudentDetails: 'EnglishStudentDetails'
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
      modelProps: "referral" | "auPairDetails" | "hostFamilyDetails" | "englishStudentDetails"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Referral: {
        payload: Prisma.$ReferralPayload<ExtArgs>
        fields: Prisma.ReferralFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReferralFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReferralFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          findFirst: {
            args: Prisma.ReferralFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReferralFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          findMany: {
            args: Prisma.ReferralFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>[]
          }
          create: {
            args: Prisma.ReferralCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          createMany: {
            args: Prisma.ReferralCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReferralCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>[]
          }
          delete: {
            args: Prisma.ReferralDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          update: {
            args: Prisma.ReferralUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          deleteMany: {
            args: Prisma.ReferralDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReferralUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReferralUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>[]
          }
          upsert: {
            args: Prisma.ReferralUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          aggregate: {
            args: Prisma.ReferralAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReferral>
          }
          groupBy: {
            args: Prisma.ReferralGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReferralGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReferralCountArgs<ExtArgs>
            result: $Utils.Optional<ReferralCountAggregateOutputType> | number
          }
        }
      }
      AuPairDetails: {
        payload: Prisma.$AuPairDetailsPayload<ExtArgs>
        fields: Prisma.AuPairDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuPairDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuPairDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuPairDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuPairDetailsPayload>
          }
          findFirst: {
            args: Prisma.AuPairDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuPairDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuPairDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuPairDetailsPayload>
          }
          findMany: {
            args: Prisma.AuPairDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuPairDetailsPayload>[]
          }
          create: {
            args: Prisma.AuPairDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuPairDetailsPayload>
          }
          createMany: {
            args: Prisma.AuPairDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuPairDetailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuPairDetailsPayload>[]
          }
          delete: {
            args: Prisma.AuPairDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuPairDetailsPayload>
          }
          update: {
            args: Prisma.AuPairDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuPairDetailsPayload>
          }
          deleteMany: {
            args: Prisma.AuPairDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuPairDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuPairDetailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuPairDetailsPayload>[]
          }
          upsert: {
            args: Prisma.AuPairDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuPairDetailsPayload>
          }
          aggregate: {
            args: Prisma.AuPairDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuPairDetails>
          }
          groupBy: {
            args: Prisma.AuPairDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuPairDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuPairDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<AuPairDetailsCountAggregateOutputType> | number
          }
        }
      }
      HostFamilyDetails: {
        payload: Prisma.$HostFamilyDetailsPayload<ExtArgs>
        fields: Prisma.HostFamilyDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HostFamilyDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostFamilyDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HostFamilyDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostFamilyDetailsPayload>
          }
          findFirst: {
            args: Prisma.HostFamilyDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostFamilyDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HostFamilyDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostFamilyDetailsPayload>
          }
          findMany: {
            args: Prisma.HostFamilyDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostFamilyDetailsPayload>[]
          }
          create: {
            args: Prisma.HostFamilyDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostFamilyDetailsPayload>
          }
          createMany: {
            args: Prisma.HostFamilyDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HostFamilyDetailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostFamilyDetailsPayload>[]
          }
          delete: {
            args: Prisma.HostFamilyDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostFamilyDetailsPayload>
          }
          update: {
            args: Prisma.HostFamilyDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostFamilyDetailsPayload>
          }
          deleteMany: {
            args: Prisma.HostFamilyDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HostFamilyDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HostFamilyDetailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostFamilyDetailsPayload>[]
          }
          upsert: {
            args: Prisma.HostFamilyDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostFamilyDetailsPayload>
          }
          aggregate: {
            args: Prisma.HostFamilyDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHostFamilyDetails>
          }
          groupBy: {
            args: Prisma.HostFamilyDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<HostFamilyDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.HostFamilyDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<HostFamilyDetailsCountAggregateOutputType> | number
          }
        }
      }
      EnglishStudentDetails: {
        payload: Prisma.$EnglishStudentDetailsPayload<ExtArgs>
        fields: Prisma.EnglishStudentDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnglishStudentDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishStudentDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnglishStudentDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishStudentDetailsPayload>
          }
          findFirst: {
            args: Prisma.EnglishStudentDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishStudentDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnglishStudentDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishStudentDetailsPayload>
          }
          findMany: {
            args: Prisma.EnglishStudentDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishStudentDetailsPayload>[]
          }
          create: {
            args: Prisma.EnglishStudentDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishStudentDetailsPayload>
          }
          createMany: {
            args: Prisma.EnglishStudentDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnglishStudentDetailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishStudentDetailsPayload>[]
          }
          delete: {
            args: Prisma.EnglishStudentDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishStudentDetailsPayload>
          }
          update: {
            args: Prisma.EnglishStudentDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishStudentDetailsPayload>
          }
          deleteMany: {
            args: Prisma.EnglishStudentDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnglishStudentDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnglishStudentDetailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishStudentDetailsPayload>[]
          }
          upsert: {
            args: Prisma.EnglishStudentDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnglishStudentDetailsPayload>
          }
          aggregate: {
            args: Prisma.EnglishStudentDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnglishStudentDetails>
          }
          groupBy: {
            args: Prisma.EnglishStudentDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnglishStudentDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnglishStudentDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<EnglishStudentDetailsCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    referral?: ReferralOmit
    auPairDetails?: AuPairDetailsOmit
    hostFamilyDetails?: HostFamilyDetailsOmit
    englishStudentDetails?: EnglishStudentDetailsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Model Referral
   */

  export type AggregateReferral = {
    _count: ReferralCountAggregateOutputType | null
    _avg: ReferralAvgAggregateOutputType | null
    _sum: ReferralSumAggregateOutputType | null
    _min: ReferralMinAggregateOutputType | null
    _max: ReferralMaxAggregateOutputType | null
  }

  export type ReferralAvgAggregateOutputType = {
    age: number | null
  }

  export type ReferralSumAggregateOutputType = {
    age: number | null
  }

  export type ReferralMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    type: string | null
    status: string | null
    referredBy: string | null
    name: string | null
    email: string | null
    phone: string | null
    nationality: string | null
    age: number | null
    englishLevel: string | null
    experience: string | null
    availability: string | null
    notes: string | null
  }

  export type ReferralMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    type: string | null
    status: string | null
    referredBy: string | null
    name: string | null
    email: string | null
    phone: string | null
    nationality: string | null
    age: number | null
    englishLevel: string | null
    experience: string | null
    availability: string | null
    notes: string | null
  }

  export type ReferralCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    type: number
    status: number
    referredBy: number
    name: number
    email: number
    phone: number
    nationality: number
    age: number
    englishLevel: number
    experience: number
    availability: number
    notes: number
    _all: number
  }


  export type ReferralAvgAggregateInputType = {
    age?: true
  }

  export type ReferralSumAggregateInputType = {
    age?: true
  }

  export type ReferralMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    type?: true
    status?: true
    referredBy?: true
    name?: true
    email?: true
    phone?: true
    nationality?: true
    age?: true
    englishLevel?: true
    experience?: true
    availability?: true
    notes?: true
  }

  export type ReferralMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    type?: true
    status?: true
    referredBy?: true
    name?: true
    email?: true
    phone?: true
    nationality?: true
    age?: true
    englishLevel?: true
    experience?: true
    availability?: true
    notes?: true
  }

  export type ReferralCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    type?: true
    status?: true
    referredBy?: true
    name?: true
    email?: true
    phone?: true
    nationality?: true
    age?: true
    englishLevel?: true
    experience?: true
    availability?: true
    notes?: true
    _all?: true
  }

  export type ReferralAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Referral to aggregate.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Referrals
    **/
    _count?: true | ReferralCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReferralAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReferralSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReferralMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReferralMaxAggregateInputType
  }

  export type GetReferralAggregateType<T extends ReferralAggregateArgs> = {
        [P in keyof T & keyof AggregateReferral]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReferral[P]>
      : GetScalarType<T[P], AggregateReferral[P]>
  }




  export type ReferralGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralWhereInput
    orderBy?: ReferralOrderByWithAggregationInput | ReferralOrderByWithAggregationInput[]
    by: ReferralScalarFieldEnum[] | ReferralScalarFieldEnum
    having?: ReferralScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReferralCountAggregateInputType | true
    _avg?: ReferralAvgAggregateInputType
    _sum?: ReferralSumAggregateInputType
    _min?: ReferralMinAggregateInputType
    _max?: ReferralMaxAggregateInputType
  }

  export type ReferralGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    type: string
    status: string
    referredBy: string
    name: string
    email: string
    phone: string
    nationality: string
    age: number
    englishLevel: string
    experience: string
    availability: string
    notes: string | null
    _count: ReferralCountAggregateOutputType | null
    _avg: ReferralAvgAggregateOutputType | null
    _sum: ReferralSumAggregateOutputType | null
    _min: ReferralMinAggregateOutputType | null
    _max: ReferralMaxAggregateOutputType | null
  }

  type GetReferralGroupByPayload<T extends ReferralGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReferralGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReferralGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReferralGroupByOutputType[P]>
            : GetScalarType<T[P], ReferralGroupByOutputType[P]>
        }
      >
    >


  export type ReferralSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
    status?: boolean
    referredBy?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    nationality?: boolean
    age?: boolean
    englishLevel?: boolean
    experience?: boolean
    availability?: boolean
    notes?: boolean
    auPairDetails?: boolean | Referral$auPairDetailsArgs<ExtArgs>
    hostFamilyDetails?: boolean | Referral$hostFamilyDetailsArgs<ExtArgs>
    englishStudentDetails?: boolean | Referral$englishStudentDetailsArgs<ExtArgs>
  }, ExtArgs["result"]["referral"]>

  export type ReferralSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
    status?: boolean
    referredBy?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    nationality?: boolean
    age?: boolean
    englishLevel?: boolean
    experience?: boolean
    availability?: boolean
    notes?: boolean
  }, ExtArgs["result"]["referral"]>

  export type ReferralSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
    status?: boolean
    referredBy?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    nationality?: boolean
    age?: boolean
    englishLevel?: boolean
    experience?: boolean
    availability?: boolean
    notes?: boolean
  }, ExtArgs["result"]["referral"]>

  export type ReferralSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
    status?: boolean
    referredBy?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    nationality?: boolean
    age?: boolean
    englishLevel?: boolean
    experience?: boolean
    availability?: boolean
    notes?: boolean
  }

  export type ReferralOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "type" | "status" | "referredBy" | "name" | "email" | "phone" | "nationality" | "age" | "englishLevel" | "experience" | "availability" | "notes", ExtArgs["result"]["referral"]>
  export type ReferralInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auPairDetails?: boolean | Referral$auPairDetailsArgs<ExtArgs>
    hostFamilyDetails?: boolean | Referral$hostFamilyDetailsArgs<ExtArgs>
    englishStudentDetails?: boolean | Referral$englishStudentDetailsArgs<ExtArgs>
  }
  export type ReferralIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ReferralIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ReferralPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Referral"
    objects: {
      auPairDetails: Prisma.$AuPairDetailsPayload<ExtArgs> | null
      hostFamilyDetails: Prisma.$HostFamilyDetailsPayload<ExtArgs> | null
      englishStudentDetails: Prisma.$EnglishStudentDetailsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      type: string
      status: string
      referredBy: string
      name: string
      email: string
      phone: string
      nationality: string
      age: number
      englishLevel: string
      experience: string
      availability: string
      notes: string | null
    }, ExtArgs["result"]["referral"]>
    composites: {}
  }

  type ReferralGetPayload<S extends boolean | null | undefined | ReferralDefaultArgs> = $Result.GetResult<Prisma.$ReferralPayload, S>

  type ReferralCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReferralFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReferralCountAggregateInputType | true
    }

  export interface ReferralDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Referral'], meta: { name: 'Referral' } }
    /**
     * Find zero or one Referral that matches the filter.
     * @param {ReferralFindUniqueArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReferralFindUniqueArgs>(args: SelectSubset<T, ReferralFindUniqueArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Referral that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReferralFindUniqueOrThrowArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReferralFindUniqueOrThrowArgs>(args: SelectSubset<T, ReferralFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Referral that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralFindFirstArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReferralFindFirstArgs>(args?: SelectSubset<T, ReferralFindFirstArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Referral that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralFindFirstOrThrowArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReferralFindFirstOrThrowArgs>(args?: SelectSubset<T, ReferralFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Referrals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Referrals
     * const referrals = await prisma.referral.findMany()
     * 
     * // Get first 10 Referrals
     * const referrals = await prisma.referral.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const referralWithIdOnly = await prisma.referral.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReferralFindManyArgs>(args?: SelectSubset<T, ReferralFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Referral.
     * @param {ReferralCreateArgs} args - Arguments to create a Referral.
     * @example
     * // Create one Referral
     * const Referral = await prisma.referral.create({
     *   data: {
     *     // ... data to create a Referral
     *   }
     * })
     * 
     */
    create<T extends ReferralCreateArgs>(args: SelectSubset<T, ReferralCreateArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Referrals.
     * @param {ReferralCreateManyArgs} args - Arguments to create many Referrals.
     * @example
     * // Create many Referrals
     * const referral = await prisma.referral.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReferralCreateManyArgs>(args?: SelectSubset<T, ReferralCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Referrals and returns the data saved in the database.
     * @param {ReferralCreateManyAndReturnArgs} args - Arguments to create many Referrals.
     * @example
     * // Create many Referrals
     * const referral = await prisma.referral.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Referrals and only return the `id`
     * const referralWithIdOnly = await prisma.referral.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReferralCreateManyAndReturnArgs>(args?: SelectSubset<T, ReferralCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Referral.
     * @param {ReferralDeleteArgs} args - Arguments to delete one Referral.
     * @example
     * // Delete one Referral
     * const Referral = await prisma.referral.delete({
     *   where: {
     *     // ... filter to delete one Referral
     *   }
     * })
     * 
     */
    delete<T extends ReferralDeleteArgs>(args: SelectSubset<T, ReferralDeleteArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Referral.
     * @param {ReferralUpdateArgs} args - Arguments to update one Referral.
     * @example
     * // Update one Referral
     * const referral = await prisma.referral.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReferralUpdateArgs>(args: SelectSubset<T, ReferralUpdateArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Referrals.
     * @param {ReferralDeleteManyArgs} args - Arguments to filter Referrals to delete.
     * @example
     * // Delete a few Referrals
     * const { count } = await prisma.referral.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReferralDeleteManyArgs>(args?: SelectSubset<T, ReferralDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Referrals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Referrals
     * const referral = await prisma.referral.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReferralUpdateManyArgs>(args: SelectSubset<T, ReferralUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Referrals and returns the data updated in the database.
     * @param {ReferralUpdateManyAndReturnArgs} args - Arguments to update many Referrals.
     * @example
     * // Update many Referrals
     * const referral = await prisma.referral.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Referrals and only return the `id`
     * const referralWithIdOnly = await prisma.referral.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReferralUpdateManyAndReturnArgs>(args: SelectSubset<T, ReferralUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Referral.
     * @param {ReferralUpsertArgs} args - Arguments to update or create a Referral.
     * @example
     * // Update or create a Referral
     * const referral = await prisma.referral.upsert({
     *   create: {
     *     // ... data to create a Referral
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Referral we want to update
     *   }
     * })
     */
    upsert<T extends ReferralUpsertArgs>(args: SelectSubset<T, ReferralUpsertArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Referrals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralCountArgs} args - Arguments to filter Referrals to count.
     * @example
     * // Count the number of Referrals
     * const count = await prisma.referral.count({
     *   where: {
     *     // ... the filter for the Referrals we want to count
     *   }
     * })
    **/
    count<T extends ReferralCountArgs>(
      args?: Subset<T, ReferralCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReferralCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Referral.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReferralAggregateArgs>(args: Subset<T, ReferralAggregateArgs>): Prisma.PrismaPromise<GetReferralAggregateType<T>>

    /**
     * Group by Referral.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralGroupByArgs} args - Group by arguments.
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
      T extends ReferralGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReferralGroupByArgs['orderBy'] }
        : { orderBy?: ReferralGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReferralGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferralGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Referral model
   */
  readonly fields: ReferralFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Referral.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReferralClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auPairDetails<T extends Referral$auPairDetailsArgs<ExtArgs> = {}>(args?: Subset<T, Referral$auPairDetailsArgs<ExtArgs>>): Prisma__AuPairDetailsClient<$Result.GetResult<Prisma.$AuPairDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    hostFamilyDetails<T extends Referral$hostFamilyDetailsArgs<ExtArgs> = {}>(args?: Subset<T, Referral$hostFamilyDetailsArgs<ExtArgs>>): Prisma__HostFamilyDetailsClient<$Result.GetResult<Prisma.$HostFamilyDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    englishStudentDetails<T extends Referral$englishStudentDetailsArgs<ExtArgs> = {}>(args?: Subset<T, Referral$englishStudentDetailsArgs<ExtArgs>>): Prisma__EnglishStudentDetailsClient<$Result.GetResult<Prisma.$EnglishStudentDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Referral model
   */ 
  interface ReferralFieldRefs {
    readonly id: FieldRef<"Referral", 'String'>
    readonly createdAt: FieldRef<"Referral", 'DateTime'>
    readonly updatedAt: FieldRef<"Referral", 'DateTime'>
    readonly type: FieldRef<"Referral", 'String'>
    readonly status: FieldRef<"Referral", 'String'>
    readonly referredBy: FieldRef<"Referral", 'String'>
    readonly name: FieldRef<"Referral", 'String'>
    readonly email: FieldRef<"Referral", 'String'>
    readonly phone: FieldRef<"Referral", 'String'>
    readonly nationality: FieldRef<"Referral", 'String'>
    readonly age: FieldRef<"Referral", 'Int'>
    readonly englishLevel: FieldRef<"Referral", 'String'>
    readonly experience: FieldRef<"Referral", 'String'>
    readonly availability: FieldRef<"Referral", 'String'>
    readonly notes: FieldRef<"Referral", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Referral findUnique
   */
  export type ReferralFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral findUniqueOrThrow
   */
  export type ReferralFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral findFirst
   */
  export type ReferralFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Referrals.
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Referrals.
     */
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * Referral findFirstOrThrow
   */
  export type ReferralFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Referrals.
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Referrals.
     */
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * Referral findMany
   */
  export type ReferralFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referrals to fetch.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Referrals.
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * Referral create
   */
  export type ReferralCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * The data needed to create a Referral.
     */
    data: XOR<ReferralCreateInput, ReferralUncheckedCreateInput>
  }

  /**
   * Referral createMany
   */
  export type ReferralCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Referrals.
     */
    data: ReferralCreateManyInput | ReferralCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Referral createManyAndReturn
   */
  export type ReferralCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * The data used to create many Referrals.
     */
    data: ReferralCreateManyInput | ReferralCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Referral update
   */
  export type ReferralUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * The data needed to update a Referral.
     */
    data: XOR<ReferralUpdateInput, ReferralUncheckedUpdateInput>
    /**
     * Choose, which Referral to update.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral updateMany
   */
  export type ReferralUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Referrals.
     */
    data: XOR<ReferralUpdateManyMutationInput, ReferralUncheckedUpdateManyInput>
    /**
     * Filter which Referrals to update
     */
    where?: ReferralWhereInput
    /**
     * Limit how many Referrals to update.
     */
    limit?: number
  }

  /**
   * Referral updateManyAndReturn
   */
  export type ReferralUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * The data used to update Referrals.
     */
    data: XOR<ReferralUpdateManyMutationInput, ReferralUncheckedUpdateManyInput>
    /**
     * Filter which Referrals to update
     */
    where?: ReferralWhereInput
    /**
     * Limit how many Referrals to update.
     */
    limit?: number
  }

  /**
   * Referral upsert
   */
  export type ReferralUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * The filter to search for the Referral to update in case it exists.
     */
    where: ReferralWhereUniqueInput
    /**
     * In case the Referral found by the `where` argument doesn't exist, create a new Referral with this data.
     */
    create: XOR<ReferralCreateInput, ReferralUncheckedCreateInput>
    /**
     * In case the Referral was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReferralUpdateInput, ReferralUncheckedUpdateInput>
  }

  /**
   * Referral delete
   */
  export type ReferralDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter which Referral to delete.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral deleteMany
   */
  export type ReferralDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Referrals to delete
     */
    where?: ReferralWhereInput
    /**
     * Limit how many Referrals to delete.
     */
    limit?: number
  }

  /**
   * Referral.auPairDetails
   */
  export type Referral$auPairDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuPairDetails
     */
    select?: AuPairDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuPairDetails
     */
    omit?: AuPairDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuPairDetailsInclude<ExtArgs> | null
    where?: AuPairDetailsWhereInput
  }

  /**
   * Referral.hostFamilyDetails
   */
  export type Referral$hostFamilyDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostFamilyDetails
     */
    select?: HostFamilyDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HostFamilyDetails
     */
    omit?: HostFamilyDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostFamilyDetailsInclude<ExtArgs> | null
    where?: HostFamilyDetailsWhereInput
  }

  /**
   * Referral.englishStudentDetails
   */
  export type Referral$englishStudentDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishStudentDetails
     */
    select?: EnglishStudentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishStudentDetails
     */
    omit?: EnglishStudentDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishStudentDetailsInclude<ExtArgs> | null
    where?: EnglishStudentDetailsWhereInput
  }

  /**
   * Referral without action
   */
  export type ReferralDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
  }


  /**
   * Model AuPairDetails
   */

  export type AggregateAuPairDetails = {
    _count: AuPairDetailsCountAggregateOutputType | null
    _min: AuPairDetailsMinAggregateOutputType | null
    _max: AuPairDetailsMaxAggregateOutputType | null
  }

  export type AuPairDetailsMinAggregateOutputType = {
    id: string | null
    referralId: string | null
    childCareExperience: string | null
    drivingLicense: boolean | null
  }

  export type AuPairDetailsMaxAggregateOutputType = {
    id: string | null
    referralId: string | null
    childCareExperience: string | null
    drivingLicense: boolean | null
  }

  export type AuPairDetailsCountAggregateOutputType = {
    id: number
    referralId: number
    childCareExperience: number
    drivingLicense: number
    preferredCountries: number
    _all: number
  }


  export type AuPairDetailsMinAggregateInputType = {
    id?: true
    referralId?: true
    childCareExperience?: true
    drivingLicense?: true
  }

  export type AuPairDetailsMaxAggregateInputType = {
    id?: true
    referralId?: true
    childCareExperience?: true
    drivingLicense?: true
  }

  export type AuPairDetailsCountAggregateInputType = {
    id?: true
    referralId?: true
    childCareExperience?: true
    drivingLicense?: true
    preferredCountries?: true
    _all?: true
  }

  export type AuPairDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuPairDetails to aggregate.
     */
    where?: AuPairDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuPairDetails to fetch.
     */
    orderBy?: AuPairDetailsOrderByWithRelationInput | AuPairDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuPairDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuPairDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuPairDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuPairDetails
    **/
    _count?: true | AuPairDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuPairDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuPairDetailsMaxAggregateInputType
  }

  export type GetAuPairDetailsAggregateType<T extends AuPairDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateAuPairDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuPairDetails[P]>
      : GetScalarType<T[P], AggregateAuPairDetails[P]>
  }




  export type AuPairDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuPairDetailsWhereInput
    orderBy?: AuPairDetailsOrderByWithAggregationInput | AuPairDetailsOrderByWithAggregationInput[]
    by: AuPairDetailsScalarFieldEnum[] | AuPairDetailsScalarFieldEnum
    having?: AuPairDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuPairDetailsCountAggregateInputType | true
    _min?: AuPairDetailsMinAggregateInputType
    _max?: AuPairDetailsMaxAggregateInputType
  }

  export type AuPairDetailsGroupByOutputType = {
    id: string
    referralId: string
    childCareExperience: string
    drivingLicense: boolean
    preferredCountries: string[]
    _count: AuPairDetailsCountAggregateOutputType | null
    _min: AuPairDetailsMinAggregateOutputType | null
    _max: AuPairDetailsMaxAggregateOutputType | null
  }

  type GetAuPairDetailsGroupByPayload<T extends AuPairDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuPairDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuPairDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuPairDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], AuPairDetailsGroupByOutputType[P]>
        }
      >
    >


  export type AuPairDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referralId?: boolean
    childCareExperience?: boolean
    drivingLicense?: boolean
    preferredCountries?: boolean
    referral?: boolean | ReferralDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auPairDetails"]>

  export type AuPairDetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referralId?: boolean
    childCareExperience?: boolean
    drivingLicense?: boolean
    preferredCountries?: boolean
    referral?: boolean | ReferralDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auPairDetails"]>

  export type AuPairDetailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referralId?: boolean
    childCareExperience?: boolean
    drivingLicense?: boolean
    preferredCountries?: boolean
    referral?: boolean | ReferralDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auPairDetails"]>

  export type AuPairDetailsSelectScalar = {
    id?: boolean
    referralId?: boolean
    childCareExperience?: boolean
    drivingLicense?: boolean
    preferredCountries?: boolean
  }

  export type AuPairDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "referralId" | "childCareExperience" | "drivingLicense" | "preferredCountries", ExtArgs["result"]["auPairDetails"]>
  export type AuPairDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referral?: boolean | ReferralDefaultArgs<ExtArgs>
  }
  export type AuPairDetailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referral?: boolean | ReferralDefaultArgs<ExtArgs>
  }
  export type AuPairDetailsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referral?: boolean | ReferralDefaultArgs<ExtArgs>
  }

  export type $AuPairDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuPairDetails"
    objects: {
      referral: Prisma.$ReferralPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      referralId: string
      childCareExperience: string
      drivingLicense: boolean
      preferredCountries: string[]
    }, ExtArgs["result"]["auPairDetails"]>
    composites: {}
  }

  type AuPairDetailsGetPayload<S extends boolean | null | undefined | AuPairDetailsDefaultArgs> = $Result.GetResult<Prisma.$AuPairDetailsPayload, S>

  type AuPairDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuPairDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuPairDetailsCountAggregateInputType | true
    }

  export interface AuPairDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuPairDetails'], meta: { name: 'AuPairDetails' } }
    /**
     * Find zero or one AuPairDetails that matches the filter.
     * @param {AuPairDetailsFindUniqueArgs} args - Arguments to find a AuPairDetails
     * @example
     * // Get one AuPairDetails
     * const auPairDetails = await prisma.auPairDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuPairDetailsFindUniqueArgs>(args: SelectSubset<T, AuPairDetailsFindUniqueArgs<ExtArgs>>): Prisma__AuPairDetailsClient<$Result.GetResult<Prisma.$AuPairDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuPairDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuPairDetailsFindUniqueOrThrowArgs} args - Arguments to find a AuPairDetails
     * @example
     * // Get one AuPairDetails
     * const auPairDetails = await prisma.auPairDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuPairDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, AuPairDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuPairDetailsClient<$Result.GetResult<Prisma.$AuPairDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuPairDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuPairDetailsFindFirstArgs} args - Arguments to find a AuPairDetails
     * @example
     * // Get one AuPairDetails
     * const auPairDetails = await prisma.auPairDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuPairDetailsFindFirstArgs>(args?: SelectSubset<T, AuPairDetailsFindFirstArgs<ExtArgs>>): Prisma__AuPairDetailsClient<$Result.GetResult<Prisma.$AuPairDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuPairDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuPairDetailsFindFirstOrThrowArgs} args - Arguments to find a AuPairDetails
     * @example
     * // Get one AuPairDetails
     * const auPairDetails = await prisma.auPairDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuPairDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, AuPairDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuPairDetailsClient<$Result.GetResult<Prisma.$AuPairDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuPairDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuPairDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuPairDetails
     * const auPairDetails = await prisma.auPairDetails.findMany()
     * 
     * // Get first 10 AuPairDetails
     * const auPairDetails = await prisma.auPairDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auPairDetailsWithIdOnly = await prisma.auPairDetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuPairDetailsFindManyArgs>(args?: SelectSubset<T, AuPairDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuPairDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuPairDetails.
     * @param {AuPairDetailsCreateArgs} args - Arguments to create a AuPairDetails.
     * @example
     * // Create one AuPairDetails
     * const AuPairDetails = await prisma.auPairDetails.create({
     *   data: {
     *     // ... data to create a AuPairDetails
     *   }
     * })
     * 
     */
    create<T extends AuPairDetailsCreateArgs>(args: SelectSubset<T, AuPairDetailsCreateArgs<ExtArgs>>): Prisma__AuPairDetailsClient<$Result.GetResult<Prisma.$AuPairDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuPairDetails.
     * @param {AuPairDetailsCreateManyArgs} args - Arguments to create many AuPairDetails.
     * @example
     * // Create many AuPairDetails
     * const auPairDetails = await prisma.auPairDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuPairDetailsCreateManyArgs>(args?: SelectSubset<T, AuPairDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuPairDetails and returns the data saved in the database.
     * @param {AuPairDetailsCreateManyAndReturnArgs} args - Arguments to create many AuPairDetails.
     * @example
     * // Create many AuPairDetails
     * const auPairDetails = await prisma.auPairDetails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuPairDetails and only return the `id`
     * const auPairDetailsWithIdOnly = await prisma.auPairDetails.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuPairDetailsCreateManyAndReturnArgs>(args?: SelectSubset<T, AuPairDetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuPairDetailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuPairDetails.
     * @param {AuPairDetailsDeleteArgs} args - Arguments to delete one AuPairDetails.
     * @example
     * // Delete one AuPairDetails
     * const AuPairDetails = await prisma.auPairDetails.delete({
     *   where: {
     *     // ... filter to delete one AuPairDetails
     *   }
     * })
     * 
     */
    delete<T extends AuPairDetailsDeleteArgs>(args: SelectSubset<T, AuPairDetailsDeleteArgs<ExtArgs>>): Prisma__AuPairDetailsClient<$Result.GetResult<Prisma.$AuPairDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuPairDetails.
     * @param {AuPairDetailsUpdateArgs} args - Arguments to update one AuPairDetails.
     * @example
     * // Update one AuPairDetails
     * const auPairDetails = await prisma.auPairDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuPairDetailsUpdateArgs>(args: SelectSubset<T, AuPairDetailsUpdateArgs<ExtArgs>>): Prisma__AuPairDetailsClient<$Result.GetResult<Prisma.$AuPairDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuPairDetails.
     * @param {AuPairDetailsDeleteManyArgs} args - Arguments to filter AuPairDetails to delete.
     * @example
     * // Delete a few AuPairDetails
     * const { count } = await prisma.auPairDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuPairDetailsDeleteManyArgs>(args?: SelectSubset<T, AuPairDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuPairDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuPairDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuPairDetails
     * const auPairDetails = await prisma.auPairDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuPairDetailsUpdateManyArgs>(args: SelectSubset<T, AuPairDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuPairDetails and returns the data updated in the database.
     * @param {AuPairDetailsUpdateManyAndReturnArgs} args - Arguments to update many AuPairDetails.
     * @example
     * // Update many AuPairDetails
     * const auPairDetails = await prisma.auPairDetails.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuPairDetails and only return the `id`
     * const auPairDetailsWithIdOnly = await prisma.auPairDetails.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuPairDetailsUpdateManyAndReturnArgs>(args: SelectSubset<T, AuPairDetailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuPairDetailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuPairDetails.
     * @param {AuPairDetailsUpsertArgs} args - Arguments to update or create a AuPairDetails.
     * @example
     * // Update or create a AuPairDetails
     * const auPairDetails = await prisma.auPairDetails.upsert({
     *   create: {
     *     // ... data to create a AuPairDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuPairDetails we want to update
     *   }
     * })
     */
    upsert<T extends AuPairDetailsUpsertArgs>(args: SelectSubset<T, AuPairDetailsUpsertArgs<ExtArgs>>): Prisma__AuPairDetailsClient<$Result.GetResult<Prisma.$AuPairDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuPairDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuPairDetailsCountArgs} args - Arguments to filter AuPairDetails to count.
     * @example
     * // Count the number of AuPairDetails
     * const count = await prisma.auPairDetails.count({
     *   where: {
     *     // ... the filter for the AuPairDetails we want to count
     *   }
     * })
    **/
    count<T extends AuPairDetailsCountArgs>(
      args?: Subset<T, AuPairDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuPairDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuPairDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuPairDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuPairDetailsAggregateArgs>(args: Subset<T, AuPairDetailsAggregateArgs>): Prisma.PrismaPromise<GetAuPairDetailsAggregateType<T>>

    /**
     * Group by AuPairDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuPairDetailsGroupByArgs} args - Group by arguments.
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
      T extends AuPairDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuPairDetailsGroupByArgs['orderBy'] }
        : { orderBy?: AuPairDetailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuPairDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuPairDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuPairDetails model
   */
  readonly fields: AuPairDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuPairDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuPairDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    referral<T extends ReferralDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReferralDefaultArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AuPairDetails model
   */ 
  interface AuPairDetailsFieldRefs {
    readonly id: FieldRef<"AuPairDetails", 'String'>
    readonly referralId: FieldRef<"AuPairDetails", 'String'>
    readonly childCareExperience: FieldRef<"AuPairDetails", 'String'>
    readonly drivingLicense: FieldRef<"AuPairDetails", 'Boolean'>
    readonly preferredCountries: FieldRef<"AuPairDetails", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * AuPairDetails findUnique
   */
  export type AuPairDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuPairDetails
     */
    select?: AuPairDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuPairDetails
     */
    omit?: AuPairDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuPairDetailsInclude<ExtArgs> | null
    /**
     * Filter, which AuPairDetails to fetch.
     */
    where: AuPairDetailsWhereUniqueInput
  }

  /**
   * AuPairDetails findUniqueOrThrow
   */
  export type AuPairDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuPairDetails
     */
    select?: AuPairDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuPairDetails
     */
    omit?: AuPairDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuPairDetailsInclude<ExtArgs> | null
    /**
     * Filter, which AuPairDetails to fetch.
     */
    where: AuPairDetailsWhereUniqueInput
  }

  /**
   * AuPairDetails findFirst
   */
  export type AuPairDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuPairDetails
     */
    select?: AuPairDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuPairDetails
     */
    omit?: AuPairDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuPairDetailsInclude<ExtArgs> | null
    /**
     * Filter, which AuPairDetails to fetch.
     */
    where?: AuPairDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuPairDetails to fetch.
     */
    orderBy?: AuPairDetailsOrderByWithRelationInput | AuPairDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuPairDetails.
     */
    cursor?: AuPairDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuPairDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuPairDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuPairDetails.
     */
    distinct?: AuPairDetailsScalarFieldEnum | AuPairDetailsScalarFieldEnum[]
  }

  /**
   * AuPairDetails findFirstOrThrow
   */
  export type AuPairDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuPairDetails
     */
    select?: AuPairDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuPairDetails
     */
    omit?: AuPairDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuPairDetailsInclude<ExtArgs> | null
    /**
     * Filter, which AuPairDetails to fetch.
     */
    where?: AuPairDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuPairDetails to fetch.
     */
    orderBy?: AuPairDetailsOrderByWithRelationInput | AuPairDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuPairDetails.
     */
    cursor?: AuPairDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuPairDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuPairDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuPairDetails.
     */
    distinct?: AuPairDetailsScalarFieldEnum | AuPairDetailsScalarFieldEnum[]
  }

  /**
   * AuPairDetails findMany
   */
  export type AuPairDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuPairDetails
     */
    select?: AuPairDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuPairDetails
     */
    omit?: AuPairDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuPairDetailsInclude<ExtArgs> | null
    /**
     * Filter, which AuPairDetails to fetch.
     */
    where?: AuPairDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuPairDetails to fetch.
     */
    orderBy?: AuPairDetailsOrderByWithRelationInput | AuPairDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuPairDetails.
     */
    cursor?: AuPairDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuPairDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuPairDetails.
     */
    skip?: number
    distinct?: AuPairDetailsScalarFieldEnum | AuPairDetailsScalarFieldEnum[]
  }

  /**
   * AuPairDetails create
   */
  export type AuPairDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuPairDetails
     */
    select?: AuPairDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuPairDetails
     */
    omit?: AuPairDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuPairDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a AuPairDetails.
     */
    data: XOR<AuPairDetailsCreateInput, AuPairDetailsUncheckedCreateInput>
  }

  /**
   * AuPairDetails createMany
   */
  export type AuPairDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuPairDetails.
     */
    data: AuPairDetailsCreateManyInput | AuPairDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuPairDetails createManyAndReturn
   */
  export type AuPairDetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuPairDetails
     */
    select?: AuPairDetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuPairDetails
     */
    omit?: AuPairDetailsOmit<ExtArgs> | null
    /**
     * The data used to create many AuPairDetails.
     */
    data: AuPairDetailsCreateManyInput | AuPairDetailsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuPairDetailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuPairDetails update
   */
  export type AuPairDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuPairDetails
     */
    select?: AuPairDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuPairDetails
     */
    omit?: AuPairDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuPairDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a AuPairDetails.
     */
    data: XOR<AuPairDetailsUpdateInput, AuPairDetailsUncheckedUpdateInput>
    /**
     * Choose, which AuPairDetails to update.
     */
    where: AuPairDetailsWhereUniqueInput
  }

  /**
   * AuPairDetails updateMany
   */
  export type AuPairDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuPairDetails.
     */
    data: XOR<AuPairDetailsUpdateManyMutationInput, AuPairDetailsUncheckedUpdateManyInput>
    /**
     * Filter which AuPairDetails to update
     */
    where?: AuPairDetailsWhereInput
    /**
     * Limit how many AuPairDetails to update.
     */
    limit?: number
  }

  /**
   * AuPairDetails updateManyAndReturn
   */
  export type AuPairDetailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuPairDetails
     */
    select?: AuPairDetailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuPairDetails
     */
    omit?: AuPairDetailsOmit<ExtArgs> | null
    /**
     * The data used to update AuPairDetails.
     */
    data: XOR<AuPairDetailsUpdateManyMutationInput, AuPairDetailsUncheckedUpdateManyInput>
    /**
     * Filter which AuPairDetails to update
     */
    where?: AuPairDetailsWhereInput
    /**
     * Limit how many AuPairDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuPairDetailsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuPairDetails upsert
   */
  export type AuPairDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuPairDetails
     */
    select?: AuPairDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuPairDetails
     */
    omit?: AuPairDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuPairDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the AuPairDetails to update in case it exists.
     */
    where: AuPairDetailsWhereUniqueInput
    /**
     * In case the AuPairDetails found by the `where` argument doesn't exist, create a new AuPairDetails with this data.
     */
    create: XOR<AuPairDetailsCreateInput, AuPairDetailsUncheckedCreateInput>
    /**
     * In case the AuPairDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuPairDetailsUpdateInput, AuPairDetailsUncheckedUpdateInput>
  }

  /**
   * AuPairDetails delete
   */
  export type AuPairDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuPairDetails
     */
    select?: AuPairDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuPairDetails
     */
    omit?: AuPairDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuPairDetailsInclude<ExtArgs> | null
    /**
     * Filter which AuPairDetails to delete.
     */
    where: AuPairDetailsWhereUniqueInput
  }

  /**
   * AuPairDetails deleteMany
   */
  export type AuPairDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuPairDetails to delete
     */
    where?: AuPairDetailsWhereInput
    /**
     * Limit how many AuPairDetails to delete.
     */
    limit?: number
  }

  /**
   * AuPairDetails without action
   */
  export type AuPairDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuPairDetails
     */
    select?: AuPairDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuPairDetails
     */
    omit?: AuPairDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuPairDetailsInclude<ExtArgs> | null
  }


  /**
   * Model HostFamilyDetails
   */

  export type AggregateHostFamilyDetails = {
    _count: HostFamilyDetailsCountAggregateOutputType | null
    _avg: HostFamilyDetailsAvgAggregateOutputType | null
    _sum: HostFamilyDetailsSumAggregateOutputType | null
    _min: HostFamilyDetailsMinAggregateOutputType | null
    _max: HostFamilyDetailsMaxAggregateOutputType | null
  }

  export type HostFamilyDetailsAvgAggregateOutputType = {
    childrenCount: number | null
  }

  export type HostFamilyDetailsSumAggregateOutputType = {
    childrenCount: number | null
  }

  export type HostFamilyDetailsMinAggregateOutputType = {
    id: string | null
    referralId: string | null
    location: string | null
    childrenCount: number | null
    requirements: string | null
  }

  export type HostFamilyDetailsMaxAggregateOutputType = {
    id: string | null
    referralId: string | null
    location: string | null
    childrenCount: number | null
    requirements: string | null
  }

  export type HostFamilyDetailsCountAggregateOutputType = {
    id: number
    referralId: number
    location: number
    childrenCount: number
    requirements: number
    _all: number
  }


  export type HostFamilyDetailsAvgAggregateInputType = {
    childrenCount?: true
  }

  export type HostFamilyDetailsSumAggregateInputType = {
    childrenCount?: true
  }

  export type HostFamilyDetailsMinAggregateInputType = {
    id?: true
    referralId?: true
    location?: true
    childrenCount?: true
    requirements?: true
  }

  export type HostFamilyDetailsMaxAggregateInputType = {
    id?: true
    referralId?: true
    location?: true
    childrenCount?: true
    requirements?: true
  }

  export type HostFamilyDetailsCountAggregateInputType = {
    id?: true
    referralId?: true
    location?: true
    childrenCount?: true
    requirements?: true
    _all?: true
  }

  export type HostFamilyDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HostFamilyDetails to aggregate.
     */
    where?: HostFamilyDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HostFamilyDetails to fetch.
     */
    orderBy?: HostFamilyDetailsOrderByWithRelationInput | HostFamilyDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HostFamilyDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HostFamilyDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HostFamilyDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HostFamilyDetails
    **/
    _count?: true | HostFamilyDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HostFamilyDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HostFamilyDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HostFamilyDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HostFamilyDetailsMaxAggregateInputType
  }

  export type GetHostFamilyDetailsAggregateType<T extends HostFamilyDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateHostFamilyDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHostFamilyDetails[P]>
      : GetScalarType<T[P], AggregateHostFamilyDetails[P]>
  }




  export type HostFamilyDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HostFamilyDetailsWhereInput
    orderBy?: HostFamilyDetailsOrderByWithAggregationInput | HostFamilyDetailsOrderByWithAggregationInput[]
    by: HostFamilyDetailsScalarFieldEnum[] | HostFamilyDetailsScalarFieldEnum
    having?: HostFamilyDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HostFamilyDetailsCountAggregateInputType | true
    _avg?: HostFamilyDetailsAvgAggregateInputType
    _sum?: HostFamilyDetailsSumAggregateInputType
    _min?: HostFamilyDetailsMinAggregateInputType
    _max?: HostFamilyDetailsMaxAggregateInputType
  }

  export type HostFamilyDetailsGroupByOutputType = {
    id: string
    referralId: string
    location: string
    childrenCount: number
    requirements: string
    _count: HostFamilyDetailsCountAggregateOutputType | null
    _avg: HostFamilyDetailsAvgAggregateOutputType | null
    _sum: HostFamilyDetailsSumAggregateOutputType | null
    _min: HostFamilyDetailsMinAggregateOutputType | null
    _max: HostFamilyDetailsMaxAggregateOutputType | null
  }

  type GetHostFamilyDetailsGroupByPayload<T extends HostFamilyDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HostFamilyDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HostFamilyDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HostFamilyDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], HostFamilyDetailsGroupByOutputType[P]>
        }
      >
    >


  export type HostFamilyDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referralId?: boolean
    location?: boolean
    childrenCount?: boolean
    requirements?: boolean
    referral?: boolean | ReferralDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hostFamilyDetails"]>

  export type HostFamilyDetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referralId?: boolean
    location?: boolean
    childrenCount?: boolean
    requirements?: boolean
    referral?: boolean | ReferralDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hostFamilyDetails"]>

  export type HostFamilyDetailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referralId?: boolean
    location?: boolean
    childrenCount?: boolean
    requirements?: boolean
    referral?: boolean | ReferralDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hostFamilyDetails"]>

  export type HostFamilyDetailsSelectScalar = {
    id?: boolean
    referralId?: boolean
    location?: boolean
    childrenCount?: boolean
    requirements?: boolean
  }

  export type HostFamilyDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "referralId" | "location" | "childrenCount" | "requirements", ExtArgs["result"]["hostFamilyDetails"]>
  export type HostFamilyDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referral?: boolean | ReferralDefaultArgs<ExtArgs>
  }
  export type HostFamilyDetailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referral?: boolean | ReferralDefaultArgs<ExtArgs>
  }
  export type HostFamilyDetailsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referral?: boolean | ReferralDefaultArgs<ExtArgs>
  }

  export type $HostFamilyDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HostFamilyDetails"
    objects: {
      referral: Prisma.$ReferralPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      referralId: string
      location: string
      childrenCount: number
      requirements: string
    }, ExtArgs["result"]["hostFamilyDetails"]>
    composites: {}
  }

  type HostFamilyDetailsGetPayload<S extends boolean | null | undefined | HostFamilyDetailsDefaultArgs> = $Result.GetResult<Prisma.$HostFamilyDetailsPayload, S>

  type HostFamilyDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HostFamilyDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HostFamilyDetailsCountAggregateInputType | true
    }

  export interface HostFamilyDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HostFamilyDetails'], meta: { name: 'HostFamilyDetails' } }
    /**
     * Find zero or one HostFamilyDetails that matches the filter.
     * @param {HostFamilyDetailsFindUniqueArgs} args - Arguments to find a HostFamilyDetails
     * @example
     * // Get one HostFamilyDetails
     * const hostFamilyDetails = await prisma.hostFamilyDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HostFamilyDetailsFindUniqueArgs>(args: SelectSubset<T, HostFamilyDetailsFindUniqueArgs<ExtArgs>>): Prisma__HostFamilyDetailsClient<$Result.GetResult<Prisma.$HostFamilyDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HostFamilyDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HostFamilyDetailsFindUniqueOrThrowArgs} args - Arguments to find a HostFamilyDetails
     * @example
     * // Get one HostFamilyDetails
     * const hostFamilyDetails = await prisma.hostFamilyDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HostFamilyDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, HostFamilyDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HostFamilyDetailsClient<$Result.GetResult<Prisma.$HostFamilyDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HostFamilyDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostFamilyDetailsFindFirstArgs} args - Arguments to find a HostFamilyDetails
     * @example
     * // Get one HostFamilyDetails
     * const hostFamilyDetails = await prisma.hostFamilyDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HostFamilyDetailsFindFirstArgs>(args?: SelectSubset<T, HostFamilyDetailsFindFirstArgs<ExtArgs>>): Prisma__HostFamilyDetailsClient<$Result.GetResult<Prisma.$HostFamilyDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HostFamilyDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostFamilyDetailsFindFirstOrThrowArgs} args - Arguments to find a HostFamilyDetails
     * @example
     * // Get one HostFamilyDetails
     * const hostFamilyDetails = await prisma.hostFamilyDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HostFamilyDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, HostFamilyDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__HostFamilyDetailsClient<$Result.GetResult<Prisma.$HostFamilyDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HostFamilyDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostFamilyDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HostFamilyDetails
     * const hostFamilyDetails = await prisma.hostFamilyDetails.findMany()
     * 
     * // Get first 10 HostFamilyDetails
     * const hostFamilyDetails = await prisma.hostFamilyDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hostFamilyDetailsWithIdOnly = await prisma.hostFamilyDetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HostFamilyDetailsFindManyArgs>(args?: SelectSubset<T, HostFamilyDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HostFamilyDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HostFamilyDetails.
     * @param {HostFamilyDetailsCreateArgs} args - Arguments to create a HostFamilyDetails.
     * @example
     * // Create one HostFamilyDetails
     * const HostFamilyDetails = await prisma.hostFamilyDetails.create({
     *   data: {
     *     // ... data to create a HostFamilyDetails
     *   }
     * })
     * 
     */
    create<T extends HostFamilyDetailsCreateArgs>(args: SelectSubset<T, HostFamilyDetailsCreateArgs<ExtArgs>>): Prisma__HostFamilyDetailsClient<$Result.GetResult<Prisma.$HostFamilyDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HostFamilyDetails.
     * @param {HostFamilyDetailsCreateManyArgs} args - Arguments to create many HostFamilyDetails.
     * @example
     * // Create many HostFamilyDetails
     * const hostFamilyDetails = await prisma.hostFamilyDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HostFamilyDetailsCreateManyArgs>(args?: SelectSubset<T, HostFamilyDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HostFamilyDetails and returns the data saved in the database.
     * @param {HostFamilyDetailsCreateManyAndReturnArgs} args - Arguments to create many HostFamilyDetails.
     * @example
     * // Create many HostFamilyDetails
     * const hostFamilyDetails = await prisma.hostFamilyDetails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HostFamilyDetails and only return the `id`
     * const hostFamilyDetailsWithIdOnly = await prisma.hostFamilyDetails.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HostFamilyDetailsCreateManyAndReturnArgs>(args?: SelectSubset<T, HostFamilyDetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HostFamilyDetailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HostFamilyDetails.
     * @param {HostFamilyDetailsDeleteArgs} args - Arguments to delete one HostFamilyDetails.
     * @example
     * // Delete one HostFamilyDetails
     * const HostFamilyDetails = await prisma.hostFamilyDetails.delete({
     *   where: {
     *     // ... filter to delete one HostFamilyDetails
     *   }
     * })
     * 
     */
    delete<T extends HostFamilyDetailsDeleteArgs>(args: SelectSubset<T, HostFamilyDetailsDeleteArgs<ExtArgs>>): Prisma__HostFamilyDetailsClient<$Result.GetResult<Prisma.$HostFamilyDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HostFamilyDetails.
     * @param {HostFamilyDetailsUpdateArgs} args - Arguments to update one HostFamilyDetails.
     * @example
     * // Update one HostFamilyDetails
     * const hostFamilyDetails = await prisma.hostFamilyDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HostFamilyDetailsUpdateArgs>(args: SelectSubset<T, HostFamilyDetailsUpdateArgs<ExtArgs>>): Prisma__HostFamilyDetailsClient<$Result.GetResult<Prisma.$HostFamilyDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HostFamilyDetails.
     * @param {HostFamilyDetailsDeleteManyArgs} args - Arguments to filter HostFamilyDetails to delete.
     * @example
     * // Delete a few HostFamilyDetails
     * const { count } = await prisma.hostFamilyDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HostFamilyDetailsDeleteManyArgs>(args?: SelectSubset<T, HostFamilyDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HostFamilyDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostFamilyDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HostFamilyDetails
     * const hostFamilyDetails = await prisma.hostFamilyDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HostFamilyDetailsUpdateManyArgs>(args: SelectSubset<T, HostFamilyDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HostFamilyDetails and returns the data updated in the database.
     * @param {HostFamilyDetailsUpdateManyAndReturnArgs} args - Arguments to update many HostFamilyDetails.
     * @example
     * // Update many HostFamilyDetails
     * const hostFamilyDetails = await prisma.hostFamilyDetails.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HostFamilyDetails and only return the `id`
     * const hostFamilyDetailsWithIdOnly = await prisma.hostFamilyDetails.updateManyAndReturn({
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
    updateManyAndReturn<T extends HostFamilyDetailsUpdateManyAndReturnArgs>(args: SelectSubset<T, HostFamilyDetailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HostFamilyDetailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HostFamilyDetails.
     * @param {HostFamilyDetailsUpsertArgs} args - Arguments to update or create a HostFamilyDetails.
     * @example
     * // Update or create a HostFamilyDetails
     * const hostFamilyDetails = await prisma.hostFamilyDetails.upsert({
     *   create: {
     *     // ... data to create a HostFamilyDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HostFamilyDetails we want to update
     *   }
     * })
     */
    upsert<T extends HostFamilyDetailsUpsertArgs>(args: SelectSubset<T, HostFamilyDetailsUpsertArgs<ExtArgs>>): Prisma__HostFamilyDetailsClient<$Result.GetResult<Prisma.$HostFamilyDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HostFamilyDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostFamilyDetailsCountArgs} args - Arguments to filter HostFamilyDetails to count.
     * @example
     * // Count the number of HostFamilyDetails
     * const count = await prisma.hostFamilyDetails.count({
     *   where: {
     *     // ... the filter for the HostFamilyDetails we want to count
     *   }
     * })
    **/
    count<T extends HostFamilyDetailsCountArgs>(
      args?: Subset<T, HostFamilyDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HostFamilyDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HostFamilyDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostFamilyDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HostFamilyDetailsAggregateArgs>(args: Subset<T, HostFamilyDetailsAggregateArgs>): Prisma.PrismaPromise<GetHostFamilyDetailsAggregateType<T>>

    /**
     * Group by HostFamilyDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostFamilyDetailsGroupByArgs} args - Group by arguments.
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
      T extends HostFamilyDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HostFamilyDetailsGroupByArgs['orderBy'] }
        : { orderBy?: HostFamilyDetailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HostFamilyDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHostFamilyDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HostFamilyDetails model
   */
  readonly fields: HostFamilyDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HostFamilyDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HostFamilyDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    referral<T extends ReferralDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReferralDefaultArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HostFamilyDetails model
   */ 
  interface HostFamilyDetailsFieldRefs {
    readonly id: FieldRef<"HostFamilyDetails", 'String'>
    readonly referralId: FieldRef<"HostFamilyDetails", 'String'>
    readonly location: FieldRef<"HostFamilyDetails", 'String'>
    readonly childrenCount: FieldRef<"HostFamilyDetails", 'Int'>
    readonly requirements: FieldRef<"HostFamilyDetails", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HostFamilyDetails findUnique
   */
  export type HostFamilyDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostFamilyDetails
     */
    select?: HostFamilyDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HostFamilyDetails
     */
    omit?: HostFamilyDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostFamilyDetailsInclude<ExtArgs> | null
    /**
     * Filter, which HostFamilyDetails to fetch.
     */
    where: HostFamilyDetailsWhereUniqueInput
  }

  /**
   * HostFamilyDetails findUniqueOrThrow
   */
  export type HostFamilyDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostFamilyDetails
     */
    select?: HostFamilyDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HostFamilyDetails
     */
    omit?: HostFamilyDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostFamilyDetailsInclude<ExtArgs> | null
    /**
     * Filter, which HostFamilyDetails to fetch.
     */
    where: HostFamilyDetailsWhereUniqueInput
  }

  /**
   * HostFamilyDetails findFirst
   */
  export type HostFamilyDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostFamilyDetails
     */
    select?: HostFamilyDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HostFamilyDetails
     */
    omit?: HostFamilyDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostFamilyDetailsInclude<ExtArgs> | null
    /**
     * Filter, which HostFamilyDetails to fetch.
     */
    where?: HostFamilyDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HostFamilyDetails to fetch.
     */
    orderBy?: HostFamilyDetailsOrderByWithRelationInput | HostFamilyDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HostFamilyDetails.
     */
    cursor?: HostFamilyDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HostFamilyDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HostFamilyDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HostFamilyDetails.
     */
    distinct?: HostFamilyDetailsScalarFieldEnum | HostFamilyDetailsScalarFieldEnum[]
  }

  /**
   * HostFamilyDetails findFirstOrThrow
   */
  export type HostFamilyDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostFamilyDetails
     */
    select?: HostFamilyDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HostFamilyDetails
     */
    omit?: HostFamilyDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostFamilyDetailsInclude<ExtArgs> | null
    /**
     * Filter, which HostFamilyDetails to fetch.
     */
    where?: HostFamilyDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HostFamilyDetails to fetch.
     */
    orderBy?: HostFamilyDetailsOrderByWithRelationInput | HostFamilyDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HostFamilyDetails.
     */
    cursor?: HostFamilyDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HostFamilyDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HostFamilyDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HostFamilyDetails.
     */
    distinct?: HostFamilyDetailsScalarFieldEnum | HostFamilyDetailsScalarFieldEnum[]
  }

  /**
   * HostFamilyDetails findMany
   */
  export type HostFamilyDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostFamilyDetails
     */
    select?: HostFamilyDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HostFamilyDetails
     */
    omit?: HostFamilyDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostFamilyDetailsInclude<ExtArgs> | null
    /**
     * Filter, which HostFamilyDetails to fetch.
     */
    where?: HostFamilyDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HostFamilyDetails to fetch.
     */
    orderBy?: HostFamilyDetailsOrderByWithRelationInput | HostFamilyDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HostFamilyDetails.
     */
    cursor?: HostFamilyDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HostFamilyDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HostFamilyDetails.
     */
    skip?: number
    distinct?: HostFamilyDetailsScalarFieldEnum | HostFamilyDetailsScalarFieldEnum[]
  }

  /**
   * HostFamilyDetails create
   */
  export type HostFamilyDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostFamilyDetails
     */
    select?: HostFamilyDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HostFamilyDetails
     */
    omit?: HostFamilyDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostFamilyDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a HostFamilyDetails.
     */
    data: XOR<HostFamilyDetailsCreateInput, HostFamilyDetailsUncheckedCreateInput>
  }

  /**
   * HostFamilyDetails createMany
   */
  export type HostFamilyDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HostFamilyDetails.
     */
    data: HostFamilyDetailsCreateManyInput | HostFamilyDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HostFamilyDetails createManyAndReturn
   */
  export type HostFamilyDetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostFamilyDetails
     */
    select?: HostFamilyDetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HostFamilyDetails
     */
    omit?: HostFamilyDetailsOmit<ExtArgs> | null
    /**
     * The data used to create many HostFamilyDetails.
     */
    data: HostFamilyDetailsCreateManyInput | HostFamilyDetailsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostFamilyDetailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HostFamilyDetails update
   */
  export type HostFamilyDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostFamilyDetails
     */
    select?: HostFamilyDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HostFamilyDetails
     */
    omit?: HostFamilyDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostFamilyDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a HostFamilyDetails.
     */
    data: XOR<HostFamilyDetailsUpdateInput, HostFamilyDetailsUncheckedUpdateInput>
    /**
     * Choose, which HostFamilyDetails to update.
     */
    where: HostFamilyDetailsWhereUniqueInput
  }

  /**
   * HostFamilyDetails updateMany
   */
  export type HostFamilyDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HostFamilyDetails.
     */
    data: XOR<HostFamilyDetailsUpdateManyMutationInput, HostFamilyDetailsUncheckedUpdateManyInput>
    /**
     * Filter which HostFamilyDetails to update
     */
    where?: HostFamilyDetailsWhereInput
    /**
     * Limit how many HostFamilyDetails to update.
     */
    limit?: number
  }

  /**
   * HostFamilyDetails updateManyAndReturn
   */
  export type HostFamilyDetailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostFamilyDetails
     */
    select?: HostFamilyDetailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HostFamilyDetails
     */
    omit?: HostFamilyDetailsOmit<ExtArgs> | null
    /**
     * The data used to update HostFamilyDetails.
     */
    data: XOR<HostFamilyDetailsUpdateManyMutationInput, HostFamilyDetailsUncheckedUpdateManyInput>
    /**
     * Filter which HostFamilyDetails to update
     */
    where?: HostFamilyDetailsWhereInput
    /**
     * Limit how many HostFamilyDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostFamilyDetailsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HostFamilyDetails upsert
   */
  export type HostFamilyDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostFamilyDetails
     */
    select?: HostFamilyDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HostFamilyDetails
     */
    omit?: HostFamilyDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostFamilyDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the HostFamilyDetails to update in case it exists.
     */
    where: HostFamilyDetailsWhereUniqueInput
    /**
     * In case the HostFamilyDetails found by the `where` argument doesn't exist, create a new HostFamilyDetails with this data.
     */
    create: XOR<HostFamilyDetailsCreateInput, HostFamilyDetailsUncheckedCreateInput>
    /**
     * In case the HostFamilyDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HostFamilyDetailsUpdateInput, HostFamilyDetailsUncheckedUpdateInput>
  }

  /**
   * HostFamilyDetails delete
   */
  export type HostFamilyDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostFamilyDetails
     */
    select?: HostFamilyDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HostFamilyDetails
     */
    omit?: HostFamilyDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostFamilyDetailsInclude<ExtArgs> | null
    /**
     * Filter which HostFamilyDetails to delete.
     */
    where: HostFamilyDetailsWhereUniqueInput
  }

  /**
   * HostFamilyDetails deleteMany
   */
  export type HostFamilyDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HostFamilyDetails to delete
     */
    where?: HostFamilyDetailsWhereInput
    /**
     * Limit how many HostFamilyDetails to delete.
     */
    limit?: number
  }

  /**
   * HostFamilyDetails without action
   */
  export type HostFamilyDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostFamilyDetails
     */
    select?: HostFamilyDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HostFamilyDetails
     */
    omit?: HostFamilyDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostFamilyDetailsInclude<ExtArgs> | null
  }


  /**
   * Model EnglishStudentDetails
   */

  export type AggregateEnglishStudentDetails = {
    _count: EnglishStudentDetailsCountAggregateOutputType | null
    _min: EnglishStudentDetailsMinAggregateOutputType | null
    _max: EnglishStudentDetailsMaxAggregateOutputType | null
  }

  export type EnglishStudentDetailsMinAggregateOutputType = {
    id: string | null
    referralId: string | null
    goals: string | null
    schedule: string | null
  }

  export type EnglishStudentDetailsMaxAggregateOutputType = {
    id: string | null
    referralId: string | null
    goals: string | null
    schedule: string | null
  }

  export type EnglishStudentDetailsCountAggregateOutputType = {
    id: number
    referralId: number
    goals: number
    schedule: number
    _all: number
  }


  export type EnglishStudentDetailsMinAggregateInputType = {
    id?: true
    referralId?: true
    goals?: true
    schedule?: true
  }

  export type EnglishStudentDetailsMaxAggregateInputType = {
    id?: true
    referralId?: true
    goals?: true
    schedule?: true
  }

  export type EnglishStudentDetailsCountAggregateInputType = {
    id?: true
    referralId?: true
    goals?: true
    schedule?: true
    _all?: true
  }

  export type EnglishStudentDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnglishStudentDetails to aggregate.
     */
    where?: EnglishStudentDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnglishStudentDetails to fetch.
     */
    orderBy?: EnglishStudentDetailsOrderByWithRelationInput | EnglishStudentDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnglishStudentDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnglishStudentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnglishStudentDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EnglishStudentDetails
    **/
    _count?: true | EnglishStudentDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnglishStudentDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnglishStudentDetailsMaxAggregateInputType
  }

  export type GetEnglishStudentDetailsAggregateType<T extends EnglishStudentDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateEnglishStudentDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnglishStudentDetails[P]>
      : GetScalarType<T[P], AggregateEnglishStudentDetails[P]>
  }




  export type EnglishStudentDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnglishStudentDetailsWhereInput
    orderBy?: EnglishStudentDetailsOrderByWithAggregationInput | EnglishStudentDetailsOrderByWithAggregationInput[]
    by: EnglishStudentDetailsScalarFieldEnum[] | EnglishStudentDetailsScalarFieldEnum
    having?: EnglishStudentDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnglishStudentDetailsCountAggregateInputType | true
    _min?: EnglishStudentDetailsMinAggregateInputType
    _max?: EnglishStudentDetailsMaxAggregateInputType
  }

  export type EnglishStudentDetailsGroupByOutputType = {
    id: string
    referralId: string
    goals: string
    schedule: string
    _count: EnglishStudentDetailsCountAggregateOutputType | null
    _min: EnglishStudentDetailsMinAggregateOutputType | null
    _max: EnglishStudentDetailsMaxAggregateOutputType | null
  }

  type GetEnglishStudentDetailsGroupByPayload<T extends EnglishStudentDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnglishStudentDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnglishStudentDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnglishStudentDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], EnglishStudentDetailsGroupByOutputType[P]>
        }
      >
    >


  export type EnglishStudentDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referralId?: boolean
    goals?: boolean
    schedule?: boolean
    referral?: boolean | ReferralDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["englishStudentDetails"]>

  export type EnglishStudentDetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referralId?: boolean
    goals?: boolean
    schedule?: boolean
    referral?: boolean | ReferralDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["englishStudentDetails"]>

  export type EnglishStudentDetailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referralId?: boolean
    goals?: boolean
    schedule?: boolean
    referral?: boolean | ReferralDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["englishStudentDetails"]>

  export type EnglishStudentDetailsSelectScalar = {
    id?: boolean
    referralId?: boolean
    goals?: boolean
    schedule?: boolean
  }

  export type EnglishStudentDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "referralId" | "goals" | "schedule", ExtArgs["result"]["englishStudentDetails"]>
  export type EnglishStudentDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referral?: boolean | ReferralDefaultArgs<ExtArgs>
  }
  export type EnglishStudentDetailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referral?: boolean | ReferralDefaultArgs<ExtArgs>
  }
  export type EnglishStudentDetailsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referral?: boolean | ReferralDefaultArgs<ExtArgs>
  }

  export type $EnglishStudentDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EnglishStudentDetails"
    objects: {
      referral: Prisma.$ReferralPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      referralId: string
      goals: string
      schedule: string
    }, ExtArgs["result"]["englishStudentDetails"]>
    composites: {}
  }

  type EnglishStudentDetailsGetPayload<S extends boolean | null | undefined | EnglishStudentDetailsDefaultArgs> = $Result.GetResult<Prisma.$EnglishStudentDetailsPayload, S>

  type EnglishStudentDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnglishStudentDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnglishStudentDetailsCountAggregateInputType | true
    }

  export interface EnglishStudentDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EnglishStudentDetails'], meta: { name: 'EnglishStudentDetails' } }
    /**
     * Find zero or one EnglishStudentDetails that matches the filter.
     * @param {EnglishStudentDetailsFindUniqueArgs} args - Arguments to find a EnglishStudentDetails
     * @example
     * // Get one EnglishStudentDetails
     * const englishStudentDetails = await prisma.englishStudentDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnglishStudentDetailsFindUniqueArgs>(args: SelectSubset<T, EnglishStudentDetailsFindUniqueArgs<ExtArgs>>): Prisma__EnglishStudentDetailsClient<$Result.GetResult<Prisma.$EnglishStudentDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EnglishStudentDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnglishStudentDetailsFindUniqueOrThrowArgs} args - Arguments to find a EnglishStudentDetails
     * @example
     * // Get one EnglishStudentDetails
     * const englishStudentDetails = await prisma.englishStudentDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnglishStudentDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, EnglishStudentDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnglishStudentDetailsClient<$Result.GetResult<Prisma.$EnglishStudentDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnglishStudentDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnglishStudentDetailsFindFirstArgs} args - Arguments to find a EnglishStudentDetails
     * @example
     * // Get one EnglishStudentDetails
     * const englishStudentDetails = await prisma.englishStudentDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnglishStudentDetailsFindFirstArgs>(args?: SelectSubset<T, EnglishStudentDetailsFindFirstArgs<ExtArgs>>): Prisma__EnglishStudentDetailsClient<$Result.GetResult<Prisma.$EnglishStudentDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnglishStudentDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnglishStudentDetailsFindFirstOrThrowArgs} args - Arguments to find a EnglishStudentDetails
     * @example
     * // Get one EnglishStudentDetails
     * const englishStudentDetails = await prisma.englishStudentDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnglishStudentDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, EnglishStudentDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnglishStudentDetailsClient<$Result.GetResult<Prisma.$EnglishStudentDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EnglishStudentDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnglishStudentDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EnglishStudentDetails
     * const englishStudentDetails = await prisma.englishStudentDetails.findMany()
     * 
     * // Get first 10 EnglishStudentDetails
     * const englishStudentDetails = await prisma.englishStudentDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const englishStudentDetailsWithIdOnly = await prisma.englishStudentDetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnglishStudentDetailsFindManyArgs>(args?: SelectSubset<T, EnglishStudentDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnglishStudentDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EnglishStudentDetails.
     * @param {EnglishStudentDetailsCreateArgs} args - Arguments to create a EnglishStudentDetails.
     * @example
     * // Create one EnglishStudentDetails
     * const EnglishStudentDetails = await prisma.englishStudentDetails.create({
     *   data: {
     *     // ... data to create a EnglishStudentDetails
     *   }
     * })
     * 
     */
    create<T extends EnglishStudentDetailsCreateArgs>(args: SelectSubset<T, EnglishStudentDetailsCreateArgs<ExtArgs>>): Prisma__EnglishStudentDetailsClient<$Result.GetResult<Prisma.$EnglishStudentDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EnglishStudentDetails.
     * @param {EnglishStudentDetailsCreateManyArgs} args - Arguments to create many EnglishStudentDetails.
     * @example
     * // Create many EnglishStudentDetails
     * const englishStudentDetails = await prisma.englishStudentDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnglishStudentDetailsCreateManyArgs>(args?: SelectSubset<T, EnglishStudentDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EnglishStudentDetails and returns the data saved in the database.
     * @param {EnglishStudentDetailsCreateManyAndReturnArgs} args - Arguments to create many EnglishStudentDetails.
     * @example
     * // Create many EnglishStudentDetails
     * const englishStudentDetails = await prisma.englishStudentDetails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EnglishStudentDetails and only return the `id`
     * const englishStudentDetailsWithIdOnly = await prisma.englishStudentDetails.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnglishStudentDetailsCreateManyAndReturnArgs>(args?: SelectSubset<T, EnglishStudentDetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnglishStudentDetailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EnglishStudentDetails.
     * @param {EnglishStudentDetailsDeleteArgs} args - Arguments to delete one EnglishStudentDetails.
     * @example
     * // Delete one EnglishStudentDetails
     * const EnglishStudentDetails = await prisma.englishStudentDetails.delete({
     *   where: {
     *     // ... filter to delete one EnglishStudentDetails
     *   }
     * })
     * 
     */
    delete<T extends EnglishStudentDetailsDeleteArgs>(args: SelectSubset<T, EnglishStudentDetailsDeleteArgs<ExtArgs>>): Prisma__EnglishStudentDetailsClient<$Result.GetResult<Prisma.$EnglishStudentDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EnglishStudentDetails.
     * @param {EnglishStudentDetailsUpdateArgs} args - Arguments to update one EnglishStudentDetails.
     * @example
     * // Update one EnglishStudentDetails
     * const englishStudentDetails = await prisma.englishStudentDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnglishStudentDetailsUpdateArgs>(args: SelectSubset<T, EnglishStudentDetailsUpdateArgs<ExtArgs>>): Prisma__EnglishStudentDetailsClient<$Result.GetResult<Prisma.$EnglishStudentDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EnglishStudentDetails.
     * @param {EnglishStudentDetailsDeleteManyArgs} args - Arguments to filter EnglishStudentDetails to delete.
     * @example
     * // Delete a few EnglishStudentDetails
     * const { count } = await prisma.englishStudentDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnglishStudentDetailsDeleteManyArgs>(args?: SelectSubset<T, EnglishStudentDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnglishStudentDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnglishStudentDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EnglishStudentDetails
     * const englishStudentDetails = await prisma.englishStudentDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnglishStudentDetailsUpdateManyArgs>(args: SelectSubset<T, EnglishStudentDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnglishStudentDetails and returns the data updated in the database.
     * @param {EnglishStudentDetailsUpdateManyAndReturnArgs} args - Arguments to update many EnglishStudentDetails.
     * @example
     * // Update many EnglishStudentDetails
     * const englishStudentDetails = await prisma.englishStudentDetails.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EnglishStudentDetails and only return the `id`
     * const englishStudentDetailsWithIdOnly = await prisma.englishStudentDetails.updateManyAndReturn({
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
    updateManyAndReturn<T extends EnglishStudentDetailsUpdateManyAndReturnArgs>(args: SelectSubset<T, EnglishStudentDetailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnglishStudentDetailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EnglishStudentDetails.
     * @param {EnglishStudentDetailsUpsertArgs} args - Arguments to update or create a EnglishStudentDetails.
     * @example
     * // Update or create a EnglishStudentDetails
     * const englishStudentDetails = await prisma.englishStudentDetails.upsert({
     *   create: {
     *     // ... data to create a EnglishStudentDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EnglishStudentDetails we want to update
     *   }
     * })
     */
    upsert<T extends EnglishStudentDetailsUpsertArgs>(args: SelectSubset<T, EnglishStudentDetailsUpsertArgs<ExtArgs>>): Prisma__EnglishStudentDetailsClient<$Result.GetResult<Prisma.$EnglishStudentDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EnglishStudentDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnglishStudentDetailsCountArgs} args - Arguments to filter EnglishStudentDetails to count.
     * @example
     * // Count the number of EnglishStudentDetails
     * const count = await prisma.englishStudentDetails.count({
     *   where: {
     *     // ... the filter for the EnglishStudentDetails we want to count
     *   }
     * })
    **/
    count<T extends EnglishStudentDetailsCountArgs>(
      args?: Subset<T, EnglishStudentDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnglishStudentDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EnglishStudentDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnglishStudentDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnglishStudentDetailsAggregateArgs>(args: Subset<T, EnglishStudentDetailsAggregateArgs>): Prisma.PrismaPromise<GetEnglishStudentDetailsAggregateType<T>>

    /**
     * Group by EnglishStudentDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnglishStudentDetailsGroupByArgs} args - Group by arguments.
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
      T extends EnglishStudentDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnglishStudentDetailsGroupByArgs['orderBy'] }
        : { orderBy?: EnglishStudentDetailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnglishStudentDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnglishStudentDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EnglishStudentDetails model
   */
  readonly fields: EnglishStudentDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EnglishStudentDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnglishStudentDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    referral<T extends ReferralDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReferralDefaultArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EnglishStudentDetails model
   */ 
  interface EnglishStudentDetailsFieldRefs {
    readonly id: FieldRef<"EnglishStudentDetails", 'String'>
    readonly referralId: FieldRef<"EnglishStudentDetails", 'String'>
    readonly goals: FieldRef<"EnglishStudentDetails", 'String'>
    readonly schedule: FieldRef<"EnglishStudentDetails", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EnglishStudentDetails findUnique
   */
  export type EnglishStudentDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishStudentDetails
     */
    select?: EnglishStudentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishStudentDetails
     */
    omit?: EnglishStudentDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishStudentDetailsInclude<ExtArgs> | null
    /**
     * Filter, which EnglishStudentDetails to fetch.
     */
    where: EnglishStudentDetailsWhereUniqueInput
  }

  /**
   * EnglishStudentDetails findUniqueOrThrow
   */
  export type EnglishStudentDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishStudentDetails
     */
    select?: EnglishStudentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishStudentDetails
     */
    omit?: EnglishStudentDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishStudentDetailsInclude<ExtArgs> | null
    /**
     * Filter, which EnglishStudentDetails to fetch.
     */
    where: EnglishStudentDetailsWhereUniqueInput
  }

  /**
   * EnglishStudentDetails findFirst
   */
  export type EnglishStudentDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishStudentDetails
     */
    select?: EnglishStudentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishStudentDetails
     */
    omit?: EnglishStudentDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishStudentDetailsInclude<ExtArgs> | null
    /**
     * Filter, which EnglishStudentDetails to fetch.
     */
    where?: EnglishStudentDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnglishStudentDetails to fetch.
     */
    orderBy?: EnglishStudentDetailsOrderByWithRelationInput | EnglishStudentDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnglishStudentDetails.
     */
    cursor?: EnglishStudentDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnglishStudentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnglishStudentDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnglishStudentDetails.
     */
    distinct?: EnglishStudentDetailsScalarFieldEnum | EnglishStudentDetailsScalarFieldEnum[]
  }

  /**
   * EnglishStudentDetails findFirstOrThrow
   */
  export type EnglishStudentDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishStudentDetails
     */
    select?: EnglishStudentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishStudentDetails
     */
    omit?: EnglishStudentDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishStudentDetailsInclude<ExtArgs> | null
    /**
     * Filter, which EnglishStudentDetails to fetch.
     */
    where?: EnglishStudentDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnglishStudentDetails to fetch.
     */
    orderBy?: EnglishStudentDetailsOrderByWithRelationInput | EnglishStudentDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnglishStudentDetails.
     */
    cursor?: EnglishStudentDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnglishStudentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnglishStudentDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnglishStudentDetails.
     */
    distinct?: EnglishStudentDetailsScalarFieldEnum | EnglishStudentDetailsScalarFieldEnum[]
  }

  /**
   * EnglishStudentDetails findMany
   */
  export type EnglishStudentDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishStudentDetails
     */
    select?: EnglishStudentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishStudentDetails
     */
    omit?: EnglishStudentDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishStudentDetailsInclude<ExtArgs> | null
    /**
     * Filter, which EnglishStudentDetails to fetch.
     */
    where?: EnglishStudentDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnglishStudentDetails to fetch.
     */
    orderBy?: EnglishStudentDetailsOrderByWithRelationInput | EnglishStudentDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EnglishStudentDetails.
     */
    cursor?: EnglishStudentDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnglishStudentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnglishStudentDetails.
     */
    skip?: number
    distinct?: EnglishStudentDetailsScalarFieldEnum | EnglishStudentDetailsScalarFieldEnum[]
  }

  /**
   * EnglishStudentDetails create
   */
  export type EnglishStudentDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishStudentDetails
     */
    select?: EnglishStudentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishStudentDetails
     */
    omit?: EnglishStudentDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishStudentDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a EnglishStudentDetails.
     */
    data: XOR<EnglishStudentDetailsCreateInput, EnglishStudentDetailsUncheckedCreateInput>
  }

  /**
   * EnglishStudentDetails createMany
   */
  export type EnglishStudentDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EnglishStudentDetails.
     */
    data: EnglishStudentDetailsCreateManyInput | EnglishStudentDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EnglishStudentDetails createManyAndReturn
   */
  export type EnglishStudentDetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishStudentDetails
     */
    select?: EnglishStudentDetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishStudentDetails
     */
    omit?: EnglishStudentDetailsOmit<ExtArgs> | null
    /**
     * The data used to create many EnglishStudentDetails.
     */
    data: EnglishStudentDetailsCreateManyInput | EnglishStudentDetailsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishStudentDetailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EnglishStudentDetails update
   */
  export type EnglishStudentDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishStudentDetails
     */
    select?: EnglishStudentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishStudentDetails
     */
    omit?: EnglishStudentDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishStudentDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a EnglishStudentDetails.
     */
    data: XOR<EnglishStudentDetailsUpdateInput, EnglishStudentDetailsUncheckedUpdateInput>
    /**
     * Choose, which EnglishStudentDetails to update.
     */
    where: EnglishStudentDetailsWhereUniqueInput
  }

  /**
   * EnglishStudentDetails updateMany
   */
  export type EnglishStudentDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EnglishStudentDetails.
     */
    data: XOR<EnglishStudentDetailsUpdateManyMutationInput, EnglishStudentDetailsUncheckedUpdateManyInput>
    /**
     * Filter which EnglishStudentDetails to update
     */
    where?: EnglishStudentDetailsWhereInput
    /**
     * Limit how many EnglishStudentDetails to update.
     */
    limit?: number
  }

  /**
   * EnglishStudentDetails updateManyAndReturn
   */
  export type EnglishStudentDetailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishStudentDetails
     */
    select?: EnglishStudentDetailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishStudentDetails
     */
    omit?: EnglishStudentDetailsOmit<ExtArgs> | null
    /**
     * The data used to update EnglishStudentDetails.
     */
    data: XOR<EnglishStudentDetailsUpdateManyMutationInput, EnglishStudentDetailsUncheckedUpdateManyInput>
    /**
     * Filter which EnglishStudentDetails to update
     */
    where?: EnglishStudentDetailsWhereInput
    /**
     * Limit how many EnglishStudentDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishStudentDetailsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EnglishStudentDetails upsert
   */
  export type EnglishStudentDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishStudentDetails
     */
    select?: EnglishStudentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishStudentDetails
     */
    omit?: EnglishStudentDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishStudentDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the EnglishStudentDetails to update in case it exists.
     */
    where: EnglishStudentDetailsWhereUniqueInput
    /**
     * In case the EnglishStudentDetails found by the `where` argument doesn't exist, create a new EnglishStudentDetails with this data.
     */
    create: XOR<EnglishStudentDetailsCreateInput, EnglishStudentDetailsUncheckedCreateInput>
    /**
     * In case the EnglishStudentDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnglishStudentDetailsUpdateInput, EnglishStudentDetailsUncheckedUpdateInput>
  }

  /**
   * EnglishStudentDetails delete
   */
  export type EnglishStudentDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishStudentDetails
     */
    select?: EnglishStudentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishStudentDetails
     */
    omit?: EnglishStudentDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishStudentDetailsInclude<ExtArgs> | null
    /**
     * Filter which EnglishStudentDetails to delete.
     */
    where: EnglishStudentDetailsWhereUniqueInput
  }

  /**
   * EnglishStudentDetails deleteMany
   */
  export type EnglishStudentDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnglishStudentDetails to delete
     */
    where?: EnglishStudentDetailsWhereInput
    /**
     * Limit how many EnglishStudentDetails to delete.
     */
    limit?: number
  }

  /**
   * EnglishStudentDetails without action
   */
  export type EnglishStudentDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnglishStudentDetails
     */
    select?: EnglishStudentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnglishStudentDetails
     */
    omit?: EnglishStudentDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnglishStudentDetailsInclude<ExtArgs> | null
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


  export const ReferralScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    type: 'type',
    status: 'status',
    referredBy: 'referredBy',
    name: 'name',
    email: 'email',
    phone: 'phone',
    nationality: 'nationality',
    age: 'age',
    englishLevel: 'englishLevel',
    experience: 'experience',
    availability: 'availability',
    notes: 'notes'
  };

  export type ReferralScalarFieldEnum = (typeof ReferralScalarFieldEnum)[keyof typeof ReferralScalarFieldEnum]


  export const AuPairDetailsScalarFieldEnum: {
    id: 'id',
    referralId: 'referralId',
    childCareExperience: 'childCareExperience',
    drivingLicense: 'drivingLicense',
    preferredCountries: 'preferredCountries'
  };

  export type AuPairDetailsScalarFieldEnum = (typeof AuPairDetailsScalarFieldEnum)[keyof typeof AuPairDetailsScalarFieldEnum]


  export const HostFamilyDetailsScalarFieldEnum: {
    id: 'id',
    referralId: 'referralId',
    location: 'location',
    childrenCount: 'childrenCount',
    requirements: 'requirements'
  };

  export type HostFamilyDetailsScalarFieldEnum = (typeof HostFamilyDetailsScalarFieldEnum)[keyof typeof HostFamilyDetailsScalarFieldEnum]


  export const EnglishStudentDetailsScalarFieldEnum: {
    id: 'id',
    referralId: 'referralId',
    goals: 'goals',
    schedule: 'schedule'
  };

  export type EnglishStudentDetailsScalarFieldEnum = (typeof EnglishStudentDetailsScalarFieldEnum)[keyof typeof EnglishStudentDetailsScalarFieldEnum]


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
   * Deep Input Types
   */


  export type ReferralWhereInput = {
    AND?: ReferralWhereInput | ReferralWhereInput[]
    OR?: ReferralWhereInput[]
    NOT?: ReferralWhereInput | ReferralWhereInput[]
    id?: StringFilter<"Referral"> | string
    createdAt?: DateTimeFilter<"Referral"> | Date | string
    updatedAt?: DateTimeFilter<"Referral"> | Date | string
    type?: StringFilter<"Referral"> | string
    status?: StringFilter<"Referral"> | string
    referredBy?: UuidFilter<"Referral"> | string
    name?: StringFilter<"Referral"> | string
    email?: StringFilter<"Referral"> | string
    phone?: StringFilter<"Referral"> | string
    nationality?: StringFilter<"Referral"> | string
    age?: IntFilter<"Referral"> | number
    englishLevel?: StringFilter<"Referral"> | string
    experience?: StringFilter<"Referral"> | string
    availability?: StringFilter<"Referral"> | string
    notes?: StringNullableFilter<"Referral"> | string | null
    auPairDetails?: XOR<AuPairDetailsNullableScalarRelationFilter, AuPairDetailsWhereInput> | null
    hostFamilyDetails?: XOR<HostFamilyDetailsNullableScalarRelationFilter, HostFamilyDetailsWhereInput> | null
    englishStudentDetails?: XOR<EnglishStudentDetailsNullableScalarRelationFilter, EnglishStudentDetailsWhereInput> | null
  }

  export type ReferralOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    status?: SortOrder
    referredBy?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    nationality?: SortOrder
    age?: SortOrder
    englishLevel?: SortOrder
    experience?: SortOrder
    availability?: SortOrder
    notes?: SortOrderInput | SortOrder
    auPairDetails?: AuPairDetailsOrderByWithRelationInput
    hostFamilyDetails?: HostFamilyDetailsOrderByWithRelationInput
    englishStudentDetails?: EnglishStudentDetailsOrderByWithRelationInput
  }

  export type ReferralWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReferralWhereInput | ReferralWhereInput[]
    OR?: ReferralWhereInput[]
    NOT?: ReferralWhereInput | ReferralWhereInput[]
    createdAt?: DateTimeFilter<"Referral"> | Date | string
    updatedAt?: DateTimeFilter<"Referral"> | Date | string
    type?: StringFilter<"Referral"> | string
    status?: StringFilter<"Referral"> | string
    referredBy?: UuidFilter<"Referral"> | string
    name?: StringFilter<"Referral"> | string
    email?: StringFilter<"Referral"> | string
    phone?: StringFilter<"Referral"> | string
    nationality?: StringFilter<"Referral"> | string
    age?: IntFilter<"Referral"> | number
    englishLevel?: StringFilter<"Referral"> | string
    experience?: StringFilter<"Referral"> | string
    availability?: StringFilter<"Referral"> | string
    notes?: StringNullableFilter<"Referral"> | string | null
    auPairDetails?: XOR<AuPairDetailsNullableScalarRelationFilter, AuPairDetailsWhereInput> | null
    hostFamilyDetails?: XOR<HostFamilyDetailsNullableScalarRelationFilter, HostFamilyDetailsWhereInput> | null
    englishStudentDetails?: XOR<EnglishStudentDetailsNullableScalarRelationFilter, EnglishStudentDetailsWhereInput> | null
  }, "id">

  export type ReferralOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    status?: SortOrder
    referredBy?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    nationality?: SortOrder
    age?: SortOrder
    englishLevel?: SortOrder
    experience?: SortOrder
    availability?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: ReferralCountOrderByAggregateInput
    _avg?: ReferralAvgOrderByAggregateInput
    _max?: ReferralMaxOrderByAggregateInput
    _min?: ReferralMinOrderByAggregateInput
    _sum?: ReferralSumOrderByAggregateInput
  }

  export type ReferralScalarWhereWithAggregatesInput = {
    AND?: ReferralScalarWhereWithAggregatesInput | ReferralScalarWhereWithAggregatesInput[]
    OR?: ReferralScalarWhereWithAggregatesInput[]
    NOT?: ReferralScalarWhereWithAggregatesInput | ReferralScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Referral"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Referral"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Referral"> | Date | string
    type?: StringWithAggregatesFilter<"Referral"> | string
    status?: StringWithAggregatesFilter<"Referral"> | string
    referredBy?: UuidWithAggregatesFilter<"Referral"> | string
    name?: StringWithAggregatesFilter<"Referral"> | string
    email?: StringWithAggregatesFilter<"Referral"> | string
    phone?: StringWithAggregatesFilter<"Referral"> | string
    nationality?: StringWithAggregatesFilter<"Referral"> | string
    age?: IntWithAggregatesFilter<"Referral"> | number
    englishLevel?: StringWithAggregatesFilter<"Referral"> | string
    experience?: StringWithAggregatesFilter<"Referral"> | string
    availability?: StringWithAggregatesFilter<"Referral"> | string
    notes?: StringNullableWithAggregatesFilter<"Referral"> | string | null
  }

  export type AuPairDetailsWhereInput = {
    AND?: AuPairDetailsWhereInput | AuPairDetailsWhereInput[]
    OR?: AuPairDetailsWhereInput[]
    NOT?: AuPairDetailsWhereInput | AuPairDetailsWhereInput[]
    id?: StringFilter<"AuPairDetails"> | string
    referralId?: StringFilter<"AuPairDetails"> | string
    childCareExperience?: StringFilter<"AuPairDetails"> | string
    drivingLicense?: BoolFilter<"AuPairDetails"> | boolean
    preferredCountries?: StringNullableListFilter<"AuPairDetails">
    referral?: XOR<ReferralScalarRelationFilter, ReferralWhereInput>
  }

  export type AuPairDetailsOrderByWithRelationInput = {
    id?: SortOrder
    referralId?: SortOrder
    childCareExperience?: SortOrder
    drivingLicense?: SortOrder
    preferredCountries?: SortOrder
    referral?: ReferralOrderByWithRelationInput
  }

  export type AuPairDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    referralId?: string
    AND?: AuPairDetailsWhereInput | AuPairDetailsWhereInput[]
    OR?: AuPairDetailsWhereInput[]
    NOT?: AuPairDetailsWhereInput | AuPairDetailsWhereInput[]
    childCareExperience?: StringFilter<"AuPairDetails"> | string
    drivingLicense?: BoolFilter<"AuPairDetails"> | boolean
    preferredCountries?: StringNullableListFilter<"AuPairDetails">
    referral?: XOR<ReferralScalarRelationFilter, ReferralWhereInput>
  }, "id" | "referralId">

  export type AuPairDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    referralId?: SortOrder
    childCareExperience?: SortOrder
    drivingLicense?: SortOrder
    preferredCountries?: SortOrder
    _count?: AuPairDetailsCountOrderByAggregateInput
    _max?: AuPairDetailsMaxOrderByAggregateInput
    _min?: AuPairDetailsMinOrderByAggregateInput
  }

  export type AuPairDetailsScalarWhereWithAggregatesInput = {
    AND?: AuPairDetailsScalarWhereWithAggregatesInput | AuPairDetailsScalarWhereWithAggregatesInput[]
    OR?: AuPairDetailsScalarWhereWithAggregatesInput[]
    NOT?: AuPairDetailsScalarWhereWithAggregatesInput | AuPairDetailsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuPairDetails"> | string
    referralId?: StringWithAggregatesFilter<"AuPairDetails"> | string
    childCareExperience?: StringWithAggregatesFilter<"AuPairDetails"> | string
    drivingLicense?: BoolWithAggregatesFilter<"AuPairDetails"> | boolean
    preferredCountries?: StringNullableListFilter<"AuPairDetails">
  }

  export type HostFamilyDetailsWhereInput = {
    AND?: HostFamilyDetailsWhereInput | HostFamilyDetailsWhereInput[]
    OR?: HostFamilyDetailsWhereInput[]
    NOT?: HostFamilyDetailsWhereInput | HostFamilyDetailsWhereInput[]
    id?: StringFilter<"HostFamilyDetails"> | string
    referralId?: StringFilter<"HostFamilyDetails"> | string
    location?: StringFilter<"HostFamilyDetails"> | string
    childrenCount?: IntFilter<"HostFamilyDetails"> | number
    requirements?: StringFilter<"HostFamilyDetails"> | string
    referral?: XOR<ReferralScalarRelationFilter, ReferralWhereInput>
  }

  export type HostFamilyDetailsOrderByWithRelationInput = {
    id?: SortOrder
    referralId?: SortOrder
    location?: SortOrder
    childrenCount?: SortOrder
    requirements?: SortOrder
    referral?: ReferralOrderByWithRelationInput
  }

  export type HostFamilyDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    referralId?: string
    AND?: HostFamilyDetailsWhereInput | HostFamilyDetailsWhereInput[]
    OR?: HostFamilyDetailsWhereInput[]
    NOT?: HostFamilyDetailsWhereInput | HostFamilyDetailsWhereInput[]
    location?: StringFilter<"HostFamilyDetails"> | string
    childrenCount?: IntFilter<"HostFamilyDetails"> | number
    requirements?: StringFilter<"HostFamilyDetails"> | string
    referral?: XOR<ReferralScalarRelationFilter, ReferralWhereInput>
  }, "id" | "referralId">

  export type HostFamilyDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    referralId?: SortOrder
    location?: SortOrder
    childrenCount?: SortOrder
    requirements?: SortOrder
    _count?: HostFamilyDetailsCountOrderByAggregateInput
    _avg?: HostFamilyDetailsAvgOrderByAggregateInput
    _max?: HostFamilyDetailsMaxOrderByAggregateInput
    _min?: HostFamilyDetailsMinOrderByAggregateInput
    _sum?: HostFamilyDetailsSumOrderByAggregateInput
  }

  export type HostFamilyDetailsScalarWhereWithAggregatesInput = {
    AND?: HostFamilyDetailsScalarWhereWithAggregatesInput | HostFamilyDetailsScalarWhereWithAggregatesInput[]
    OR?: HostFamilyDetailsScalarWhereWithAggregatesInput[]
    NOT?: HostFamilyDetailsScalarWhereWithAggregatesInput | HostFamilyDetailsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HostFamilyDetails"> | string
    referralId?: StringWithAggregatesFilter<"HostFamilyDetails"> | string
    location?: StringWithAggregatesFilter<"HostFamilyDetails"> | string
    childrenCount?: IntWithAggregatesFilter<"HostFamilyDetails"> | number
    requirements?: StringWithAggregatesFilter<"HostFamilyDetails"> | string
  }

  export type EnglishStudentDetailsWhereInput = {
    AND?: EnglishStudentDetailsWhereInput | EnglishStudentDetailsWhereInput[]
    OR?: EnglishStudentDetailsWhereInput[]
    NOT?: EnglishStudentDetailsWhereInput | EnglishStudentDetailsWhereInput[]
    id?: StringFilter<"EnglishStudentDetails"> | string
    referralId?: StringFilter<"EnglishStudentDetails"> | string
    goals?: StringFilter<"EnglishStudentDetails"> | string
    schedule?: StringFilter<"EnglishStudentDetails"> | string
    referral?: XOR<ReferralScalarRelationFilter, ReferralWhereInput>
  }

  export type EnglishStudentDetailsOrderByWithRelationInput = {
    id?: SortOrder
    referralId?: SortOrder
    goals?: SortOrder
    schedule?: SortOrder
    referral?: ReferralOrderByWithRelationInput
  }

  export type EnglishStudentDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    referralId?: string
    AND?: EnglishStudentDetailsWhereInput | EnglishStudentDetailsWhereInput[]
    OR?: EnglishStudentDetailsWhereInput[]
    NOT?: EnglishStudentDetailsWhereInput | EnglishStudentDetailsWhereInput[]
    goals?: StringFilter<"EnglishStudentDetails"> | string
    schedule?: StringFilter<"EnglishStudentDetails"> | string
    referral?: XOR<ReferralScalarRelationFilter, ReferralWhereInput>
  }, "id" | "referralId">

  export type EnglishStudentDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    referralId?: SortOrder
    goals?: SortOrder
    schedule?: SortOrder
    _count?: EnglishStudentDetailsCountOrderByAggregateInput
    _max?: EnglishStudentDetailsMaxOrderByAggregateInput
    _min?: EnglishStudentDetailsMinOrderByAggregateInput
  }

  export type EnglishStudentDetailsScalarWhereWithAggregatesInput = {
    AND?: EnglishStudentDetailsScalarWhereWithAggregatesInput | EnglishStudentDetailsScalarWhereWithAggregatesInput[]
    OR?: EnglishStudentDetailsScalarWhereWithAggregatesInput[]
    NOT?: EnglishStudentDetailsScalarWhereWithAggregatesInput | EnglishStudentDetailsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EnglishStudentDetails"> | string
    referralId?: StringWithAggregatesFilter<"EnglishStudentDetails"> | string
    goals?: StringWithAggregatesFilter<"EnglishStudentDetails"> | string
    schedule?: StringWithAggregatesFilter<"EnglishStudentDetails"> | string
  }

  export type ReferralCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: string
    status?: string
    referredBy: string
    name: string
    email: string
    phone: string
    nationality: string
    age: number
    englishLevel: string
    experience: string
    availability: string
    notes?: string | null
    auPairDetails?: AuPairDetailsCreateNestedOneWithoutReferralInput
    hostFamilyDetails?: HostFamilyDetailsCreateNestedOneWithoutReferralInput
    englishStudentDetails?: EnglishStudentDetailsCreateNestedOneWithoutReferralInput
  }

  export type ReferralUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: string
    status?: string
    referredBy: string
    name: string
    email: string
    phone: string
    nationality: string
    age: number
    englishLevel: string
    experience: string
    availability: string
    notes?: string | null
    auPairDetails?: AuPairDetailsUncheckedCreateNestedOneWithoutReferralInput
    hostFamilyDetails?: HostFamilyDetailsUncheckedCreateNestedOneWithoutReferralInput
    englishStudentDetails?: EnglishStudentDetailsUncheckedCreateNestedOneWithoutReferralInput
  }

  export type ReferralUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    referredBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    englishLevel?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    auPairDetails?: AuPairDetailsUpdateOneWithoutReferralNestedInput
    hostFamilyDetails?: HostFamilyDetailsUpdateOneWithoutReferralNestedInput
    englishStudentDetails?: EnglishStudentDetailsUpdateOneWithoutReferralNestedInput
  }

  export type ReferralUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    referredBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    englishLevel?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    auPairDetails?: AuPairDetailsUncheckedUpdateOneWithoutReferralNestedInput
    hostFamilyDetails?: HostFamilyDetailsUncheckedUpdateOneWithoutReferralNestedInput
    englishStudentDetails?: EnglishStudentDetailsUncheckedUpdateOneWithoutReferralNestedInput
  }

  export type ReferralCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: string
    status?: string
    referredBy: string
    name: string
    email: string
    phone: string
    nationality: string
    age: number
    englishLevel: string
    experience: string
    availability: string
    notes?: string | null
  }

  export type ReferralUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    referredBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    englishLevel?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReferralUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    referredBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    englishLevel?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuPairDetailsCreateInput = {
    id?: string
    childCareExperience: string
    drivingLicense: boolean
    preferredCountries?: AuPairDetailsCreatepreferredCountriesInput | string[]
    referral: ReferralCreateNestedOneWithoutAuPairDetailsInput
  }

  export type AuPairDetailsUncheckedCreateInput = {
    id?: string
    referralId: string
    childCareExperience: string
    drivingLicense: boolean
    preferredCountries?: AuPairDetailsCreatepreferredCountriesInput | string[]
  }

  export type AuPairDetailsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    childCareExperience?: StringFieldUpdateOperationsInput | string
    drivingLicense?: BoolFieldUpdateOperationsInput | boolean
    preferredCountries?: AuPairDetailsUpdatepreferredCountriesInput | string[]
    referral?: ReferralUpdateOneRequiredWithoutAuPairDetailsNestedInput
  }

  export type AuPairDetailsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    referralId?: StringFieldUpdateOperationsInput | string
    childCareExperience?: StringFieldUpdateOperationsInput | string
    drivingLicense?: BoolFieldUpdateOperationsInput | boolean
    preferredCountries?: AuPairDetailsUpdatepreferredCountriesInput | string[]
  }

  export type AuPairDetailsCreateManyInput = {
    id?: string
    referralId: string
    childCareExperience: string
    drivingLicense: boolean
    preferredCountries?: AuPairDetailsCreatepreferredCountriesInput | string[]
  }

  export type AuPairDetailsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    childCareExperience?: StringFieldUpdateOperationsInput | string
    drivingLicense?: BoolFieldUpdateOperationsInput | boolean
    preferredCountries?: AuPairDetailsUpdatepreferredCountriesInput | string[]
  }

  export type AuPairDetailsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    referralId?: StringFieldUpdateOperationsInput | string
    childCareExperience?: StringFieldUpdateOperationsInput | string
    drivingLicense?: BoolFieldUpdateOperationsInput | boolean
    preferredCountries?: AuPairDetailsUpdatepreferredCountriesInput | string[]
  }

  export type HostFamilyDetailsCreateInput = {
    id?: string
    location: string
    childrenCount: number
    requirements: string
    referral: ReferralCreateNestedOneWithoutHostFamilyDetailsInput
  }

  export type HostFamilyDetailsUncheckedCreateInput = {
    id?: string
    referralId: string
    location: string
    childrenCount: number
    requirements: string
  }

  export type HostFamilyDetailsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    childrenCount?: IntFieldUpdateOperationsInput | number
    requirements?: StringFieldUpdateOperationsInput | string
    referral?: ReferralUpdateOneRequiredWithoutHostFamilyDetailsNestedInput
  }

  export type HostFamilyDetailsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    referralId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    childrenCount?: IntFieldUpdateOperationsInput | number
    requirements?: StringFieldUpdateOperationsInput | string
  }

  export type HostFamilyDetailsCreateManyInput = {
    id?: string
    referralId: string
    location: string
    childrenCount: number
    requirements: string
  }

  export type HostFamilyDetailsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    childrenCount?: IntFieldUpdateOperationsInput | number
    requirements?: StringFieldUpdateOperationsInput | string
  }

  export type HostFamilyDetailsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    referralId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    childrenCount?: IntFieldUpdateOperationsInput | number
    requirements?: StringFieldUpdateOperationsInput | string
  }

  export type EnglishStudentDetailsCreateInput = {
    id?: string
    goals: string
    schedule: string
    referral: ReferralCreateNestedOneWithoutEnglishStudentDetailsInput
  }

  export type EnglishStudentDetailsUncheckedCreateInput = {
    id?: string
    referralId: string
    goals: string
    schedule: string
  }

  export type EnglishStudentDetailsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    goals?: StringFieldUpdateOperationsInput | string
    schedule?: StringFieldUpdateOperationsInput | string
    referral?: ReferralUpdateOneRequiredWithoutEnglishStudentDetailsNestedInput
  }

  export type EnglishStudentDetailsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    referralId?: StringFieldUpdateOperationsInput | string
    goals?: StringFieldUpdateOperationsInput | string
    schedule?: StringFieldUpdateOperationsInput | string
  }

  export type EnglishStudentDetailsCreateManyInput = {
    id?: string
    referralId: string
    goals: string
    schedule: string
  }

  export type EnglishStudentDetailsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    goals?: StringFieldUpdateOperationsInput | string
    schedule?: StringFieldUpdateOperationsInput | string
  }

  export type EnglishStudentDetailsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    referralId?: StringFieldUpdateOperationsInput | string
    goals?: StringFieldUpdateOperationsInput | string
    schedule?: StringFieldUpdateOperationsInput | string
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

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type AuPairDetailsNullableScalarRelationFilter = {
    is?: AuPairDetailsWhereInput | null
    isNot?: AuPairDetailsWhereInput | null
  }

  export type HostFamilyDetailsNullableScalarRelationFilter = {
    is?: HostFamilyDetailsWhereInput | null
    isNot?: HostFamilyDetailsWhereInput | null
  }

  export type EnglishStudentDetailsNullableScalarRelationFilter = {
    is?: EnglishStudentDetailsWhereInput | null
    isNot?: EnglishStudentDetailsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReferralCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    status?: SortOrder
    referredBy?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    nationality?: SortOrder
    age?: SortOrder
    englishLevel?: SortOrder
    experience?: SortOrder
    availability?: SortOrder
    notes?: SortOrder
  }

  export type ReferralAvgOrderByAggregateInput = {
    age?: SortOrder
  }

  export type ReferralMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    status?: SortOrder
    referredBy?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    nationality?: SortOrder
    age?: SortOrder
    englishLevel?: SortOrder
    experience?: SortOrder
    availability?: SortOrder
    notes?: SortOrder
  }

  export type ReferralMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    status?: SortOrder
    referredBy?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    nationality?: SortOrder
    age?: SortOrder
    englishLevel?: SortOrder
    experience?: SortOrder
    availability?: SortOrder
    notes?: SortOrder
  }

  export type ReferralSumOrderByAggregateInput = {
    age?: SortOrder
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

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ReferralScalarRelationFilter = {
    is?: ReferralWhereInput
    isNot?: ReferralWhereInput
  }

  export type AuPairDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    referralId?: SortOrder
    childCareExperience?: SortOrder
    drivingLicense?: SortOrder
    preferredCountries?: SortOrder
  }

  export type AuPairDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    referralId?: SortOrder
    childCareExperience?: SortOrder
    drivingLicense?: SortOrder
  }

  export type AuPairDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    referralId?: SortOrder
    childCareExperience?: SortOrder
    drivingLicense?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type HostFamilyDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    referralId?: SortOrder
    location?: SortOrder
    childrenCount?: SortOrder
    requirements?: SortOrder
  }

  export type HostFamilyDetailsAvgOrderByAggregateInput = {
    childrenCount?: SortOrder
  }

  export type HostFamilyDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    referralId?: SortOrder
    location?: SortOrder
    childrenCount?: SortOrder
    requirements?: SortOrder
  }

  export type HostFamilyDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    referralId?: SortOrder
    location?: SortOrder
    childrenCount?: SortOrder
    requirements?: SortOrder
  }

  export type HostFamilyDetailsSumOrderByAggregateInput = {
    childrenCount?: SortOrder
  }

  export type EnglishStudentDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    referralId?: SortOrder
    goals?: SortOrder
    schedule?: SortOrder
  }

  export type EnglishStudentDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    referralId?: SortOrder
    goals?: SortOrder
    schedule?: SortOrder
  }

  export type EnglishStudentDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    referralId?: SortOrder
    goals?: SortOrder
    schedule?: SortOrder
  }

  export type AuPairDetailsCreateNestedOneWithoutReferralInput = {
    create?: XOR<AuPairDetailsCreateWithoutReferralInput, AuPairDetailsUncheckedCreateWithoutReferralInput>
    connectOrCreate?: AuPairDetailsCreateOrConnectWithoutReferralInput
    connect?: AuPairDetailsWhereUniqueInput
  }

  export type HostFamilyDetailsCreateNestedOneWithoutReferralInput = {
    create?: XOR<HostFamilyDetailsCreateWithoutReferralInput, HostFamilyDetailsUncheckedCreateWithoutReferralInput>
    connectOrCreate?: HostFamilyDetailsCreateOrConnectWithoutReferralInput
    connect?: HostFamilyDetailsWhereUniqueInput
  }

  export type EnglishStudentDetailsCreateNestedOneWithoutReferralInput = {
    create?: XOR<EnglishStudentDetailsCreateWithoutReferralInput, EnglishStudentDetailsUncheckedCreateWithoutReferralInput>
    connectOrCreate?: EnglishStudentDetailsCreateOrConnectWithoutReferralInput
    connect?: EnglishStudentDetailsWhereUniqueInput
  }

  export type AuPairDetailsUncheckedCreateNestedOneWithoutReferralInput = {
    create?: XOR<AuPairDetailsCreateWithoutReferralInput, AuPairDetailsUncheckedCreateWithoutReferralInput>
    connectOrCreate?: AuPairDetailsCreateOrConnectWithoutReferralInput
    connect?: AuPairDetailsWhereUniqueInput
  }

  export type HostFamilyDetailsUncheckedCreateNestedOneWithoutReferralInput = {
    create?: XOR<HostFamilyDetailsCreateWithoutReferralInput, HostFamilyDetailsUncheckedCreateWithoutReferralInput>
    connectOrCreate?: HostFamilyDetailsCreateOrConnectWithoutReferralInput
    connect?: HostFamilyDetailsWhereUniqueInput
  }

  export type EnglishStudentDetailsUncheckedCreateNestedOneWithoutReferralInput = {
    create?: XOR<EnglishStudentDetailsCreateWithoutReferralInput, EnglishStudentDetailsUncheckedCreateWithoutReferralInput>
    connectOrCreate?: EnglishStudentDetailsCreateOrConnectWithoutReferralInput
    connect?: EnglishStudentDetailsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AuPairDetailsUpdateOneWithoutReferralNestedInput = {
    create?: XOR<AuPairDetailsCreateWithoutReferralInput, AuPairDetailsUncheckedCreateWithoutReferralInput>
    connectOrCreate?: AuPairDetailsCreateOrConnectWithoutReferralInput
    upsert?: AuPairDetailsUpsertWithoutReferralInput
    disconnect?: AuPairDetailsWhereInput | boolean
    delete?: AuPairDetailsWhereInput | boolean
    connect?: AuPairDetailsWhereUniqueInput
    update?: XOR<XOR<AuPairDetailsUpdateToOneWithWhereWithoutReferralInput, AuPairDetailsUpdateWithoutReferralInput>, AuPairDetailsUncheckedUpdateWithoutReferralInput>
  }

  export type HostFamilyDetailsUpdateOneWithoutReferralNestedInput = {
    create?: XOR<HostFamilyDetailsCreateWithoutReferralInput, HostFamilyDetailsUncheckedCreateWithoutReferralInput>
    connectOrCreate?: HostFamilyDetailsCreateOrConnectWithoutReferralInput
    upsert?: HostFamilyDetailsUpsertWithoutReferralInput
    disconnect?: HostFamilyDetailsWhereInput | boolean
    delete?: HostFamilyDetailsWhereInput | boolean
    connect?: HostFamilyDetailsWhereUniqueInput
    update?: XOR<XOR<HostFamilyDetailsUpdateToOneWithWhereWithoutReferralInput, HostFamilyDetailsUpdateWithoutReferralInput>, HostFamilyDetailsUncheckedUpdateWithoutReferralInput>
  }

  export type EnglishStudentDetailsUpdateOneWithoutReferralNestedInput = {
    create?: XOR<EnglishStudentDetailsCreateWithoutReferralInput, EnglishStudentDetailsUncheckedCreateWithoutReferralInput>
    connectOrCreate?: EnglishStudentDetailsCreateOrConnectWithoutReferralInput
    upsert?: EnglishStudentDetailsUpsertWithoutReferralInput
    disconnect?: EnglishStudentDetailsWhereInput | boolean
    delete?: EnglishStudentDetailsWhereInput | boolean
    connect?: EnglishStudentDetailsWhereUniqueInput
    update?: XOR<XOR<EnglishStudentDetailsUpdateToOneWithWhereWithoutReferralInput, EnglishStudentDetailsUpdateWithoutReferralInput>, EnglishStudentDetailsUncheckedUpdateWithoutReferralInput>
  }

  export type AuPairDetailsUncheckedUpdateOneWithoutReferralNestedInput = {
    create?: XOR<AuPairDetailsCreateWithoutReferralInput, AuPairDetailsUncheckedCreateWithoutReferralInput>
    connectOrCreate?: AuPairDetailsCreateOrConnectWithoutReferralInput
    upsert?: AuPairDetailsUpsertWithoutReferralInput
    disconnect?: AuPairDetailsWhereInput | boolean
    delete?: AuPairDetailsWhereInput | boolean
    connect?: AuPairDetailsWhereUniqueInput
    update?: XOR<XOR<AuPairDetailsUpdateToOneWithWhereWithoutReferralInput, AuPairDetailsUpdateWithoutReferralInput>, AuPairDetailsUncheckedUpdateWithoutReferralInput>
  }

  export type HostFamilyDetailsUncheckedUpdateOneWithoutReferralNestedInput = {
    create?: XOR<HostFamilyDetailsCreateWithoutReferralInput, HostFamilyDetailsUncheckedCreateWithoutReferralInput>
    connectOrCreate?: HostFamilyDetailsCreateOrConnectWithoutReferralInput
    upsert?: HostFamilyDetailsUpsertWithoutReferralInput
    disconnect?: HostFamilyDetailsWhereInput | boolean
    delete?: HostFamilyDetailsWhereInput | boolean
    connect?: HostFamilyDetailsWhereUniqueInput
    update?: XOR<XOR<HostFamilyDetailsUpdateToOneWithWhereWithoutReferralInput, HostFamilyDetailsUpdateWithoutReferralInput>, HostFamilyDetailsUncheckedUpdateWithoutReferralInput>
  }

  export type EnglishStudentDetailsUncheckedUpdateOneWithoutReferralNestedInput = {
    create?: XOR<EnglishStudentDetailsCreateWithoutReferralInput, EnglishStudentDetailsUncheckedCreateWithoutReferralInput>
    connectOrCreate?: EnglishStudentDetailsCreateOrConnectWithoutReferralInput
    upsert?: EnglishStudentDetailsUpsertWithoutReferralInput
    disconnect?: EnglishStudentDetailsWhereInput | boolean
    delete?: EnglishStudentDetailsWhereInput | boolean
    connect?: EnglishStudentDetailsWhereUniqueInput
    update?: XOR<XOR<EnglishStudentDetailsUpdateToOneWithWhereWithoutReferralInput, EnglishStudentDetailsUpdateWithoutReferralInput>, EnglishStudentDetailsUncheckedUpdateWithoutReferralInput>
  }

  export type AuPairDetailsCreatepreferredCountriesInput = {
    set: string[]
  }

  export type ReferralCreateNestedOneWithoutAuPairDetailsInput = {
    create?: XOR<ReferralCreateWithoutAuPairDetailsInput, ReferralUncheckedCreateWithoutAuPairDetailsInput>
    connectOrCreate?: ReferralCreateOrConnectWithoutAuPairDetailsInput
    connect?: ReferralWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AuPairDetailsUpdatepreferredCountriesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ReferralUpdateOneRequiredWithoutAuPairDetailsNestedInput = {
    create?: XOR<ReferralCreateWithoutAuPairDetailsInput, ReferralUncheckedCreateWithoutAuPairDetailsInput>
    connectOrCreate?: ReferralCreateOrConnectWithoutAuPairDetailsInput
    upsert?: ReferralUpsertWithoutAuPairDetailsInput
    connect?: ReferralWhereUniqueInput
    update?: XOR<XOR<ReferralUpdateToOneWithWhereWithoutAuPairDetailsInput, ReferralUpdateWithoutAuPairDetailsInput>, ReferralUncheckedUpdateWithoutAuPairDetailsInput>
  }

  export type ReferralCreateNestedOneWithoutHostFamilyDetailsInput = {
    create?: XOR<ReferralCreateWithoutHostFamilyDetailsInput, ReferralUncheckedCreateWithoutHostFamilyDetailsInput>
    connectOrCreate?: ReferralCreateOrConnectWithoutHostFamilyDetailsInput
    connect?: ReferralWhereUniqueInput
  }

  export type ReferralUpdateOneRequiredWithoutHostFamilyDetailsNestedInput = {
    create?: XOR<ReferralCreateWithoutHostFamilyDetailsInput, ReferralUncheckedCreateWithoutHostFamilyDetailsInput>
    connectOrCreate?: ReferralCreateOrConnectWithoutHostFamilyDetailsInput
    upsert?: ReferralUpsertWithoutHostFamilyDetailsInput
    connect?: ReferralWhereUniqueInput
    update?: XOR<XOR<ReferralUpdateToOneWithWhereWithoutHostFamilyDetailsInput, ReferralUpdateWithoutHostFamilyDetailsInput>, ReferralUncheckedUpdateWithoutHostFamilyDetailsInput>
  }

  export type ReferralCreateNestedOneWithoutEnglishStudentDetailsInput = {
    create?: XOR<ReferralCreateWithoutEnglishStudentDetailsInput, ReferralUncheckedCreateWithoutEnglishStudentDetailsInput>
    connectOrCreate?: ReferralCreateOrConnectWithoutEnglishStudentDetailsInput
    connect?: ReferralWhereUniqueInput
  }

  export type ReferralUpdateOneRequiredWithoutEnglishStudentDetailsNestedInput = {
    create?: XOR<ReferralCreateWithoutEnglishStudentDetailsInput, ReferralUncheckedCreateWithoutEnglishStudentDetailsInput>
    connectOrCreate?: ReferralCreateOrConnectWithoutEnglishStudentDetailsInput
    upsert?: ReferralUpsertWithoutEnglishStudentDetailsInput
    connect?: ReferralWhereUniqueInput
    update?: XOR<XOR<ReferralUpdateToOneWithWhereWithoutEnglishStudentDetailsInput, ReferralUpdateWithoutEnglishStudentDetailsInput>, ReferralUncheckedUpdateWithoutEnglishStudentDetailsInput>
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

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AuPairDetailsCreateWithoutReferralInput = {
    id?: string
    childCareExperience: string
    drivingLicense: boolean
    preferredCountries?: AuPairDetailsCreatepreferredCountriesInput | string[]
  }

  export type AuPairDetailsUncheckedCreateWithoutReferralInput = {
    id?: string
    childCareExperience: string
    drivingLicense: boolean
    preferredCountries?: AuPairDetailsCreatepreferredCountriesInput | string[]
  }

  export type AuPairDetailsCreateOrConnectWithoutReferralInput = {
    where: AuPairDetailsWhereUniqueInput
    create: XOR<AuPairDetailsCreateWithoutReferralInput, AuPairDetailsUncheckedCreateWithoutReferralInput>
  }

  export type HostFamilyDetailsCreateWithoutReferralInput = {
    id?: string
    location: string
    childrenCount: number
    requirements: string
  }

  export type HostFamilyDetailsUncheckedCreateWithoutReferralInput = {
    id?: string
    location: string
    childrenCount: number
    requirements: string
  }

  export type HostFamilyDetailsCreateOrConnectWithoutReferralInput = {
    where: HostFamilyDetailsWhereUniqueInput
    create: XOR<HostFamilyDetailsCreateWithoutReferralInput, HostFamilyDetailsUncheckedCreateWithoutReferralInput>
  }

  export type EnglishStudentDetailsCreateWithoutReferralInput = {
    id?: string
    goals: string
    schedule: string
  }

  export type EnglishStudentDetailsUncheckedCreateWithoutReferralInput = {
    id?: string
    goals: string
    schedule: string
  }

  export type EnglishStudentDetailsCreateOrConnectWithoutReferralInput = {
    where: EnglishStudentDetailsWhereUniqueInput
    create: XOR<EnglishStudentDetailsCreateWithoutReferralInput, EnglishStudentDetailsUncheckedCreateWithoutReferralInput>
  }

  export type AuPairDetailsUpsertWithoutReferralInput = {
    update: XOR<AuPairDetailsUpdateWithoutReferralInput, AuPairDetailsUncheckedUpdateWithoutReferralInput>
    create: XOR<AuPairDetailsCreateWithoutReferralInput, AuPairDetailsUncheckedCreateWithoutReferralInput>
    where?: AuPairDetailsWhereInput
  }

  export type AuPairDetailsUpdateToOneWithWhereWithoutReferralInput = {
    where?: AuPairDetailsWhereInput
    data: XOR<AuPairDetailsUpdateWithoutReferralInput, AuPairDetailsUncheckedUpdateWithoutReferralInput>
  }

  export type AuPairDetailsUpdateWithoutReferralInput = {
    id?: StringFieldUpdateOperationsInput | string
    childCareExperience?: StringFieldUpdateOperationsInput | string
    drivingLicense?: BoolFieldUpdateOperationsInput | boolean
    preferredCountries?: AuPairDetailsUpdatepreferredCountriesInput | string[]
  }

  export type AuPairDetailsUncheckedUpdateWithoutReferralInput = {
    id?: StringFieldUpdateOperationsInput | string
    childCareExperience?: StringFieldUpdateOperationsInput | string
    drivingLicense?: BoolFieldUpdateOperationsInput | boolean
    preferredCountries?: AuPairDetailsUpdatepreferredCountriesInput | string[]
  }

  export type HostFamilyDetailsUpsertWithoutReferralInput = {
    update: XOR<HostFamilyDetailsUpdateWithoutReferralInput, HostFamilyDetailsUncheckedUpdateWithoutReferralInput>
    create: XOR<HostFamilyDetailsCreateWithoutReferralInput, HostFamilyDetailsUncheckedCreateWithoutReferralInput>
    where?: HostFamilyDetailsWhereInput
  }

  export type HostFamilyDetailsUpdateToOneWithWhereWithoutReferralInput = {
    where?: HostFamilyDetailsWhereInput
    data: XOR<HostFamilyDetailsUpdateWithoutReferralInput, HostFamilyDetailsUncheckedUpdateWithoutReferralInput>
  }

  export type HostFamilyDetailsUpdateWithoutReferralInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    childrenCount?: IntFieldUpdateOperationsInput | number
    requirements?: StringFieldUpdateOperationsInput | string
  }

  export type HostFamilyDetailsUncheckedUpdateWithoutReferralInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    childrenCount?: IntFieldUpdateOperationsInput | number
    requirements?: StringFieldUpdateOperationsInput | string
  }

  export type EnglishStudentDetailsUpsertWithoutReferralInput = {
    update: XOR<EnglishStudentDetailsUpdateWithoutReferralInput, EnglishStudentDetailsUncheckedUpdateWithoutReferralInput>
    create: XOR<EnglishStudentDetailsCreateWithoutReferralInput, EnglishStudentDetailsUncheckedCreateWithoutReferralInput>
    where?: EnglishStudentDetailsWhereInput
  }

  export type EnglishStudentDetailsUpdateToOneWithWhereWithoutReferralInput = {
    where?: EnglishStudentDetailsWhereInput
    data: XOR<EnglishStudentDetailsUpdateWithoutReferralInput, EnglishStudentDetailsUncheckedUpdateWithoutReferralInput>
  }

  export type EnglishStudentDetailsUpdateWithoutReferralInput = {
    id?: StringFieldUpdateOperationsInput | string
    goals?: StringFieldUpdateOperationsInput | string
    schedule?: StringFieldUpdateOperationsInput | string
  }

  export type EnglishStudentDetailsUncheckedUpdateWithoutReferralInput = {
    id?: StringFieldUpdateOperationsInput | string
    goals?: StringFieldUpdateOperationsInput | string
    schedule?: StringFieldUpdateOperationsInput | string
  }

  export type ReferralCreateWithoutAuPairDetailsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: string
    status?: string
    referredBy: string
    name: string
    email: string
    phone: string
    nationality: string
    age: number
    englishLevel: string
    experience: string
    availability: string
    notes?: string | null
    hostFamilyDetails?: HostFamilyDetailsCreateNestedOneWithoutReferralInput
    englishStudentDetails?: EnglishStudentDetailsCreateNestedOneWithoutReferralInput
  }

  export type ReferralUncheckedCreateWithoutAuPairDetailsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: string
    status?: string
    referredBy: string
    name: string
    email: string
    phone: string
    nationality: string
    age: number
    englishLevel: string
    experience: string
    availability: string
    notes?: string | null
    hostFamilyDetails?: HostFamilyDetailsUncheckedCreateNestedOneWithoutReferralInput
    englishStudentDetails?: EnglishStudentDetailsUncheckedCreateNestedOneWithoutReferralInput
  }

  export type ReferralCreateOrConnectWithoutAuPairDetailsInput = {
    where: ReferralWhereUniqueInput
    create: XOR<ReferralCreateWithoutAuPairDetailsInput, ReferralUncheckedCreateWithoutAuPairDetailsInput>
  }

  export type ReferralUpsertWithoutAuPairDetailsInput = {
    update: XOR<ReferralUpdateWithoutAuPairDetailsInput, ReferralUncheckedUpdateWithoutAuPairDetailsInput>
    create: XOR<ReferralCreateWithoutAuPairDetailsInput, ReferralUncheckedCreateWithoutAuPairDetailsInput>
    where?: ReferralWhereInput
  }

  export type ReferralUpdateToOneWithWhereWithoutAuPairDetailsInput = {
    where?: ReferralWhereInput
    data: XOR<ReferralUpdateWithoutAuPairDetailsInput, ReferralUncheckedUpdateWithoutAuPairDetailsInput>
  }

  export type ReferralUpdateWithoutAuPairDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    referredBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    englishLevel?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    hostFamilyDetails?: HostFamilyDetailsUpdateOneWithoutReferralNestedInput
    englishStudentDetails?: EnglishStudentDetailsUpdateOneWithoutReferralNestedInput
  }

  export type ReferralUncheckedUpdateWithoutAuPairDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    referredBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    englishLevel?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    hostFamilyDetails?: HostFamilyDetailsUncheckedUpdateOneWithoutReferralNestedInput
    englishStudentDetails?: EnglishStudentDetailsUncheckedUpdateOneWithoutReferralNestedInput
  }

  export type ReferralCreateWithoutHostFamilyDetailsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: string
    status?: string
    referredBy: string
    name: string
    email: string
    phone: string
    nationality: string
    age: number
    englishLevel: string
    experience: string
    availability: string
    notes?: string | null
    auPairDetails?: AuPairDetailsCreateNestedOneWithoutReferralInput
    englishStudentDetails?: EnglishStudentDetailsCreateNestedOneWithoutReferralInput
  }

  export type ReferralUncheckedCreateWithoutHostFamilyDetailsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: string
    status?: string
    referredBy: string
    name: string
    email: string
    phone: string
    nationality: string
    age: number
    englishLevel: string
    experience: string
    availability: string
    notes?: string | null
    auPairDetails?: AuPairDetailsUncheckedCreateNestedOneWithoutReferralInput
    englishStudentDetails?: EnglishStudentDetailsUncheckedCreateNestedOneWithoutReferralInput
  }

  export type ReferralCreateOrConnectWithoutHostFamilyDetailsInput = {
    where: ReferralWhereUniqueInput
    create: XOR<ReferralCreateWithoutHostFamilyDetailsInput, ReferralUncheckedCreateWithoutHostFamilyDetailsInput>
  }

  export type ReferralUpsertWithoutHostFamilyDetailsInput = {
    update: XOR<ReferralUpdateWithoutHostFamilyDetailsInput, ReferralUncheckedUpdateWithoutHostFamilyDetailsInput>
    create: XOR<ReferralCreateWithoutHostFamilyDetailsInput, ReferralUncheckedCreateWithoutHostFamilyDetailsInput>
    where?: ReferralWhereInput
  }

  export type ReferralUpdateToOneWithWhereWithoutHostFamilyDetailsInput = {
    where?: ReferralWhereInput
    data: XOR<ReferralUpdateWithoutHostFamilyDetailsInput, ReferralUncheckedUpdateWithoutHostFamilyDetailsInput>
  }

  export type ReferralUpdateWithoutHostFamilyDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    referredBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    englishLevel?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    auPairDetails?: AuPairDetailsUpdateOneWithoutReferralNestedInput
    englishStudentDetails?: EnglishStudentDetailsUpdateOneWithoutReferralNestedInput
  }

  export type ReferralUncheckedUpdateWithoutHostFamilyDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    referredBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    englishLevel?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    auPairDetails?: AuPairDetailsUncheckedUpdateOneWithoutReferralNestedInput
    englishStudentDetails?: EnglishStudentDetailsUncheckedUpdateOneWithoutReferralNestedInput
  }

  export type ReferralCreateWithoutEnglishStudentDetailsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: string
    status?: string
    referredBy: string
    name: string
    email: string
    phone: string
    nationality: string
    age: number
    englishLevel: string
    experience: string
    availability: string
    notes?: string | null
    auPairDetails?: AuPairDetailsCreateNestedOneWithoutReferralInput
    hostFamilyDetails?: HostFamilyDetailsCreateNestedOneWithoutReferralInput
  }

  export type ReferralUncheckedCreateWithoutEnglishStudentDetailsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    type: string
    status?: string
    referredBy: string
    name: string
    email: string
    phone: string
    nationality: string
    age: number
    englishLevel: string
    experience: string
    availability: string
    notes?: string | null
    auPairDetails?: AuPairDetailsUncheckedCreateNestedOneWithoutReferralInput
    hostFamilyDetails?: HostFamilyDetailsUncheckedCreateNestedOneWithoutReferralInput
  }

  export type ReferralCreateOrConnectWithoutEnglishStudentDetailsInput = {
    where: ReferralWhereUniqueInput
    create: XOR<ReferralCreateWithoutEnglishStudentDetailsInput, ReferralUncheckedCreateWithoutEnglishStudentDetailsInput>
  }

  export type ReferralUpsertWithoutEnglishStudentDetailsInput = {
    update: XOR<ReferralUpdateWithoutEnglishStudentDetailsInput, ReferralUncheckedUpdateWithoutEnglishStudentDetailsInput>
    create: XOR<ReferralCreateWithoutEnglishStudentDetailsInput, ReferralUncheckedCreateWithoutEnglishStudentDetailsInput>
    where?: ReferralWhereInput
  }

  export type ReferralUpdateToOneWithWhereWithoutEnglishStudentDetailsInput = {
    where?: ReferralWhereInput
    data: XOR<ReferralUpdateWithoutEnglishStudentDetailsInput, ReferralUncheckedUpdateWithoutEnglishStudentDetailsInput>
  }

  export type ReferralUpdateWithoutEnglishStudentDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    referredBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    englishLevel?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    auPairDetails?: AuPairDetailsUpdateOneWithoutReferralNestedInput
    hostFamilyDetails?: HostFamilyDetailsUpdateOneWithoutReferralNestedInput
  }

  export type ReferralUncheckedUpdateWithoutEnglishStudentDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    referredBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    englishLevel?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    auPairDetails?: AuPairDetailsUncheckedUpdateOneWithoutReferralNestedInput
    hostFamilyDetails?: HostFamilyDetailsUncheckedUpdateOneWithoutReferralNestedInput
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