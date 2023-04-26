
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Customer
 * 
 */
export type Customer = {
  id: number
  name: string
  viewed_name: string | null
  email: string
}

/**
 * Model Order
 * 
 */
export type Order = {
  id: number
  orderedAt: Date
  shippedAt: Date
  orderStatus: number
  customerId: number
  storeId: number
}

/**
 * Model OrderItem
 * 
 */
export type OrderItem = {
  id: number
  quantity: number
  discount: number
  orderId: number
  productId: number
}

/**
 * Model Store
 * 
 */
export type Store = {
  id: number
}

/**
 * Model Product
 * 
 */
export type Product = {
  id: number
  name: string
  brandId: number
}

/**
 * Model Stocks
 * 
 */
export type Stocks = {
  id: number
  quantity: number
  productId: number
  storeId: number
}

/**
 * Model Brand
 * 
 */
export type Brand = {
  id: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customer.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<GlobalReject>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<GlobalReject>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<GlobalReject>;

  /**
   * `prisma.store`: Exposes CRUD operations for the **Store** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.store.findMany()
    * ```
    */
  get store(): Prisma.StoreDelegate<GlobalReject>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<GlobalReject>;

  /**
   * `prisma.stocks`: Exposes CRUD operations for the **Stocks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stocks
    * const stocks = await prisma.stocks.findMany()
    * ```
    */
  get stocks(): Prisma.StocksDelegate<GlobalReject>;

  /**
   * `prisma.brand`: Exposes CRUD operations for the **Brand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brands
    * const brands = await prisma.brand.findMany()
    * ```
    */
  get brand(): Prisma.BrandDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

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
   * Prisma Client JS version: 4.11.0
   * Query Engine version: 8fde8fef4033376662cad983758335009d522acb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Customer: 'Customer',
    Order: 'Order',
    OrderItem: 'OrderItem',
    Store: 'Store',
    Product: 'Product',
    Stocks: 'Stocks',
    Brand: 'Brand'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CustomerCountOutputType
   */


  export type CustomerCountOutputType = {
    Orders: number
  }

  export type CustomerCountOutputTypeSelect = {
    Orders?: boolean
  }

  export type CustomerCountOutputTypeGetPayload<S extends boolean | null | undefined | CustomerCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CustomerCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CustomerCountOutputTypeArgs)
    ? CustomerCountOutputType 
    : S extends { select: any } & (CustomerCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CustomerCountOutputType ? CustomerCountOutputType[P] : never
  } 
      : CustomerCountOutputType




  // Custom InputTypes

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect | null
  }



  /**
   * Count Type OrderCountOutputType
   */


  export type OrderCountOutputType = {
    OrderItems: number
  }

  export type OrderCountOutputTypeSelect = {
    OrderItems?: boolean
  }

  export type OrderCountOutputTypeGetPayload<S extends boolean | null | undefined | OrderCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? OrderCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (OrderCountOutputTypeArgs)
    ? OrderCountOutputType 
    : S extends { select: any } & (OrderCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof OrderCountOutputType ? OrderCountOutputType[P] : never
  } 
      : OrderCountOutputType




  // Custom InputTypes

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect | null
  }



  /**
   * Count Type StoreCountOutputType
   */


  export type StoreCountOutputType = {
    Stocks: number
    orders: number
  }

  export type StoreCountOutputTypeSelect = {
    Stocks?: boolean
    orders?: boolean
  }

  export type StoreCountOutputTypeGetPayload<S extends boolean | null | undefined | StoreCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? StoreCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (StoreCountOutputTypeArgs)
    ? StoreCountOutputType 
    : S extends { select: any } & (StoreCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof StoreCountOutputType ? StoreCountOutputType[P] : never
  } 
      : StoreCountOutputType




  // Custom InputTypes

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the StoreCountOutputType
     */
    select?: StoreCountOutputTypeSelect | null
  }



  /**
   * Count Type ProductCountOutputType
   */


  export type ProductCountOutputType = {
    Stocks: number
    OrderItem: number
  }

  export type ProductCountOutputTypeSelect = {
    Stocks?: boolean
    OrderItem?: boolean
  }

  export type ProductCountOutputTypeGetPayload<S extends boolean | null | undefined | ProductCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProductCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ProductCountOutputTypeArgs)
    ? ProductCountOutputType 
    : S extends { select: any } & (ProductCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ProductCountOutputType ? ProductCountOutputType[P] : never
  } 
      : ProductCountOutputType




  // Custom InputTypes

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect | null
  }



  /**
   * Count Type BrandCountOutputType
   */


  export type BrandCountOutputType = {
    Product: number
  }

  export type BrandCountOutputTypeSelect = {
    Product?: boolean
  }

  export type BrandCountOutputTypeGetPayload<S extends boolean | null | undefined | BrandCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BrandCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (BrandCountOutputTypeArgs)
    ? BrandCountOutputType 
    : S extends { select: any } & (BrandCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof BrandCountOutputType ? BrandCountOutputType[P] : never
  } 
      : BrandCountOutputType




  // Custom InputTypes

  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BrandCountOutputType
     */
    select?: BrandCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Customer
   */


  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    name: string | null
    viewed_name: string | null
    email: string | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    viewed_name: string | null
    email: string | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    viewed_name: number
    email: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    viewed_name?: true
    email?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    viewed_name?: true
    email?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    viewed_name?: true
    email?: true
    _all?: true
  }

  export type CustomerAggregateArgs = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: Enumerable<CustomerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs = {
    where?: CustomerWhereInput
    orderBy?: Enumerable<CustomerOrderByWithAggregationInput>
    by: CustomerScalarFieldEnum[]
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }


  export type CustomerGroupByOutputType = {
    id: number
    name: string
    viewed_name: string | null
    email: string
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect = {
    id?: boolean
    name?: boolean
    viewed_name?: boolean
    email?: boolean
    Orders?: boolean | Customer$OrdersArgs
    _count?: boolean | CustomerCountOutputTypeArgs
  }


  export type CustomerInclude = {
    Orders?: boolean | Customer$OrdersArgs
    _count?: boolean | CustomerCountOutputTypeArgs
  }

  export type CustomerGetPayload<S extends boolean | null | undefined | CustomerArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Customer :
    S extends undefined ? never :
    S extends { include: any } & (CustomerArgs | CustomerFindManyArgs)
    ? Customer  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Orders' ? Array < OrderGetPayload<S['include'][P]>>  :
        P extends '_count' ? CustomerCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CustomerArgs | CustomerFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Orders' ? Array < OrderGetPayload<S['select'][P]>>  :
        P extends '_count' ? CustomerCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Customer ? Customer[P] : never
  } 
      : Customer


  type CustomerCountArgs = 
    Omit<CustomerFindManyArgs, 'select' | 'include'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CustomerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CustomerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Customer'> extends True ? Prisma__CustomerClient<CustomerGetPayload<T>> : Prisma__CustomerClient<CustomerGetPayload<T> | null, null>

    /**
     * Find one Customer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CustomerFindUniqueOrThrowArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CustomerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CustomerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Customer'> extends True ? Prisma__CustomerClient<CustomerGetPayload<T>> : Prisma__CustomerClient<CustomerGetPayload<T> | null, null>

    /**
     * Find the first Customer that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CustomerFindFirstOrThrowArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CustomerFindManyArgs>(
      args?: SelectSubset<T, CustomerFindManyArgs>
    ): Prisma.PrismaPromise<Array<CustomerGetPayload<T>>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
    **/
    create<T extends CustomerCreateArgs>(
      args: SelectSubset<T, CustomerCreateArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Create many Customers.
     *     @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     *     @example
     *     // Create many Customers
     *     const customer = await prisma.customer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CustomerCreateManyArgs>(
      args?: SelectSubset<T, CustomerCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
    **/
    delete<T extends CustomerDeleteArgs>(
      args: SelectSubset<T, CustomerDeleteArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CustomerUpdateArgs>(
      args: SelectSubset<T, CustomerUpdateArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CustomerDeleteManyArgs>(
      args?: SelectSubset<T, CustomerDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CustomerUpdateManyArgs>(
      args: SelectSubset<T, CustomerUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
    **/
    upsert<T extends CustomerUpsertArgs>(
      args: SelectSubset<T, CustomerUpsertArgs>
    ): Prisma__CustomerClient<CustomerGetPayload<T>>

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CustomerClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Orders<T extends Customer$OrdersArgs= {}>(args?: Subset<T, Customer$OrdersArgs>): Prisma.PrismaPromise<Array<OrderGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Customer base type for findUnique actions
   */
  export type CustomerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUnique
   */
  export interface CustomerFindUniqueArgs extends CustomerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer base type for findFirst actions
   */
  export type CustomerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: Enumerable<CustomerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: Enumerable<CustomerScalarFieldEnum>
  }

  /**
   * Customer findFirst
   */
  export interface CustomerFindFirstArgs extends CustomerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: Enumerable<CustomerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: Enumerable<CustomerScalarFieldEnum>
  }


  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: Enumerable<CustomerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: Enumerable<CustomerScalarFieldEnum>
  }


  /**
   * Customer create
   */
  export type CustomerCreateArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }


  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs = {
    /**
     * The data used to create many Customers.
     */
    data: Enumerable<CustomerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Customer update
   */
  export type CustomerUpdateArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
  }


  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }


  /**
   * Customer delete
   */
  export type CustomerDeleteArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }


  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
  }


  /**
   * Customer.Orders
   */
  export type Customer$OrdersArgs = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    where?: OrderWhereInput
    orderBy?: Enumerable<OrderOrderByWithRelationInput>
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<OrderScalarFieldEnum>
  }


  /**
   * Customer without action
   */
  export type CustomerArgs = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CustomerInclude | null
  }



  /**
   * Model Order
   */


  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    orderStatus: number | null
    customerId: number | null
    storeId: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    orderStatus: number | null
    customerId: number | null
    storeId: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    orderedAt: Date | null
    shippedAt: Date | null
    orderStatus: number | null
    customerId: number | null
    storeId: number | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    orderedAt: Date | null
    shippedAt: Date | null
    orderStatus: number | null
    customerId: number | null
    storeId: number | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    orderedAt: number
    shippedAt: number
    orderStatus: number
    customerId: number
    storeId: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    orderStatus?: true
    customerId?: true
    storeId?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    orderStatus?: true
    customerId?: true
    storeId?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    orderedAt?: true
    shippedAt?: true
    orderStatus?: true
    customerId?: true
    storeId?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    orderedAt?: true
    shippedAt?: true
    orderStatus?: true
    customerId?: true
    storeId?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    orderedAt?: true
    shippedAt?: true
    orderStatus?: true
    customerId?: true
    storeId?: true
    _all?: true
  }

  export type OrderAggregateArgs = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: Enumerable<OrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs = {
    where?: OrderWhereInput
    orderBy?: Enumerable<OrderOrderByWithAggregationInput>
    by: OrderScalarFieldEnum[]
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }


  export type OrderGroupByOutputType = {
    id: number
    orderedAt: Date
    shippedAt: Date
    orderStatus: number
    customerId: number
    storeId: number
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect = {
    id?: boolean
    orderedAt?: boolean
    shippedAt?: boolean
    orderStatus?: boolean
    customerId?: boolean
    storeId?: boolean
    customer?: boolean | CustomerArgs
    orderedFrom?: boolean | StoreArgs
    OrderItems?: boolean | Order$OrderItemsArgs
    _count?: boolean | OrderCountOutputTypeArgs
  }


  export type OrderInclude = {
    customer?: boolean | CustomerArgs
    orderedFrom?: boolean | StoreArgs
    OrderItems?: boolean | Order$OrderItemsArgs
    _count?: boolean | OrderCountOutputTypeArgs
  }

  export type OrderGetPayload<S extends boolean | null | undefined | OrderArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Order :
    S extends undefined ? never :
    S extends { include: any } & (OrderArgs | OrderFindManyArgs)
    ? Order  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'customer' ? CustomerGetPayload<S['include'][P]> :
        P extends 'orderedFrom' ? StoreGetPayload<S['include'][P]> :
        P extends 'OrderItems' ? Array < OrderItemGetPayload<S['include'][P]>>  :
        P extends '_count' ? OrderCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (OrderArgs | OrderFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'customer' ? CustomerGetPayload<S['select'][P]> :
        P extends 'orderedFrom' ? StoreGetPayload<S['select'][P]> :
        P extends 'OrderItems' ? Array < OrderItemGetPayload<S['select'][P]>>  :
        P extends '_count' ? OrderCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Order ? Order[P] : never
  } 
      : Order


  type OrderCountArgs = 
    Omit<OrderFindManyArgs, 'select' | 'include'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OrderFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Order'> extends True ? Prisma__OrderClient<OrderGetPayload<T>> : Prisma__OrderClient<OrderGetPayload<T> | null, null>

    /**
     * Find one Order that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, OrderFindUniqueOrThrowArgs>
    ): Prisma__OrderClient<OrderGetPayload<T>>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OrderFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Order'> extends True ? Prisma__OrderClient<OrderGetPayload<T>> : Prisma__OrderClient<OrderGetPayload<T> | null, null>

    /**
     * Find the first Order that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OrderFindFirstOrThrowArgs>
    ): Prisma__OrderClient<OrderGetPayload<T>>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrderFindManyArgs>(
      args?: SelectSubset<T, OrderFindManyArgs>
    ): Prisma.PrismaPromise<Array<OrderGetPayload<T>>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
    **/
    create<T extends OrderCreateArgs>(
      args: SelectSubset<T, OrderCreateArgs>
    ): Prisma__OrderClient<OrderGetPayload<T>>

    /**
     * Create many Orders.
     *     @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const order = await prisma.order.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrderCreateManyArgs>(
      args?: SelectSubset<T, OrderCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
    **/
    delete<T extends OrderDeleteArgs>(
      args: SelectSubset<T, OrderDeleteArgs>
    ): Prisma__OrderClient<OrderGetPayload<T>>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderUpdateArgs>(
      args: SelectSubset<T, OrderUpdateArgs>
    ): Prisma__OrderClient<OrderGetPayload<T>>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderDeleteManyArgs>(
      args?: SelectSubset<T, OrderDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderUpdateManyArgs>(
      args: SelectSubset<T, OrderUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
    **/
    upsert<T extends OrderUpsertArgs>(
      args: SelectSubset<T, OrderUpsertArgs>
    ): Prisma__OrderClient<OrderGetPayload<T>>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OrderClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    customer<T extends CustomerArgs= {}>(args?: Subset<T, CustomerArgs>): Prisma__CustomerClient<CustomerGetPayload<T> | Null>;

    orderedFrom<T extends StoreArgs= {}>(args?: Subset<T, StoreArgs>): Prisma__StoreClient<StoreGetPayload<T> | Null>;

    OrderItems<T extends Order$OrderItemsArgs= {}>(args?: Subset<T, Order$OrderItemsArgs>): Prisma.PrismaPromise<Array<OrderItemGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Order base type for findUnique actions
   */
  export type OrderFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUnique
   */
  export interface OrderFindUniqueArgs extends OrderFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order base type for findFirst actions
   */
  export type OrderFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: Enumerable<OrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: Enumerable<OrderScalarFieldEnum>
  }

  /**
   * Order findFirst
   */
  export interface OrderFindFirstArgs extends OrderFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: Enumerable<OrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: Enumerable<OrderScalarFieldEnum>
  }


  /**
   * Order findMany
   */
  export type OrderFindManyArgs = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: Enumerable<OrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: Enumerable<OrderScalarFieldEnum>
  }


  /**
   * Order create
   */
  export type OrderCreateArgs = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }


  /**
   * Order createMany
   */
  export type OrderCreateManyArgs = {
    /**
     * The data used to create many Orders.
     */
    data: Enumerable<OrderCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Order update
   */
  export type OrderUpdateArgs = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }


  /**
   * Order upsert
   */
  export type OrderUpsertArgs = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }


  /**
   * Order delete
   */
  export type OrderDeleteArgs = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }


  /**
   * Order.OrderItems
   */
  export type Order$OrderItemsArgs = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude | null
    where?: OrderItemWhereInput
    orderBy?: Enumerable<OrderItemOrderByWithRelationInput>
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<OrderItemScalarFieldEnum>
  }


  /**
   * Order without action
   */
  export type OrderArgs = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
  }



  /**
   * Model OrderItem
   */


  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    discount: number | null
    orderId: number | null
    productId: number | null
  }

  export type OrderItemSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    discount: number | null
    orderId: number | null
    productId: number | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: number | null
    quantity: number | null
    discount: number | null
    orderId: number | null
    productId: number | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: number | null
    quantity: number | null
    discount: number | null
    orderId: number | null
    productId: number | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    quantity: number
    discount: number
    orderId: number
    productId: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    id?: true
    quantity?: true
    discount?: true
    orderId?: true
    productId?: true
  }

  export type OrderItemSumAggregateInputType = {
    id?: true
    quantity?: true
    discount?: true
    orderId?: true
    productId?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    quantity?: true
    discount?: true
    orderId?: true
    productId?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    quantity?: true
    discount?: true
    orderId?: true
    productId?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    quantity?: true
    discount?: true
    orderId?: true
    productId?: true
    _all?: true
  }

  export type OrderItemAggregateArgs = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: Enumerable<OrderItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs = {
    where?: OrderItemWhereInput
    orderBy?: Enumerable<OrderItemOrderByWithAggregationInput>
    by: OrderItemScalarFieldEnum[]
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }


  export type OrderItemGroupByOutputType = {
    id: number
    quantity: number
    discount: number
    orderId: number
    productId: number
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect = {
    id?: boolean
    quantity?: boolean
    discount?: boolean
    orderId?: boolean
    productId?: boolean
    order?: boolean | OrderArgs
    product?: boolean | ProductArgs
  }


  export type OrderItemInclude = {
    order?: boolean | OrderArgs
    product?: boolean | ProductArgs
  }

  export type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? OrderItem :
    S extends undefined ? never :
    S extends { include: any } & (OrderItemArgs | OrderItemFindManyArgs)
    ? OrderItem  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'order' ? OrderGetPayload<S['include'][P]> :
        P extends 'product' ? ProductGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (OrderItemArgs | OrderItemFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'order' ? OrderGetPayload<S['select'][P]> :
        P extends 'product' ? ProductGetPayload<S['select'][P]> :  P extends keyof OrderItem ? OrderItem[P] : never
  } 
      : OrderItem


  type OrderItemCountArgs = 
    Omit<OrderItemFindManyArgs, 'select' | 'include'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderItemFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OrderItemFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'OrderItem'> extends True ? Prisma__OrderItemClient<OrderItemGetPayload<T>> : Prisma__OrderItemClient<OrderItemGetPayload<T> | null, null>

    /**
     * Find one OrderItem that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, OrderItemFindUniqueOrThrowArgs>
    ): Prisma__OrderItemClient<OrderItemGetPayload<T>>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderItemFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OrderItemFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'OrderItem'> extends True ? Prisma__OrderItemClient<OrderItemGetPayload<T>> : Prisma__OrderItemClient<OrderItemGetPayload<T> | null, null>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs>
    ): Prisma__OrderItemClient<OrderItemGetPayload<T>>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrderItemFindManyArgs>(
      args?: SelectSubset<T, OrderItemFindManyArgs>
    ): Prisma.PrismaPromise<Array<OrderItemGetPayload<T>>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
    **/
    create<T extends OrderItemCreateArgs>(
      args: SelectSubset<T, OrderItemCreateArgs>
    ): Prisma__OrderItemClient<OrderItemGetPayload<T>>

    /**
     * Create many OrderItems.
     *     @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     *     @example
     *     // Create many OrderItems
     *     const orderItem = await prisma.orderItem.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrderItemCreateManyArgs>(
      args?: SelectSubset<T, OrderItemCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
    **/
    delete<T extends OrderItemDeleteArgs>(
      args: SelectSubset<T, OrderItemDeleteArgs>
    ): Prisma__OrderItemClient<OrderItemGetPayload<T>>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderItemUpdateArgs>(
      args: SelectSubset<T, OrderItemUpdateArgs>
    ): Prisma__OrderItemClient<OrderItemGetPayload<T>>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderItemDeleteManyArgs>(
      args?: SelectSubset<T, OrderItemDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderItemUpdateManyArgs>(
      args: SelectSubset<T, OrderItemUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
    **/
    upsert<T extends OrderItemUpsertArgs>(
      args: SelectSubset<T, OrderItemUpsertArgs>
    ): Prisma__OrderItemClient<OrderItemGetPayload<T>>

    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
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
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OrderItemClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    order<T extends OrderArgs= {}>(args?: Subset<T, OrderArgs>): Prisma__OrderClient<OrderGetPayload<T> | Null>;

    product<T extends ProductArgs= {}>(args?: Subset<T, ProductArgs>): Prisma__ProductClient<ProductGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * OrderItem base type for findUnique actions
   */
  export type OrderItemFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUnique
   */
  export interface OrderItemFindUniqueArgs extends OrderItemFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }


  /**
   * OrderItem base type for findFirst actions
   */
  export type OrderItemFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: Enumerable<OrderItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: Enumerable<OrderItemScalarFieldEnum>
  }

  /**
   * OrderItem findFirst
   */
  export interface OrderItemFindFirstArgs extends OrderItemFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: Enumerable<OrderItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: Enumerable<OrderItemScalarFieldEnum>
  }


  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: Enumerable<OrderItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: Enumerable<OrderItemScalarFieldEnum>
  }


  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }


  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs = {
    /**
     * The data used to create many OrderItems.
     */
    data: Enumerable<OrderItemCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }


  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
  }


  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }


  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }


  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
  }


  /**
   * OrderItem without action
   */
  export type OrderItemArgs = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude | null
  }



  /**
   * Model Store
   */


  export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  export type StoreAvgAggregateOutputType = {
    id: number | null
  }

  export type StoreSumAggregateOutputType = {
    id: number | null
  }

  export type StoreMinAggregateOutputType = {
    id: number | null
  }

  export type StoreMaxAggregateOutputType = {
    id: number | null
  }

  export type StoreCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type StoreAvgAggregateInputType = {
    id?: true
  }

  export type StoreSumAggregateInputType = {
    id?: true
  }

  export type StoreMinAggregateInputType = {
    id?: true
  }

  export type StoreMaxAggregateInputType = {
    id?: true
  }

  export type StoreCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type StoreAggregateArgs = {
    /**
     * Filter which Store to aggregate.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: Enumerable<StoreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stores
    **/
    _count?: true | StoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreMaxAggregateInputType
  }

  export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
        [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore[P]>
      : GetScalarType<T[P], AggregateStore[P]>
  }




  export type StoreGroupByArgs = {
    where?: StoreWhereInput
    orderBy?: Enumerable<StoreOrderByWithAggregationInput>
    by: StoreScalarFieldEnum[]
    having?: StoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreCountAggregateInputType | true
    _avg?: StoreAvgAggregateInputType
    _sum?: StoreSumAggregateInputType
    _min?: StoreMinAggregateInputType
    _max?: StoreMaxAggregateInputType
  }


  export type StoreGroupByOutputType = {
    id: number
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  type GetStoreGroupByPayload<T extends StoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<StoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreGroupByOutputType[P]>
            : GetScalarType<T[P], StoreGroupByOutputType[P]>
        }
      >
    >


  export type StoreSelect = {
    id?: boolean
    Stocks?: boolean | Store$StocksArgs
    orders?: boolean | Store$ordersArgs
    _count?: boolean | StoreCountOutputTypeArgs
  }


  export type StoreInclude = {
    Stocks?: boolean | Store$StocksArgs
    orders?: boolean | Store$ordersArgs
    _count?: boolean | StoreCountOutputTypeArgs
  }

  export type StoreGetPayload<S extends boolean | null | undefined | StoreArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Store :
    S extends undefined ? never :
    S extends { include: any } & (StoreArgs | StoreFindManyArgs)
    ? Store  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Stocks' ? Array < StocksGetPayload<S['include'][P]>>  :
        P extends 'orders' ? Array < OrderGetPayload<S['include'][P]>>  :
        P extends '_count' ? StoreCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (StoreArgs | StoreFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Stocks' ? Array < StocksGetPayload<S['select'][P]>>  :
        P extends 'orders' ? Array < OrderGetPayload<S['select'][P]>>  :
        P extends '_count' ? StoreCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Store ? Store[P] : never
  } 
      : Store


  type StoreCountArgs = 
    Omit<StoreFindManyArgs, 'select' | 'include'> & {
      select?: StoreCountAggregateInputType | true
    }

  export interface StoreDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Store that matches the filter.
     * @param {StoreFindUniqueArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StoreFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, StoreFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Store'> extends True ? Prisma__StoreClient<StoreGetPayload<T>> : Prisma__StoreClient<StoreGetPayload<T> | null, null>

    /**
     * Find one Store that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StoreFindUniqueOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StoreFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, StoreFindUniqueOrThrowArgs>
    ): Prisma__StoreClient<StoreGetPayload<T>>

    /**
     * Find the first Store that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StoreFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, StoreFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Store'> extends True ? Prisma__StoreClient<StoreGetPayload<T>> : Prisma__StoreClient<StoreGetPayload<T> | null, null>

    /**
     * Find the first Store that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StoreFindFirstOrThrowArgs>(
      args?: SelectSubset<T, StoreFindFirstOrThrowArgs>
    ): Prisma__StoreClient<StoreGetPayload<T>>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.store.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.store.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeWithIdOnly = await prisma.store.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StoreFindManyArgs>(
      args?: SelectSubset<T, StoreFindManyArgs>
    ): Prisma.PrismaPromise<Array<StoreGetPayload<T>>>

    /**
     * Create a Store.
     * @param {StoreCreateArgs} args - Arguments to create a Store.
     * @example
     * // Create one Store
     * const Store = await prisma.store.create({
     *   data: {
     *     // ... data to create a Store
     *   }
     * })
     * 
    **/
    create<T extends StoreCreateArgs>(
      args: SelectSubset<T, StoreCreateArgs>
    ): Prisma__StoreClient<StoreGetPayload<T>>

    /**
     * Create many Stores.
     *     @param {StoreCreateManyArgs} args - Arguments to create many Stores.
     *     @example
     *     // Create many Stores
     *     const store = await prisma.store.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StoreCreateManyArgs>(
      args?: SelectSubset<T, StoreCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Store.
     * @param {StoreDeleteArgs} args - Arguments to delete one Store.
     * @example
     * // Delete one Store
     * const Store = await prisma.store.delete({
     *   where: {
     *     // ... filter to delete one Store
     *   }
     * })
     * 
    **/
    delete<T extends StoreDeleteArgs>(
      args: SelectSubset<T, StoreDeleteArgs>
    ): Prisma__StoreClient<StoreGetPayload<T>>

    /**
     * Update one Store.
     * @param {StoreUpdateArgs} args - Arguments to update one Store.
     * @example
     * // Update one Store
     * const store = await prisma.store.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StoreUpdateArgs>(
      args: SelectSubset<T, StoreUpdateArgs>
    ): Prisma__StoreClient<StoreGetPayload<T>>

    /**
     * Delete zero or more Stores.
     * @param {StoreDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.store.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StoreDeleteManyArgs>(
      args?: SelectSubset<T, StoreDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StoreUpdateManyArgs>(
      args: SelectSubset<T, StoreUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Store.
     * @param {StoreUpsertArgs} args - Arguments to update or create a Store.
     * @example
     * // Update or create a Store
     * const store = await prisma.store.upsert({
     *   create: {
     *     // ... data to create a Store
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store we want to update
     *   }
     * })
    **/
    upsert<T extends StoreUpsertArgs>(
      args: SelectSubset<T, StoreUpsertArgs>
    ): Prisma__StoreClient<StoreGetPayload<T>>

    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.store.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends StoreCountArgs>(
      args?: Subset<T, StoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoreAggregateArgs>(args: Subset<T, StoreAggregateArgs>): Prisma.PrismaPromise<GetStoreAggregateType<T>>

    /**
     * Group by Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreGroupByArgs} args - Group by arguments.
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
      T extends StoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreGroupByArgs['orderBy'] }
        : { orderBy?: StoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, StoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Store.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__StoreClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Stocks<T extends Store$StocksArgs= {}>(args?: Subset<T, Store$StocksArgs>): Prisma.PrismaPromise<Array<StocksGetPayload<T>>| Null>;

    orders<T extends Store$ordersArgs= {}>(args?: Subset<T, Store$ordersArgs>): Prisma.PrismaPromise<Array<OrderGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Store base type for findUnique actions
   */
  export type StoreFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findUnique
   */
  export interface StoreFindUniqueArgs extends StoreFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Store findUniqueOrThrow
   */
  export type StoreFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }


  /**
   * Store base type for findFirst actions
   */
  export type StoreFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: Enumerable<StoreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: Enumerable<StoreScalarFieldEnum>
  }

  /**
   * Store findFirst
   */
  export interface StoreFindFirstArgs extends StoreFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Store findFirstOrThrow
   */
  export type StoreFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: Enumerable<StoreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: Enumerable<StoreScalarFieldEnum>
  }


  /**
   * Store findMany
   */
  export type StoreFindManyArgs = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude | null
    /**
     * Filter, which Stores to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: Enumerable<StoreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    distinct?: Enumerable<StoreScalarFieldEnum>
  }


  /**
   * Store create
   */
  export type StoreCreateArgs = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude | null
    /**
     * The data needed to create a Store.
     */
    data: XOR<StoreCreateInput, StoreUncheckedCreateInput>
  }


  /**
   * Store createMany
   */
  export type StoreCreateManyArgs = {
    /**
     * The data used to create many Stores.
     */
    data: Enumerable<StoreCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Store update
   */
  export type StoreUpdateArgs = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude | null
    /**
     * The data needed to update a Store.
     */
    data: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
    /**
     * Choose, which Store to update.
     */
    where: StoreWhereUniqueInput
  }


  /**
   * Store updateMany
   */
  export type StoreUpdateManyArgs = {
    /**
     * The data used to update Stores.
     */
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoreWhereInput
  }


  /**
   * Store upsert
   */
  export type StoreUpsertArgs = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude | null
    /**
     * The filter to search for the Store to update in case it exists.
     */
    where: StoreWhereUniqueInput
    /**
     * In case the Store found by the `where` argument doesn't exist, create a new Store with this data.
     */
    create: XOR<StoreCreateInput, StoreUncheckedCreateInput>
    /**
     * In case the Store was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
  }


  /**
   * Store delete
   */
  export type StoreDeleteArgs = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude | null
    /**
     * Filter which Store to delete.
     */
    where: StoreWhereUniqueInput
  }


  /**
   * Store deleteMany
   */
  export type StoreDeleteManyArgs = {
    /**
     * Filter which Stores to delete
     */
    where?: StoreWhereInput
  }


  /**
   * Store.Stocks
   */
  export type Store$StocksArgs = {
    /**
     * Select specific fields to fetch from the Stocks
     */
    select?: StocksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StocksInclude | null
    where?: StocksWhereInput
    orderBy?: Enumerable<StocksOrderByWithRelationInput>
    cursor?: StocksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<StocksScalarFieldEnum>
  }


  /**
   * Store.orders
   */
  export type Store$ordersArgs = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude | null
    where?: OrderWhereInput
    orderBy?: Enumerable<OrderOrderByWithRelationInput>
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<OrderScalarFieldEnum>
  }


  /**
   * Store without action
   */
  export type StoreArgs = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude | null
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
    brandId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    brandId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    brandId: number | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    brandId: number | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    brandId: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    brandId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    brandId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    brandId?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    brandId?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    brandId?: true
    _all?: true
  }

  export type ProductAggregateArgs = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
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




  export type ProductGroupByArgs = {
    where?: ProductWhereInput
    orderBy?: Enumerable<ProductOrderByWithAggregationInput>
    by: ProductScalarFieldEnum[]
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
    brandId: number
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect = {
    id?: boolean
    name?: boolean
    brandId?: boolean
    brand?: boolean | BrandArgs
    Stocks?: boolean | Product$StocksArgs
    OrderItem?: boolean | Product$OrderItemArgs
    _count?: boolean | ProductCountOutputTypeArgs
  }


  export type ProductInclude = {
    brand?: boolean | BrandArgs
    Stocks?: boolean | Product$StocksArgs
    OrderItem?: boolean | Product$OrderItemArgs
    _count?: boolean | ProductCountOutputTypeArgs
  }

  export type ProductGetPayload<S extends boolean | null | undefined | ProductArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Product :
    S extends undefined ? never :
    S extends { include: any } & (ProductArgs | ProductFindManyArgs)
    ? Product  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'brand' ? BrandGetPayload<S['include'][P]> :
        P extends 'Stocks' ? Array < StocksGetPayload<S['include'][P]>>  :
        P extends 'OrderItem' ? Array < OrderItemGetPayload<S['include'][P]>>  :
        P extends '_count' ? ProductCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ProductArgs | ProductFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'brand' ? BrandGetPayload<S['select'][P]> :
        P extends 'Stocks' ? Array < StocksGetPayload<S['select'][P]>>  :
        P extends 'OrderItem' ? Array < OrderItemGetPayload<S['select'][P]>>  :
        P extends '_count' ? ProductCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Product ? Product[P] : never
  } 
      : Product


  type ProductCountArgs = 
    Omit<ProductFindManyArgs, 'select' | 'include'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

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
    **/
    findUnique<T extends ProductFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProductFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Product'> extends True ? Prisma__ProductClient<ProductGetPayload<T>> : Prisma__ProductClient<ProductGetPayload<T> | null, null>

    /**
     * Find one Product that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

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
    **/
    findFirst<T extends ProductFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProductFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Product'> extends True ? Prisma__ProductClient<ProductGetPayload<T>> : Prisma__ProductClient<ProductGetPayload<T> | null, null>

    /**
     * Find the first Product that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends ProductFindManyArgs>(
      args?: SelectSubset<T, ProductFindManyArgs>
    ): Prisma.PrismaPromise<Array<ProductGetPayload<T>>>

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
    **/
    create<T extends ProductCreateArgs>(
      args: SelectSubset<T, ProductCreateArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Create many Products.
     *     @param {ProductCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductCreateManyArgs>(
      args?: SelectSubset<T, ProductCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends ProductDeleteArgs>(
      args: SelectSubset<T, ProductDeleteArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

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
    **/
    update<T extends ProductUpdateArgs>(
      args: SelectSubset<T, ProductUpdateArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

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
    **/
    deleteMany<T extends ProductDeleteManyArgs>(
      args?: SelectSubset<T, ProductDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends ProductUpdateManyArgs>(
      args: SelectSubset<T, ProductUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends ProductUpsertArgs>(
      args: SelectSubset<T, ProductUpsertArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

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
      T extends _Record<'select', any>
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
      ByFields extends TupleToUnion<T['by']>,
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

  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProductClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    brand<T extends BrandArgs= {}>(args?: Subset<T, BrandArgs>): Prisma__BrandClient<BrandGetPayload<T> | Null>;

    Stocks<T extends Product$StocksArgs= {}>(args?: Subset<T, Product$StocksArgs>): Prisma.PrismaPromise<Array<StocksGetPayload<T>>| Null>;

    OrderItem<T extends Product$OrderItemArgs= {}>(args?: Subset<T, Product$OrderItemArgs>): Prisma.PrismaPromise<Array<OrderItemGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Product base type for findUnique actions
   */
  export type ProductFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUnique
   */
  export interface ProductFindUniqueArgs extends ProductFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product base type for findFirst actions
   */
  export type ProductFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
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
    distinct?: Enumerable<ProductScalarFieldEnum>
  }

  /**
   * Product findFirst
   */
  export interface ProductFindFirstArgs extends ProductFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
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
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Product findMany
   */
  export type ProductFindManyArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
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
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Product create
   */
  export type ProductCreateArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }


  /**
   * Product createMany
   */
  export type ProductCreateManyArgs = {
    /**
     * The data used to create many Products.
     */
    data: Enumerable<ProductCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Product update
   */
  export type ProductUpdateArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs = {
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
  export type ProductUpsertArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
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
  }


  /**
   * Product delete
   */
  export type ProductDeleteArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }


  /**
   * Product.Stocks
   */
  export type Product$StocksArgs = {
    /**
     * Select specific fields to fetch from the Stocks
     */
    select?: StocksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StocksInclude | null
    where?: StocksWhereInput
    orderBy?: Enumerable<StocksOrderByWithRelationInput>
    cursor?: StocksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<StocksScalarFieldEnum>
  }


  /**
   * Product.OrderItem
   */
  export type Product$OrderItemArgs = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude | null
    where?: OrderItemWhereInput
    orderBy?: Enumerable<OrderItemOrderByWithRelationInput>
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<OrderItemScalarFieldEnum>
  }


  /**
   * Product without action
   */
  export type ProductArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
  }



  /**
   * Model Stocks
   */


  export type AggregateStocks = {
    _count: StocksCountAggregateOutputType | null
    _avg: StocksAvgAggregateOutputType | null
    _sum: StocksSumAggregateOutputType | null
    _min: StocksMinAggregateOutputType | null
    _max: StocksMaxAggregateOutputType | null
  }

  export type StocksAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    productId: number | null
    storeId: number | null
  }

  export type StocksSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    productId: number | null
    storeId: number | null
  }

  export type StocksMinAggregateOutputType = {
    id: number | null
    quantity: number | null
    productId: number | null
    storeId: number | null
  }

  export type StocksMaxAggregateOutputType = {
    id: number | null
    quantity: number | null
    productId: number | null
    storeId: number | null
  }

  export type StocksCountAggregateOutputType = {
    id: number
    quantity: number
    productId: number
    storeId: number
    _all: number
  }


  export type StocksAvgAggregateInputType = {
    id?: true
    quantity?: true
    productId?: true
    storeId?: true
  }

  export type StocksSumAggregateInputType = {
    id?: true
    quantity?: true
    productId?: true
    storeId?: true
  }

  export type StocksMinAggregateInputType = {
    id?: true
    quantity?: true
    productId?: true
    storeId?: true
  }

  export type StocksMaxAggregateInputType = {
    id?: true
    quantity?: true
    productId?: true
    storeId?: true
  }

  export type StocksCountAggregateInputType = {
    id?: true
    quantity?: true
    productId?: true
    storeId?: true
    _all?: true
  }

  export type StocksAggregateArgs = {
    /**
     * Filter which Stocks to aggregate.
     */
    where?: StocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: Enumerable<StocksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stocks
    **/
    _count?: true | StocksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StocksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StocksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StocksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StocksMaxAggregateInputType
  }

  export type GetStocksAggregateType<T extends StocksAggregateArgs> = {
        [P in keyof T & keyof AggregateStocks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStocks[P]>
      : GetScalarType<T[P], AggregateStocks[P]>
  }




  export type StocksGroupByArgs = {
    where?: StocksWhereInput
    orderBy?: Enumerable<StocksOrderByWithAggregationInput>
    by: StocksScalarFieldEnum[]
    having?: StocksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StocksCountAggregateInputType | true
    _avg?: StocksAvgAggregateInputType
    _sum?: StocksSumAggregateInputType
    _min?: StocksMinAggregateInputType
    _max?: StocksMaxAggregateInputType
  }


  export type StocksGroupByOutputType = {
    id: number
    quantity: number
    productId: number
    storeId: number
    _count: StocksCountAggregateOutputType | null
    _avg: StocksAvgAggregateOutputType | null
    _sum: StocksSumAggregateOutputType | null
    _min: StocksMinAggregateOutputType | null
    _max: StocksMaxAggregateOutputType | null
  }

  type GetStocksGroupByPayload<T extends StocksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<StocksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StocksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StocksGroupByOutputType[P]>
            : GetScalarType<T[P], StocksGroupByOutputType[P]>
        }
      >
    >


  export type StocksSelect = {
    id?: boolean
    quantity?: boolean
    productId?: boolean
    storeId?: boolean
    product?: boolean | ProductArgs
    store?: boolean | StoreArgs
  }


  export type StocksInclude = {
    product?: boolean | ProductArgs
    store?: boolean | StoreArgs
  }

  export type StocksGetPayload<S extends boolean | null | undefined | StocksArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Stocks :
    S extends undefined ? never :
    S extends { include: any } & (StocksArgs | StocksFindManyArgs)
    ? Stocks  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'product' ? ProductGetPayload<S['include'][P]> :
        P extends 'store' ? StoreGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (StocksArgs | StocksFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'product' ? ProductGetPayload<S['select'][P]> :
        P extends 'store' ? StoreGetPayload<S['select'][P]> :  P extends keyof Stocks ? Stocks[P] : never
  } 
      : Stocks


  type StocksCountArgs = 
    Omit<StocksFindManyArgs, 'select' | 'include'> & {
      select?: StocksCountAggregateInputType | true
    }

  export interface StocksDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Stocks that matches the filter.
     * @param {StocksFindUniqueArgs} args - Arguments to find a Stocks
     * @example
     * // Get one Stocks
     * const stocks = await prisma.stocks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StocksFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, StocksFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Stocks'> extends True ? Prisma__StocksClient<StocksGetPayload<T>> : Prisma__StocksClient<StocksGetPayload<T> | null, null>

    /**
     * Find one Stocks that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StocksFindUniqueOrThrowArgs} args - Arguments to find a Stocks
     * @example
     * // Get one Stocks
     * const stocks = await prisma.stocks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StocksFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, StocksFindUniqueOrThrowArgs>
    ): Prisma__StocksClient<StocksGetPayload<T>>

    /**
     * Find the first Stocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StocksFindFirstArgs} args - Arguments to find a Stocks
     * @example
     * // Get one Stocks
     * const stocks = await prisma.stocks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StocksFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, StocksFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Stocks'> extends True ? Prisma__StocksClient<StocksGetPayload<T>> : Prisma__StocksClient<StocksGetPayload<T> | null, null>

    /**
     * Find the first Stocks that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StocksFindFirstOrThrowArgs} args - Arguments to find a Stocks
     * @example
     * // Get one Stocks
     * const stocks = await prisma.stocks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StocksFindFirstOrThrowArgs>(
      args?: SelectSubset<T, StocksFindFirstOrThrowArgs>
    ): Prisma__StocksClient<StocksGetPayload<T>>

    /**
     * Find zero or more Stocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StocksFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stocks
     * const stocks = await prisma.stocks.findMany()
     * 
     * // Get first 10 Stocks
     * const stocks = await prisma.stocks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stocksWithIdOnly = await prisma.stocks.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StocksFindManyArgs>(
      args?: SelectSubset<T, StocksFindManyArgs>
    ): Prisma.PrismaPromise<Array<StocksGetPayload<T>>>

    /**
     * Create a Stocks.
     * @param {StocksCreateArgs} args - Arguments to create a Stocks.
     * @example
     * // Create one Stocks
     * const Stocks = await prisma.stocks.create({
     *   data: {
     *     // ... data to create a Stocks
     *   }
     * })
     * 
    **/
    create<T extends StocksCreateArgs>(
      args: SelectSubset<T, StocksCreateArgs>
    ): Prisma__StocksClient<StocksGetPayload<T>>

    /**
     * Create many Stocks.
     *     @param {StocksCreateManyArgs} args - Arguments to create many Stocks.
     *     @example
     *     // Create many Stocks
     *     const stocks = await prisma.stocks.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StocksCreateManyArgs>(
      args?: SelectSubset<T, StocksCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Stocks.
     * @param {StocksDeleteArgs} args - Arguments to delete one Stocks.
     * @example
     * // Delete one Stocks
     * const Stocks = await prisma.stocks.delete({
     *   where: {
     *     // ... filter to delete one Stocks
     *   }
     * })
     * 
    **/
    delete<T extends StocksDeleteArgs>(
      args: SelectSubset<T, StocksDeleteArgs>
    ): Prisma__StocksClient<StocksGetPayload<T>>

    /**
     * Update one Stocks.
     * @param {StocksUpdateArgs} args - Arguments to update one Stocks.
     * @example
     * // Update one Stocks
     * const stocks = await prisma.stocks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StocksUpdateArgs>(
      args: SelectSubset<T, StocksUpdateArgs>
    ): Prisma__StocksClient<StocksGetPayload<T>>

    /**
     * Delete zero or more Stocks.
     * @param {StocksDeleteManyArgs} args - Arguments to filter Stocks to delete.
     * @example
     * // Delete a few Stocks
     * const { count } = await prisma.stocks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StocksDeleteManyArgs>(
      args?: SelectSubset<T, StocksDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StocksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stocks
     * const stocks = await prisma.stocks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StocksUpdateManyArgs>(
      args: SelectSubset<T, StocksUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Stocks.
     * @param {StocksUpsertArgs} args - Arguments to update or create a Stocks.
     * @example
     * // Update or create a Stocks
     * const stocks = await prisma.stocks.upsert({
     *   create: {
     *     // ... data to create a Stocks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stocks we want to update
     *   }
     * })
    **/
    upsert<T extends StocksUpsertArgs>(
      args: SelectSubset<T, StocksUpsertArgs>
    ): Prisma__StocksClient<StocksGetPayload<T>>

    /**
     * Count the number of Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StocksCountArgs} args - Arguments to filter Stocks to count.
     * @example
     * // Count the number of Stocks
     * const count = await prisma.stocks.count({
     *   where: {
     *     // ... the filter for the Stocks we want to count
     *   }
     * })
    **/
    count<T extends StocksCountArgs>(
      args?: Subset<T, StocksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StocksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StocksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StocksAggregateArgs>(args: Subset<T, StocksAggregateArgs>): Prisma.PrismaPromise<GetStocksAggregateType<T>>

    /**
     * Group by Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StocksGroupByArgs} args - Group by arguments.
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
      T extends StocksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StocksGroupByArgs['orderBy'] }
        : { orderBy?: StocksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, StocksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStocksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Stocks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__StocksClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    product<T extends ProductArgs= {}>(args?: Subset<T, ProductArgs>): Prisma__ProductClient<ProductGetPayload<T> | Null>;

    store<T extends StoreArgs= {}>(args?: Subset<T, StoreArgs>): Prisma__StoreClient<StoreGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Stocks base type for findUnique actions
   */
  export type StocksFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Stocks
     */
    select?: StocksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StocksInclude | null
    /**
     * Filter, which Stocks to fetch.
     */
    where: StocksWhereUniqueInput
  }

  /**
   * Stocks findUnique
   */
  export interface StocksFindUniqueArgs extends StocksFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Stocks findUniqueOrThrow
   */
  export type StocksFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Stocks
     */
    select?: StocksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StocksInclude | null
    /**
     * Filter, which Stocks to fetch.
     */
    where: StocksWhereUniqueInput
  }


  /**
   * Stocks base type for findFirst actions
   */
  export type StocksFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Stocks
     */
    select?: StocksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StocksInclude | null
    /**
     * Filter, which Stocks to fetch.
     */
    where?: StocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: Enumerable<StocksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stocks.
     */
    cursor?: StocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stocks.
     */
    distinct?: Enumerable<StocksScalarFieldEnum>
  }

  /**
   * Stocks findFirst
   */
  export interface StocksFindFirstArgs extends StocksFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Stocks findFirstOrThrow
   */
  export type StocksFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Stocks
     */
    select?: StocksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StocksInclude | null
    /**
     * Filter, which Stocks to fetch.
     */
    where?: StocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: Enumerable<StocksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stocks.
     */
    cursor?: StocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stocks.
     */
    distinct?: Enumerable<StocksScalarFieldEnum>
  }


  /**
   * Stocks findMany
   */
  export type StocksFindManyArgs = {
    /**
     * Select specific fields to fetch from the Stocks
     */
    select?: StocksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StocksInclude | null
    /**
     * Filter, which Stocks to fetch.
     */
    where?: StocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: Enumerable<StocksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stocks.
     */
    cursor?: StocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    distinct?: Enumerable<StocksScalarFieldEnum>
  }


  /**
   * Stocks create
   */
  export type StocksCreateArgs = {
    /**
     * Select specific fields to fetch from the Stocks
     */
    select?: StocksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StocksInclude | null
    /**
     * The data needed to create a Stocks.
     */
    data: XOR<StocksCreateInput, StocksUncheckedCreateInput>
  }


  /**
   * Stocks createMany
   */
  export type StocksCreateManyArgs = {
    /**
     * The data used to create many Stocks.
     */
    data: Enumerable<StocksCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Stocks update
   */
  export type StocksUpdateArgs = {
    /**
     * Select specific fields to fetch from the Stocks
     */
    select?: StocksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StocksInclude | null
    /**
     * The data needed to update a Stocks.
     */
    data: XOR<StocksUpdateInput, StocksUncheckedUpdateInput>
    /**
     * Choose, which Stocks to update.
     */
    where: StocksWhereUniqueInput
  }


  /**
   * Stocks updateMany
   */
  export type StocksUpdateManyArgs = {
    /**
     * The data used to update Stocks.
     */
    data: XOR<StocksUpdateManyMutationInput, StocksUncheckedUpdateManyInput>
    /**
     * Filter which Stocks to update
     */
    where?: StocksWhereInput
  }


  /**
   * Stocks upsert
   */
  export type StocksUpsertArgs = {
    /**
     * Select specific fields to fetch from the Stocks
     */
    select?: StocksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StocksInclude | null
    /**
     * The filter to search for the Stocks to update in case it exists.
     */
    where: StocksWhereUniqueInput
    /**
     * In case the Stocks found by the `where` argument doesn't exist, create a new Stocks with this data.
     */
    create: XOR<StocksCreateInput, StocksUncheckedCreateInput>
    /**
     * In case the Stocks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StocksUpdateInput, StocksUncheckedUpdateInput>
  }


  /**
   * Stocks delete
   */
  export type StocksDeleteArgs = {
    /**
     * Select specific fields to fetch from the Stocks
     */
    select?: StocksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StocksInclude | null
    /**
     * Filter which Stocks to delete.
     */
    where: StocksWhereUniqueInput
  }


  /**
   * Stocks deleteMany
   */
  export type StocksDeleteManyArgs = {
    /**
     * Filter which Stocks to delete
     */
    where?: StocksWhereInput
  }


  /**
   * Stocks without action
   */
  export type StocksArgs = {
    /**
     * Select specific fields to fetch from the Stocks
     */
    select?: StocksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StocksInclude | null
  }



  /**
   * Model Brand
   */


  export type AggregateBrand = {
    _count: BrandCountAggregateOutputType | null
    _avg: BrandAvgAggregateOutputType | null
    _sum: BrandSumAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  export type BrandAvgAggregateOutputType = {
    id: number | null
  }

  export type BrandSumAggregateOutputType = {
    id: number | null
  }

  export type BrandMinAggregateOutputType = {
    id: number | null
  }

  export type BrandMaxAggregateOutputType = {
    id: number | null
  }

  export type BrandCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type BrandAvgAggregateInputType = {
    id?: true
  }

  export type BrandSumAggregateInputType = {
    id?: true
  }

  export type BrandMinAggregateInputType = {
    id?: true
  }

  export type BrandMaxAggregateInputType = {
    id?: true
  }

  export type BrandCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type BrandAggregateArgs = {
    /**
     * Filter which Brand to aggregate.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: Enumerable<BrandOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brands
    **/
    _count?: true | BrandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BrandAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BrandSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandMaxAggregateInputType
  }

  export type GetBrandAggregateType<T extends BrandAggregateArgs> = {
        [P in keyof T & keyof AggregateBrand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrand[P]>
      : GetScalarType<T[P], AggregateBrand[P]>
  }




  export type BrandGroupByArgs = {
    where?: BrandWhereInput
    orderBy?: Enumerable<BrandOrderByWithAggregationInput>
    by: BrandScalarFieldEnum[]
    having?: BrandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandCountAggregateInputType | true
    _avg?: BrandAvgAggregateInputType
    _sum?: BrandSumAggregateInputType
    _min?: BrandMinAggregateInputType
    _max?: BrandMaxAggregateInputType
  }


  export type BrandGroupByOutputType = {
    id: number
    _count: BrandCountAggregateOutputType | null
    _avg: BrandAvgAggregateOutputType | null
    _sum: BrandSumAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  type GetBrandGroupByPayload<T extends BrandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BrandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandGroupByOutputType[P]>
            : GetScalarType<T[P], BrandGroupByOutputType[P]>
        }
      >
    >


  export type BrandSelect = {
    id?: boolean
    Product?: boolean | Brand$ProductArgs
    _count?: boolean | BrandCountOutputTypeArgs
  }


  export type BrandInclude = {
    Product?: boolean | Brand$ProductArgs
    _count?: boolean | BrandCountOutputTypeArgs
  }

  export type BrandGetPayload<S extends boolean | null | undefined | BrandArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Brand :
    S extends undefined ? never :
    S extends { include: any } & (BrandArgs | BrandFindManyArgs)
    ? Brand  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Product' ? Array < ProductGetPayload<S['include'][P]>>  :
        P extends '_count' ? BrandCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BrandArgs | BrandFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Product' ? Array < ProductGetPayload<S['select'][P]>>  :
        P extends '_count' ? BrandCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Brand ? Brand[P] : never
  } 
      : Brand


  type BrandCountArgs = 
    Omit<BrandFindManyArgs, 'select' | 'include'> & {
      select?: BrandCountAggregateInputType | true
    }

  export interface BrandDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Brand that matches the filter.
     * @param {BrandFindUniqueArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BrandFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BrandFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Brand'> extends True ? Prisma__BrandClient<BrandGetPayload<T>> : Prisma__BrandClient<BrandGetPayload<T> | null, null>

    /**
     * Find one Brand that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BrandFindUniqueOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BrandFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BrandFindUniqueOrThrowArgs>
    ): Prisma__BrandClient<BrandGetPayload<T>>

    /**
     * Find the first Brand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BrandFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BrandFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Brand'> extends True ? Prisma__BrandClient<BrandGetPayload<T>> : Prisma__BrandClient<BrandGetPayload<T> | null, null>

    /**
     * Find the first Brand that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BrandFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BrandFindFirstOrThrowArgs>
    ): Prisma__BrandClient<BrandGetPayload<T>>

    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brand.findMany()
     * 
     * // Get first 10 Brands
     * const brands = await prisma.brand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandWithIdOnly = await prisma.brand.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BrandFindManyArgs>(
      args?: SelectSubset<T, BrandFindManyArgs>
    ): Prisma.PrismaPromise<Array<BrandGetPayload<T>>>

    /**
     * Create a Brand.
     * @param {BrandCreateArgs} args - Arguments to create a Brand.
     * @example
     * // Create one Brand
     * const Brand = await prisma.brand.create({
     *   data: {
     *     // ... data to create a Brand
     *   }
     * })
     * 
    **/
    create<T extends BrandCreateArgs>(
      args: SelectSubset<T, BrandCreateArgs>
    ): Prisma__BrandClient<BrandGetPayload<T>>

    /**
     * Create many Brands.
     *     @param {BrandCreateManyArgs} args - Arguments to create many Brands.
     *     @example
     *     // Create many Brands
     *     const brand = await prisma.brand.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BrandCreateManyArgs>(
      args?: SelectSubset<T, BrandCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Brand.
     * @param {BrandDeleteArgs} args - Arguments to delete one Brand.
     * @example
     * // Delete one Brand
     * const Brand = await prisma.brand.delete({
     *   where: {
     *     // ... filter to delete one Brand
     *   }
     * })
     * 
    **/
    delete<T extends BrandDeleteArgs>(
      args: SelectSubset<T, BrandDeleteArgs>
    ): Prisma__BrandClient<BrandGetPayload<T>>

    /**
     * Update one Brand.
     * @param {BrandUpdateArgs} args - Arguments to update one Brand.
     * @example
     * // Update one Brand
     * const brand = await prisma.brand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BrandUpdateArgs>(
      args: SelectSubset<T, BrandUpdateArgs>
    ): Prisma__BrandClient<BrandGetPayload<T>>

    /**
     * Delete zero or more Brands.
     * @param {BrandDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BrandDeleteManyArgs>(
      args?: SelectSubset<T, BrandDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BrandUpdateManyArgs>(
      args: SelectSubset<T, BrandUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Brand.
     * @param {BrandUpsertArgs} args - Arguments to update or create a Brand.
     * @example
     * // Update or create a Brand
     * const brand = await prisma.brand.upsert({
     *   create: {
     *     // ... data to create a Brand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brand we want to update
     *   }
     * })
    **/
    upsert<T extends BrandUpsertArgs>(
      args: SelectSubset<T, BrandUpsertArgs>
    ): Prisma__BrandClient<BrandGetPayload<T>>

    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brand.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
    **/
    count<T extends BrandCountArgs>(
      args?: Subset<T, BrandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BrandAggregateArgs>(args: Subset<T, BrandAggregateArgs>): Prisma.PrismaPromise<GetBrandAggregateType<T>>

    /**
     * Group by Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandGroupByArgs} args - Group by arguments.
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
      T extends BrandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandGroupByArgs['orderBy'] }
        : { orderBy?: BrandGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BrandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Brand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BrandClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Product<T extends Brand$ProductArgs= {}>(args?: Subset<T, Brand$ProductArgs>): Prisma.PrismaPromise<Array<ProductGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Brand base type for findUnique actions
   */
  export type BrandFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findUnique
   */
  export interface BrandFindUniqueArgs extends BrandFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Brand findUniqueOrThrow
   */
  export type BrandFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }


  /**
   * Brand base type for findFirst actions
   */
  export type BrandFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: Enumerable<BrandOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: Enumerable<BrandScalarFieldEnum>
  }

  /**
   * Brand findFirst
   */
  export interface BrandFindFirstArgs extends BrandFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Brand findFirstOrThrow
   */
  export type BrandFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: Enumerable<BrandOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: Enumerable<BrandScalarFieldEnum>
  }


  /**
   * Brand findMany
   */
  export type BrandFindManyArgs = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: Enumerable<BrandOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    distinct?: Enumerable<BrandScalarFieldEnum>
  }


  /**
   * Brand create
   */
  export type BrandCreateArgs = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude | null
    /**
     * The data needed to create a Brand.
     */
    data: XOR<BrandCreateInput, BrandUncheckedCreateInput>
  }


  /**
   * Brand createMany
   */
  export type BrandCreateManyArgs = {
    /**
     * The data used to create many Brands.
     */
    data: Enumerable<BrandCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Brand update
   */
  export type BrandUpdateArgs = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude | null
    /**
     * The data needed to update a Brand.
     */
    data: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
    /**
     * Choose, which Brand to update.
     */
    where: BrandWhereUniqueInput
  }


  /**
   * Brand updateMany
   */
  export type BrandUpdateManyArgs = {
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
  }


  /**
   * Brand upsert
   */
  export type BrandUpsertArgs = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude | null
    /**
     * The filter to search for the Brand to update in case it exists.
     */
    where: BrandWhereUniqueInput
    /**
     * In case the Brand found by the `where` argument doesn't exist, create a new Brand with this data.
     */
    create: XOR<BrandCreateInput, BrandUncheckedCreateInput>
    /**
     * In case the Brand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
  }


  /**
   * Brand delete
   */
  export type BrandDeleteArgs = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude | null
    /**
     * Filter which Brand to delete.
     */
    where: BrandWhereUniqueInput
  }


  /**
   * Brand deleteMany
   */
  export type BrandDeleteManyArgs = {
    /**
     * Filter which Brands to delete
     */
    where?: BrandWhereInput
  }


  /**
   * Brand.Product
   */
  export type Brand$ProductArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude | null
    where?: ProductWhereInput
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Brand without action
   */
  export type BrandArgs = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BrandInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const BrandScalarFieldEnum: {
    id: 'id'
  };

  export type BrandScalarFieldEnum = (typeof BrandScalarFieldEnum)[keyof typeof BrandScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    viewed_name: 'viewed_name',
    email: 'email'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    discount: 'discount',
    orderId: 'orderId',
    productId: 'productId'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    orderedAt: 'orderedAt',
    shippedAt: 'shippedAt',
    orderStatus: 'orderStatus',
    customerId: 'customerId',
    storeId: 'storeId'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    brandId: 'brandId'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const StocksScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    productId: 'productId',
    storeId: 'storeId'
  };

  export type StocksScalarFieldEnum = (typeof StocksScalarFieldEnum)[keyof typeof StocksScalarFieldEnum]


  export const StoreScalarFieldEnum: {
    id: 'id'
  };

  export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type CustomerWhereInput = {
    AND?: Enumerable<CustomerWhereInput>
    OR?: Enumerable<CustomerWhereInput>
    NOT?: Enumerable<CustomerWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    viewed_name?: StringNullableFilter | string | null
    email?: StringFilter | string
    Orders?: OrderListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    viewed_name?: SortOrder
    email?: SortOrder
    Orders?: OrderOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    viewed_name?: SortOrder
    email?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CustomerScalarWhereWithAggregatesInput>
    OR?: Enumerable<CustomerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CustomerScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    viewed_name?: StringNullableWithAggregatesFilter | string | null
    email?: StringWithAggregatesFilter | string
  }

  export type OrderWhereInput = {
    AND?: Enumerable<OrderWhereInput>
    OR?: Enumerable<OrderWhereInput>
    NOT?: Enumerable<OrderWhereInput>
    id?: IntFilter | number
    orderedAt?: DateTimeFilter | Date | string
    shippedAt?: DateTimeFilter | Date | string
    orderStatus?: IntFilter | number
    customerId?: IntFilter | number
    storeId?: IntFilter | number
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    orderedFrom?: XOR<StoreRelationFilter, StoreWhereInput>
    OrderItems?: OrderItemListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    orderedAt?: SortOrder
    shippedAt?: SortOrder
    orderStatus?: SortOrder
    customerId?: SortOrder
    storeId?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    orderedFrom?: StoreOrderByWithRelationInput
    OrderItems?: OrderItemOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = {
    id?: number
  }

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    orderedAt?: SortOrder
    shippedAt?: SortOrder
    orderStatus?: SortOrder
    customerId?: SortOrder
    storeId?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OrderScalarWhereWithAggregatesInput>
    OR?: Enumerable<OrderScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OrderScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    orderedAt?: DateTimeWithAggregatesFilter | Date | string
    shippedAt?: DateTimeWithAggregatesFilter | Date | string
    orderStatus?: IntWithAggregatesFilter | number
    customerId?: IntWithAggregatesFilter | number
    storeId?: IntWithAggregatesFilter | number
  }

  export type OrderItemWhereInput = {
    AND?: Enumerable<OrderItemWhereInput>
    OR?: Enumerable<OrderItemWhereInput>
    NOT?: Enumerable<OrderItemWhereInput>
    id?: IntFilter | number
    quantity?: IntFilter | number
    discount?: IntFilter | number
    orderId?: IntFilter | number
    productId?: IntFilter | number
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    discount?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    order?: OrderOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type OrderItemWhereUniqueInput = {
    id?: number
  }

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    discount?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OrderItemScalarWhereWithAggregatesInput>
    OR?: Enumerable<OrderItemScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OrderItemScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    quantity?: IntWithAggregatesFilter | number
    discount?: IntWithAggregatesFilter | number
    orderId?: IntWithAggregatesFilter | number
    productId?: IntWithAggregatesFilter | number
  }

  export type StoreWhereInput = {
    AND?: Enumerable<StoreWhereInput>
    OR?: Enumerable<StoreWhereInput>
    NOT?: Enumerable<StoreWhereInput>
    id?: IntFilter | number
    Stocks?: StocksListRelationFilter
    orders?: OrderListRelationFilter
  }

  export type StoreOrderByWithRelationInput = {
    id?: SortOrder
    Stocks?: StocksOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type StoreWhereUniqueInput = {
    id?: number
  }

  export type StoreOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: StoreCountOrderByAggregateInput
    _avg?: StoreAvgOrderByAggregateInput
    _max?: StoreMaxOrderByAggregateInput
    _min?: StoreMinOrderByAggregateInput
    _sum?: StoreSumOrderByAggregateInput
  }

  export type StoreScalarWhereWithAggregatesInput = {
    AND?: Enumerable<StoreScalarWhereWithAggregatesInput>
    OR?: Enumerable<StoreScalarWhereWithAggregatesInput>
    NOT?: Enumerable<StoreScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
  }

  export type ProductWhereInput = {
    AND?: Enumerable<ProductWhereInput>
    OR?: Enumerable<ProductWhereInput>
    NOT?: Enumerable<ProductWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    brandId?: IntFilter | number
    brand?: XOR<BrandRelationFilter, BrandWhereInput>
    Stocks?: StocksListRelationFilter
    OrderItem?: OrderItemListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    brandId?: SortOrder
    brand?: BrandOrderByWithRelationInput
    Stocks?: StocksOrderByRelationAggregateInput
    OrderItem?: OrderItemOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = {
    id?: number
  }

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    brandId?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProductScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProductScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProductScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    brandId?: IntWithAggregatesFilter | number
  }

  export type StocksWhereInput = {
    AND?: Enumerable<StocksWhereInput>
    OR?: Enumerable<StocksWhereInput>
    NOT?: Enumerable<StocksWhereInput>
    id?: IntFilter | number
    quantity?: IntFilter | number
    productId?: IntFilter | number
    storeId?: IntFilter | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    store?: XOR<StoreRelationFilter, StoreWhereInput>
  }

  export type StocksOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    productId?: SortOrder
    storeId?: SortOrder
    product?: ProductOrderByWithRelationInput
    store?: StoreOrderByWithRelationInput
  }

  export type StocksWhereUniqueInput = {
    id?: number
  }

  export type StocksOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    productId?: SortOrder
    storeId?: SortOrder
    _count?: StocksCountOrderByAggregateInput
    _avg?: StocksAvgOrderByAggregateInput
    _max?: StocksMaxOrderByAggregateInput
    _min?: StocksMinOrderByAggregateInput
    _sum?: StocksSumOrderByAggregateInput
  }

  export type StocksScalarWhereWithAggregatesInput = {
    AND?: Enumerable<StocksScalarWhereWithAggregatesInput>
    OR?: Enumerable<StocksScalarWhereWithAggregatesInput>
    NOT?: Enumerable<StocksScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    quantity?: IntWithAggregatesFilter | number
    productId?: IntWithAggregatesFilter | number
    storeId?: IntWithAggregatesFilter | number
  }

  export type BrandWhereInput = {
    AND?: Enumerable<BrandWhereInput>
    OR?: Enumerable<BrandWhereInput>
    NOT?: Enumerable<BrandWhereInput>
    id?: IntFilter | number
    Product?: ProductListRelationFilter
  }

  export type BrandOrderByWithRelationInput = {
    id?: SortOrder
    Product?: ProductOrderByRelationAggregateInput
  }

  export type BrandWhereUniqueInput = {
    id?: number
  }

  export type BrandOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: BrandCountOrderByAggregateInput
    _avg?: BrandAvgOrderByAggregateInput
    _max?: BrandMaxOrderByAggregateInput
    _min?: BrandMinOrderByAggregateInput
    _sum?: BrandSumOrderByAggregateInput
  }

  export type BrandScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BrandScalarWhereWithAggregatesInput>
    OR?: Enumerable<BrandScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BrandScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
  }

  export type CustomerCreateInput = {
    name: string
    viewed_name?: string | null
    email: string
    Orders?: OrderCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: number
    name: string
    viewed_name?: string | null
    email: string
    Orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    viewed_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    Orders?: OrderUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    viewed_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    Orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: number
    name: string
    viewed_name?: string | null
    email: string
  }

  export type CustomerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    viewed_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    viewed_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type OrderCreateInput = {
    orderedAt: Date | string
    shippedAt: Date | string
    orderStatus: number
    customer: CustomerCreateNestedOneWithoutOrdersInput
    orderedFrom: StoreCreateNestedOneWithoutOrdersInput
    OrderItems?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    orderedAt: Date | string
    shippedAt: Date | string
    orderStatus: number
    customerId: number
    storeId: number
    OrderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    orderedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shippedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderStatus?: IntFieldUpdateOperationsInput | number
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    orderedFrom?: StoreUpdateOneRequiredWithoutOrdersNestedInput
    OrderItems?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shippedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderStatus?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
    OrderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: number
    orderedAt: Date | string
    shippedAt: Date | string
    orderStatus: number
    customerId: number
    storeId: number
  }

  export type OrderUpdateManyMutationInput = {
    orderedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shippedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderStatus?: IntFieldUpdateOperationsInput | number
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shippedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderStatus?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemCreateInput = {
    quantity: number
    discount: number
    order: OrderCreateNestedOneWithoutOrderItemsInput
    product: ProductCreateNestedOneWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: number
    quantity: number
    discount: number
    orderId: number
    productId: number
  }

  export type OrderItemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemCreateManyInput = {
    id?: number
    quantity: number
    discount: number
    orderId: number
    productId: number
  }

  export type OrderItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type StoreCreateInput = {
    Stocks?: StocksCreateNestedManyWithoutStoreInput
    orders?: OrderCreateNestedManyWithoutOrderedFromInput
  }

  export type StoreUncheckedCreateInput = {
    id?: number
    Stocks?: StocksUncheckedCreateNestedManyWithoutStoreInput
    orders?: OrderUncheckedCreateNestedManyWithoutOrderedFromInput
  }

  export type StoreUpdateInput = {
    Stocks?: StocksUpdateManyWithoutStoreNestedInput
    orders?: OrderUpdateManyWithoutOrderedFromNestedInput
  }

  export type StoreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Stocks?: StocksUncheckedUpdateManyWithoutStoreNestedInput
    orders?: OrderUncheckedUpdateManyWithoutOrderedFromNestedInput
  }

  export type StoreCreateManyInput = {
    id?: number
  }

  export type StoreUpdateManyMutationInput = {

  }

  export type StoreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCreateInput = {
    name: string
    brand: BrandCreateNestedOneWithoutProductInput
    Stocks?: StocksCreateNestedManyWithoutProductInput
    OrderItem?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    name: string
    brandId: number
    Stocks?: StocksUncheckedCreateNestedManyWithoutProductInput
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    brand?: BrandUpdateOneRequiredWithoutProductNestedInput
    Stocks?: StocksUpdateManyWithoutProductNestedInput
    OrderItem?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brandId?: IntFieldUpdateOperationsInput | number
    Stocks?: StocksUncheckedUpdateManyWithoutProductNestedInput
    OrderItem?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    name: string
    brandId: number
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brandId?: IntFieldUpdateOperationsInput | number
  }

  export type StocksCreateInput = {
    quantity: number
    product: ProductCreateNestedOneWithoutStocksInput
    store: StoreCreateNestedOneWithoutStocksInput
  }

  export type StocksUncheckedCreateInput = {
    id?: number
    quantity: number
    productId: number
    storeId: number
  }

  export type StocksUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutStocksNestedInput
    store?: StoreUpdateOneRequiredWithoutStocksNestedInput
  }

  export type StocksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
  }

  export type StocksCreateManyInput = {
    id?: number
    quantity: number
    productId: number
    storeId: number
  }

  export type StocksUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type StocksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
  }

  export type BrandCreateInput = {
    Product?: ProductCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateInput = {
    id?: number
    Product?: ProductUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandUpdateInput = {
    Product?: ProductUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Product?: ProductUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type BrandCreateManyInput = {
    id?: number
  }

  export type BrandUpdateManyMutationInput = {

  }

  export type BrandUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    viewed_name?: SortOrder
    email?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    viewed_name?: SortOrder
    email?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    viewed_name?: SortOrder
    email?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type CustomerRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type StoreRelationFilter = {
    is?: StoreWhereInput
    isNot?: StoreWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    orderedAt?: SortOrder
    shippedAt?: SortOrder
    orderStatus?: SortOrder
    customerId?: SortOrder
    storeId?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    orderStatus?: SortOrder
    customerId?: SortOrder
    storeId?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    orderedAt?: SortOrder
    shippedAt?: SortOrder
    orderStatus?: SortOrder
    customerId?: SortOrder
    storeId?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    orderedAt?: SortOrder
    shippedAt?: SortOrder
    orderStatus?: SortOrder
    customerId?: SortOrder
    storeId?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    orderStatus?: SortOrder
    customerId?: SortOrder
    storeId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type OrderRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    discount?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    discount?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    discount?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    discount?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    discount?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
  }

  export type StocksListRelationFilter = {
    every?: StocksWhereInput
    some?: StocksWhereInput
    none?: StocksWhereInput
  }

  export type StocksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoreCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StoreAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StoreMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StoreMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StoreSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BrandRelationFilter = {
    is?: BrandWhereInput
    isNot?: BrandWhereInput
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brandId?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brandId?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brandId?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
  }

  export type StocksCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    productId?: SortOrder
    storeId?: SortOrder
  }

  export type StocksAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    productId?: SortOrder
    storeId?: SortOrder
  }

  export type StocksMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    productId?: SortOrder
    storeId?: SortOrder
  }

  export type StocksMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    productId?: SortOrder
    storeId?: SortOrder
  }

  export type StocksSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    productId?: SortOrder
    storeId?: SortOrder
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BrandCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BrandAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BrandMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BrandMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BrandSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OrderCreateNestedManyWithoutCustomerInput = {
    create?: XOR<Enumerable<OrderCreateWithoutCustomerInput>, Enumerable<OrderUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutCustomerInput>
    createMany?: OrderCreateManyCustomerInputEnvelope
    connect?: Enumerable<OrderWhereUniqueInput>
  }

  export type OrderUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<Enumerable<OrderCreateWithoutCustomerInput>, Enumerable<OrderUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutCustomerInput>
    createMany?: OrderCreateManyCustomerInputEnvelope
    connect?: Enumerable<OrderWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type OrderUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<Enumerable<OrderCreateWithoutCustomerInput>, Enumerable<OrderUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutCustomerInput>
    upsert?: Enumerable<OrderUpsertWithWhereUniqueWithoutCustomerInput>
    createMany?: OrderCreateManyCustomerInputEnvelope
    set?: Enumerable<OrderWhereUniqueInput>
    disconnect?: Enumerable<OrderWhereUniqueInput>
    delete?: Enumerable<OrderWhereUniqueInput>
    connect?: Enumerable<OrderWhereUniqueInput>
    update?: Enumerable<OrderUpdateWithWhereUniqueWithoutCustomerInput>
    updateMany?: Enumerable<OrderUpdateManyWithWhereWithoutCustomerInput>
    deleteMany?: Enumerable<OrderScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<Enumerable<OrderCreateWithoutCustomerInput>, Enumerable<OrderUncheckedCreateWithoutCustomerInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutCustomerInput>
    upsert?: Enumerable<OrderUpsertWithWhereUniqueWithoutCustomerInput>
    createMany?: OrderCreateManyCustomerInputEnvelope
    set?: Enumerable<OrderWhereUniqueInput>
    disconnect?: Enumerable<OrderWhereUniqueInput>
    delete?: Enumerable<OrderWhereUniqueInput>
    connect?: Enumerable<OrderWhereUniqueInput>
    update?: Enumerable<OrderUpdateWithWhereUniqueWithoutCustomerInput>
    updateMany?: Enumerable<OrderUpdateManyWithWhereWithoutCustomerInput>
    deleteMany?: Enumerable<OrderScalarWhereInput>
  }

  export type CustomerCreateNestedOneWithoutOrdersInput = {
    create?: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput
    connect?: CustomerWhereUniqueInput
  }

  export type StoreCreateNestedOneWithoutOrdersInput = {
    create?: XOR<StoreCreateWithoutOrdersInput, StoreUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: StoreCreateOrConnectWithoutOrdersInput
    connect?: StoreWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutOrderInput>, Enumerable<OrderItemUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutOrderInput>
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: Enumerable<OrderItemWhereUniqueInput>
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutOrderInput>, Enumerable<OrderItemUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutOrderInput>
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: Enumerable<OrderItemWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CustomerUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput
    upsert?: CustomerUpsertWithoutOrdersInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<CustomerUpdateWithoutOrdersInput, CustomerUncheckedUpdateWithoutOrdersInput>
  }

  export type StoreUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<StoreCreateWithoutOrdersInput, StoreUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: StoreCreateOrConnectWithoutOrdersInput
    upsert?: StoreUpsertWithoutOrdersInput
    connect?: StoreWhereUniqueInput
    update?: XOR<StoreUpdateWithoutOrdersInput, StoreUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutOrderInput>, Enumerable<OrderItemUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutOrderInput>
    upsert?: Enumerable<OrderItemUpsertWithWhereUniqueWithoutOrderInput>
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: Enumerable<OrderItemWhereUniqueInput>
    disconnect?: Enumerable<OrderItemWhereUniqueInput>
    delete?: Enumerable<OrderItemWhereUniqueInput>
    connect?: Enumerable<OrderItemWhereUniqueInput>
    update?: Enumerable<OrderItemUpdateWithWhereUniqueWithoutOrderInput>
    updateMany?: Enumerable<OrderItemUpdateManyWithWhereWithoutOrderInput>
    deleteMany?: Enumerable<OrderItemScalarWhereInput>
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutOrderInput>, Enumerable<OrderItemUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutOrderInput>
    upsert?: Enumerable<OrderItemUpsertWithWhereUniqueWithoutOrderInput>
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: Enumerable<OrderItemWhereUniqueInput>
    disconnect?: Enumerable<OrderItemWhereUniqueInput>
    delete?: Enumerable<OrderItemWhereUniqueInput>
    connect?: Enumerable<OrderItemWhereUniqueInput>
    update?: Enumerable<OrderItemUpdateWithWhereUniqueWithoutOrderInput>
    updateMany?: Enumerable<OrderItemUpdateManyWithWhereWithoutOrderInput>
    deleteMany?: Enumerable<OrderItemScalarWhereInput>
  }

  export type OrderCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutOrderItemInput = {
    create?: XOR<ProductCreateWithoutOrderItemInput, ProductUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemInput
    connect?: ProductWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput
    upsert?: OrderUpsertWithoutOrderItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutOrderItemNestedInput = {
    create?: XOR<ProductCreateWithoutOrderItemInput, ProductUncheckedCreateWithoutOrderItemInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemInput
    upsert?: ProductUpsertWithoutOrderItemInput
    connect?: ProductWhereUniqueInput
    update?: XOR<ProductUpdateWithoutOrderItemInput, ProductUncheckedUpdateWithoutOrderItemInput>
  }

  export type StocksCreateNestedManyWithoutStoreInput = {
    create?: XOR<Enumerable<StocksCreateWithoutStoreInput>, Enumerable<StocksUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<StocksCreateOrConnectWithoutStoreInput>
    createMany?: StocksCreateManyStoreInputEnvelope
    connect?: Enumerable<StocksWhereUniqueInput>
  }

  export type OrderCreateNestedManyWithoutOrderedFromInput = {
    create?: XOR<Enumerable<OrderCreateWithoutOrderedFromInput>, Enumerable<OrderUncheckedCreateWithoutOrderedFromInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutOrderedFromInput>
    createMany?: OrderCreateManyOrderedFromInputEnvelope
    connect?: Enumerable<OrderWhereUniqueInput>
  }

  export type StocksUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<Enumerable<StocksCreateWithoutStoreInput>, Enumerable<StocksUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<StocksCreateOrConnectWithoutStoreInput>
    createMany?: StocksCreateManyStoreInputEnvelope
    connect?: Enumerable<StocksWhereUniqueInput>
  }

  export type OrderUncheckedCreateNestedManyWithoutOrderedFromInput = {
    create?: XOR<Enumerable<OrderCreateWithoutOrderedFromInput>, Enumerable<OrderUncheckedCreateWithoutOrderedFromInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutOrderedFromInput>
    createMany?: OrderCreateManyOrderedFromInputEnvelope
    connect?: Enumerable<OrderWhereUniqueInput>
  }

  export type StocksUpdateManyWithoutStoreNestedInput = {
    create?: XOR<Enumerable<StocksCreateWithoutStoreInput>, Enumerable<StocksUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<StocksCreateOrConnectWithoutStoreInput>
    upsert?: Enumerable<StocksUpsertWithWhereUniqueWithoutStoreInput>
    createMany?: StocksCreateManyStoreInputEnvelope
    set?: Enumerable<StocksWhereUniqueInput>
    disconnect?: Enumerable<StocksWhereUniqueInput>
    delete?: Enumerable<StocksWhereUniqueInput>
    connect?: Enumerable<StocksWhereUniqueInput>
    update?: Enumerable<StocksUpdateWithWhereUniqueWithoutStoreInput>
    updateMany?: Enumerable<StocksUpdateManyWithWhereWithoutStoreInput>
    deleteMany?: Enumerable<StocksScalarWhereInput>
  }

  export type OrderUpdateManyWithoutOrderedFromNestedInput = {
    create?: XOR<Enumerable<OrderCreateWithoutOrderedFromInput>, Enumerable<OrderUncheckedCreateWithoutOrderedFromInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutOrderedFromInput>
    upsert?: Enumerable<OrderUpsertWithWhereUniqueWithoutOrderedFromInput>
    createMany?: OrderCreateManyOrderedFromInputEnvelope
    set?: Enumerable<OrderWhereUniqueInput>
    disconnect?: Enumerable<OrderWhereUniqueInput>
    delete?: Enumerable<OrderWhereUniqueInput>
    connect?: Enumerable<OrderWhereUniqueInput>
    update?: Enumerable<OrderUpdateWithWhereUniqueWithoutOrderedFromInput>
    updateMany?: Enumerable<OrderUpdateManyWithWhereWithoutOrderedFromInput>
    deleteMany?: Enumerable<OrderScalarWhereInput>
  }

  export type StocksUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<Enumerable<StocksCreateWithoutStoreInput>, Enumerable<StocksUncheckedCreateWithoutStoreInput>>
    connectOrCreate?: Enumerable<StocksCreateOrConnectWithoutStoreInput>
    upsert?: Enumerable<StocksUpsertWithWhereUniqueWithoutStoreInput>
    createMany?: StocksCreateManyStoreInputEnvelope
    set?: Enumerable<StocksWhereUniqueInput>
    disconnect?: Enumerable<StocksWhereUniqueInput>
    delete?: Enumerable<StocksWhereUniqueInput>
    connect?: Enumerable<StocksWhereUniqueInput>
    update?: Enumerable<StocksUpdateWithWhereUniqueWithoutStoreInput>
    updateMany?: Enumerable<StocksUpdateManyWithWhereWithoutStoreInput>
    deleteMany?: Enumerable<StocksScalarWhereInput>
  }

  export type OrderUncheckedUpdateManyWithoutOrderedFromNestedInput = {
    create?: XOR<Enumerable<OrderCreateWithoutOrderedFromInput>, Enumerable<OrderUncheckedCreateWithoutOrderedFromInput>>
    connectOrCreate?: Enumerable<OrderCreateOrConnectWithoutOrderedFromInput>
    upsert?: Enumerable<OrderUpsertWithWhereUniqueWithoutOrderedFromInput>
    createMany?: OrderCreateManyOrderedFromInputEnvelope
    set?: Enumerable<OrderWhereUniqueInput>
    disconnect?: Enumerable<OrderWhereUniqueInput>
    delete?: Enumerable<OrderWhereUniqueInput>
    connect?: Enumerable<OrderWhereUniqueInput>
    update?: Enumerable<OrderUpdateWithWhereUniqueWithoutOrderedFromInput>
    updateMany?: Enumerable<OrderUpdateManyWithWhereWithoutOrderedFromInput>
    deleteMany?: Enumerable<OrderScalarWhereInput>
  }

  export type BrandCreateNestedOneWithoutProductInput = {
    create?: XOR<BrandCreateWithoutProductInput, BrandUncheckedCreateWithoutProductInput>
    connectOrCreate?: BrandCreateOrConnectWithoutProductInput
    connect?: BrandWhereUniqueInput
  }

  export type StocksCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<StocksCreateWithoutProductInput>, Enumerable<StocksUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<StocksCreateOrConnectWithoutProductInput>
    createMany?: StocksCreateManyProductInputEnvelope
    connect?: Enumerable<StocksWhereUniqueInput>
  }

  export type OrderItemCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutProductInput>, Enumerable<OrderItemUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutProductInput>
    createMany?: OrderItemCreateManyProductInputEnvelope
    connect?: Enumerable<OrderItemWhereUniqueInput>
  }

  export type StocksUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<StocksCreateWithoutProductInput>, Enumerable<StocksUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<StocksCreateOrConnectWithoutProductInput>
    createMany?: StocksCreateManyProductInputEnvelope
    connect?: Enumerable<StocksWhereUniqueInput>
  }

  export type OrderItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutProductInput>, Enumerable<OrderItemUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutProductInput>
    createMany?: OrderItemCreateManyProductInputEnvelope
    connect?: Enumerable<OrderItemWhereUniqueInput>
  }

  export type BrandUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<BrandCreateWithoutProductInput, BrandUncheckedCreateWithoutProductInput>
    connectOrCreate?: BrandCreateOrConnectWithoutProductInput
    upsert?: BrandUpsertWithoutProductInput
    connect?: BrandWhereUniqueInput
    update?: XOR<BrandUpdateWithoutProductInput, BrandUncheckedUpdateWithoutProductInput>
  }

  export type StocksUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<StocksCreateWithoutProductInput>, Enumerable<StocksUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<StocksCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<StocksUpsertWithWhereUniqueWithoutProductInput>
    createMany?: StocksCreateManyProductInputEnvelope
    set?: Enumerable<StocksWhereUniqueInput>
    disconnect?: Enumerable<StocksWhereUniqueInput>
    delete?: Enumerable<StocksWhereUniqueInput>
    connect?: Enumerable<StocksWhereUniqueInput>
    update?: Enumerable<StocksUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<StocksUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<StocksScalarWhereInput>
  }

  export type OrderItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutProductInput>, Enumerable<OrderItemUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<OrderItemUpsertWithWhereUniqueWithoutProductInput>
    createMany?: OrderItemCreateManyProductInputEnvelope
    set?: Enumerable<OrderItemWhereUniqueInput>
    disconnect?: Enumerable<OrderItemWhereUniqueInput>
    delete?: Enumerable<OrderItemWhereUniqueInput>
    connect?: Enumerable<OrderItemWhereUniqueInput>
    update?: Enumerable<OrderItemUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<OrderItemUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<OrderItemScalarWhereInput>
  }

  export type StocksUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<StocksCreateWithoutProductInput>, Enumerable<StocksUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<StocksCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<StocksUpsertWithWhereUniqueWithoutProductInput>
    createMany?: StocksCreateManyProductInputEnvelope
    set?: Enumerable<StocksWhereUniqueInput>
    disconnect?: Enumerable<StocksWhereUniqueInput>
    delete?: Enumerable<StocksWhereUniqueInput>
    connect?: Enumerable<StocksWhereUniqueInput>
    update?: Enumerable<StocksUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<StocksUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<StocksScalarWhereInput>
  }

  export type OrderItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<OrderItemCreateWithoutProductInput>, Enumerable<OrderItemUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<OrderItemCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<OrderItemUpsertWithWhereUniqueWithoutProductInput>
    createMany?: OrderItemCreateManyProductInputEnvelope
    set?: Enumerable<OrderItemWhereUniqueInput>
    disconnect?: Enumerable<OrderItemWhereUniqueInput>
    delete?: Enumerable<OrderItemWhereUniqueInput>
    connect?: Enumerable<OrderItemWhereUniqueInput>
    update?: Enumerable<OrderItemUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<OrderItemUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<OrderItemScalarWhereInput>
  }

  export type ProductCreateNestedOneWithoutStocksInput = {
    create?: XOR<ProductCreateWithoutStocksInput, ProductUncheckedCreateWithoutStocksInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStocksInput
    connect?: ProductWhereUniqueInput
  }

  export type StoreCreateNestedOneWithoutStocksInput = {
    create?: XOR<StoreCreateWithoutStocksInput, StoreUncheckedCreateWithoutStocksInput>
    connectOrCreate?: StoreCreateOrConnectWithoutStocksInput
    connect?: StoreWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutStocksNestedInput = {
    create?: XOR<ProductCreateWithoutStocksInput, ProductUncheckedCreateWithoutStocksInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStocksInput
    upsert?: ProductUpsertWithoutStocksInput
    connect?: ProductWhereUniqueInput
    update?: XOR<ProductUpdateWithoutStocksInput, ProductUncheckedUpdateWithoutStocksInput>
  }

  export type StoreUpdateOneRequiredWithoutStocksNestedInput = {
    create?: XOR<StoreCreateWithoutStocksInput, StoreUncheckedCreateWithoutStocksInput>
    connectOrCreate?: StoreCreateOrConnectWithoutStocksInput
    upsert?: StoreUpsertWithoutStocksInput
    connect?: StoreWhereUniqueInput
    update?: XOR<StoreUpdateWithoutStocksInput, StoreUncheckedUpdateWithoutStocksInput>
  }

  export type ProductCreateNestedManyWithoutBrandInput = {
    create?: XOR<Enumerable<ProductCreateWithoutBrandInput>, Enumerable<ProductUncheckedCreateWithoutBrandInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutBrandInput>
    createMany?: ProductCreateManyBrandInputEnvelope
    connect?: Enumerable<ProductWhereUniqueInput>
  }

  export type ProductUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<Enumerable<ProductCreateWithoutBrandInput>, Enumerable<ProductUncheckedCreateWithoutBrandInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutBrandInput>
    createMany?: ProductCreateManyBrandInputEnvelope
    connect?: Enumerable<ProductWhereUniqueInput>
  }

  export type ProductUpdateManyWithoutBrandNestedInput = {
    create?: XOR<Enumerable<ProductCreateWithoutBrandInput>, Enumerable<ProductUncheckedCreateWithoutBrandInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutBrandInput>
    upsert?: Enumerable<ProductUpsertWithWhereUniqueWithoutBrandInput>
    createMany?: ProductCreateManyBrandInputEnvelope
    set?: Enumerable<ProductWhereUniqueInput>
    disconnect?: Enumerable<ProductWhereUniqueInput>
    delete?: Enumerable<ProductWhereUniqueInput>
    connect?: Enumerable<ProductWhereUniqueInput>
    update?: Enumerable<ProductUpdateWithWhereUniqueWithoutBrandInput>
    updateMany?: Enumerable<ProductUpdateManyWithWhereWithoutBrandInput>
    deleteMany?: Enumerable<ProductScalarWhereInput>
  }

  export type ProductUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<Enumerable<ProductCreateWithoutBrandInput>, Enumerable<ProductUncheckedCreateWithoutBrandInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutBrandInput>
    upsert?: Enumerable<ProductUpsertWithWhereUniqueWithoutBrandInput>
    createMany?: ProductCreateManyBrandInputEnvelope
    set?: Enumerable<ProductWhereUniqueInput>
    disconnect?: Enumerable<ProductWhereUniqueInput>
    delete?: Enumerable<ProductWhereUniqueInput>
    connect?: Enumerable<ProductWhereUniqueInput>
    update?: Enumerable<ProductUpdateWithWhereUniqueWithoutBrandInput>
    updateMany?: Enumerable<ProductUpdateManyWithWhereWithoutBrandInput>
    deleteMany?: Enumerable<ProductScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type OrderCreateWithoutCustomerInput = {
    orderedAt: Date | string
    shippedAt: Date | string
    orderStatus: number
    orderedFrom: StoreCreateNestedOneWithoutOrdersInput
    OrderItems?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutCustomerInput = {
    id?: number
    orderedAt: Date | string
    shippedAt: Date | string
    orderStatus: number
    storeId: number
    OrderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput>
  }

  export type OrderCreateManyCustomerInputEnvelope = {
    data: Enumerable<OrderCreateManyCustomerInput>
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutCustomerInput, OrderUncheckedUpdateWithoutCustomerInput>
    create: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutCustomerInput, OrderUncheckedUpdateWithoutCustomerInput>
  }

  export type OrderUpdateManyWithWhereWithoutCustomerInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutOrdersInput>
  }

  export type OrderScalarWhereInput = {
    AND?: Enumerable<OrderScalarWhereInput>
    OR?: Enumerable<OrderScalarWhereInput>
    NOT?: Enumerable<OrderScalarWhereInput>
    id?: IntFilter | number
    orderedAt?: DateTimeFilter | Date | string
    shippedAt?: DateTimeFilter | Date | string
    orderStatus?: IntFilter | number
    customerId?: IntFilter | number
    storeId?: IntFilter | number
  }

  export type CustomerCreateWithoutOrdersInput = {
    name: string
    viewed_name?: string | null
    email: string
  }

  export type CustomerUncheckedCreateWithoutOrdersInput = {
    id?: number
    name: string
    viewed_name?: string | null
    email: string
  }

  export type CustomerCreateOrConnectWithoutOrdersInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
  }

  export type StoreCreateWithoutOrdersInput = {
    Stocks?: StocksCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutOrdersInput = {
    id?: number
    Stocks?: StocksUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutOrdersInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutOrdersInput, StoreUncheckedCreateWithoutOrdersInput>
  }

  export type OrderItemCreateWithoutOrderInput = {
    quantity: number
    discount: number
    product: ProductCreateNestedOneWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: number
    quantity: number
    discount: number
    productId: number
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: Enumerable<OrderItemCreateManyOrderInput>
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutOrdersInput = {
    update: XOR<CustomerUpdateWithoutOrdersInput, CustomerUncheckedUpdateWithoutOrdersInput>
    create: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
  }

  export type CustomerUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    viewed_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    viewed_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type StoreUpsertWithoutOrdersInput = {
    update: XOR<StoreUpdateWithoutOrdersInput, StoreUncheckedUpdateWithoutOrdersInput>
    create: XOR<StoreCreateWithoutOrdersInput, StoreUncheckedCreateWithoutOrdersInput>
  }

  export type StoreUpdateWithoutOrdersInput = {
    Stocks?: StocksUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    Stocks?: StocksUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderItemsInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: Enumerable<OrderItemScalarWhereInput>
    OR?: Enumerable<OrderItemScalarWhereInput>
    NOT?: Enumerable<OrderItemScalarWhereInput>
    id?: IntFilter | number
    quantity?: IntFilter | number
    discount?: IntFilter | number
    orderId?: IntFilter | number
    productId?: IntFilter | number
  }

  export type OrderCreateWithoutOrderItemsInput = {
    orderedAt: Date | string
    shippedAt: Date | string
    orderStatus: number
    customer: CustomerCreateNestedOneWithoutOrdersInput
    orderedFrom: StoreCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutOrderItemsInput = {
    id?: number
    orderedAt: Date | string
    shippedAt: Date | string
    orderStatus: number
    customerId: number
    storeId: number
  }

  export type OrderCreateOrConnectWithoutOrderItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
  }

  export type ProductCreateWithoutOrderItemInput = {
    name: string
    brand: BrandCreateNestedOneWithoutProductInput
    Stocks?: StocksCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOrderItemInput = {
    id?: number
    name: string
    brandId: number
    Stocks?: StocksUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOrderItemInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrderItemInput, ProductUncheckedCreateWithoutOrderItemInput>
  }

  export type OrderUpsertWithoutOrderItemsInput = {
    update: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
  }

  export type OrderUpdateWithoutOrderItemsInput = {
    orderedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shippedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderStatus?: IntFieldUpdateOperationsInput | number
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    orderedFrom?: StoreUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shippedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderStatus?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductUpsertWithoutOrderItemInput = {
    update: XOR<ProductUpdateWithoutOrderItemInput, ProductUncheckedUpdateWithoutOrderItemInput>
    create: XOR<ProductCreateWithoutOrderItemInput, ProductUncheckedCreateWithoutOrderItemInput>
  }

  export type ProductUpdateWithoutOrderItemInput = {
    name?: StringFieldUpdateOperationsInput | string
    brand?: BrandUpdateOneRequiredWithoutProductNestedInput
    Stocks?: StocksUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOrderItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brandId?: IntFieldUpdateOperationsInput | number
    Stocks?: StocksUncheckedUpdateManyWithoutProductNestedInput
  }

  export type StocksCreateWithoutStoreInput = {
    quantity: number
    product: ProductCreateNestedOneWithoutStocksInput
  }

  export type StocksUncheckedCreateWithoutStoreInput = {
    id?: number
    quantity: number
    productId: number
  }

  export type StocksCreateOrConnectWithoutStoreInput = {
    where: StocksWhereUniqueInput
    create: XOR<StocksCreateWithoutStoreInput, StocksUncheckedCreateWithoutStoreInput>
  }

  export type StocksCreateManyStoreInputEnvelope = {
    data: Enumerable<StocksCreateManyStoreInput>
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutOrderedFromInput = {
    orderedAt: Date | string
    shippedAt: Date | string
    orderStatus: number
    customer: CustomerCreateNestedOneWithoutOrdersInput
    OrderItems?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutOrderedFromInput = {
    id?: number
    orderedAt: Date | string
    shippedAt: Date | string
    orderStatus: number
    customerId: number
    OrderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutOrderedFromInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderedFromInput, OrderUncheckedCreateWithoutOrderedFromInput>
  }

  export type OrderCreateManyOrderedFromInputEnvelope = {
    data: Enumerable<OrderCreateManyOrderedFromInput>
    skipDuplicates?: boolean
  }

  export type StocksUpsertWithWhereUniqueWithoutStoreInput = {
    where: StocksWhereUniqueInput
    update: XOR<StocksUpdateWithoutStoreInput, StocksUncheckedUpdateWithoutStoreInput>
    create: XOR<StocksCreateWithoutStoreInput, StocksUncheckedCreateWithoutStoreInput>
  }

  export type StocksUpdateWithWhereUniqueWithoutStoreInput = {
    where: StocksWhereUniqueInput
    data: XOR<StocksUpdateWithoutStoreInput, StocksUncheckedUpdateWithoutStoreInput>
  }

  export type StocksUpdateManyWithWhereWithoutStoreInput = {
    where: StocksScalarWhereInput
    data: XOR<StocksUpdateManyMutationInput, StocksUncheckedUpdateManyWithoutStocksInput>
  }

  export type StocksScalarWhereInput = {
    AND?: Enumerable<StocksScalarWhereInput>
    OR?: Enumerable<StocksScalarWhereInput>
    NOT?: Enumerable<StocksScalarWhereInput>
    id?: IntFilter | number
    quantity?: IntFilter | number
    productId?: IntFilter | number
    storeId?: IntFilter | number
  }

  export type OrderUpsertWithWhereUniqueWithoutOrderedFromInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutOrderedFromInput, OrderUncheckedUpdateWithoutOrderedFromInput>
    create: XOR<OrderCreateWithoutOrderedFromInput, OrderUncheckedCreateWithoutOrderedFromInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutOrderedFromInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutOrderedFromInput, OrderUncheckedUpdateWithoutOrderedFromInput>
  }

  export type OrderUpdateManyWithWhereWithoutOrderedFromInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutOrdersInput>
  }

  export type BrandCreateWithoutProductInput = {

  }

  export type BrandUncheckedCreateWithoutProductInput = {
    id?: number
  }

  export type BrandCreateOrConnectWithoutProductInput = {
    where: BrandWhereUniqueInput
    create: XOR<BrandCreateWithoutProductInput, BrandUncheckedCreateWithoutProductInput>
  }

  export type StocksCreateWithoutProductInput = {
    quantity: number
    store: StoreCreateNestedOneWithoutStocksInput
  }

  export type StocksUncheckedCreateWithoutProductInput = {
    id?: number
    quantity: number
    storeId: number
  }

  export type StocksCreateOrConnectWithoutProductInput = {
    where: StocksWhereUniqueInput
    create: XOR<StocksCreateWithoutProductInput, StocksUncheckedCreateWithoutProductInput>
  }

  export type StocksCreateManyProductInputEnvelope = {
    data: Enumerable<StocksCreateManyProductInput>
    skipDuplicates?: boolean
  }

  export type OrderItemCreateWithoutProductInput = {
    quantity: number
    discount: number
    order: OrderCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutProductInput = {
    id?: number
    quantity: number
    discount: number
    orderId: number
  }

  export type OrderItemCreateOrConnectWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
  }

  export type OrderItemCreateManyProductInputEnvelope = {
    data: Enumerable<OrderItemCreateManyProductInput>
    skipDuplicates?: boolean
  }

  export type BrandUpsertWithoutProductInput = {
    update: XOR<BrandUpdateWithoutProductInput, BrandUncheckedUpdateWithoutProductInput>
    create: XOR<BrandCreateWithoutProductInput, BrandUncheckedCreateWithoutProductInput>
  }

  export type BrandUpdateWithoutProductInput = {

  }

  export type BrandUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type StocksUpsertWithWhereUniqueWithoutProductInput = {
    where: StocksWhereUniqueInput
    update: XOR<StocksUpdateWithoutProductInput, StocksUncheckedUpdateWithoutProductInput>
    create: XOR<StocksCreateWithoutProductInput, StocksUncheckedCreateWithoutProductInput>
  }

  export type StocksUpdateWithWhereUniqueWithoutProductInput = {
    where: StocksWhereUniqueInput
    data: XOR<StocksUpdateWithoutProductInput, StocksUncheckedUpdateWithoutProductInput>
  }

  export type StocksUpdateManyWithWhereWithoutProductInput = {
    where: StocksScalarWhereInput
    data: XOR<StocksUpdateManyMutationInput, StocksUncheckedUpdateManyWithoutStocksInput>
  }

  export type OrderItemUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutProductInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderItemInput>
  }

  export type ProductCreateWithoutStocksInput = {
    name: string
    brand: BrandCreateNestedOneWithoutProductInput
    OrderItem?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutStocksInput = {
    id?: number
    name: string
    brandId: number
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutStocksInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutStocksInput, ProductUncheckedCreateWithoutStocksInput>
  }

  export type StoreCreateWithoutStocksInput = {
    orders?: OrderCreateNestedManyWithoutOrderedFromInput
  }

  export type StoreUncheckedCreateWithoutStocksInput = {
    id?: number
    orders?: OrderUncheckedCreateNestedManyWithoutOrderedFromInput
  }

  export type StoreCreateOrConnectWithoutStocksInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutStocksInput, StoreUncheckedCreateWithoutStocksInput>
  }

  export type ProductUpsertWithoutStocksInput = {
    update: XOR<ProductUpdateWithoutStocksInput, ProductUncheckedUpdateWithoutStocksInput>
    create: XOR<ProductCreateWithoutStocksInput, ProductUncheckedCreateWithoutStocksInput>
  }

  export type ProductUpdateWithoutStocksInput = {
    name?: StringFieldUpdateOperationsInput | string
    brand?: BrandUpdateOneRequiredWithoutProductNestedInput
    OrderItem?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutStocksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brandId?: IntFieldUpdateOperationsInput | number
    OrderItem?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type StoreUpsertWithoutStocksInput = {
    update: XOR<StoreUpdateWithoutStocksInput, StoreUncheckedUpdateWithoutStocksInput>
    create: XOR<StoreCreateWithoutStocksInput, StoreUncheckedCreateWithoutStocksInput>
  }

  export type StoreUpdateWithoutStocksInput = {
    orders?: OrderUpdateManyWithoutOrderedFromNestedInput
  }

  export type StoreUncheckedUpdateWithoutStocksInput = {
    id?: IntFieldUpdateOperationsInput | number
    orders?: OrderUncheckedUpdateManyWithoutOrderedFromNestedInput
  }

  export type ProductCreateWithoutBrandInput = {
    name: string
    Stocks?: StocksCreateNestedManyWithoutProductInput
    OrderItem?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutBrandInput = {
    id?: number
    name: string
    Stocks?: StocksUncheckedCreateNestedManyWithoutProductInput
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutBrandInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput>
  }

  export type ProductCreateManyBrandInputEnvelope = {
    data: Enumerable<ProductCreateManyBrandInput>
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutBrandInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutBrandInput, ProductUncheckedUpdateWithoutBrandInput>
    create: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutBrandInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutBrandInput, ProductUncheckedUpdateWithoutBrandInput>
  }

  export type ProductUpdateManyWithWhereWithoutBrandInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductScalarWhereInput = {
    AND?: Enumerable<ProductScalarWhereInput>
    OR?: Enumerable<ProductScalarWhereInput>
    NOT?: Enumerable<ProductScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    brandId?: IntFilter | number
  }

  export type OrderCreateManyCustomerInput = {
    id?: number
    orderedAt: Date | string
    shippedAt: Date | string
    orderStatus: number
    storeId: number
  }

  export type OrderUpdateWithoutCustomerInput = {
    orderedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shippedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderStatus?: IntFieldUpdateOperationsInput | number
    orderedFrom?: StoreUpdateOneRequiredWithoutOrdersNestedInput
    OrderItems?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shippedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderStatus?: IntFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
    OrderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shippedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderStatus?: IntFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemCreateManyOrderInput = {
    id?: number
    quantity: number
    discount: number
    productId: number
  }

  export type OrderItemUpdateWithoutOrderInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type StocksCreateManyStoreInput = {
    id?: number
    quantity: number
    productId: number
  }

  export type OrderCreateManyOrderedFromInput = {
    id?: number
    orderedAt: Date | string
    shippedAt: Date | string
    orderStatus: number
    customerId: number
  }

  export type StocksUpdateWithoutStoreInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutStocksNestedInput
  }

  export type StocksUncheckedUpdateWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type StocksUncheckedUpdateManyWithoutStocksInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderUpdateWithoutOrderedFromInput = {
    orderedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shippedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderStatus?: IntFieldUpdateOperationsInput | number
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    OrderItems?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderedFromInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shippedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderStatus?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    OrderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type StocksCreateManyProductInput = {
    id?: number
    quantity: number
    storeId: number
  }

  export type OrderItemCreateManyProductInput = {
    id?: number
    quantity: number
    discount: number
    orderId: number
  }

  export type StocksUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    store?: StoreUpdateOneRequiredWithoutStocksNestedInput
  }

  export type StocksUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCreateManyBrandInput = {
    id?: number
    name: string
  }

  export type ProductUpdateWithoutBrandInput = {
    name?: StringFieldUpdateOperationsInput | string
    Stocks?: StocksUpdateManyWithoutProductNestedInput
    OrderItem?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Stocks?: StocksUncheckedUpdateManyWithoutProductNestedInput
    OrderItem?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
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