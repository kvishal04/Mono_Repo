
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
 * Model UserLog
 * 
 */
export type UserLog = $Result.DefaultSelection<Prisma.$UserLogPayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Buissness_Stream
 * 
 */
export type Buissness_Stream = $Result.DefaultSelection<Prisma.$Buissness_StreamPayload>
/**
 * Model Company_Profile
 * 
 */
export type Company_Profile = $Result.DefaultSelection<Prisma.$Company_ProfilePayload>
/**
 * Model education_Detail
 * 
 */
export type education_Detail = $Result.DefaultSelection<Prisma.$education_DetailPayload>
/**
 * Model seeker_Profile
 * 
 */
export type seeker_Profile = $Result.DefaultSelection<Prisma.$seeker_ProfilePayload>
/**
 * Model SkillSet
 * 
 */
export type SkillSet = $Result.DefaultSelection<Prisma.$SkillSetPayload>
/**
 * Model Seeker_Skill_Sets
 * 
 */
export type Seeker_Skill_Sets = $Result.DefaultSelection<Prisma.$Seeker_Skill_SetsPayload>
/**
 * Model Experience_Deatils
 * 
 */
export type Experience_Deatils = $Result.DefaultSelection<Prisma.$Experience_DeatilsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER',
  COMPANY: 'COMPANY'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHERS: 'OTHERS'
};

