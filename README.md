# Why Typescript
  + JavaScript, with guardrails
  + Can adapt JavaScript updates
  + Detect more errors at during development
  + Enhanced tooling
  + Solid and reliable

# Installation
+ NodeJS (LTS build)

# Build 
+	Build fix: https://backbencher.dev/articles/typescript-solved-cannot-redeclare-block-scoped-variable-name
## Manual build
+ npx --package typescript tsc --outDir dist index.ts
## Normal build
+ npm init -y (package.json created)
+ npm install typescript --save-dev

# Built-in types 
+ string
+ number
+ boolean
+ array

# Additional built-in types
+ Undefined
+ Null
+ Any
+ Void
+ (union type)

# Regular Enums vs Const Enums
+ Regular Enums returns Enum value
+ Const Enums returns position of that Enum, cannot convert this position to value

# Functions
+ Typed parameters
+ Defining functions
  + Hoisted/function declaration can be used any where
  + Function expression must be used after declaration
+ Return values
+ Async/Await
+ Optional parameters (name?:string)
+ Arrow Functions
  + Ideal for inner functions
+ Default Parameters
+ Rest parameters (…restParameters:string[])
+ Parameters destructuring
  + Can pass the properties of type as a parameter

# Interface
+ Define a code contract
+ Define the shape of data
+ Define what type of object a function returns
+ Define what type of object a function expects
+ Define the type of a variable
+ Drive consistency

# Interface vs Type
+ Interface represent object-like data structure
+ Type represent primitive type and object-like data structure

# Class
+ A class encapsulates data and code. It acts as a template that can be used to create object instances.
+ Using public/private in constructor will auto implement properties.
  + constructor(public id: number, public name: string, public icon: string) {}
+ Inside class no need to use function keyword.
+ Cannot create object instances from abstract class.
