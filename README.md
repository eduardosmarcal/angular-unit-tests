# Angular Unit Tests

## fdescribe

**focused** describe. If it exists, jasmine _will run only_ `fdescribe` spec and ignore other type of describe (`describe` and `xdescribe`).


## xdescribe

**disabled** describe. It _will never_ be executed.

## fit

**focused** it. Same rules as `fdescribe`.

## xit

**disabled** it. Same rules as `xdescribe`.

## Executing a single test file

```shell
ng test --include **/<spec-filename>
```

## Code coverage

```shell
ng test --code-coverage
```