export type Gender = (typeof Gender)[keyof typeof Gender]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.userLog`: Exposes CRUD operations for the **UserLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserLogs
    * const userLogs = await prisma.userLog.findMany()
    * ```
    */
  get userLog(): Prisma.UserLogDelegate<ExtArgs>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.buissness_Stream`: Exposes CRUD operations for the **Buissness_Stream** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Buissness_Streams
    * const buissness_Streams = await prisma.buissness_Stream.findMany()
    * ```
    */
  get buissness_Stream(): Prisma.Buissness_StreamDelegate<ExtArgs>;

  /**
   * `prisma.company_Profile`: Exposes CRUD operations for the **Company_Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Company_Profiles
    * const company_Profiles = await prisma.company_Profile.findMany()
    * ```
    */
  get company_Profile(): Prisma.Company_ProfileDelegate<ExtArgs>;

  /**
   * `prisma.education_Detail`: Exposes CRUD operations for the **education_Detail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Education_Details
    * const education_Details = await prisma.education_Detail.findMany()
    * ```
    */
  get education_Detail(): Prisma.education_DetailDelegate<ExtArgs>;

  /**
   * `prisma.seeker_Profile`: Exposes CRUD operations for the **seeker_Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seeker_Profiles
    * const seeker_Profiles = await prisma.seeker_Profile.findMany()
    * ```
    */
  get seeker_Profile(): Prisma.seeker_ProfileDelegate<ExtArgs>;

  /**
   * `prisma.skillSet`: Exposes CRUD operations for the **SkillSet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SkillSets
    * const skillSets = await prisma.skillSet.findMany()
    * ```
    */
  get skillSet(): Prisma.SkillSetDelegate<ExtArgs>;

  /**
   * `prisma.seeker_Skill_Sets`: Exposes CRUD operations for the **Seeker_Skill_Sets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seeker_Skill_Sets
    * const seeker_Skill_Sets = await prisma.seeker_Skill_Sets.findMany()
    * ```
    */
  get seeker_Skill_Sets(): Prisma.Seeker_Skill_SetsDelegate<ExtArgs>;

  /**
   * `prisma.experience_Deatils`: Exposes CRUD operations for the **Experience_Deatils** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Experience_Deatils
    * const experience_Deatils = await prisma.experience_Deatils.findMany()
    * ```
    */
  get experience_Deatils(): Prisma.Experience_DeatilsDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.19.1
   * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    UserLog: 'UserLog',
    Address: 'Address',
    Product: 'Product',
    Buissness_Stream: 'Buissness_Stream',
    Company_Profile: 'Company_Profile',
    education_Detail: 'education_Detail',
    seeker_Profile: 'seeker_Profile',
    SkillSet: 'SkillSet',
    Seeker_Skill_Sets: 'Seeker_Skill_Sets',
    Experience_Deatils: 'Experience_Deatils'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "userLog" | "address" | "product" | "buissness_Stream" | "company_Profile" | "education_Detail" | "seeker_Profile" | "skillSet" | "seeker_Skill_Sets" | "experience_Deatils"
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
      UserLog: {
        payload: Prisma.$UserLogPayload<ExtArgs>
        fields: Prisma.UserLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload>
          }
          findFirst: {
            args: Prisma.UserLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload>
          }
          findMany: {
            args: Prisma.UserLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload>[]
          }
          create: {
            args: Prisma.UserLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload>
          }
          createMany: {
            args: Prisma.UserLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload>
          }
          update: {
            args: Prisma.UserLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload>
          }
          deleteMany: {
            args: Prisma.UserLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLogPayload>
          }
          aggregate: {
            args: Prisma.UserLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserLog>
          }
          groupBy: {
            args: Prisma.UserLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserLogCountArgs<ExtArgs>
            result: $Utils.Optional<UserLogCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Buissness_Stream: {
        payload: Prisma.$Buissness_StreamPayload<ExtArgs>
        fields: Prisma.Buissness_StreamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Buissness_StreamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Buissness_StreamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Buissness_StreamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Buissness_StreamPayload>
          }
          findFirst: {
            args: Prisma.Buissness_StreamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Buissness_StreamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Buissness_StreamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Buissness_StreamPayload>
          }
          findMany: {
            args: Prisma.Buissness_StreamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Buissness_StreamPayload>[]
          }
          create: {
            args: Prisma.Buissness_StreamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Buissness_StreamPayload>
          }
          createMany: {
            args: Prisma.Buissness_StreamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Buissness_StreamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Buissness_StreamPayload>
          }
          update: {
            args: Prisma.Buissness_StreamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Buissness_StreamPayload>
          }
          deleteMany: {
            args: Prisma.Buissness_StreamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Buissness_StreamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Buissness_StreamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Buissness_StreamPayload>
          }
          aggregate: {
            args: Prisma.Buissness_StreamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBuissness_Stream>
          }
          groupBy: {
            args: Prisma.Buissness_StreamGroupByArgs<ExtArgs>
            result: $Utils.Optional<Buissness_StreamGroupByOutputType>[]
          }
          count: {
            args: Prisma.Buissness_StreamCountArgs<ExtArgs>
            result: $Utils.Optional<Buissness_StreamCountAggregateOutputType> | number
          }
        }
      }
      Company_Profile: {
        payload: Prisma.$Company_ProfilePayload<ExtArgs>
        fields: Prisma.Company_ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Company_ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Company_ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Company_ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Company_ProfilePayload>
          }
          findFirst: {
            args: Prisma.Company_ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Company_ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Company_ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Company_ProfilePayload>
          }
          findMany: {
            args: Prisma.Company_ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Company_ProfilePayload>[]
          }
          create: {
            args: Prisma.Company_ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Company_ProfilePayload>
          }
          createMany: {
            args: Prisma.Company_ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Company_ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Company_ProfilePayload>
          }
          update: {
            args: Prisma.Company_ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Company_ProfilePayload>
          }
          deleteMany: {
            args: Prisma.Company_ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Company_ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Company_ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Company_ProfilePayload>
          }
          aggregate: {
            args: Prisma.Company_ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany_Profile>
          }
          groupBy: {
            args: Prisma.Company_ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<Company_ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.Company_ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<Company_ProfileCountAggregateOutputType> | number
          }
        }
      }
      education_Detail: {
        payload: Prisma.$education_DetailPayload<ExtArgs>
        fields: Prisma.education_DetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.education_DetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_DetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.education_DetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_DetailPayload>
          }
          findFirst: {
            args: Prisma.education_DetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_DetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.education_DetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_DetailPayload>
          }
          findMany: {
            args: Prisma.education_DetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_DetailPayload>[]
          }
          create: {
            args: Prisma.education_DetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_DetailPayload>
          }
          createMany: {
            args: Prisma.education_DetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.education_DetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_DetailPayload>
          }
          update: {
            args: Prisma.education_DetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_DetailPayload>
          }
          deleteMany: {
            args: Prisma.education_DetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.education_DetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.education_DetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$education_DetailPayload>
          }
          aggregate: {
            args: Prisma.Education_DetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEducation_Detail>
          }
          groupBy: {
            args: Prisma.education_DetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<Education_DetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.education_DetailCountArgs<ExtArgs>
            result: $Utils.Optional<Education_DetailCountAggregateOutputType> | number
          }
        }
      }
      seeker_Profile: {
        payload: Prisma.$seeker_ProfilePayload<ExtArgs>
        fields: Prisma.seeker_ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.seeker_ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seeker_ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.seeker_ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seeker_ProfilePayload>
          }
          findFirst: {
            args: Prisma.seeker_ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seeker_ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.seeker_ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seeker_ProfilePayload>
          }
          findMany: {
            args: Prisma.seeker_ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seeker_ProfilePayload>[]
          }
          create: {
            args: Prisma.seeker_ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seeker_ProfilePayload>
          }
          createMany: {
            args: Prisma.seeker_ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.seeker_ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seeker_ProfilePayload>
          }
          update: {
            args: Prisma.seeker_ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seeker_ProfilePayload>
          }
          deleteMany: {
            args: Prisma.seeker_ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.seeker_ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.seeker_ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seeker_ProfilePayload>
          }
          aggregate: {
            args: Prisma.Seeker_ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeeker_Profile>
          }
          groupBy: {
            args: Prisma.seeker_ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<Seeker_ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.seeker_ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<Seeker_ProfileCountAggregateOutputType> | number
          }
        }
      }
      SkillSet: {
        payload: Prisma.$SkillSetPayload<ExtArgs>
        fields: Prisma.SkillSetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillSetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillSetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillSetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillSetPayload>
          }
          findFirst: {
            args: Prisma.SkillSetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillSetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillSetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillSetPayload>
          }
          findMany: {
            args: Prisma.SkillSetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillSetPayload>[]
          }
          create: {
            args: Prisma.SkillSetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillSetPayload>
          }
          createMany: {
            args: Prisma.SkillSetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SkillSetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillSetPayload>
          }
          update: {
            args: Prisma.SkillSetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillSetPayload>
          }
          deleteMany: {
            args: Prisma.SkillSetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillSetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SkillSetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillSetPayload>
          }
          aggregate: {
            args: Prisma.SkillSetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkillSet>
          }
          groupBy: {
            args: Prisma.SkillSetGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillSetGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillSetCountArgs<ExtArgs>
            result: $Utils.Optional<SkillSetCountAggregateOutputType> | number
          }
        }
      }
      Seeker_Skill_Sets: {
        payload: Prisma.$Seeker_Skill_SetsPayload<ExtArgs>
        fields: Prisma.Seeker_Skill_SetsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Seeker_Skill_SetsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Seeker_Skill_SetsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Seeker_Skill_SetsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Seeker_Skill_SetsPayload>
          }
          findFirst: {
            args: Prisma.Seeker_Skill_SetsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Seeker_Skill_SetsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Seeker_Skill_SetsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Seeker_Skill_SetsPayload>
          }
          findMany: {
            args: Prisma.Seeker_Skill_SetsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Seeker_Skill_SetsPayload>[]
          }
          create: {
            args: Prisma.Seeker_Skill_SetsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Seeker_Skill_SetsPayload>
          }
          createMany: {
            args: Prisma.Seeker_Skill_SetsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Seeker_Skill_SetsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Seeker_Skill_SetsPayload>
          }
          update: {
            args: Prisma.Seeker_Skill_SetsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Seeker_Skill_SetsPayload>
          }
          deleteMany: {
            args: Prisma.Seeker_Skill_SetsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Seeker_Skill_SetsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Seeker_Skill_SetsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Seeker_Skill_SetsPayload>
          }
          aggregate: {
            args: Prisma.Seeker_Skill_SetsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeeker_Skill_Sets>
          }
          groupBy: {
            args: Prisma.Seeker_Skill_SetsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Seeker_Skill_SetsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Seeker_Skill_SetsCountArgs<ExtArgs>
            result: $Utils.Optional<Seeker_Skill_SetsCountAggregateOutputType> | number
          }
        }
      }
      Experience_Deatils: {
        payload: Prisma.$Experience_DeatilsPayload<ExtArgs>
        fields: Prisma.Experience_DeatilsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Experience_DeatilsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Experience_DeatilsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Experience_DeatilsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Experience_DeatilsPayload>
          }
          findFirst: {
            args: Prisma.Experience_DeatilsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Experience_DeatilsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Experience_DeatilsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Experience_DeatilsPayload>
          }
          findMany: {
            args: Prisma.Experience_DeatilsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Experience_DeatilsPayload>[]
          }
          create: {
            args: Prisma.Experience_DeatilsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Experience_DeatilsPayload>
          }
          createMany: {
            args: Prisma.Experience_DeatilsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Experience_DeatilsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Experience_DeatilsPayload>
          }
          update: {
            args: Prisma.Experience_DeatilsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Experience_DeatilsPayload>
          }
          deleteMany: {
            args: Prisma.Experience_DeatilsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Experience_DeatilsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Experience_DeatilsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Experience_DeatilsPayload>
          }
          aggregate: {
            args: Prisma.Experience_DeatilsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExperience_Deatils>
          }
          groupBy: {
            args: Prisma.Experience_DeatilsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Experience_DeatilsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Experience_DeatilsCountArgs<ExtArgs>
            result: $Utils.Optional<Experience_DeatilsCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userlogs: number
    educationdeatil: number
    seekerSkill: number
    experienceDetails: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userlogs?: boolean | UserCountOutputTypeCountUserlogsArgs
    educationdeatil?: boolean | UserCountOutputTypeCountEducationdeatilArgs
    seekerSkill?: boolean | UserCountOutputTypeCountSeekerSkillArgs
    experienceDetails?: boolean | UserCountOutputTypeCountExperienceDetailsArgs
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
  export type UserCountOutputTypeCountUserlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEducationdeatilArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: education_DetailWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSeekerSkillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Seeker_Skill_SetsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExperienceDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Experience_DeatilsWhereInput
  }


  /**
   * Count Type Buissness_StreamCountOutputType
   */

  export type Buissness_StreamCountOutputType = {
    company_profiles: number
  }

  export type Buissness_StreamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company_profiles?: boolean | Buissness_StreamCountOutputTypeCountCompany_profilesArgs
  }

  // Custom InputTypes
  /**
   * Buissness_StreamCountOutputType without action
   */
  export type Buissness_StreamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buissness_StreamCountOutputType
     */
    select?: Buissness_StreamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Buissness_StreamCountOutputType without action
   */
  export type Buissness_StreamCountOutputTypeCountCompany_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Company_ProfileWhereInput
  }


  /**
   * Count Type SkillSetCountOutputType
   */

  export type SkillSetCountOutputType = {
    skillSet: number
  }

  export type SkillSetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skillSet?: boolean | SkillSetCountOutputTypeCountSkillSetArgs
  }

  // Custom InputTypes
  /**
   * SkillSetCountOutputType without action
   */
  export type SkillSetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillSetCountOutputType
     */
    select?: SkillSetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkillSetCountOutputType without action
   */
  export type SkillSetCountOutputTypeCountSkillSetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Seeker_Skill_SetsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    contactNumber: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    contactNumber: bigint | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    gender: $Enums.Gender | null
    contactNumber: bigint | null
    smsNotificationActive: boolean | null
    emailNotificationActive: boolean | null
    userImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    gender: $Enums.Gender | null
    contactNumber: bigint | null
    smsNotificationActive: boolean | null
    emailNotificationActive: boolean | null
    userImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    gender: number
    contactNumber: number
    smsNotificationActive: number
    emailNotificationActive: number
    userImage: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    contactNumber?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    contactNumber?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    gender?: true
    contactNumber?: true
    smsNotificationActive?: true
    emailNotificationActive?: true
    userImage?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    gender?: true
    contactNumber?: true
    smsNotificationActive?: true
    emailNotificationActive?: true
    userImage?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    gender?: true
    contactNumber?: true
    smsNotificationActive?: true
    emailNotificationActive?: true
    userImage?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    gender: $Enums.Gender
    contactNumber: bigint | null
    smsNotificationActive: boolean
    emailNotificationActive: boolean
    userImage: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    gender?: boolean
    contactNumber?: boolean
    smsNotificationActive?: boolean
    emailNotificationActive?: boolean
    userImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    addresses?: boolean | User$addressesArgs<ExtArgs>
    userlogs?: boolean | User$userlogsArgs<ExtArgs>
    educationdeatil?: boolean | User$educationdeatilArgs<ExtArgs>
    seekerProfile?: boolean | User$seekerProfileArgs<ExtArgs>
    seekerSkill?: boolean | User$seekerSkillArgs<ExtArgs>
    experienceDetails?: boolean | User$experienceDetailsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    gender?: boolean
    contactNumber?: boolean
    smsNotificationActive?: boolean
    emailNotificationActive?: boolean
    userImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | User$addressesArgs<ExtArgs>
    userlogs?: boolean | User$userlogsArgs<ExtArgs>
    educationdeatil?: boolean | User$educationdeatilArgs<ExtArgs>
    seekerProfile?: boolean | User$seekerProfileArgs<ExtArgs>
    seekerSkill?: boolean | User$seekerSkillArgs<ExtArgs>
    experienceDetails?: boolean | User$experienceDetailsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      addresses: Prisma.$AddressPayload<ExtArgs> | null
      userlogs: Prisma.$UserLogPayload<ExtArgs>[]
      educationdeatil: Prisma.$education_DetailPayload<ExtArgs>[]
      seekerProfile: Prisma.$seeker_ProfilePayload<ExtArgs> | null
      seekerSkill: Prisma.$Seeker_Skill_SetsPayload<ExtArgs>[]
      experienceDetails: Prisma.$Experience_DeatilsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: $Enums.Role
      gender: $Enums.Gender
      contactNumber: bigint | null
      smsNotificationActive: boolean
      emailNotificationActive: boolean
      userImage: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    addresses<T extends User$addressesArgs<ExtArgs> = {}>(args?: Subset<T, User$addressesArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    userlogs<T extends User$userlogsArgs<ExtArgs> = {}>(args?: Subset<T, User$userlogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "findMany"> | Null>
    educationdeatil<T extends User$educationdeatilArgs<ExtArgs> = {}>(args?: Subset<T, User$educationdeatilArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$education_DetailPayload<ExtArgs>, T, "findMany"> | Null>
    seekerProfile<T extends User$seekerProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$seekerProfileArgs<ExtArgs>>): Prisma__seeker_ProfileClient<$Result.GetResult<Prisma.$seeker_ProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    seekerSkill<T extends User$seekerSkillArgs<ExtArgs> = {}>(args?: Subset<T, User$seekerSkillArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Seeker_Skill_SetsPayload<ExtArgs>, T, "findMany"> | Null>
    experienceDetails<T extends User$experienceDetailsArgs<ExtArgs> = {}>(args?: Subset<T, User$experienceDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Experience_DeatilsPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly gender: FieldRef<"User", 'Gender'>
    readonly contactNumber: FieldRef<"User", 'BigInt'>
    readonly smsNotificationActive: FieldRef<"User", 'Boolean'>
    readonly emailNotificationActive: FieldRef<"User", 'Boolean'>
    readonly userImage: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
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
    relationLoadStrategy?: RelationLoadStrategy
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
    relationLoadStrategy?: RelationLoadStrategy
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
    relationLoadStrategy?: RelationLoadStrategy
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
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
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
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
    relationLoadStrategy?: RelationLoadStrategy
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
    relationLoadStrategy?: RelationLoadStrategy
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.addresses
   */
  export type User$addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
  }

  /**
   * User.userlogs
   */
  export type User$userlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    where?: UserLogWhereInput
    orderBy?: UserLogOrderByWithRelationInput | UserLogOrderByWithRelationInput[]
    cursor?: UserLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserLogScalarFieldEnum | UserLogScalarFieldEnum[]
  }

  /**
   * User.educationdeatil
   */
  export type User$educationdeatilArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_Detail
     */
    select?: education_DetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: education_DetailInclude<ExtArgs> | null
    where?: education_DetailWhereInput
    orderBy?: education_DetailOrderByWithRelationInput | education_DetailOrderByWithRelationInput[]
    cursor?: education_DetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Education_DetailScalarFieldEnum | Education_DetailScalarFieldEnum[]
  }

  /**
   * User.seekerProfile
   */
  export type User$seekerProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seeker_Profile
     */
    select?: seeker_ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seeker_ProfileInclude<ExtArgs> | null
    where?: seeker_ProfileWhereInput
  }

  /**
   * User.seekerSkill
   */
  export type User$seekerSkillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seeker_Skill_Sets
     */
    select?: Seeker_Skill_SetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Seeker_Skill_SetsInclude<ExtArgs> | null
    where?: Seeker_Skill_SetsWhereInput
    orderBy?: Seeker_Skill_SetsOrderByWithRelationInput | Seeker_Skill_SetsOrderByWithRelationInput[]
    cursor?: Seeker_Skill_SetsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Seeker_Skill_SetsScalarFieldEnum | Seeker_Skill_SetsScalarFieldEnum[]
  }

  /**
   * User.experienceDetails
   */
  export type User$experienceDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience_Deatils
     */
    select?: Experience_DeatilsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Experience_DeatilsInclude<ExtArgs> | null
    where?: Experience_DeatilsWhereInput
    orderBy?: Experience_DeatilsOrderByWithRelationInput | Experience_DeatilsOrderByWithRelationInput[]
    cursor?: Experience_DeatilsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Experience_DeatilsScalarFieldEnum | Experience_DeatilsScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserLog
   */

  export type AggregateUserLog = {
    _count: UserLogCountAggregateOutputType | null
    _avg: UserLogAvgAggregateOutputType | null
    _sum: UserLogSumAggregateOutputType | null
    _min: UserLogMinAggregateOutputType | null
    _max: UserLogMaxAggregateOutputType | null
  }

  export type UserLogAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserLogSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserLogMinAggregateOutputType = {
    id: number | null
    lastLoginDate: Date | null
    lastJobApplyDate: Date | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserLogMaxAggregateOutputType = {
    id: number | null
    lastLoginDate: Date | null
    lastJobApplyDate: Date | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserLogCountAggregateOutputType = {
    id: number
    lastLoginDate: number
    lastJobApplyDate: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserLogAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserLogSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserLogMinAggregateInputType = {
    id?: true
    lastLoginDate?: true
    lastJobApplyDate?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserLogMaxAggregateInputType = {
    id?: true
    lastLoginDate?: true
    lastJobApplyDate?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserLogCountAggregateInputType = {
    id?: true
    lastLoginDate?: true
    lastJobApplyDate?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLog to aggregate.
     */
    where?: UserLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLogs to fetch.
     */
    orderBy?: UserLogOrderByWithRelationInput | UserLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserLogs
    **/
    _count?: true | UserLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserLogMaxAggregateInputType
  }

  export type GetUserLogAggregateType<T extends UserLogAggregateArgs> = {
        [P in keyof T & keyof AggregateUserLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLog[P]>
      : GetScalarType<T[P], AggregateUserLog[P]>
  }




  export type UserLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLogWhereInput
    orderBy?: UserLogOrderByWithAggregationInput | UserLogOrderByWithAggregationInput[]
    by: UserLogScalarFieldEnum[] | UserLogScalarFieldEnum
    having?: UserLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserLogCountAggregateInputType | true
    _avg?: UserLogAvgAggregateInputType
    _sum?: UserLogSumAggregateInputType
    _min?: UserLogMinAggregateInputType
    _max?: UserLogMaxAggregateInputType
  }

  export type UserLogGroupByOutputType = {
    id: number
    lastLoginDate: Date
    lastJobApplyDate: Date
    userId: number
    createdAt: Date
    updatedAt: Date
    _count: UserLogCountAggregateOutputType | null
    _avg: UserLogAvgAggregateOutputType | null
    _sum: UserLogSumAggregateOutputType | null
    _min: UserLogMinAggregateOutputType | null
    _max: UserLogMaxAggregateOutputType | null
  }

  type GetUserLogGroupByPayload<T extends UserLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserLogGroupByOutputType[P]>
            : GetScalarType<T[P], UserLogGroupByOutputType[P]>
        }
      >
    >


  export type UserLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastLoginDate?: boolean
    lastJobApplyDate?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLog"]>


  export type UserLogSelectScalar = {
    id?: boolean
    lastLoginDate?: boolean
    lastJobApplyDate?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      lastLoginDate: Date
      lastJobApplyDate: Date
      userId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userLog"]>
    composites: {}
  }

  type UserLogGetPayload<S extends boolean | null | undefined | UserLogDefaultArgs> = $Result.GetResult<Prisma.$UserLogPayload, S>

  type UserLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserLogFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: UserLogCountAggregateInputType | true
    }

  export interface UserLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserLog'], meta: { name: 'UserLog' } }
    /**
     * Find zero or one UserLog that matches the filter.
     * @param {UserLogFindUniqueArgs} args - Arguments to find a UserLog
     * @example
     * // Get one UserLog
     * const userLog = await prisma.userLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserLogFindUniqueArgs>(args: SelectSubset<T, UserLogFindUniqueArgs<ExtArgs>>): Prisma__UserLogClient<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserLogFindUniqueOrThrowArgs} args - Arguments to find a UserLog
     * @example
     * // Get one UserLog
     * const userLog = await prisma.userLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserLogFindUniqueOrThrowArgs>(args: SelectSubset<T, UserLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserLogClient<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLogFindFirstArgs} args - Arguments to find a UserLog
     * @example
     * // Get one UserLog
     * const userLog = await prisma.userLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserLogFindFirstArgs>(args?: SelectSubset<T, UserLogFindFirstArgs<ExtArgs>>): Prisma__UserLogClient<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLogFindFirstOrThrowArgs} args - Arguments to find a UserLog
     * @example
     * // Get one UserLog
     * const userLog = await prisma.userLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserLogFindFirstOrThrowArgs>(args?: SelectSubset<T, UserLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserLogClient<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLogs
     * const userLogs = await prisma.userLog.findMany()
     * 
     * // Get first 10 UserLogs
     * const userLogs = await prisma.userLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userLogWithIdOnly = await prisma.userLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserLogFindManyArgs>(args?: SelectSubset<T, UserLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserLog.
     * @param {UserLogCreateArgs} args - Arguments to create a UserLog.
     * @example
     * // Create one UserLog
     * const UserLog = await prisma.userLog.create({
     *   data: {
     *     // ... data to create a UserLog
     *   }
     * })
     * 
     */
    create<T extends UserLogCreateArgs>(args: SelectSubset<T, UserLogCreateArgs<ExtArgs>>): Prisma__UserLogClient<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserLogs.
     * @param {UserLogCreateManyArgs} args - Arguments to create many UserLogs.
     * @example
     * // Create many UserLogs
     * const userLog = await prisma.userLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserLogCreateManyArgs>(args?: SelectSubset<T, UserLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserLog.
     * @param {UserLogDeleteArgs} args - Arguments to delete one UserLog.
     * @example
     * // Delete one UserLog
     * const UserLog = await prisma.userLog.delete({
     *   where: {
     *     // ... filter to delete one UserLog
     *   }
     * })
     * 
     */
    delete<T extends UserLogDeleteArgs>(args: SelectSubset<T, UserLogDeleteArgs<ExtArgs>>): Prisma__UserLogClient<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserLog.
     * @param {UserLogUpdateArgs} args - Arguments to update one UserLog.
     * @example
     * // Update one UserLog
     * const userLog = await prisma.userLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserLogUpdateArgs>(args: SelectSubset<T, UserLogUpdateArgs<ExtArgs>>): Prisma__UserLogClient<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserLogs.
     * @param {UserLogDeleteManyArgs} args - Arguments to filter UserLogs to delete.
     * @example
     * // Delete a few UserLogs
     * const { count } = await prisma.userLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserLogDeleteManyArgs>(args?: SelectSubset<T, UserLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLogs
     * const userLog = await prisma.userLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserLogUpdateManyArgs>(args: SelectSubset<T, UserLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserLog.
     * @param {UserLogUpsertArgs} args - Arguments to update or create a UserLog.
     * @example
     * // Update or create a UserLog
     * const userLog = await prisma.userLog.upsert({
     *   create: {
     *     // ... data to create a UserLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLog we want to update
     *   }
     * })
     */
    upsert<T extends UserLogUpsertArgs>(args: SelectSubset<T, UserLogUpsertArgs<ExtArgs>>): Prisma__UserLogClient<$Result.GetResult<Prisma.$UserLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLogCountArgs} args - Arguments to filter UserLogs to count.
     * @example
     * // Count the number of UserLogs
     * const count = await prisma.userLog.count({
     *   where: {
     *     // ... the filter for the UserLogs we want to count
     *   }
     * })
    **/
    count<T extends UserLogCountArgs>(
      args?: Subset<T, UserLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserLogAggregateArgs>(args: Subset<T, UserLogAggregateArgs>): Prisma.PrismaPromise<GetUserLogAggregateType<T>>

    /**
     * Group by UserLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLogGroupByArgs} args - Group by arguments.
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
      T extends UserLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserLogGroupByArgs['orderBy'] }
        : { orderBy?: UserLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserLog model
   */
  readonly fields: UserLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the UserLog model
   */ 
  interface UserLogFieldRefs {
    readonly id: FieldRef<"UserLog", 'Int'>
    readonly lastLoginDate: FieldRef<"UserLog", 'DateTime'>
    readonly lastJobApplyDate: FieldRef<"UserLog", 'DateTime'>
    readonly userId: FieldRef<"UserLog", 'Int'>
    readonly createdAt: FieldRef<"UserLog", 'DateTime'>
    readonly updatedAt: FieldRef<"UserLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserLog findUnique
   */
  export type UserLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    /**
     * Filter, which UserLog to fetch.
     */
    where: UserLogWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * UserLog findUniqueOrThrow
   */
  export type UserLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    /**
     * Filter, which UserLog to fetch.
     */
    where: UserLogWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * UserLog findFirst
   */
  export type UserLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    /**
     * Filter, which UserLog to fetch.
     */
    where?: UserLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLogs to fetch.
     */
    orderBy?: UserLogOrderByWithRelationInput | UserLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLogs.
     */
    cursor?: UserLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLogs.
     */
    distinct?: UserLogScalarFieldEnum | UserLogScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * UserLog findFirstOrThrow
   */
  export type UserLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    /**
     * Filter, which UserLog to fetch.
     */
    where?: UserLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLogs to fetch.
     */
    orderBy?: UserLogOrderByWithRelationInput | UserLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLogs.
     */
    cursor?: UserLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLogs.
     */
    distinct?: UserLogScalarFieldEnum | UserLogScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * UserLog findMany
   */
  export type UserLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    /**
     * Filter, which UserLogs to fetch.
     */
    where?: UserLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLogs to fetch.
     */
    orderBy?: UserLogOrderByWithRelationInput | UserLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserLogs.
     */
    cursor?: UserLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLogs.
     */
    skip?: number
    distinct?: UserLogScalarFieldEnum | UserLogScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * UserLog create
   */
  export type UserLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    /**
     * The data needed to create a UserLog.
     */
    data: XOR<UserLogCreateInput, UserLogUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * UserLog createMany
   */
  export type UserLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserLogs.
     */
    data: UserLogCreateManyInput | UserLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserLog update
   */
  export type UserLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    /**
     * The data needed to update a UserLog.
     */
    data: XOR<UserLogUpdateInput, UserLogUncheckedUpdateInput>
    /**
     * Choose, which UserLog to update.
     */
    where: UserLogWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * UserLog updateMany
   */
  export type UserLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserLogs.
     */
    data: XOR<UserLogUpdateManyMutationInput, UserLogUncheckedUpdateManyInput>
    /**
     * Filter which UserLogs to update
     */
    where?: UserLogWhereInput
  }

  /**
   * UserLog upsert
   */
  export type UserLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    /**
     * The filter to search for the UserLog to update in case it exists.
     */
    where: UserLogWhereUniqueInput
    /**
     * In case the UserLog found by the `where` argument doesn't exist, create a new UserLog with this data.
     */
    create: XOR<UserLogCreateInput, UserLogUncheckedCreateInput>
    /**
     * In case the UserLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserLogUpdateInput, UserLogUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * UserLog delete
   */
  export type UserLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
    /**
     * Filter which UserLog to delete.
     */
    where: UserLogWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * UserLog deleteMany
   */
  export type UserLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLogs to delete
     */
    where?: UserLogWhereInput
  }

  /**
   * UserLog without action
   */
  export type UserLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLog
     */
    select?: UserLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLogInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AddressSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: number | null
    lineOne: string | null
    lineTwo: string | null
    city: string | null
    country: string | null
    pincode: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AddressMaxAggregateOutputType = {
    id: number | null
    lineOne: string | null
    lineTwo: string | null
    city: string | null
    country: string | null
    pincode: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    lineOne: number
    lineTwo: number
    city: number
    country: number
    pincode: number
    userId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AddressSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    lineOne?: true
    lineTwo?: true
    city?: true
    country?: true
    pincode?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    lineOne?: true
    lineTwo?: true
    city?: true
    country?: true
    pincode?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    lineOne?: true
    lineTwo?: true
    city?: true
    country?: true
    pincode?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: number
    lineOne: string
    lineTwo: string | null
    city: string
    country: string
    pincode: string
    userId: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lineOne?: boolean
    lineTwo?: boolean
    city?: boolean
    country?: boolean
    pincode?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>


  export type AddressSelectScalar = {
    id?: boolean
    lineOne?: boolean
    lineTwo?: boolean
    city?: boolean
    country?: boolean
    pincode?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      lineOne: string
      lineTwo: string | null
      city: string
      country: string
      pincode: string
      userId: number
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
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
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Address model
   */ 
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'Int'>
    readonly lineOne: FieldRef<"Address", 'String'>
    readonly lineTwo: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly country: FieldRef<"Address", 'String'>
    readonly pincode: FieldRef<"Address", 'String'>
    readonly userId: FieldRef<"Address", 'Int'>
    readonly createdAt: FieldRef<"Address", 'DateTime'>
    readonly updatedAt: FieldRef<"Address", 'DateTime'>
    readonly deletedAt: FieldRef<"Address", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    price: Decimal | null
    tags: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    price: Decimal | null
    tags: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    tags: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string
    description: string
    price: Decimal
    tags: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["product"]>


  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }


  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      price: Prisma.Decimal
      tags: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Decimal'>
    readonly tags: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
    readonly deletedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
  }


  /**
   * Model Buissness_Stream
   */

  export type AggregateBuissness_Stream = {
    _count: Buissness_StreamCountAggregateOutputType | null
    _avg: Buissness_StreamAvgAggregateOutputType | null
    _sum: Buissness_StreamSumAggregateOutputType | null
    _min: Buissness_StreamMinAggregateOutputType | null
    _max: Buissness_StreamMaxAggregateOutputType | null
  }

  export type Buissness_StreamAvgAggregateOutputType = {
    id: number | null
  }

  export type Buissness_StreamSumAggregateOutputType = {
    id: number | null
  }

  export type Buissness_StreamMinAggregateOutputType = {
    id: number | null
    buisnessStreamName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type Buissness_StreamMaxAggregateOutputType = {
    id: number | null
    buisnessStreamName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type Buissness_StreamCountAggregateOutputType = {
    id: number
    buisnessStreamName: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type Buissness_StreamAvgAggregateInputType = {
    id?: true
  }

  export type Buissness_StreamSumAggregateInputType = {
    id?: true
  }

  export type Buissness_StreamMinAggregateInputType = {
    id?: true
    buisnessStreamName?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type Buissness_StreamMaxAggregateInputType = {
    id?: true
    buisnessStreamName?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type Buissness_StreamCountAggregateInputType = {
    id?: true
    buisnessStreamName?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type Buissness_StreamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Buissness_Stream to aggregate.
     */
    where?: Buissness_StreamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buissness_Streams to fetch.
     */
    orderBy?: Buissness_StreamOrderByWithRelationInput | Buissness_StreamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Buissness_StreamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buissness_Streams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buissness_Streams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Buissness_Streams
    **/
    _count?: true | Buissness_StreamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Buissness_StreamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Buissness_StreamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Buissness_StreamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Buissness_StreamMaxAggregateInputType
  }

  export type GetBuissness_StreamAggregateType<T extends Buissness_StreamAggregateArgs> = {
        [P in keyof T & keyof AggregateBuissness_Stream]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBuissness_Stream[P]>
      : GetScalarType<T[P], AggregateBuissness_Stream[P]>
  }




  export type Buissness_StreamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Buissness_StreamWhereInput
    orderBy?: Buissness_StreamOrderByWithAggregationInput | Buissness_StreamOrderByWithAggregationInput[]
    by: Buissness_StreamScalarFieldEnum[] | Buissness_StreamScalarFieldEnum
    having?: Buissness_StreamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Buissness_StreamCountAggregateInputType | true
    _avg?: Buissness_StreamAvgAggregateInputType
    _sum?: Buissness_StreamSumAggregateInputType
    _min?: Buissness_StreamMinAggregateInputType
    _max?: Buissness_StreamMaxAggregateInputType
  }

  export type Buissness_StreamGroupByOutputType = {
    id: number
    buisnessStreamName: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: Buissness_StreamCountAggregateOutputType | null
    _avg: Buissness_StreamAvgAggregateOutputType | null
    _sum: Buissness_StreamSumAggregateOutputType | null
    _min: Buissness_StreamMinAggregateOutputType | null
    _max: Buissness_StreamMaxAggregateOutputType | null
  }

  type GetBuissness_StreamGroupByPayload<T extends Buissness_StreamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Buissness_StreamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Buissness_StreamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Buissness_StreamGroupByOutputType[P]>
            : GetScalarType<T[P], Buissness_StreamGroupByOutputType[P]>
        }
      >
    >


  export type Buissness_StreamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    buisnessStreamName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    company_profiles?: boolean | Buissness_Stream$company_profilesArgs<ExtArgs>
    _count?: boolean | Buissness_StreamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["buissness_Stream"]>


  export type Buissness_StreamSelectScalar = {
    id?: boolean
    buisnessStreamName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type Buissness_StreamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company_profiles?: boolean | Buissness_Stream$company_profilesArgs<ExtArgs>
    _count?: boolean | Buissness_StreamCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $Buissness_StreamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Buissness_Stream"
    objects: {
      company_profiles: Prisma.$Company_ProfilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      buisnessStreamName: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["buissness_Stream"]>
    composites: {}
  }

  type Buissness_StreamGetPayload<S extends boolean | null | undefined | Buissness_StreamDefaultArgs> = $Result.GetResult<Prisma.$Buissness_StreamPayload, S>

  type Buissness_StreamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Buissness_StreamFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: Buissness_StreamCountAggregateInputType | true
    }

  export interface Buissness_StreamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Buissness_Stream'], meta: { name: 'Buissness_Stream' } }
    /**
     * Find zero or one Buissness_Stream that matches the filter.
     * @param {Buissness_StreamFindUniqueArgs} args - Arguments to find a Buissness_Stream
     * @example
     * // Get one Buissness_Stream
     * const buissness_Stream = await prisma.buissness_Stream.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Buissness_StreamFindUniqueArgs>(args: SelectSubset<T, Buissness_StreamFindUniqueArgs<ExtArgs>>): Prisma__Buissness_StreamClient<$Result.GetResult<Prisma.$Buissness_StreamPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Buissness_Stream that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Buissness_StreamFindUniqueOrThrowArgs} args - Arguments to find a Buissness_Stream
     * @example
     * // Get one Buissness_Stream
     * const buissness_Stream = await prisma.buissness_Stream.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Buissness_StreamFindUniqueOrThrowArgs>(args: SelectSubset<T, Buissness_StreamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Buissness_StreamClient<$Result.GetResult<Prisma.$Buissness_StreamPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Buissness_Stream that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Buissness_StreamFindFirstArgs} args - Arguments to find a Buissness_Stream
     * @example
     * // Get one Buissness_Stream
     * const buissness_Stream = await prisma.buissness_Stream.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Buissness_StreamFindFirstArgs>(args?: SelectSubset<T, Buissness_StreamFindFirstArgs<ExtArgs>>): Prisma__Buissness_StreamClient<$Result.GetResult<Prisma.$Buissness_StreamPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Buissness_Stream that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Buissness_StreamFindFirstOrThrowArgs} args - Arguments to find a Buissness_Stream
     * @example
     * // Get one Buissness_Stream
     * const buissness_Stream = await prisma.buissness_Stream.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Buissness_StreamFindFirstOrThrowArgs>(args?: SelectSubset<T, Buissness_StreamFindFirstOrThrowArgs<ExtArgs>>): Prisma__Buissness_StreamClient<$Result.GetResult<Prisma.$Buissness_StreamPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Buissness_Streams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Buissness_StreamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Buissness_Streams
     * const buissness_Streams = await prisma.buissness_Stream.findMany()
     * 
     * // Get first 10 Buissness_Streams
     * const buissness_Streams = await prisma.buissness_Stream.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const buissness_StreamWithIdOnly = await prisma.buissness_Stream.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Buissness_StreamFindManyArgs>(args?: SelectSubset<T, Buissness_StreamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Buissness_StreamPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Buissness_Stream.
     * @param {Buissness_StreamCreateArgs} args - Arguments to create a Buissness_Stream.
     * @example
     * // Create one Buissness_Stream
     * const Buissness_Stream = await prisma.buissness_Stream.create({
     *   data: {
     *     // ... data to create a Buissness_Stream
     *   }
     * })
     * 
     */
    create<T extends Buissness_StreamCreateArgs>(args: SelectSubset<T, Buissness_StreamCreateArgs<ExtArgs>>): Prisma__Buissness_StreamClient<$Result.GetResult<Prisma.$Buissness_StreamPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Buissness_Streams.
     * @param {Buissness_StreamCreateManyArgs} args - Arguments to create many Buissness_Streams.
     * @example
     * // Create many Buissness_Streams
     * const buissness_Stream = await prisma.buissness_Stream.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Buissness_StreamCreateManyArgs>(args?: SelectSubset<T, Buissness_StreamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Buissness_Stream.
     * @param {Buissness_StreamDeleteArgs} args - Arguments to delete one Buissness_Stream.
     * @example
     * // Delete one Buissness_Stream
     * const Buissness_Stream = await prisma.buissness_Stream.delete({
     *   where: {
     *     // ... filter to delete one Buissness_Stream
     *   }
     * })
     * 
     */
    delete<T extends Buissness_StreamDeleteArgs>(args: SelectSubset<T, Buissness_StreamDeleteArgs<ExtArgs>>): Prisma__Buissness_StreamClient<$Result.GetResult<Prisma.$Buissness_StreamPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Buissness_Stream.
     * @param {Buissness_StreamUpdateArgs} args - Arguments to update one Buissness_Stream.
     * @example
     * // Update one Buissness_Stream
     * const buissness_Stream = await prisma.buissness_Stream.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Buissness_StreamUpdateArgs>(args: SelectSubset<T, Buissness_StreamUpdateArgs<ExtArgs>>): Prisma__Buissness_StreamClient<$Result.GetResult<Prisma.$Buissness_StreamPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Buissness_Streams.
     * @param {Buissness_StreamDeleteManyArgs} args - Arguments to filter Buissness_Streams to delete.
     * @example
     * // Delete a few Buissness_Streams
     * const { count } = await prisma.buissness_Stream.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Buissness_StreamDeleteManyArgs>(args?: SelectSubset<T, Buissness_StreamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buissness_Streams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Buissness_StreamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Buissness_Streams
     * const buissness_Stream = await prisma.buissness_Stream.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Buissness_StreamUpdateManyArgs>(args: SelectSubset<T, Buissness_StreamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Buissness_Stream.
     * @param {Buissness_StreamUpsertArgs} args - Arguments to update or create a Buissness_Stream.
     * @example
     * // Update or create a Buissness_Stream
     * const buissness_Stream = await prisma.buissness_Stream.upsert({
     *   create: {
     *     // ... data to create a Buissness_Stream
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Buissness_Stream we want to update
     *   }
     * })
     */
    upsert<T extends Buissness_StreamUpsertArgs>(args: SelectSubset<T, Buissness_StreamUpsertArgs<ExtArgs>>): Prisma__Buissness_StreamClient<$Result.GetResult<Prisma.$Buissness_StreamPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Buissness_Streams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Buissness_StreamCountArgs} args - Arguments to filter Buissness_Streams to count.
     * @example
     * // Count the number of Buissness_Streams
     * const count = await prisma.buissness_Stream.count({
     *   where: {
     *     // ... the filter for the Buissness_Streams we want to count
     *   }
     * })
    **/
    count<T extends Buissness_StreamCountArgs>(
      args?: Subset<T, Buissness_StreamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Buissness_StreamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Buissness_Stream.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Buissness_StreamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Buissness_StreamAggregateArgs>(args: Subset<T, Buissness_StreamAggregateArgs>): Prisma.PrismaPromise<GetBuissness_StreamAggregateType<T>>

    /**
     * Group by Buissness_Stream.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Buissness_StreamGroupByArgs} args - Group by arguments.
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
      T extends Buissness_StreamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Buissness_StreamGroupByArgs['orderBy'] }
        : { orderBy?: Buissness_StreamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Buissness_StreamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBuissness_StreamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Buissness_Stream model
   */
  readonly fields: Buissness_StreamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Buissness_Stream.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Buissness_StreamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company_profiles<T extends Buissness_Stream$company_profilesArgs<ExtArgs> = {}>(args?: Subset<T, Buissness_Stream$company_profilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Company_ProfilePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Buissness_Stream model
   */ 
  interface Buissness_StreamFieldRefs {
    readonly id: FieldRef<"Buissness_Stream", 'Int'>
    readonly buisnessStreamName: FieldRef<"Buissness_Stream", 'String'>
    readonly createdAt: FieldRef<"Buissness_Stream", 'DateTime'>
    readonly updatedAt: FieldRef<"Buissness_Stream", 'DateTime'>
    readonly deletedAt: FieldRef<"Buissness_Stream", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Buissness_Stream findUnique
   */
  export type Buissness_StreamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buissness_Stream
     */
    select?: Buissness_StreamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Buissness_StreamInclude<ExtArgs> | null
    /**
     * Filter, which Buissness_Stream to fetch.
     */
    where: Buissness_StreamWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Buissness_Stream findUniqueOrThrow
   */
  export type Buissness_StreamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buissness_Stream
     */
    select?: Buissness_StreamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Buissness_StreamInclude<ExtArgs> | null
    /**
     * Filter, which Buissness_Stream to fetch.
     */
    where: Buissness_StreamWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Buissness_Stream findFirst
   */
  export type Buissness_StreamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buissness_Stream
     */
    select?: Buissness_StreamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Buissness_StreamInclude<ExtArgs> | null
    /**
     * Filter, which Buissness_Stream to fetch.
     */
    where?: Buissness_StreamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buissness_Streams to fetch.
     */
    orderBy?: Buissness_StreamOrderByWithRelationInput | Buissness_StreamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buissness_Streams.
     */
    cursor?: Buissness_StreamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buissness_Streams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buissness_Streams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buissness_Streams.
     */
    distinct?: Buissness_StreamScalarFieldEnum | Buissness_StreamScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Buissness_Stream findFirstOrThrow
   */
  export type Buissness_StreamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buissness_Stream
     */
    select?: Buissness_StreamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Buissness_StreamInclude<ExtArgs> | null
    /**
     * Filter, which Buissness_Stream to fetch.
     */
    where?: Buissness_StreamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buissness_Streams to fetch.
     */
    orderBy?: Buissness_StreamOrderByWithRelationInput | Buissness_StreamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buissness_Streams.
     */
    cursor?: Buissness_StreamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buissness_Streams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buissness_Streams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buissness_Streams.
     */
    distinct?: Buissness_StreamScalarFieldEnum | Buissness_StreamScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Buissness_Stream findMany
   */
  export type Buissness_StreamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buissness_Stream
     */
    select?: Buissness_StreamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Buissness_StreamInclude<ExtArgs> | null
    /**
     * Filter, which Buissness_Streams to fetch.
     */
    where?: Buissness_StreamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buissness_Streams to fetch.
     */
    orderBy?: Buissness_StreamOrderByWithRelationInput | Buissness_StreamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Buissness_Streams.
     */
    cursor?: Buissness_StreamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buissness_Streams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buissness_Streams.
     */
    skip?: number
    distinct?: Buissness_StreamScalarFieldEnum | Buissness_StreamScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Buissness_Stream create
   */
  export type Buissness_StreamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buissness_Stream
     */
    select?: Buissness_StreamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Buissness_StreamInclude<ExtArgs> | null
    /**
     * The data needed to create a Buissness_Stream.
     */
    data: XOR<Buissness_StreamCreateInput, Buissness_StreamUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Buissness_Stream createMany
   */
  export type Buissness_StreamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Buissness_Streams.
     */
    data: Buissness_StreamCreateManyInput | Buissness_StreamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Buissness_Stream update
   */
  export type Buissness_StreamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buissness_Stream
     */
    select?: Buissness_StreamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Buissness_StreamInclude<ExtArgs> | null
    /**
     * The data needed to update a Buissness_Stream.
     */
    data: XOR<Buissness_StreamUpdateInput, Buissness_StreamUncheckedUpdateInput>
    /**
     * Choose, which Buissness_Stream to update.
     */
    where: Buissness_StreamWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Buissness_Stream updateMany
   */
  export type Buissness_StreamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Buissness_Streams.
     */
    data: XOR<Buissness_StreamUpdateManyMutationInput, Buissness_StreamUncheckedUpdateManyInput>
    /**
     * Filter which Buissness_Streams to update
     */
    where?: Buissness_StreamWhereInput
  }

  /**
   * Buissness_Stream upsert
   */
  export type Buissness_StreamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buissness_Stream
     */
    select?: Buissness_StreamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Buissness_StreamInclude<ExtArgs> | null
    /**
     * The filter to search for the Buissness_Stream to update in case it exists.
     */
    where: Buissness_StreamWhereUniqueInput
    /**
     * In case the Buissness_Stream found by the `where` argument doesn't exist, create a new Buissness_Stream with this data.
     */
    create: XOR<Buissness_StreamCreateInput, Buissness_StreamUncheckedCreateInput>
    /**
     * In case the Buissness_Stream was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Buissness_StreamUpdateInput, Buissness_StreamUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Buissness_Stream delete
   */
  export type Buissness_StreamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buissness_Stream
     */
    select?: Buissness_StreamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Buissness_StreamInclude<ExtArgs> | null
    /**
     * Filter which Buissness_Stream to delete.
     */
    where: Buissness_StreamWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Buissness_Stream deleteMany
   */
  export type Buissness_StreamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Buissness_Streams to delete
     */
    where?: Buissness_StreamWhereInput
  }

  /**
   * Buissness_Stream.company_profiles
   */
  export type Buissness_Stream$company_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company_Profile
     */
    select?: Company_ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Company_ProfileInclude<ExtArgs> | null
    where?: Company_ProfileWhereInput
    orderBy?: Company_ProfileOrderByWithRelationInput | Company_ProfileOrderByWithRelationInput[]
    cursor?: Company_ProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Company_ProfileScalarFieldEnum | Company_ProfileScalarFieldEnum[]
  }

  /**
   * Buissness_Stream without action
   */
  export type Buissness_StreamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buissness_Stream
     */
    select?: Buissness_StreamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Buissness_StreamInclude<ExtArgs> | null
  }


  /**
   * Model Company_Profile
   */

  export type AggregateCompany_Profile = {
    _count: Company_ProfileCountAggregateOutputType | null
    _avg: Company_ProfileAvgAggregateOutputType | null
    _sum: Company_ProfileSumAggregateOutputType | null
    _min: Company_ProfileMinAggregateOutputType | null
    _max: Company_ProfileMaxAggregateOutputType | null
  }

  export type Company_ProfileAvgAggregateOutputType = {
    id: number | null
    buisnessStreamID: number | null
  }

  export type Company_ProfileSumAggregateOutputType = {
    id: number | null
    buisnessStreamID: number | null
  }

  export type Company_ProfileMinAggregateOutputType = {
    id: number | null
    companyName: string | null
    profileDescription: string | null
    buisnessStreamID: number | null
    companyWebsitUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type Company_ProfileMaxAggregateOutputType = {
    id: number | null
    companyName: string | null
    profileDescription: string | null
    buisnessStreamID: number | null
    companyWebsitUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type Company_ProfileCountAggregateOutputType = {
    id: number
    companyName: number
    profileDescription: number
    buisnessStreamID: number
    companyWebsitUrl: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type Company_ProfileAvgAggregateInputType = {
    id?: true
    buisnessStreamID?: true
  }

  export type Company_ProfileSumAggregateInputType = {
    id?: true
    buisnessStreamID?: true
  }

  export type Company_ProfileMinAggregateInputType = {
    id?: true
    companyName?: true
    profileDescription?: true
    buisnessStreamID?: true
    companyWebsitUrl?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type Company_ProfileMaxAggregateInputType = {
    id?: true
    companyName?: true
    profileDescription?: true
    buisnessStreamID?: true
    companyWebsitUrl?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type Company_ProfileCountAggregateInputType = {
    id?: true
    companyName?: true
    profileDescription?: true
    buisnessStreamID?: true
    companyWebsitUrl?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type Company_ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company_Profile to aggregate.
     */
    where?: Company_ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Company_Profiles to fetch.
     */
    orderBy?: Company_ProfileOrderByWithRelationInput | Company_ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Company_ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Company_Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Company_Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Company_Profiles
    **/
    _count?: true | Company_ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Company_ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Company_ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Company_ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Company_ProfileMaxAggregateInputType
  }

  export type GetCompany_ProfileAggregateType<T extends Company_ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany_Profile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany_Profile[P]>
      : GetScalarType<T[P], AggregateCompany_Profile[P]>
  }




  export type Company_ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Company_ProfileWhereInput
    orderBy?: Company_ProfileOrderByWithAggregationInput | Company_ProfileOrderByWithAggregationInput[]
    by: Company_ProfileScalarFieldEnum[] | Company_ProfileScalarFieldEnum
    having?: Company_ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Company_ProfileCountAggregateInputType | true
    _avg?: Company_ProfileAvgAggregateInputType
    _sum?: Company_ProfileSumAggregateInputType
    _min?: Company_ProfileMinAggregateInputType
    _max?: Company_ProfileMaxAggregateInputType
  }

  export type Company_ProfileGroupByOutputType = {
    id: number
    companyName: string
    profileDescription: string
    buisnessStreamID: number
    companyWebsitUrl: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: Company_ProfileCountAggregateOutputType | null
    _avg: Company_ProfileAvgAggregateOutputType | null
    _sum: Company_ProfileSumAggregateOutputType | null
    _min: Company_ProfileMinAggregateOutputType | null
    _max: Company_ProfileMaxAggregateOutputType | null
  }

  type GetCompany_ProfileGroupByPayload<T extends Company_ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Company_ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Company_ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Company_ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], Company_ProfileGroupByOutputType[P]>
        }
      >
    >


  export type Company_ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    profileDescription?: boolean
    buisnessStreamID?: boolean
    companyWebsitUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    buisnessStream?: boolean | Buissness_StreamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company_Profile"]>


  export type Company_ProfileSelectScalar = {
    id?: boolean
    companyName?: boolean
    profileDescription?: boolean
    buisnessStreamID?: boolean
    companyWebsitUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type Company_ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buisnessStream?: boolean | Buissness_StreamDefaultArgs<ExtArgs>
  }

  export type $Company_ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company_Profile"
    objects: {
      buisnessStream: Prisma.$Buissness_StreamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      companyName: string
      profileDescription: string
      buisnessStreamID: number
      companyWebsitUrl: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["company_Profile"]>
    composites: {}
  }

  type Company_ProfileGetPayload<S extends boolean | null | undefined | Company_ProfileDefaultArgs> = $Result.GetResult<Prisma.$Company_ProfilePayload, S>

  type Company_ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Company_ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: Company_ProfileCountAggregateInputType | true
    }

  export interface Company_ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company_Profile'], meta: { name: 'Company_Profile' } }
    /**
     * Find zero or one Company_Profile that matches the filter.
     * @param {Company_ProfileFindUniqueArgs} args - Arguments to find a Company_Profile
     * @example
     * // Get one Company_Profile
     * const company_Profile = await prisma.company_Profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Company_ProfileFindUniqueArgs>(args: SelectSubset<T, Company_ProfileFindUniqueArgs<ExtArgs>>): Prisma__Company_ProfileClient<$Result.GetResult<Prisma.$Company_ProfilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Company_Profile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Company_ProfileFindUniqueOrThrowArgs} args - Arguments to find a Company_Profile
     * @example
     * // Get one Company_Profile
     * const company_Profile = await prisma.company_Profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Company_ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, Company_ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Company_ProfileClient<$Result.GetResult<Prisma.$Company_ProfilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Company_Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Company_ProfileFindFirstArgs} args - Arguments to find a Company_Profile
     * @example
     * // Get one Company_Profile
     * const company_Profile = await prisma.company_Profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Company_ProfileFindFirstArgs>(args?: SelectSubset<T, Company_ProfileFindFirstArgs<ExtArgs>>): Prisma__Company_ProfileClient<$Result.GetResult<Prisma.$Company_ProfilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Company_Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Company_ProfileFindFirstOrThrowArgs} args - Arguments to find a Company_Profile
     * @example
     * // Get one Company_Profile
     * const company_Profile = await prisma.company_Profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Company_ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, Company_ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__Company_ProfileClient<$Result.GetResult<Prisma.$Company_ProfilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Company_Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Company_ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Company_Profiles
     * const company_Profiles = await prisma.company_Profile.findMany()
     * 
     * // Get first 10 Company_Profiles
     * const company_Profiles = await prisma.company_Profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const company_ProfileWithIdOnly = await prisma.company_Profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Company_ProfileFindManyArgs>(args?: SelectSubset<T, Company_ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Company_ProfilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Company_Profile.
     * @param {Company_ProfileCreateArgs} args - Arguments to create a Company_Profile.
     * @example
     * // Create one Company_Profile
     * const Company_Profile = await prisma.company_Profile.create({
     *   data: {
     *     // ... data to create a Company_Profile
     *   }
     * })
     * 
     */
    create<T extends Company_ProfileCreateArgs>(args: SelectSubset<T, Company_ProfileCreateArgs<ExtArgs>>): Prisma__Company_ProfileClient<$Result.GetResult<Prisma.$Company_ProfilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Company_Profiles.
     * @param {Company_ProfileCreateManyArgs} args - Arguments to create many Company_Profiles.
     * @example
     * // Create many Company_Profiles
     * const company_Profile = await prisma.company_Profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Company_ProfileCreateManyArgs>(args?: SelectSubset<T, Company_ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Company_Profile.
     * @param {Company_ProfileDeleteArgs} args - Arguments to delete one Company_Profile.
     * @example
     * // Delete one Company_Profile
     * const Company_Profile = await prisma.company_Profile.delete({
     *   where: {
     *     // ... filter to delete one Company_Profile
     *   }
     * })
     * 
     */
    delete<T extends Company_ProfileDeleteArgs>(args: SelectSubset<T, Company_ProfileDeleteArgs<ExtArgs>>): Prisma__Company_ProfileClient<$Result.GetResult<Prisma.$Company_ProfilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Company_Profile.
     * @param {Company_ProfileUpdateArgs} args - Arguments to update one Company_Profile.
     * @example
     * // Update one Company_Profile
     * const company_Profile = await prisma.company_Profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Company_ProfileUpdateArgs>(args: SelectSubset<T, Company_ProfileUpdateArgs<ExtArgs>>): Prisma__Company_ProfileClient<$Result.GetResult<Prisma.$Company_ProfilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Company_Profiles.
     * @param {Company_ProfileDeleteManyArgs} args - Arguments to filter Company_Profiles to delete.
     * @example
     * // Delete a few Company_Profiles
     * const { count } = await prisma.company_Profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Company_ProfileDeleteManyArgs>(args?: SelectSubset<T, Company_ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Company_Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Company_ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Company_Profiles
     * const company_Profile = await prisma.company_Profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Company_ProfileUpdateManyArgs>(args: SelectSubset<T, Company_ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Company_Profile.
     * @param {Company_ProfileUpsertArgs} args - Arguments to update or create a Company_Profile.
     * @example
     * // Update or create a Company_Profile
     * const company_Profile = await prisma.company_Profile.upsert({
     *   create: {
     *     // ... data to create a Company_Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company_Profile we want to update
     *   }
     * })
     */
    upsert<T extends Company_ProfileUpsertArgs>(args: SelectSubset<T, Company_ProfileUpsertArgs<ExtArgs>>): Prisma__Company_ProfileClient<$Result.GetResult<Prisma.$Company_ProfilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Company_Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Company_ProfileCountArgs} args - Arguments to filter Company_Profiles to count.
     * @example
     * // Count the number of Company_Profiles
     * const count = await prisma.company_Profile.count({
     *   where: {
     *     // ... the filter for the Company_Profiles we want to count
     *   }
     * })
    **/
    count<T extends Company_ProfileCountArgs>(
      args?: Subset<T, Company_ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Company_ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company_Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Company_ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Company_ProfileAggregateArgs>(args: Subset<T, Company_ProfileAggregateArgs>): Prisma.PrismaPromise<GetCompany_ProfileAggregateType<T>>

    /**
     * Group by Company_Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Company_ProfileGroupByArgs} args - Group by arguments.
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
      T extends Company_ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Company_ProfileGroupByArgs['orderBy'] }
        : { orderBy?: Company_ProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Company_ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompany_ProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company_Profile model
   */
  readonly fields: Company_ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company_Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Company_ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    buisnessStream<T extends Buissness_StreamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Buissness_StreamDefaultArgs<ExtArgs>>): Prisma__Buissness_StreamClient<$Result.GetResult<Prisma.$Buissness_StreamPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Company_Profile model
   */ 
  interface Company_ProfileFieldRefs {
    readonly id: FieldRef<"Company_Profile", 'Int'>
    readonly companyName: FieldRef<"Company_Profile", 'String'>
    readonly profileDescription: FieldRef<"Company_Profile", 'String'>
    readonly buisnessStreamID: FieldRef<"Company_Profile", 'Int'>
    readonly companyWebsitUrl: FieldRef<"Company_Profile", 'String'>
    readonly createdAt: FieldRef<"Company_Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Company_Profile", 'DateTime'>
    readonly deletedAt: FieldRef<"Company_Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company_Profile findUnique
   */
  export type Company_ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company_Profile
     */
    select?: Company_ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Company_ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Company_Profile to fetch.
     */
    where: Company_ProfileWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Company_Profile findUniqueOrThrow
   */
  export type Company_ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company_Profile
     */
    select?: Company_ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Company_ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Company_Profile to fetch.
     */
    where: Company_ProfileWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Company_Profile findFirst
   */
  export type Company_ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company_Profile
     */
    select?: Company_ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Company_ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Company_Profile to fetch.
     */
    where?: Company_ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Company_Profiles to fetch.
     */
    orderBy?: Company_ProfileOrderByWithRelationInput | Company_ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Company_Profiles.
     */
    cursor?: Company_ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Company_Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Company_Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Company_Profiles.
     */
    distinct?: Company_ProfileScalarFieldEnum | Company_ProfileScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Company_Profile findFirstOrThrow
   */
  export type Company_ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company_Profile
     */
    select?: Company_ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Company_ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Company_Profile to fetch.
     */
    where?: Company_ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Company_Profiles to fetch.
     */
    orderBy?: Company_ProfileOrderByWithRelationInput | Company_ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Company_Profiles.
     */
    cursor?: Company_ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Company_Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Company_Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Company_Profiles.
     */
    distinct?: Company_ProfileScalarFieldEnum | Company_ProfileScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Company_Profile findMany
   */
  export type Company_ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company_Profile
     */
    select?: Company_ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Company_ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Company_Profiles to fetch.
     */
    where?: Company_ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Company_Profiles to fetch.
     */
    orderBy?: Company_ProfileOrderByWithRelationInput | Company_ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Company_Profiles.
     */
    cursor?: Company_ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Company_Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Company_Profiles.
     */
    skip?: number
    distinct?: Company_ProfileScalarFieldEnum | Company_ProfileScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Company_Profile create
   */
  export type Company_ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company_Profile
     */
    select?: Company_ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Company_ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Company_Profile.
     */
    data: XOR<Company_ProfileCreateInput, Company_ProfileUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Company_Profile createMany
   */
  export type Company_ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Company_Profiles.
     */
    data: Company_ProfileCreateManyInput | Company_ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company_Profile update
   */
  export type Company_ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company_Profile
     */
    select?: Company_ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Company_ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Company_Profile.
     */
    data: XOR<Company_ProfileUpdateInput, Company_ProfileUncheckedUpdateInput>
    /**
     * Choose, which Company_Profile to update.
     */
    where: Company_ProfileWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Company_Profile updateMany
   */
  export type Company_ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Company_Profiles.
     */
    data: XOR<Company_ProfileUpdateManyMutationInput, Company_ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Company_Profiles to update
     */
    where?: Company_ProfileWhereInput
  }

  /**
   * Company_Profile upsert
   */
  export type Company_ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company_Profile
     */
    select?: Company_ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Company_ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Company_Profile to update in case it exists.
     */
    where: Company_ProfileWhereUniqueInput
    /**
     * In case the Company_Profile found by the `where` argument doesn't exist, create a new Company_Profile with this data.
     */
    create: XOR<Company_ProfileCreateInput, Company_ProfileUncheckedCreateInput>
    /**
     * In case the Company_Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Company_ProfileUpdateInput, Company_ProfileUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Company_Profile delete
   */
  export type Company_ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company_Profile
     */
    select?: Company_ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Company_ProfileInclude<ExtArgs> | null
    /**
     * Filter which Company_Profile to delete.
     */
    where: Company_ProfileWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Company_Profile deleteMany
   */
  export type Company_ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company_Profiles to delete
     */
    where?: Company_ProfileWhereInput
  }

  /**
   * Company_Profile without action
   */
  export type Company_ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company_Profile
     */
    select?: Company_ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Company_ProfileInclude<ExtArgs> | null
  }


  /**
   * Model education_Detail
   */

  export type AggregateEducation_Detail = {
    _count: Education_DetailCountAggregateOutputType | null
    _avg: Education_DetailAvgAggregateOutputType | null
    _sum: Education_DetailSumAggregateOutputType | null
    _min: Education_DetailMinAggregateOutputType | null
    _max: Education_DetailMaxAggregateOutputType | null
  }

  export type Education_DetailAvgAggregateOutputType = {
    id: number | null
    percentage: number | null
    cgpa: number | null
    userAccount: number | null
  }

  export type Education_DetailSumAggregateOutputType = {
    id: number | null
    percentage: number | null
    cgpa: number | null
    userAccount: number | null
  }

  export type Education_DetailMinAggregateOutputType = {
    id: number | null
    certificateDegreeName: string | null
    IntitutionName: string | null
    startingDate: Date | null
    completionDate: Date | null
    percentage: number | null
    cgpa: number | null
    userAccount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type Education_DetailMaxAggregateOutputType = {
    id: number | null
    certificateDegreeName: string | null
    IntitutionName: string | null
    startingDate: Date | null
    completionDate: Date | null
    percentage: number | null
    cgpa: number | null
    userAccount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type Education_DetailCountAggregateOutputType = {
    id: number
    certificateDegreeName: number
    IntitutionName: number
    startingDate: number
    completionDate: number
    percentage: number
    cgpa: number
    userAccount: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type Education_DetailAvgAggregateInputType = {
    id?: true
    percentage?: true
    cgpa?: true
    userAccount?: true
  }

  export type Education_DetailSumAggregateInputType = {
    id?: true
    percentage?: true
    cgpa?: true
    userAccount?: true
  }

  export type Education_DetailMinAggregateInputType = {
    id?: true
    certificateDegreeName?: true
    IntitutionName?: true
    startingDate?: true
    completionDate?: true
    percentage?: true
    cgpa?: true
    userAccount?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type Education_DetailMaxAggregateInputType = {
    id?: true
    certificateDegreeName?: true
    IntitutionName?: true
    startingDate?: true
    completionDate?: true
    percentage?: true
    cgpa?: true
    userAccount?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type Education_DetailCountAggregateInputType = {
    id?: true
    certificateDegreeName?: true
    IntitutionName?: true
    startingDate?: true
    completionDate?: true
    percentage?: true
    cgpa?: true
    userAccount?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type Education_DetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which education_Detail to aggregate.
     */
    where?: education_DetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of education_Details to fetch.
     */
    orderBy?: education_DetailOrderByWithRelationInput | education_DetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: education_DetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` education_Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` education_Details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned education_Details
    **/
    _count?: true | Education_DetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Education_DetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Education_DetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Education_DetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Education_DetailMaxAggregateInputType
  }

  export type GetEducation_DetailAggregateType<T extends Education_DetailAggregateArgs> = {
        [P in keyof T & keyof AggregateEducation_Detail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducation_Detail[P]>
      : GetScalarType<T[P], AggregateEducation_Detail[P]>
  }




  export type education_DetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: education_DetailWhereInput
    orderBy?: education_DetailOrderByWithAggregationInput | education_DetailOrderByWithAggregationInput[]
    by: Education_DetailScalarFieldEnum[] | Education_DetailScalarFieldEnum
    having?: education_DetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Education_DetailCountAggregateInputType | true
    _avg?: Education_DetailAvgAggregateInputType
    _sum?: Education_DetailSumAggregateInputType
    _min?: Education_DetailMinAggregateInputType
    _max?: Education_DetailMaxAggregateInputType
  }

  export type Education_DetailGroupByOutputType = {
    id: number
    certificateDegreeName: string
    IntitutionName: string
    startingDate: Date
    completionDate: Date
    percentage: number
    cgpa: number
    userAccount: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: Education_DetailCountAggregateOutputType | null
    _avg: Education_DetailAvgAggregateOutputType | null
    _sum: Education_DetailSumAggregateOutputType | null
    _min: Education_DetailMinAggregateOutputType | null
    _max: Education_DetailMaxAggregateOutputType | null
  }

  type GetEducation_DetailGroupByPayload<T extends education_DetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Education_DetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Education_DetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Education_DetailGroupByOutputType[P]>
            : GetScalarType<T[P], Education_DetailGroupByOutputType[P]>
        }
      >
    >


  export type education_DetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    certificateDegreeName?: boolean
    IntitutionName?: boolean
    startingDate?: boolean
    completionDate?: boolean
    percentage?: boolean
    cgpa?: boolean
    userAccount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education_Detail"]>


  export type education_DetailSelectScalar = {
    id?: boolean
    certificateDegreeName?: boolean
    IntitutionName?: boolean
    startingDate?: boolean
    completionDate?: boolean
    percentage?: boolean
    cgpa?: boolean
    userAccount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type education_DetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $education_DetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "education_Detail"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      certificateDegreeName: string
      IntitutionName: string
      startingDate: Date
      completionDate: Date
      percentage: number
      cgpa: number
      userAccount: number
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["education_Detail"]>
    composites: {}
  }

  type education_DetailGetPayload<S extends boolean | null | undefined | education_DetailDefaultArgs> = $Result.GetResult<Prisma.$education_DetailPayload, S>

  type education_DetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<education_DetailFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: Education_DetailCountAggregateInputType | true
    }

  export interface education_DetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['education_Detail'], meta: { name: 'education_Detail' } }
    /**
     * Find zero or one Education_Detail that matches the filter.
     * @param {education_DetailFindUniqueArgs} args - Arguments to find a Education_Detail
     * @example
     * // Get one Education_Detail
     * const education_Detail = await prisma.education_Detail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends education_DetailFindUniqueArgs>(args: SelectSubset<T, education_DetailFindUniqueArgs<ExtArgs>>): Prisma__education_DetailClient<$Result.GetResult<Prisma.$education_DetailPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Education_Detail that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {education_DetailFindUniqueOrThrowArgs} args - Arguments to find a Education_Detail
     * @example
     * // Get one Education_Detail
     * const education_Detail = await prisma.education_Detail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends education_DetailFindUniqueOrThrowArgs>(args: SelectSubset<T, education_DetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__education_DetailClient<$Result.GetResult<Prisma.$education_DetailPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Education_Detail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {education_DetailFindFirstArgs} args - Arguments to find a Education_Detail
     * @example
     * // Get one Education_Detail
     * const education_Detail = await prisma.education_Detail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends education_DetailFindFirstArgs>(args?: SelectSubset<T, education_DetailFindFirstArgs<ExtArgs>>): Prisma__education_DetailClient<$Result.GetResult<Prisma.$education_DetailPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Education_Detail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {education_DetailFindFirstOrThrowArgs} args - Arguments to find a Education_Detail
     * @example
     * // Get one Education_Detail
     * const education_Detail = await prisma.education_Detail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends education_DetailFindFirstOrThrowArgs>(args?: SelectSubset<T, education_DetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__education_DetailClient<$Result.GetResult<Prisma.$education_DetailPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Education_Details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {education_DetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Education_Details
     * const education_Details = await prisma.education_Detail.findMany()
     * 
     * // Get first 10 Education_Details
     * const education_Details = await prisma.education_Detail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const education_DetailWithIdOnly = await prisma.education_Detail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends education_DetailFindManyArgs>(args?: SelectSubset<T, education_DetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$education_DetailPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Education_Detail.
     * @param {education_DetailCreateArgs} args - Arguments to create a Education_Detail.
     * @example
     * // Create one Education_Detail
     * const Education_Detail = await prisma.education_Detail.create({
     *   data: {
     *     // ... data to create a Education_Detail
     *   }
     * })
     * 
     */
    create<T extends education_DetailCreateArgs>(args: SelectSubset<T, education_DetailCreateArgs<ExtArgs>>): Prisma__education_DetailClient<$Result.GetResult<Prisma.$education_DetailPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Education_Details.
     * @param {education_DetailCreateManyArgs} args - Arguments to create many Education_Details.
     * @example
     * // Create many Education_Details
     * const education_Detail = await prisma.education_Detail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends education_DetailCreateManyArgs>(args?: SelectSubset<T, education_DetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Education_Detail.
     * @param {education_DetailDeleteArgs} args - Arguments to delete one Education_Detail.
     * @example
     * // Delete one Education_Detail
     * const Education_Detail = await prisma.education_Detail.delete({
     *   where: {
     *     // ... filter to delete one Education_Detail
     *   }
     * })
     * 
     */
    delete<T extends education_DetailDeleteArgs>(args: SelectSubset<T, education_DetailDeleteArgs<ExtArgs>>): Prisma__education_DetailClient<$Result.GetResult<Prisma.$education_DetailPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Education_Detail.
     * @param {education_DetailUpdateArgs} args - Arguments to update one Education_Detail.
     * @example
     * // Update one Education_Detail
     * const education_Detail = await prisma.education_Detail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends education_DetailUpdateArgs>(args: SelectSubset<T, education_DetailUpdateArgs<ExtArgs>>): Prisma__education_DetailClient<$Result.GetResult<Prisma.$education_DetailPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Education_Details.
     * @param {education_DetailDeleteManyArgs} args - Arguments to filter Education_Details to delete.
     * @example
     * // Delete a few Education_Details
     * const { count } = await prisma.education_Detail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends education_DetailDeleteManyArgs>(args?: SelectSubset<T, education_DetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Education_Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {education_DetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Education_Details
     * const education_Detail = await prisma.education_Detail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends education_DetailUpdateManyArgs>(args: SelectSubset<T, education_DetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Education_Detail.
     * @param {education_DetailUpsertArgs} args - Arguments to update or create a Education_Detail.
     * @example
     * // Update or create a Education_Detail
     * const education_Detail = await prisma.education_Detail.upsert({
     *   create: {
     *     // ... data to create a Education_Detail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Education_Detail we want to update
     *   }
     * })
     */
    upsert<T extends education_DetailUpsertArgs>(args: SelectSubset<T, education_DetailUpsertArgs<ExtArgs>>): Prisma__education_DetailClient<$Result.GetResult<Prisma.$education_DetailPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Education_Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {education_DetailCountArgs} args - Arguments to filter Education_Details to count.
     * @example
     * // Count the number of Education_Details
     * const count = await prisma.education_Detail.count({
     *   where: {
     *     // ... the filter for the Education_Details we want to count
     *   }
     * })
    **/
    count<T extends education_DetailCountArgs>(
      args?: Subset<T, education_DetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Education_DetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Education_Detail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Education_DetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Education_DetailAggregateArgs>(args: Subset<T, Education_DetailAggregateArgs>): Prisma.PrismaPromise<GetEducation_DetailAggregateType<T>>

    /**
     * Group by Education_Detail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {education_DetailGroupByArgs} args - Group by arguments.
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
      T extends education_DetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: education_DetailGroupByArgs['orderBy'] }
        : { orderBy?: education_DetailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, education_DetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducation_DetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the education_Detail model
   */
  readonly fields: education_DetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for education_Detail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__education_DetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the education_Detail model
   */ 
  interface education_DetailFieldRefs {
    readonly id: FieldRef<"education_Detail", 'Int'>
    readonly certificateDegreeName: FieldRef<"education_Detail", 'String'>
    readonly IntitutionName: FieldRef<"education_Detail", 'String'>
    readonly startingDate: FieldRef<"education_Detail", 'DateTime'>
    readonly completionDate: FieldRef<"education_Detail", 'DateTime'>
    readonly percentage: FieldRef<"education_Detail", 'Float'>
    readonly cgpa: FieldRef<"education_Detail", 'Float'>
    readonly userAccount: FieldRef<"education_Detail", 'Int'>
    readonly createdAt: FieldRef<"education_Detail", 'DateTime'>
    readonly updatedAt: FieldRef<"education_Detail", 'DateTime'>
    readonly deletedAt: FieldRef<"education_Detail", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * education_Detail findUnique
   */
  export type education_DetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_Detail
     */
    select?: education_DetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: education_DetailInclude<ExtArgs> | null
    /**
     * Filter, which education_Detail to fetch.
     */
    where: education_DetailWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * education_Detail findUniqueOrThrow
   */
  export type education_DetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_Detail
     */
    select?: education_DetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: education_DetailInclude<ExtArgs> | null
    /**
     * Filter, which education_Detail to fetch.
     */
    where: education_DetailWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * education_Detail findFirst
   */
  export type education_DetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_Detail
     */
    select?: education_DetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: education_DetailInclude<ExtArgs> | null
    /**
     * Filter, which education_Detail to fetch.
     */
    where?: education_DetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of education_Details to fetch.
     */
    orderBy?: education_DetailOrderByWithRelationInput | education_DetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for education_Details.
     */
    cursor?: education_DetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` education_Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` education_Details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of education_Details.
     */
    distinct?: Education_DetailScalarFieldEnum | Education_DetailScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * education_Detail findFirstOrThrow
   */
  export type education_DetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_Detail
     */
    select?: education_DetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: education_DetailInclude<ExtArgs> | null
    /**
     * Filter, which education_Detail to fetch.
     */
    where?: education_DetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of education_Details to fetch.
     */
    orderBy?: education_DetailOrderByWithRelationInput | education_DetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for education_Details.
     */
    cursor?: education_DetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` education_Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` education_Details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of education_Details.
     */
    distinct?: Education_DetailScalarFieldEnum | Education_DetailScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * education_Detail findMany
   */
  export type education_DetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_Detail
     */
    select?: education_DetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: education_DetailInclude<ExtArgs> | null
    /**
     * Filter, which education_Details to fetch.
     */
    where?: education_DetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of education_Details to fetch.
     */
    orderBy?: education_DetailOrderByWithRelationInput | education_DetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing education_Details.
     */
    cursor?: education_DetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` education_Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` education_Details.
     */
    skip?: number
    distinct?: Education_DetailScalarFieldEnum | Education_DetailScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * education_Detail create
   */
  export type education_DetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_Detail
     */
    select?: education_DetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: education_DetailInclude<ExtArgs> | null
    /**
     * The data needed to create a education_Detail.
     */
    data: XOR<education_DetailCreateInput, education_DetailUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * education_Detail createMany
   */
  export type education_DetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many education_Details.
     */
    data: education_DetailCreateManyInput | education_DetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * education_Detail update
   */
  export type education_DetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_Detail
     */
    select?: education_DetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: education_DetailInclude<ExtArgs> | null
    /**
     * The data needed to update a education_Detail.
     */
    data: XOR<education_DetailUpdateInput, education_DetailUncheckedUpdateInput>
    /**
     * Choose, which education_Detail to update.
     */
    where: education_DetailWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * education_Detail updateMany
   */
  export type education_DetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update education_Details.
     */
    data: XOR<education_DetailUpdateManyMutationInput, education_DetailUncheckedUpdateManyInput>
    /**
     * Filter which education_Details to update
     */
    where?: education_DetailWhereInput
  }

  /**
   * education_Detail upsert
   */
  export type education_DetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_Detail
     */
    select?: education_DetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: education_DetailInclude<ExtArgs> | null
    /**
     * The filter to search for the education_Detail to update in case it exists.
     */
    where: education_DetailWhereUniqueInput
    /**
     * In case the education_Detail found by the `where` argument doesn't exist, create a new education_Detail with this data.
     */
    create: XOR<education_DetailCreateInput, education_DetailUncheckedCreateInput>
    /**
     * In case the education_Detail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<education_DetailUpdateInput, education_DetailUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * education_Detail delete
   */
  export type education_DetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_Detail
     */
    select?: education_DetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: education_DetailInclude<ExtArgs> | null
    /**
     * Filter which education_Detail to delete.
     */
    where: education_DetailWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * education_Detail deleteMany
   */
  export type education_DetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which education_Details to delete
     */
    where?: education_DetailWhereInput
  }

  /**
   * education_Detail without action
   */
  export type education_DetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the education_Detail
     */
    select?: education_DetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: education_DetailInclude<ExtArgs> | null
  }


  /**
   * Model seeker_Profile
   */

  export type AggregateSeeker_Profile = {
    _count: Seeker_ProfileCountAggregateOutputType | null
    _avg: Seeker_ProfileAvgAggregateOutputType | null
    _sum: Seeker_ProfileSumAggregateOutputType | null
    _min: Seeker_ProfileMinAggregateOutputType | null
    _max: Seeker_ProfileMaxAggregateOutputType | null
  }

  export type Seeker_ProfileAvgAggregateOutputType = {
    id: number | null
    currentSalary: number | null
    userAccount: number | null
  }

  export type Seeker_ProfileSumAggregateOutputType = {
    id: number | null
    currentSalary: number | null
    userAccount: number | null
  }

  export type Seeker_ProfileMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    currentSalary: number | null
    isAnnullyMonthly: boolean | null
    userAccount: number | null
    currency: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type Seeker_ProfileMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    currentSalary: number | null
    isAnnullyMonthly: boolean | null
    userAccount: number | null
    currency: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type Seeker_ProfileCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    currentSalary: number
    isAnnullyMonthly: number
    userAccount: number
    currency: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type Seeker_ProfileAvgAggregateInputType = {
    id?: true
    currentSalary?: true
    userAccount?: true
  }

  export type Seeker_ProfileSumAggregateInputType = {
    id?: true
    currentSalary?: true
    userAccount?: true
  }

  export type Seeker_ProfileMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    currentSalary?: true
    isAnnullyMonthly?: true
    userAccount?: true
    currency?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type Seeker_ProfileMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    currentSalary?: true
    isAnnullyMonthly?: true
    userAccount?: true
    currency?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type Seeker_ProfileCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    currentSalary?: true
    isAnnullyMonthly?: true
    userAccount?: true
    currency?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type Seeker_ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which seeker_Profile to aggregate.
     */
    where?: seeker_ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seeker_Profiles to fetch.
     */
    orderBy?: seeker_ProfileOrderByWithRelationInput | seeker_ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: seeker_ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seeker_Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seeker_Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned seeker_Profiles
    **/
    _count?: true | Seeker_ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Seeker_ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Seeker_ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Seeker_ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Seeker_ProfileMaxAggregateInputType
  }

  export type GetSeeker_ProfileAggregateType<T extends Seeker_ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateSeeker_Profile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeeker_Profile[P]>
      : GetScalarType<T[P], AggregateSeeker_Profile[P]>
  }




  export type seeker_ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: seeker_ProfileWhereInput
    orderBy?: seeker_ProfileOrderByWithAggregationInput | seeker_ProfileOrderByWithAggregationInput[]
    by: Seeker_ProfileScalarFieldEnum[] | Seeker_ProfileScalarFieldEnum
    having?: seeker_ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Seeker_ProfileCountAggregateInputType | true
    _avg?: Seeker_ProfileAvgAggregateInputType
    _sum?: Seeker_ProfileSumAggregateInputType
    _min?: Seeker_ProfileMinAggregateInputType
    _max?: Seeker_ProfileMaxAggregateInputType
  }

  export type Seeker_ProfileGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    currentSalary: number
    isAnnullyMonthly: boolean
    userAccount: number
    currency: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: Seeker_ProfileCountAggregateOutputType | null
    _avg: Seeker_ProfileAvgAggregateOutputType | null
    _sum: Seeker_ProfileSumAggregateOutputType | null
    _min: Seeker_ProfileMinAggregateOutputType | null
    _max: Seeker_ProfileMaxAggregateOutputType | null
  }

  type GetSeeker_ProfileGroupByPayload<T extends seeker_ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Seeker_ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Seeker_ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Seeker_ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], Seeker_ProfileGroupByOutputType[P]>
        }
      >
    >


  export type seeker_ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    currentSalary?: boolean
    isAnnullyMonthly?: boolean
    userAccount?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seeker_Profile"]>


  export type seeker_ProfileSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    currentSalary?: boolean
    isAnnullyMonthly?: boolean
    userAccount?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type seeker_ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $seeker_ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "seeker_Profile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      currentSalary: number
      isAnnullyMonthly: boolean
      userAccount: number
      currency: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["seeker_Profile"]>
    composites: {}
  }

  type seeker_ProfileGetPayload<S extends boolean | null | undefined | seeker_ProfileDefaultArgs> = $Result.GetResult<Prisma.$seeker_ProfilePayload, S>

  type seeker_ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<seeker_ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: Seeker_ProfileCountAggregateInputType | true
    }

  export interface seeker_ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['seeker_Profile'], meta: { name: 'seeker_Profile' } }
    /**
     * Find zero or one Seeker_Profile that matches the filter.
     * @param {seeker_ProfileFindUniqueArgs} args - Arguments to find a Seeker_Profile
     * @example
     * // Get one Seeker_Profile
     * const seeker_Profile = await prisma.seeker_Profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends seeker_ProfileFindUniqueArgs>(args: SelectSubset<T, seeker_ProfileFindUniqueArgs<ExtArgs>>): Prisma__seeker_ProfileClient<$Result.GetResult<Prisma.$seeker_ProfilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Seeker_Profile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {seeker_ProfileFindUniqueOrThrowArgs} args - Arguments to find a Seeker_Profile
     * @example
     * // Get one Seeker_Profile
     * const seeker_Profile = await prisma.seeker_Profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends seeker_ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, seeker_ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__seeker_ProfileClient<$Result.GetResult<Prisma.$seeker_ProfilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Seeker_Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seeker_ProfileFindFirstArgs} args - Arguments to find a Seeker_Profile
     * @example
     * // Get one Seeker_Profile
     * const seeker_Profile = await prisma.seeker_Profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends seeker_ProfileFindFirstArgs>(args?: SelectSubset<T, seeker_ProfileFindFirstArgs<ExtArgs>>): Prisma__seeker_ProfileClient<$Result.GetResult<Prisma.$seeker_ProfilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Seeker_Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seeker_ProfileFindFirstOrThrowArgs} args - Arguments to find a Seeker_Profile
     * @example
     * // Get one Seeker_Profile
     * const seeker_Profile = await prisma.seeker_Profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends seeker_ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, seeker_ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__seeker_ProfileClient<$Result.GetResult<Prisma.$seeker_ProfilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Seeker_Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seeker_ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seeker_Profiles
     * const seeker_Profiles = await prisma.seeker_Profile.findMany()
     * 
     * // Get first 10 Seeker_Profiles
     * const seeker_Profiles = await prisma.seeker_Profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seeker_ProfileWithIdOnly = await prisma.seeker_Profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends seeker_ProfileFindManyArgs>(args?: SelectSubset<T, seeker_ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seeker_ProfilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Seeker_Profile.
     * @param {seeker_ProfileCreateArgs} args - Arguments to create a Seeker_Profile.
     * @example
     * // Create one Seeker_Profile
     * const Seeker_Profile = await prisma.seeker_Profile.create({
     *   data: {
     *     // ... data to create a Seeker_Profile
     *   }
     * })
     * 
     */
    create<T extends seeker_ProfileCreateArgs>(args: SelectSubset<T, seeker_ProfileCreateArgs<ExtArgs>>): Prisma__seeker_ProfileClient<$Result.GetResult<Prisma.$seeker_ProfilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Seeker_Profiles.
     * @param {seeker_ProfileCreateManyArgs} args - Arguments to create many Seeker_Profiles.
     * @example
     * // Create many Seeker_Profiles
     * const seeker_Profile = await prisma.seeker_Profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends seeker_ProfileCreateManyArgs>(args?: SelectSubset<T, seeker_ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Seeker_Profile.
     * @param {seeker_ProfileDeleteArgs} args - Arguments to delete one Seeker_Profile.
     * @example
     * // Delete one Seeker_Profile
     * const Seeker_Profile = await prisma.seeker_Profile.delete({
     *   where: {
     *     // ... filter to delete one Seeker_Profile
     *   }
     * })
     * 
     */
    delete<T extends seeker_ProfileDeleteArgs>(args: SelectSubset<T, seeker_ProfileDeleteArgs<ExtArgs>>): Prisma__seeker_ProfileClient<$Result.GetResult<Prisma.$seeker_ProfilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Seeker_Profile.
     * @param {seeker_ProfileUpdateArgs} args - Arguments to update one Seeker_Profile.
     * @example
     * // Update one Seeker_Profile
     * const seeker_Profile = await prisma.seeker_Profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends seeker_ProfileUpdateArgs>(args: SelectSubset<T, seeker_ProfileUpdateArgs<ExtArgs>>): Prisma__seeker_ProfileClient<$Result.GetResult<Prisma.$seeker_ProfilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Seeker_Profiles.
     * @param {seeker_ProfileDeleteManyArgs} args - Arguments to filter Seeker_Profiles to delete.
     * @example
     * // Delete a few Seeker_Profiles
     * const { count } = await prisma.seeker_Profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends seeker_ProfileDeleteManyArgs>(args?: SelectSubset<T, seeker_ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seeker_Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seeker_ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seeker_Profiles
     * const seeker_Profile = await prisma.seeker_Profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends seeker_ProfileUpdateManyArgs>(args: SelectSubset<T, seeker_ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Seeker_Profile.
     * @param {seeker_ProfileUpsertArgs} args - Arguments to update or create a Seeker_Profile.
     * @example
     * // Update or create a Seeker_Profile
     * const seeker_Profile = await prisma.seeker_Profile.upsert({
     *   create: {
     *     // ... data to create a Seeker_Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seeker_Profile we want to update
     *   }
     * })
     */
    upsert<T extends seeker_ProfileUpsertArgs>(args: SelectSubset<T, seeker_ProfileUpsertArgs<ExtArgs>>): Prisma__seeker_ProfileClient<$Result.GetResult<Prisma.$seeker_ProfilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Seeker_Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seeker_ProfileCountArgs} args - Arguments to filter Seeker_Profiles to count.
     * @example
     * // Count the number of Seeker_Profiles
     * const count = await prisma.seeker_Profile.count({
     *   where: {
     *     // ... the filter for the Seeker_Profiles we want to count
     *   }
     * })
    **/
    count<T extends seeker_ProfileCountArgs>(
      args?: Subset<T, seeker_ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Seeker_ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seeker_Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Seeker_ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Seeker_ProfileAggregateArgs>(args: Subset<T, Seeker_ProfileAggregateArgs>): Prisma.PrismaPromise<GetSeeker_ProfileAggregateType<T>>

    /**
     * Group by Seeker_Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seeker_ProfileGroupByArgs} args - Group by arguments.
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
      T extends seeker_ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: seeker_ProfileGroupByArgs['orderBy'] }
        : { orderBy?: seeker_ProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, seeker_ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeeker_ProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the seeker_Profile model
   */
  readonly fields: seeker_ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for seeker_Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__seeker_ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the seeker_Profile model
   */ 
  interface seeker_ProfileFieldRefs {
    readonly id: FieldRef<"seeker_Profile", 'Int'>
    readonly firstName: FieldRef<"seeker_Profile", 'String'>
    readonly lastName: FieldRef<"seeker_Profile", 'String'>
    readonly currentSalary: FieldRef<"seeker_Profile", 'Float'>
    readonly isAnnullyMonthly: FieldRef<"seeker_Profile", 'Boolean'>
    readonly userAccount: FieldRef<"seeker_Profile", 'Int'>
    readonly currency: FieldRef<"seeker_Profile", 'String'>
    readonly createdAt: FieldRef<"seeker_Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"seeker_Profile", 'DateTime'>
    readonly deletedAt: FieldRef<"seeker_Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * seeker_Profile findUnique
   */
  export type seeker_ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seeker_Profile
     */
    select?: seeker_ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seeker_ProfileInclude<ExtArgs> | null
    /**
     * Filter, which seeker_Profile to fetch.
     */
    where: seeker_ProfileWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * seeker_Profile findUniqueOrThrow
   */
  export type seeker_ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seeker_Profile
     */
    select?: seeker_ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seeker_ProfileInclude<ExtArgs> | null
    /**
     * Filter, which seeker_Profile to fetch.
     */
    where: seeker_ProfileWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * seeker_Profile findFirst
   */
  export type seeker_ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seeker_Profile
     */
    select?: seeker_ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seeker_ProfileInclude<ExtArgs> | null
    /**
     * Filter, which seeker_Profile to fetch.
     */
    where?: seeker_ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seeker_Profiles to fetch.
     */
    orderBy?: seeker_ProfileOrderByWithRelationInput | seeker_ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for seeker_Profiles.
     */
    cursor?: seeker_ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seeker_Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seeker_Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of seeker_Profiles.
     */
    distinct?: Seeker_ProfileScalarFieldEnum | Seeker_ProfileScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * seeker_Profile findFirstOrThrow
   */
  export type seeker_ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seeker_Profile
     */
    select?: seeker_ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seeker_ProfileInclude<ExtArgs> | null
    /**
     * Filter, which seeker_Profile to fetch.
     */
    where?: seeker_ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seeker_Profiles to fetch.
     */
    orderBy?: seeker_ProfileOrderByWithRelationInput | seeker_ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for seeker_Profiles.
     */
    cursor?: seeker_ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seeker_Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seeker_Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of seeker_Profiles.
     */
    distinct?: Seeker_ProfileScalarFieldEnum | Seeker_ProfileScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * seeker_Profile findMany
   */
  export type seeker_ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seeker_Profile
     */
    select?: seeker_ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seeker_ProfileInclude<ExtArgs> | null
    /**
     * Filter, which seeker_Profiles to fetch.
     */
    where?: seeker_ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seeker_Profiles to fetch.
     */
    orderBy?: seeker_ProfileOrderByWithRelationInput | seeker_ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing seeker_Profiles.
     */
    cursor?: seeker_ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seeker_Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seeker_Profiles.
     */
    skip?: number
    distinct?: Seeker_ProfileScalarFieldEnum | Seeker_ProfileScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * seeker_Profile create
   */
  export type seeker_ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seeker_Profile
     */
    select?: seeker_ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seeker_ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a seeker_Profile.
     */
    data: XOR<seeker_ProfileCreateInput, seeker_ProfileUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * seeker_Profile createMany
   */
  export type seeker_ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many seeker_Profiles.
     */
    data: seeker_ProfileCreateManyInput | seeker_ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * seeker_Profile update
   */
  export type seeker_ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seeker_Profile
     */
    select?: seeker_ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seeker_ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a seeker_Profile.
     */
    data: XOR<seeker_ProfileUpdateInput, seeker_ProfileUncheckedUpdateInput>
    /**
     * Choose, which seeker_Profile to update.
     */
    where: seeker_ProfileWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * seeker_Profile updateMany
   */
  export type seeker_ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update seeker_Profiles.
     */
    data: XOR<seeker_ProfileUpdateManyMutationInput, seeker_ProfileUncheckedUpdateManyInput>
    /**
     * Filter which seeker_Profiles to update
     */
    where?: seeker_ProfileWhereInput
  }

  /**
   * seeker_Profile upsert
   */
  export type seeker_ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seeker_Profile
     */
    select?: seeker_ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seeker_ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the seeker_Profile to update in case it exists.
     */
    where: seeker_ProfileWhereUniqueInput
    /**
     * In case the seeker_Profile found by the `where` argument doesn't exist, create a new seeker_Profile with this data.
     */
    create: XOR<seeker_ProfileCreateInput, seeker_ProfileUncheckedCreateInput>
    /**
     * In case the seeker_Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<seeker_ProfileUpdateInput, seeker_ProfileUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * seeker_Profile delete
   */
  export type seeker_ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seeker_Profile
     */
    select?: seeker_ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seeker_ProfileInclude<ExtArgs> | null
    /**
     * Filter which seeker_Profile to delete.
     */
    where: seeker_ProfileWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * seeker_Profile deleteMany
   */
  export type seeker_ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which seeker_Profiles to delete
     */
    where?: seeker_ProfileWhereInput
  }

  /**
   * seeker_Profile without action
   */
  export type seeker_ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seeker_Profile
     */
    select?: seeker_ProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seeker_ProfileInclude<ExtArgs> | null
  }


  /**
   * Model SkillSet
   */

  export type AggregateSkillSet = {
    _count: SkillSetCountAggregateOutputType | null
    _avg: SkillSetAvgAggregateOutputType | null
    _sum: SkillSetSumAggregateOutputType | null
    _min: SkillSetMinAggregateOutputType | null
    _max: SkillSetMaxAggregateOutputType | null
  }

  export type SkillSetAvgAggregateOutputType = {
    id: number | null
  }

  export type SkillSetSumAggregateOutputType = {
    id: number | null
  }

  export type SkillSetMinAggregateOutputType = {
    id: number | null
    skillSetName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type SkillSetMaxAggregateOutputType = {
    id: number | null
    skillSetName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type SkillSetCountAggregateOutputType = {
    id: number
    skillSetName: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type SkillSetAvgAggregateInputType = {
    id?: true
  }

  export type SkillSetSumAggregateInputType = {
    id?: true
  }

  export type SkillSetMinAggregateInputType = {
    id?: true
    skillSetName?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type SkillSetMaxAggregateInputType = {
    id?: true
    skillSetName?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type SkillSetCountAggregateInputType = {
    id?: true
    skillSetName?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type SkillSetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillSet to aggregate.
     */
    where?: SkillSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillSets to fetch.
     */
    orderBy?: SkillSetOrderByWithRelationInput | SkillSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SkillSets
    **/
    _count?: true | SkillSetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillSetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillSetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillSetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillSetMaxAggregateInputType
  }

  export type GetSkillSetAggregateType<T extends SkillSetAggregateArgs> = {
        [P in keyof T & keyof AggregateSkillSet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkillSet[P]>
      : GetScalarType<T[P], AggregateSkillSet[P]>
  }




  export type SkillSetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillSetWhereInput
    orderBy?: SkillSetOrderByWithAggregationInput | SkillSetOrderByWithAggregationInput[]
    by: SkillSetScalarFieldEnum[] | SkillSetScalarFieldEnum
    having?: SkillSetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillSetCountAggregateInputType | true
    _avg?: SkillSetAvgAggregateInputType
    _sum?: SkillSetSumAggregateInputType
    _min?: SkillSetMinAggregateInputType
    _max?: SkillSetMaxAggregateInputType
  }

  export type SkillSetGroupByOutputType = {
    id: number
    skillSetName: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: SkillSetCountAggregateOutputType | null
    _avg: SkillSetAvgAggregateOutputType | null
    _sum: SkillSetSumAggregateOutputType | null
    _min: SkillSetMinAggregateOutputType | null
    _max: SkillSetMaxAggregateOutputType | null
  }

  type GetSkillSetGroupByPayload<T extends SkillSetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillSetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillSetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillSetGroupByOutputType[P]>
            : GetScalarType<T[P], SkillSetGroupByOutputType[P]>
        }
      >
    >


  export type SkillSetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skillSetName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    skillSet?: boolean | SkillSet$skillSetArgs<ExtArgs>
    _count?: boolean | SkillSetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillSet"]>


  export type SkillSetSelectScalar = {
    id?: boolean
    skillSetName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type SkillSetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skillSet?: boolean | SkillSet$skillSetArgs<ExtArgs>
    _count?: boolean | SkillSetCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SkillSetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SkillSet"
    objects: {
      skillSet: Prisma.$Seeker_Skill_SetsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      skillSetName: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["skillSet"]>
    composites: {}
  }

  type SkillSetGetPayload<S extends boolean | null | undefined | SkillSetDefaultArgs> = $Result.GetResult<Prisma.$SkillSetPayload, S>

  type SkillSetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SkillSetFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: SkillSetCountAggregateInputType | true
    }

  export interface SkillSetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SkillSet'], meta: { name: 'SkillSet' } }
    /**
     * Find zero or one SkillSet that matches the filter.
     * @param {SkillSetFindUniqueArgs} args - Arguments to find a SkillSet
     * @example
     * // Get one SkillSet
     * const skillSet = await prisma.skillSet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillSetFindUniqueArgs>(args: SelectSubset<T, SkillSetFindUniqueArgs<ExtArgs>>): Prisma__SkillSetClient<$Result.GetResult<Prisma.$SkillSetPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SkillSet that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SkillSetFindUniqueOrThrowArgs} args - Arguments to find a SkillSet
     * @example
     * // Get one SkillSet
     * const skillSet = await prisma.skillSet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillSetFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillSetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillSetClient<$Result.GetResult<Prisma.$SkillSetPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SkillSet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillSetFindFirstArgs} args - Arguments to find a SkillSet
     * @example
     * // Get one SkillSet
     * const skillSet = await prisma.skillSet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillSetFindFirstArgs>(args?: SelectSubset<T, SkillSetFindFirstArgs<ExtArgs>>): Prisma__SkillSetClient<$Result.GetResult<Prisma.$SkillSetPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SkillSet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillSetFindFirstOrThrowArgs} args - Arguments to find a SkillSet
     * @example
     * // Get one SkillSet
     * const skillSet = await prisma.skillSet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillSetFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillSetFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillSetClient<$Result.GetResult<Prisma.$SkillSetPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SkillSets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillSetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SkillSets
     * const skillSets = await prisma.skillSet.findMany()
     * 
     * // Get first 10 SkillSets
     * const skillSets = await prisma.skillSet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillSetWithIdOnly = await prisma.skillSet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillSetFindManyArgs>(args?: SelectSubset<T, SkillSetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillSetPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SkillSet.
     * @param {SkillSetCreateArgs} args - Arguments to create a SkillSet.
     * @example
     * // Create one SkillSet
     * const SkillSet = await prisma.skillSet.create({
     *   data: {
     *     // ... data to create a SkillSet
     *   }
     * })
     * 
     */
    create<T extends SkillSetCreateArgs>(args: SelectSubset<T, SkillSetCreateArgs<ExtArgs>>): Prisma__SkillSetClient<$Result.GetResult<Prisma.$SkillSetPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SkillSets.
     * @param {SkillSetCreateManyArgs} args - Arguments to create many SkillSets.
     * @example
     * // Create many SkillSets
     * const skillSet = await prisma.skillSet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillSetCreateManyArgs>(args?: SelectSubset<T, SkillSetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SkillSet.
     * @param {SkillSetDeleteArgs} args - Arguments to delete one SkillSet.
     * @example
     * // Delete one SkillSet
     * const SkillSet = await prisma.skillSet.delete({
     *   where: {
     *     // ... filter to delete one SkillSet
     *   }
     * })
     * 
     */
    delete<T extends SkillSetDeleteArgs>(args: SelectSubset<T, SkillSetDeleteArgs<ExtArgs>>): Prisma__SkillSetClient<$Result.GetResult<Prisma.$SkillSetPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SkillSet.
     * @param {SkillSetUpdateArgs} args - Arguments to update one SkillSet.
     * @example
     * // Update one SkillSet
     * const skillSet = await prisma.skillSet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillSetUpdateArgs>(args: SelectSubset<T, SkillSetUpdateArgs<ExtArgs>>): Prisma__SkillSetClient<$Result.GetResult<Prisma.$SkillSetPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SkillSets.
     * @param {SkillSetDeleteManyArgs} args - Arguments to filter SkillSets to delete.
     * @example
     * // Delete a few SkillSets
     * const { count } = await prisma.skillSet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillSetDeleteManyArgs>(args?: SelectSubset<T, SkillSetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillSets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillSetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SkillSets
     * const skillSet = await prisma.skillSet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillSetUpdateManyArgs>(args: SelectSubset<T, SkillSetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SkillSet.
     * @param {SkillSetUpsertArgs} args - Arguments to update or create a SkillSet.
     * @example
     * // Update or create a SkillSet
     * const skillSet = await prisma.skillSet.upsert({
     *   create: {
     *     // ... data to create a SkillSet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SkillSet we want to update
     *   }
     * })
     */
    upsert<T extends SkillSetUpsertArgs>(args: SelectSubset<T, SkillSetUpsertArgs<ExtArgs>>): Prisma__SkillSetClient<$Result.GetResult<Prisma.$SkillSetPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SkillSets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillSetCountArgs} args - Arguments to filter SkillSets to count.
     * @example
     * // Count the number of SkillSets
     * const count = await prisma.skillSet.count({
     *   where: {
     *     // ... the filter for the SkillSets we want to count
     *   }
     * })
    **/
    count<T extends SkillSetCountArgs>(
      args?: Subset<T, SkillSetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillSetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SkillSet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillSetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillSetAggregateArgs>(args: Subset<T, SkillSetAggregateArgs>): Prisma.PrismaPromise<GetSkillSetAggregateType<T>>

    /**
     * Group by SkillSet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillSetGroupByArgs} args - Group by arguments.
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
      T extends SkillSetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillSetGroupByArgs['orderBy'] }
        : { orderBy?: SkillSetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SkillSetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillSetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SkillSet model
   */
  readonly fields: SkillSetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SkillSet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillSetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skillSet<T extends SkillSet$skillSetArgs<ExtArgs> = {}>(args?: Subset<T, SkillSet$skillSetArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Seeker_Skill_SetsPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the SkillSet model
   */ 
  interface SkillSetFieldRefs {
    readonly id: FieldRef<"SkillSet", 'Int'>
    readonly skillSetName: FieldRef<"SkillSet", 'String'>
    readonly createdAt: FieldRef<"SkillSet", 'DateTime'>
    readonly updatedAt: FieldRef<"SkillSet", 'DateTime'>
    readonly deletedAt: FieldRef<"SkillSet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SkillSet findUnique
   */
  export type SkillSetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillSet
     */
    select?: SkillSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillSetInclude<ExtArgs> | null
    /**
     * Filter, which SkillSet to fetch.
     */
    where: SkillSetWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SkillSet findUniqueOrThrow
   */
  export type SkillSetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillSet
     */
    select?: SkillSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillSetInclude<ExtArgs> | null
    /**
     * Filter, which SkillSet to fetch.
     */
    where: SkillSetWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SkillSet findFirst
   */
  export type SkillSetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillSet
     */
    select?: SkillSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillSetInclude<ExtArgs> | null
    /**
     * Filter, which SkillSet to fetch.
     */
    where?: SkillSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillSets to fetch.
     */
    orderBy?: SkillSetOrderByWithRelationInput | SkillSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillSets.
     */
    cursor?: SkillSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillSets.
     */
    distinct?: SkillSetScalarFieldEnum | SkillSetScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SkillSet findFirstOrThrow
   */
  export type SkillSetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillSet
     */
    select?: SkillSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillSetInclude<ExtArgs> | null
    /**
     * Filter, which SkillSet to fetch.
     */
    where?: SkillSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillSets to fetch.
     */
    orderBy?: SkillSetOrderByWithRelationInput | SkillSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillSets.
     */
    cursor?: SkillSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillSets.
     */
    distinct?: SkillSetScalarFieldEnum | SkillSetScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SkillSet findMany
   */
  export type SkillSetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillSet
     */
    select?: SkillSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillSetInclude<ExtArgs> | null
    /**
     * Filter, which SkillSets to fetch.
     */
    where?: SkillSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillSets to fetch.
     */
    orderBy?: SkillSetOrderByWithRelationInput | SkillSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SkillSets.
     */
    cursor?: SkillSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillSets.
     */
    skip?: number
    distinct?: SkillSetScalarFieldEnum | SkillSetScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SkillSet create
   */
  export type SkillSetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillSet
     */
    select?: SkillSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillSetInclude<ExtArgs> | null
    /**
     * The data needed to create a SkillSet.
     */
    data: XOR<SkillSetCreateInput, SkillSetUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SkillSet createMany
   */
  export type SkillSetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SkillSets.
     */
    data: SkillSetCreateManyInput | SkillSetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SkillSet update
   */
  export type SkillSetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillSet
     */
    select?: SkillSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillSetInclude<ExtArgs> | null
    /**
     * The data needed to update a SkillSet.
     */
    data: XOR<SkillSetUpdateInput, SkillSetUncheckedUpdateInput>
    /**
     * Choose, which SkillSet to update.
     */
    where: SkillSetWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SkillSet updateMany
   */
  export type SkillSetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SkillSets.
     */
    data: XOR<SkillSetUpdateManyMutationInput, SkillSetUncheckedUpdateManyInput>
    /**
     * Filter which SkillSets to update
     */
    where?: SkillSetWhereInput
  }

  /**
   * SkillSet upsert
   */
  export type SkillSetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillSet
     */
    select?: SkillSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillSetInclude<ExtArgs> | null
    /**
     * The filter to search for the SkillSet to update in case it exists.
     */
    where: SkillSetWhereUniqueInput
    /**
     * In case the SkillSet found by the `where` argument doesn't exist, create a new SkillSet with this data.
     */
    create: XOR<SkillSetCreateInput, SkillSetUncheckedCreateInput>
    /**
     * In case the SkillSet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillSetUpdateInput, SkillSetUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SkillSet delete
   */
  export type SkillSetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillSet
     */
    select?: SkillSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillSetInclude<ExtArgs> | null
    /**
     * Filter which SkillSet to delete.
     */
    where: SkillSetWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SkillSet deleteMany
   */
  export type SkillSetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillSets to delete
     */
    where?: SkillSetWhereInput
  }

  /**
   * SkillSet.skillSet
   */
  export type SkillSet$skillSetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seeker_Skill_Sets
     */
    select?: Seeker_Skill_SetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Seeker_Skill_SetsInclude<ExtArgs> | null
    where?: Seeker_Skill_SetsWhereInput
    orderBy?: Seeker_Skill_SetsOrderByWithRelationInput | Seeker_Skill_SetsOrderByWithRelationInput[]
    cursor?: Seeker_Skill_SetsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Seeker_Skill_SetsScalarFieldEnum | Seeker_Skill_SetsScalarFieldEnum[]
  }

  /**
   * SkillSet without action
   */
  export type SkillSetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillSet
     */
    select?: SkillSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillSetInclude<ExtArgs> | null
  }


  /**
   * Model Seeker_Skill_Sets
   */

  export type AggregateSeeker_Skill_Sets = {
    _count: Seeker_Skill_SetsCountAggregateOutputType | null
    _avg: Seeker_Skill_SetsAvgAggregateOutputType | null
    _sum: Seeker_Skill_SetsSumAggregateOutputType | null
    _min: Seeker_Skill_SetsMinAggregateOutputType | null
    _max: Seeker_Skill_SetsMaxAggregateOutputType | null
  }

  export type Seeker_Skill_SetsAvgAggregateOutputType = {
    id: number | null
    skillSetId: number | null
    userAccount: number | null
  }

  export type Seeker_Skill_SetsSumAggregateOutputType = {
    id: number | null
    skillSetId: number | null
    userAccount: number | null
  }

  export type Seeker_Skill_SetsMinAggregateOutputType = {
    id: number | null
    skillSetId: number | null
    userAccount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type Seeker_Skill_SetsMaxAggregateOutputType = {
    id: number | null
    skillSetId: number | null
    userAccount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type Seeker_Skill_SetsCountAggregateOutputType = {
    id: number
    skillSetId: number
    userAccount: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type Seeker_Skill_SetsAvgAggregateInputType = {
    id?: true
    skillSetId?: true
    userAccount?: true
  }

  export type Seeker_Skill_SetsSumAggregateInputType = {
    id?: true
    skillSetId?: true
    userAccount?: true
  }

  export type Seeker_Skill_SetsMinAggregateInputType = {
    id?: true
    skillSetId?: true
    userAccount?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type Seeker_Skill_SetsMaxAggregateInputType = {
    id?: true
    skillSetId?: true
    userAccount?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type Seeker_Skill_SetsCountAggregateInputType = {
    id?: true
    skillSetId?: true
    userAccount?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type Seeker_Skill_SetsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seeker_Skill_Sets to aggregate.
     */
    where?: Seeker_Skill_SetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seeker_Skill_Sets to fetch.
     */
    orderBy?: Seeker_Skill_SetsOrderByWithRelationInput | Seeker_Skill_SetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Seeker_Skill_SetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seeker_Skill_Sets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seeker_Skill_Sets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Seeker_Skill_Sets
    **/
    _count?: true | Seeker_Skill_SetsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Seeker_Skill_SetsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Seeker_Skill_SetsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Seeker_Skill_SetsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Seeker_Skill_SetsMaxAggregateInputType
  }

  export type GetSeeker_Skill_SetsAggregateType<T extends Seeker_Skill_SetsAggregateArgs> = {
        [P in keyof T & keyof AggregateSeeker_Skill_Sets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeeker_Skill_Sets[P]>
      : GetScalarType<T[P], AggregateSeeker_Skill_Sets[P]>
  }




  export type Seeker_Skill_SetsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Seeker_Skill_SetsWhereInput
    orderBy?: Seeker_Skill_SetsOrderByWithAggregationInput | Seeker_Skill_SetsOrderByWithAggregationInput[]
    by: Seeker_Skill_SetsScalarFieldEnum[] | Seeker_Skill_SetsScalarFieldEnum
    having?: Seeker_Skill_SetsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Seeker_Skill_SetsCountAggregateInputType | true
    _avg?: Seeker_Skill_SetsAvgAggregateInputType
    _sum?: Seeker_Skill_SetsSumAggregateInputType
    _min?: Seeker_Skill_SetsMinAggregateInputType
    _max?: Seeker_Skill_SetsMaxAggregateInputType
  }

  export type Seeker_Skill_SetsGroupByOutputType = {
    id: number
    skillSetId: number
    userAccount: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: Seeker_Skill_SetsCountAggregateOutputType | null
    _avg: Seeker_Skill_SetsAvgAggregateOutputType | null
    _sum: Seeker_Skill_SetsSumAggregateOutputType | null
    _min: Seeker_Skill_SetsMinAggregateOutputType | null
    _max: Seeker_Skill_SetsMaxAggregateOutputType | null
  }

  type GetSeeker_Skill_SetsGroupByPayload<T extends Seeker_Skill_SetsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Seeker_Skill_SetsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Seeker_Skill_SetsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Seeker_Skill_SetsGroupByOutputType[P]>
            : GetScalarType<T[P], Seeker_Skill_SetsGroupByOutputType[P]>
        }
      >
    >


  export type Seeker_Skill_SetsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skillSetId?: boolean
    userAccount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    skill?: boolean | SkillSetDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seeker_Skill_Sets"]>


  export type Seeker_Skill_SetsSelectScalar = {
    id?: boolean
    skillSetId?: boolean
    userAccount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type Seeker_Skill_SetsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill?: boolean | SkillSetDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $Seeker_Skill_SetsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Seeker_Skill_Sets"
    objects: {
      skill: Prisma.$SkillSetPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      skillSetId: number
      userAccount: number
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["seeker_Skill_Sets"]>
    composites: {}
  }

  type Seeker_Skill_SetsGetPayload<S extends boolean | null | undefined | Seeker_Skill_SetsDefaultArgs> = $Result.GetResult<Prisma.$Seeker_Skill_SetsPayload, S>

  type Seeker_Skill_SetsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Seeker_Skill_SetsFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: Seeker_Skill_SetsCountAggregateInputType | true
    }

  export interface Seeker_Skill_SetsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Seeker_Skill_Sets'], meta: { name: 'Seeker_Skill_Sets' } }
    /**
     * Find zero or one Seeker_Skill_Sets that matches the filter.
     * @param {Seeker_Skill_SetsFindUniqueArgs} args - Arguments to find a Seeker_Skill_Sets
     * @example
     * // Get one Seeker_Skill_Sets
     * const seeker_Skill_Sets = await prisma.seeker_Skill_Sets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Seeker_Skill_SetsFindUniqueArgs>(args: SelectSubset<T, Seeker_Skill_SetsFindUniqueArgs<ExtArgs>>): Prisma__Seeker_Skill_SetsClient<$Result.GetResult<Prisma.$Seeker_Skill_SetsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Seeker_Skill_Sets that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Seeker_Skill_SetsFindUniqueOrThrowArgs} args - Arguments to find a Seeker_Skill_Sets
     * @example
     * // Get one Seeker_Skill_Sets
     * const seeker_Skill_Sets = await prisma.seeker_Skill_Sets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Seeker_Skill_SetsFindUniqueOrThrowArgs>(args: SelectSubset<T, Seeker_Skill_SetsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Seeker_Skill_SetsClient<$Result.GetResult<Prisma.$Seeker_Skill_SetsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Seeker_Skill_Sets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Seeker_Skill_SetsFindFirstArgs} args - Arguments to find a Seeker_Skill_Sets
     * @example
     * // Get one Seeker_Skill_Sets
     * const seeker_Skill_Sets = await prisma.seeker_Skill_Sets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Seeker_Skill_SetsFindFirstArgs>(args?: SelectSubset<T, Seeker_Skill_SetsFindFirstArgs<ExtArgs>>): Prisma__Seeker_Skill_SetsClient<$Result.GetResult<Prisma.$Seeker_Skill_SetsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Seeker_Skill_Sets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Seeker_Skill_SetsFindFirstOrThrowArgs} args - Arguments to find a Seeker_Skill_Sets
     * @example
     * // Get one Seeker_Skill_Sets
     * const seeker_Skill_Sets = await prisma.seeker_Skill_Sets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Seeker_Skill_SetsFindFirstOrThrowArgs>(args?: SelectSubset<T, Seeker_Skill_SetsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Seeker_Skill_SetsClient<$Result.GetResult<Prisma.$Seeker_Skill_SetsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Seeker_Skill_Sets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Seeker_Skill_SetsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seeker_Skill_Sets
     * const seeker_Skill_Sets = await prisma.seeker_Skill_Sets.findMany()
     * 
     * // Get first 10 Seeker_Skill_Sets
     * const seeker_Skill_Sets = await prisma.seeker_Skill_Sets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seeker_Skill_SetsWithIdOnly = await prisma.seeker_Skill_Sets.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Seeker_Skill_SetsFindManyArgs>(args?: SelectSubset<T, Seeker_Skill_SetsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Seeker_Skill_SetsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Seeker_Skill_Sets.
     * @param {Seeker_Skill_SetsCreateArgs} args - Arguments to create a Seeker_Skill_Sets.
     * @example
     * // Create one Seeker_Skill_Sets
     * const Seeker_Skill_Sets = await prisma.seeker_Skill_Sets.create({
     *   data: {
     *     // ... data to create a Seeker_Skill_Sets
     *   }
     * })
     * 
     */
    create<T extends Seeker_Skill_SetsCreateArgs>(args: SelectSubset<T, Seeker_Skill_SetsCreateArgs<ExtArgs>>): Prisma__Seeker_Skill_SetsClient<$Result.GetResult<Prisma.$Seeker_Skill_SetsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Seeker_Skill_Sets.
     * @param {Seeker_Skill_SetsCreateManyArgs} args - Arguments to create many Seeker_Skill_Sets.
     * @example
     * // Create many Seeker_Skill_Sets
     * const seeker_Skill_Sets = await prisma.seeker_Skill_Sets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Seeker_Skill_SetsCreateManyArgs>(args?: SelectSubset<T, Seeker_Skill_SetsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Seeker_Skill_Sets.
     * @param {Seeker_Skill_SetsDeleteArgs} args - Arguments to delete one Seeker_Skill_Sets.
     * @example
     * // Delete one Seeker_Skill_Sets
     * const Seeker_Skill_Sets = await prisma.seeker_Skill_Sets.delete({
     *   where: {
     *     // ... filter to delete one Seeker_Skill_Sets
     *   }
     * })
     * 
     */
    delete<T extends Seeker_Skill_SetsDeleteArgs>(args: SelectSubset<T, Seeker_Skill_SetsDeleteArgs<ExtArgs>>): Prisma__Seeker_Skill_SetsClient<$Result.GetResult<Prisma.$Seeker_Skill_SetsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Seeker_Skill_Sets.
     * @param {Seeker_Skill_SetsUpdateArgs} args - Arguments to update one Seeker_Skill_Sets.
     * @example
     * // Update one Seeker_Skill_Sets
     * const seeker_Skill_Sets = await prisma.seeker_Skill_Sets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Seeker_Skill_SetsUpdateArgs>(args: SelectSubset<T, Seeker_Skill_SetsUpdateArgs<ExtArgs>>): Prisma__Seeker_Skill_SetsClient<$Result.GetResult<Prisma.$Seeker_Skill_SetsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Seeker_Skill_Sets.
     * @param {Seeker_Skill_SetsDeleteManyArgs} args - Arguments to filter Seeker_Skill_Sets to delete.
     * @example
     * // Delete a few Seeker_Skill_Sets
     * const { count } = await prisma.seeker_Skill_Sets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Seeker_Skill_SetsDeleteManyArgs>(args?: SelectSubset<T, Seeker_Skill_SetsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seeker_Skill_Sets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Seeker_Skill_SetsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seeker_Skill_Sets
     * const seeker_Skill_Sets = await prisma.seeker_Skill_Sets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Seeker_Skill_SetsUpdateManyArgs>(args: SelectSubset<T, Seeker_Skill_SetsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Seeker_Skill_Sets.
     * @param {Seeker_Skill_SetsUpsertArgs} args - Arguments to update or create a Seeker_Skill_Sets.
     * @example
     * // Update or create a Seeker_Skill_Sets
     * const seeker_Skill_Sets = await prisma.seeker_Skill_Sets.upsert({
     *   create: {
     *     // ... data to create a Seeker_Skill_Sets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seeker_Skill_Sets we want to update
     *   }
     * })
     */
    upsert<T extends Seeker_Skill_SetsUpsertArgs>(args: SelectSubset<T, Seeker_Skill_SetsUpsertArgs<ExtArgs>>): Prisma__Seeker_Skill_SetsClient<$Result.GetResult<Prisma.$Seeker_Skill_SetsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Seeker_Skill_Sets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Seeker_Skill_SetsCountArgs} args - Arguments to filter Seeker_Skill_Sets to count.
     * @example
     * // Count the number of Seeker_Skill_Sets
     * const count = await prisma.seeker_Skill_Sets.count({
     *   where: {
     *     // ... the filter for the Seeker_Skill_Sets we want to count
     *   }
     * })
    **/
    count<T extends Seeker_Skill_SetsCountArgs>(
      args?: Subset<T, Seeker_Skill_SetsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Seeker_Skill_SetsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seeker_Skill_Sets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Seeker_Skill_SetsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Seeker_Skill_SetsAggregateArgs>(args: Subset<T, Seeker_Skill_SetsAggregateArgs>): Prisma.PrismaPromise<GetSeeker_Skill_SetsAggregateType<T>>

    /**
     * Group by Seeker_Skill_Sets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Seeker_Skill_SetsGroupByArgs} args - Group by arguments.
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
      T extends Seeker_Skill_SetsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Seeker_Skill_SetsGroupByArgs['orderBy'] }
        : { orderBy?: Seeker_Skill_SetsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Seeker_Skill_SetsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeeker_Skill_SetsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Seeker_Skill_Sets model
   */
  readonly fields: Seeker_Skill_SetsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Seeker_Skill_Sets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Seeker_Skill_SetsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skill<T extends SkillSetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillSetDefaultArgs<ExtArgs>>): Prisma__SkillSetClient<$Result.GetResult<Prisma.$SkillSetPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Seeker_Skill_Sets model
   */ 
  interface Seeker_Skill_SetsFieldRefs {
    readonly id: FieldRef<"Seeker_Skill_Sets", 'Int'>
    readonly skillSetId: FieldRef<"Seeker_Skill_Sets", 'Int'>
    readonly userAccount: FieldRef<"Seeker_Skill_Sets", 'Int'>
    readonly createdAt: FieldRef<"Seeker_Skill_Sets", 'DateTime'>
    readonly updatedAt: FieldRef<"Seeker_Skill_Sets", 'DateTime'>
    readonly deletedAt: FieldRef<"Seeker_Skill_Sets", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Seeker_Skill_Sets findUnique
   */
  export type Seeker_Skill_SetsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seeker_Skill_Sets
     */
    select?: Seeker_Skill_SetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Seeker_Skill_SetsInclude<ExtArgs> | null
    /**
     * Filter, which Seeker_Skill_Sets to fetch.
     */
    where: Seeker_Skill_SetsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Seeker_Skill_Sets findUniqueOrThrow
   */
  export type Seeker_Skill_SetsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seeker_Skill_Sets
     */
    select?: Seeker_Skill_SetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Seeker_Skill_SetsInclude<ExtArgs> | null
    /**
     * Filter, which Seeker_Skill_Sets to fetch.
     */
    where: Seeker_Skill_SetsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Seeker_Skill_Sets findFirst
   */
  export type Seeker_Skill_SetsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seeker_Skill_Sets
     */
    select?: Seeker_Skill_SetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Seeker_Skill_SetsInclude<ExtArgs> | null
    /**
     * Filter, which Seeker_Skill_Sets to fetch.
     */
    where?: Seeker_Skill_SetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seeker_Skill_Sets to fetch.
     */
    orderBy?: Seeker_Skill_SetsOrderByWithRelationInput | Seeker_Skill_SetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seeker_Skill_Sets.
     */
    cursor?: Seeker_Skill_SetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seeker_Skill_Sets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seeker_Skill_Sets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seeker_Skill_Sets.
     */
    distinct?: Seeker_Skill_SetsScalarFieldEnum | Seeker_Skill_SetsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Seeker_Skill_Sets findFirstOrThrow
   */
  export type Seeker_Skill_SetsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seeker_Skill_Sets
     */
    select?: Seeker_Skill_SetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Seeker_Skill_SetsInclude<ExtArgs> | null
    /**
     * Filter, which Seeker_Skill_Sets to fetch.
     */
    where?: Seeker_Skill_SetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seeker_Skill_Sets to fetch.
     */
    orderBy?: Seeker_Skill_SetsOrderByWithRelationInput | Seeker_Skill_SetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seeker_Skill_Sets.
     */
    cursor?: Seeker_Skill_SetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seeker_Skill_Sets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seeker_Skill_Sets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seeker_Skill_Sets.
     */
    distinct?: Seeker_Skill_SetsScalarFieldEnum | Seeker_Skill_SetsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Seeker_Skill_Sets findMany
   */
  export type Seeker_Skill_SetsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seeker_Skill_Sets
     */
    select?: Seeker_Skill_SetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Seeker_Skill_SetsInclude<ExtArgs> | null
    /**
     * Filter, which Seeker_Skill_Sets to fetch.
     */
    where?: Seeker_Skill_SetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seeker_Skill_Sets to fetch.
     */
    orderBy?: Seeker_Skill_SetsOrderByWithRelationInput | Seeker_Skill_SetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Seeker_Skill_Sets.
     */
    cursor?: Seeker_Skill_SetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seeker_Skill_Sets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seeker_Skill_Sets.
     */
    skip?: number
    distinct?: Seeker_Skill_SetsScalarFieldEnum | Seeker_Skill_SetsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Seeker_Skill_Sets create
   */
  export type Seeker_Skill_SetsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seeker_Skill_Sets
     */
    select?: Seeker_Skill_SetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Seeker_Skill_SetsInclude<ExtArgs> | null
    /**
     * The data needed to create a Seeker_Skill_Sets.
     */
    data: XOR<Seeker_Skill_SetsCreateInput, Seeker_Skill_SetsUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Seeker_Skill_Sets createMany
   */
  export type Seeker_Skill_SetsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Seeker_Skill_Sets.
     */
    data: Seeker_Skill_SetsCreateManyInput | Seeker_Skill_SetsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Seeker_Skill_Sets update
   */
  export type Seeker_Skill_SetsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seeker_Skill_Sets
     */
    select?: Seeker_Skill_SetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Seeker_Skill_SetsInclude<ExtArgs> | null
    /**
     * The data needed to update a Seeker_Skill_Sets.
     */
    data: XOR<Seeker_Skill_SetsUpdateInput, Seeker_Skill_SetsUncheckedUpdateInput>
    /**
     * Choose, which Seeker_Skill_Sets to update.
     */
    where: Seeker_Skill_SetsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Seeker_Skill_Sets updateMany
   */
  export type Seeker_Skill_SetsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Seeker_Skill_Sets.
     */
    data: XOR<Seeker_Skill_SetsUpdateManyMutationInput, Seeker_Skill_SetsUncheckedUpdateManyInput>
    /**
     * Filter which Seeker_Skill_Sets to update
     */
    where?: Seeker_Skill_SetsWhereInput
  }

  /**
   * Seeker_Skill_Sets upsert
   */
  export type Seeker_Skill_SetsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seeker_Skill_Sets
     */
    select?: Seeker_Skill_SetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Seeker_Skill_SetsInclude<ExtArgs> | null
    /**
     * The filter to search for the Seeker_Skill_Sets to update in case it exists.
     */
    where: Seeker_Skill_SetsWhereUniqueInput
    /**
     * In case the Seeker_Skill_Sets found by the `where` argument doesn't exist, create a new Seeker_Skill_Sets with this data.
     */
    create: XOR<Seeker_Skill_SetsCreateInput, Seeker_Skill_SetsUncheckedCreateInput>
    /**
     * In case the Seeker_Skill_Sets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Seeker_Skill_SetsUpdateInput, Seeker_Skill_SetsUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Seeker_Skill_Sets delete
   */
  export type Seeker_Skill_SetsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seeker_Skill_Sets
     */
    select?: Seeker_Skill_SetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Seeker_Skill_SetsInclude<ExtArgs> | null
    /**
     * Filter which Seeker_Skill_Sets to delete.
     */
    where: Seeker_Skill_SetsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Seeker_Skill_Sets deleteMany
   */
  export type Seeker_Skill_SetsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seeker_Skill_Sets to delete
     */
    where?: Seeker_Skill_SetsWhereInput
  }

  /**
   * Seeker_Skill_Sets without action
   */
  export type Seeker_Skill_SetsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seeker_Skill_Sets
     */
    select?: Seeker_Skill_SetsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Seeker_Skill_SetsInclude<ExtArgs> | null
  }


  /**
   * Model Experience_Deatils
   */

  export type AggregateExperience_Deatils = {
    _count: Experience_DeatilsCountAggregateOutputType | null
    _avg: Experience_DeatilsAvgAggregateOutputType | null
    _sum: Experience_DeatilsSumAggregateOutputType | null
    _min: Experience_DeatilsMinAggregateOutputType | null
    _max: Experience_DeatilsMaxAggregateOutputType | null
  }

  export type Experience_DeatilsAvgAggregateOutputType = {
    id: number | null
    userAccount: number | null
  }

  export type Experience_DeatilsSumAggregateOutputType = {
    id: number | null
    userAccount: number | null
  }

  export type Experience_DeatilsMinAggregateOutputType = {
    id: number | null
    userAccount: number | null
    isCurrentJob: boolean | null
    startDate: Date | null
    endDate: Date | null
    companyName: string | null
    jobTitle: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type Experience_DeatilsMaxAggregateOutputType = {
    id: number | null
    userAccount: number | null
    isCurrentJob: boolean | null
    startDate: Date | null
    endDate: Date | null
    companyName: string | null
    jobTitle: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type Experience_DeatilsCountAggregateOutputType = {
    id: number
    userAccount: number
    isCurrentJob: number
    startDate: number
    endDate: number
    companyName: number
    jobTitle: number
    description: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type Experience_DeatilsAvgAggregateInputType = {
    id?: true
    userAccount?: true
  }

  export type Experience_DeatilsSumAggregateInputType = {
    id?: true
    userAccount?: true
  }

  export type Experience_DeatilsMinAggregateInputType = {
    id?: true
    userAccount?: true
    isCurrentJob?: true
    startDate?: true
    endDate?: true
    companyName?: true
    jobTitle?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type Experience_DeatilsMaxAggregateInputType = {
    id?: true
    userAccount?: true
    isCurrentJob?: true
    startDate?: true
    endDate?: true
    companyName?: true
    jobTitle?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type Experience_DeatilsCountAggregateInputType = {
    id?: true
    userAccount?: true
    isCurrentJob?: true
    startDate?: true
    endDate?: true
    companyName?: true
    jobTitle?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type Experience_DeatilsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experience_Deatils to aggregate.
     */
    where?: Experience_DeatilsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experience_Deatils to fetch.
     */
    orderBy?: Experience_DeatilsOrderByWithRelationInput | Experience_DeatilsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Experience_DeatilsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experience_Deatils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experience_Deatils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Experience_Deatils
    **/
    _count?: true | Experience_DeatilsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Experience_DeatilsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Experience_DeatilsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Experience_DeatilsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Experience_DeatilsMaxAggregateInputType
  }

  export type GetExperience_DeatilsAggregateType<T extends Experience_DeatilsAggregateArgs> = {
        [P in keyof T & keyof AggregateExperience_Deatils]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperience_Deatils[P]>
      : GetScalarType<T[P], AggregateExperience_Deatils[P]>
  }




  export type Experience_DeatilsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Experience_DeatilsWhereInput
    orderBy?: Experience_DeatilsOrderByWithAggregationInput | Experience_DeatilsOrderByWithAggregationInput[]
    by: Experience_DeatilsScalarFieldEnum[] | Experience_DeatilsScalarFieldEnum
    having?: Experience_DeatilsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Experience_DeatilsCountAggregateInputType | true
    _avg?: Experience_DeatilsAvgAggregateInputType
    _sum?: Experience_DeatilsSumAggregateInputType
    _min?: Experience_DeatilsMinAggregateInputType
    _max?: Experience_DeatilsMaxAggregateInputType
  }

  export type Experience_DeatilsGroupByOutputType = {
    id: number
    userAccount: number
    isCurrentJob: boolean
    startDate: Date
    endDate: Date | null
    companyName: string
    jobTitle: string
    description: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: Experience_DeatilsCountAggregateOutputType | null
    _avg: Experience_DeatilsAvgAggregateOutputType | null
    _sum: Experience_DeatilsSumAggregateOutputType | null
    _min: Experience_DeatilsMinAggregateOutputType | null
    _max: Experience_DeatilsMaxAggregateOutputType | null
  }

  type GetExperience_DeatilsGroupByPayload<T extends Experience_DeatilsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Experience_DeatilsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Experience_DeatilsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Experience_DeatilsGroupByOutputType[P]>
            : GetScalarType<T[P], Experience_DeatilsGroupByOutputType[P]>
        }
      >
    >


  export type Experience_DeatilsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userAccount?: boolean
    isCurrentJob?: boolean
    startDate?: boolean
    endDate?: boolean
    companyName?: boolean
    jobTitle?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience_Deatils"]>


  export type Experience_DeatilsSelectScalar = {
    id?: boolean
    userAccount?: boolean
    isCurrentJob?: boolean
    startDate?: boolean
    endDate?: boolean
    companyName?: boolean
    jobTitle?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type Experience_DeatilsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $Experience_DeatilsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Experience_Deatils"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userAccount: number
      isCurrentJob: boolean
      startDate: Date
      endDate: Date | null
      companyName: string
      jobTitle: string
      description: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["experience_Deatils"]>
    composites: {}
  }

  type Experience_DeatilsGetPayload<S extends boolean | null | undefined | Experience_DeatilsDefaultArgs> = $Result.GetResult<Prisma.$Experience_DeatilsPayload, S>

  type Experience_DeatilsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Experience_DeatilsFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: Experience_DeatilsCountAggregateInputType | true
    }

  export interface Experience_DeatilsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Experience_Deatils'], meta: { name: 'Experience_Deatils' } }
    /**
     * Find zero or one Experience_Deatils that matches the filter.
     * @param {Experience_DeatilsFindUniqueArgs} args - Arguments to find a Experience_Deatils
     * @example
     * // Get one Experience_Deatils
     * const experience_Deatils = await prisma.experience_Deatils.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Experience_DeatilsFindUniqueArgs>(args: SelectSubset<T, Experience_DeatilsFindUniqueArgs<ExtArgs>>): Prisma__Experience_DeatilsClient<$Result.GetResult<Prisma.$Experience_DeatilsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Experience_Deatils that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Experience_DeatilsFindUniqueOrThrowArgs} args - Arguments to find a Experience_Deatils
     * @example
     * // Get one Experience_Deatils
     * const experience_Deatils = await prisma.experience_Deatils.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Experience_DeatilsFindUniqueOrThrowArgs>(args: SelectSubset<T, Experience_DeatilsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Experience_DeatilsClient<$Result.GetResult<Prisma.$Experience_DeatilsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Experience_Deatils that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Experience_DeatilsFindFirstArgs} args - Arguments to find a Experience_Deatils
     * @example
     * // Get one Experience_Deatils
     * const experience_Deatils = await prisma.experience_Deatils.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Experience_DeatilsFindFirstArgs>(args?: SelectSubset<T, Experience_DeatilsFindFirstArgs<ExtArgs>>): Prisma__Experience_DeatilsClient<$Result.GetResult<Prisma.$Experience_DeatilsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Experience_Deatils that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Experience_DeatilsFindFirstOrThrowArgs} args - Arguments to find a Experience_Deatils
     * @example
     * // Get one Experience_Deatils
     * const experience_Deatils = await prisma.experience_Deatils.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Experience_DeatilsFindFirstOrThrowArgs>(args?: SelectSubset<T, Experience_DeatilsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Experience_DeatilsClient<$Result.GetResult<Prisma.$Experience_DeatilsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Experience_Deatils that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Experience_DeatilsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Experience_Deatils
     * const experience_Deatils = await prisma.experience_Deatils.findMany()
     * 
     * // Get first 10 Experience_Deatils
     * const experience_Deatils = await prisma.experience_Deatils.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const experience_DeatilsWithIdOnly = await prisma.experience_Deatils.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Experience_DeatilsFindManyArgs>(args?: SelectSubset<T, Experience_DeatilsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Experience_DeatilsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Experience_Deatils.
     * @param {Experience_DeatilsCreateArgs} args - Arguments to create a Experience_Deatils.
     * @example
     * // Create one Experience_Deatils
     * const Experience_Deatils = await prisma.experience_Deatils.create({
     *   data: {
     *     // ... data to create a Experience_Deatils
     *   }
     * })
     * 
     */
    create<T extends Experience_DeatilsCreateArgs>(args: SelectSubset<T, Experience_DeatilsCreateArgs<ExtArgs>>): Prisma__Experience_DeatilsClient<$Result.GetResult<Prisma.$Experience_DeatilsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Experience_Deatils.
     * @param {Experience_DeatilsCreateManyArgs} args - Arguments to create many Experience_Deatils.
     * @example
     * // Create many Experience_Deatils
     * const experience_Deatils = await prisma.experience_Deatils.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Experience_DeatilsCreateManyArgs>(args?: SelectSubset<T, Experience_DeatilsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Experience_Deatils.
     * @param {Experience_DeatilsDeleteArgs} args - Arguments to delete one Experience_Deatils.
     * @example
     * // Delete one Experience_Deatils
     * const Experience_Deatils = await prisma.experience_Deatils.delete({
     *   where: {
     *     // ... filter to delete one Experience_Deatils
     *   }
     * })
     * 
     */
    delete<T extends Experience_DeatilsDeleteArgs>(args: SelectSubset<T, Experience_DeatilsDeleteArgs<ExtArgs>>): Prisma__Experience_DeatilsClient<$Result.GetResult<Prisma.$Experience_DeatilsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Experience_Deatils.
     * @param {Experience_DeatilsUpdateArgs} args - Arguments to update one Experience_Deatils.
     * @example
     * // Update one Experience_Deatils
     * const experience_Deatils = await prisma.experience_Deatils.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Experience_DeatilsUpdateArgs>(args: SelectSubset<T, Experience_DeatilsUpdateArgs<ExtArgs>>): Prisma__Experience_DeatilsClient<$Result.GetResult<Prisma.$Experience_DeatilsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Experience_Deatils.
     * @param {Experience_DeatilsDeleteManyArgs} args - Arguments to filter Experience_Deatils to delete.
     * @example
     * // Delete a few Experience_Deatils
     * const { count } = await prisma.experience_Deatils.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Experience_DeatilsDeleteManyArgs>(args?: SelectSubset<T, Experience_DeatilsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experience_Deatils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Experience_DeatilsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Experience_Deatils
     * const experience_Deatils = await prisma.experience_Deatils.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Experience_DeatilsUpdateManyArgs>(args: SelectSubset<T, Experience_DeatilsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Experience_Deatils.
     * @param {Experience_DeatilsUpsertArgs} args - Arguments to update or create a Experience_Deatils.
     * @example
     * // Update or create a Experience_Deatils
     * const experience_Deatils = await prisma.experience_Deatils.upsert({
     *   create: {
     *     // ... data to create a Experience_Deatils
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Experience_Deatils we want to update
     *   }
     * })
     */
    upsert<T extends Experience_DeatilsUpsertArgs>(args: SelectSubset<T, Experience_DeatilsUpsertArgs<ExtArgs>>): Prisma__Experience_DeatilsClient<$Result.GetResult<Prisma.$Experience_DeatilsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Experience_Deatils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Experience_DeatilsCountArgs} args - Arguments to filter Experience_Deatils to count.
     * @example
     * // Count the number of Experience_Deatils
     * const count = await prisma.experience_Deatils.count({
     *   where: {
     *     // ... the filter for the Experience_Deatils we want to count
     *   }
     * })
    **/
    count<T extends Experience_DeatilsCountArgs>(
      args?: Subset<T, Experience_DeatilsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Experience_DeatilsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Experience_Deatils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Experience_DeatilsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Experience_DeatilsAggregateArgs>(args: Subset<T, Experience_DeatilsAggregateArgs>): Prisma.PrismaPromise<GetExperience_DeatilsAggregateType<T>>

    /**
     * Group by Experience_Deatils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Experience_DeatilsGroupByArgs} args - Group by arguments.
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
      T extends Experience_DeatilsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Experience_DeatilsGroupByArgs['orderBy'] }
        : { orderBy?: Experience_DeatilsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Experience_DeatilsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperience_DeatilsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Experience_Deatils model
   */
  readonly fields: Experience_DeatilsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Experience_Deatils.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Experience_DeatilsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Experience_Deatils model
   */ 
  interface Experience_DeatilsFieldRefs {
    readonly id: FieldRef<"Experience_Deatils", 'Int'>
    readonly userAccount: FieldRef<"Experience_Deatils", 'Int'>
    readonly isCurrentJob: FieldRef<"Experience_Deatils", 'Boolean'>
    readonly startDate: FieldRef<"Experience_Deatils", 'DateTime'>
    readonly endDate: FieldRef<"Experience_Deatils", 'DateTime'>
    readonly companyName: FieldRef<"Experience_Deatils", 'String'>
    readonly jobTitle: FieldRef<"Experience_Deatils", 'String'>
    readonly description: FieldRef<"Experience_Deatils", 'String'>
    readonly createdAt: FieldRef<"Experience_Deatils", 'DateTime'>
    readonly updatedAt: FieldRef<"Experience_Deatils", 'DateTime'>
    readonly deletedAt: FieldRef<"Experience_Deatils", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Experience_Deatils findUnique
   */
  export type Experience_DeatilsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience_Deatils
     */
    select?: Experience_DeatilsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Experience_DeatilsInclude<ExtArgs> | null
    /**
     * Filter, which Experience_Deatils to fetch.
     */
    where: Experience_DeatilsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Experience_Deatils findUniqueOrThrow
   */
  export type Experience_DeatilsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience_Deatils
     */
    select?: Experience_DeatilsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Experience_DeatilsInclude<ExtArgs> | null
    /**
     * Filter, which Experience_Deatils to fetch.
     */
    where: Experience_DeatilsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Experience_Deatils findFirst
   */
  export type Experience_DeatilsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience_Deatils
     */
    select?: Experience_DeatilsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Experience_DeatilsInclude<ExtArgs> | null
    /**
     * Filter, which Experience_Deatils to fetch.
     */
    where?: Experience_DeatilsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experience_Deatils to fetch.
     */
    orderBy?: Experience_DeatilsOrderByWithRelationInput | Experience_DeatilsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experience_Deatils.
     */
    cursor?: Experience_DeatilsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experience_Deatils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experience_Deatils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experience_Deatils.
     */
    distinct?: Experience_DeatilsScalarFieldEnum | Experience_DeatilsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Experience_Deatils findFirstOrThrow
   */
  export type Experience_DeatilsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience_Deatils
     */
    select?: Experience_DeatilsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Experience_DeatilsInclude<ExtArgs> | null
    /**
     * Filter, which Experience_Deatils to fetch.
     */
    where?: Experience_DeatilsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experience_Deatils to fetch.
     */
    orderBy?: Experience_DeatilsOrderByWithRelationInput | Experience_DeatilsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experience_Deatils.
     */
    cursor?: Experience_DeatilsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experience_Deatils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experience_Deatils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experience_Deatils.
     */
    distinct?: Experience_DeatilsScalarFieldEnum | Experience_DeatilsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Experience_Deatils findMany
   */
  export type Experience_DeatilsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience_Deatils
     */
    select?: Experience_DeatilsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Experience_DeatilsInclude<ExtArgs> | null
    /**
     * Filter, which Experience_Deatils to fetch.
     */
    where?: Experience_DeatilsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experience_Deatils to fetch.
     */
    orderBy?: Experience_DeatilsOrderByWithRelationInput | Experience_DeatilsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Experience_Deatils.
     */
    cursor?: Experience_DeatilsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experience_Deatils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experience_Deatils.
     */
    skip?: number
    distinct?: Experience_DeatilsScalarFieldEnum | Experience_DeatilsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Experience_Deatils create
   */
  export type Experience_DeatilsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience_Deatils
     */
    select?: Experience_DeatilsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Experience_DeatilsInclude<ExtArgs> | null
    /**
     * The data needed to create a Experience_Deatils.
     */
    data: XOR<Experience_DeatilsCreateInput, Experience_DeatilsUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Experience_Deatils createMany
   */
  export type Experience_DeatilsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Experience_Deatils.
     */
    data: Experience_DeatilsCreateManyInput | Experience_DeatilsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Experience_Deatils update
   */
  export type Experience_DeatilsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience_Deatils
     */
    select?: Experience_DeatilsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Experience_DeatilsInclude<ExtArgs> | null
    /**
     * The data needed to update a Experience_Deatils.
     */
    data: XOR<Experience_DeatilsUpdateInput, Experience_DeatilsUncheckedUpdateInput>
    /**
     * Choose, which Experience_Deatils to update.
     */
    where: Experience_DeatilsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Experience_Deatils updateMany
   */
  export type Experience_DeatilsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Experience_Deatils.
     */
    data: XOR<Experience_DeatilsUpdateManyMutationInput, Experience_DeatilsUncheckedUpdateManyInput>
    /**
     * Filter which Experience_Deatils to update
     */
    where?: Experience_DeatilsWhereInput
  }

  /**
   * Experience_Deatils upsert
   */
  export type Experience_DeatilsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience_Deatils
     */
    select?: Experience_DeatilsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Experience_DeatilsInclude<ExtArgs> | null
    /**
     * The filter to search for the Experience_Deatils to update in case it exists.
     */
    where: Experience_DeatilsWhereUniqueInput
    /**
     * In case the Experience_Deatils found by the `where` argument doesn't exist, create a new Experience_Deatils with this data.
     */
    create: XOR<Experience_DeatilsCreateInput, Experience_DeatilsUncheckedCreateInput>
    /**
     * In case the Experience_Deatils was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Experience_DeatilsUpdateInput, Experience_DeatilsUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Experience_Deatils delete
   */
  export type Experience_DeatilsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience_Deatils
     */
    select?: Experience_DeatilsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Experience_DeatilsInclude<ExtArgs> | null
    /**
     * Filter which Experience_Deatils to delete.
     */
    where: Experience_DeatilsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Experience_Deatils deleteMany
   */
  export type Experience_DeatilsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experience_Deatils to delete
     */
    where?: Experience_DeatilsWhereInput
  }

  /**
   * Experience_Deatils without action
   */
  export type Experience_DeatilsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience_Deatils
     */
    select?: Experience_DeatilsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Experience_DeatilsInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    gender: 'gender',
    contactNumber: 'contactNumber',
    smsNotificationActive: 'smsNotificationActive',
    emailNotificationActive: 'emailNotificationActive',
    userImage: 'userImage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RelationLoadStrategy: {
    query: 'query',
    join: 'join'
  };

  export type RelationLoadStrategy = (typeof RelationLoadStrategy)[keyof typeof RelationLoadStrategy]


  export const UserLogScalarFieldEnum: {
    id: 'id',
    lastLoginDate: 'lastLoginDate',
    lastJobApplyDate: 'lastJobApplyDate',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserLogScalarFieldEnum = (typeof UserLogScalarFieldEnum)[keyof typeof UserLogScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    lineOne: 'lineOne',
    lineTwo: 'lineTwo',
    city: 'city',
    country: 'country',
    pincode: 'pincode',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    tags: 'tags',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const Buissness_StreamScalarFieldEnum: {
    id: 'id',
    buisnessStreamName: 'buisnessStreamName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type Buissness_StreamScalarFieldEnum = (typeof Buissness_StreamScalarFieldEnum)[keyof typeof Buissness_StreamScalarFieldEnum]


  export const Company_ProfileScalarFieldEnum: {
    id: 'id',
    companyName: 'companyName',
    profileDescription: 'profileDescription',
    buisnessStreamID: 'buisnessStreamID',
    companyWebsitUrl: 'companyWebsitUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type Company_ProfileScalarFieldEnum = (typeof Company_ProfileScalarFieldEnum)[keyof typeof Company_ProfileScalarFieldEnum]


  export const Education_DetailScalarFieldEnum: {
    id: 'id',
    certificateDegreeName: 'certificateDegreeName',
    IntitutionName: 'IntitutionName',
    startingDate: 'startingDate',
    completionDate: 'completionDate',
    percentage: 'percentage',
    cgpa: 'cgpa',
    userAccount: 'userAccount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type Education_DetailScalarFieldEnum = (typeof Education_DetailScalarFieldEnum)[keyof typeof Education_DetailScalarFieldEnum]


  export const Seeker_ProfileScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    currentSalary: 'currentSalary',
    isAnnullyMonthly: 'isAnnullyMonthly',
    userAccount: 'userAccount',
    currency: 'currency',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type Seeker_ProfileScalarFieldEnum = (typeof Seeker_ProfileScalarFieldEnum)[keyof typeof Seeker_ProfileScalarFieldEnum]


  export const SkillSetScalarFieldEnum: {
    id: 'id',
    skillSetName: 'skillSetName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type SkillSetScalarFieldEnum = (typeof SkillSetScalarFieldEnum)[keyof typeof SkillSetScalarFieldEnum]


  export const Seeker_Skill_SetsScalarFieldEnum: {
    id: 'id',
    skillSetId: 'skillSetId',
    userAccount: 'userAccount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type Seeker_Skill_SetsScalarFieldEnum = (typeof Seeker_Skill_SetsScalarFieldEnum)[keyof typeof Seeker_Skill_SetsScalarFieldEnum]


  export const Experience_DeatilsScalarFieldEnum: {
    id: 'id',
    userAccount: 'userAccount',
    isCurrentJob: 'isCurrentJob',
    startDate: 'startDate',
    endDate: 'endDate',
    companyName: 'companyName',
    jobTitle: 'jobTitle',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type Experience_DeatilsScalarFieldEnum = (typeof Experience_DeatilsScalarFieldEnum)[keyof typeof Experience_DeatilsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    gender?: EnumGenderFilter<"User"> | $Enums.Gender
    contactNumber?: BigIntNullableFilter<"User"> | bigint | number | null
    smsNotificationActive?: BoolFilter<"User"> | boolean
    emailNotificationActive?: BoolFilter<"User"> | boolean
    userImage?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    addresses?: XOR<AddressNullableRelationFilter, AddressWhereInput> | null
    userlogs?: UserLogListRelationFilter
    educationdeatil?: Education_DetailListRelationFilter
    seekerProfile?: XOR<Seeker_ProfileNullableRelationFilter, seeker_ProfileWhereInput> | null
    seekerSkill?: Seeker_Skill_SetsListRelationFilter
    experienceDetails?: Experience_DeatilsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    gender?: SortOrder
    contactNumber?: SortOrderInput | SortOrder
    smsNotificationActive?: SortOrder
    emailNotificationActive?: SortOrder
    userImage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    addresses?: AddressOrderByWithRelationInput
    userlogs?: UserLogOrderByRelationAggregateInput
    educationdeatil?: education_DetailOrderByRelationAggregateInput
    seekerProfile?: seeker_ProfileOrderByWithRelationInput
    seekerSkill?: Seeker_Skill_SetsOrderByRelationAggregateInput
    experienceDetails?: Experience_DeatilsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    gender?: EnumGenderFilter<"User"> | $Enums.Gender
    contactNumber?: BigIntNullableFilter<"User"> | bigint | number | null
    smsNotificationActive?: BoolFilter<"User"> | boolean
    emailNotificationActive?: BoolFilter<"User"> | boolean
    userImage?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    addresses?: XOR<AddressNullableRelationFilter, AddressWhereInput> | null
    userlogs?: UserLogListRelationFilter
    educationdeatil?: Education_DetailListRelationFilter
    seekerProfile?: XOR<Seeker_ProfileNullableRelationFilter, seeker_ProfileWhereInput> | null
    seekerSkill?: Seeker_Skill_SetsListRelationFilter
    experienceDetails?: Experience_DeatilsListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    gender?: SortOrder
    contactNumber?: SortOrderInput | SortOrder
    smsNotificationActive?: SortOrder
    emailNotificationActive?: SortOrder
    userImage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    gender?: EnumGenderWithAggregatesFilter<"User"> | $Enums.Gender
    contactNumber?: BigIntNullableWithAggregatesFilter<"User"> | bigint | number | null
    smsNotificationActive?: BoolWithAggregatesFilter<"User"> | boolean
    emailNotificationActive?: BoolWithAggregatesFilter<"User"> | boolean
    userImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type UserLogWhereInput = {
    AND?: UserLogWhereInput | UserLogWhereInput[]
    OR?: UserLogWhereInput[]
    NOT?: UserLogWhereInput | UserLogWhereInput[]
    id?: IntFilter<"UserLog"> | number
    lastLoginDate?: DateTimeFilter<"UserLog"> | Date | string
    lastJobApplyDate?: DateTimeFilter<"UserLog"> | Date | string
    userId?: IntFilter<"UserLog"> | number
    createdAt?: DateTimeFilter<"UserLog"> | Date | string
    updatedAt?: DateTimeFilter<"UserLog"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserLogOrderByWithRelationInput = {
    id?: SortOrder
    lastLoginDate?: SortOrder
    lastJobApplyDate?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserLogWhereInput | UserLogWhereInput[]
    OR?: UserLogWhereInput[]
    NOT?: UserLogWhereInput | UserLogWhereInput[]
    lastLoginDate?: DateTimeFilter<"UserLog"> | Date | string
    lastJobApplyDate?: DateTimeFilter<"UserLog"> | Date | string
    userId?: IntFilter<"UserLog"> | number
    createdAt?: DateTimeFilter<"UserLog"> | Date | string
    updatedAt?: DateTimeFilter<"UserLog"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type UserLogOrderByWithAggregationInput = {
    id?: SortOrder
    lastLoginDate?: SortOrder
    lastJobApplyDate?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserLogCountOrderByAggregateInput
    _avg?: UserLogAvgOrderByAggregateInput
    _max?: UserLogMaxOrderByAggregateInput
    _min?: UserLogMinOrderByAggregateInput
    _sum?: UserLogSumOrderByAggregateInput
  }

  export type UserLogScalarWhereWithAggregatesInput = {
    AND?: UserLogScalarWhereWithAggregatesInput | UserLogScalarWhereWithAggregatesInput[]
    OR?: UserLogScalarWhereWithAggregatesInput[]
    NOT?: UserLogScalarWhereWithAggregatesInput | UserLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserLog"> | number
    lastLoginDate?: DateTimeWithAggregatesFilter<"UserLog"> | Date | string
    lastJobApplyDate?: DateTimeWithAggregatesFilter<"UserLog"> | Date | string
    userId?: IntWithAggregatesFilter<"UserLog"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserLog"> | Date | string
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: IntFilter<"Address"> | number
    lineOne?: StringFilter<"Address"> | string
    lineTwo?: StringNullableFilter<"Address"> | string | null
    city?: StringFilter<"Address"> | string
    country?: StringFilter<"Address"> | string
    pincode?: StringFilter<"Address"> | string
    userId?: IntFilter<"Address"> | number
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Address"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    lineOne?: SortOrder
    lineTwo?: SortOrderInput | SortOrder
    city?: SortOrder
    country?: SortOrder
    pincode?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    lineOne?: StringFilter<"Address"> | string
    lineTwo?: StringNullableFilter<"Address"> | string | null
    city?: StringFilter<"Address"> | string
    country?: StringFilter<"Address"> | string
    pincode?: StringFilter<"Address"> | string
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Address"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    lineOne?: SortOrder
    lineTwo?: SortOrderInput | SortOrder
    city?: SortOrder
    country?: SortOrder
    pincode?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Address"> | number
    lineOne?: StringWithAggregatesFilter<"Address"> | string
    lineTwo?: StringNullableWithAggregatesFilter<"Address"> | string | null
    city?: StringWithAggregatesFilter<"Address"> | string
    country?: StringWithAggregatesFilter<"Address"> | string
    pincode?: StringWithAggregatesFilter<"Address"> | string
    userId?: IntWithAggregatesFilter<"Address"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Address"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Address"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Address"> | Date | string | null
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    tags?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    tags?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    price?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    tags?: StringWithAggregatesFilter<"Product"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
  }

  export type Buissness_StreamWhereInput = {
    AND?: Buissness_StreamWhereInput | Buissness_StreamWhereInput[]
    OR?: Buissness_StreamWhereInput[]
    NOT?: Buissness_StreamWhereInput | Buissness_StreamWhereInput[]
    id?: IntFilter<"Buissness_Stream"> | number
    buisnessStreamName?: StringFilter<"Buissness_Stream"> | string
    createdAt?: DateTimeFilter<"Buissness_Stream"> | Date | string
    updatedAt?: DateTimeFilter<"Buissness_Stream"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Buissness_Stream"> | Date | string | null
    company_profiles?: Company_ProfileListRelationFilter
  }

  export type Buissness_StreamOrderByWithRelationInput = {
    id?: SortOrder
    buisnessStreamName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    company_profiles?: Company_ProfileOrderByRelationAggregateInput
  }

  export type Buissness_StreamWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Buissness_StreamWhereInput | Buissness_StreamWhereInput[]
    OR?: Buissness_StreamWhereInput[]
    NOT?: Buissness_StreamWhereInput | Buissness_StreamWhereInput[]
    buisnessStreamName?: StringFilter<"Buissness_Stream"> | string
    createdAt?: DateTimeFilter<"Buissness_Stream"> | Date | string
    updatedAt?: DateTimeFilter<"Buissness_Stream"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Buissness_Stream"> | Date | string | null
    company_profiles?: Company_ProfileListRelationFilter
  }, "id">

  export type Buissness_StreamOrderByWithAggregationInput = {
    id?: SortOrder
    buisnessStreamName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: Buissness_StreamCountOrderByAggregateInput
    _avg?: Buissness_StreamAvgOrderByAggregateInput
    _max?: Buissness_StreamMaxOrderByAggregateInput
    _min?: Buissness_StreamMinOrderByAggregateInput
    _sum?: Buissness_StreamSumOrderByAggregateInput
  }

  export type Buissness_StreamScalarWhereWithAggregatesInput = {
    AND?: Buissness_StreamScalarWhereWithAggregatesInput | Buissness_StreamScalarWhereWithAggregatesInput[]
    OR?: Buissness_StreamScalarWhereWithAggregatesInput[]
    NOT?: Buissness_StreamScalarWhereWithAggregatesInput | Buissness_StreamScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Buissness_Stream"> | number
    buisnessStreamName?: StringWithAggregatesFilter<"Buissness_Stream"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Buissness_Stream"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Buissness_Stream"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Buissness_Stream"> | Date | string | null
  }

  export type Company_ProfileWhereInput = {
    AND?: Company_ProfileWhereInput | Company_ProfileWhereInput[]
    OR?: Company_ProfileWhereInput[]
    NOT?: Company_ProfileWhereInput | Company_ProfileWhereInput[]
    id?: IntFilter<"Company_Profile"> | number
    companyName?: StringFilter<"Company_Profile"> | string
    profileDescription?: StringFilter<"Company_Profile"> | string
    buisnessStreamID?: IntFilter<"Company_Profile"> | number
    companyWebsitUrl?: StringFilter<"Company_Profile"> | string
    createdAt?: DateTimeFilter<"Company_Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Company_Profile"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Company_Profile"> | Date | string | null
    buisnessStream?: XOR<Buissness_StreamRelationFilter, Buissness_StreamWhereInput>
  }

  export type Company_ProfileOrderByWithRelationInput = {
    id?: SortOrder
    companyName?: SortOrder
    profileDescription?: SortOrder
    buisnessStreamID?: SortOrder
    companyWebsitUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    buisnessStream?: Buissness_StreamOrderByWithRelationInput
  }

  export type Company_ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Company_ProfileWhereInput | Company_ProfileWhereInput[]
    OR?: Company_ProfileWhereInput[]
    NOT?: Company_ProfileWhereInput | Company_ProfileWhereInput[]
    companyName?: StringFilter<"Company_Profile"> | string
    profileDescription?: StringFilter<"Company_Profile"> | string
    buisnessStreamID?: IntFilter<"Company_Profile"> | number
    companyWebsitUrl?: StringFilter<"Company_Profile"> | string
    createdAt?: DateTimeFilter<"Company_Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Company_Profile"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Company_Profile"> | Date | string | null
    buisnessStream?: XOR<Buissness_StreamRelationFilter, Buissness_StreamWhereInput>
  }, "id">

  export type Company_ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    companyName?: SortOrder
    profileDescription?: SortOrder
    buisnessStreamID?: SortOrder
    companyWebsitUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: Company_ProfileCountOrderByAggregateInput
    _avg?: Company_ProfileAvgOrderByAggregateInput
    _max?: Company_ProfileMaxOrderByAggregateInput
    _min?: Company_ProfileMinOrderByAggregateInput
    _sum?: Company_ProfileSumOrderByAggregateInput
  }

  export type Company_ProfileScalarWhereWithAggregatesInput = {
    AND?: Company_ProfileScalarWhereWithAggregatesInput | Company_ProfileScalarWhereWithAggregatesInput[]
    OR?: Company_ProfileScalarWhereWithAggregatesInput[]
    NOT?: Company_ProfileScalarWhereWithAggregatesInput | Company_ProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Company_Profile"> | number
    companyName?: StringWithAggregatesFilter<"Company_Profile"> | string
    profileDescription?: StringWithAggregatesFilter<"Company_Profile"> | string
    buisnessStreamID?: IntWithAggregatesFilter<"Company_Profile"> | number
    companyWebsitUrl?: StringWithAggregatesFilter<"Company_Profile"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Company_Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Company_Profile"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Company_Profile"> | Date | string | null
  }

  export type education_DetailWhereInput = {
    AND?: education_DetailWhereInput | education_DetailWhereInput[]
    OR?: education_DetailWhereInput[]
    NOT?: education_DetailWhereInput | education_DetailWhereInput[]
    id?: IntFilter<"education_Detail"> | number
    certificateDegreeName?: StringFilter<"education_Detail"> | string
    IntitutionName?: StringFilter<"education_Detail"> | string
    startingDate?: DateTimeFilter<"education_Detail"> | Date | string
    completionDate?: DateTimeFilter<"education_Detail"> | Date | string
    percentage?: FloatFilter<"education_Detail"> | number
    cgpa?: FloatFilter<"education_Detail"> | number
    userAccount?: IntFilter<"education_Detail"> | number
    createdAt?: DateTimeFilter<"education_Detail"> | Date | string
    updatedAt?: DateTimeFilter<"education_Detail"> | Date | string
    deletedAt?: DateTimeNullableFilter<"education_Detail"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type education_DetailOrderByWithRelationInput = {
    id?: SortOrder
    certificateDegreeName?: SortOrder
    IntitutionName?: SortOrder
    startingDate?: SortOrder
    completionDate?: SortOrder
    percentage?: SortOrder
    cgpa?: SortOrder
    userAccount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type education_DetailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: education_DetailWhereInput | education_DetailWhereInput[]
    OR?: education_DetailWhereInput[]
    NOT?: education_DetailWhereInput | education_DetailWhereInput[]
    certificateDegreeName?: StringFilter<"education_Detail"> | string
    IntitutionName?: StringFilter<"education_Detail"> | string
    startingDate?: DateTimeFilter<"education_Detail"> | Date | string
    completionDate?: DateTimeFilter<"education_Detail"> | Date | string
    percentage?: FloatFilter<"education_Detail"> | number
    cgpa?: FloatFilter<"education_Detail"> | number
    userAccount?: IntFilter<"education_Detail"> | number
    createdAt?: DateTimeFilter<"education_Detail"> | Date | string
    updatedAt?: DateTimeFilter<"education_Detail"> | Date | string
    deletedAt?: DateTimeNullableFilter<"education_Detail"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type education_DetailOrderByWithAggregationInput = {
    id?: SortOrder
    certificateDegreeName?: SortOrder
    IntitutionName?: SortOrder
    startingDate?: SortOrder
    completionDate?: SortOrder
    percentage?: SortOrder
    cgpa?: SortOrder
    userAccount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: education_DetailCountOrderByAggregateInput
    _avg?: education_DetailAvgOrderByAggregateInput
    _max?: education_DetailMaxOrderByAggregateInput
    _min?: education_DetailMinOrderByAggregateInput
    _sum?: education_DetailSumOrderByAggregateInput
  }

  export type education_DetailScalarWhereWithAggregatesInput = {
    AND?: education_DetailScalarWhereWithAggregatesInput | education_DetailScalarWhereWithAggregatesInput[]
    OR?: education_DetailScalarWhereWithAggregatesInput[]
    NOT?: education_DetailScalarWhereWithAggregatesInput | education_DetailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"education_Detail"> | number
    certificateDegreeName?: StringWithAggregatesFilter<"education_Detail"> | string
    IntitutionName?: StringWithAggregatesFilter<"education_Detail"> | string
    startingDate?: DateTimeWithAggregatesFilter<"education_Detail"> | Date | string
    completionDate?: DateTimeWithAggregatesFilter<"education_Detail"> | Date | string
    percentage?: FloatWithAggregatesFilter<"education_Detail"> | number
    cgpa?: FloatWithAggregatesFilter<"education_Detail"> | number
    userAccount?: IntWithAggregatesFilter<"education_Detail"> | number
    createdAt?: DateTimeWithAggregatesFilter<"education_Detail"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"education_Detail"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"education_Detail"> | Date | string | null
  }

  export type seeker_ProfileWhereInput = {
    AND?: seeker_ProfileWhereInput | seeker_ProfileWhereInput[]
    OR?: seeker_ProfileWhereInput[]
    NOT?: seeker_ProfileWhereInput | seeker_ProfileWhereInput[]
    id?: IntFilter<"seeker_Profile"> | number
    firstName?: StringFilter<"seeker_Profile"> | string
    lastName?: StringFilter<"seeker_Profile"> | string
    currentSalary?: FloatFilter<"seeker_Profile"> | number
    isAnnullyMonthly?: BoolFilter<"seeker_Profile"> | boolean
    userAccount?: IntFilter<"seeker_Profile"> | number
    currency?: StringFilter<"seeker_Profile"> | string
    createdAt?: DateTimeFilter<"seeker_Profile"> | Date | string
    updatedAt?: DateTimeFilter<"seeker_Profile"> | Date | string
    deletedAt?: DateTimeNullableFilter<"seeker_Profile"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type seeker_ProfileOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    currentSalary?: SortOrder
    isAnnullyMonthly?: SortOrder
    userAccount?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type seeker_ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userAccount?: number
    AND?: seeker_ProfileWhereInput | seeker_ProfileWhereInput[]
    OR?: seeker_ProfileWhereInput[]
    NOT?: seeker_ProfileWhereInput | seeker_ProfileWhereInput[]
    firstName?: StringFilter<"seeker_Profile"> | string
    lastName?: StringFilter<"seeker_Profile"> | string
    currentSalary?: FloatFilter<"seeker_Profile"> | number
    isAnnullyMonthly?: BoolFilter<"seeker_Profile"> | boolean
    currency?: StringFilter<"seeker_Profile"> | string
    createdAt?: DateTimeFilter<"seeker_Profile"> | Date | string
    updatedAt?: DateTimeFilter<"seeker_Profile"> | Date | string
    deletedAt?: DateTimeNullableFilter<"seeker_Profile"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userAccount">

  export type seeker_ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    currentSalary?: SortOrder
    isAnnullyMonthly?: SortOrder
    userAccount?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: seeker_ProfileCountOrderByAggregateInput
    _avg?: seeker_ProfileAvgOrderByAggregateInput
    _max?: seeker_ProfileMaxOrderByAggregateInput
    _min?: seeker_ProfileMinOrderByAggregateInput
    _sum?: seeker_ProfileSumOrderByAggregateInput
  }

  export type seeker_ProfileScalarWhereWithAggregatesInput = {
    AND?: seeker_ProfileScalarWhereWithAggregatesInput | seeker_ProfileScalarWhereWithAggregatesInput[]
    OR?: seeker_ProfileScalarWhereWithAggregatesInput[]
    NOT?: seeker_ProfileScalarWhereWithAggregatesInput | seeker_ProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"seeker_Profile"> | number
    firstName?: StringWithAggregatesFilter<"seeker_Profile"> | string
    lastName?: StringWithAggregatesFilter<"seeker_Profile"> | string
    currentSalary?: FloatWithAggregatesFilter<"seeker_Profile"> | number
    isAnnullyMonthly?: BoolWithAggregatesFilter<"seeker_Profile"> | boolean
    userAccount?: IntWithAggregatesFilter<"seeker_Profile"> | number
    currency?: StringWithAggregatesFilter<"seeker_Profile"> | string
    createdAt?: DateTimeWithAggregatesFilter<"seeker_Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"seeker_Profile"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"seeker_Profile"> | Date | string | null
  }

  export type SkillSetWhereInput = {
    AND?: SkillSetWhereInput | SkillSetWhereInput[]
    OR?: SkillSetWhereInput[]
    NOT?: SkillSetWhereInput | SkillSetWhereInput[]
    id?: IntFilter<"SkillSet"> | number
    skillSetName?: StringFilter<"SkillSet"> | string
    createdAt?: DateTimeFilter<"SkillSet"> | Date | string
    updatedAt?: DateTimeFilter<"SkillSet"> | Date | string
    deletedAt?: DateTimeNullableFilter<"SkillSet"> | Date | string | null
    skillSet?: Seeker_Skill_SetsListRelationFilter
  }

  export type SkillSetOrderByWithRelationInput = {
    id?: SortOrder
    skillSetName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    skillSet?: Seeker_Skill_SetsOrderByRelationAggregateInput
  }

  export type SkillSetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SkillSetWhereInput | SkillSetWhereInput[]
    OR?: SkillSetWhereInput[]
    NOT?: SkillSetWhereInput | SkillSetWhereInput[]
    skillSetName?: StringFilter<"SkillSet"> | string
    createdAt?: DateTimeFilter<"SkillSet"> | Date | string
    updatedAt?: DateTimeFilter<"SkillSet"> | Date | string
    deletedAt?: DateTimeNullableFilter<"SkillSet"> | Date | string | null
    skillSet?: Seeker_Skill_SetsListRelationFilter
  }, "id">

  export type SkillSetOrderByWithAggregationInput = {
    id?: SortOrder
    skillSetName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: SkillSetCountOrderByAggregateInput
    _avg?: SkillSetAvgOrderByAggregateInput
    _max?: SkillSetMaxOrderByAggregateInput
    _min?: SkillSetMinOrderByAggregateInput
    _sum?: SkillSetSumOrderByAggregateInput
  }

  export type SkillSetScalarWhereWithAggregatesInput = {
    AND?: SkillSetScalarWhereWithAggregatesInput | SkillSetScalarWhereWithAggregatesInput[]
    OR?: SkillSetScalarWhereWithAggregatesInput[]
    NOT?: SkillSetScalarWhereWithAggregatesInput | SkillSetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SkillSet"> | number
    skillSetName?: StringWithAggregatesFilter<"SkillSet"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SkillSet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SkillSet"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"SkillSet"> | Date | string | null
  }

  export type Seeker_Skill_SetsWhereInput = {
    AND?: Seeker_Skill_SetsWhereInput | Seeker_Skill_SetsWhereInput[]
    OR?: Seeker_Skill_SetsWhereInput[]
    NOT?: Seeker_Skill_SetsWhereInput | Seeker_Skill_SetsWhereInput[]
    id?: IntFilter<"Seeker_Skill_Sets"> | number
    skillSetId?: IntFilter<"Seeker_Skill_Sets"> | number
    userAccount?: IntFilter<"Seeker_Skill_Sets"> | number
    createdAt?: DateTimeFilter<"Seeker_Skill_Sets"> | Date | string
    updatedAt?: DateTimeFilter<"Seeker_Skill_Sets"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Seeker_Skill_Sets"> | Date | string | null
    skill?: XOR<SkillSetRelationFilter, SkillSetWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type Seeker_Skill_SetsOrderByWithRelationInput = {
    id?: SortOrder
    skillSetId?: SortOrder
    userAccount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    skill?: SkillSetOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type Seeker_Skill_SetsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Seeker_Skill_SetsWhereInput | Seeker_Skill_SetsWhereInput[]
    OR?: Seeker_Skill_SetsWhereInput[]
    NOT?: Seeker_Skill_SetsWhereInput | Seeker_Skill_SetsWhereInput[]
    skillSetId?: IntFilter<"Seeker_Skill_Sets"> | number
    userAccount?: IntFilter<"Seeker_Skill_Sets"> | number
    createdAt?: DateTimeFilter<"Seeker_Skill_Sets"> | Date | string
    updatedAt?: DateTimeFilter<"Seeker_Skill_Sets"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Seeker_Skill_Sets"> | Date | string | null
    skill?: XOR<SkillSetRelationFilter, SkillSetWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type Seeker_Skill_SetsOrderByWithAggregationInput = {
    id?: SortOrder
    skillSetId?: SortOrder
    userAccount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: Seeker_Skill_SetsCountOrderByAggregateInput
    _avg?: Seeker_Skill_SetsAvgOrderByAggregateInput
    _max?: Seeker_Skill_SetsMaxOrderByAggregateInput
    _min?: Seeker_Skill_SetsMinOrderByAggregateInput
    _sum?: Seeker_Skill_SetsSumOrderByAggregateInput
  }

  export type Seeker_Skill_SetsScalarWhereWithAggregatesInput = {
    AND?: Seeker_Skill_SetsScalarWhereWithAggregatesInput | Seeker_Skill_SetsScalarWhereWithAggregatesInput[]
    OR?: Seeker_Skill_SetsScalarWhereWithAggregatesInput[]
    NOT?: Seeker_Skill_SetsScalarWhereWithAggregatesInput | Seeker_Skill_SetsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Seeker_Skill_Sets"> | number
    skillSetId?: IntWithAggregatesFilter<"Seeker_Skill_Sets"> | number
    userAccount?: IntWithAggregatesFilter<"Seeker_Skill_Sets"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Seeker_Skill_Sets"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Seeker_Skill_Sets"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Seeker_Skill_Sets"> | Date | string | null
  }

  export type Experience_DeatilsWhereInput = {
    AND?: Experience_DeatilsWhereInput | Experience_DeatilsWhereInput[]
    OR?: Experience_DeatilsWhereInput[]
    NOT?: Experience_DeatilsWhereInput | Experience_DeatilsWhereInput[]
    id?: IntFilter<"Experience_Deatils"> | number
    userAccount?: IntFilter<"Experience_Deatils"> | number
    isCurrentJob?: BoolFilter<"Experience_Deatils"> | boolean
    startDate?: DateTimeFilter<"Experience_Deatils"> | Date | string
    endDate?: DateTimeNullableFilter<"Experience_Deatils"> | Date | string | null
    companyName?: StringFilter<"Experience_Deatils"> | string
    jobTitle?: StringFilter<"Experience_Deatils"> | string
    description?: StringFilter<"Experience_Deatils"> | string
    createdAt?: DateTimeFilter<"Experience_Deatils"> | Date | string
    updatedAt?: DateTimeFilter<"Experience_Deatils"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Experience_Deatils"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type Experience_DeatilsOrderByWithRelationInput = {
    id?: SortOrder
    userAccount?: SortOrder
    isCurrentJob?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    companyName?: SortOrder
    jobTitle?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type Experience_DeatilsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Experience_DeatilsWhereInput | Experience_DeatilsWhereInput[]
    OR?: Experience_DeatilsWhereInput[]
    NOT?: Experience_DeatilsWhereInput | Experience_DeatilsWhereInput[]
    userAccount?: IntFilter<"Experience_Deatils"> | number
    isCurrentJob?: BoolFilter<"Experience_Deatils"> | boolean
    startDate?: DateTimeFilter<"Experience_Deatils"> | Date | string
    endDate?: DateTimeNullableFilter<"Experience_Deatils"> | Date | string | null
    companyName?: StringFilter<"Experience_Deatils"> | string
    jobTitle?: StringFilter<"Experience_Deatils"> | string
    description?: StringFilter<"Experience_Deatils"> | string
    createdAt?: DateTimeFilter<"Experience_Deatils"> | Date | string
    updatedAt?: DateTimeFilter<"Experience_Deatils"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Experience_Deatils"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type Experience_DeatilsOrderByWithAggregationInput = {
    id?: SortOrder
    userAccount?: SortOrder
    isCurrentJob?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    companyName?: SortOrder
    jobTitle?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: Experience_DeatilsCountOrderByAggregateInput
    _avg?: Experience_DeatilsAvgOrderByAggregateInput
    _max?: Experience_DeatilsMaxOrderByAggregateInput
    _min?: Experience_DeatilsMinOrderByAggregateInput
    _sum?: Experience_DeatilsSumOrderByAggregateInput
  }

  export type Experience_DeatilsScalarWhereWithAggregatesInput = {
    AND?: Experience_DeatilsScalarWhereWithAggregatesInput | Experience_DeatilsScalarWhereWithAggregatesInput[]
    OR?: Experience_DeatilsScalarWhereWithAggregatesInput[]
    NOT?: Experience_DeatilsScalarWhereWithAggregatesInput | Experience_DeatilsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Experience_Deatils"> | number
    userAccount?: IntWithAggregatesFilter<"Experience_Deatils"> | number
    isCurrentJob?: BoolWithAggregatesFilter<"Experience_Deatils"> | boolean
    startDate?: DateTimeWithAggregatesFilter<"Experience_Deatils"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Experience_Deatils"> | Date | string | null
    companyName?: StringWithAggregatesFilter<"Experience_Deatils"> | string
    jobTitle?: StringWithAggregatesFilter<"Experience_Deatils"> | string
    description?: StringWithAggregatesFilter<"Experience_Deatils"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Experience_Deatils"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Experience_Deatils"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Experience_Deatils"> | Date | string | null
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    gender?: $Enums.Gender
    contactNumber?: bigint | number | null
    smsNotificationActive?: boolean
    emailNotificationActive?: boolean
    userImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    addresses?: AddressCreateNestedOneWithoutUserInput
    userlogs?: UserLogCreateNestedManyWithoutUserInput
    educationdeatil?: education_DetailCreateNestedManyWithoutUserInput
    seekerProfile?: seeker_ProfileCreateNestedOneWithoutUserInput
    seekerSkill?: Seeker_Skill_SetsCreateNestedManyWithoutUserInput
    experienceDetails?: Experience_DeatilsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    gender?: $Enums.Gender
    contactNumber?: bigint | number | null
    smsNotificationActive?: boolean
    emailNotificationActive?: boolean
    userImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    addresses?: AddressUncheckedCreateNestedOneWithoutUserInput
    userlogs?: UserLogUncheckedCreateNestedManyWithoutUserInput
    educationdeatil?: education_DetailUncheckedCreateNestedManyWithoutUserInput
    seekerProfile?: seeker_ProfileUncheckedCreateNestedOneWithoutUserInput
    seekerSkill?: Seeker_Skill_SetsUncheckedCreateNestedManyWithoutUserInput
    experienceDetails?: Experience_DeatilsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    contactNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    smsNotificationActive?: BoolFieldUpdateOperationsInput | boolean
    emailNotificationActive?: BoolFieldUpdateOperationsInput | boolean
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addresses?: AddressUpdateOneWithoutUserNestedInput
    userlogs?: UserLogUpdateManyWithoutUserNestedInput
    educationdeatil?: education_DetailUpdateManyWithoutUserNestedInput
    seekerProfile?: seeker_ProfileUpdateOneWithoutUserNestedInput
    seekerSkill?: Seeker_Skill_SetsUpdateManyWithoutUserNestedInput
    experienceDetails?: Experience_DeatilsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    contactNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    smsNotificationActive?: BoolFieldUpdateOperationsInput | boolean
    emailNotificationActive?: BoolFieldUpdateOperationsInput | boolean
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addresses?: AddressUncheckedUpdateOneWithoutUserNestedInput
    userlogs?: UserLogUncheckedUpdateManyWithoutUserNestedInput
    educationdeatil?: education_DetailUncheckedUpdateManyWithoutUserNestedInput
    seekerProfile?: seeker_ProfileUncheckedUpdateOneWithoutUserNestedInput
    seekerSkill?: Seeker_Skill_SetsUncheckedUpdateManyWithoutUserNestedInput
    experienceDetails?: Experience_DeatilsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    gender?: $Enums.Gender
    contactNumber?: bigint | number | null
    smsNotificationActive?: boolean
    emailNotificationActive?: boolean
    userImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    contactNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    smsNotificationActive?: BoolFieldUpdateOperationsInput | boolean
    emailNotificationActive?: BoolFieldUpdateOperationsInput | boolean
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    contactNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    smsNotificationActive?: BoolFieldUpdateOperationsInput | boolean
    emailNotificationActive?: BoolFieldUpdateOperationsInput | boolean
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserLogCreateInput = {
    lastLoginDate?: Date | string
    lastJobApplyDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserlogsInput
  }

  export type UserLogUncheckedCreateInput = {
    id?: number
    lastLoginDate?: Date | string
    lastJobApplyDate?: Date | string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserLogUpdateInput = {
    lastLoginDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastJobApplyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserlogsNestedInput
  }

  export type UserLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastJobApplyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLogCreateManyInput = {
    id?: number
    lastLoginDate?: Date | string
    lastJobApplyDate?: Date | string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserLogUpdateManyMutationInput = {
    lastLoginDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastJobApplyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastJobApplyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateInput = {
    lineOne: string
    lineTwo?: string | null
    city: string
    country: string
    pincode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutAddressesInput
  }

  export type AddressUncheckedCreateInput = {
    id?: number
    lineOne: string
    lineTwo?: string | null
    city: string
    country: string
    pincode: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AddressUpdateInput = {
    lineOne?: StringFieldUpdateOperationsInput | string
    lineTwo?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutAddressesNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    lineOne?: StringFieldUpdateOperationsInput | string
    lineTwo?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AddressCreateManyInput = {
    id?: number
    lineOne: string
    lineTwo?: string | null
    city: string
    country: string
    pincode: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AddressUpdateManyMutationInput = {
    lineOne?: StringFieldUpdateOperationsInput | string
    lineTwo?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    lineOne?: StringFieldUpdateOperationsInput | string
    lineTwo?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductCreateInput = {
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    tags: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    tags: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductCreateManyInput = {
    id?: number
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    tags: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Buissness_StreamCreateInput = {
    buisnessStreamName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    company_profiles?: Company_ProfileCreateNestedManyWithoutBuisnessStreamInput
  }

  export type Buissness_StreamUncheckedCreateInput = {
    id?: number
    buisnessStreamName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    company_profiles?: Company_ProfileUncheckedCreateNestedManyWithoutBuisnessStreamInput
  }

  export type Buissness_StreamUpdateInput = {
    buisnessStreamName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company_profiles?: Company_ProfileUpdateManyWithoutBuisnessStreamNestedInput
  }

  export type Buissness_StreamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    buisnessStreamName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company_profiles?: Company_ProfileUncheckedUpdateManyWithoutBuisnessStreamNestedInput
  }

  export type Buissness_StreamCreateManyInput = {
    id?: number
    buisnessStreamName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type Buissness_StreamUpdateManyMutationInput = {
    buisnessStreamName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Buissness_StreamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    buisnessStreamName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Company_ProfileCreateInput = {
    companyName: string
    profileDescription: string
    companyWebsitUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    buisnessStream: Buissness_StreamCreateNestedOneWithoutCompany_profilesInput
  }

  export type Company_ProfileUncheckedCreateInput = {
    id?: number
    companyName: string
    profileDescription: string
    buisnessStreamID: number
    companyWebsitUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type Company_ProfileUpdateInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    profileDescription?: StringFieldUpdateOperationsInput | string
    companyWebsitUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    buisnessStream?: Buissness_StreamUpdateOneRequiredWithoutCompany_profilesNestedInput
  }

  export type Company_ProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    profileDescription?: StringFieldUpdateOperationsInput | string
    buisnessStreamID?: IntFieldUpdateOperationsInput | number
    companyWebsitUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Company_ProfileCreateManyInput = {
    id?: number
    companyName: string
    profileDescription: string
    buisnessStreamID: number
    companyWebsitUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type Company_ProfileUpdateManyMutationInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    profileDescription?: StringFieldUpdateOperationsInput | string
    companyWebsitUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Company_ProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    profileDescription?: StringFieldUpdateOperationsInput | string
    buisnessStreamID?: IntFieldUpdateOperationsInput | number
    companyWebsitUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type education_DetailCreateInput = {
    certificateDegreeName: string
    IntitutionName: string
    startingDate: Date | string
    completionDate: Date | string
    percentage: number
    cgpa: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutEducationdeatilInput
  }

  export type education_DetailUncheckedCreateInput = {
    id?: number
    certificateDegreeName: string
    IntitutionName: string
    startingDate: Date | string
    completionDate: Date | string
    percentage: number
    cgpa: number
    userAccount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type education_DetailUpdateInput = {
    certificateDegreeName?: StringFieldUpdateOperationsInput | string
    IntitutionName?: StringFieldUpdateOperationsInput | string
    startingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    percentage?: FloatFieldUpdateOperationsInput | number
    cgpa?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutEducationdeatilNestedInput
  }

  export type education_DetailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    certificateDegreeName?: StringFieldUpdateOperationsInput | string
    IntitutionName?: StringFieldUpdateOperationsInput | string
    startingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    percentage?: FloatFieldUpdateOperationsInput | number
    cgpa?: FloatFieldUpdateOperationsInput | number
    userAccount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type education_DetailCreateManyInput = {
    id?: number
    certificateDegreeName: string
    IntitutionName: string
    startingDate: Date | string
    completionDate: Date | string
    percentage: number
    cgpa: number
    userAccount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type education_DetailUpdateManyMutationInput = {
    certificateDegreeName?: StringFieldUpdateOperationsInput | string
    IntitutionName?: StringFieldUpdateOperationsInput | string
    startingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    percentage?: FloatFieldUpdateOperationsInput | number
    cgpa?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type education_DetailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    certificateDegreeName?: StringFieldUpdateOperationsInput | string
    IntitutionName?: StringFieldUpdateOperationsInput | string
    startingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    percentage?: FloatFieldUpdateOperationsInput | number
    cgpa?: FloatFieldUpdateOperationsInput | number
    userAccount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type seeker_ProfileCreateInput = {
    firstName: string
    lastName: string
    currentSalary: number
    isAnnullyMonthly?: boolean
    currency: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutSeekerProfileInput
  }

  export type seeker_ProfileUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    currentSalary: number
    isAnnullyMonthly?: boolean
    userAccount: number
    currency: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type seeker_ProfileUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    currentSalary?: FloatFieldUpdateOperationsInput | number
    isAnnullyMonthly?: BoolFieldUpdateOperationsInput | boolean
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutSeekerProfileNestedInput
  }

  export type seeker_ProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    currentSalary?: FloatFieldUpdateOperationsInput | number
    isAnnullyMonthly?: BoolFieldUpdateOperationsInput | boolean
    userAccount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type seeker_ProfileCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    currentSalary: number
    isAnnullyMonthly?: boolean
    userAccount: number
    currency: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type seeker_ProfileUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    currentSalary?: FloatFieldUpdateOperationsInput | number
    isAnnullyMonthly?: BoolFieldUpdateOperationsInput | boolean
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type seeker_ProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    currentSalary?: FloatFieldUpdateOperationsInput | number
    isAnnullyMonthly?: BoolFieldUpdateOperationsInput | boolean
    userAccount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SkillSetCreateInput = {
    skillSetName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    skillSet?: Seeker_Skill_SetsCreateNestedManyWithoutSkillInput
  }

  export type SkillSetUncheckedCreateInput = {
    id?: number
    skillSetName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    skillSet?: Seeker_Skill_SetsUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillSetUpdateInput = {
    skillSetName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skillSet?: Seeker_Skill_SetsUpdateManyWithoutSkillNestedInput
  }

  export type SkillSetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillSetName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skillSet?: Seeker_Skill_SetsUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type SkillSetCreateManyInput = {
    id?: number
    skillSetName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SkillSetUpdateManyMutationInput = {
    skillSetName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SkillSetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillSetName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Seeker_Skill_SetsCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    skill: SkillSetCreateNestedOneWithoutSkillSetInput
    user: UserCreateNestedOneWithoutSeekerSkillInput
  }

  export type Seeker_Skill_SetsUncheckedCreateInput = {
    id?: number
    skillSetId: number
    userAccount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type Seeker_Skill_SetsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skill?: SkillSetUpdateOneRequiredWithoutSkillSetNestedInput
    user?: UserUpdateOneRequiredWithoutSeekerSkillNestedInput
  }

  export type Seeker_Skill_SetsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillSetId?: IntFieldUpdateOperationsInput | number
    userAccount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Seeker_Skill_SetsCreateManyInput = {
    id?: number
    skillSetId: number
    userAccount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type Seeker_Skill_SetsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Seeker_Skill_SetsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillSetId?: IntFieldUpdateOperationsInput | number
    userAccount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Experience_DeatilsCreateInput = {
    isCurrentJob?: boolean
    startDate: Date | string
    endDate?: Date | string | null
    companyName: string
    jobTitle: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutExperienceDetailsInput
  }

  export type Experience_DeatilsUncheckedCreateInput = {
    id?: number
    userAccount: number
    isCurrentJob?: boolean
    startDate: Date | string
    endDate?: Date | string | null
    companyName: string
    jobTitle: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type Experience_DeatilsUpdateInput = {
    isCurrentJob?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutExperienceDetailsNestedInput
  }

  export type Experience_DeatilsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userAccount?: IntFieldUpdateOperationsInput | number
    isCurrentJob?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Experience_DeatilsCreateManyInput = {
    id?: number
    userAccount: number
    isCurrentJob?: boolean
    startDate: Date | string
    endDate?: Date | string | null
    companyName: string
    jobTitle: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type Experience_DeatilsUpdateManyMutationInput = {
    isCurrentJob?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Experience_DeatilsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userAccount?: IntFieldUpdateOperationsInput | number
    isCurrentJob?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AddressNullableRelationFilter = {
    is?: AddressWhereInput | null
    isNot?: AddressWhereInput | null
  }

  export type UserLogListRelationFilter = {
    every?: UserLogWhereInput
    some?: UserLogWhereInput
    none?: UserLogWhereInput
  }

  export type Education_DetailListRelationFilter = {
    every?: education_DetailWhereInput
    some?: education_DetailWhereInput
    none?: education_DetailWhereInput
  }

  export type Seeker_ProfileNullableRelationFilter = {
    is?: seeker_ProfileWhereInput | null
    isNot?: seeker_ProfileWhereInput | null
  }

  export type Seeker_Skill_SetsListRelationFilter = {
    every?: Seeker_Skill_SetsWhereInput
    some?: Seeker_Skill_SetsWhereInput
    none?: Seeker_Skill_SetsWhereInput
  }

  export type Experience_DeatilsListRelationFilter = {
    every?: Experience_DeatilsWhereInput
    some?: Experience_DeatilsWhereInput
    none?: Experience_DeatilsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type education_DetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Seeker_Skill_SetsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Experience_DeatilsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    gender?: SortOrder
    contactNumber?: SortOrder
    smsNotificationActive?: SortOrder
    emailNotificationActive?: SortOrder
    userImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    contactNumber?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    gender?: SortOrder
    contactNumber?: SortOrder
    smsNotificationActive?: SortOrder
    emailNotificationActive?: SortOrder
    userImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    gender?: SortOrder
    contactNumber?: SortOrder
    smsNotificationActive?: SortOrder
    emailNotificationActive?: SortOrder
    userImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    contactNumber?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserLogCountOrderByAggregateInput = {
    id?: SortOrder
    lastLoginDate?: SortOrder
    lastJobApplyDate?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserLogAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserLogMaxOrderByAggregateInput = {
    id?: SortOrder
    lastLoginDate?: SortOrder
    lastJobApplyDate?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserLogMinOrderByAggregateInput = {
    id?: SortOrder
    lastLoginDate?: SortOrder
    lastJobApplyDate?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserLogSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    lineOne?: SortOrder
    lineTwo?: SortOrder
    city?: SortOrder
    country?: SortOrder
    pincode?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    lineOne?: SortOrder
    lineTwo?: SortOrder
    city?: SortOrder
    country?: SortOrder
    pincode?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    lineOne?: SortOrder
    lineTwo?: SortOrder
    city?: SortOrder
    country?: SortOrder
    pincode?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type Company_ProfileListRelationFilter = {
    every?: Company_ProfileWhereInput
    some?: Company_ProfileWhereInput
    none?: Company_ProfileWhereInput
  }

  export type Company_ProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Buissness_StreamCountOrderByAggregateInput = {
    id?: SortOrder
    buisnessStreamName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type Buissness_StreamAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Buissness_StreamMaxOrderByAggregateInput = {
    id?: SortOrder
    buisnessStreamName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type Buissness_StreamMinOrderByAggregateInput = {
    id?: SortOrder
    buisnessStreamName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type Buissness_StreamSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Buissness_StreamRelationFilter = {
    is?: Buissness_StreamWhereInput
    isNot?: Buissness_StreamWhereInput
  }

  export type Company_ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    profileDescription?: SortOrder
    buisnessStreamID?: SortOrder
    companyWebsitUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type Company_ProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    buisnessStreamID?: SortOrder
  }

  export type Company_ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    profileDescription?: SortOrder
    buisnessStreamID?: SortOrder
    companyWebsitUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type Company_ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    profileDescription?: SortOrder
    buisnessStreamID?: SortOrder
    companyWebsitUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type Company_ProfileSumOrderByAggregateInput = {
    id?: SortOrder
    buisnessStreamID?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type education_DetailCountOrderByAggregateInput = {
    id?: SortOrder
    certificateDegreeName?: SortOrder
    IntitutionName?: SortOrder
    startingDate?: SortOrder
    completionDate?: SortOrder
    percentage?: SortOrder
    cgpa?: SortOrder
    userAccount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type education_DetailAvgOrderByAggregateInput = {
    id?: SortOrder
    percentage?: SortOrder
    cgpa?: SortOrder
    userAccount?: SortOrder
  }

  export type education_DetailMaxOrderByAggregateInput = {
    id?: SortOrder
    certificateDegreeName?: SortOrder
    IntitutionName?: SortOrder
    startingDate?: SortOrder
    completionDate?: SortOrder
    percentage?: SortOrder
    cgpa?: SortOrder
    userAccount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type education_DetailMinOrderByAggregateInput = {
    id?: SortOrder
    certificateDegreeName?: SortOrder
    IntitutionName?: SortOrder
    startingDate?: SortOrder
    completionDate?: SortOrder
    percentage?: SortOrder
    cgpa?: SortOrder
    userAccount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type education_DetailSumOrderByAggregateInput = {
    id?: SortOrder
    percentage?: SortOrder
    cgpa?: SortOrder
    userAccount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type seeker_ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    currentSalary?: SortOrder
    isAnnullyMonthly?: SortOrder
    userAccount?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type seeker_ProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    currentSalary?: SortOrder
    userAccount?: SortOrder
  }

  export type seeker_ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    currentSalary?: SortOrder
    isAnnullyMonthly?: SortOrder
    userAccount?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type seeker_ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    currentSalary?: SortOrder
    isAnnullyMonthly?: SortOrder
    userAccount?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type seeker_ProfileSumOrderByAggregateInput = {
    id?: SortOrder
    currentSalary?: SortOrder
    userAccount?: SortOrder
  }

  export type SkillSetCountOrderByAggregateInput = {
    id?: SortOrder
    skillSetName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SkillSetAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SkillSetMaxOrderByAggregateInput = {
    id?: SortOrder
    skillSetName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SkillSetMinOrderByAggregateInput = {
    id?: SortOrder
    skillSetName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SkillSetSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SkillSetRelationFilter = {
    is?: SkillSetWhereInput
    isNot?: SkillSetWhereInput
  }

  export type Seeker_Skill_SetsCountOrderByAggregateInput = {
    id?: SortOrder
    skillSetId?: SortOrder
    userAccount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type Seeker_Skill_SetsAvgOrderByAggregateInput = {
    id?: SortOrder
    skillSetId?: SortOrder
    userAccount?: SortOrder
  }

  export type Seeker_Skill_SetsMaxOrderByAggregateInput = {
    id?: SortOrder
    skillSetId?: SortOrder
    userAccount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type Seeker_Skill_SetsMinOrderByAggregateInput = {
    id?: SortOrder
    skillSetId?: SortOrder
    userAccount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type Seeker_Skill_SetsSumOrderByAggregateInput = {
    id?: SortOrder
    skillSetId?: SortOrder
    userAccount?: SortOrder
  }

  export type Experience_DeatilsCountOrderByAggregateInput = {
    id?: SortOrder
    userAccount?: SortOrder
    isCurrentJob?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    companyName?: SortOrder
    jobTitle?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type Experience_DeatilsAvgOrderByAggregateInput = {
    id?: SortOrder
    userAccount?: SortOrder
  }

  export type Experience_DeatilsMaxOrderByAggregateInput = {
    id?: SortOrder
    userAccount?: SortOrder
    isCurrentJob?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    companyName?: SortOrder
    jobTitle?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type Experience_DeatilsMinOrderByAggregateInput = {
    id?: SortOrder
    userAccount?: SortOrder
    isCurrentJob?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    companyName?: SortOrder
    jobTitle?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type Experience_DeatilsSumOrderByAggregateInput = {
    id?: SortOrder
    userAccount?: SortOrder
  }

  export type AddressCreateNestedOneWithoutUserInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput
    connect?: AddressWhereUniqueInput
  }

  export type UserLogCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLogCreateWithoutUserInput, UserLogUncheckedCreateWithoutUserInput> | UserLogCreateWithoutUserInput[] | UserLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLogCreateOrConnectWithoutUserInput | UserLogCreateOrConnectWithoutUserInput[]
    createMany?: UserLogCreateManyUserInputEnvelope
    connect?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[]
  }

  export type education_DetailCreateNestedManyWithoutUserInput = {
    create?: XOR<education_DetailCreateWithoutUserInput, education_DetailUncheckedCreateWithoutUserInput> | education_DetailCreateWithoutUserInput[] | education_DetailUncheckedCreateWithoutUserInput[]
    connectOrCreate?: education_DetailCreateOrConnectWithoutUserInput | education_DetailCreateOrConnectWithoutUserInput[]
    createMany?: education_DetailCreateManyUserInputEnvelope
    connect?: education_DetailWhereUniqueInput | education_DetailWhereUniqueInput[]
  }

  export type seeker_ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<seeker_ProfileCreateWithoutUserInput, seeker_ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: seeker_ProfileCreateOrConnectWithoutUserInput
    connect?: seeker_ProfileWhereUniqueInput
  }

  export type Seeker_Skill_SetsCreateNestedManyWithoutUserInput = {
    create?: XOR<Seeker_Skill_SetsCreateWithoutUserInput, Seeker_Skill_SetsUncheckedCreateWithoutUserInput> | Seeker_Skill_SetsCreateWithoutUserInput[] | Seeker_Skill_SetsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Seeker_Skill_SetsCreateOrConnectWithoutUserInput | Seeker_Skill_SetsCreateOrConnectWithoutUserInput[]
    createMany?: Seeker_Skill_SetsCreateManyUserInputEnvelope
    connect?: Seeker_Skill_SetsWhereUniqueInput | Seeker_Skill_SetsWhereUniqueInput[]
  }

  export type Experience_DeatilsCreateNestedManyWithoutUserInput = {
    create?: XOR<Experience_DeatilsCreateWithoutUserInput, Experience_DeatilsUncheckedCreateWithoutUserInput> | Experience_DeatilsCreateWithoutUserInput[] | Experience_DeatilsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Experience_DeatilsCreateOrConnectWithoutUserInput | Experience_DeatilsCreateOrConnectWithoutUserInput[]
    createMany?: Experience_DeatilsCreateManyUserInputEnvelope
    connect?: Experience_DeatilsWhereUniqueInput | Experience_DeatilsWhereUniqueInput[]
  }

  export type AddressUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput
    connect?: AddressWhereUniqueInput
  }

  export type UserLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLogCreateWithoutUserInput, UserLogUncheckedCreateWithoutUserInput> | UserLogCreateWithoutUserInput[] | UserLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLogCreateOrConnectWithoutUserInput | UserLogCreateOrConnectWithoutUserInput[]
    createMany?: UserLogCreateManyUserInputEnvelope
    connect?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[]
  }

  export type education_DetailUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<education_DetailCreateWithoutUserInput, education_DetailUncheckedCreateWithoutUserInput> | education_DetailCreateWithoutUserInput[] | education_DetailUncheckedCreateWithoutUserInput[]
    connectOrCreate?: education_DetailCreateOrConnectWithoutUserInput | education_DetailCreateOrConnectWithoutUserInput[]
    createMany?: education_DetailCreateManyUserInputEnvelope
    connect?: education_DetailWhereUniqueInput | education_DetailWhereUniqueInput[]
  }

  export type seeker_ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<seeker_ProfileCreateWithoutUserInput, seeker_ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: seeker_ProfileCreateOrConnectWithoutUserInput
    connect?: seeker_ProfileWhereUniqueInput
  }

  export type Seeker_Skill_SetsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Seeker_Skill_SetsCreateWithoutUserInput, Seeker_Skill_SetsUncheckedCreateWithoutUserInput> | Seeker_Skill_SetsCreateWithoutUserInput[] | Seeker_Skill_SetsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Seeker_Skill_SetsCreateOrConnectWithoutUserInput | Seeker_Skill_SetsCreateOrConnectWithoutUserInput[]
    createMany?: Seeker_Skill_SetsCreateManyUserInputEnvelope
    connect?: Seeker_Skill_SetsWhereUniqueInput | Seeker_Skill_SetsWhereUniqueInput[]
  }

  export type Experience_DeatilsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Experience_DeatilsCreateWithoutUserInput, Experience_DeatilsUncheckedCreateWithoutUserInput> | Experience_DeatilsCreateWithoutUserInput[] | Experience_DeatilsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Experience_DeatilsCreateOrConnectWithoutUserInput | Experience_DeatilsCreateOrConnectWithoutUserInput[]
    createMany?: Experience_DeatilsCreateManyUserInputEnvelope
    connect?: Experience_DeatilsWhereUniqueInput | Experience_DeatilsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AddressUpdateOneWithoutUserNestedInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput
    upsert?: AddressUpsertWithoutUserInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutUserInput, AddressUpdateWithoutUserInput>, AddressUncheckedUpdateWithoutUserInput>
  }

  export type UserLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLogCreateWithoutUserInput, UserLogUncheckedCreateWithoutUserInput> | UserLogCreateWithoutUserInput[] | UserLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLogCreateOrConnectWithoutUserInput | UserLogCreateOrConnectWithoutUserInput[]
    upsert?: UserLogUpsertWithWhereUniqueWithoutUserInput | UserLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLogCreateManyUserInputEnvelope
    set?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[]
    disconnect?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[]
    delete?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[]
    connect?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[]
    update?: UserLogUpdateWithWhereUniqueWithoutUserInput | UserLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLogUpdateManyWithWhereWithoutUserInput | UserLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLogScalarWhereInput | UserLogScalarWhereInput[]
  }

  export type education_DetailUpdateManyWithoutUserNestedInput = {
    create?: XOR<education_DetailCreateWithoutUserInput, education_DetailUncheckedCreateWithoutUserInput> | education_DetailCreateWithoutUserInput[] | education_DetailUncheckedCreateWithoutUserInput[]
    connectOrCreate?: education_DetailCreateOrConnectWithoutUserInput | education_DetailCreateOrConnectWithoutUserInput[]
    upsert?: education_DetailUpsertWithWhereUniqueWithoutUserInput | education_DetailUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: education_DetailCreateManyUserInputEnvelope
    set?: education_DetailWhereUniqueInput | education_DetailWhereUniqueInput[]
    disconnect?: education_DetailWhereUniqueInput | education_DetailWhereUniqueInput[]
    delete?: education_DetailWhereUniqueInput | education_DetailWhereUniqueInput[]
    connect?: education_DetailWhereUniqueInput | education_DetailWhereUniqueInput[]
    update?: education_DetailUpdateWithWhereUniqueWithoutUserInput | education_DetailUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: education_DetailUpdateManyWithWhereWithoutUserInput | education_DetailUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: education_DetailScalarWhereInput | education_DetailScalarWhereInput[]
  }

  export type seeker_ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<seeker_ProfileCreateWithoutUserInput, seeker_ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: seeker_ProfileCreateOrConnectWithoutUserInput
    upsert?: seeker_ProfileUpsertWithoutUserInput
    disconnect?: seeker_ProfileWhereInput | boolean
    delete?: seeker_ProfileWhereInput | boolean
    connect?: seeker_ProfileWhereUniqueInput
    update?: XOR<XOR<seeker_ProfileUpdateToOneWithWhereWithoutUserInput, seeker_ProfileUpdateWithoutUserInput>, seeker_ProfileUncheckedUpdateWithoutUserInput>
  }

  export type Seeker_Skill_SetsUpdateManyWithoutUserNestedInput = {
    create?: XOR<Seeker_Skill_SetsCreateWithoutUserInput, Seeker_Skill_SetsUncheckedCreateWithoutUserInput> | Seeker_Skill_SetsCreateWithoutUserInput[] | Seeker_Skill_SetsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Seeker_Skill_SetsCreateOrConnectWithoutUserInput | Seeker_Skill_SetsCreateOrConnectWithoutUserInput[]
    upsert?: Seeker_Skill_SetsUpsertWithWhereUniqueWithoutUserInput | Seeker_Skill_SetsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Seeker_Skill_SetsCreateManyUserInputEnvelope
    set?: Seeker_Skill_SetsWhereUniqueInput | Seeker_Skill_SetsWhereUniqueInput[]
    disconnect?: Seeker_Skill_SetsWhereUniqueInput | Seeker_Skill_SetsWhereUniqueInput[]
    delete?: Seeker_Skill_SetsWhereUniqueInput | Seeker_Skill_SetsWhereUniqueInput[]
    connect?: Seeker_Skill_SetsWhereUniqueInput | Seeker_Skill_SetsWhereUniqueInput[]
    update?: Seeker_Skill_SetsUpdateWithWhereUniqueWithoutUserInput | Seeker_Skill_SetsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Seeker_Skill_SetsUpdateManyWithWhereWithoutUserInput | Seeker_Skill_SetsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Seeker_Skill_SetsScalarWhereInput | Seeker_Skill_SetsScalarWhereInput[]
  }

  export type Experience_DeatilsUpdateManyWithoutUserNestedInput = {
    create?: XOR<Experience_DeatilsCreateWithoutUserInput, Experience_DeatilsUncheckedCreateWithoutUserInput> | Experience_DeatilsCreateWithoutUserInput[] | Experience_DeatilsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Experience_DeatilsCreateOrConnectWithoutUserInput | Experience_DeatilsCreateOrConnectWithoutUserInput[]
    upsert?: Experience_DeatilsUpsertWithWhereUniqueWithoutUserInput | Experience_DeatilsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Experience_DeatilsCreateManyUserInputEnvelope
    set?: Experience_DeatilsWhereUniqueInput | Experience_DeatilsWhereUniqueInput[]
    disconnect?: Experience_DeatilsWhereUniqueInput | Experience_DeatilsWhereUniqueInput[]
    delete?: Experience_DeatilsWhereUniqueInput | Experience_DeatilsWhereUniqueInput[]
    connect?: Experience_DeatilsWhereUniqueInput | Experience_DeatilsWhereUniqueInput[]
    update?: Experience_DeatilsUpdateWithWhereUniqueWithoutUserInput | Experience_DeatilsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Experience_DeatilsUpdateManyWithWhereWithoutUserInput | Experience_DeatilsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Experience_DeatilsScalarWhereInput | Experience_DeatilsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AddressUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput
    upsert?: AddressUpsertWithoutUserInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutUserInput, AddressUpdateWithoutUserInput>, AddressUncheckedUpdateWithoutUserInput>
  }

  export type UserLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLogCreateWithoutUserInput, UserLogUncheckedCreateWithoutUserInput> | UserLogCreateWithoutUserInput[] | UserLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLogCreateOrConnectWithoutUserInput | UserLogCreateOrConnectWithoutUserInput[]
    upsert?: UserLogUpsertWithWhereUniqueWithoutUserInput | UserLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLogCreateManyUserInputEnvelope
    set?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[]
    disconnect?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[]
    delete?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[]
    connect?: UserLogWhereUniqueInput | UserLogWhereUniqueInput[]
    update?: UserLogUpdateWithWhereUniqueWithoutUserInput | UserLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLogUpdateManyWithWhereWithoutUserInput | UserLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLogScalarWhereInput | UserLogScalarWhereInput[]
  }

  export type education_DetailUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<education_DetailCreateWithoutUserInput, education_DetailUncheckedCreateWithoutUserInput> | education_DetailCreateWithoutUserInput[] | education_DetailUncheckedCreateWithoutUserInput[]
    connectOrCreate?: education_DetailCreateOrConnectWithoutUserInput | education_DetailCreateOrConnectWithoutUserInput[]
    upsert?: education_DetailUpsertWithWhereUniqueWithoutUserInput | education_DetailUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: education_DetailCreateManyUserInputEnvelope
    set?: education_DetailWhereUniqueInput | education_DetailWhereUniqueInput[]
    disconnect?: education_DetailWhereUniqueInput | education_DetailWhereUniqueInput[]
    delete?: education_DetailWhereUniqueInput | education_DetailWhereUniqueInput[]
    connect?: education_DetailWhereUniqueInput | education_DetailWhereUniqueInput[]
    update?: education_DetailUpdateWithWhereUniqueWithoutUserInput | education_DetailUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: education_DetailUpdateManyWithWhereWithoutUserInput | education_DetailUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: education_DetailScalarWhereInput | education_DetailScalarWhereInput[]
  }

  export type seeker_ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<seeker_ProfileCreateWithoutUserInput, seeker_ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: seeker_ProfileCreateOrConnectWithoutUserInput
    upsert?: seeker_ProfileUpsertWithoutUserInput
    disconnect?: seeker_ProfileWhereInput | boolean
    delete?: seeker_ProfileWhereInput | boolean
    connect?: seeker_ProfileWhereUniqueInput
    update?: XOR<XOR<seeker_ProfileUpdateToOneWithWhereWithoutUserInput, seeker_ProfileUpdateWithoutUserInput>, seeker_ProfileUncheckedUpdateWithoutUserInput>
  }

  export type Seeker_Skill_SetsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Seeker_Skill_SetsCreateWithoutUserInput, Seeker_Skill_SetsUncheckedCreateWithoutUserInput> | Seeker_Skill_SetsCreateWithoutUserInput[] | Seeker_Skill_SetsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Seeker_Skill_SetsCreateOrConnectWithoutUserInput | Seeker_Skill_SetsCreateOrConnectWithoutUserInput[]
    upsert?: Seeker_Skill_SetsUpsertWithWhereUniqueWithoutUserInput | Seeker_Skill_SetsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Seeker_Skill_SetsCreateManyUserInputEnvelope
    set?: Seeker_Skill_SetsWhereUniqueInput | Seeker_Skill_SetsWhereUniqueInput[]
    disconnect?: Seeker_Skill_SetsWhereUniqueInput | Seeker_Skill_SetsWhereUniqueInput[]
    delete?: Seeker_Skill_SetsWhereUniqueInput | Seeker_Skill_SetsWhereUniqueInput[]
    connect?: Seeker_Skill_SetsWhereUniqueInput | Seeker_Skill_SetsWhereUniqueInput[]
    update?: Seeker_Skill_SetsUpdateWithWhereUniqueWithoutUserInput | Seeker_Skill_SetsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Seeker_Skill_SetsUpdateManyWithWhereWithoutUserInput | Seeker_Skill_SetsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Seeker_Skill_SetsScalarWhereInput | Seeker_Skill_SetsScalarWhereInput[]
  }

  export type Experience_DeatilsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Experience_DeatilsCreateWithoutUserInput, Experience_DeatilsUncheckedCreateWithoutUserInput> | Experience_DeatilsCreateWithoutUserInput[] | Experience_DeatilsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Experience_DeatilsCreateOrConnectWithoutUserInput | Experience_DeatilsCreateOrConnectWithoutUserInput[]
    upsert?: Experience_DeatilsUpsertWithWhereUniqueWithoutUserInput | Experience_DeatilsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Experience_DeatilsCreateManyUserInputEnvelope
    set?: Experience_DeatilsWhereUniqueInput | Experience_DeatilsWhereUniqueInput[]
    disconnect?: Experience_DeatilsWhereUniqueInput | Experience_DeatilsWhereUniqueInput[]
    delete?: Experience_DeatilsWhereUniqueInput | Experience_DeatilsWhereUniqueInput[]
    connect?: Experience_DeatilsWhereUniqueInput | Experience_DeatilsWhereUniqueInput[]
    update?: Experience_DeatilsUpdateWithWhereUniqueWithoutUserInput | Experience_DeatilsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Experience_DeatilsUpdateManyWithWhereWithoutUserInput | Experience_DeatilsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Experience_DeatilsScalarWhereInput | Experience_DeatilsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserlogsInput = {
    create?: XOR<UserCreateWithoutUserlogsInput, UserUncheckedCreateWithoutUserlogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserlogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserlogsNestedInput = {
    create?: XOR<UserCreateWithoutUserlogsInput, UserUncheckedCreateWithoutUserlogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserlogsInput
    upsert?: UserUpsertWithoutUserlogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserlogsInput, UserUpdateWithoutUserlogsInput>, UserUncheckedUpdateWithoutUserlogsInput>
  }

  export type UserCreateNestedOneWithoutAddressesInput = {
    create?: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAddressesNestedInput = {
    create?: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressesInput
    upsert?: UserUpsertWithoutAddressesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAddressesInput, UserUpdateWithoutAddressesInput>, UserUncheckedUpdateWithoutAddressesInput>
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type Company_ProfileCreateNestedManyWithoutBuisnessStreamInput = {
    create?: XOR<Company_ProfileCreateWithoutBuisnessStreamInput, Company_ProfileUncheckedCreateWithoutBuisnessStreamInput> | Company_ProfileCreateWithoutBuisnessStreamInput[] | Company_ProfileUncheckedCreateWithoutBuisnessStreamInput[]
    connectOrCreate?: Company_ProfileCreateOrConnectWithoutBuisnessStreamInput | Company_ProfileCreateOrConnectWithoutBuisnessStreamInput[]
    createMany?: Company_ProfileCreateManyBuisnessStreamInputEnvelope
    connect?: Company_ProfileWhereUniqueInput | Company_ProfileWhereUniqueInput[]
  }

  export type Company_ProfileUncheckedCreateNestedManyWithoutBuisnessStreamInput = {
    create?: XOR<Company_ProfileCreateWithoutBuisnessStreamInput, Company_ProfileUncheckedCreateWithoutBuisnessStreamInput> | Company_ProfileCreateWithoutBuisnessStreamInput[] | Company_ProfileUncheckedCreateWithoutBuisnessStreamInput[]
    connectOrCreate?: Company_ProfileCreateOrConnectWithoutBuisnessStreamInput | Company_ProfileCreateOrConnectWithoutBuisnessStreamInput[]
    createMany?: Company_ProfileCreateManyBuisnessStreamInputEnvelope
    connect?: Company_ProfileWhereUniqueInput | Company_ProfileWhereUniqueInput[]
  }

  export type Company_ProfileUpdateManyWithoutBuisnessStreamNestedInput = {
    create?: XOR<Company_ProfileCreateWithoutBuisnessStreamInput, Company_ProfileUncheckedCreateWithoutBuisnessStreamInput> | Company_ProfileCreateWithoutBuisnessStreamInput[] | Company_ProfileUncheckedCreateWithoutBuisnessStreamInput[]
    connectOrCreate?: Company_ProfileCreateOrConnectWithoutBuisnessStreamInput | Company_ProfileCreateOrConnectWithoutBuisnessStreamInput[]
    upsert?: Company_ProfileUpsertWithWhereUniqueWithoutBuisnessStreamInput | Company_ProfileUpsertWithWhereUniqueWithoutBuisnessStreamInput[]
    createMany?: Company_ProfileCreateManyBuisnessStreamInputEnvelope
    set?: Company_ProfileWhereUniqueInput | Company_ProfileWhereUniqueInput[]
    disconnect?: Company_ProfileWhereUniqueInput | Company_ProfileWhereUniqueInput[]
    delete?: Company_ProfileWhereUniqueInput | Company_ProfileWhereUniqueInput[]
    connect?: Company_ProfileWhereUniqueInput | Company_ProfileWhereUniqueInput[]
    update?: Company_ProfileUpdateWithWhereUniqueWithoutBuisnessStreamInput | Company_ProfileUpdateWithWhereUniqueWithoutBuisnessStreamInput[]
    updateMany?: Company_ProfileUpdateManyWithWhereWithoutBuisnessStreamInput | Company_ProfileUpdateManyWithWhereWithoutBuisnessStreamInput[]
    deleteMany?: Company_ProfileScalarWhereInput | Company_ProfileScalarWhereInput[]
  }

  export type Company_ProfileUncheckedUpdateManyWithoutBuisnessStreamNestedInput = {
    create?: XOR<Company_ProfileCreateWithoutBuisnessStreamInput, Company_ProfileUncheckedCreateWithoutBuisnessStreamInput> | Company_ProfileCreateWithoutBuisnessStreamInput[] | Company_ProfileUncheckedCreateWithoutBuisnessStreamInput[]
    connectOrCreate?: Company_ProfileCreateOrConnectWithoutBuisnessStreamInput | Company_ProfileCreateOrConnectWithoutBuisnessStreamInput[]
    upsert?: Company_ProfileUpsertWithWhereUniqueWithoutBuisnessStreamInput | Company_ProfileUpsertWithWhereUniqueWithoutBuisnessStreamInput[]
    createMany?: Company_ProfileCreateManyBuisnessStreamInputEnvelope
    set?: Company_ProfileWhereUniqueInput | Company_ProfileWhereUniqueInput[]
    disconnect?: Company_ProfileWhereUniqueInput | Company_ProfileWhereUniqueInput[]
    delete?: Company_ProfileWhereUniqueInput | Company_ProfileWhereUniqueInput[]
    connect?: Company_ProfileWhereUniqueInput | Company_ProfileWhereUniqueInput[]
    update?: Company_ProfileUpdateWithWhereUniqueWithoutBuisnessStreamInput | Company_ProfileUpdateWithWhereUniqueWithoutBuisnessStreamInput[]
    updateMany?: Company_ProfileUpdateManyWithWhereWithoutBuisnessStreamInput | Company_ProfileUpdateManyWithWhereWithoutBuisnessStreamInput[]
    deleteMany?: Company_ProfileScalarWhereInput | Company_ProfileScalarWhereInput[]
  }

  export type Buissness_StreamCreateNestedOneWithoutCompany_profilesInput = {
    create?: XOR<Buissness_StreamCreateWithoutCompany_profilesInput, Buissness_StreamUncheckedCreateWithoutCompany_profilesInput>
    connectOrCreate?: Buissness_StreamCreateOrConnectWithoutCompany_profilesInput
    connect?: Buissness_StreamWhereUniqueInput
  }

  export type Buissness_StreamUpdateOneRequiredWithoutCompany_profilesNestedInput = {
    create?: XOR<Buissness_StreamCreateWithoutCompany_profilesInput, Buissness_StreamUncheckedCreateWithoutCompany_profilesInput>
    connectOrCreate?: Buissness_StreamCreateOrConnectWithoutCompany_profilesInput
    upsert?: Buissness_StreamUpsertWithoutCompany_profilesInput
    connect?: Buissness_StreamWhereUniqueInput
    update?: XOR<XOR<Buissness_StreamUpdateToOneWithWhereWithoutCompany_profilesInput, Buissness_StreamUpdateWithoutCompany_profilesInput>, Buissness_StreamUncheckedUpdateWithoutCompany_profilesInput>
  }

  export type UserCreateNestedOneWithoutEducationdeatilInput = {
    create?: XOR<UserCreateWithoutEducationdeatilInput, UserUncheckedCreateWithoutEducationdeatilInput>
    connectOrCreate?: UserCreateOrConnectWithoutEducationdeatilInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutEducationdeatilNestedInput = {
    create?: XOR<UserCreateWithoutEducationdeatilInput, UserUncheckedCreateWithoutEducationdeatilInput>
    connectOrCreate?: UserCreateOrConnectWithoutEducationdeatilInput
    upsert?: UserUpsertWithoutEducationdeatilInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEducationdeatilInput, UserUpdateWithoutEducationdeatilInput>, UserUncheckedUpdateWithoutEducationdeatilInput>
  }

  export type UserCreateNestedOneWithoutSeekerProfileInput = {
    create?: XOR<UserCreateWithoutSeekerProfileInput, UserUncheckedCreateWithoutSeekerProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutSeekerProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSeekerProfileNestedInput = {
    create?: XOR<UserCreateWithoutSeekerProfileInput, UserUncheckedCreateWithoutSeekerProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutSeekerProfileInput
    upsert?: UserUpsertWithoutSeekerProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSeekerProfileInput, UserUpdateWithoutSeekerProfileInput>, UserUncheckedUpdateWithoutSeekerProfileInput>
  }

  export type Seeker_Skill_SetsCreateNestedManyWithoutSkillInput = {
    create?: XOR<Seeker_Skill_SetsCreateWithoutSkillInput, Seeker_Skill_SetsUncheckedCreateWithoutSkillInput> | Seeker_Skill_SetsCreateWithoutSkillInput[] | Seeker_Skill_SetsUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: Seeker_Skill_SetsCreateOrConnectWithoutSkillInput | Seeker_Skill_SetsCreateOrConnectWithoutSkillInput[]
    createMany?: Seeker_Skill_SetsCreateManySkillInputEnvelope
    connect?: Seeker_Skill_SetsWhereUniqueInput | Seeker_Skill_SetsWhereUniqueInput[]
  }

  export type Seeker_Skill_SetsUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<Seeker_Skill_SetsCreateWithoutSkillInput, Seeker_Skill_SetsUncheckedCreateWithoutSkillInput> | Seeker_Skill_SetsCreateWithoutSkillInput[] | Seeker_Skill_SetsUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: Seeker_Skill_SetsCreateOrConnectWithoutSkillInput | Seeker_Skill_SetsCreateOrConnectWithoutSkillInput[]
    createMany?: Seeker_Skill_SetsCreateManySkillInputEnvelope
    connect?: Seeker_Skill_SetsWhereUniqueInput | Seeker_Skill_SetsWhereUniqueInput[]
  }

  export type Seeker_Skill_SetsUpdateManyWithoutSkillNestedInput = {
    create?: XOR<Seeker_Skill_SetsCreateWithoutSkillInput, Seeker_Skill_SetsUncheckedCreateWithoutSkillInput> | Seeker_Skill_SetsCreateWithoutSkillInput[] | Seeker_Skill_SetsUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: Seeker_Skill_SetsCreateOrConnectWithoutSkillInput | Seeker_Skill_SetsCreateOrConnectWithoutSkillInput[]
    upsert?: Seeker_Skill_SetsUpsertWithWhereUniqueWithoutSkillInput | Seeker_Skill_SetsUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: Seeker_Skill_SetsCreateManySkillInputEnvelope
    set?: Seeker_Skill_SetsWhereUniqueInput | Seeker_Skill_SetsWhereUniqueInput[]
    disconnect?: Seeker_Skill_SetsWhereUniqueInput | Seeker_Skill_SetsWhereUniqueInput[]
    delete?: Seeker_Skill_SetsWhereUniqueInput | Seeker_Skill_SetsWhereUniqueInput[]
    connect?: Seeker_Skill_SetsWhereUniqueInput | Seeker_Skill_SetsWhereUniqueInput[]
    update?: Seeker_Skill_SetsUpdateWithWhereUniqueWithoutSkillInput | Seeker_Skill_SetsUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: Seeker_Skill_SetsUpdateManyWithWhereWithoutSkillInput | Seeker_Skill_SetsUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: Seeker_Skill_SetsScalarWhereInput | Seeker_Skill_SetsScalarWhereInput[]
  }

  export type Seeker_Skill_SetsUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<Seeker_Skill_SetsCreateWithoutSkillInput, Seeker_Skill_SetsUncheckedCreateWithoutSkillInput> | Seeker_Skill_SetsCreateWithoutSkillInput[] | Seeker_Skill_SetsUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: Seeker_Skill_SetsCreateOrConnectWithoutSkillInput | Seeker_Skill_SetsCreateOrConnectWithoutSkillInput[]
    upsert?: Seeker_Skill_SetsUpsertWithWhereUniqueWithoutSkillInput | Seeker_Skill_SetsUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: Seeker_Skill_SetsCreateManySkillInputEnvelope
    set?: Seeker_Skill_SetsWhereUniqueInput | Seeker_Skill_SetsWhereUniqueInput[]
    disconnect?: Seeker_Skill_SetsWhereUniqueInput | Seeker_Skill_SetsWhereUniqueInput[]
    delete?: Seeker_Skill_SetsWhereUniqueInput | Seeker_Skill_SetsWhereUniqueInput[]
    connect?: Seeker_Skill_SetsWhereUniqueInput | Seeker_Skill_SetsWhereUniqueInput[]
    update?: Seeker_Skill_SetsUpdateWithWhereUniqueWithoutSkillInput | Seeker_Skill_SetsUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: Seeker_Skill_SetsUpdateManyWithWhereWithoutSkillInput | Seeker_Skill_SetsUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: Seeker_Skill_SetsScalarWhereInput | Seeker_Skill_SetsScalarWhereInput[]
  }

  export type SkillSetCreateNestedOneWithoutSkillSetInput = {
    create?: XOR<SkillSetCreateWithoutSkillSetInput, SkillSetUncheckedCreateWithoutSkillSetInput>
    connectOrCreate?: SkillSetCreateOrConnectWithoutSkillSetInput
    connect?: SkillSetWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSeekerSkillInput = {
    create?: XOR<UserCreateWithoutSeekerSkillInput, UserUncheckedCreateWithoutSeekerSkillInput>
    connectOrCreate?: UserCreateOrConnectWithoutSeekerSkillInput
    connect?: UserWhereUniqueInput
  }

  export type SkillSetUpdateOneRequiredWithoutSkillSetNestedInput = {
    create?: XOR<SkillSetCreateWithoutSkillSetInput, SkillSetUncheckedCreateWithoutSkillSetInput>
    connectOrCreate?: SkillSetCreateOrConnectWithoutSkillSetInput
    upsert?: SkillSetUpsertWithoutSkillSetInput
    connect?: SkillSetWhereUniqueInput
    update?: XOR<XOR<SkillSetUpdateToOneWithWhereWithoutSkillSetInput, SkillSetUpdateWithoutSkillSetInput>, SkillSetUncheckedUpdateWithoutSkillSetInput>
  }

  export type UserUpdateOneRequiredWithoutSeekerSkillNestedInput = {
    create?: XOR<UserCreateWithoutSeekerSkillInput, UserUncheckedCreateWithoutSeekerSkillInput>
    connectOrCreate?: UserCreateOrConnectWithoutSeekerSkillInput
    upsert?: UserUpsertWithoutSeekerSkillInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSeekerSkillInput, UserUpdateWithoutSeekerSkillInput>, UserUncheckedUpdateWithoutSeekerSkillInput>
  }

  export type UserCreateNestedOneWithoutExperienceDetailsInput = {
    create?: XOR<UserCreateWithoutExperienceDetailsInput, UserUncheckedCreateWithoutExperienceDetailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutExperienceDetailsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutExperienceDetailsNestedInput = {
    create?: XOR<UserCreateWithoutExperienceDetailsInput, UserUncheckedCreateWithoutExperienceDetailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutExperienceDetailsInput
    upsert?: UserUpsertWithoutExperienceDetailsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExperienceDetailsInput, UserUpdateWithoutExperienceDetailsInput>, UserUncheckedUpdateWithoutExperienceDetailsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type AddressCreateWithoutUserInput = {
    lineOne: string
    lineTwo?: string | null
    city: string
    country: string
    pincode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AddressUncheckedCreateWithoutUserInput = {
    id?: number
    lineOne: string
    lineTwo?: string | null
    city: string
    country: string
    pincode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AddressCreateOrConnectWithoutUserInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
  }

  export type UserLogCreateWithoutUserInput = {
    lastLoginDate?: Date | string
    lastJobApplyDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserLogUncheckedCreateWithoutUserInput = {
    id?: number
    lastLoginDate?: Date | string
    lastJobApplyDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserLogCreateOrConnectWithoutUserInput = {
    where: UserLogWhereUniqueInput
    create: XOR<UserLogCreateWithoutUserInput, UserLogUncheckedCreateWithoutUserInput>
  }

  export type UserLogCreateManyUserInputEnvelope = {
    data: UserLogCreateManyUserInput | UserLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type education_DetailCreateWithoutUserInput = {
    certificateDegreeName: string
    IntitutionName: string
    startingDate: Date | string
    completionDate: Date | string
    percentage: number
    cgpa: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type education_DetailUncheckedCreateWithoutUserInput = {
    id?: number
    certificateDegreeName: string
    IntitutionName: string
    startingDate: Date | string
    completionDate: Date | string
    percentage: number
    cgpa: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type education_DetailCreateOrConnectWithoutUserInput = {
    where: education_DetailWhereUniqueInput
    create: XOR<education_DetailCreateWithoutUserInput, education_DetailUncheckedCreateWithoutUserInput>
  }

  export type education_DetailCreateManyUserInputEnvelope = {
    data: education_DetailCreateManyUserInput | education_DetailCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type seeker_ProfileCreateWithoutUserInput = {
    firstName: string
    lastName: string
    currentSalary: number
    isAnnullyMonthly?: boolean
    currency: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type seeker_ProfileUncheckedCreateWithoutUserInput = {
    id?: number
    firstName: string
    lastName: string
    currentSalary: number
    isAnnullyMonthly?: boolean
    currency: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type seeker_ProfileCreateOrConnectWithoutUserInput = {
    where: seeker_ProfileWhereUniqueInput
    create: XOR<seeker_ProfileCreateWithoutUserInput, seeker_ProfileUncheckedCreateWithoutUserInput>
  }

  export type Seeker_Skill_SetsCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    skill: SkillSetCreateNestedOneWithoutSkillSetInput
  }

  export type Seeker_Skill_SetsUncheckedCreateWithoutUserInput = {
    id?: number
    skillSetId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type Seeker_Skill_SetsCreateOrConnectWithoutUserInput = {
    where: Seeker_Skill_SetsWhereUniqueInput
    create: XOR<Seeker_Skill_SetsCreateWithoutUserInput, Seeker_Skill_SetsUncheckedCreateWithoutUserInput>
  }

  export type Seeker_Skill_SetsCreateManyUserInputEnvelope = {
    data: Seeker_Skill_SetsCreateManyUserInput | Seeker_Skill_SetsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type Experience_DeatilsCreateWithoutUserInput = {
    isCurrentJob?: boolean
    startDate: Date | string
    endDate?: Date | string | null
    companyName: string
    jobTitle: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type Experience_DeatilsUncheckedCreateWithoutUserInput = {
    id?: number
    isCurrentJob?: boolean
    startDate: Date | string
    endDate?: Date | string | null
    companyName: string
    jobTitle: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type Experience_DeatilsCreateOrConnectWithoutUserInput = {
    where: Experience_DeatilsWhereUniqueInput
    create: XOR<Experience_DeatilsCreateWithoutUserInput, Experience_DeatilsUncheckedCreateWithoutUserInput>
  }

  export type Experience_DeatilsCreateManyUserInputEnvelope = {
    data: Experience_DeatilsCreateManyUserInput | Experience_DeatilsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AddressUpsertWithoutUserInput = {
    update: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutUserInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>
  }

  export type AddressUpdateWithoutUserInput = {
    lineOne?: StringFieldUpdateOperationsInput | string
    lineTwo?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AddressUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    lineOne?: StringFieldUpdateOperationsInput | string
    lineTwo?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserLogUpsertWithWhereUniqueWithoutUserInput = {
    where: UserLogWhereUniqueInput
    update: XOR<UserLogUpdateWithoutUserInput, UserLogUncheckedUpdateWithoutUserInput>
    create: XOR<UserLogCreateWithoutUserInput, UserLogUncheckedCreateWithoutUserInput>
  }

  export type UserLogUpdateWithWhereUniqueWithoutUserInput = {
    where: UserLogWhereUniqueInput
    data: XOR<UserLogUpdateWithoutUserInput, UserLogUncheckedUpdateWithoutUserInput>
  }

  export type UserLogUpdateManyWithWhereWithoutUserInput = {
    where: UserLogScalarWhereInput
    data: XOR<UserLogUpdateManyMutationInput, UserLogUncheckedUpdateManyWithoutUserInput>
  }

  export type UserLogScalarWhereInput = {
    AND?: UserLogScalarWhereInput | UserLogScalarWhereInput[]
    OR?: UserLogScalarWhereInput[]
    NOT?: UserLogScalarWhereInput | UserLogScalarWhereInput[]
    id?: IntFilter<"UserLog"> | number
    lastLoginDate?: DateTimeFilter<"UserLog"> | Date | string
    lastJobApplyDate?: DateTimeFilter<"UserLog"> | Date | string
    userId?: IntFilter<"UserLog"> | number
    createdAt?: DateTimeFilter<"UserLog"> | Date | string
    updatedAt?: DateTimeFilter<"UserLog"> | Date | string
  }

  export type education_DetailUpsertWithWhereUniqueWithoutUserInput = {
    where: education_DetailWhereUniqueInput
    update: XOR<education_DetailUpdateWithoutUserInput, education_DetailUncheckedUpdateWithoutUserInput>
    create: XOR<education_DetailCreateWithoutUserInput, education_DetailUncheckedCreateWithoutUserInput>
  }

  export type education_DetailUpdateWithWhereUniqueWithoutUserInput = {
    where: education_DetailWhereUniqueInput
    data: XOR<education_DetailUpdateWithoutUserInput, education_DetailUncheckedUpdateWithoutUserInput>
  }

  export type education_DetailUpdateManyWithWhereWithoutUserInput = {
    where: education_DetailScalarWhereInput
    data: XOR<education_DetailUpdateManyMutationInput, education_DetailUncheckedUpdateManyWithoutUserInput>
  }

  export type education_DetailScalarWhereInput = {
    AND?: education_DetailScalarWhereInput | education_DetailScalarWhereInput[]
    OR?: education_DetailScalarWhereInput[]
    NOT?: education_DetailScalarWhereInput | education_DetailScalarWhereInput[]
    id?: IntFilter<"education_Detail"> | number
    certificateDegreeName?: StringFilter<"education_Detail"> | string
    IntitutionName?: StringFilter<"education_Detail"> | string
    startingDate?: DateTimeFilter<"education_Detail"> | Date | string
    completionDate?: DateTimeFilter<"education_Detail"> | Date | string
    percentage?: FloatFilter<"education_Detail"> | number
    cgpa?: FloatFilter<"education_Detail"> | number
    userAccount?: IntFilter<"education_Detail"> | number
    createdAt?: DateTimeFilter<"education_Detail"> | Date | string
    updatedAt?: DateTimeFilter<"education_Detail"> | Date | string
    deletedAt?: DateTimeNullableFilter<"education_Detail"> | Date | string | null
  }

  export type seeker_ProfileUpsertWithoutUserInput = {
    update: XOR<seeker_ProfileUpdateWithoutUserInput, seeker_ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<seeker_ProfileCreateWithoutUserInput, seeker_ProfileUncheckedCreateWithoutUserInput>
    where?: seeker_ProfileWhereInput
  }

  export type seeker_ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: seeker_ProfileWhereInput
    data: XOR<seeker_ProfileUpdateWithoutUserInput, seeker_ProfileUncheckedUpdateWithoutUserInput>
  }

  export type seeker_ProfileUpdateWithoutUserInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    currentSalary?: FloatFieldUpdateOperationsInput | number
    isAnnullyMonthly?: BoolFieldUpdateOperationsInput | boolean
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type seeker_ProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    currentSalary?: FloatFieldUpdateOperationsInput | number
    isAnnullyMonthly?: BoolFieldUpdateOperationsInput | boolean
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Seeker_Skill_SetsUpsertWithWhereUniqueWithoutUserInput = {
    where: Seeker_Skill_SetsWhereUniqueInput
    update: XOR<Seeker_Skill_SetsUpdateWithoutUserInput, Seeker_Skill_SetsUncheckedUpdateWithoutUserInput>
    create: XOR<Seeker_Skill_SetsCreateWithoutUserInput, Seeker_Skill_SetsUncheckedCreateWithoutUserInput>
  }

  export type Seeker_Skill_SetsUpdateWithWhereUniqueWithoutUserInput = {
    where: Seeker_Skill_SetsWhereUniqueInput
    data: XOR<Seeker_Skill_SetsUpdateWithoutUserInput, Seeker_Skill_SetsUncheckedUpdateWithoutUserInput>
  }

  export type Seeker_Skill_SetsUpdateManyWithWhereWithoutUserInput = {
    where: Seeker_Skill_SetsScalarWhereInput
    data: XOR<Seeker_Skill_SetsUpdateManyMutationInput, Seeker_Skill_SetsUncheckedUpdateManyWithoutUserInput>
  }

  export type Seeker_Skill_SetsScalarWhereInput = {
    AND?: Seeker_Skill_SetsScalarWhereInput | Seeker_Skill_SetsScalarWhereInput[]
    OR?: Seeker_Skill_SetsScalarWhereInput[]
    NOT?: Seeker_Skill_SetsScalarWhereInput | Seeker_Skill_SetsScalarWhereInput[]
    id?: IntFilter<"Seeker_Skill_Sets"> | number
    skillSetId?: IntFilter<"Seeker_Skill_Sets"> | number
    userAccount?: IntFilter<"Seeker_Skill_Sets"> | number
    createdAt?: DateTimeFilter<"Seeker_Skill_Sets"> | Date | string
    updatedAt?: DateTimeFilter<"Seeker_Skill_Sets"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Seeker_Skill_Sets"> | Date | string | null
  }

  export type Experience_DeatilsUpsertWithWhereUniqueWithoutUserInput = {
    where: Experience_DeatilsWhereUniqueInput
    update: XOR<Experience_DeatilsUpdateWithoutUserInput, Experience_DeatilsUncheckedUpdateWithoutUserInput>
    create: XOR<Experience_DeatilsCreateWithoutUserInput, Experience_DeatilsUncheckedCreateWithoutUserInput>
  }

  export type Experience_DeatilsUpdateWithWhereUniqueWithoutUserInput = {
    where: Experience_DeatilsWhereUniqueInput
    data: XOR<Experience_DeatilsUpdateWithoutUserInput, Experience_DeatilsUncheckedUpdateWithoutUserInput>
  }

  export type Experience_DeatilsUpdateManyWithWhereWithoutUserInput = {
    where: Experience_DeatilsScalarWhereInput
    data: XOR<Experience_DeatilsUpdateManyMutationInput, Experience_DeatilsUncheckedUpdateManyWithoutUserInput>
  }

  export type Experience_DeatilsScalarWhereInput = {
    AND?: Experience_DeatilsScalarWhereInput | Experience_DeatilsScalarWhereInput[]
    OR?: Experience_DeatilsScalarWhereInput[]
    NOT?: Experience_DeatilsScalarWhereInput | Experience_DeatilsScalarWhereInput[]
    id?: IntFilter<"Experience_Deatils"> | number
    userAccount?: IntFilter<"Experience_Deatils"> | number
    isCurrentJob?: BoolFilter<"Experience_Deatils"> | boolean
    startDate?: DateTimeFilter<"Experience_Deatils"> | Date | string
    endDate?: DateTimeNullableFilter<"Experience_Deatils"> | Date | string | null
    companyName?: StringFilter<"Experience_Deatils"> | string
    jobTitle?: StringFilter<"Experience_Deatils"> | string
    description?: StringFilter<"Experience_Deatils"> | string
    createdAt?: DateTimeFilter<"Experience_Deatils"> | Date | string
    updatedAt?: DateTimeFilter<"Experience_Deatils"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Experience_Deatils"> | Date | string | null
  }

  export type UserCreateWithoutUserlogsInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    gender?: $Enums.Gender
    contactNumber?: bigint | number | null
    smsNotificationActive?: boolean
    emailNotificationActive?: boolean
    userImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    addresses?: AddressCreateNestedOneWithoutUserInput
    educationdeatil?: education_DetailCreateNestedManyWithoutUserInput
    seekerProfile?: seeker_ProfileCreateNestedOneWithoutUserInput
    seekerSkill?: Seeker_Skill_SetsCreateNestedManyWithoutUserInput
    experienceDetails?: Experience_DeatilsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserlogsInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    gender?: $Enums.Gender
    contactNumber?: bigint | number | null
    smsNotificationActive?: boolean
    emailNotificationActive?: boolean
    userImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    addresses?: AddressUncheckedCreateNestedOneWithoutUserInput
    educationdeatil?: education_DetailUncheckedCreateNestedManyWithoutUserInput
    seekerProfile?: seeker_ProfileUncheckedCreateNestedOneWithoutUserInput
    seekerSkill?: Seeker_Skill_SetsUncheckedCreateNestedManyWithoutUserInput
    experienceDetails?: Experience_DeatilsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserlogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserlogsInput, UserUncheckedCreateWithoutUserlogsInput>
  }

  export type UserUpsertWithoutUserlogsInput = {
    update: XOR<UserUpdateWithoutUserlogsInput, UserUncheckedUpdateWithoutUserlogsInput>
    create: XOR<UserCreateWithoutUserlogsInput, UserUncheckedCreateWithoutUserlogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserlogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserlogsInput, UserUncheckedUpdateWithoutUserlogsInput>
  }

  export type UserUpdateWithoutUserlogsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    contactNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    smsNotificationActive?: BoolFieldUpdateOperationsInput | boolean
    emailNotificationActive?: BoolFieldUpdateOperationsInput | boolean
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addresses?: AddressUpdateOneWithoutUserNestedInput
    educationdeatil?: education_DetailUpdateManyWithoutUserNestedInput
    seekerProfile?: seeker_ProfileUpdateOneWithoutUserNestedInput
    seekerSkill?: Seeker_Skill_SetsUpdateManyWithoutUserNestedInput
    experienceDetails?: Experience_DeatilsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserlogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    contactNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    smsNotificationActive?: BoolFieldUpdateOperationsInput | boolean
    emailNotificationActive?: BoolFieldUpdateOperationsInput | boolean
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addresses?: AddressUncheckedUpdateOneWithoutUserNestedInput
    educationdeatil?: education_DetailUncheckedUpdateManyWithoutUserNestedInput
    seekerProfile?: seeker_ProfileUncheckedUpdateOneWithoutUserNestedInput
    seekerSkill?: Seeker_Skill_SetsUncheckedUpdateManyWithoutUserNestedInput
    experienceDetails?: Experience_DeatilsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAddressesInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    gender?: $Enums.Gender
    contactNumber?: bigint | number | null
    smsNotificationActive?: boolean
    emailNotificationActive?: boolean
    userImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userlogs?: UserLogCreateNestedManyWithoutUserInput
    educationdeatil?: education_DetailCreateNestedManyWithoutUserInput
    seekerProfile?: seeker_ProfileCreateNestedOneWithoutUserInput
    seekerSkill?: Seeker_Skill_SetsCreateNestedManyWithoutUserInput
    experienceDetails?: Experience_DeatilsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAddressesInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    gender?: $Enums.Gender
    contactNumber?: bigint | number | null
    smsNotificationActive?: boolean
    emailNotificationActive?: boolean
    userImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userlogs?: UserLogUncheckedCreateNestedManyWithoutUserInput
    educationdeatil?: education_DetailUncheckedCreateNestedManyWithoutUserInput
    seekerProfile?: seeker_ProfileUncheckedCreateNestedOneWithoutUserInput
    seekerSkill?: Seeker_Skill_SetsUncheckedCreateNestedManyWithoutUserInput
    experienceDetails?: Experience_DeatilsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAddressesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput>
  }

  export type UserUpsertWithoutAddressesInput = {
    update: XOR<UserUpdateWithoutAddressesInput, UserUncheckedUpdateWithoutAddressesInput>
    create: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAddressesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAddressesInput, UserUncheckedUpdateWithoutAddressesInput>
  }

  export type UserUpdateWithoutAddressesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    contactNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    smsNotificationActive?: BoolFieldUpdateOperationsInput | boolean
    emailNotificationActive?: BoolFieldUpdateOperationsInput | boolean
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userlogs?: UserLogUpdateManyWithoutUserNestedInput
    educationdeatil?: education_DetailUpdateManyWithoutUserNestedInput
    seekerProfile?: seeker_ProfileUpdateOneWithoutUserNestedInput
    seekerSkill?: Seeker_Skill_SetsUpdateManyWithoutUserNestedInput
    experienceDetails?: Experience_DeatilsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAddressesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    contactNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    smsNotificationActive?: BoolFieldUpdateOperationsInput | boolean
    emailNotificationActive?: BoolFieldUpdateOperationsInput | boolean
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userlogs?: UserLogUncheckedUpdateManyWithoutUserNestedInput
    educationdeatil?: education_DetailUncheckedUpdateManyWithoutUserNestedInput
    seekerProfile?: seeker_ProfileUncheckedUpdateOneWithoutUserNestedInput
    seekerSkill?: Seeker_Skill_SetsUncheckedUpdateManyWithoutUserNestedInput
    experienceDetails?: Experience_DeatilsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type Company_ProfileCreateWithoutBuisnessStreamInput = {
    companyName: string
    profileDescription: string
    companyWebsitUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type Company_ProfileUncheckedCreateWithoutBuisnessStreamInput = {
    id?: number
    companyName: string
    profileDescription: string
    companyWebsitUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type Company_ProfileCreateOrConnectWithoutBuisnessStreamInput = {
    where: Company_ProfileWhereUniqueInput
    create: XOR<Company_ProfileCreateWithoutBuisnessStreamInput, Company_ProfileUncheckedCreateWithoutBuisnessStreamInput>
  }

  export type Company_ProfileCreateManyBuisnessStreamInputEnvelope = {
    data: Company_ProfileCreateManyBuisnessStreamInput | Company_ProfileCreateManyBuisnessStreamInput[]
    skipDuplicates?: boolean
  }

  export type Company_ProfileUpsertWithWhereUniqueWithoutBuisnessStreamInput = {
    where: Company_ProfileWhereUniqueInput
    update: XOR<Company_ProfileUpdateWithoutBuisnessStreamInput, Company_ProfileUncheckedUpdateWithoutBuisnessStreamInput>
    create: XOR<Company_ProfileCreateWithoutBuisnessStreamInput, Company_ProfileUncheckedCreateWithoutBuisnessStreamInput>
  }

  export type Company_ProfileUpdateWithWhereUniqueWithoutBuisnessStreamInput = {
    where: Company_ProfileWhereUniqueInput
    data: XOR<Company_ProfileUpdateWithoutBuisnessStreamInput, Company_ProfileUncheckedUpdateWithoutBuisnessStreamInput>
  }

  export type Company_ProfileUpdateManyWithWhereWithoutBuisnessStreamInput = {
    where: Company_ProfileScalarWhereInput
    data: XOR<Company_ProfileUpdateManyMutationInput, Company_ProfileUncheckedUpdateManyWithoutBuisnessStreamInput>
  }

  export type Company_ProfileScalarWhereInput = {
    AND?: Company_ProfileScalarWhereInput | Company_ProfileScalarWhereInput[]
    OR?: Company_ProfileScalarWhereInput[]
    NOT?: Company_ProfileScalarWhereInput | Company_ProfileScalarWhereInput[]
    id?: IntFilter<"Company_Profile"> | number
    companyName?: StringFilter<"Company_Profile"> | string
    profileDescription?: StringFilter<"Company_Profile"> | string
    buisnessStreamID?: IntFilter<"Company_Profile"> | number
    companyWebsitUrl?: StringFilter<"Company_Profile"> | string
    createdAt?: DateTimeFilter<"Company_Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Company_Profile"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Company_Profile"> | Date | string | null
  }

  export type Buissness_StreamCreateWithoutCompany_profilesInput = {
    buisnessStreamName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type Buissness_StreamUncheckedCreateWithoutCompany_profilesInput = {
    id?: number
    buisnessStreamName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type Buissness_StreamCreateOrConnectWithoutCompany_profilesInput = {
    where: Buissness_StreamWhereUniqueInput
    create: XOR<Buissness_StreamCreateWithoutCompany_profilesInput, Buissness_StreamUncheckedCreateWithoutCompany_profilesInput>
  }

  export type Buissness_StreamUpsertWithoutCompany_profilesInput = {
    update: XOR<Buissness_StreamUpdateWithoutCompany_profilesInput, Buissness_StreamUncheckedUpdateWithoutCompany_profilesInput>
    create: XOR<Buissness_StreamCreateWithoutCompany_profilesInput, Buissness_StreamUncheckedCreateWithoutCompany_profilesInput>
    where?: Buissness_StreamWhereInput
  }

  export type Buissness_StreamUpdateToOneWithWhereWithoutCompany_profilesInput = {
    where?: Buissness_StreamWhereInput
    data: XOR<Buissness_StreamUpdateWithoutCompany_profilesInput, Buissness_StreamUncheckedUpdateWithoutCompany_profilesInput>
  }

  export type Buissness_StreamUpdateWithoutCompany_profilesInput = {
    buisnessStreamName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Buissness_StreamUncheckedUpdateWithoutCompany_profilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    buisnessStreamName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateWithoutEducationdeatilInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    gender?: $Enums.Gender
    contactNumber?: bigint | number | null
    smsNotificationActive?: boolean
    emailNotificationActive?: boolean
    userImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    addresses?: AddressCreateNestedOneWithoutUserInput
    userlogs?: UserLogCreateNestedManyWithoutUserInput
    seekerProfile?: seeker_ProfileCreateNestedOneWithoutUserInput
    seekerSkill?: Seeker_Skill_SetsCreateNestedManyWithoutUserInput
    experienceDetails?: Experience_DeatilsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEducationdeatilInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    gender?: $Enums.Gender
    contactNumber?: bigint | number | null
    smsNotificationActive?: boolean
    emailNotificationActive?: boolean
    userImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    addresses?: AddressUncheckedCreateNestedOneWithoutUserInput
    userlogs?: UserLogUncheckedCreateNestedManyWithoutUserInput
    seekerProfile?: seeker_ProfileUncheckedCreateNestedOneWithoutUserInput
    seekerSkill?: Seeker_Skill_SetsUncheckedCreateNestedManyWithoutUserInput
    experienceDetails?: Experience_DeatilsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEducationdeatilInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEducationdeatilInput, UserUncheckedCreateWithoutEducationdeatilInput>
  }

  export type UserUpsertWithoutEducationdeatilInput = {
    update: XOR<UserUpdateWithoutEducationdeatilInput, UserUncheckedUpdateWithoutEducationdeatilInput>
    create: XOR<UserCreateWithoutEducationdeatilInput, UserUncheckedCreateWithoutEducationdeatilInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEducationdeatilInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEducationdeatilInput, UserUncheckedUpdateWithoutEducationdeatilInput>
  }

  export type UserUpdateWithoutEducationdeatilInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    contactNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    smsNotificationActive?: BoolFieldUpdateOperationsInput | boolean
    emailNotificationActive?: BoolFieldUpdateOperationsInput | boolean
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addresses?: AddressUpdateOneWithoutUserNestedInput
    userlogs?: UserLogUpdateManyWithoutUserNestedInput
    seekerProfile?: seeker_ProfileUpdateOneWithoutUserNestedInput
    seekerSkill?: Seeker_Skill_SetsUpdateManyWithoutUserNestedInput
    experienceDetails?: Experience_DeatilsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEducationdeatilInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    contactNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    smsNotificationActive?: BoolFieldUpdateOperationsInput | boolean
    emailNotificationActive?: BoolFieldUpdateOperationsInput | boolean
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addresses?: AddressUncheckedUpdateOneWithoutUserNestedInput
    userlogs?: UserLogUncheckedUpdateManyWithoutUserNestedInput
    seekerProfile?: seeker_ProfileUncheckedUpdateOneWithoutUserNestedInput
    seekerSkill?: Seeker_Skill_SetsUncheckedUpdateManyWithoutUserNestedInput
    experienceDetails?: Experience_DeatilsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSeekerProfileInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    gender?: $Enums.Gender
    contactNumber?: bigint | number | null
    smsNotificationActive?: boolean
    emailNotificationActive?: boolean
    userImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    addresses?: AddressCreateNestedOneWithoutUserInput
    userlogs?: UserLogCreateNestedManyWithoutUserInput
    educationdeatil?: education_DetailCreateNestedManyWithoutUserInput
    seekerSkill?: Seeker_Skill_SetsCreateNestedManyWithoutUserInput
    experienceDetails?: Experience_DeatilsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSeekerProfileInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    gender?: $Enums.Gender
    contactNumber?: bigint | number | null
    smsNotificationActive?: boolean
    emailNotificationActive?: boolean
    userImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    addresses?: AddressUncheckedCreateNestedOneWithoutUserInput
    userlogs?: UserLogUncheckedCreateNestedManyWithoutUserInput
    educationdeatil?: education_DetailUncheckedCreateNestedManyWithoutUserInput
    seekerSkill?: Seeker_Skill_SetsUncheckedCreateNestedManyWithoutUserInput
    experienceDetails?: Experience_DeatilsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSeekerProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSeekerProfileInput, UserUncheckedCreateWithoutSeekerProfileInput>
  }

  export type UserUpsertWithoutSeekerProfileInput = {
    update: XOR<UserUpdateWithoutSeekerProfileInput, UserUncheckedUpdateWithoutSeekerProfileInput>
    create: XOR<UserCreateWithoutSeekerProfileInput, UserUncheckedCreateWithoutSeekerProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSeekerProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSeekerProfileInput, UserUncheckedUpdateWithoutSeekerProfileInput>
  }

  export type UserUpdateWithoutSeekerProfileInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    contactNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    smsNotificationActive?: BoolFieldUpdateOperationsInput | boolean
    emailNotificationActive?: BoolFieldUpdateOperationsInput | boolean
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addresses?: AddressUpdateOneWithoutUserNestedInput
    userlogs?: UserLogUpdateManyWithoutUserNestedInput
    educationdeatil?: education_DetailUpdateManyWithoutUserNestedInput
    seekerSkill?: Seeker_Skill_SetsUpdateManyWithoutUserNestedInput
    experienceDetails?: Experience_DeatilsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSeekerProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    contactNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    smsNotificationActive?: BoolFieldUpdateOperationsInput | boolean
    emailNotificationActive?: BoolFieldUpdateOperationsInput | boolean
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addresses?: AddressUncheckedUpdateOneWithoutUserNestedInput
    userlogs?: UserLogUncheckedUpdateManyWithoutUserNestedInput
    educationdeatil?: education_DetailUncheckedUpdateManyWithoutUserNestedInput
    seekerSkill?: Seeker_Skill_SetsUncheckedUpdateManyWithoutUserNestedInput
    experienceDetails?: Experience_DeatilsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type Seeker_Skill_SetsCreateWithoutSkillInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutSeekerSkillInput
  }

  export type Seeker_Skill_SetsUncheckedCreateWithoutSkillInput = {
    id?: number
    userAccount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type Seeker_Skill_SetsCreateOrConnectWithoutSkillInput = {
    where: Seeker_Skill_SetsWhereUniqueInput
    create: XOR<Seeker_Skill_SetsCreateWithoutSkillInput, Seeker_Skill_SetsUncheckedCreateWithoutSkillInput>
  }

  export type Seeker_Skill_SetsCreateManySkillInputEnvelope = {
    data: Seeker_Skill_SetsCreateManySkillInput | Seeker_Skill_SetsCreateManySkillInput[]
    skipDuplicates?: boolean
  }

  export type Seeker_Skill_SetsUpsertWithWhereUniqueWithoutSkillInput = {
    where: Seeker_Skill_SetsWhereUniqueInput
    update: XOR<Seeker_Skill_SetsUpdateWithoutSkillInput, Seeker_Skill_SetsUncheckedUpdateWithoutSkillInput>
    create: XOR<Seeker_Skill_SetsCreateWithoutSkillInput, Seeker_Skill_SetsUncheckedCreateWithoutSkillInput>
  }

  export type Seeker_Skill_SetsUpdateWithWhereUniqueWithoutSkillInput = {
    where: Seeker_Skill_SetsWhereUniqueInput
    data: XOR<Seeker_Skill_SetsUpdateWithoutSkillInput, Seeker_Skill_SetsUncheckedUpdateWithoutSkillInput>
  }

  export type Seeker_Skill_SetsUpdateManyWithWhereWithoutSkillInput = {
    where: Seeker_Skill_SetsScalarWhereInput
    data: XOR<Seeker_Skill_SetsUpdateManyMutationInput, Seeker_Skill_SetsUncheckedUpdateManyWithoutSkillInput>
  }

  export type SkillSetCreateWithoutSkillSetInput = {
    skillSetName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SkillSetUncheckedCreateWithoutSkillSetInput = {
    id?: number
    skillSetName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SkillSetCreateOrConnectWithoutSkillSetInput = {
    where: SkillSetWhereUniqueInput
    create: XOR<SkillSetCreateWithoutSkillSetInput, SkillSetUncheckedCreateWithoutSkillSetInput>
  }

  export type UserCreateWithoutSeekerSkillInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    gender?: $Enums.Gender
    contactNumber?: bigint | number | null
    smsNotificationActive?: boolean
    emailNotificationActive?: boolean
    userImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    addresses?: AddressCreateNestedOneWithoutUserInput
    userlogs?: UserLogCreateNestedManyWithoutUserInput
    educationdeatil?: education_DetailCreateNestedManyWithoutUserInput
    seekerProfile?: seeker_ProfileCreateNestedOneWithoutUserInput
    experienceDetails?: Experience_DeatilsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSeekerSkillInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    gender?: $Enums.Gender
    contactNumber?: bigint | number | null
    smsNotificationActive?: boolean
    emailNotificationActive?: boolean
    userImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    addresses?: AddressUncheckedCreateNestedOneWithoutUserInput
    userlogs?: UserLogUncheckedCreateNestedManyWithoutUserInput
    educationdeatil?: education_DetailUncheckedCreateNestedManyWithoutUserInput
    seekerProfile?: seeker_ProfileUncheckedCreateNestedOneWithoutUserInput
    experienceDetails?: Experience_DeatilsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSeekerSkillInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSeekerSkillInput, UserUncheckedCreateWithoutSeekerSkillInput>
  }

  export type SkillSetUpsertWithoutSkillSetInput = {
    update: XOR<SkillSetUpdateWithoutSkillSetInput, SkillSetUncheckedUpdateWithoutSkillSetInput>
    create: XOR<SkillSetCreateWithoutSkillSetInput, SkillSetUncheckedCreateWithoutSkillSetInput>
    where?: SkillSetWhereInput
  }

  export type SkillSetUpdateToOneWithWhereWithoutSkillSetInput = {
    where?: SkillSetWhereInput
    data: XOR<SkillSetUpdateWithoutSkillSetInput, SkillSetUncheckedUpdateWithoutSkillSetInput>
  }

  export type SkillSetUpdateWithoutSkillSetInput = {
    skillSetName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SkillSetUncheckedUpdateWithoutSkillSetInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillSetName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpsertWithoutSeekerSkillInput = {
    update: XOR<UserUpdateWithoutSeekerSkillInput, UserUncheckedUpdateWithoutSeekerSkillInput>
    create: XOR<UserCreateWithoutSeekerSkillInput, UserUncheckedCreateWithoutSeekerSkillInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSeekerSkillInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSeekerSkillInput, UserUncheckedUpdateWithoutSeekerSkillInput>
  }

  export type UserUpdateWithoutSeekerSkillInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    contactNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    smsNotificationActive?: BoolFieldUpdateOperationsInput | boolean
    emailNotificationActive?: BoolFieldUpdateOperationsInput | boolean
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addresses?: AddressUpdateOneWithoutUserNestedInput
    userlogs?: UserLogUpdateManyWithoutUserNestedInput
    educationdeatil?: education_DetailUpdateManyWithoutUserNestedInput
    seekerProfile?: seeker_ProfileUpdateOneWithoutUserNestedInput
    experienceDetails?: Experience_DeatilsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSeekerSkillInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    contactNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    smsNotificationActive?: BoolFieldUpdateOperationsInput | boolean
    emailNotificationActive?: BoolFieldUpdateOperationsInput | boolean
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addresses?: AddressUncheckedUpdateOneWithoutUserNestedInput
    userlogs?: UserLogUncheckedUpdateManyWithoutUserNestedInput
    educationdeatil?: education_DetailUncheckedUpdateManyWithoutUserNestedInput
    seekerProfile?: seeker_ProfileUncheckedUpdateOneWithoutUserNestedInput
    experienceDetails?: Experience_DeatilsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutExperienceDetailsInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    gender?: $Enums.Gender
    contactNumber?: bigint | number | null
    smsNotificationActive?: boolean
    emailNotificationActive?: boolean
    userImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    addresses?: AddressCreateNestedOneWithoutUserInput
    userlogs?: UserLogCreateNestedManyWithoutUserInput
    educationdeatil?: education_DetailCreateNestedManyWithoutUserInput
    seekerProfile?: seeker_ProfileCreateNestedOneWithoutUserInput
    seekerSkill?: Seeker_Skill_SetsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutExperienceDetailsInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    gender?: $Enums.Gender
    contactNumber?: bigint | number | null
    smsNotificationActive?: boolean
    emailNotificationActive?: boolean
    userImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    addresses?: AddressUncheckedCreateNestedOneWithoutUserInput
    userlogs?: UserLogUncheckedCreateNestedManyWithoutUserInput
    educationdeatil?: education_DetailUncheckedCreateNestedManyWithoutUserInput
    seekerProfile?: seeker_ProfileUncheckedCreateNestedOneWithoutUserInput
    seekerSkill?: Seeker_Skill_SetsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutExperienceDetailsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExperienceDetailsInput, UserUncheckedCreateWithoutExperienceDetailsInput>
  }

  export type UserUpsertWithoutExperienceDetailsInput = {
    update: XOR<UserUpdateWithoutExperienceDetailsInput, UserUncheckedUpdateWithoutExperienceDetailsInput>
    create: XOR<UserCreateWithoutExperienceDetailsInput, UserUncheckedCreateWithoutExperienceDetailsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExperienceDetailsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExperienceDetailsInput, UserUncheckedUpdateWithoutExperienceDetailsInput>
  }

  export type UserUpdateWithoutExperienceDetailsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    contactNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    smsNotificationActive?: BoolFieldUpdateOperationsInput | boolean
    emailNotificationActive?: BoolFieldUpdateOperationsInput | boolean
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addresses?: AddressUpdateOneWithoutUserNestedInput
    userlogs?: UserLogUpdateManyWithoutUserNestedInput
    educationdeatil?: education_DetailUpdateManyWithoutUserNestedInput
    seekerProfile?: seeker_ProfileUpdateOneWithoutUserNestedInput
    seekerSkill?: Seeker_Skill_SetsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutExperienceDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    contactNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    smsNotificationActive?: BoolFieldUpdateOperationsInput | boolean
    emailNotificationActive?: BoolFieldUpdateOperationsInput | boolean
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addresses?: AddressUncheckedUpdateOneWithoutUserNestedInput
    userlogs?: UserLogUncheckedUpdateManyWithoutUserNestedInput
    educationdeatil?: education_DetailUncheckedUpdateManyWithoutUserNestedInput
    seekerProfile?: seeker_ProfileUncheckedUpdateOneWithoutUserNestedInput
    seekerSkill?: Seeker_Skill_SetsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserLogCreateManyUserInput = {
    id?: number
    lastLoginDate?: Date | string
    lastJobApplyDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type education_DetailCreateManyUserInput = {
    id?: number
    certificateDegreeName: string
    IntitutionName: string
    startingDate: Date | string
    completionDate: Date | string
    percentage: number
    cgpa: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type Seeker_Skill_SetsCreateManyUserInput = {
    id?: number
    skillSetId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type Experience_DeatilsCreateManyUserInput = {
    id?: number
    isCurrentJob?: boolean
    startDate: Date | string
    endDate?: Date | string | null
    companyName: string
    jobTitle: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserLogUpdateWithoutUserInput = {
    lastLoginDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastJobApplyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastJobApplyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    lastLoginDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastJobApplyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type education_DetailUpdateWithoutUserInput = {
    certificateDegreeName?: StringFieldUpdateOperationsInput | string
    IntitutionName?: StringFieldUpdateOperationsInput | string
    startingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    percentage?: FloatFieldUpdateOperationsInput | number
    cgpa?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type education_DetailUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    certificateDegreeName?: StringFieldUpdateOperationsInput | string
    IntitutionName?: StringFieldUpdateOperationsInput | string
    startingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    percentage?: FloatFieldUpdateOperationsInput | number
    cgpa?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type education_DetailUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    certificateDegreeName?: StringFieldUpdateOperationsInput | string
    IntitutionName?: StringFieldUpdateOperationsInput | string
    startingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    completionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    percentage?: FloatFieldUpdateOperationsInput | number
    cgpa?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Seeker_Skill_SetsUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    skill?: SkillSetUpdateOneRequiredWithoutSkillSetNestedInput
  }

  export type Seeker_Skill_SetsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillSetId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Seeker_Skill_SetsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillSetId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Experience_DeatilsUpdateWithoutUserInput = {
    isCurrentJob?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Experience_DeatilsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    isCurrentJob?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Experience_DeatilsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    isCurrentJob?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Company_ProfileCreateManyBuisnessStreamInput = {
    id?: number
    companyName: string
    profileDescription: string
    companyWebsitUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type Company_ProfileUpdateWithoutBuisnessStreamInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    profileDescription?: StringFieldUpdateOperationsInput | string
    companyWebsitUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Company_ProfileUncheckedUpdateWithoutBuisnessStreamInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    profileDescription?: StringFieldUpdateOperationsInput | string
    companyWebsitUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Company_ProfileUncheckedUpdateManyWithoutBuisnessStreamInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    profileDescription?: StringFieldUpdateOperationsInput | string
    companyWebsitUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Seeker_Skill_SetsCreateManySkillInput = {
    id?: number
    userAccount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type Seeker_Skill_SetsUpdateWithoutSkillInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutSeekerSkillNestedInput
  }

  export type Seeker_Skill_SetsUncheckedUpdateWithoutSkillInput = {
    id?: IntFieldUpdateOperationsInput | number
    userAccount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Seeker_Skill_SetsUncheckedUpdateManyWithoutSkillInput = {
    id?: IntFieldUpdateOperationsInput | number
    userAccount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Buissness_StreamCountOutputTypeDefaultArgs instead
     */
    export type Buissness_StreamCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Buissness_StreamCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SkillSetCountOutputTypeDefaultArgs instead
     */
    export type SkillSetCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SkillSetCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserLogDefaultArgs instead
     */
    export type UserLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AddressDefaultArgs instead
     */
    export type AddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AddressDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Buissness_StreamDefaultArgs instead
     */
    export type Buissness_StreamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Buissness_StreamDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Company_ProfileDefaultArgs instead
     */
    export type Company_ProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Company_ProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use education_DetailDefaultArgs instead
     */
    export type education_DetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = education_DetailDefaultArgs<ExtArgs>
    /**
     * @deprecated Use seeker_ProfileDefaultArgs instead
     */
    export type seeker_ProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = seeker_ProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SkillSetDefaultArgs instead
     */
    export type SkillSetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SkillSetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Seeker_Skill_SetsDefaultArgs instead
     */
    export type Seeker_Skill_SetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Seeker_Skill_SetsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Experience_DeatilsDefaultArgs instead
     */
    export type Experience_DeatilsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Experience_DeatilsDefaultArgs<ExtArgs>

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